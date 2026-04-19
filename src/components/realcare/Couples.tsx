const Couples = () => (
  <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-24 text-center border-t border-warm-100">
    <div className="max-w-[760px] mx-auto">
      <span className="inline-block bg-red text-primary-foreground text-[0.6rem] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded mb-6">
        New — Couples Plan
      </span>
      <h2 className="font-display font-black text-warm-800 mb-4 leading-[1.05] text-[clamp(2.1rem,4.2vw,3.2rem)]">
        Better Together.<br />
        <span className="text-red">Save More. Get Treated Together.</span>
      </h2>
      <p className="text-[0.95rem] text-warm-600 max-w-[760px] mx-auto mb-7 leading-[1.7]">
        The only telehealth brand built for couples. Two people, one plan, real results — with shared coaching, shared shipping, and one simple payment.
      </p>
      <div className="font-display text-[1.7rem] font-bold text-warm-800 mb-2 leading-tight">
        Two Treatments. One Price.
      </div>
      <div className="text-[1rem] text-warm-600 mb-8">
        Starting at <span className="text-red font-bold">$279/mo</span> — for both of you
      </div>
      <a href="#health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.9rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 shadow-sm">
        Get Treated Together →
      </a>
      <div className="grid sm:grid-cols-3 gap-4 mt-12 max-w-[820px] mx-auto">
        {[
          {
            icon: "♂",
            name: "For Him",
            featured: false,
            items: ["Weight loss support", "Performance & energy", "Testosterone optimization"],
          },
          {
            icon: "♥",
            name: "Shared Benefits",
            featured: true,
            items: ["One dashboard", "Free shipping", "Shared coaching", "One simple payment"],
          },
          {
            icon: "♀",
            name: "For Her",
            featured: false,
            items: ["Weight loss support", "Hormone & skin care", "Hair & wellness"],
          },
        ].map((c) => (
          <div
            key={c.name}
            className={`bg-card rounded-[14px] p-6 text-left ${
              c.featured ? "border-2 border-red shadow-hover" : "border border-warm-100"
            }`}
          >
            <div className={`text-[1.5rem] mb-3 ${c.featured ? "text-red" : "text-warm-600"}`}>{c.icon}</div>
            <div
              className={`font-display text-[1.1rem] font-bold mb-3 ${
                c.featured ? "text-red" : "text-warm-800"
              }`}
            >
              {c.name}
            </div>
            <ul className="space-y-1.5">
              {c.items.map((item) => (
                <li key={item} className="text-[0.78rem] text-warm-600 leading-[1.5] flex items-start gap-2">
                  <span className="text-red font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Couples;
