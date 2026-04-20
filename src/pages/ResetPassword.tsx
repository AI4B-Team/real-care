import { useState, useEffect } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const ResetPassword = () => {
  useSEO({ title: "Reset Password · Real Care", description: "Set a new password for your Real Care account." });
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    // Supabase auto-handles the recovery hash and creates a session.
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setSessionReady(true);
    });
    supabase.auth.getSession().then(({ data }) => { if (data.session) setSessionReady(true); });
    return () => sub.subscription.unsubscribe();
  }, []);

  const handleSubmit = async () => {
    setError(null);
    if (password.length < 8) return setError("Password must be at least 8 characters.");
    if (password !== confirm) return setError("Passwords do not match.");
    setLoading(true);
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (updateError) return setError(updateError.message);
    setDone(true);
    setTimeout(() => { window.location.href = "/patient-portal"; }, 1800);
  };

  return (
    <PageLayout title="Reset Password">
      <div className="min-h-[70vh] bg-warm-50 px-5 py-16 flex items-start justify-center">
        <div className="w-full max-w-[440px] bg-card border border-warm-100 rounded-2xl p-7">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Reset Password</div>
          <h1 className="font-display font-black text-warm-800 text-2xl mb-2">Set a new password</h1>
          <p className="text-[0.85rem] text-warm-600 mb-6">Choose a strong password you haven't used before.</p>

          {done ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
              <CheckCircle size={32} className="text-green-600 mx-auto mb-2" />
              <p className="text-[0.88rem] font-semibold text-green-800">Password updated. Redirecting…</p>
            </div>
          ) : !sessionReady ? (
            <div className="bg-warm-50 border border-warm-100 rounded-xl p-5 text-center text-[0.85rem] text-warm-600">
              <Loader2 size={20} className="animate-spin mx-auto mb-2 text-red" />
              Validating reset link…
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">New Password</label>
                <div className="relative">
                  <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 pr-10 text-[0.88rem] focus:outline-none focus:border-red transition-colors" />
                  <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-700">{show ? <EyeOff size={16} /> : <Eye size={16} />}</button>
                </div>
              </div>
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Confirm Password</label>
                <input type={show ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.88rem] focus:outline-none focus:border-red transition-colors" />
              </div>
              {error && <div className="flex items-start gap-2 text-[0.8rem] text-red bg-red/[0.06] border border-red/20 rounded-lg p-3"><AlertCircle size={15} className="flex-shrink-0 mt-0.5" />{error}</div>}
              <button onClick={handleSubmit} disabled={loading} className="w-full bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors flex items-center justify-center gap-2">
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                Update Password
              </button>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ResetPassword;
