import PageLayout from "@/components/realcare/PageLayout";
import { Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { usePatient } from "@/hooks/usePatient";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Login = () => {
  useSEO(SEO_CONFIGS.login);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login, loading } = usePatient();

  const handleLogin = async () => {
    if (!email || !password) return;
    setError(null);
    try {
      await login(email, password);
      window.location.href = "/patient-portal";
    } catch (err) {
      setError((err as Error).message || "Invalid email or password. Please try again.");
    }
  };

  return (
    <PageLayout title="Log In">
      <div className="bg-warm-50 min-h-[80vh] flex items-center justify-center px-5 py-14">
        <div className="w-full max-w-[440px] fade-up">
          {/* Card */}
          <div className="bg-card border border-warm-100 rounded-2xl p-8 shadow-soft">
            {/* Lock icon */}
            <div className="w-12 h-12 rounded-full bg-red/[0.08] flex items-center justify-center mx-auto mb-5">
              <Lock size={22} className="text-red" />
            </div>
            <div className="text-center mb-7">
              <h1 className="font-display font-black text-warm-800 text-2xl mb-1">Welcome Back</h1>
              <p className="text-[0.82rem] text-warm-600">Log in to your Real Care patient portal</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[0.78rem] font-semibold text-warm-700">Password</label>
                  <a href="/forgot-password" className="text-[0.72rem] text-red hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    placeholder="Your password"
                    className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors pr-11"
                  />
                  <button
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-600"
                  >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              {error && (
                <div className="bg-red/[0.08] border border-red/20 rounded-lg px-4 py-2.5 text-[0.8rem] text-red">
                  {error}
                </div>
              )}
              <button
                onClick={handleLogin}
                disabled={loading || !email || !password}
                className="w-full bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors mt-2 flex items-center justify-center gap-2"
              >
                {loading ? <><Loader2 size={16} className="animate-spin" /> Logging in...</> : "Log In →"}
              </button>
            </div>

            <div className="border-t border-warm-100 mt-6 pt-6 text-center">
              <p className="text-[0.8rem] text-warm-600 mb-3">Not a patient yet?</p>
              <a href="/health-check" className="w-full block border-[1.5px] border-warm-200 hover:border-red text-warm-800 hover:text-red font-semibold py-2.5 rounded-lg text-[0.85rem] transition-colors">
                Take Your Free Health Check →
              </a>
            </div>
          </div>

          {/* Privacy note */}
          <p className="text-center text-[0.7rem] text-warm-400 mt-5 leading-[1.6]">
            Your login is protected by HIPAA-compliant encryption.
            <br />By logging in you agree to our <a href="/terms" className="underline hover:text-warm-600">Terms</a> and <a href="/privacy" className="underline hover:text-warm-600">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
