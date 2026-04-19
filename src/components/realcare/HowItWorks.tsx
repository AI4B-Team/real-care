const steps = [
  {
    n: "01",
    title: "Complete Your Assessment",
    desc: "Answer a few questions about your health goals and history. Takes under 5 minutes. No waiting room. No judgment.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Meet Your Doctor",
    desc: "A licensed medical provider reviews your intake and creates a personalized treatment plan. Ongoing messaging always included — ask anything, anytime.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Treatment Delivered To You",
    desc: "Your prescription ships free from a certified U.S. pharmacy in discreet packaging — directly to your door in days, not weeks.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

const HowItWorks = () => (
  <section id="how" className="bg-warm-50 px-5 md:px-12 pt-14 pb-24 border-t border-warm-100">
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-8 fade-up">
        <div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Simple Process</div>
          <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">
            Care Without The Complexity
          </h2>
          <p className="text-[0.88rem] text-warm-600 leading-[1.75] mt-3">
            Most patients go from first question to first delivery in under 48 hours.
          </p>
        </div>
        <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
          Take Your Health Check →
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mt-14 fade-up delay-1">
        {steps.map((s) => (
          <div key={s.n} className="bg-card rounded-2xl p-8 border border-warm-100">
            <div className="font-display text-[3.5rem] font-black text-red/[0.12] leading-none mb-2">{s.n}</div>
            <div className="w-10 h-10 bg-red/[0.08] border border-red/15 rounded-[10px] flex items-center justify-center mb-4 text-red">
              {s.icon}
            </div>
            <div className="font-display text-xl font-bold text-warm-800 mb-2.5">{s.title}</div>
            <p className="text-[0.81rem] text-warm-600 leading-[1.75]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
