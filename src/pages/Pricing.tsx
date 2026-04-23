import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, ShieldCheck, Truck, Clock, Check, MapPin, HeartHandshake } from "lucide-react";
import { useStripeCheckout } from "@/hooks/useStripeCheckout";
import { usePatient } from "@/hooks/usePatient";
import { usePatientAddress } from "@/hooks/usePatientAddress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type PlanTier = "monthly" | "quarterly" | "semiannual" | "annual";
type Gender = "men" | "women";

interface PricingRow {
  name: string;
  sub: string;
  monthly: number;
  popular?: boolean;
  guarantee?: boolean;
  oneTime?: boolean;
  priceId: string;
  treatmentCategory: string;
}

const menRows: PricingRow[] = [
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded Semaglutide Injection", monthly: 299, popular: true, guarantee: true, priceId: "weight_loss_glp1_monthly", treatmentCategory: "weight_loss" },
  { name: "GLP-1 Weight Loss (Tirz)", sub: "Compounded Tirzepatide Injection", monthly: 399, priceId: "weight_loss_tirz_monthly", treatmentCategory: "weight_loss" },
  { name: "Low Testosterone (TRT)", sub: "Lab Test + Personalized TRT", monthly: 99, priceId: "trt_monthly", treatmentCategory: "trt" },
  { name: "Better Sex (ED)", sub: "Sildenafil, Tadalafil, Chewables", monthly: 45, priceId: "ed_treatment_monthly", treatmentCategory: "ed" },
  { name: "Hair Loss & Regrowth", sub: "Finasteride + Minoxidil Combo", monthly: 39, priceId: "hair_mens_monthly", treatmentCategory: "hair" },
  { name: "Peptides & Longevity", sub: "BPC-157, Sermorelin, CJC-1295", monthly: 129, priceId: "peptides_monthly", treatmentCategory: "peptides" },
  { name: "Mental Health", sub: "Anxiety, Depression, Sleep", monthly: 49, priceId: "mental_health_monthly", treatmentCategory: "mental_health" },
  { name: "Lab Testing", sub: "40+ Biomarkers, One-Time Panel", monthly: 149, oneTime: true, priceId: "lab_testing_one_time", treatmentCategory: "lab_testing" },
];

const womenRows: PricingRow[] = [
  { name: "GLP-1 Weight Loss (Sema)", sub: "Compounded Semaglutide Injection", monthly: 299, popular: true, guarantee: true, priceId: "weight_loss_glp1_monthly", treatmentCategory: "weight_loss" },
  { name: "Menopause & HRT", sub: "Bioidentical Hormone Therapy", monthly: 89, priceId: "menopause_hrt_monthly", treatmentCategory: "menopause" },
  { name: "Prescription Skincare", sub: "Custom Tretinoin Formula", monthly: 35, priceId: "skincare_monthly", treatmentCategory: "skincare" },
  { name: "Hair Growth", sub: "Prescription Minoxidil Blend", monthly: 39, priceId: "hair_womens_monthly", treatmentCategory: "hair" },
  { name: "Sexual Health & Libido", sub: "Low Libido, Vaginal Dryness", monthly: 49, priceId: "sexual_health_womens_monthly", treatmentCategory: "sexual_health" },
  { name: "Mental Health", sub: "Anxiety, Burnout, Low Mood", monthly: 49, priceId: "mental_health_monthly", treatmentCategory: "mental_health" },
  { name: "Birth Control", sub: "Pill, Patch, Ring — Shipped Free", monthly: 20, priceId: "birth_control_monthly", treatmentCategory: "birth_control" },
  { name: "Lab Testing", sub: "40+ Biomarkers, One-Time Panel", monthly: 149, oneTime: true, priceId: "lab_testing_one_time", treatmentCategory: "lab_testing" },
];

const TIERS: { id: PlanTier; label: string; discount: number; months: number; save: string | null }[] = [
  { id: "monthly", label: "Monthly", discount: 0, months: 1, save: null },
  { id: "quarterly", label: "3 Months", discount: 0.05, months: 3, save: "Save 5%" },
  { id: "semiannual", label: "6 Months", discount: 0.10, months: 6, save: "Save 10%" },
  { id: "annual", label: "12 Months", discount: 0.15, months: 12, save: "Best Value — Save 15%" },
];

const included = [
  { icon: <ShieldCheck size={18} />, label: "Doctor Consult Included" },
  { icon: <Check size={18} />, label: "Medication Included" },
  { icon: <Truck size={18} />, label: "Free Discreet Shipping" },
  { icon: <Clock size={18} />, label: "24/7 Provider Access" },
  { icon: <HeartHandshake size={18} />, label: "$0 Membership Fee" },
  { icon: <Check size={18} />, label: "HSA/FSA Accepted" },
];

const Pricing = () => {
  const { openCheckout, CheckoutDialog } = useStripeCheckout();
  const { user, patient } = usePatient();
  const { hasAddress, loading: addrLoading } = usePatientAddress(patient?.id);
  const [addressPrompt, setAddressPrompt] = useState<PricingRow | null>(null);
  const [activeTier, setActiveTier] = useState<PlanTier>("annual");
  const [activeGender, setActiveGender] = useState<Gender>("men");

  const rows = activeGender === "men" ? menRows : womenRows;
  const tier = TIERS.find((t) => t.id === activeTier)!;

  const handleBuy = (row: PricingRow) => {
    if (!user) {
      window.location.href = `/login?redirect=/pricing`;
      return;
    }
    if (patient && !addrLoading && !hasAddress) {
      setAddressPrompt(row);
      return;
    }
    openCheckout({
      priceId: row.priceId,
      treatmentCategory: row.treatmentCategory,
      productName: row.name,
      customerEmail: user.email || patient?.email,
      userId: user.id,
    });
  };

  return (
    <PageLayout title="Pricing">
      {/* Hero */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
        <div className="max-w-[1280px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Transparent Pricing</div>
          <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
            One Price.<br />
            <span className="text-red">Everything Included.</span>
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[580px] mx-auto mb-6">
            Doctor Consult, Medication, And Free Shipping — All In One Price. No Membership Fees. No Hidden Charges. Save More When You Commit To A Longer Plan.
          </p>
          <div className="inline-block bg-card border border-warm-100 rounded-xl px-5 py-3 text-[0.8rem] text-warm-600 shadow-soft">
            Unlike <span className="font-semibold text-warm-800">Hims ($149/Mo Fee)</span> And <span className="font-semibold text-warm-800">Ro ($145/Mo Fee)</span> — Real Care Charges <span className="text-red font-bold">$0 Membership Fee. Ever.</span>
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

      {/* Main pricing area */}
      <div className="bg-background px-5 md:px-12 pt-14 pb-24">
        <div className="max-w-[1100px] mx-auto">
          {/* Gender toggle */}
          <div className="flex justify-center mb-8 fade-up">
            <div className="inline-flex p-1 bg-warm-100 rounded-xl">
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

          {/* Tier selector */}
          <div className="mb-8 fade-up">
            <div className="text-center text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-3">
              Choose Your Plan — Longer Plans Save More
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {TIERS.map((t) => {
                const active = t.id === activeTier;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTier(t.id)}
                    className={`relative border-2 rounded-xl py-4 px-2 text-center transition-all ${
                      active ? "border-red bg-red/[0.05]" : "border-warm-100 hover:border-warm-300 bg-card"
                    }`}
                  >
                    {t.id === "annual" && (
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red text-primary-foreground text-[0.55rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full whitespace-nowrap">
                        Most Popular
                      </div>
                    )}
                    <div className={`text-[0.92rem] font-bold ${active ? "text-warm-800" : "text-warm-700"}`}>
                      {t.label}
                    </div>
                    {t.save && (
                      <div className={`text-[0.65rem] font-semibold mt-1 ${active ? "text-red" : "text-warm-500"}`}>
                        {t.save}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Treatment table */}
          <div className="bg-card border border-warm-100 rounded-2xl overflow-hidden shadow-soft fade-up">
            <div className="flex items-center justify-between px-6 py-3 bg-warm-50 border-b border-warm-100">
              <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-warm-500">Treatment</div>
              <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-warm-500">Starting From</div>
            </div>
            {rows.map((row, i) => {
              const perMonth = Math.round(row.monthly * (1 - tier.discount));
              const totalBilled = perMonth * tier.months;
              return (
                <button
                  type="button"
                  onClick={() => handleBuy(row)}
                  key={row.name}
                  className={`w-full text-left flex items-center justify-between gap-4 px-6 py-4 hover:bg-warm-50 group transition-colors ${
                    i < rows.length - 1 ? "border-b border-warm-100" : ""
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[0.92rem] font-semibold text-warm-800">{row.name}</span>
                      {row.popular && (
                        <span className="bg-red text-primary-foreground text-[0.55rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      )}
                      {row.guarantee && (
                        <span className="bg-warm-100 text-warm-700 text-[0.55rem] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full">
                          Money-Back Guarantee
                        </span>
                      )}
                    </div>
                    <div className="text-[0.72rem] text-warm-500 mt-0.5">{row.sub}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="text-right">
                      {row.oneTime ? (
                        <>
                          <div className="text-[0.92rem] font-bold text-red leading-tight">${row.monthly} One-Time</div>
                          <div className="text-[0.62rem] text-warm-500 mt-0.5">All-Inclusive</div>
                        </>
                      ) : (
                        <>
                          <div className="text-[0.92rem] font-bold text-red leading-tight">From ${perMonth}/Mo</div>
                          {tier.id !== "monthly" && (
                            <div className="text-[0.62rem] text-warm-500 mt-0.5">
                              ${totalBilled.toLocaleString()} Billed Every {tier.months} Mo
                            </div>
                          )}
                          {tier.id === "monthly" && (
                            <div className="text-[0.62rem] text-warm-500 mt-0.5">All-Inclusive</div>
                          )}
                        </>
                      )}
                    </div>
                    <ChevronRight size={18} className="text-warm-400 group-hover:text-red group-hover:translate-x-0.5 transition-all" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inclusion callout */}
          <div className="mt-6 bg-warm-50 border border-warm-100 rounded-2xl p-6 fade-up">
            <div className="flex items-start gap-4">
              <div className="bg-red text-primary-foreground rounded-full p-2 flex-shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-warm-800 text-[0.95rem] mb-1">Everything Included — One Simple Price</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7]">
                  Every Plan Includes Your Doctor Consultation, Prescription Medication, Free Discreet Shipping, And 24/7 Provider Access. No Separate Fees. No Surprise Charges. Take The Health Check To See Your Personalized Plan And Pricing.
                </p>
              </div>
            </div>
          </div>

          {/* Couples */}
          <div className="mt-8 bg-warm-800 rounded-2xl px-7 py-8 text-center fade-up">
            <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-white/50 mb-2">Couples Plan</div>
            <h3 className="font-display text-2xl font-black text-white mb-2">Better Together — Save 15% Both</h3>
            <p className="text-[0.85rem] text-white/70 mb-5 max-w-[460px] mx-auto">
              When Both Partners Enroll, You Each Save An Additional 15% On Top Of Your Chosen Plan.
            </p>
            <a href="/couples" className="inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-bold px-8 py-3 rounded-lg transition-colors">
              See Couples Plan →
            </a>
          </div>

          {/* Choose Your Commitment */}
          <div className="mt-14 fade-up">
            <div className="text-center mb-8">
              <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-2">Choose Your Commitment</div>
              <h3 className="font-display text-3xl font-black text-warm-800 mb-2">Longer Plans, Lower Price</h3>
              <p className="text-[0.88rem] text-warm-600">The Longer Your Plan, The Lower Your Monthly Rate.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { tier: "Monthly", badge: null, desc: "Month-To-Month. Maximum Flexibility. Cancel Anytime.", highlight: false },
                { tier: "6 Months", badge: "Save 10%", desc: "Prepay 6 Months Upfront. Lock In A Lower Monthly Rate.", highlight: false },
                { tier: "Annual Plan", badge: "Best Value — Save 15%", desc: "Lowest Per-Month Price. Includes Money-Back Guarantee On GLP-1.", highlight: true },
              ].map((c) => (
                <div
                  key={c.tier}
                  className={`relative rounded-2xl p-6 border-2 ${
                    c.highlight ? "border-red bg-red/[0.04]" : "border-warm-100 bg-card"
                  }`}
                >
                  {c.badge && (
                    <div className={`inline-block text-[0.55rem] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded-full mb-3 ${
                      c.highlight ? "bg-red text-primary-foreground" : "bg-warm-100 text-warm-700"
                    }`}>
                      {c.badge}
                    </div>
                  )}
                  <h4 className="font-display text-xl font-black text-warm-800 mb-2">{c.tier}</h4>
                  <p className="text-[0.82rem] text-warm-600 leading-[1.7] mb-4">{c.desc}</p>
                  <a href="/health-check" className="text-red text-[0.82rem] font-semibold hover:text-red-dark transition-colors">
                    See My Price →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-[0.72rem] text-warm-400 text-center mt-5 max-w-[640px] mx-auto leading-[1.7]">
              Exact Pricing Shown After Your Free Health Assessment. First Month Starts At $179 For GLP-1 Weight Loss — All-Inclusive.*
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-14 fade-up">
            <h3 className="font-display text-2xl font-black text-warm-800 text-center mb-8">Pricing Questions</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { q: "Is There A Membership Fee?", a: "Never. Your Price Covers Everything — Doctor Consult, Medication, And Free Shipping. $0 Membership Fee, Always." },
                { q: "What Happens After The First Month?", a: "After Your First Month, You Continue At The Plan Rate You Selected. Take Your Health Assessment To See Your Personalized Plan Options And Pricing." },
                { q: "Can I Cancel Anytime?", a: "Monthly Plans Cancel Anytime, No Fees. Multi-Month And Annual Plans Are Prepaid — You Can Pause Or Cancel, But Prepaid Months Are Non-Refundable Except Under The Weight Loss Money-Back Guarantee." },
                { q: "Does My Price Increase As My Dose Increases?", a: "Your Plan Price Stays Locked. We Do Not Charge More As Your Dose Goes Up During Treatment." },
                { q: "Do You Accept HSA Or FSA?", a: "Yes. Prescription Medications Through Real Care Typically Qualify. Use Your HSA/FSA Card At Checkout — No Reimbursement Needed." },
                { q: "Is There A Money-Back Guarantee?", a: "Yes, On GLP-1 Weight Loss. Follow Your Plan For 5 Months With No Results — We'll Refund You. Annual And 6-Month Plan Patients Are Fully Covered." },
              ].map((faq) => (
                <div key={faq.q} className="bg-card border border-warm-100 rounded-xl p-6">
                  <div className="font-semibold text-warm-800 text-[0.92rem] mb-2">{faq.q}</div>
                  <p className="text-[0.82rem] text-warm-600 leading-[1.7]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-14 text-center fade-up">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Ready To Start?</div>
            <h3 className="font-display text-3xl font-black text-warm-800 mb-4">
              Take Your Free Health Check
            </h3>
            <p className="text-[0.88rem] text-warm-600 mb-6 max-w-[440px] mx-auto">
              Pick Your Plan. Your Medication Ships Within 7–10 Days Of Approval.
            </p>
            <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
              Take Your Free Health Check →
            </a>
            <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
              {["No Membership Fee", "Money-Back Guarantee", "HSA/FSA Accepted", "Cancel Anytime"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[0.72rem] text-warm-600">
                  <Check size={12} className="text-red" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
        <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
          First Month Pricing Applies To New Patients On GLP-1 Weight Loss. Ongoing Pricing Varies By Plan Selected At Checkout. Pricing May Vary By State And Dose. Compounded Medications Are Not FDA-Approved As Finished Products. Payment Does Not Guarantee Prescribing — All Decisions Are At Your Provider's Sole Discretion. Money-Back Guarantee Applies To GLP-1 Weight Loss Program Only. Individuals In Advertising May Be Models Or Actors. HSA/FSA Eligibility Varies By Plan Administrator.
        </p>
      </div>

      <CheckoutDialog />
      <Dialog open={!!addressPrompt} onOpenChange={(open) => !open && setAddressPrompt(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2"><MapPin size={18} className="text-red" /> Add A Shipping Address</DialogTitle>
            <DialogDescription>
              We Need A Shipping Address Before We Can Fulfill Your Prescription. Add Yours In Your Account Settings — It Only Takes A Minute.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 mt-2">
            <a href="/patient-portal" className="flex-1 bg-red hover:bg-red-dark text-primary-foreground font-bold px-5 py-2.5 rounded-lg text-[0.85rem] text-center transition-colors">Add Address →</a>
            <button onClick={() => setAddressPrompt(null)} className="px-5 py-2.5 rounded-lg text-[0.85rem] border border-warm-200 text-warm-600 hover:border-warm-400 transition-colors">Cancel</button>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Pricing;
