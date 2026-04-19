import step1 from "@/assets/step-1-assessment.jpg";
import step2 from "@/assets/step-2-doctor.jpg";
import step3 from "@/assets/step-3-delivery.jpg";

const steps = [
  {
    n: "01",
    img: step1,
    alt: "Complete a quick health assessment on your phone",
    title: "Complete Your Assessment",
    desc: "Answer a few questions about your health goals and history. Takes under 5 minutes. No waiting room. No judgment.",
    badge: "Reviewed by a licensed provider",
  },
  {
    n: "02",
    img: step2,
    alt: "Meet with a licensed doctor over video on your phone",
    title: "Meet Your Doctor",
    desc: "A licensed medical provider reviews your intake and creates a personalized treatment plan. Ongoing messaging always included — ask anything, anytime.",
    badge: "1:1 physician guidance",
  },
  {
    n: "03",
    img: step3,
    alt: "Treatment delivered discreetly to your door",
    title: "Treatment Delivered To You",
    desc: "Your prescription ships free from a certified U.S. pharmacy in discreet packaging — directly to your door in days, not weeks.",
    badge: "Ongoing support, 24/7 access",
  },
];

const HowItWorks = () => (
  <section id="how" className="bg-background px-5 md:px-12 pt-14 pb-24">
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-8 fade-up">
        <div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Simple Process</div>
          <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">
            Your Treatment In <span className="text-red">3 Simple Steps</span>
          </h2>
          <p className="text-[0.88rem] text-warm-600 leading-[1.75] mt-3">
            Most patients go from first question to first delivery in under 48 hours.
          </p>
        </div>
        <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
          Take Your Health Check →
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-14 fade-up delay-1">
        {steps.map((s, i) => (
          <div key={s.n} className="bg-card rounded-2xl border border-warm-100 overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 px-6 pt-5 pb-3">
              <div className="w-9 h-9 rounded-full bg-warm-800 text-primary-foreground font-display text-[0.95rem] font-bold flex items-center justify-center">
                {parseInt(s.n)}
              </div>
              <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-warm-400">
                Step {parseInt(s.n)} of 3
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-warm-100 overflow-hidden mx-4 rounded-xl">
              <img
                src={s.img}
                alt={s.alt}
                width={768}
                height={576}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-red text-primary-foreground flex items-center justify-center shadow-soft">
                {i === 0 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="13" y2="17" />
                  </svg>
                )}
                {i === 1 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                )}
                {i === 2 && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </div>
            <div className="p-6 pt-5">
              <div className="font-display text-xl font-bold text-warm-800 mb-2.5">{s.title}</div>
              <p className="text-[0.81rem] text-warm-600 leading-[1.75]">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold text-red bg-red/[0.08] border border-red/20 rounded-full px-3 py-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {s.badge}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
