import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { createStripeClient, type StripeEnv } from "../_shared/stripe.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const {
      priceId,
      quantity,
      customerEmail,
      userId,
      treatmentCategory,
      returnUrl,
      environment,
    } = await req.json();

    if (!priceId || typeof priceId !== "string" || !/^[a-zA-Z0-9_-]+$/.test(priceId)) {
      return new Response(JSON.stringify({ error: "Invalid priceId" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const env = (environment || "sandbox") as StripeEnv;
    const stripe = createStripeClient(env);

    const prices = await stripe.prices.list({ lookup_keys: [priceId] });
    if (!prices.data.length) {
      return new Response(JSON.stringify({ error: "Price not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const stripePrice = prices.data[0];
    const isRecurring = stripePrice.type === "recurring";

    // Auto-apply couples discount if patient is linked to a partner
    let discounts: { coupon: string }[] | undefined;
    if (userId && isRecurring) {
      const { data: patient } = await supabase
        .from("patients")
        .select("couples_discount_active")
        .eq("user_id", userId)
        .maybeSingle();
      if (patient?.couples_discount_active) {
        try {
          // Use a stable coupon id; create on first use
          const couponId = "couples15";
          try {
            await stripe.coupons.retrieve(couponId);
          } catch {
            await stripe.coupons.create({
              id: couponId,
              percent_off: 15,
              duration: "forever",
              name: "Couples 15% off",
            });
          }
          discounts = [{ coupon: couponId }];
        } catch (e) {
          console.error("coupon apply failed", e);
        }
      }
    }

    const metadata: Record<string, string> = {};
    if (userId) metadata.userId = userId;
    if (treatmentCategory) metadata.treatmentCategory = treatmentCategory;
    if (priceId) metadata.priceId = priceId;

    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: stripePrice.id, quantity: quantity || 1 }],
      mode: isRecurring ? "subscription" : "payment",
      ui_mode: "embedded",
      return_url:
        returnUrl ||
        `${req.headers.get("origin")}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
      ...(customerEmail && { customer_email: customerEmail }),
      ...(discounts && { discounts }),
      metadata,
      ...(isRecurring && {
        subscription_data: { metadata },
      }),
    });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
