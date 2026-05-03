import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageLayout from "@/components/realcare/PageLayout";
import { Shield, Check, Clock, Lock } from "lucide-react";

const STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

type PlanInfo = { intro: number; ongoing: number; label: string; total: number; period: string; perMonth?: number };
type MedKey = "semaglutide" | "tirzepatide";
type PlanKey = "monthly" | "quarterly" | "biannual" | "annual";

const PRICING: Record<MedKey, Record<PlanKey, PlanInfo>> = {
  semaglutide: {
    monthly:   { intro: 149, ongoing: 299, label: "Monthly Plan",   total: 149,  period: "month" },
    quarterly: { intro: 149, ongoing: 209, label: "3-Month Plan",   total: 447,  period: "quarter", perMonth: 149 },
    biannual:  { intro: 149, ongoing: 191, label: "6-Month Plan",   total: 894,  period: "6 months", perMonth: 149 },
    annual:    { intro: 149, ongoing: 174, label: "12-Month Plan",  total: 1788, period: "year",     perMonth: 149 },
  },
  tirzepatide: {
    monthly:   { intro: 249, ongoing: 399, label: "Monthly Plan",   total: 249,  period: "month" },
    quarterly: { intro: 249, ongoing: 316, label: "3-Month Plan",   total: 747,  period: "quarter", perMonth: 249 },
    biannual:  { intro: 249, ongoing: 299, label: "6-Month Plan",   total: 1494, period: "6 months", perMonth: 249 },
    annual:    { intro: 249, ongoing: 263, label: "12-Month Plan",  total: 2988, period: "year",     perMonth: 249 },
  },
};

const AffirmLogo = () => (
  <span className="text-[0.7rem] bg-warm-100 px-2 py-1 rounded font-extrabold lowercase tracking-tight text-warm-800">
    affirm
  </span>
);

const CheckoutFlow = () => {
  const [params] = useSearchParams();
  const med = (params.get("med") as MedKey) in PRICING ? (params.get("med") as MedKey) : "semaglutide";
  const planKey = ((params.get("plan") as PlanKey) in PRICING[med] ? params.get("plan") : "monthly") as PlanKey;
  const planData = PRICING[med][planKey];
  const medName = med === "tirzepatide" ? "Compounded Tirzepatide" : "Compounded Semaglutide";

  const [seconds, setSeconds] = useState(12 * 60);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const spotsLeft = 23;

  const [tab, setTab] = useState<"card" | "bnpl">("card");

  return (
    <PageLayout title="Secure Checkout" noIndex>
      {/* Urgency bar */}
      <div className="bg-red text-white text-center py-2.5 px-4">
        <div className="flex items-center justify-center gap-2 text-[0.78rem] md:text-[0.85rem] font-medium flex-wrap">
          <Clock size={14} />
          <span>
            Only <strong>{spotsLeft} discount spots</strong> left — yours is reserved for
          </span>
          <span className="font-mono font-bold text-[0.95rem] bg-white/20 px-2 py-0.5 rounded">
            {mm}:{ss}
          </span>
        </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 py-10">
        {/* Treatment Summary Card */}
        <div className="bg-white rounded-2xl border border-warm-100 p-6 mb-6 shadow-soft">
          <h2 className="font-display font-bold text-warm-800 text-[1.1rem] mb-4">
            Your Treatment Details
          </h2>
          <div className="space-y-2 text-[0.85rem] mb-5">
            {[
              ["Medication", medName],
              ["Delivery Plan", planData.label],
              ["Shipping", "FREE — 2-Day Discreet Delivery"],
              ["Same Price at All Dosage Levels", "Included"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-warm-50 pb-2 last:border-b-0">
                <span className="text-warm-500">{k}</span>
                <span className="font-semibold text-warm-800 text-right">{v}</span>
              </div>
            ))}
          </div>

          {/* Pricing display */}
          <div className="bg-warm-50 rounded-xl p-4 mb-4 text-center">
            <div className="text-[0.72rem] uppercase tracking-wider text-warm-500 mb-1">
              Total if prescribed
            </div>
            <div className="font-display font-black text-red text-[1.8rem] leading-none">
              ${planData.intro}
              <span className="text-[0.85rem] text-warm-600 font-bold">/mo</span>
            </div>
            <div className="text-[0.78rem] text-warm-600 mt-1">
              for first {planData.period}
            </div>
            {planKey !== "monthly" && (
              <div className="text-[0.72rem] text-warm-500 mt-1">
                ${planData.total.toLocaleString()} billed upfront · ${planData.ongoing}/mo after
              </div>
            )}
            {planKey === "monthly" && (
              <div className="text-[0.72rem] text-warm-500 mt-1">
                ${planData.ongoing}/mo after first month
              </div>
            )}
          </div>

          {/* $0 due today */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center mb-5">
            <div className="font-display font-black text-emerald-700 text-[1.4rem]">$0 Due Today</div>
            <div className="text-[0.78rem] text-emerald-800 mt-1">
              Only charged if your prescription is approved
            </div>
          </div>

          {/* Trust bullets */}
          <ul className="space-y-2">
            {[
              "Same Price. All Dosage Levels.",
              "Prescribed & shipped within 48 hours",
              "Unlimited provider messaging 7 days a week",
              "90-Day Results Guarantee",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-[0.82rem] text-warm-700">
                <Check size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* HSA badge */}
        <div className="bg-white rounded-xl border border-warm-100 p-3 mb-6 flex items-center gap-2 justify-center">
          <Shield size={16} className="text-emerald-600" />
          <span className="text-[0.82rem] font-semibold text-warm-700">HSA / FSA Eligible</span>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl border border-warm-100 p-6 mb-6 shadow-soft">
          <h3 className="font-bold text-warm-800 mb-1">Enter Your Shipping Address</h3>
          <p className="text-[0.75rem] text-warm-500 mb-4">Your privacy is guaranteed.</p>

          <div className="grid grid-cols-2 gap-3">
            <Field label="First Name" placeholder="First" />
            <Field label="Last Name" placeholder="Last" />
          </div>
          <Field label="Phone" placeholder="(555) 000-0000" type="tel" />
          <Field label="Address" placeholder="Search for an address..." />
          <Field label="Apt, Suite, etc. (optional)" />
          <div className="grid grid-cols-3 gap-3">
            <Field label="City" />
            <div>
              <label className="text-[0.72rem] text-warm-500 block mb-1">State</label>
              <select className="w-full border border-warm-200 rounded-lg px-3 py-2.5 text-[0.85rem] bg-white">
                <option>Select...</option>
                {STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <Field label="ZIP" maxLength={5} />
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl border border-warm-100 p-6 mb-6 shadow-soft">
          <h3 className="font-bold text-warm-800 mb-1">Choose Payment Method</h3>
          <p className="text-[0.75rem] text-warm-500 mb-4">
            Your data is protected by HIPAA. All transactions are secured and encrypted.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => setTab("card")}
              className={`rounded-xl p-3 text-center text-[0.82rem] font-semibold transition-colors ${
                tab === "card" ? "border-2 border-red bg-red/5 text-warm-800" : "border border-warm-200 text-warm-600 hover:border-warm-300"
              }`}
            >
              <div>Card &amp; Wallets</div>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {["VISA", "MC", "AMEX", "Discover", "Apple Pay", "Google Pay"].map((n) => (
                  <span key={n} className="text-[0.6rem] bg-warm-100 px-1.5 py-0.5 rounded text-warm-600 font-medium">{n}</span>
                ))}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setTab("bnpl")}
              className={`rounded-xl p-3 text-center text-[0.82rem] font-semibold transition-colors ${
                tab === "bnpl" ? "border-2 border-red bg-red/5 text-warm-800" : "border border-warm-200 text-warm-600 hover:border-warm-300"
              }`}
            >
              <div>Buy Now, Pay Later</div>
              <div className="flex flex-wrap justify-center gap-1 mt-2 items-center">
                <span className="text-[0.6rem] bg-warm-100 px-1.5 py-0.5 rounded text-warm-600 font-medium">Klarna</span>
                <span className="text-[0.6rem] bg-warm-100 px-1.5 py-0.5 rounded text-warm-600 font-medium">Afterpay</span>
                <AffirmLogo />
              </div>
            </button>
          </div>

          {tab === "card" ? (
            <div className="space-y-3">
              <Field label="Card Number" placeholder="1234 5678 9012 3456" mono />
              <div className="grid grid-cols-2 gap-3">
                <Field label="Expiration" placeholder="MM / YY" />
                <Field label="Security Code" placeholder="CVC" />
              </div>
              <Field label="ZIP Code" maxLength={5} />
            </div>
          ) : (
            <div className="text-center py-6 text-[0.85rem] text-warm-600">
              You'll be redirected to your selected pay-later provider after you continue.
            </div>
          )}

          {/* ACH */}
          <div className="mt-5 bg-emerald-50 border border-emerald-200 rounded-lg p-3 flex items-center gap-2 text-[0.78rem] text-emerald-800">
            <span className="text-emerald-700 font-bold">$5 back</span>
            <span>Pay by bank (ACH) and get $5 cash back on your order</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-red hover:bg-red-dark text-white font-black text-[1rem] py-4 rounded-2xl transition-colors mb-3 flex items-center justify-center gap-2">
          <Lock size={16} />
          Continue → Secure Checkout
        </button>

        <div className="text-center text-[0.72rem] text-warm-500 mb-4">
          256-bit SSL encryption · PCI DSS compliant · Your payment is secure and encrypted
        </div>

        <p className="text-[0.7rem] text-warm-400 leading-relaxed">
          By continuing, you agree to Real Care's{" "}
          <a href="/terms" className="underline hover:text-warm-700">Terms of Service</a>,{" "}
          <a href="/privacy" className="underline hover:text-warm-700">Privacy Policy</a>, and{" "}
          <a href="/telehealth-consent" className="underline hover:text-warm-700">Telehealth Consent</a>.
          You authorize Real Care to enroll you in an auto-renewing subscription and charge your saved payment method
          at the specified recurring intervals until you cancel. Cancellation stops future charges.
          Refunds are governed by the Real Care{" "}
          <a href="/refund-policy" className="underline hover:text-warm-700">Refund Policy</a>.
          Payment does not guarantee prescribing — all clinical decisions are at the sole discretion of your licensed provider.
        </p>
      </div>
    </PageLayout>
  );
};

const Field = ({ label, placeholder, type = "text", maxLength, mono }: { label: string; placeholder?: string; type?: string; maxLength?: number; mono?: boolean }) => (
  <div className="mt-3 first:mt-0">
    <label className="text-[0.72rem] text-warm-500 block mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`w-full border border-warm-200 rounded-lg px-3 py-2.5 text-[0.85rem] focus:outline-none focus:border-red ${mono ? "font-mono" : ""}`}
    />
  </div>
);

export default CheckoutFlow;
