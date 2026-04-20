import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface AddressStatus {
  loading: boolean;
  hasAddress: boolean;
  refresh: () => void;
}

/** Tiny helper to check whether a patient has a complete shipping address on file. */
export function usePatientAddress(patientId?: string): AddressStatus {
  const [loading, setLoading] = useState(true);
  const [hasAddress, setHasAddress] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!patientId) { setLoading(false); setHasAddress(false); return; }
    setLoading(true);
    supabase
      .from("patients")
      .select("address_line1,address_city,address_state,address_zip")
      .eq("id", patientId)
      .maybeSingle()
      .then(({ data }) => {
        const ok = !!(data?.address_line1 && data?.address_city && data?.address_state && data?.address_zip);
        setHasAddress(ok);
        setLoading(false);
      });
  }, [patientId, tick]);

  return { loading, hasAddress, refresh: () => setTick((t) => t + 1) };
}
