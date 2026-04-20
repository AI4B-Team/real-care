/**
 * usePatient hook
 * Manages auth state and patient data throughout the app
 * Uses Supabase auth + patient table
 */

import { useState, useEffect, useCallback } from "react";
import { supabase, getUser, signIn, signOut, getPatientByEmail } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

export interface Patient {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  state?: string;
  status: "pending" | "active" | "paused" | "cancelled";
  stripeCustomerId?: string;
  openloopPatientId?: string;
  couplesDiscountActive?: boolean;
}

export interface PatientSubscription {
  id: string;
  treatmentCategory: string;
  productName: string;
  amountCents: number;
  status: string;
  currentPeriodEnd?: string;
  couplesDiscount?: boolean;
}

interface UsePatientReturn {
  user: User | null;
  patient: Patient | null;
  subscriptions: PatientSubscription[];
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshPatient: () => Promise<void>;
}

export const usePatient = (): UsePatientReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [subscriptions, setSubscriptions] = useState<PatientSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPatient = useCallback(async (currentUser: User) => {
    try {
      const patientData = await getPatientByEmail(currentUser.email!);
      setPatient({
        id: patientData.id,
        email: patientData.email,
        firstName: patientData.first_name,
        lastName: patientData.last_name,
        phone: patientData.phone,
        state: patientData.state,
        status: patientData.status as Patient["status"],
        stripeCustomerId: patientData.stripe_customer_id,
        openloopPatientId: patientData.openloop_patient_id,
        couplesDiscountActive: patientData.couples_discount_active,
      });

      // Load subscriptions
      const { data: subs } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("patient_id", patientData.id)
        .eq("status", "active");

      if (subs) {
        setSubscriptions(
          subs.map((s) => ({
            id: s.id,
            treatmentCategory: s.treatment_category,
            productName: s.product_name,
            amountCents: s.amount_cents,
            status: s.status,
            currentPeriodEnd: s.current_period_end,
            couplesDiscount: s.couples_discount,
          }))
        );
      }
    } catch (err) {
      console.error("[usePatient] Load patient failed:", err);
      setError("Failed to load patient data");
    }
  }, []);

  const refreshPatient = useCallback(async () => {
    if (user) await loadPatient(user);
  }, [user, loadPatient]);

  useEffect(() => {
    // Initial session check
    getUser().then((u) => {
      setUser(u);
      if (u) loadPatient(u).finally(() => setLoading(false));
      else setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) {
          await loadPatient(currentUser);
        } else {
          setPatient(null);
          setSubscriptions([]);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [loadPatient]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { user: loggedInUser } = await signIn(email, password);
      if (loggedInUser) await loadPatient(loggedInUser);
    } catch (err) {
      setError((err as Error).message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await signOut();
    setUser(null);
    setPatient(null);
    setSubscriptions([]);
  };

  return { user, patient, subscriptions, loading, error, login, logout, refreshPatient };
};
