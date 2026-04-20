/**
 * Stripe client wrapper — calls the `stripe-checkout` and `stripe-portal`
 * edge functions. Never holds private keys client-side.
 *
 * NOTE: Edge functions are not deployed yet in this foundation pass.
 * Calls will fail with a clear error until they are.
 */

import { supabase } from "@/integrations/supabase/client";

export interface CheckoutSessionInput {
  priceId: string;
  patientEmail: string;
  patientName?: string;
  metadata?: Record<string, string>;
  successUrl: string;
  cancelUrl: string;
}

export interface CheckoutSessionResult {
  url: string;
  sessionId: string;
}

// Placeholder price ID map. Real Stripe price IDs are configured server-side
// in the stripe-checkout edge function (or via Lovable's built-in payments).
export const STRIPE_PRICES: Record<string, { firstMonth?: string; recurring: string; oneTime?: string }> = {
  weight_loss_sema: { recurring: "weight_loss_sema" },
  weight_loss_tirz: { recurring: "weight_loss_tirz" },
  weight_loss_oral: { recurring: "weight_loss_oral" },
  ed_sildenafil:    { recurring: "ed_sildenafil" },
  ed_tadalafil:     { recurring: "ed_tadalafil" },
  ed_chewable:      { recurring: "ed_chewable" },
  trt_injection:    { recurring: "trt_injection" },
  hair_mens:        { recurring: "hair_mens" },
  hair_womens:      { recurring: "hair_womens" },
  skincare_antiaging:{ recurring: "skincare_antiaging" },
  mental_anxiety:   { recurring: "mental_anxiety" },
  menopause_combined:{ recurring: "menopause_combined" },
  peptides_bpc:     { recurring: "peptides_bpc" },
  lab_mens:         { recurring: "lab_mens", oneTime: "lab_mens" },
};

export const createCheckoutSession = async (
  input: CheckoutSessionInput,
): Promise<CheckoutSessionResult> => {
  const { data, error } = await supabase.functions.invoke("stripe-checkout", {
    body: input,
  });
  if (error) throw new Error(error.message || "Checkout unavailable");
  return data as CheckoutSessionResult;
};

export const createBillingPortalSession = async (
  customerId: string,
  returnUrl: string,
): Promise<{ url: string }> => {
  const { data, error } = await supabase.functions.invoke("stripe-portal", {
    body: { customerId, returnUrl },
  });
  if (error) throw new Error(error.message || "Portal unavailable");
  return data as { url: string };
};
