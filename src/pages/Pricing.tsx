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
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded semaglutide injection", monthly: 299, fromPrice: 149, popular: true, href: "/weight-loss", guarantee: true },
  { name: "GLP-1 Weight Loss (Tirz)", sub: "Compounded tirzepatide injection", monthly: 399, fromPrice: 249, href: "/weight-loss" },
  { name: "Low Testosterone (TRT)", sub: "Lab test + personalized TRT", monthly: 99, fromPrice: 99, href: "/testosterone" },
  { name: "Better Sex (ED)", sub: "Sildenafil, Tadalafil, Chewables", monthly: 45, fromPrice: 45, href: "/ed-treatment" },
  { name: "Hair Loss & Regrowth", sub: "Finasteride + minoxidil combo", monthly: 39, fromPrice: 39, href: "/hair-loss" },
  { name: "Peptides & Longevity", sub: "BPC-157, Sermorelin, CJC-1295", monthly: 129, fromPrice: 129, href: "/peptides" },
  { name: "Mental Health", sub: "Anxiety, depression, sleep", monthly: 49, fromPrice: 49, href: "/mental-health" },
  { name: "Lab Testing", sub: "40+ biomarkers, one-time panel", monthly: 149, fromPrice: 149, href: "/lab-testing" },
];

const womenRows: PricingRow[] = [
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded semaglutide injection", monthly: 299, fromPrice: 149, popular: true, href: "/weight-loss", guarantee: true },
  { name: "Menopause & HRT", sub: "Bioidentical hormone therapy", monthly: 89, fromPrice: 89, href: "/menopause" },
  { name: "Prescription Skincare", sub: "Custom tretinoin formula", monthly: 35, fromPrice: 35, href: "/skincare" },
  { name: "Hair Growth", sub: "Prescription minoxidil blend", monthly: 39, fromPrice: 39, href: "/hair-loss" },
  { name: "Sexual Health & Libido", sub: "Low libido, vaginal dryness", monthly: 49, fromPrice: 49, href: "/women" },
  { name: "Mental Health", sub: "Anxiety, burnout, low mood", monthly: 49, fromPrice: 49, href: "/mental-health" },
  { name: "Birth Control", sub: "Pill, patch, ring — shipped free", monthly: 20, fromPrice: 20, href: "/women" },
  { name: "Lab Testing", sub: "40+ biomarkers, one-time panel", monthly: 149, fromPrice: 149, href: "/lab-testing" },
];

const PricingColumn = ({ title, rows }: { title: string; rows: PricingRow[] }) => (
  <div className="bg-card border border-warm-100 rounded-2xl overflow-hidden shadow-soft">
    <div className="bg-warm-800 px-6 py-3 text-[0.65rem] font-bold tracking-[0.12em] uppercase text-primary-foreground flex justify-between items-center">
      <div>{title}</div>
      <div className="text-primary-foreground/50">Starting From</div>
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
          <div className="flex-1 min-w-0">
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
                  90-Day Guarantee
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
);

const Pricing = () => {
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
            Doctor consult, medication, and free discreet shipping — all in one monthly price. No membership fees. No hidden charges. No surprises.
          </p>
          <div className="inline-block bg-card border border-warm-100 rounded-xl px-5 py-3 text-[0.8rem] text-warm-600 shadow-soft">
            Unlike <span className="font-semibold text-warm-800">Hims ($149/Mo Fee)</span> And <span className="font-semibold text-warm-800">Ro ($145/Mo Fee)</span> — Real Care Charges <span className="text-red font-bold">$0 Membership Fee. Ever.</span>
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
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 fade-up">
            <PricingColumn title="Women's Health" rows={womenRows} />
            <PricingColumn title="Men's Health" rows={menRows} />
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

          {/* FAQ */}
          <div className="mt-12 fade-up">
            <h3 className="font-display text-2xl font-black text-warm-800 text-center mb-7">Pricing Questions</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "Is there a membership fee?", a: "Never. Your price covers everything — doctor consult, medication, and free shipping. $0 membership fee, always." },
                { q: "What happens after the first month?", a: "After your first month, you continue at the plan rate you selected. Take your health assessment to see your personalized plan options and pricing — your ongoing rate depends on the plan length you choose." },
                { q: "Can I cancel anytime?", a: "Monthly plans cancel anytime, no fees. Multi-month and annual plans are prepaid — you can pause or cancel, but prepaid months are non-refundable except under the 90-Day Results Guarantee for GLP-1 weight loss." },
                { q: "Does my price increase as my dose increases?", a: "Your plan price stays locked. We do not charge more as your dose goes up during treatment." },
                { q: "Do you accept HSA or FSA?", a: "Yes. Prescription medications through Real Care typically qualify. Use your HSA/FSA card at checkout — no reimbursement needed." },
                { q: "Is there a results guarantee?", a: "Yes. Real Care's 90-Day Results Guarantee covers GLP-1 weight loss. Take your prescribed medication as directed, complete your monthly provider check-ins, and follow the recommended lifestyle guidance for 90 consecutive days. If your licensed provider determines you have not achieved measurable weight loss, we refund your medication costs in full. First-time patients only. See realcare.com/refund-policy for full terms." },
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
              {["No Membership Fee", "90-Day Results Guarantee", "HSA/FSA Accepted", "Cancel Anytime"].map((t) => (
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
          First month pricing applies to new patients on GLP-1 weight loss. Ongoing pricing varies by plan selected at checkout. Pricing may vary by state and dose. Compounded medications are not FDA-approved as finished products. Payment does not guarantee prescribing — all decisions are at your provider's sole discretion. 90-Day Results Guarantee applies to GLP-1 weight loss program only; refund covers medication costs paid during the 90-day period; consultation fees are non-refundable; requires adherence to prescribed dosing, monthly check-ins, and recommended lifestyle guidance; available to first-time Real Care weight loss patients only; full terms at realcare.com/refund-policy. Individuals in advertising may be models or actors. HSA/FSA eligibility varies by plan administrator.
        </p>
      </div>
    </PageLayout>
  );
};

export default Pricing;
