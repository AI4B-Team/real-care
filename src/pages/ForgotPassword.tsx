import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { resetPassword } from "@/lib/supabase";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    setError(null);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      setError((err as Error).message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Reset Password">
      <div className="min-h-[70vh] bg-warm-50 flex items-center justify-center px-5 py-14">
        <div className="w-full max-w-[420px]">
          <div className="bg-card border border-warm-100 rounded-2xl p-8 shadow-soft">
            {sent ? (
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h2 className="font-display font-black text-warm-800 text-xl mb-2">Check Your Email</h2>
                <p className="text-[0.85rem] text-warm-600 leading-[1.7] mb-5">
                  We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the link to reset your password.
                </p>
                <p className="text-[0.75rem] text-warm-400 mb-4">Didn't receive it? Check your spam folder or try again.</p>
                <button
                  onClick={() => { setSent(false); setEmail(""); }}
                  className="text-[0.82rem] font-semibold text-red hover:underline"
                >
                  Try a different email
                </button>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-red/[0.08] flex items-center justify-center mx-auto mb-5">
                  <Mail size={22} className="text-red" />
                </div>
                <div className="text-center mb-6">
                  <h1 className="font-display font-black text-warm-800 text-2xl mb-1">Forgot Password?</h1>
                  <p className="text-[0.82rem] text-warm-600">Enter your email and we'll send you a reset link.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                      placeholder="you@email.com"
                      className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors"
                    />
                  </div>
                  {error && (
                    <div className="bg-red/[0.08] border border-red/20 rounded-lg px-4 py-2.5 text-[0.8rem] text-red">{error}</div>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={loading || !email.includes("@")}
                    className="w-full bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : "Send Reset Link →"}
                  </button>
                </div>
                <div className="border-t border-warm-100 mt-6 pt-5 text-center">
                  <a href="/login" className="text-[0.8rem] font-medium text-warm-600 hover:text-warm-800 transition-colors">
                    ← Back to Log In
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ForgotPassword;
