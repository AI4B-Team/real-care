// Klaviyo adapter edge function.
// No-ops gracefully when KLAVIYO_API_KEY is missing so the rest of the app
// can call it without error during development.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

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
    // Require authentication
    const authHeader = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: { user }, error: authError } = await supabase.auth.getUser(authHeader);
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = (await req.json().catch(() => ({}))) as RequestBody;
    const { action, payload } = body;

    let result: unknown;

    switch (action) {
      case "trigger_onboarding": {
        const { firstName, treatmentCategory, metadata } = payload as {
          firstName?: string; treatmentCategory?: string; metadata?: Record<string, unknown>;
        };
        // Always use the authenticated user's email — never trust the body
        const email = user.email;
        if (!email) {
          return new Response(JSON.stringify({ error: "Email not available on session" }), {
            status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
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
        const { listId } = payload as { listId?: string };
        const email = user.email;
        if (!email) {
          return new Response(JSON.stringify({ error: "Email not available on session" }), {
            status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        result = await klaviyoFetch(`/lists/${listId || "default"}/relationships/profiles/`, {
          method: "POST",
          body: JSON.stringify({ data: [{ type: "profile", attributes: { email } }] }),
        });
        break;
      }
      case "track_event": {
        // Tag event with the authenticated user's email so callers can't spoof identity
        const enriched = { ...(payload as Record<string, unknown>), authenticated_email: user.email };
        result = await klaviyoFetch("/events/", { method: "POST", body: JSON.stringify(enriched) });
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
    return new Response(
      JSON.stringify({ error: "An internal error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
