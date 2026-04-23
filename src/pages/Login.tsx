import PageLayout from "@/components/realcare/PageLayout";
import { Lock, Eye, EyeOff, Loader2, Stethoscope, Truck, ShieldCheck, Clock, HeartPulse, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { usePatient } from "@/hooks/usePatient";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const slides = [
  {
    icon: Stethoscope,
    eyebrow: "Doctor-Led Care",
    title: "Real Doctors. Real Treatment.",
    desc: "Licensed U.S. providers review every case — for men and women. No bots. No middlemen.",
  },
  {
    icon: HeartPulse,
    eyebrow: "Personalized For You",
    title: "Plans Built Around Your Body",
    desc: "GLP-1, TRT, ED, hair, menopause, HRT, skincare — your protocol is matched to your goals.",
  },
  {
    icon: Truck,
    eyebrow: "Delivered Discreetly",
    title: "Free Shipping. Plain Packaging.",
    desc: "Your prescription arrives at your door in days — not weeks. Free expedited shipping, always.",
  },
  {
    icon: Clock,
    eyebrow: "24/7 Provider Access",
    title: "Message Your Care Team Anytime",
    desc: "Day, night, weekends. Your provider responds fast — no waiting room, no phone tag.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "No Surprises",
    title: "$0 Membership. HSA/FSA Welcome.",
    desc: "One transparent price covers your consult, medication, and shipping. Cancel anytime.",
  },
  {
    icon: Sparkles,
    eyebrow: "Couples Save More",
    title: "Better Together — Save 15%",
    desc: "Both partners enrolled? Each of you saves 15% on top of your plan. Built for two.",
  },
];

const Login = () => {
  useSEO(SEO_CONFIGS.login);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [slide, setSlide] = useState(0);
  const { login, loading } = usePatient();

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

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

  const Active = slides[slide].icon;

  return (
    <PageLayout title="Log In">
      <div className="bg-warm-50 min-h-[80vh] grid lg:grid-cols-2">
        {/* LEFT PANEL — Benefits slideshow */}
        <aside className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-red to-red-dark text-primary-foreground">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur px-3 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.1em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                Why Real Care
              </div>
            </div>

            <div className="space-y-8">
              <div key={slide} className="animate-fade-in">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 backdrop-blur flex items-center justify-center mb-6">
                  <Active size={26} />
                </div>
                <div className="text-[0.72rem] font-bold tracking-[0.12em] uppercase opacity-80 mb-3">
                  {slides[slide].eyebrow}
                </div>
                <h2 className="font-display font-black text-3xl xl:text-4xl leading-[1.15] mb-4">
                  {slides[slide].title}
                </h2>
                <p className="text-[0.95rem] leading-relaxed opacity-90 max-w-md">
                  {slides[slide].desc}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-primary-foreground" : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary-foreground/20">
              {[
                { n: "50", l: "States Covered" },
                { n: "24/7", l: "Provider Access" },
                { n: "$0", l: "Membership Fee" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-black text-2xl">{s.n}</div>
                  <div className="text-[0.7rem] opacity-80 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL — Login form */}
        <div className="flex items-center justify-center px-5 py-14">
          <div className="w-full max-w-[440px] fade-up">
            <div className="bg-card border border-warm-100 rounded-2xl p-8 shadow-soft">
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

            <p className="text-center text-[0.7rem] text-warm-400 mt-5 leading-[1.6]">
              Your login is protected by HIPAA-compliant encryption.
              <br />By logging in you agree to our <a href="/terms" className="underline hover:text-warm-600">Terms</a> and <a href="/privacy" className="underline hover:text-warm-600">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
