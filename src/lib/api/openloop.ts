/**
 * OpenLoop Health client wrapper — calls the `openloop` edge function.
 * Never holds API keys client-side.
 *
 * Edge function not deployed yet in foundation pass; calls will fail
 * with a clear error until configured.
 */

import { supabase } from "@/integrations/supabase/client";

export interface CreatePatientInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  state: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface CreatePatientResult {
  patientId: string;
}

export interface SubmitIntakeInput {
  patientId: string;
  treatmentCategory: string;
  chiefComplaint: string;
  intakeAnswers?: Record<string, unknown>;
}

export interface SubmitIntakeResult {
  caseId: string;
  status: string;
}

export const createPatient = async (
  input: CreatePatientInput,
): Promise<CreatePatientResult> => {
  const { data, error } = await supabase.functions.invoke("openloop", {
    body: { action: "create_patient", payload: input },
  });
  if (error) throw new Error(error.message || "OpenLoop unavailable");
  return data as CreatePatientResult;
};

export const submitIntake = async (
  input: SubmitIntakeInput,
): Promise<SubmitIntakeResult> => {
  const { data, error } = await supabase.functions.invoke("openloop", {
    body: { action: "submit_intake", payload: input },
  });
  if (error) throw new Error(error.message || "OpenLoop unavailable");
  return data as SubmitIntakeResult;
};
