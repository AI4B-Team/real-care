const stats = [
  { n: "50", l: "States Licensed" },
  { n: "24/7", l: "Provider Access" },
  { n: "$0", l: "Membership Fee — Ever" },
  { n: "100%", l: "Online — No Office Visit" },
];

const StatsCTA = () => (
  <div className="bg-red px-5 md:px-12 pt-14 pb-20 text-center">
    <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-3.5">The Numbers</div>
    <h2 className="font-display font-black text-primary-foreground mb-3.5 leading-[1.1] text-[clamp(2rem,4.5vw,3.5rem)]">
      Results You Can<br />Actually Measure
    </h2>
    <p className="text-[0.9rem] text-primary-foreground/70 max-w-[460px] mx-auto mb-8 leading-[1.7]">
      Doctor-prescribed care, delivered to your door. No waiting rooms, no insurance, no membership fees — ever.
    </p>
    <a href="/health-check" className="inline-block bg-background text-red text-[0.85rem] font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors">
      See What I Qualify For →
    </a>
    <div className="mt-4 text-[0.75rem] text-primary-foreground/70 font-medium">
      ✓ No Membership Or Hidden Fees — Everything You Need Is Included
    </div>
    <div className="flex justify-center gap-8 md:gap-16 mt-14 flex-wrap">
      {stats.map((s, i) => (
        <div key={s.l} className="flex items-center gap-8 md:gap-16">
          <div>
            <div className="font-display text-[2.8rem] font-black text-primary-foreground">{s.n}</div>
            <div className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50 mt-1">{s.l}</div>
          </div>
          {i < stats.length - 1 && <div className="hidden md:block w-px h-16 bg-primary-foreground/20" />}
        </div>
      ))}
    </div>
  </div>
);

export default StatsCTA;
