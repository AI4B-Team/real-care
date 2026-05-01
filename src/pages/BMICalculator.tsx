import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight } from "lucide-react";

const BMICalculator = () => {
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");

  const getBMI = () => {
    const ft = parseInt(heightFt) || 0;
    const inches = parseInt(heightIn) || 0;
    const totalInches = ft * 12 + inches;
    const lbs = parseFloat(weight) || 0;
    if (!totalInches || !lbs) return null;
    return (lbs / (totalInches * totalInches)) * 703;
  };

  const bmi = getBMI();
  const bmiDisplay = bmi ? bmi.toFixed(1) : null;

  const getCategory = (b: number) => {
    if (b < 18.5) return { label: "Underweight", color: "text-blue-600", bg: "bg-blue-50 border-blue-200" };
    if (b < 25) return { label: "Normal Weight", color: "text-green-700", bg: "bg-green-50 border-green-200" };
    if (b < 30) return { label: "Overweight", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" };
    return { label: "Obese", color: "text-red", bg: "bg-red/[0.05] border-red/20" };
  };

  const getEligibility = (b: number) => {
    if (b >= 30)
      return {
        eligible: true,
        title: "You May Qualify for GLP-1 Treatment",
        message:
          "A BMI of 30 or above meets the primary clinical threshold for GLP-1 weight loss medications. A Real Care provider can evaluate your full health profile and recommend the right treatment plan.",
        cta: "See If I Qualify",
      };
    if (b >= 27)
      return {
        eligible: true,
        title: "You May Qualify With a Health Condition",
        message:
          "A BMI of 27–29.9 may qualify for GLP-1 treatment if you have a weight-related health condition such as high blood pressure, type 2 diabetes, or high cholesterol. A provider will review your full assessment.",
        cta: "Take the Health Check",
      };
    return {
      eligible: false,
      title: "GLP-1 May Not Be the Right Fit",
      message:
        "GLP-1 medications are typically prescribed for a BMI of 27 or above. However, Real Care offers a range of other health programs – including hormone optimization, skincare, and more.",
      cta: "Explore All Treatments",
    };
  };

  const inputClass =
    "w-full border-2 border-warm-100 focus:border-red rounded-xl px-4 py-3 text-[0.95rem] text-warm-800 placeholder:text-warm-300 focus:outline-none transition-colors bg-white";

  return (
    <PageLayout title="BMI Calculator — Am I Eligible for GLP-1?">
      {/* Hero */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
        <div className="max-w-[680px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Free Tool</div>
          <h1 className="font-display font-black text-warm-800 text-[clamp(2rem,4vw,3rem)] leading-[1.05] mb-4">
            BMI Calculator
          </h1>
          <p className="text-[0.92rem] text-warm-600 leading-[1.7] max-w-[560px] mx-auto">
            Calculate your Body Mass Index and find out if you may qualify for GLP-1 weight loss medications — the same treatments prescribed by Ozempic® and Wegovy®.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="bg-background px-5 md:px-12 py-14 border-b border-warm-100">
        <div className="max-w-[680px] mx-auto fade-up">
          <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-9 shadow-soft">
            <h2 className="font-display font-bold text-warm-800 text-xl mb-6">Enter Your Measurements</h2>

            <div className="space-y-5">
              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Height</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    min="4"
                    max="7"
                    value={heightFt}
                    onChange={(e) => setHeightFt(e.target.value)}
                    placeholder="Feet"
                    className={inputClass}
                  />
                  <input
                    type="number"
                    min="0"
                    max="11"
                    value={heightIn}
                    onChange={(e) => setHeightIn(e.target.value)}
                    placeholder="Inches"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Weight (lbs)</label>
                <input
                  type="number"
                  min="80"
                  max="600"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Your weight in pounds"
                  className={inputClass}
                />
              </div>
            </div>

            {/* BMI Result */}
            {bmi && bmiDisplay && (
              <div className={`mt-7 rounded-xl border p-6 ${getCategory(bmi).bg}`}>
                <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-warm-600 mb-1">Your BMI</div>
                    <div className="font-display font-black text-5xl text-warm-800 leading-none">{bmiDisplay}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-display font-bold text-xl ${getCategory(bmi).color}`}>{getCategory(bmi).label}</div>
                    <div className="text-[0.75rem] text-warm-600 mt-0.5">
                      {bmi < 18.5 ? "Under 18.5" : bmi < 25 ? "18.5 – 24.9" : bmi < 30 ? "25.0 – 29.9" : "30.0 and above"}
                    </div>
                  </div>
                </div>

                {/* BMI Scale */}
                <div className="grid grid-cols-4 gap-1 text-[0.62rem] font-semibold text-warm-600 text-center">
                  {["Under 18.5", "18.5–25", "25–30", "30+"].map((l) => (
                    <div key={l} className="bg-white/60 rounded px-1.5 py-1.5 border border-warm-100">{l}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Eligibility Message */}
            {bmi && bmiDisplay && (() => {
              const el = getEligibility(bmi);
              return (
                <div className={`mt-5 rounded-xl border p-6 ${el.eligible ? "bg-green-50 border-green-200" : "bg-warm-50 border-warm-100"}`}>
                  <h3 className={`font-display font-bold text-lg mb-2 ${el.eligible ? "text-green-800" : "text-warm-800"}`}>
                    {el.title}
                  </h3>
                  <p className="text-[0.85rem] text-warm-700 leading-[1.7] mb-4">{el.message}</p>
                  <a
                    href="/health-check"
                    className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-3 rounded-lg text-[0.88rem] transition-colors"
                  >
                    {el.cta} <ChevronRight size={16} />
                  </a>
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* What is BMI */}
      <div className="bg-warm-50 px-5 md:px-12 py-14 border-b border-warm-100">
        <div className="max-w-[680px] mx-auto fade-up">
          <h2 className="font-display font-bold text-warm-800 text-lg mb-4">What Is BMI?</h2>
          <p className="text-[0.88rem] text-warm-600 leading-[1.75] mb-5">
            Body Mass Index (BMI) is a measurement calculated from your height and weight. It's the primary clinical screening tool used to determine eligibility for GLP-1 weight loss medications.
          </p>
          <div className="space-y-2 mb-5">
            {[
              { range: "Under 18.5", label: "Underweight", color: "bg-blue-100 text-blue-800" },
              { range: "18.5 – 24.9", label: "Normal weight", color: "bg-green-100 text-green-800" },
              { range: "25.0 – 29.9", label: "Overweight — may qualify with a health condition", color: "bg-amber-100 text-amber-800" },
              { range: "30.0 and above", label: "Obese — likely qualifies for GLP-1", color: "bg-red/[0.08] text-red" },
            ].map((item) => (
              <div key={item.range} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg ${item.color}`}>
                <span className="text-[0.82rem] font-bold min-w-[110px]">{item.range}</span>
                <span className="text-[0.78rem]">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[0.75rem] text-warm-400 leading-[1.7] italic">
            BMI is a screening tool, not a diagnostic measure. A BMI of 27–29.9 may qualify for GLP-1 treatment if accompanied by a weight-related health condition. All prescribing decisions are made solely by your licensed provider based on your full health assessment.
          </p>
        </div>
      </div>

      {/* Other calculators coming */}
      <div className="bg-background px-5 md:px-12 py-12 border-b border-warm-100">
        <div className="max-w-[680px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">More Tools Coming</div>
          <p className="text-[0.85rem] text-warm-600">
            Calorie Calculator, TDEE Calculator, Protein Calculator, and Weight Loss Timeline — coming soon.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-warm-800 px-5 md:px-12 py-14 text-center fade-up">
        <div className="max-w-[600px] mx-auto">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Ready to Start?</div>
          <h2 className="font-display font-black text-white text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
            Take Your Free Health Check
          </h2>
          <p className="text-[0.88rem] text-white/70 leading-[1.75] mb-6">
            A full medical assessment takes 5 minutes. A board-certified provider reviews your intake within 24–48 hours and recommends the right treatment plan for you.
          </p>
          <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
            Start My Free Health Check →
          </a>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
        <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
          This BMI calculator is for informational purposes only and does not constitute medical advice. BMI is a screening tool and does not account for all factors relevant to health or GLP-1 eligibility. A licensed provider makes all prescribing decisions based on your complete health assessment. Individual results vary.
        </p>
      </div>
    </PageLayout>
  );
};

export default BMICalculator;
