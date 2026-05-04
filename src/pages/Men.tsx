import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const treatments = [
  { name: "GLP-1 Weight Loss", sub: "From $179 first month", href: "/weight-loss", badge: "Most Popular", desc: "Semaglutide & tirzepatide. Same active ingredient as Ozempic® — at a fraction of the cost." },
  { name: "Better Sex (ED)", sub: "From $2/dose", href: "/ed-treatment", desc: "Fast-acting ED treatment. Prescribed by licensed providers. Plain, discreet packaging." },
  { name: "Testosterone (TRT)", sub: "From $99/mo", href: "/testosterone", desc: "Lab testing + personalized TRT. More energy, stronger drive, better mood." },
  { name: "Hair Loss & Regrowth", sub: "From $39/mo", href: "/hair-loss", desc: "Finasteride + minoxidil — the same active ingredients used in clinically studied hair loss treatments." },
  { name: "Peptides & Longevity", sub: "From $129/mo", href: "/peptides", badge: "Coming Soon", comingSoon: true, desc: "BPC-157, Sermorelin, CJC-1295 for recovery, muscle, and peak performance." },
  { name: "Mental Health", sub: "From $49/mo", href: "/mental-health", desc: "Anxiety, depression, and sleep — online prescriptions from licensed psychiatric providers." },
  { name: "Comprehensive Lab Testing", sub: "From $149", href: "/lab-testing", desc: "40+ biomarkers. Doctor-reviewed results and personalized action plan included." },
  { name: "Supplements & Nutrition", sub: "From $49/mo", href: "/health-check", badge: "Coming Soon", comingSoon: true, desc: "Doctor-formulated stacks and GLP-1 aligned meal plans shipped monthly." },
];

const Men = () => (
  <PageLayout title="Men's Health">
    {/* Hero */}
    <div className="bg-warm-800 px-5 md:px-12 py-20">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Men's Health</div>
        <h1 className="font-display font-black leading-[1.05] text-white text-[clamp(2.2rem,4vw,3.8rem)] mb-4 max-w-[700px]">
          Built For Men<br />
          <span className="text-red">Who Expect More.</span>
        </h1>
        <p className="text-[0.9rem] text-white/70 leading-[1.75] max-w-[520px] mb-8">
          Doctor-prescribed care for weight loss, performance, testosterone, hair, and more. All online. All discreet. One simple price with no membership fees.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="/health-check" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
            Take Your Health Check <ChevronRight size={16} />
          </a>
          <a href="/pricing" className="border border-white/20 text-white font-medium px-6 py-3 rounded-lg text-[0.88rem] hover:border-white/50 transition-colors">
            View Pricing
          </a>
        </div>
      </div>
    </div>

    {/* Trust bar */}
    <div className="bg-red px-5 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 justify-center">
        {["No Membership Fee — Ever", "Doctor Consult Included", "Free Discreet Shipping", "Cancel Anytime"].map((t) => (
          <div key={t} className="flex items-center gap-2 text-[0.78rem] font-semibold text-primary-foreground">
            <Check />{t}
          </div>
        ))}
      </div>
    </div>

    {/* Treatments grid */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-24">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">All Treatments</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Everything You Need. One Place.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {treatments.map((t) => {
            const isComingSoon = (t as any).comingSoon;
            const cardClass = `bg-card border border-warm-100 rounded-2xl p-6 transition-all block ${isComingSoon ? "opacity-90 cursor-default" : "hover:border-red hover:shadow-soft group"}`;
            const inner = (
              <>
                {t.badge && (
                  <span className={`inline-block text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-0.5 rounded-full mb-3 ${isComingSoon ? "bg-warm-100 text-warm-600" : "bg-red text-primary-foreground"}`}>{t.badge}</span>
                )}
                <h3 className={`font-display font-bold text-warm-800 text-lg mb-1 ${isComingSoon ? "" : "group-hover:text-red"} transition-colors`}>{t.name}</h3>
                <div className="text-red font-semibold text-[0.82rem] mb-2">{t.sub}</div>
                <p className="text-[0.78rem] text-warm-600 leading-[1.65] mb-4">{t.desc}</p>
                {!isComingSoon && (
                  <div className="flex items-center gap-1 text-[0.78rem] font-semibold text-warm-800 group-hover:text-red transition-colors">
                    Learn More <ChevronRight size={14} />
                  </div>
                )}
              </>
            );
            return isComingSoon ? (
              <div key={t.name} className={cardClass}>{inner}</div>
            ) : (
              <a key={t.name} href={t.href} className={cardClass}>{inner}</a>
            );
          })}
        </div>

        {/* Includes callout */}
        <div className="mt-12 bg-warm-50 border border-warm-100 rounded-2xl p-7 md:p-8">
          <div className="text-center mb-6">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Every Plan Includes</div>
            <h3 className="font-display font-bold text-warm-800 text-xl">Doctor Consult · Medication · Shipping · 24/7 Support</h3>
            <p className="text-[0.85rem] text-warm-600 mt-2">No membership fee. No hidden charges. Cancel anytime.</p>
          </div>
          <div className="flex justify-center">
            <a href="/health-check" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
              Take Your Free Health Check →
            </a>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Men;
