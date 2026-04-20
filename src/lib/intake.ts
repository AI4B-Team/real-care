/**
 * Patient Intake Service
 *
 * Foundation-pass behavior:
 *   1. Sign the user up (or sign them in if they already exist).
 *   2. The auth signup trigger auto-creates their `patients` row.
 *   3. Update the patient row with intake details.
 *   4. Best-effort calls to OpenLoop / Klaviyo / Stripe edge functions
 *      (these will be wired in the next pass — failures are non-fatal).
 */

import { supabase } from "@/integrations/supabase/client";
import type { TreatmentCategory } from "@/lib/api/pharmacy";

export interface IntakeFormData {
  gender: "male" | "female" | "both";
  goals: TreatmentCategory[];
  age: string;
  state: string;
  firstName: string;
  email: string;
  phone?: string;
  password?: string;
}

export interface IntakeResult {
  success: boolean;
  patientId?: string;
  caseId?: string;
  checkoutUrl?: string;
  error?: string;
}

const estimateDOB = (age: string): string => {
  const parsed = parseInt(age, 10);
  if (Number.isNaN(parsed)) return "1990-01-01";
  const year = new Date().getFullYear() - parsed;
  return `${year}-01-01`;
};

export const submitHealthAssessment = async (
  formData: IntakeFormData,
): Promise<IntakeResult> => {
  try {
    // 1. Sign up (or fall through if account exists)
    const password = formData.password || crypto.randomUUID();
    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/patient-portal`,
        data: {
          first_name: formData.firstName,
        },
      },
    });

    // Ignore "already registered" — user can log in to continue
    if (signUpError && !/already/i.test(signUpError.message)) {
      throw signUpError;
    }

    // 2. Sign them in so we have a session for RLS
    if (formData.password) {
      await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return {
        success: true,
        error: "Check your email to confirm your account, then sign in to continue.",
      };
    }

    // 3. Update patient record (auto-created by signup trigger)
    const { data: patient, error: patientError } = await supabase
      .from("patients")
      .update({
        first_name: formData.firstName,
        phone: formData.phone || null,
        date_of_birth: estimateDOB(formData.age),
        gender: formData.gender === "both" ? "other" : formData.gender,
        state: formData.state,
      })
      .eq("user_id", user.id)
      .select("id")
      .single();

    if (patientError) throw patientError;

    return {
      success: true,
      patientId: patient.id,
    };
  } catch (error) {
    console.error("[Intake] Error:", error);
    return {
      success: false,
      error: (error as Error).message,
    };
  }
};

/**
 * Mark two patients as enrolled together for the 15% couples discount.
 * (Stripe coupon application happens server-side in the next pass.)
 */
export const applyCouplesEnrollment = async (
  patientId1: string,
  patientId2: string,
): Promise<void> => {
  await supabase
    .from("patients")
    .update({ partner_patient_id: patientId2, couples_discount_active: true })
    .eq("id", patientId1);

  await supabase
    .from("patients")
    .update({ partner_patient_id: patientId1, couples_discount_active: true })
    .eq("id", patientId2);
};
