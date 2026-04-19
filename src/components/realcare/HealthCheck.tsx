import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Who = "him" | "her" | "both";
type Goal = "weight" | "sex" | "hair" | "energy" | "mental";

const recommendations: Record<Goal, Record<Who, { n: string; p: string }[]>> = {
  weight: {
    him: [{ n: "GLP-1 Weight Loss", p: "From $179/mo" }, { n: "Testosterone Support", p: "From $99/mo" }],
    her: [{ n: "GLP-1 Weight Loss", p: "From $179/mo" }, { n: "Hormone Balance", p: "From $89/mo" }],
    both: [{ n: "GLP-1 Weight Loss", p: "From $179/mo" }, { n: "Couples Weight Plan", p: "From $279/mo (both)" }],
  },
  sex: {
    him: [{ n: "ED Treatment", p: "From $2/dose" }, { n: "Testosterone (TRT)", p: "From $99/mo" }],
    her: [{ n: "Sexual Health & Libido", p: "From $49/mo" }, { n: "Hormone Balance", p: "From $89/mo" }],
    both: [{ n: "ED Treatment (Him)", p: "From $2/dose" }, { n: "Libido Care (Her)", p: "From $49/mo" }],
  },
  hair: {
    him: [{ n: "Hair Loss Treatment", p: "From $39/mo" }, { n: "Finasteride Stack", p: "From $55/mo" }],
    her: [{ n: "Fuller, Thicker Hair", p: "From $39/mo" }, { n: "Hair Serum Blend", p: "From $59/mo" }],
    both: [{ n: "Fuller Hair (Her)", p: "From $39/mo" }, { n: "Hair Loss (Him)", p: "From $39/mo" }],
  },
  energy: {
    him: [{ n: "Testosterone (TRT)", p: "From $99/mo" }, { n: "Peptides & Longevity", p: "From $129/mo" }],
    her: [{ n: "Menopause Relief", p: "From $89/mo" }, { n: "Hormone Balance", p: "From $89/mo" }],
    both: [{ n: "Testosterone (Him)", p: "From $99/mo" }, { n: "Hormone Balance (Her)", p: "From $89/mo" }],
  },
  mental: {
    him: [{ n: "Mental Health Care", p: "From $49/mo" }, { n: "Anxiety Treatment", p: "From $49/mo" }],
    her: [{ n: "Mental Health Care", p: "From $49/mo" }, { n: "Anxiety & Burnout", p: "From $49/mo" }],
    both: [{ n: "Mental Health (Him)", p: "From $49/mo" }, { n: "Mental Health (Her)", p: "From $49/mo" }],
  },
};

const whoOpts: { val: Who; icon: string; name: string; sub: string }[] = [
  { val: "him", icon: "♂", name: "For Him", sub: "Men's health & performance" },
  { val: "her", icon: "♀", name: "For Her", sub: "Women's health & wellness" },
  { val: "both", icon: "♥", name: "For Both Of Us", sub: "Couples plan available from $279/mo" },
];

const goalOpts: { val: Goal; icon: string; name: string; sub: string }[] = [
  { val: "weight", icon: "⚖️", name: "Lose Weight", sub: "GLP-1 & metabolic care" },
  { val: "sex", icon: "💊", name: "Better Sex", sub: "Performance & libido" },
  { val: "hair", icon: "💆", name: "Fuller Hair", sub: "Regrowth & thickness" },
  { val: "energy", icon: "⚡", name: "More Energy", sub: "Testosterone & longevity" },
  { val: "mental", icon: "🧠", name: "Mental Health", sub: "Anxiety, depression, sleep" },
];

const HealthCheck = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [who, setWho] = useState<Who | "">("");
  const [goal, setGoal] = useState<Goal | "">("");

  const restart = () => { setStep(1); setWho(""); setGoal(""); };

  const cards = who && goal ? recommendations[goal][who] : [];

  return (
    <section id="health-check" className="bg-warm-50 px-5 md:px-12 pt-14 pb-24 border-y border-warm-100">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="fade-up">
          <SectionHeader
            label="Personalized Care"
            title={<>Your Real Care<br />Health Check</>}
            sub="Answer 3 quick questions and we'll match you to the right treatments in under 2 minutes."
            align="left"
          />
          <div className="flex flex-col gap-5 mt-9">
            {[
              { n: 1, t: "Who Is This For?", d: "Tell us whether you're looking for care for yourself, your partner, or both of you." },
              { n: 2, t: "What Is Your Main Goal?", d: "Pick the health concern that matters most to you right now." },
              { n: 3, t: "See Your Recommended Treatments", d: "We'll show you the exact treatments and starting prices matched to your answers." },
            ].map((s) => (
              <div key={s.n} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-warm-100">
                <div className="w-7 h-7 bg-red/10 border border-red/25 rounded-full flex items-center justify-center text-[0.7rem] font-bold text-red flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <div className="text-[0.87rem] font-semibold text-warm-800 mb-0.5">{s.t}</div>
                  <div className="text-[0.75rem] text-warm-400 leading-[1.6]">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-[20px] p-9 border border-warm-100 shadow-soft fade-up delay-1">
          <div className="flex gap-1.5 mb-7">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-[3px] rounded flex-1 transition-colors ${step >= i ? "bg-red" : "bg-warm-100"}`} />
            ))}
          </div>

          {step === 1 && (
            <>
              <div className="font-display text-2xl font-bold text-warm-800 mb-1.5">Who Is This For?</div>
              <div className="text-[0.78rem] text-warm-400 mb-7 leading-[1.5]">We'll personalize your results based on your answer.</div>
              <div className="flex flex-col gap-2.5">
                {whoOpts.map((o) => (
                  <button
                    key={o.val}
                    onClick={() => setWho(o.val)}
                    className={`flex items-center gap-3.5 px-5 py-3.5 border-[1.5px] rounded-[10px] transition-all text-left ${
                      who === o.val ? "bg-red/[0.06] border-red/30" : "bg-card border-warm-100 hover:bg-red/[0.06] hover:border-red/30"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-warm-100 flex items-center justify-center text-base flex-shrink-0">{o.icon}</div>
                    <div className="flex-1">
                      <div className="text-[0.85rem] font-semibold text-warm-800">{o.name}</div>
                      <div className="text-[0.68rem] text-warm-400 mt-0.5">{o.sub}</div>
                    </div>
                    <div className={`text-sm transition-colors ${who === o.val ? "text-red" : "text-warm-200"}`}>→</div>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-end mt-7 pt-5 border-t border-warm-100">
                <button
                  disabled={!who}
                  onClick={() => setStep(2)}
                  className="bg-red hover:bg-red-dark disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground text-[0.78rem] font-semibold px-6 py-2.5 rounded-[7px] transition-colors"
                >
                  Next →
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="font-display text-2xl font-bold text-warm-800 mb-1.5">What Is Your Main Goal?</div>
              <div className="text-[0.78rem] text-warm-400 mb-7 leading-[1.5]">Pick the one that matters most right now — you can always explore more later.</div>
              <div className="flex flex-col gap-2.5">
                {goalOpts.map((o) => (
                  <button
                    key={o.val}
                    onClick={() => setGoal(o.val)}
                    className={`flex items-center gap-3.5 px-5 py-3.5 border-[1.5px] rounded-[10px] transition-all text-left ${
                      goal === o.val ? "bg-red/[0.06] border-red/30" : "bg-card border-warm-100 hover:bg-red/[0.06] hover:border-red/30"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-warm-100 flex items-center justify-center text-base flex-shrink-0">{o.icon}</div>
                    <div className="flex-1">
                      <div className="text-[0.85rem] font-semibold text-warm-800">{o.name}</div>
                      <div className="text-[0.68rem] text-warm-400 mt-0.5">{o.sub}</div>
                    </div>
                    <div className={`text-sm transition-colors ${goal === o.val ? "text-red" : "text-warm-200"}`}>→</div>
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-7 pt-5 border-t border-warm-100">
                <button onClick={() => setStep(1)} className="text-[0.77rem] text-warm-400 hover:text-warm-800 transition-colors">← Back</button>
                <button
                  disabled={!goal}
                  onClick={() => setStep(3)}
                  className="bg-red hover:bg-red-dark disabled:opacity-40 disabled:cursor-not-allowed text-primary-foreground text-[0.78rem] font-semibold px-6 py-2.5 rounded-[7px] transition-colors"
                >
                  See My Matches →
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="font-display text-[1.35rem] font-bold text-warm-800 mb-1.5 text-center">Your Treatment Matches</div>
              <div className="text-[0.78rem] text-warm-400 mb-5 leading-[1.6] text-center">Based on your answers, here are your top recommendations.</div>
              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {cards.map((c) => (
                  <div key={c.n} className="bg-warm-50 border border-warm-100 rounded-[10px] p-4">
                    <div className="text-[0.83rem] font-semibold text-warm-800 mb-1">{c.n}</div>
                    <div className="text-[0.72rem] font-bold text-red">{c.p}</div>
                  </div>
                ))}
              </div>
              <a href="#men" className="block w-full text-center bg-red hover:bg-red-dark text-primary-foreground text-[0.77rem] font-semibold px-5 py-2.5 rounded-[7px] transition-colors">
                View All Treatments →
              </a>
              <div className="flex items-center justify-between mt-4 pt-5 border-t border-warm-100">
                <button onClick={restart} className="text-[0.77rem] text-warm-400 hover:text-warm-800 transition-colors">← Start Over</button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HealthCheck;
