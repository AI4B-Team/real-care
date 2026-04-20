// Klaviyo adapter edge function.
// No-ops gracefully when KLAVIYO_API_KEY is missing so the rest of the app
// can call it without error during development.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const KLAVIYO_API_KEY = Deno.env.get("KLAVIYO_API_KEY");
const KLAVIYO_BASE = "https://a.klaviyo.com/api";

interface RequestBody {
  action: "trigger_onboarding" | "subscribe" | "track_event";
  payload: Record<string, unknown>;
}

async function klaviyoFetch(path: string, init: RequestInit = {}) {
  if (!KLAVIYO_API_KEY) {
    return { stub: true, message: "KLAVIYO_API_KEY not configured — running in stub mode." };
  }
  const res = await fetch(`${KLAVIYO_BASE}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      revision: "2024-10-15",
      Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
      ...(init.headers || {}),
    },
  });
  if (!res.ok) throw new Error(`Klaviyo ${path} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = (await req.json().catch(() => ({}))) as RequestBody;
    const { action, payload } = body;

    let result: unknown;

    switch (action) {
      case "trigger_onboarding": {
        const { email, firstName, treatmentCategory, metadata } = payload as {
          email: string; firstName?: string; treatmentCategory?: string; metadata?: Record<string, unknown>;
        };
        result = await klaviyoFetch("/profiles/", {
          method: "POST",
          body: JSON.stringify({
            data: {
              type: "profile",
              attributes: {
                email,
                first_name: firstName,
                properties: { treatment_category: treatmentCategory, ...metadata },
              },
            },
          }),
        });
        break;
      }
      case "subscribe": {
        const { email, listId } = payload as { email: string; listId?: string };
        result = await klaviyoFetch(`/lists/${listId || "default"}/relationships/profiles/`, {
          method: "POST",
          body: JSON.stringify({ data: [{ type: "profile", attributes: { email } }] }),
        });
        break;
      }
      case "track_event": {
        result = await klaviyoFetch("/events/", { method: "POST", body: JSON.stringify(payload) });
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
    console.error("klaviyo error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
