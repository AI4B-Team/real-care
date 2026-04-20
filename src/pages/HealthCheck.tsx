import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
import { submitHealthAssessment } from "@/lib/intake";
import type { TreatmentCategory } from "@/lib/api/pharmacy";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

type Gender = "male" | "female" | "both" | null;

const goals = [
  { id: "weight_loss", label: "Lose Weight", sub: "GLP-1 from $179/mo" },
  { id: "ed", label: "Better Sex", sub: "ED from $2/dose" },
  { id: "trt", label: "Testosterone", sub: "TRT from $99/mo" },
  { id: "hair", label: "Fuller Hair", sub: "From $39/mo" },
  { id: "menopause", label: "Menopause Relief", sub: "HRT from $89/mo" },
  { id: "skincare", label: "Better Skin", sub: "Rx skincare from $35/mo" },
  { id: "mental_health", label: "Mental Health", sub: "From $49/mo" },
  { id: "peptides", label: "Performance", sub: "Peptides from $129/mo" },
  { id: "lab_testing", label: "Lab Testing", sub: "From $149" },
];

const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
];

const HealthCheck = () => {
  useSEO(SEO_CONFIGS.healthCheck);
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<Gender>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const filteredGoals = goals.filter((g) => {
    if (gender === "male") return !["menopause"].includes(g.id);
    if (gender === "female") return !["ed", "trt", "peptides"].includes(g.id);
    return true;
  });

  const canNext = () => {
    if (step === 0) return gender !== null;
    if (step === 1) return selectedGoals.length > 0;
    if (step === 2) return age.length > 0;
    if (step === 3) return state.length > 0;
    if (step === 4) return firstName.length > 0 && email.includes("@");
    return false;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitHealthAssessment({
        gender: gender!,
        goals: selectedGoals as TreatmentCategory[],
        age,
        state,
        firstName,
        email,
      });
      if (!result.success) throw new Error(result.error || "Submission failed");
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError((err as Error).message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PageLayout title="Health Check Complete">
        <div className="min-h-[80vh] flex items-center justify-center px-5 py-14 bg-warm-50">
          <div className="max-w-[540px] text-center fade-up">
            <div className="w-16 h-16 rounded-full bg-red flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h1 className="font-display font-black text-warm-800 text-3xl mb-3">You're In, {firstName}!</h1>
            <p className="text-[0.9rem] text-warm-600 leading-[1.75] mb-6">
              Your health assessment has been submitted. A licensed U.S. provider will review your information
              and reach out within <strong>24–48 hours</strong> with your personalized treatment plan.
            </p>
            <div className="bg-card border border-warm-100 rounded-2xl p-6 mb-6 text-left space-y-3">
              <h3 className="font-semibold text-warm-800 mb-3">What Happens Next</h3>
              {[
                `Check your email — we sent a confirmation to ${email}`,
                "A board-certified provider reviews your assessment",
                "If approved, you'll receive your prescription and pricing",
                "Your medication ships within 2 business days of approval",
                "First order arrives in 7–10 business days",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[0.82rem] text-warm-600">
                  <div className="w-5 h-5 rounded-full bg-red/[0.1] text-red text-[0.65rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {s}
                </div>
              ))}
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="/how-it-works" className="border border-warm-200 text-warm-800 font-medium px-6 py-2.5 rounded-lg text-[0.85rem] hover:border-warm-600 transition-colors">
                How It Works
              </a>
              <a href="/our-doctors" className="border border-warm-200 text-warm-800 font-medium px-6 py-2.5 rounded-lg text-[0.85rem] hover:border-warm-600 transition-colors">
                Meet Your Doctors
              </a>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Health Check">
      <div className="min-h-[85vh] bg-warm-50 flex items-center justify-center px-5 py-14">
        <div className="w-full max-w-[600px] fade-up">

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[0.72rem] font-semibold text-warm-400">Step {step + 1} of {totalSteps}</div>
              <div className="text-[0.72rem] font-semibold text-red">{Math.round(progress)}% Complete</div>
            </div>
            <div className="h-1.5 bg-warm-100 rounded-full overflow-hidden">
              <div className="h-full bg-red rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Card */}
          <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-9 shadow-soft">

            {/* Step 0: Gender */}
            {step === 0 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Tell Us About You</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Who are we helping today?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">We'll personalize your treatment options based on your answer.</p>
                <div className="grid grid-cols-3 gap-3">
                  {([
                    { id: "male" as Gender, label: "Him", sub: "Men's treatments" },
                    { id: "female" as Gender, label: "Her", sub: "Women's treatments" },
                    { id: "both" as Gender, label: "Both of Us", sub: "Couples plan" },
                  ]).map((opt) => (
                    <button
                      key={String(opt.id)}
                      onClick={() => setGender(opt.id)}
                      className={`border-2 rounded-xl p-4 text-center transition-all ${gender === opt.id ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"}`}
                    >
                      <div className={`font-display font-bold text-lg mb-0.5 ${gender === opt.id ? "text-red" : "text-warm-800"}`}>{opt.label}</div>
                      <div className="text-[0.7rem] text-warm-400">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Goals */}
            {step === 1 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Your Goals</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">What would you like to improve?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-6">Select all that apply.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {filteredGoals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`border-2 rounded-xl p-3 text-left transition-all ${selectedGoals.includes(goal.id) ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"}`}
                    >
                      <div className={`text-[0.83rem] font-semibold mb-0.5 ${selectedGoals.includes(goal.id) ? "text-red" : "text-warm-800"}`}>{goal.label}</div>
                      <div className="text-[0.68rem] text-warm-400">{goal.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Age */}
            {step === 2 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Medical Info</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">How old are you?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Age helps your provider determine the right treatment and dosage.</p>
                <input
                  type="number" min="18" max="100"
                  value={age} onChange={(e) => setAge(e.target.value)}
                  placeholder="Your age"
                  className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3.5 text-[1rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors"
                />
                <p className="text-[0.72rem] text-warm-400 mt-3">You must be 18 or older to use Real Care.</p>
              </div>
            )}

            {/* Step 3: State */}
            {step === 3 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Your Location</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Which state are you in?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Your provider must be licensed in your state. We serve all 50 states.</p>
                <select
                  value={state} onChange={(e) => setState(e.target.value)}
                  className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3.5 text-[0.95rem] text-warm-800 focus:outline-none bg-white transition-colors"
                >
                  <option value="">Select your state</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Almost There</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Where should we send your results?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">A provider will review your assessment and reach out within 24–48 hours.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">First Name</label>
                    <input
                      type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.92rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.92rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <p className="text-[0.7rem] text-warm-400 mt-4 leading-[1.6]">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="underline hover:text-warm-600">Terms</a>,{" "}
                  <a href="/privacy" className="underline hover:text-warm-600">Privacy Policy</a>, and{" "}
                  <a href="/medical-consent" className="underline hover:text-warm-600">Medical Consent</a>.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`flex items-center gap-1.5 text-[0.82rem] font-medium text-warm-600 hover:text-warm-800 transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                <ChevronLeft size={16} /> Back
              </button>

              {step < totalSteps - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="bg-red hover:bg-red-dark disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-bold px-7 py-2.5 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2"
                >
                  Continue <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canNext() || submitting}
                  className="bg-red hover:bg-red-dark disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground font-bold px-7 py-2.5 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2"
                >
                  {submitting
                    ? <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                    : <>Submit My Assessment <ChevronRight size={16} /></>
                  }
                </button>
              )}
            </div>

            {submitError && (
              <div className="mt-4 bg-red/[0.08] border border-red/20 rounded-lg px-4 py-3 text-[0.82rem] text-red">
                {submitError} — Please try again or contact{" "}
                <a href="mailto:support@realcare.com" className="underline font-semibold">support@realcare.com</a>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-5 mt-6">
            {["HIPAA Compliant", "No Obligation", "Free Assessment", "Results In 24–48 Hrs"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[0.72rem] text-warm-400">
                <div className="w-1.5 h-1.5 rounded-full bg-red" />{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default HealthCheck;
