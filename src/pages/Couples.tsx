import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, Heart } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const menTreatments = [
  { name: "GLP-1 Weight Loss", price: "$179 first month", href: "/weight-loss" },
  { name: "Better Sex (ED)", price: "From $2/dose", href: "/ed-treatment" },
  { name: "Testosterone (TRT)", price: "$99/mo", href: "/testosterone" },
  { name: "Hair Loss & Regrowth", price: "$39/mo", href: "/hair-loss" },
  { name: "Peptides & Longevity", price: "$129/mo", href: "/peptides" },
  { name: "Mental Health", price: "$49/mo", href: "/mental-health" },
];

const womenTreatments = [
  { name: "GLP-1 Weight Loss", price: "$179 first month", href: "/weight-loss" },
  { name: "Menopause & HRT", price: "$89/mo", href: "/menopause" },
  { name: "Prescription Skincare", price: "$35/mo", href: "/skincare" },
  { name: "Hair Growth", price: "$39/mo", href: "/hair-loss" },
  { name: "Mental Health", price: "$49/mo", href: "/mental-health" },
  { name: "Birth Control", price: "$20/mo", href: "/women" },
];

const faqs = [
  {
    q: "Do we have to get the same treatment?",
    a: "No. Each person gets their own independent treatment plan based on their individual health assessment. You both just save 15% when you enroll together.",
  },
  {
    q: "Do we have to enroll at the same time?",
    a: "Ideally yes, so we can apply the discount from the start. If you're already enrolled, your partner can join and we'll apply the discount to both accounts from that point forward.",
  },
  {
    q: "How does the 15% discount work?",
    a: "Both partners receive 15% off their individual monthly treatment price. No bundled pricing, no guessing — just 15% off whatever each of you pays separately.",
  },
  {
    q: "Do we share a provider?",
    a: "No. Each person has their own private provider relationship. Your health information is never shared with your partner.",
  },
  {
    q: "What if one of us wants to cancel?",
    a: "Either person can cancel independently at any time. The remaining partner continues at the regular price.",
  },
  {
    q: "Is there a couples membership fee?",
    a: "Never. Real Care charges no membership fees for anyone — couples or individuals. Both partners pay one simple all-inclusive price per treatment.",
  },
];

const Couples = () => (
  <PageLayout title="Couples Plan — Real Care For Two">
    {/* Hero */}
    <div className="bg-warm-800 px-5 md:px-12 py-20">
      <div className="max-w-[1280px] mx-auto text-center fade-up">
        <div className="inline-flex items-center gap-2 bg-red text-primary-foreground text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-5">
          <Heart size={11} fill="currentColor" /> New — Couples Plan
        </div>
        <h1 className="font-display font-black leading-[1.05] text-white text-[clamp(2.2rem,4vw,3.8rem)] mb-4">
          Better Together.<br />
          <span className="text-red">Save More. Get Treated Together.</span>
        </h1>
        <p className="text-[0.9rem] text-white/70 leading-[1.75] max-w-[560px] mx-auto mb-8">
          The only telehealth brand built for couples. Each person gets their own personalized treatment plan — and when you both enroll, you each save 15% every month.
        </p>
        <div className="inline-block bg-red text-primary-foreground font-display font-black text-2xl px-8 py-4 rounded-2xl mb-6">
          Save 15% — Both Partners
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="/health-check" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
            Enroll As A Couple <ChevronRight size={16} />
          </a>
          <a href="/pricing" className="border border-white/20 text-white font-medium px-6 py-3 rounded-lg text-[0.88rem] hover:border-white/50 transition-colors">
            View All Pricing
          </a>
        </div>
      </div>
    </div>

    {/* How it works */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
      <div className="max-w-[860px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">How It Works</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            Two People. Two Plans. One Discount.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", title: "Each Person Takes Their Assessment", desc: "Both of you complete independent health assessments. Your information is private — never shared with your partner." },
            { n: "02", title: "Get Your Individual Treatment Plans", desc: "Each person is matched with a licensed provider and gets a personalized treatment plan based on their own health goals." },
            { n: "03", title: "Both Save 15% Every Month", desc: "When you both enroll, 15% is automatically applied to each person's monthly price — no codes, no gimmicks, no membership fees." },
          ].map((step) => (
            <div key={step.n} className="bg-card border border-warm-100 rounded-2xl p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-red text-primary-foreground font-display font-black text-base flex items-center justify-center mx-auto mb-4">
                {parseInt(step.n)}
              </div>
              <h3 className="font-display font-bold text-warm-800 mb-2">{step.title}</h3>
              <p className="text-[0.81rem] text-warm-600 leading-[1.7]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Treatment options */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 pt-14 pb-16">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Available Treatments</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            Pick What Works For Each Of You
          </h2>
          <p className="text-[0.85rem] text-warm-600 mt-3">Each person saves 15% off their individual treatment price.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Him */}
          <div className="bg-card border border-warm-100 rounded-2xl overflow-hidden">
            <div className="bg-warm-800 px-6 py-4 flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
              <span className="font-display font-bold text-white">For Him</span>
            </div>
            <div>
              {menTreatments.map((t, i) => (
                <a key={t.name} href={t.href} className={`flex items-center justify-between px-6 py-4 hover:bg-warm-50 transition-colors group ${i > 0 ? "border-t border-warm-100" : ""}`}>
                  <span className="text-[0.88rem] font-semibold text-warm-800 group-hover:text-red transition-colors">{t.name}</span>
                  <div className="text-right">
                    <div className="text-[0.82rem] font-bold text-red">{t.price}</div>
                    <div className="text-[0.65rem] text-warm-400">15% off with couples</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Her */}
          <div className="bg-card border border-warm-100 rounded-2xl overflow-hidden">
            <div className="bg-red px-6 py-4 flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
              <span className="font-display font-bold text-white">For Her</span>
            </div>
            <div>
              {womenTreatments.map((t, i) => (
                <a key={t.name} href={t.href} className={`flex items-center justify-between px-6 py-4 hover:bg-warm-50 transition-colors group ${i > 0 ? "border-t border-warm-100" : ""}`}>
                  <span className="text-[0.88rem] font-semibold text-warm-800 group-hover:text-red transition-colors">{t.name}</span>
                  <div className="text-right">
                    <div className="text-[0.82rem] font-bold text-red">{t.price}</div>
                    <div className="text-[0.65rem] text-warm-400">15% off with couples</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Example calculation */}
        <div className="mt-8 bg-warm-800 rounded-2xl p-7 md:p-8">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3 text-center">Example Savings</div>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <div className="text-[0.72rem] text-white/50 mb-1">He Gets Weight Loss</div>
              <div className="font-display font-black text-white text-2xl">$179 first month</div>
              <div className="text-red text-[0.78rem] font-semibold mt-1">→ $152/mo with couples</div>
              <div className="text-white/40 text-[0.65rem]">Saves $27/mo</div>
            </div>
            <div className="text-center">
              <Heart size={32} className="text-red mx-auto mb-2" fill="currentColor" />
              <div className="text-white font-bold text-sm">Together You Save</div>
              <div className="font-display font-black text-red text-3xl">$54/mo</div>
              <div className="text-white/40 text-[0.65rem]">$648/year</div>
            </div>
            <div className="text-center">
              <div className="text-[0.72rem] text-white/50 mb-1">She Gets Menopause</div>
              <div className="font-display font-black text-white text-2xl">$89/mo</div>
              <div className="text-red text-[0.78rem] font-semibold mt-1">→ $76/mo with couples</div>
              <div className="text-white/40 text-[0.65rem]">Saves $13/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-16 fade-up">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">FAQ</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Couples Plan Questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-card border border-warm-100 rounded-xl p-6">
              <h3 className="font-semibold text-warm-800 mb-2">{faq.q}</h3>
              <p className="text-[0.83rem] text-warm-600 leading-[1.7]">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
      <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
        Start Together. Feel Better Together.
      </h2>
      <p className="text-[0.88rem] text-primary-foreground/70 mb-6 max-w-[400px] mx-auto">
        Both of you take your free health check. Enroll together. Save 15% every month — forever.
      </p>
      <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]">
        Enroll As A Couple →
      </a>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {["No Membership Fee", "15% Off Both Plans", "Individual Privacy", "Cancel Anytime"].map((t) => (
          <div key={t} className="flex items-center gap-1.5 text-[0.7rem] text-primary-foreground/60">
            <Check />{t}
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Couples;
