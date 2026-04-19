const Couples = () => (
  <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-24 text-center border-t border-warm-100">
    <div className="max-w-[680px] mx-auto">
      <span className="inline-block bg-red text-primary-foreground text-[0.6rem] font-bold tracking-[0.14em] uppercase px-3.5 py-1.5 rounded mb-6">
        Exclusive — Real Care Couples Plan
      </span>
      <h2 className="font-display font-black text-warm-800 mb-3.5 leading-[1.1] text-[clamp(2rem,4vw,3rem)]">
        Real Care For Two
      </h2>
      <p className="text-[0.88rem] text-warm-600 max-w-[440px] mx-auto mb-6 leading-[1.75]">
        The only telehealth brand built for couples. Share the wellness journey, share the savings. Both treated under one membership.
      </p>
      <div className="font-display text-[1.6rem] font-bold text-warm-800 mb-8">
        Starting At <span className="text-red">$279/mo</span> For Both
      </div>
      <a href="#health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
        Learn About Couples Care →
      </a>
      <div className="flex justify-center gap-5 mt-10 flex-wrap">
        {[
          { icon: "♂", name: "His Plan", desc: "Weight loss + ED or testosterone included", featured: false },
          { icon: "♥", name: "Together", desc: "Shared Care Coaching · Free Shipping · One Dashboard", featured: true },
          { icon: "♀", name: "Her Plan", desc: "Weight loss + menopause or hair included", featured: false },
        ].map((c) => (
          <div key={c.name} className={`bg-card rounded-[13px] p-7 text-left w-[195px] ${c.featured ? "border-2 border-red" : "border border-warm-100"}`}>
            <div className={`text-[1.35rem] mb-3 ${c.featured ? "text-red" : ""}`}>{c.icon}</div>
            <div className={`font-display text-[1.05rem] font-bold mb-1.5 ${c.featured ? "text-red" : "text-warm-800"}`}>{c.name}</div>
            <div className="text-[0.72rem] text-warm-400 leading-[1.5]">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Couples;
