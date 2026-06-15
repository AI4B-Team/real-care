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
    // Require authentication
    const authHeader = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: { user }, error: authError } = await supabase.auth.getUser(authHeader);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const {
      priceId,
      quantity,
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

    // Derive identity from verified session — never trust the body
    const userId = user.id;
    const customerEmail = user.email;

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

    // Server-side couples-discount validation: requires a confirmed, distinct, mutually-linked partner
    let discounts: { coupon: string }[] | undefined;
    if (isRecurring) {
      const { data: patient } = await supabase
        .from("patients")
        .select("id, couples_discount_active, partner_patient_id")
        .eq("user_id", userId)
        .maybeSingle();

      if (
        patient?.couples_discount_active &&
        patient.partner_patient_id &&
        patient.partner_patient_id !== patient.id
      ) {
        const { data: partner } = await supabase
          .from("patients")
          .select("id, partner_patient_id, couples_discount_active")
          .eq("id", patient.partner_patient_id)
          .maybeSingle();

        const mutual =
          partner &&
          partner.partner_patient_id === patient.id &&
          partner.couples_discount_active === true;

        if (mutual) {
          try {
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
    }

    const metadata: Record<string, string> = { userId };
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
    console.error("[create-checkout] error:", e);
    return new Response(
      JSON.stringify({ error: "An internal error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
