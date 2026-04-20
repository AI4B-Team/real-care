// OpenLoop Health adapter edge function.
// Scaffolded to no-op gracefully when OPENLOOP_API_KEY is absent so the app
// can be built end-to-end before the integration is wired up.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const OPENLOOP_API_KEY = Deno.env.get("OPENLOOP_API_KEY");
const OPENLOOP_BASE = Deno.env.get("OPENLOOP_BASE_URL") || "https://api.openloophealth.com";

interface RequestBody {
  action: "create_patient" | "submit_intake" | "sync_case";
  payload: Record<string, unknown>;
}

async function callOpenLoop(path: string, init: RequestInit = {}) {
  if (!OPENLOOP_API_KEY) {
    return { stub: true, message: "OPENLOOP_API_KEY not configured — running in stub mode." };
  }
  const res = await fetch(`${OPENLOOP_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENLOOP_API_KEY}`,
      ...(init.headers || {}),
    },
  });
  if (!res.ok) throw new Error(`OpenLoop ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: { user } } = await supabase.auth.getUser(authHeader);
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json().catch(() => ({}))) as RequestBody;
    const { action, payload } = body;

    let result: unknown;

    switch (action) {
      case "create_patient": {
        const remote = await callOpenLoop("/v1/patients", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        const remotePatientId = (remote as { id?: string; patientId?: string }).id
          || (remote as { patientId?: string }).patientId
          || `stub_${crypto.randomUUID()}`;
        await supabase.from("patients").update({ openloop_patient_id: remotePatientId })
          .eq("user_id", user.id);
        result = { patientId: remotePatientId, stub: (remote as { stub?: boolean }).stub === true };
        break;
      }
      case "submit_intake": {
        const { patientId, treatmentCategory } = payload as { patientId: string; treatmentCategory: string };
        const remote = await callOpenLoop("/v1/cases", {
          method: "POST",
          body: JSON.stringify(payload),
        });
        const remoteCaseId = (remote as { id?: string }).id || `stub_${crypto.randomUUID()}`;
        const { data: caseRow } = await supabase.from("cases").insert({
          patient_id: patientId,
          treatment_category: treatmentCategory,
          openloop_case_id: remoteCaseId,
          status: "provider_review",
          intake_submitted_at: new Date().toISOString(),
        }).select().single();
        result = { caseId: caseRow?.id, status: "provider_review", stub: (remote as { stub?: boolean }).stub === true };
        break;
      }
      case "sync_case": {
        const { caseId } = payload as { caseId: string };
        result = await callOpenLoop(`/v1/cases/${caseId}`, { method: "GET" });
        break;
      }
      default:
        return new Response(JSON.stringify({ error: `Unknown action: ${action}` }), {
          status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("openloop error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
