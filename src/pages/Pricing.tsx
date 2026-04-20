import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, Check, ShieldCheck, Clock, Truck, HeartHandshake } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check2 = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const plans = [
  {
    gender: "Men",
    color: "warm-800",
    items: [
      { name: "GLP-1 Weight Loss", sub: "Semaglutide & tirzepatide", price: "$179/mo", popular: true },
      { name: "Low Testosterone (TRT)", sub: "Lab testing + personalized TRT", price: "$99/mo" },
      { name: "Better Sex (ED)", sub: "Sildenafil, Tadalafil, Chewables", price: "From $2/dose" },
      { name: "Hair Loss & Regrowth", sub: "Finasteride + minoxidil", price: "$39/mo" },
      { name: "Peptides & Longevity", sub: "BPC-157, Sermorelin, CJC-1295", price: "$129/mo" },
      { name: "Mental Health", sub: "Anxiety, depression, sleep", price: "$49/mo" },
      { name: "Sleep Better", sub: "Personalized sleep support", price: "$39/mo" },
      { name: "Comprehensive Lab Testing", sub: "40+ biomarkers, one-time", price: "$149" },
      { name: "Supplements & Nutrition", sub: "Doctor-formulated stacks", price: "$49/mo" },
    ],
  },
  {
    gender: "Women",
    color: "warm-800",
    items: [
      { name: "GLP-1 Weight Loss", sub: "Semaglutide & tirzepatide", price: "$179/mo", popular: true },
      { name: "Balance Hormones (HRT)", sub: "Bioidentical hormone therapy", price: "$89/mo" },
      { name: "Prescription Skincare", sub: "Custom acne, anti-aging formulas", price: "$35/mo" },
      { name: "Fuller, Thicker Hair", sub: "Prescription minoxidil blends", price: "$39/mo" },
      { name: "Sexual Health & Libido", sub: "Low libido, vaginal dryness", price: "$49/mo" },
      { name: "Mental Health", sub: "Anxiety, burnout, low mood", price: "$49/mo" },
      { name: "Sleep Better", sub: "Personalized sleep support", price: "$39/mo" },
      { name: "Birth Control", sub: "Pill, patch, ring — shipped free", price: "$20/mo" },
      { name: "Women's Supplements", sub: "Collagen, hormones, GLP-1 companion", price: "$45/mo" },
    ],
  },
];

const included = [
  { icon: <ShieldCheck size={20} />, label: "Doctor Consult Included" },
  { icon: <Check2 />, label: "Medication Included" },
  { icon: <Truck size={20} />, label: "Free Discreet Shipping" },
  { icon: <Clock size={20} />, label: "24/7 Provider Access" },
  { icon: <HeartHandshake size={20} />, label: "No Membership Fee" },
  { icon: <Check2 />, label: "Cancel Anytime" },
];

const Pricing = () => (
  <PageLayout title="Pricing">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Transparent Pricing</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
          One Price.<br />
          <span className="text-red">Everything Included.</span>
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[540px] mx-auto mb-6">
          Doctor consult, medication, and free shipping — all in one simple monthly price. No membership fees. No hidden charges. No surprises.
        </p>
        {/* Competitor callout */}
        <div className="inline-block bg-white border border-warm-100 rounded-xl px-5 py-3 text-[0.8rem] text-warm-600 shadow-soft">
          Unlike <span className="font-semibold text-warm-800">Hims ($149/mo membership)</span> and <span className="font-semibold text-warm-800">Ro ($145/mo membership)</span> — Real Care charges <span className="text-red font-bold">$0 membership fee. Ever.</span>
        </div>
      </div>
    </div>

    {/* What's included banner */}
    <div className="bg-red px-5 md:px-12 py-5">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-x-8 gap-y-2 justify-center">
        {included.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[0.78rem] font-semibold text-primary-foreground">
            <span className="text-primary-foreground/80">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>

    {/* Pricing tables */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 fade-up">
          {plans.map((plan) => (
            <div key={plan.gender} className="bg-card border border-warm-100 rounded-2xl overflow-hidden shadow-soft">
              {/* Header */}
              <div className="bg-warm-800 px-7 py-5">
                <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-white/50 mb-1">{plan.gender}'s Health</div>
                <h2 className="font-display text-2xl font-black text-white">
                  {plan.gender === "Men" ? "Built For Men" : "Built For Her"}
                </h2>
              </div>
              {/* Items */}
              <div>
                {plan.items.map((item, i) => (
                  <div key={item.name} className={`flex items-center justify-between gap-4 px-7 py-4 ${i < plan.items.length - 1 ? "border-b border-warm-100" : ""} hover:bg-warm-50 transition-colors`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[0.92rem] font-semibold text-warm-800">{item.name}</span>
                        {item.popular && (
                          <span className="bg-red text-primary-foreground text-[0.55rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="text-[0.72rem] text-warm-400 mt-0.5">{item.sub}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-[0.92rem] font-bold text-red">{item.price}</div>
                      <div className="text-[0.62rem] text-warm-400">all-inclusive</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer */}
              <div className="px-7 py-5 bg-warm-50 border-t border-warm-100">
                <a
                  href="/health-check"
                  className="w-full bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  See {plan.gender}'s Treatments <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Couples */}
        <div className="mt-8 bg-warm-800 rounded-2xl px-7 py-8 text-center fade-up">
          <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-white/50 mb-2">Couples Plan</div>
          <h3 className="font-display text-2xl font-black text-white mb-2">Better Together</h3>
          <p className="text-[0.85rem] text-white/70 mb-4 max-w-[420px] mx-auto">
            When you and your partner both enroll, you each save 15% every month. Two personalized treatment plans, one simple checkout.
          </p>
          <div className="text-red font-bold text-lg mb-4">Save 15% — Both Partners</div>
          <a href="/couples" className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-bold px-8 py-3 rounded-lg transition-colors">
            Learn About Couples Care →
          </a>
        </div>

        {/* FAQ mini */}
        <div className="mt-14 fade-up">
          <h3 className="font-display text-2xl font-black text-warm-800 text-center mb-8">Pricing Questions</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { q: "Is there a membership fee?", a: "Never. Your monthly price includes everything — doctor consult, medication, and free shipping. $0 membership fee, guaranteed." },
              { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Cancel anytime by contacting us at least 72 hours before your next billing date." },
              { q: "Does my price change as my dose increases?", a: "Your price stays the same throughout your treatment plan. We don't charge more as your dose increases." },
              { q: "Do you accept HSA or FSA?", a: "Yes. Real Care consultations and prescriptions typically qualify for HSA/FSA reimbursement. Use your card directly at checkout." },
              { q: "What if I need multiple treatments?", a: "Each treatment is priced separately. There are no bundle minimums — you choose exactly what you need." },
              { q: "Is there a money-back guarantee?", a: "Yes, on GLP-1 weight loss. Follow your treatment plan for 5 months with no results — and we'll refund you. Terms apply." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-warm-100 rounded-xl p-6">
                <div className="font-semibold text-warm-800 text-[0.92rem] mb-2">{faq.q}</div>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Get Started Today</div>
          <h3 className="font-display text-3xl font-black text-warm-800 mb-4">
            Find Out What's Right For You
          </h3>
          <p className="text-[0.88rem] text-warm-600 mb-6 max-w-[400px] mx-auto">
            Take your free health check. A licensed provider will review your needs and create your personalized treatment plan.
          </p>
          <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
            Take Your Health Check — Free →
          </a>
          <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
            {["No Membership Fee", "Money-Back Guarantee", "HSA/FSA Accepted", "Cancel Anytime"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[0.72rem] text-warm-600">
                <span className="text-red"><Check2 /></span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
      <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
        Prices shown are starting prices and may vary based on treatment plan, dosage, and location. Compounded medications are not FDA-approved as finished products. Payment does not guarantee prescribing of medication — all prescribing decisions are at the sole discretion of your licensed provider. Money-back guarantee applies to GLP-1 weight loss program only, subject to program terms. Individuals in advertising may be models or actors.
      </p>
    </div>
  </PageLayout>
);

export default Pricing;
