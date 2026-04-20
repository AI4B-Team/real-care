import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { verifyWebhook, type StripeEnv } from "../_shared/stripe.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// Map Stripe price lookup_keys -> internal treatment_category
const PRICE_TO_CATEGORY: Record<string, string> = {
  weight_loss_glp1_monthly: "weight_loss",
  weight_loss_oral_monthly: "weight_loss",
  trt_monthly: "trt",
  ed_treatment_monthly: "ed",
  hair_mens_monthly: "hair",
  hair_womens_monthly: "hair",
  peptides_monthly: "peptides",
  mental_health_monthly: "mental_health",
  sleep_monthly: "sleep",
  menopause_hrt_monthly: "menopause",
  skincare_monthly: "skincare",
  sexual_health_womens_monthly: "sexual_health",
  birth_control_monthly: "birth_control",
  supplements_monthly: "supplements",
  lab_testing_one_time: "lab_testing",
};

serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const url = new URL(req.url);
  const env = (url.searchParams.get("env") || "sandbox") as StripeEnv;

  try {
    const event = await verifyWebhook(req, env);
    console.log("Webhook event:", event.type, "env:", env);

    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object, env);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
        await handleSubscriptionUpsert(event.data.object, env);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object, env);
        break;
      default:
        console.log("Unhandled:", event.type);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response("Webhook error", { status: 400 });
  }
});

async function getPatientId(userId: string): Promise<string | null> {
  const { data } = await supabase
    .from("patients")
    .select("id")
    .eq("user_id", userId)
    .maybeSingle();
  return data?.id ?? null;
}

async function handleCheckoutCompleted(session: any, env: StripeEnv) {
  const userId = session.metadata?.userId;
  const treatmentCategory = session.metadata?.treatmentCategory;
  if (!userId || !treatmentCategory) return;

  const patientId = await getPatientId(userId);
  if (!patientId) {
    console.error("No patient found for user", userId);
    return;
  }

  // Save Stripe customer id on the patient
  if (session.customer) {
    await supabase
      .from("patients")
      .update({ stripe_customer_id: session.customer, status: "active" })
      .eq("id", patientId);
  }

  // Create a pending case so provider can review intake
  await supabase.from("cases").insert({
    patient_id: patientId,
    treatment_category: treatmentCategory,
    status: "pending_intake",
  });
}

async function handleSubscriptionUpsert(sub: any, env: StripeEnv) {
  const userId = sub.metadata?.userId;
  if (!userId) {
    console.error("No userId in subscription metadata");
    return;
  }
  const patientId = await getPatientId(userId);
  if (!patientId) return;

  const item = sub.items?.data?.[0];
  const priceLookup = item?.price?.lookup_key || sub.metadata?.priceId || "";
  const productId = item?.price?.product;
  const amountCents = item?.price?.unit_amount ?? 0;
  const treatmentCategory =
    sub.metadata?.treatmentCategory || PRICE_TO_CATEGORY[priceLookup] || "unknown";

  const periodStart = sub.current_period_start;
  const periodEnd = sub.current_period_end;

  await supabase.from("subscriptions").upsert(
    {
      user_id: userId,
      patient_id: patientId,
      stripe_subscription_id: sub.id,
      stripe_customer_id: sub.customer,
      stripe_price_id: priceLookup,
      product_id: productId,
      product_name: item?.price?.nickname || treatmentCategory,
      treatment_category: treatmentCategory,
      amount_cents: amountCents,
      status: sub.status,
      current_period_start: periodStart ? new Date(periodStart * 1000).toISOString() : null,
      current_period_end: periodEnd ? new Date(periodEnd * 1000).toISOString() : null,
      cancel_at_period_end: sub.cancel_at_period_end || false,
      environment: env,
      couples_discount: !!(sub.discount && sub.discount.coupon?.percent_off === 15),
      discount_percent: sub.discount?.coupon?.percent_off ?? 0,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "stripe_subscription_id" },
  );
}

async function handleSubscriptionDeleted(sub: any, env: StripeEnv) {
  await supabase
    .from("subscriptions")
    .update({
      status: "canceled",
      cancelled_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("stripe_subscription_id", sub.id)
    .eq("environment", env);
}
