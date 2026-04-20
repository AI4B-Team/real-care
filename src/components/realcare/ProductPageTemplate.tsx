import { ReactNode } from "react";
import PageLayout from "./PageLayout";
import { ChevronRight } from "lucide-react";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface Medication {
  name: string;
  desc: string;
  price: string;
  popular?: boolean;
  bullets: string[];
}

interface ProductPageProps {
  title?: string;
  label: string;
  pill?: string;
  headline: ReactNode;
  sub: string;
  trustBullets: string[];
  howTitle: string;
  howItems: { title: string; desc: string }[];
  medications: Medication[];
  ctaHeadline: string;
  ctaSub: string;
  disclaimer?: string;
  pageTitle: string;
}

const ProductPageTemplate = ({
  title,
  label,
  pill,
  headline,
  sub,
  trustBullets,
  howTitle,
  howItems,
  medications,
  ctaHeadline,
  ctaSub,
  disclaimer,
  pageTitle,
}: ProductPageProps) => (
  <PageLayout title={pageTitle}>
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
            {label}
          </div>
          {pill && (
            <div className="inline-flex items-center gap-1.5 bg-red text-primary-foreground text-[0.62rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded">
              <Check /> {pill}
            </div>
          )}
        </div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3.2rem)] mb-4 max-w-[680px]">
          {headline}
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[540px] mb-6">{sub}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <a href="#treatments" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
            See If I Qualify <ChevronRight size={16} />
          </a>
          <a href="/how-it-works" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
            How It Works
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {trustBullets.map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[0.72rem] text-warm-600">
              <span className="text-red"><Check /></span>{t}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* How it works for this treatment */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">How It Works</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">{howTitle}</h2>
        </div>
        <div className={`grid gap-5 ${howItems.length === 2 ? "md:grid-cols-2" : howItems.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {howItems.map((item) => (
            <div key={item.title} className="bg-card border border-warm-100 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-full bg-red/[0.1] flex items-center justify-center mb-4">
                <span className="text-red"><Check /></span>
              </div>
              <h3 className="font-display font-bold text-warm-800 text-base mb-2">{item.title}</h3>
              <p className="text-[0.82rem] text-warm-600 leading-[1.75]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Treatments */}
    <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-16" id="treatments">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Treatment Options</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Choose Your Plan</h2>
          <p className="text-[0.85rem] text-warm-600 mt-3 max-w-[400px] mx-auto">Your provider recommends the right option based on your health profile.</p>
        </div>
        <div className={`grid gap-5 ${medications.length <= 2 ? "max-w-[800px] mx-auto md:grid-cols-2" : medications.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {medications.map((med) => (
            <div key={med.name} className={`bg-card rounded-2xl border overflow-hidden ${med.popular ? "border-red shadow-soft" : "border-warm-100"}`}>
              {med.popular && (
                <div className="bg-red text-primary-foreground text-center text-[0.65rem] font-bold tracking-[0.1em] uppercase py-2">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display font-bold text-warm-800 text-lg mb-1">{med.name}</h3>
                <p className="text-[0.78rem] text-warm-400 italic mb-4">{med.desc}</p>
                <div className="space-y-2 mb-6">
                  {med.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-[0.81rem] text-warm-600">
                      <span className="text-red flex-shrink-0"><Check /></span>{b}
                    </div>
                  ))}
                </div>
                <div className="border-t border-warm-100 pt-4 mb-4">
                  <div className="text-red font-bold text-lg">{med.price}</div>
                  <div className="text-[0.67rem] text-warm-400">Doctor Consult · Medication · Shipping · Support</div>
                  <div className="text-[0.67rem] text-warm-400 mt-0.5">No membership fee. Cancel anytime.</div>
                </div>
                <a href="/health-check" className="w-full bg-red hover:bg-red-dark text-primary-foreground font-bold py-2.5 rounded-lg text-[0.85rem] flex items-center justify-center gap-1 transition-colors">
                  Get Started <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
      <div className="max-w-[560px] mx-auto">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-3">Get Started</div>
        <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.4rem)] mb-4">{ctaHeadline}</h2>
        <p className="text-[0.88rem] text-primary-foreground/70 mb-6">{ctaSub}</p>
        <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]">
          Take Your Health Check →
        </a>
        <div className="flex flex-wrap justify-center gap-5 mt-5">
          {["No Membership Fee", "24/7 Provider Access", "Free Discreet Shipping", "Cancel Anytime"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[0.7rem] text-primary-foreground/60">
              <Check />{t}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    {disclaimer && (
      <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
        <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">{disclaimer}</p>
      </div>
    )}
  </PageLayout>
);

export default ProductPageTemplate;
