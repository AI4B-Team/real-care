import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, ShieldCheck, Truck, Clock, Check } from "lucide-react";

// Medvi-style pricing model: Monthly → 3-month → 6-month → Annual
// Annual plan drives highest AOV via upfront payment.

type PlanTier = "monthly" | "3month" | "6month" | "annual";

interface PricingRow {
  name: string;
  sub: string;
  monthly: number;
  fromPrice: number;
  popular?: boolean;
  href: string;
  guarantee?: boolean;
}

const menRows: PricingRow[] = [
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded semaglutide injection", monthly: 299, fromPrice: 179, popular: true, href: "/weight-loss", guarantee: true },
  { name: "GLP-1 Weight Loss (Tirz)", sub: "Compounded tirzepatide injection", monthly: 399, fromPrice: 349, href: "/weight-loss" },
  { name: "Low Testosterone (TRT)", sub: "Lab test + personalized TRT", monthly: 99, fromPrice: 99, href: "/testosterone" },
  { name: "Better Sex (ED)", sub: "Sildenafil, Tadalafil, Chewables", monthly: 45, fromPrice: 45, href: "/ed-treatment" },
  { name: "Hair Loss & Regrowth", sub: "Finasteride + minoxidil combo", monthly: 39, fromPrice: 39, href: "/hair-loss" },
  { name: "Peptides & Longevity", sub: "BPC-157, Sermorelin, CJC-1295", monthly: 129, fromPrice: 129, href: "/peptides" },
  { name: "Mental Health", sub: "Anxiety, depression, sleep", monthly: 49, fromPrice: 49, href: "/mental-health" },
  { name: "Lab Testing", sub: "40+ biomarkers, one-time panel", monthly: 149, fromPrice: 149, href: "/lab-testing" },
];

const womenRows: PricingRow[] = [
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded semaglutide injection", monthly: 299, fromPrice: 179, popular: true, href: "/weight-loss", guarantee: true },
  { name: "Menopause & HRT", sub: "Bioidentical hormone therapy", monthly: 89, fromPrice: 89, href: "/menopause" },
  { name: "Prescription Skincare", sub: "Custom tretinoin formula", monthly: 35, fromPrice: 35, href: "/skincare" },
  { name: "Hair Growth", sub: "Prescription minoxidil blend", monthly: 39, fromPrice: 39, href: "/hair-loss" },
  { name: "Sexual Health & Libido", sub: "Low libido, vaginal dryness", monthly: 49, fromPrice: 49, href: "/women" },
  { name: "Mental Health", sub: "Anxiety, burnout, low mood", monthly: 49, fromPrice: 49, href: "/mental-health" },
  { name: "Birth Control", sub: "Pill, patch, ring — shipped free", monthly: 20, fromPrice: 20, href: "/women" },
  { name: "Lab Testing", sub: "40+ biomarkers, one-time panel", monthly: 149, fromPrice: 149, href: "/lab-testing" },
];

const TIER_LABELS: Record<PlanTier, string> = {
  monthly: "Monthly",
  "3month": "3 Months",
  "6month": "6 Months",
  annual: "12 Months",
};

const TIER_SAVE: Record<PlanTier, string | null> = {
  monthly: null,
  "3month": "Save 10%",
  "6month": "Save 20%",
  annual: "Best Value — Save 40%",
};

const SEMA_AOV: Record<PlanTier, number> = {
  monthly: 299,
  "3month": Math.round(299 * 3 * 0.9),
  "6month": Math.round(299 * 6 * 0.8),
  annual: Math.round(299 * 12 * 0.6),
};

const Pricing = () => {
  const [activeTier, setActiveTier] = useState<PlanTier>("annual");
  const [activeGender, setActiveGender] = useState<"men" | "women">("men");

  const rows = activeGender === "men" ? menRows : womenRows;
  const tiers: PlanTier[] = ["monthly", "3month", "6month", "annual"];

  return (
    <PageLayout title="Pricing — One Price, Everything Included">
      {/* Hero */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
        <div className="max-w-[900px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Transparent Pricing</div>
          <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            One Price.<br />
            <span className="text-red">Everything Included.</span>
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[520px] mx-auto mb-5">
            Doctor consult, medication, and free shipping — all in one price. No membership fees. No hidden charges. Save up to 40% when you commit to a longer plan.
          </p>
          <div className="inline-block bg-card border border-warm-100 rounded-xl px-5 py-3 text-[0.8rem] text-warm-600 shadow-soft">
            Unlike <span className="font-semibold text-warm-800">Hims ($149/mo fee)</span> and <span className="font-semibold text-warm-800">Ro ($145/mo fee)</span> — Real Care charges <span className="text-red font-bold">$0 membership fee. Ever.</span>
          </div>
        </div>
      </div>

      {/* What's included banner */}
      <div className="bg-red px-5 md:px-12 py-4">
        <div className="max-w-[1280px] mx-auto flex flex-wrap gap-x-8 gap-y-2 justify-center">
          {[
            { icon: <ShieldCheck size={15} />, label: "Doctor Consult Included" },
            { icon: <Check size={15} />, label: "Medication Included" },
            { icon: <Truck size={15} />, label: "Free Discreet Shipping" },
            { icon: <Clock size={15} />, label: "24/7 Provider Access" },
            { icon: <Check size={15} />, label: "$0 Membership Fee" },
            { icon: <Check size={15} />, label: "HSA/FSA Accepted" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-[0.76rem] font-semibold text-primary-foreground">
              <span className="text-primary-foreground/80">{item.icon}</span>{item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background px-5 md:px-12 pt-12 pb-24">
        <div className="max-w-[900px] mx-auto">
          {/* Gender toggle */}
          <div className="flex justify-center mb-8 fade-up">
            <div className="inline-flex bg-warm-50 border border-warm-100 rounded-xl p-1 gap-1">
              {(["men", "women"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setActiveGender(g)}
                  className={`px-7 py-2 rounded-lg text-[0.85rem] font-semibold transition-all ${
                    activeGender === g ? "bg-red text-primary-foreground shadow-sm" : "text-warm-600 hover:text-warm-800"
                  }`}
                >
                  {g === "men" ? "Men's Treatments" : "Women's Treatments"}
                </button>
              ))}
            </div>
          </div>

          {/* Plan duration selector */}
          <div className="mb-8 fade-up">
            <div className="text-center text-[0.72rem] font-bold tracking-[0.12em] uppercase text-warm-400 mb-3">
              Choose Your Plan — Longer Plans Save More
            </div>
            <div className="grid grid-cols-4 gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setActiveTier(tier)}
                  className={`relative border-2 rounded-xl py-3 px-2 text-center transition-all ${
                    activeTier === tier ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300"
                  }`}
                >
                  {tier === "annual" && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red text-primary-foreground text-[0.52rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className={`font-display font-bold text-sm ${activeTier === tier ? "text-red" : "text-warm-800"}`}>
                    {TIER_LABELS[tier]}
                  </div>
                  {TIER_SAVE[tier] && (
                    <div className={`text-[0.62rem] font-semibold mt-0.5 ${activeTier === tier ? "text-red" : "text-warm-500"}`}>
                      {TIER_SAVE[tier]}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {activeTier === "annual" && (
              <div className="mt-4 bg-warm-800 rounded-xl px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div className="text-[0.8rem] text-primary-foreground/70">
                  <span className="text-primary-foreground font-semibold">Annual plan checkout:</span> GLP-1 patients pay{" "}
                  <span className="text-red font-bold">${SEMA_AOV.annual.toLocaleString()} upfront</span> — shipped monthly
                </div>
                <div className="text-[0.72rem] text-primary-foreground/40 whitespace-nowrap">Billed as one payment · Ships monthly</div>
              </div>
            )}
          </div>

          {/* Pricing table */}
          <div className="bg-card border border-warm-100 rounded-2xl overflow-hidden shadow-soft fade-up">
            <div className="bg-warm-800 px-6 py-3 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary-foreground/50 flex justify-between">
              <div>Treatment</div>
              <div>Starting From</div>
            </div>

            {rows.map((row, i) => {
              const isOneTime = row.monthly === 149;
              const displayPrice = row.fromPrice;
              return (
                <a
                  key={row.name}
                  href="/health-check"
                  className={`flex items-center justify-between gap-4 px-6 py-4 hover:bg-warm-50 group transition-colors ${
                    i < rows.length - 1 ? "border-b border-warm-100" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[0.9rem] font-semibold text-warm-800 group-hover:text-red transition-colors">
                        {row.name}
                      </span>
                      {row.popular && (
                        <span className="bg-red text-primary-foreground text-[0.52rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                      {row.guarantee && (
                        <span className="border border-warm-200 text-warm-700 bg-warm-50 text-[0.52rem] font-bold uppercase px-2 py-0.5 rounded-full">
                          Money-Back Guarantee
                        </span>
                      )}
                    </div>
                    <div className="text-[0.72rem] text-warm-400 mt-0.5">{row.sub}</div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      {isOneTime ? (
                        <div className="text-[0.95rem] font-bold text-red">
                          $149 <span className="text-[0.65rem] font-normal text-warm-400">one-time</span>
                        </div>
                      ) : (
                        <div className="text-[0.95rem] font-bold text-red">
                          From ${displayPrice}
                          <span className="text-[0.65rem] font-normal text-warm-400">/mo</span>
                        </div>
                      )}
                      <div className="text-[0.62rem] text-warm-400">All-inclusive</div>
                    </div>
                    <ChevronRight size={14} className="text-warm-300 group-hover:text-red transition-colors flex-shrink-0" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* What's included callout */}
          <div className="mt-5 bg-warm-50 border border-warm-100 rounded-xl p-4 fade-up">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-[0.85rem] font-semibold text-warm-800 mb-0.5">
                  Everything Included — One Simple Price
                </div>
                <p className="text-[0.78rem] text-warm-600 leading-[1.65]">
                  Every plan includes your doctor consultation, prescription medication, free discreet shipping, and 24/7 provider access.{" "}
                  <span className="font-semibold text-warm-800">No separate fees. No surprise charges.</span>{" "}
                  Take the health check to see your personalized plan and pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Couples plan */}
          <div className="mt-6 bg-warm-800 rounded-2xl px-7 py-7 flex flex-col sm:flex-row items-center justify-between gap-5 fade-up">
            <div>
              <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-red mb-1">Couples Plan</div>
              <div className="font-display font-bold text-primary-foreground text-xl mb-1">Better Together — Save 15% Both</div>
              <p className="text-[0.8rem] text-primary-foreground/60">
                When both partners enroll, you each save an additional 15% on top of your chosen plan.
              </p>
            </div>
            <a
              href="/couples"
              className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-bold px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              See Couples Plan →
            </a>
          </div>

          {/* Why longer plans */}
          <div className="mt-12 fade-up">
            <div className="text-center mb-7">
              <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Choose Your Commitment</div>
              <h2 className="font-display font-black text-warm-800 text-2xl">Longer Plans, Lower Price</h2>
              <p className="text-[0.85rem] text-warm-600 mt-2">
                The longer your plan, the lower your monthly rate. Take the health check to see your personalized pricing.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { tier: "Monthly", badge: null, desc: "Month-to-month. Maximum flexibility. Cancel anytime.", highlight: false },
                { tier: "6 Months", badge: "Save 20%", desc: "Prepay 6 months upfront. Lock in a lower monthly rate.", highlight: false },
                { tier: "Annual Plan", badge: "Best Value — Save 40%", desc: "Lowest per-month price. Includes money-back guarantee on GLP-1.", highlight: true },
              ].map((c) => (
                <div
                  key={c.tier}
                  className={`rounded-2xl p-6 border-2 ${c.highlight ? "border-red bg-red/[0.03]" : "border-warm-100 bg-card"}`}
                >
                  {c.badge && (
                    <div className={`text-[0.58rem] font-bold tracking-[0.12em] uppercase mb-2 ${c.highlight ? "text-red" : "text-warm-600"}`}>
                      {c.badge}
                    </div>
                  )}
                  <div className="font-display font-bold text-warm-800 text-xl mb-2">{c.tier}</div>
                  <p className="text-[0.8rem] text-warm-500 leading-[1.65] mb-3">{c.desc}</p>
                  <a href="/health-check" className="text-red text-[0.8rem] font-semibold hover:text-red-dark transition-colors">
                    See my price →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-[0.72rem] text-warm-400 text-center mt-4">
              Exact pricing shown after your free health assessment. First month starts at $179 for GLP-1 weight loss — all-inclusive.*
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12 fade-up">
            <h3 className="font-display text-2xl font-black text-warm-800 text-center mb-7">Pricing Questions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "Is there a membership fee?", a: "Never. Your price covers everything — doctor consult, medication, and free shipping. $0 membership fee, always." },
                { q: "What happens after the first month?", a: "After your first month, you continue at the plan rate you selected. Take your health assessment to see your personalized plan options and pricing — your ongoing rate depends on the plan length you choose." },
                { q: "Can I cancel anytime?", a: "Monthly plans cancel anytime, no fees. Multi-month and annual plans are prepaid — you can pause or cancel, but prepaid months are non-refundable except under the weight loss money-back guarantee." },
                { q: "Does my price increase as my dose increases?", a: "Your plan price stays locked. We do not charge more as your dose goes up during treatment." },
                { q: "Do you accept HSA or FSA?", a: "Yes. Prescription medications through Real Care typically qualify. Use your HSA/FSA card at checkout — no reimbursement needed." },
                { q: "Is there a money-back guarantee?", a: "Yes, on GLP-1 weight loss. Follow your plan for 5 months with no results — we'll refund you. Annual and 6-month plan patients are fully covered." },
              ].map((faq) => (
                <div key={faq.q} className="bg-card border border-warm-100 rounded-xl p-5">
                  <div className="font-semibold text-warm-800 text-[0.9rem] mb-2">{faq.q}</div>
                  <p className="text-[0.8rem] text-warm-600 leading-[1.7]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center fade-up">
            <h3 className="font-display text-3xl font-black text-warm-800 mb-3">Ready To Start?</h3>
            <p className="text-[0.88rem] text-warm-600 mb-6 max-w-[400px] mx-auto">
              Take your free health check. Pick your plan. Your medication ships within 7–10 days of approval.
            </p>
            <a
              href="/health-check"
              className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors"
            >
              Take Your Free Health Check →
            </a>
            <div className="flex items-center justify-center gap-6 mt-5 flex-wrap text-[0.72rem] text-warm-500">
              {["No Membership Fee", "Money-Back Guarantee", "HSA/FSA Accepted", "Cancel Anytime"].map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-5">
        <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
          First month pricing applies to new patients on GLP-1 weight loss. Ongoing pricing varies by plan selected at checkout. Pricing may vary by state and dose. Compounded medications are not FDA-approved as finished products. Payment does not guarantee prescribing — all decisions are at your provider's sole discretion. Money-back guarantee applies to GLP-1 weight loss program only. Individuals in advertising may be models or actors. HSA/FSA eligibility varies by plan administrator.
        </p>
      </div>
    </PageLayout>
  );
};

export default Pricing;
