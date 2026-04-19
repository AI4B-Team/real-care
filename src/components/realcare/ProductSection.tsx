import SectionHeader from "./SectionHeader";

export interface Product {
  img: string;
  name: string;
  desc: string;
  price: string;
  pill?: string;
}

interface FeaturedProps {
  img: string;
  pill: string;
  title: React.ReactNode;
  desc: string;
  tags: string[];
  price: React.ReactNode;
  cta: string;
}

interface Props {
  id: string;
  bg: "white" | "warm";
  label: string;
  title: React.ReactNode;
  sub: string;
  ctaText: string;
  featured: FeaturedProps;
  products: Product[];
}

const ProductSection = ({ id, bg, label, title, sub, ctaText, featured, products }: Props) => {
  const sectionBg = bg === "white" ? "bg-background" : "bg-warm-50";
  return (
    <section id={id} className={`${sectionBg} px-5 md:px-12 pt-14 pb-24`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-10 gap-6 flex-wrap fade-up">
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">{label}</div>
            <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">{title}</h2>
            <p className="text-[0.88rem] text-warm-600 leading-[1.75] mt-3 max-w-[460px]">{sub}</p>
            <div className="inline-flex items-center gap-2 mt-4 bg-red/[0.08] text-red text-[0.7rem] font-semibold px-3 py-1.5 rounded-full">
              ✓ No membership or hidden fees — everything you need is included
            </div>
          </div>
          <a href="#" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.8rem] font-semibold px-5 py-2.5 rounded-md transition-colors">
            {ctaText}
          </a>
        </div>

        {/* Featured */}
        <div className="bg-warm-50 rounded-[18px] overflow-hidden grid lg:grid-cols-2 mb-5 border border-warm-100 fade-up delay-1 lg:h-[480px]">
          <div className="relative overflow-hidden h-[240px] lg:h-full">
            <img src={featured.img} alt="" className="w-full h-full object-cover object-center" />
          </div>
          <div className="p-8 flex flex-col justify-center bg-warm-50 lg:h-full lg:overflow-hidden">
            <span className="inline-block bg-red text-primary-foreground text-[0.57rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded mb-3 w-fit">
              {featured.pill}
            </span>
            <div className="font-display text-[1.65rem] font-black text-warm-800 leading-[1.15] mb-2.5">{featured.title}</div>
            <p className="text-[0.78rem] text-warm-600 leading-[1.65] mb-4">{featured.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {featured.tags.map((t) => (
                <span key={t} className="text-[0.6rem] font-semibold border border-warm-200 text-warm-600 px-2.5 py-1 rounded">{t}</span>
              ))}
            </div>
            <div className="text-[0.82rem] font-medium text-warm-600 mb-4">{featured.price}</div>
            <a href="#" className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.77rem] font-semibold px-6 py-3 rounded-[7px] transition-colors w-fit">
              {featured.cta}
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => {
            const isGLP1 = /GLP-1|Weight Loss/i.test(p.name);
            return (
            <a href="#" key={p.name} className={`bg-card border border-warm-100 rounded-[14px] overflow-hidden hover:shadow-hover hover:-translate-y-0.5 transition-all group flex flex-col fade-up delay-${(i % 4) + 1}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-warm-50">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                {p.pill && (
                  <span className="absolute top-2.5 left-2.5 bg-red text-primary-foreground text-[0.56rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
                    {p.pill}
                  </span>
                )}
                {isGLP1 && (
                  <span className="absolute bottom-2.5 left-2.5 right-2.5 bg-red text-primary-foreground text-[0.56rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full inline-flex items-center justify-center gap-1 shadow-soft">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                    Lose weight or your money back
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="font-display text-[1.07rem] font-bold text-warm-800 mb-1">{p.name}</div>
                <div className="text-[0.72rem] text-warm-400 leading-[1.5] mb-3">{p.desc}</div>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
                  {(isGLP1
                    ? ["1:1 Physician Guidance", "24/7 Support", "Money-Back Guarantee", "HSA/FSA Accepted", "Free Discreet Shipping"]
                    : ["1:1 Physician Guidance", "24/7 Support", "HSA/FSA Accepted", "Free Discreet Shipping"]
                  ).map((b) => (
                    <li key={b} className="inline-flex items-center gap-1 text-[0.62rem] font-medium text-warm-600">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="text-red flex-shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-3 border-t border-warm-100">
                  <div className="text-[0.8rem] font-bold text-red leading-tight">{p.price} <span className="text-warm-800 font-semibold">— Everything Included</span></div>
                  <div className="text-[0.66rem] text-warm-600 mt-1 leading-snug">Doctor Consult · Medication · Shipping · 24/7 Support</div>
                  <div className="text-[0.62rem] text-warm-400 mt-1">No Membership Fee. Cancel Anytime</div>
                  <div className="flex items-center justify-end mt-2">
                    <span className="text-[0.7rem] font-semibold text-warm-600 group-hover:text-red transition-colors">Start →</span>
                  </div>
                </div>
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
