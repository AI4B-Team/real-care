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

const medicalConditions = [
  { id: "diabetes_t2", label: "Type 2 Diabetes" },
  { id: "prediabetes", label: "Prediabetes" },
  { id: "hypertension", label: "High Blood Pressure" },
  { id: "high_cholesterol", label: "High Cholesterol" },
  { id: "sleep_apnea", label: "Sleep Apnea" },
  { id: "pcos", label: "PCOS" },
  { id: "thyroid", label: "Thyroid Disorder" },
  { id: "heart_disease", label: "Heart Disease" },
  { id: "kidney_disease", label: "Kidney Disease" },
  { id: "liver_disease", label: "Liver Disease" },
  { id: "depression_anxiety", label: "Depression / Anxiety" },
  { id: "none", label: "None of the above" },
];

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

const TOTAL_STEPS = 10;

const HealthCheck = () => {
  useSEO(SEO_CONFIGS.healthCheck);
  const [step, setStep] = useState(0);
  const [gender, setGender] = useState<Gender>(null);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [dob, setDob] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);
  const [thyroidCancer, setThyroidCancer] = useState<string>("");
  const [pancreatitis, setPancreatitis] = useState<string>("");
  const [pregnant, setPregnant] = useState<string>("");
  const [medications, setMedications] = useState("");
  const [allergies, setAllergies] = useState("");
  const [priorAttempts, setPriorAttempts] = useState<string>("");
  const [weightGoal, setWeightGoal] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isGLP1 = selectedGoals.includes("weight_loss");
  const isFemale = gender === "female";

  const filteredGoals = goals.filter((g) => {
    if (gender === "male") return !["menopause"].includes(g.id);
    if (gender === "female") return !["ed", "trt", "peptides"].includes(g.id);
    return true;
  });

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const toggleCondition = (id: string) => {
    if (id === "none") {
      setConditions(["none"]);
      return;
    }
    setConditions((prev) => {
      const without = prev.filter((c) => c !== "none");
      return without.includes(id) ? without.filter((c) => c !== id) : [...without, id];
    });
  };

  const getBMI = () => {
    const ft = parseInt(heightFt) || 0;
    const inches = parseInt(heightIn) || 0;
    const totalInches = ft * 12 + inches;
    const lbs = parseFloat(weight) || 0;
    if (!totalInches || !lbs) return null;
    return ((lbs / (totalInches * totalInches)) * 703).toFixed(1);
  };

  const bmi = getBMI();
  const progress = ((step + 1) / TOTAL_STEPS) * 100;
  const isDisqualified = thyroidCancer === "yes" || pancreatitis === "yes" || pregnant === "yes";

  const canNext = () => {
    switch (step) {
      case 0: return gender !== null;
      case 1: return selectedGoals.length > 0;
      case 2: return heightFt !== "" && heightIn !== "" && weight !== "";
      case 3: return dob.length >= 8;
      case 4: return conditions.length > 0;
      case 5: return thyroidCancer !== "" && pancreatitis !== "" && (isFemale ? pregnant !== "" : true);
      case 6: return true;
      case 7: return !isGLP1 || (priorAttempts !== "" && weightGoal !== "");
      case 8: return state !== "";
      case 9:
        return (
          firstName !== "" &&
          lastName !== "" &&
          email.includes("@") &&
          phone.length >= 10 &&
          address !== "" &&
          city !== "" &&
          zip.length >= 5
        );
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await submitHealthAssessment({
        gender: gender!,
        goals: selectedGoals as TreatmentCategory[],
        age: String(new Date().getFullYear() - new Date(dob).getFullYear()),
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

  const inputClass =
    "w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.92rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors bg-white";
  const radioClass = (selected: boolean) =>
    `flex items-center gap-3 border-2 rounded-xl px-4 py-3 cursor-pointer transition-all ${
      selected ? "border-red bg-red/[0.04]" : "border-warm-100 hover:border-warm-300"
    }`;

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
              Your health assessment has been submitted. A licensed U.S. provider will review your information and reach out within <strong>24–48 hours</strong>.
            </p>
            <div className="bg-card border border-warm-100 rounded-2xl p-6 mb-6 text-left space-y-3">
              <h3 className="font-semibold text-warm-800 mb-3">What Happens Next</h3>
              {[
                `Check your email — we sent a confirmation to ${email}`,
                "A board-certified provider reviews your full assessment",
                "If approved, you'll receive your prescription and pricing",
                "Your medication ships within 2 business days of approval",
                "First order arrives in 7–10 business days",
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[0.82rem] text-warm-600">
                  <div className="w-5 h-5 rounded-full bg-red/10 text-red text-[0.65rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  {s}
                </div>
              ))}
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
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[0.72rem] font-semibold text-warm-400">Step {step + 1} of {TOTAL_STEPS}</div>
              <div className="text-[0.72rem] font-semibold text-red">{Math.round(progress)}% Complete</div>
            </div>
            <div className="h-1.5 bg-warm-100 rounded-full overflow-hidden">
              <div className="h-full bg-red rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-9 shadow-soft">
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
                      className={`border-2 rounded-xl p-4 text-center transition-all ${
                        gender === opt.id ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"
                      }`}
                    >
                      <div className={`font-display font-bold text-lg mb-0.5 ${gender === opt.id ? "text-red" : "text-warm-800"}`}>
                        {opt.label}
                      </div>
                      <div className="text-[0.7rem] text-warm-400">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                      className={`border-2 rounded-xl p-3 text-left transition-all ${
                        selectedGoals.includes(goal.id) ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"
                      }`}
                    >
                      <div className={`text-[0.83rem] font-semibold mb-0.5 ${selectedGoals.includes(goal.id) ? "text-red" : "text-warm-800"}`}>
                        {goal.label}
                      </div>
                      <div className="text-[0.68rem] text-warm-400">{goal.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Your Measurements</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">What is your height and weight?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Used to calculate your BMI — the primary eligibility criterion for GLP-1 medications.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Height</label>
                    <div className="flex gap-3">
                      <input type="number" min="4" max="7" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="Feet" className={inputClass} />
                      <input type="number" min="0" max="11" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="Inches" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Current Weight (lbs)</label>
                    <input type="number" min="100" max="600" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight in pounds" className={inputClass} />
                  </div>
                  {bmi && (
                    <div className={`rounded-xl p-4 border ${parseFloat(bmi) >= 27 ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[0.72rem] font-bold text-warm-600 uppercase tracking-wide">Your BMI</div>
                          <div className={`text-2xl font-bold ${parseFloat(bmi) >= 27 ? "text-green-700" : "text-amber-700"}`}>{bmi}</div>
                        </div>
                        <div className={`text-[0.72rem] text-right max-w-[180px] leading-[1.4] ${parseFloat(bmi) >= 27 ? "text-green-700" : "text-amber-700"}`}>
                          {parseFloat(bmi) >= 30 ? "✓ Likely eligible for GLP-1" : parseFloat(bmi) >= 27 ? "✓ May qualify with a health condition" : "A provider will review your full profile"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Your Age</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">What is your date of birth?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Required for your medical record and provider review.</p>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split("T")[0]}
                  className={inputClass}
                />
                <p className="text-[0.72rem] text-warm-400 mt-3">You must be 18 or older to use Real Care.</p>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Medical History</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Do you have any of these conditions?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-6">Select all that apply. Helps your provider personalize your treatment.</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {medicalConditions.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => toggleCondition(c.id)}
                      className={`border-2 rounded-xl px-3 py-2.5 text-left transition-all ${
                        conditions.includes(c.id) ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"
                      }`}
                    >
                      <div className={`text-[0.82rem] font-semibold ${conditions.includes(c.id) ? "text-red" : "text-warm-800"}`}>{c.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Safety Screening</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">A few important safety questions</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Required by your provider before prescribing GLP-1 medications. All information is confidential.</p>
                <div className="space-y-6">
                  <div>
                    <p className="text-[0.88rem] font-semibold text-warm-800 mb-3">
                      Do you or any blood relative have a personal or family history of medullary thyroid cancer (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)?
                    </p>
                    <div className="space-y-2">
                      {["yes", "no", "unsure"].map((val) => (
                        <label key={val} className={radioClass(thyroidCancer === val)}>
                          <input type="radio" className="accent-red" checked={thyroidCancer === val} onChange={() => setThyroidCancer(val)} />
                          <span className={`text-[0.88rem] font-medium ${thyroidCancer === val ? "text-red" : "text-warm-800"}`}>
                            {val === "unsure" ? "I'm not sure" : val.charAt(0).toUpperCase() + val.slice(1)}
                          </span>
                        </label>
                      ))}
                    </div>
                    {thyroidCancer === "yes" && (
                      <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-[0.8rem] text-amber-800">
                        GLP-1 medications are contraindicated with this history. A provider will discuss alternative options with you.
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[0.88rem] font-semibold text-warm-800 mb-3">Have you ever been diagnosed with or treated for pancreatitis?</p>
                    <div className="space-y-2">
                      {["yes", "no"].map((val) => (
                        <label key={val} className={radioClass(pancreatitis === val)}>
                          <input type="radio" className="accent-red" checked={pancreatitis === val} onChange={() => setPancreatitis(val)} />
                          <span className={`text-[0.88rem] font-medium ${pancreatitis === val ? "text-red" : "text-warm-800"}`}>
                            {val.charAt(0).toUpperCase() + val.slice(1)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  {isFemale && (
                    <div>
                      <p className="text-[0.88rem] font-semibold text-warm-800 mb-3">
                        Are you currently pregnant, breastfeeding, or planning to become pregnant in the next 6 months?
                      </p>
                      <div className="space-y-2">
                        {["yes", "no"].map((val) => (
                          <label key={val} className={radioClass(pregnant === val)}>
                            <input type="radio" className="accent-red" checked={pregnant === val} onChange={() => setPregnant(val)} />
                            <span className={`text-[0.88rem] font-medium ${pregnant === val ? "text-red" : "text-warm-800"}`}>
                              {val.charAt(0).toUpperCase() + val.slice(1)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                  {isDisqualified && (
                    <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-[0.82rem] text-amber-900">
                      <div className="font-semibold mb-1">A provider will review your answers</div>
                      Based on your responses, a provider will discuss alternative treatment options. Please continue — your assessment will still be reviewed.
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Current Medications</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">What medications do you currently take?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Include prescriptions, vitamins, and supplements. Type "None" if not applicable.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Current Medications</label>
                    <textarea
                      value={medications}
                      onChange={(e) => setMedications(e.target.value)}
                      placeholder='e.g. Metformin 500mg, Lisinopril 10mg, Vitamin D — or type None'
                      rows={3}
                      className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.92rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors bg-white resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Known Allergies (optional)</label>
                    <input
                      type="text"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      placeholder='e.g. Penicillin — or type None'
                      className={inputClass}
                    />
                  </div>
                </div>
                <p className="text-[0.72rem] text-warm-400 mt-4">Reviewed only by your licensed provider. Protected under HIPAA.</p>
              </div>
            )}

            {step === 7 && (
              <div>
                {isGLP1 ? (
                  <>
                    <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Weight History</div>
                    <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Tell us about your weight loss history</h2>
                    <p className="text-[0.82rem] text-warm-600 mb-7">Helps your provider understand your journey and set realistic goals.</p>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[0.78rem] font-semibold text-warm-700 mb-3">Have you tried losing weight through diet and exercise before?</label>
                        <div className="space-y-2">
                          {[
                            { val: "yes_no_success", label: "Yes — tried but didn't get lasting results" },
                            { val: "yes_some_success", label: "Yes — had some success but regained weight" },
                            { val: "no", label: "No — this would be my first attempt" },
                          ].map((opt) => (
                            <label key={opt.val} className={radioClass(priorAttempts === opt.val)}>
                              <input type="radio" className="accent-red" checked={priorAttempts === opt.val} onChange={() => setPriorAttempts(opt.val)} />
                              <span className={`text-[0.85rem] ${priorAttempts === opt.val ? "text-red font-medium" : "text-warm-700"}`}>{opt.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Goal Weight (lbs)</label>
                        <input
                          type="number"
                          min="100"
                          max="400"
                          value={weightGoal}
                          onChange={(e) => setWeightGoal(e.target.value)}
                          placeholder="e.g. 180"
                          className={inputClass}
                        />
                        <p className="text-[0.72rem] text-warm-400 mt-1.5">Your provider will help set a safe and achievable target.</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Anything Else?</div>
                    <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Anything you'd like your provider to know?</h2>
                    <p className="text-[0.82rem] text-warm-600 mb-7">Optional — leave blank if nothing to add.</p>
                    <textarea
                      value={weightGoal}
                      onChange={(e) => setWeightGoal(e.target.value)}
                      placeholder="e.g. 'I've tried finasteride before' or 'I have a specific concern about...'"
                      rows={4}
                      className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.92rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors bg-white resize-none"
                    />
                  </>
                )}
              </div>
            )}

            {step === 8 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Your Location</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Which state are you in?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-7">Your provider must be licensed in your state. We serve all 50 states.</p>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3.5 text-[0.95rem] text-warm-800 focus:outline-none bg-white transition-colors"
                >
                  <option value="">Select your state</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            {step === 9 && (
              <div>
                <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Almost There</div>
                <h2 className="font-display font-black text-warm-800 text-2xl mb-2">Where should we send your results?</h2>
                <p className="text-[0.82rem] text-warm-600 mb-6">A provider reviews your assessment within 24–48 hours. Shipping address needed for medication delivery if approved.</p>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">First Name</label>
                      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">Last Name</label>
                      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">Phone Number</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">Shipping Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street address" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">City</label>
                      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[0.75rem] font-semibold text-warm-700 mb-1.5">ZIP Code</label>
                      <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="ZIP" maxLength={5} className={inputClass} />
                    </div>
                  </div>
                </div>
                <p className="text-[0.7rem] text-warm-400 mt-4 leading-[1.6]">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="underline hover:text-warm-600">Terms</a>,{" "}
                  <a href="/privacy" className="underline hover:text-warm-600">Privacy Policy</a>,{" "}
                  <a href="/medical-consent" className="underline hover:text-warm-600">Medical Consent</a>, and{" "}
                  <a href="/telehealth-consent" className="underline hover:text-warm-600">Telehealth Consent</a>.
                  Payment does not guarantee a prescription — all prescribing decisions are at your licensed provider's sole discretion.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className={`flex items-center gap-1.5 text-[0.82rem] font-medium text-warm-600 hover:text-warm-800 transition-colors ${step === 0 ? "invisible" : ""}`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              {step < TOTAL_STEPS - 1 ? (
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
                  {submitting ? (
                    <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit My Assessment <ChevronRight size={16} /></>
                  )}
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
