import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { DollarSign, Users, BarChart3, Shield, Loader2, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const perks = [
  { icon: <DollarSign size={22} />, title: "$300–$400 Per Patient", desc: "Industry-leading CPA. Every new patient you refer earns you a flat commission — paid monthly via direct deposit." },
  { icon: <BarChart3 size={22} />, title: "Real-Time Dashboard", desc: "Track clicks, conversions, and earnings in real time through your PartnerStack affiliate portal." },
  { icon: <Users size={22} />, title: "Massive Market", desc: "GLP-1 weight loss, ED, TRT, hair, skin, menopause — multiple products means multiple ways to earn from every visitor." },
  { icon: <Shield size={22} />, title: "Compliance First", desc: "All creative must be pre-approved. We provide compliant ad copy, images, and landing pages — you just drive traffic." },
];

const Affiliates = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", website: "", trafficSource: "", audienceDescription: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!form.email || !form.firstName) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "affiliate", ...form }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us at affiliates@realcare.com");
    } finally {
      setSubmitting(false);
    }
  };

  return (
  <PageLayout title="Affiliates">
    {/* Hero */}
    <div className="bg-warm-800 px-5 md:px-12 py-20">
      <div className="max-w-[1280px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Affiliate Program</div>
        <h1 className="font-display font-black leading-[1.05] text-white text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
          Earn $300–$400<br />
          <span className="text-red">Per Patient You Refer</span>
        </h1>
        <p className="text-[0.9rem] text-white/70 leading-[1.75] max-w-[520px] mx-auto mb-8">
          Partner with the fastest-growing co-ed telehealth brand in America. No membership fees means higher conversion. Multiple products means higher lifetime value.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#apply" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
            Apply To Join →
          </a>
          <a href="#how-it-works" className="border border-white/20 text-white font-medium px-7 py-3.5 rounded-lg text-[0.88rem] hover:border-white/50 transition-colors">
            See How It Works
          </a>
        </div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="bg-red px-5 md:px-12 py-5">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 justify-center">
        {[
          { n: "$300–$400", l: "CPA Per Patient" },
          { n: "Monthly", l: "Payouts Via Direct Deposit" },
          { n: "Real-Time", l: "Dashboard & Analytics" },
          { n: "Unlimited", l: "Earning Potential" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display font-black text-xl text-white">{s.n}</div>
            <div className="text-[0.65rem] text-primary-foreground/60 font-semibold tracking-wider uppercase">{s.l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Perks */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-16">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Why Real Care</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            Built For Serious Affiliates
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p) => (
            <div key={p.title} className="bg-card border border-warm-100 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-red/[0.1] flex items-center justify-center mb-4 text-red">{p.icon}</div>
              <h3 className="font-semibold text-warm-800 mb-2">{p.title}</h3>
              <p className="text-[0.81rem] text-warm-600 leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* How it works */}
    <div className="bg-warm-50 border-y border-warm-100 px-5 md:px-12 pt-14 pb-16" id="how-it-works">
      <div className="max-w-[860px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">How It Works</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            Simple. Transparent. Profitable.
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { n: "01", title: "Apply & Get Approved", desc: "Submit your application below. We review all affiliates to ensure compliance standards are met. Approval typically within 2–3 business days." },
            { n: "02", title: "Get Your Unique Link & Creatives", desc: "Receive your trackable affiliate link, pre-approved ad copy, images, and landing pages through PartnerStack. All compliant, ready to deploy." },
            { n: "03", title: "Drive Traffic", desc: "Use paid media (Meta, Google — LegitScript required), content, email, or organic social to send patients to Real Care through your link." },
            { n: "04", title: "Get Paid Monthly", desc: "For every patient who enrolls and is prescribed treatment, you earn $300–$400 CPA. Paid monthly via direct deposit. No minimum threshold." },
          ].map((step) => (
            <div key={step.n} className="flex gap-5 bg-card border border-warm-100 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-warm-800 text-primary-foreground font-display font-black flex items-center justify-center flex-shrink-0">
                {parseInt(step.n)}
              </div>
              <div>
                <h3 className="font-semibold text-warm-800 mb-1">{step.title}</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Compliance notice */}
    <div className="bg-background px-5 md:px-12 pt-10 pb-8">
      <div className="max-w-[860px] mx-auto">
        <div className="bg-warm-50 border border-warm-100 rounded-xl p-6">
          <h3 className="font-semibold text-warm-800 mb-2 flex items-center gap-2">
            <Shield size={16} className="text-red" /> Compliance Requirements
          </h3>
          <div className="space-y-1.5">
            {[
              "All ad creative must be pre-approved by Real Care before running",
              "Claims about medications must match approved language — no 'FDA-approved' claims for compounded products",
              "No fake doctor personas, AI-generated medical professionals, or undisclosed actors",
              "All paid healthcare ads require LegitScript certification if running on Meta or Google",
              "No spam, unsolicited email/SMS, or deceptive traffic methods",
              "Affiliates who violate these terms are terminated and forfeit pending commissions",
            ].map((r) => (
              <div key={r} className="flex items-start gap-2 text-[0.8rem] text-warm-600">
                <span className="text-red flex-shrink-0 mt-0.5"><Check /></span>
                {r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Application form */}
    <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 pt-14 pb-20" id="apply">
      <div className="max-w-[680px] mx-auto fade-up">
        <div className="text-center mb-8">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Apply Now</div>
          <h2 className="font-display font-black text-warm-800 text-2xl">Join The Real Care Affiliate Program</h2>
        </div>
        <div className="bg-card border border-warm-100 rounded-2xl p-7 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">First Name</label>
              <input type="text" value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" />
            </div>
            <div>
              <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Last Name</label>
              <input type="text" value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Email Address</label>
            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red transition-colors" />
          </div>
          <div>
            <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Website / Platform URL</label>
            <input type="url" value={form.website} onChange={(e) => setForm({...form, website: e.target.value})} placeholder="https://yoursite.com" className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] placeholder:text-warm-400 focus:outline-none focus:border-red transition-colors" />
          </div>
          <div>
            <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Primary Traffic Source</label>
            <select className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-600 focus:outline-none focus:border-red bg-white transition-colors">
              <option>Select one</option>
              <option>Paid Social (Meta/TikTok)</option>
              <option>Google / Search Ads</option>
              <option>SEO / Content / Blog</option>
              <option>Email Marketing</option>
              <option>YouTube / Video</option>
              <option>Influencer / Organic Social</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[0.78rem] font-semibold text-warm-700 mb-1.5">Tell Us About Your Audience</label>
            <textarea rows={3} value={form.audienceDescription} onChange={(e) => setForm({...form, audienceDescription: e.target.value})} className="w-full border border-warm-200 rounded-lg px-4 py-2.5 text-[0.85rem] focus:outline-none focus:border-red resize-none transition-colors" placeholder="Audience size, demographics, niche..." />
          </div>
          {submitted ? (
            <div className="flex items-center gap-2 text-green-600 font-semibold"><CheckCircle size={18} /> Application submitted! We'll review and respond within 2–3 business days.</div>
          ) : (
            <>
              {error && <div className="text-[0.8rem] text-red mb-2">{error}</div>}
              <button onClick={handleSubmit} disabled={submitting || !form.email || !form.firstName} className="w-full bg-red hover:bg-red-dark disabled:opacity-50 text-primary-foreground font-bold py-3 rounded-lg text-[0.88rem] transition-colors flex items-center justify-center gap-2">
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : "Submit Application →"}
              </button>
            </>
          )}
          <p className="text-[0.7rem] text-warm-400 text-center">We review all applications and respond within 2–3 business days.</p>
        </div>
      </div>
    </div>
  </PageLayout>
  );
};

export default Affiliates;
