import { ReactNode, useState } from "react";
import PageLayout from "./PageLayout";
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  CircleDot,
  MapPin,
  Stethoscope,
  Truck,
  Clock,
  HeartHandshake,
  ClipboardList,
  Package,
} from "lucide-react";

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

interface PlanOption {
  label: string;        // e.g. "3-Month Plan"
  price: string;        // e.g. "$129"
  priceSuffix?: string; // e.g. "first month"
  afterPrice?: string;  // e.g. "$209/mo after"
  badge?: string;       // e.g. "Best Value"
}

interface PlanGroup {
  group: string;        // e.g. "Compounded Semaglutide"
  options: PlanOption[];
}

interface FAQ {
  q: string;
  a: string;
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

  /** Eden-style hero options. */
  productImage?: string;
  productImageAlt?: string;
  /** Tailwind class for the product image panel background, e.g. "bg-[#D7EEE4]". */
  heroBg?: string;
  /** Short tagline shown under the headline in the buy card. */
  tagline?: string;
  /** Yellow savings banner text, e.g. "Save $80 on your first order". */
  savingsLabel?: string;
  /** Grouped plan selector. Falls back to `medications` if omitted. */
  plans?: PlanGroup[];
  faqs?: FAQ[];
}

const DEFAULT_FAQS: FAQ[] = [
  {
    q: "What's Included In My Real Care Plan?",
    a: "Your plan includes an online medical assessment, ongoing access to a U.S.-licensed provider, your prescribed medication if appropriate for your health profile, free discreet shipping, and unlimited messaging support — all for one flat monthly price.",
  },
  {
    q: "How Soon Will I See Results?",
    a: "Timelines vary by treatment and individual response. Most patients begin to notice changes within the first 30–90 days of consistent use. Your provider will set realistic expectations based on your specific plan and check in regularly.",
  },
  {
    q: "Do I Need Insurance?",
    a: "No. Real Care is cash-pay only — no insurance is required. We accept HSA and FSA cards, which can effectively reduce your cost by up to 30–40% depending on your tax bracket.",
  },
  {
    q: "Can I Cancel Anytime?",
    a: "Yes. There is no membership fee and no long-term contract. You can pause or cancel your plan at any time directly from your patient portal.",
  },
  {
    q: "Who Prescribes My Medication?",
    a: "All prescriptions are written by independent, board-certified U.S.-licensed providers in our network — only after they review your intake and confirm the treatment is clinically appropriate for you.",
  },
  {
    q: "Is It Discreet?",
    a: "Yes. Every order ships in plain, unbranded packaging. Your medical information is protected under HIPAA and never shared with third parties.",
  },
];

const ProductPageTemplate = ({
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
  productImage,
  productImageAlt,
  heroBg = "bg-[#D7EEE4]",
  tagline,
  savingsLabel,
  plans,
  faqs = DEFAULT_FAQS,
}: ProductPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const planGroups: PlanGroup[] =
    plans ??
    medications.map((m) => ({
      group: m.name,
      options: [
        {
          label: m.desc,
          price: m.price.replace(/^From\s+/i, ""),
          badge: m.popular ? "Best Value" : undefined,
        },
      ],
    }));

  return (
    <PageLayout title={pageTitle}>
      {/* Hero — Eden-style: big image left, buy card right */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-10 md:py-14">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start fade-up">
          {/* Image panel */}
          <div className="relative">
            <div className={`aspect-square lg:aspect-[4/5] rounded-3xl ${heroBg} overflow-hidden`}>
              {productImage && (
                <img
                  src={productImage}
                  alt={productImageAlt || "Product"}
                  loading="eager"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white text-emerald-700 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In Stock
            </div>
          </div>

          {/* Buy card */}
          <div className="lg:pt-2">
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

            <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4.4vw,3.4rem)] mb-3">
              {headline}
            </h1>
            {tagline && (
              <p className="text-[1rem] text-warm-600 leading-[1.55] mb-6">{tagline}</p>
            )}

            {savingsLabel && (
              <div className="flex items-center justify-center gap-2 bg-amber-100 text-warm-800 text-[0.85rem] font-semibold rounded-2xl py-3 px-4 mb-4">
                <ShieldCheck size={16} className="text-amber-600" />
                {savingsLabel}
              </div>
            )}

            <div className="bg-card border border-warm-100 rounded-2xl p-5 md:p-6 shadow-soft">
              {planGroups.map((g, gi) => (
                <div key={g.group} className={gi > 0 ? "mt-5 pt-5 border-t border-warm-100" : ""}>
                  <div className="text-center font-display font-bold text-warm-800 text-[0.95rem] mb-3">
                    {g.group}
                  </div>
                  <div className="space-y-2">
                    {g.options.map((opt) => (
                      <div
                        key={opt.label + opt.price}
                        className="relative flex items-center justify-between gap-3 bg-warm-50 border border-warm-100 rounded-xl px-4 py-3"
                      >
                        {opt.badge && (
                          <span className="absolute -top-2 right-3 bg-emerald-500 text-white text-[0.6rem] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                        )}
                        <div className="text-[0.85rem] font-semibold text-warm-800">{opt.label}</div>
                        <div className="text-right">
                          <div className="leading-tight">
                            <span className="text-warm-800 font-bold text-[1.1rem]">{opt.price}</span>
                            {opt.priceSuffix && (
                              <span className="text-emerald-700 text-[0.72rem] font-semibold ml-1">
                                {opt.priceSuffix}
                              </span>
                            )}
                          </div>
                          {opt.afterPrice && (
                            <div className="text-[0.68rem] text-warm-500">{opt.afterPrice}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="/health-check"
                className="mt-5 w-full bg-warm-800 hover:bg-warm-900 text-white font-bold px-6 py-3.5 rounded-xl text-[0.95rem] transition-colors flex items-center justify-center gap-2"
              >
                See If I Qualify <ChevronRight size={16} />
              </a>
              <div className="text-center text-[0.7rem] text-warm-500 mt-2">
                Discount auto-applied at checkout
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {trustBullets.map((t) => (
                <div key={t} className="flex items-center gap-2 text-[0.8rem] text-warm-700">
                  <span className="text-emerald-600 flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </span>
                  {t}
                </div>
              ))}
            </div>

            <p className="text-[0.78rem] text-warm-600 leading-[1.7] mt-6">{sub}</p>

            <div className="flex items-center gap-2 mt-4 text-[0.72rem] text-warm-500">
              <MapPin size={12} className="text-red" />
              Compounded In The U.S.A. By State-Licensed Pharmacies
            </div>
          </div>
        </div>
      </div>

      {/* How It Works (treatment-specific) */}
      <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
        <div className="max-w-[1280px] mx-auto fade-up">
          <div className="text-center mb-10">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">How It Works</div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">{howTitle}</h2>
          </div>
          <div
            className={`grid gap-5 ${
              howItems.length === 2
                ? "md:grid-cols-2"
                : howItems.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
            }`}
          >
            {howItems.map((item) => (
              <div key={item.title} className="bg-card border border-warm-100 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-full bg-red/[0.1] flex items-center justify-center mb-4">
                  <span className="text-red">
                    <Check />
                  </span>
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
            <p className="text-[0.85rem] text-warm-600 mt-3 max-w-[440px] mx-auto">
              Your provider recommends the right option based on your health profile and goals.
            </p>
          </div>
          <div
            className={`grid gap-5 ${
              medications.length <= 2
                ? "max-w-[800px] mx-auto md:grid-cols-2"
                : medications.length === 3
                ? "lg:grid-cols-3"
                : "md:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {medications.map((med) => (
              <div
                key={med.name}
                className={`bg-card rounded-2xl border overflow-hidden ${
                  med.popular ? "border-red shadow-soft" : "border-warm-100"
                }`}
              >
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
                      <div key={b} className="flex items-start gap-2 text-[0.81rem] text-warm-600 leading-[1.55]">
                        <span className="text-red flex-shrink-0 mt-0.5">
                          <Check />
                        </span>
                        {b}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-warm-100 pt-4 mb-4">
                    <div className="text-red font-bold text-lg">{med.price}</div>
                    <div className="text-[0.67rem] text-warm-400">Doctor Consult · Medication · Shipping · Support</div>
                    <div className="text-[0.67rem] text-warm-400 mt-0.5">No Membership Fee. Cancel Anytime.</div>
                  </div>
                  <a
                    href="/health-check"
                    className="w-full bg-red hover:bg-red-dark text-primary-foreground font-bold py-2.5 rounded-lg text-[0.85rem] flex items-center justify-center gap-1 transition-colors"
                  >
                    Get Started <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
        <div className="max-w-[1280px] mx-auto fade-up">
          <div className="text-center mb-10">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">The Process</div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
              From Consult To Doorstep
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                icon: <ClipboardList size={20} />,
                title: "Consult",
                desc: "Complete a 5-minute online health assessment. A licensed provider reviews your intake within 24–48 hours.",
              },
              {
                step: "02",
                icon: <Package size={20} />,
                title: "Receive",
                desc: "If prescribed, your medication ships free in discreet packaging within 2 business days. Most orders arrive in 7–10 days.",
              },
              {
                step: "03",
                icon: <HeartHandshake size={20} />,
                title: "Support",
                desc: "Message your provider anytime. Adjust your plan as you progress, with the same flat price at every dose.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-warm-50 border border-warm-100 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[0.7rem] font-bold tracking-[0.1em] text-red">{s.step}</div>
                  <div className="w-8 h-8 rounded-full bg-red/[0.1] text-red flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-warm-800 text-base mb-2">{s.title}</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.75]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Real Care */}
      <div className="bg-warm-800 px-5 md:px-12 py-16">
        <div className="max-w-[1080px] mx-auto fade-up">
          <div className="text-center mb-10">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Why Real Care</div>
            <h2 className="font-display font-black text-white text-[clamp(1.8rem,3vw,2.4rem)] max-w-[640px] mx-auto">
              Real Doctors. Real Pricing. Real Support.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Stethoscope size={18} />, text: "U.S.-Licensed Medical Providers" },
              { icon: <ShieldCheck size={18} />, text: "HIPAA-Compliant And Discreet" },
              { icon: <Truck size={18} />, text: "Free Shipping In Plain Packaging" },
              { icon: <Clock size={18} />, text: "24/7 Provider Messaging Support" },
            ].map((t) => (
              <div
                key={t.text}
                className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-4 text-[0.86rem] text-white/85"
              >
                <span className="text-red flex-shrink-0">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-background px-5 md:px-12 py-14 border-b border-warm-100">
        <div className="max-w-[820px] mx-auto fade-up">
          <div className="text-center mb-10">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Questions</div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="bg-warm-50 border border-warm-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display font-bold text-warm-800 text-[0.95rem]">{f.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-warm-600 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[0.85rem] text-warm-600 leading-[1.75]">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
        <div className="max-w-[560px] mx-auto">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/60 mb-3">
            Get Started
          </div>
          <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
            {ctaHeadline}
          </h2>
          <p className="text-[0.88rem] text-primary-foreground/80 mb-6">{ctaSub}</p>
          <a
            href="/health-check"
            className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]"
          >
            Take Your Health Check →
          </a>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {["No Membership Fee", "24/7 Provider Access", "Free Discreet Shipping", "Cancel Anytime"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[0.7rem] text-primary-foreground/70">
                <Check />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      {disclaimer && (
        <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-8">
          <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">{disclaimer}</p>
        </div>
      )}
    </PageLayout>
  );
};

export default ProductPageTemplate;
