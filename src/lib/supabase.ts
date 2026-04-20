/**
 * Supabase adapter — re-exports the Lovable Cloud client and provides
 * the helper functions the rest of the app imports.
 *
 * The underlying client lives in `src/integrations/supabase/client.ts`
 * and is auto-generated/managed by Lovable Cloud.
 */

import { supabase } from "@/integrations/supabase/client";

export { supabase };
export default supabase;

// ─── Auth helpers ─────────────────────────────────────────────────────────────

export const signUp = async (
  email: string,
  password: string,
  metadata?: Record<string, unknown>,
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
      emailRedirectTo: `${window.location.origin}/`,
    },
  });
  if (error) throw error;
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  if (error) throw error;
};

// ─── Patient helpers (now scoped by user_id, not raw patient id) ──────────────

export const getCurrentPatient = async () => {
  const user = await getUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const getPatient = async (patientId: string) => {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", patientId)
    .single();
  if (error) throw error;
  return data;
};

export const updatePatient = async (
  patientId: string,
  updates: Partial<Record<string, string | number | boolean | null>>,
) => {
  const { data, error } = await supabase
    .from("patients")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .update(updates as any)
    .eq("id", patientId)
    .select()
    .single();
  if (error) throw error;
  return data;
};

// Lookup helper used by usePatient hook
export const getPatientByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("email", email)
    .maybeSingle();
  if (error) throw error;
  return data;
};

// ─── Messages ─────────────────────────────────────────────────────────────────
export interface PatientMessage {
  id: string;
  patient_id: string;
  sender: "patient" | "provider" | "staff" | "system";
  sender_name?: string | null;
  content: string;
  created_at: string;
}

export const getMessages = async (patientId: string): Promise<PatientMessage[]> => {
  const { data, error } = await supabase
    .from("messages")
    .select("id,patient_id,sender,sender_name,content,created_at")
    .eq("patient_id", patientId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return (data || []) as PatientMessage[];
};

export const sendMessage = async (
  patientId: string,
  content: string,
): Promise<PatientMessage | null> => {
  const { data, error } = await supabase
    .from("messages")
    .insert({ patient_id: patientId, sender: "patient", content })
    .select("id,patient_id,sender,sender_name,content,created_at")
    .single();
  if (error) throw error;
  return data as PatientMessage;
};

export const subscribeToMessages = (
  patientId: string,
  callback: (msg: PatientMessage) => void,
) => {
  const channel = supabase
    .channel(`messages:${patientId}`)
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "messages", filter: `patient_id=eq.${patientId}` },
      (payload) => callback(payload.new as PatientMessage),
    )
    .subscribe();
  return { unsubscribe: () => { supabase.removeChannel(channel); } };
};

// ─── Cases ────────────────────────────────────────────────────────────────────

export const getPatientCases = async (patientId: string) => {
  const { data, error } = await supabase
    .from("cases")
    .select("*")
    .eq("patient_id", patientId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

// ─── Orders ───────────────────────────────────────────────────────────────────

export const getPatientOrders = async (patientId: string) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("patient_id", patientId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

// ─── Subscriptions ────────────────────────────────────────────────────────────

export const getPatientSubscriptions = async (patientId: string) => {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("patient_id", patientId)
    .eq("status", "active");
  if (error) throw error;
  return data;
};

// ─── Refill check-ins ─────────────────────────────────────────────────────────

export const submitRefillCheckin = async (checkin: {
  patient_id: string;
  prescription_id?: string;
  weight_lbs?: number;
  side_effects?: string;
  notes?: string;
  approved_for_refill?: boolean;
}) => {
  const { data, error } = await supabase
    .from("refill_checkins")
    .insert(checkin)
    .select()
    .single();
  if (error) throw error;
  return data;
};
