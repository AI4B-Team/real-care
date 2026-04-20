/**
 * Klaviyo client wrapper — calls the `klaviyo` edge function.
 * Never holds API keys client-side.
 */

import { supabase } from "@/integrations/supabase/client";

export interface OnboardingTriggerInput {
  email: string;
  firstName?: string;
  treatmentCategory?: string;
  metadata?: Record<string, unknown>;
}

export const triggerOnboarding = async (input: OnboardingTriggerInput) => {
  const { data, error } = await supabase.functions.invoke("klaviyo", {
    body: { action: "trigger_onboarding", payload: input },
  });
  if (error) throw new Error(error.message || "Klaviyo unavailable");
  return data;
};

export const subscribeToList = async (email: string, listId?: string) => {
  const { data, error } = await supabase.functions.invoke("klaviyo", {
    body: { action: "subscribe", payload: { email, listId } },
  });
  if (error) throw new Error(error.message || "Klaviyo unavailable");
  return data;
};
