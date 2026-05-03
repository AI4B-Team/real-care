import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const treatments = [
  { name: "GLP-1 Weight Loss", sub: "From $179 first month", href: "/weight-loss", badge: "Most Popular", desc: "Semaglutide & tirzepatide — doctor-guided weight loss with a 90-day results guarantee (terms apply)." },
  { name: "Menopause & HRT", sub: "From $89/mo", href: "/menopause", badge: "Specialist Care", desc: "Bioidentical hormone therapy for hot flashes, brain fog, sleep, and mood." },
  { name: "Prescription Skincare", sub: "From $35/mo", href: "/skincare", desc: "Custom prescription formulas for acne, anti-aging, dark spots, and texture." },
  { name: "Hair Regrowth", sub: "From $39/mo", href: "/hair-loss", desc: "Prescription minoxidil blends to stop shedding and restore volume and density." },
  { name: "Sexual Health & Libido", sub: "From $49/mo", href: "/health-check", badge: "Coming Soon", comingSoon: true, desc: "Low libido treatment, vaginal dryness, and sexual wellness — private and effective." },
  { name: "Mental Health", sub: "From $49/mo", href: "/mental-health", desc: "Anxiety, burnout, and low mood — gentle, effective treatment from licensed providers." },
  { name: "Birth Control", sub: "From $20/mo", href: "/health-check", badge: "Coming Soon", comingSoon: true, desc: "Pill, patch, and ring — prescribed online, shipped free. No in-person visit required." },
  { name: "Women's Supplements", sub: "From $45/mo", href: "/health-check", badge: "Coming Soon", comingSoon: true, desc: "Collagen, hormone support, GLP-1 companion vitamins — doctor-formulated for women." },
  { name: "Lab Testing", sub: "From $149", href: "/lab-testing", desc: "Hormones, thyroid, metabolic panel — comprehensive labs with a doctor-reviewed action plan." },
];

const Women = () => (
  <PageLayout title="Women's Health">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-20">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Women's Health</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.8rem)] mb-4 max-w-[700px]">
          Whole-Body Care<br />
          <span className="text-red">Built Around Her.</span>
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[520px] mb-8">
          Menopause relief, GLP-1 weight loss, fuller hair, clearer skin — personalized care for every stage of life. Doctor-prescribed, delivered to your door.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="/health-check" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
            Take Your Health Check <ChevronRight size={16} />
          </a>
          <a href="/pricing" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
            View Pricing
          </a>
        </div>
      </div>
    </div>

    {/* Trust bar */}
    <div className="bg-red px-5 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 justify-center">
        {["No Membership Fee — Ever", "1:1 Physician Guidance", "Free Discreet Shipping", "Cancel Anytime"].map((t) => (
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
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">All Women's Treatments</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Every Stage. Every Goal.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <div className="mt-12 bg-warm-800 rounded-2xl p-7 md:p-8 text-center">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Every Plan Includes</div>
          <h3 className="font-display font-bold text-white text-xl mb-2">Doctor Consult · Medication · Shipping · 24/7 Support</h3>
          <p className="text-[0.85rem] text-white/60 mb-5">No membership fee. No hidden charges. Cancel anytime.</p>
          <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
            Take Your Free Health Check →
          </a>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Women;
