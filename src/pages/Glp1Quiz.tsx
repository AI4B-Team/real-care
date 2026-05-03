import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface Question {
  id: string;
  prompt: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: "goal",
    prompt: "How much weight do you want to lose?",
    options: ["1–20 lbs", "21–50 lbs", "More than 50 lbs", "I'm not sure yet"],
  },
  {
    id: "bmi",
    prompt: "What is your current BMI range?",
    options: ["Under 25", "25–27", "27–30", "Over 30"],
  },
  {
    id: "history",
    prompt: "Have you tried losing weight before?",
    options: ["Never", "A few times", "Many times — nothing sticks", "I've used GLP-1 before"],
  },
  {
    id: "rx",
    prompt: "Do you currently have a GLP-1 prescription?",
    options: ["No", "Yes — but I want to switch", "Yes — and I'm happy", "Not sure"],
  },
];

const Glp1Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const isComplete = step >= questions.length;
  const current = questions[step];

  const handleSelect = (option: string) => {
    if (!current) return;
    setAnswers({ ...answers, [current.id]: option });
    setStep(step + 1);
  };

  return (
    <PageLayout title="GLP-1 Eligibility Quiz">
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
        <div className="max-w-[680px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">
            Free Eligibility Quiz
          </div>
          <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3rem)] mb-4">
            Could a GLP-1 Work<br />
            <span className="text-red">For You?</span>
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.7] max-w-[480px] mx-auto">
            Four quick questions. No email required. See in 30 seconds whether GLP-1 weight loss
            treatment may be a fit.
          </p>
        </div>
      </div>

      <div className="bg-background px-5 md:px-12 py-16">
        <div className="max-w-[640px] mx-auto">
          {!isComplete && current && (
            <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-10 fade-up">
              <div className="flex items-center justify-between mb-5">
                <div className="text-[0.7rem] font-semibold text-warm-400 uppercase tracking-[0.1em]">
                  Question {step + 1} of {questions.length}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-[0.75rem] text-warm-500 hover:text-warm-800 flex items-center gap-1"
                  >
                    <ArrowLeft size={12} /> Back
                  </button>
                )}
              </div>
              <div className="w-full h-1.5 bg-warm-100 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-red transition-all"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
              <h2 className="font-display font-bold text-warm-800 text-xl md:text-2xl mb-6">
                {current.prompt}
              </h2>
              <div className="space-y-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-3.5 border border-warm-200 hover:border-red rounded-lg text-left text-[0.9rem] font-medium text-warm-800 hover:bg-warm-50 transition-colors group"
                  >
                    <span>{option}</span>
                    <ChevronRight
                      size={16}
                      className="text-warm-300 group-hover:text-red transition-colors"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isComplete && (
            <div className="bg-card border border-warm-100 rounded-2xl p-7 md:p-10 text-center fade-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red/[0.1] text-red mb-5 font-display text-2xl font-black">
                ✓
              </div>
              <h2 className="font-display font-black text-warm-800 text-2xl md:text-3xl mb-3">
                You're a great candidate.
              </h2>
              <p className="text-[0.9rem] text-warm-600 leading-[1.7] max-w-[440px] mx-auto mb-6">
                Take our free 3-minute health check. A licensed provider will review your profile
                and, if appropriate, ship medication within 7–10 days.
              </p>
              <a
                href="/health-check"
                className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors"
              >
                Start My Health Check <ChevronRight size={16} />
              </a>
              <div className="text-[0.7rem] text-warm-400 mt-5">
                From $179/mo · No membership fee · 90-day results guarantee (terms apply)
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Glp1Quiz;
