import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const meds = [
  {
    name: "Compounded Semaglutide",
    aka: "Same active ingredient as Ozempic® & Wegovy®",
    format: "Weekly injection",
    price: "$179 first month",
    sub: "$299/mo ongoing · Save $720/yr vs Hims & Ro",
    popular: true,
    bullets: ["Reduces appetite and cravings", "Once-weekly injection", "Gradual dose escalation", "Includes B12 for energy support"],
  },
  {
    name: "Compounded Tirzepatide",
    aka: "Same active ingredient as Mounjaro® & Zepbound®",
    format: "Weekly injection",
    price: "$249 first month",
    sub: "$399/mo ongoing · Best results in trials",
    bullets: ["Dual GLP-1 / GIP receptor action", "May produce greater weight loss", "Once-weekly injection", "Higher average results in clinical trials"],
  },
  {
    name: "Oral Semaglutide (Tablets)",
    aka: "GLP-1 without injections",
    format: "Daily tablet",
    price: "$199 first month",
    sub: "$249/mo ongoing · No needles",
    bullets: ["No needles required", "Daily sublingual tablet", "Same active ingredient as injectable", "Ideal for needle-phobic patients"],
  },
];

const WeightLoss = () => (
  <PageLayout title="GLP-1 Weight Loss">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-10 items-center fade-up">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
              GLP-1 Weight Loss · Most Popular
            </div>
            <div className="inline-flex items-center gap-1.5 bg-success text-success-foreground text-[0.62rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded">
              <CheckCircle2 size={12} /> HSA/FSA Eligible
            </div>
          </div>
          <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3.2rem)] mb-4">
            Lose Weight.<br />
            <span className="text-red">Keep It Off.</span>
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[500px] mb-6">
            Doctor-prescribed GLP-1 medications — the same active ingredients as Ozempic® and Wegovy® — at a fraction of the cost. No waiting rooms, no insurance required, delivered to your door.
          </p>
          <div className="flex gap-3 flex-wrap mb-6">
            <a href="#get-started" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
              See If I Qualify <ChevronRight size={16} />
            </a>
            <a href="/how-it-works" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
              How It Works
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {["From $179/mo — All-Inclusive", "Money-Back Guarantee", "No Membership Fee", "Free Discreet Shipping"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[0.72rem] text-warm-600">
                <span className="text-red"><Check /></span>{t}
              </div>
            ))}
          </div>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { n: "15–20%", l: "Average body weight lost in clinical trials*", color: "bg-red text-white" },
            { n: "$179/mo", l: "Starting price — everything included", color: "bg-warm-800 text-white" },
            { n: "7–10", l: "Days to first delivery", color: "bg-card border border-warm-100" },
            { n: "$0", l: "Membership fee — ever", color: "bg-card border border-warm-100" },
          ].map((s) => (
            <div key={s.l} className={`rounded-2xl p-5 ${s.color}`}>
              <div className={`font-display text-3xl font-black mb-1.5 ${s.color.includes("white") ? "text-white" : "text-warm-800"}`}>{s.n}</div>
              <div className={`text-[0.72rem] leading-[1.5] ${s.color.includes("white") ? "text-white/70" : "text-warm-600"}`}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* How GLP-1 works */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">How It Works</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)]">
            Why GLP-1 Works When<br />Diets Don't
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Reduces Appetite", desc: "GLP-1 medications work by mimicking a natural hormone that tells your brain you're full. Less hunger means fewer calories — without willpower battles." },
            { title: "Slows Digestion", desc: "Food moves more slowly through your stomach, keeping you feeling satisfied longer. No more snacking between meals." },
            { title: "Regulates Blood Sugar", desc: "GLP-1 medications help stabilize blood sugar levels, reducing energy crashes and cravings that drive overeating." },
          ].map((item) => (
            <div key={item.title} className="bg-card border border-warm-100 rounded-2xl p-7">
              <div className="w-10 h-10 rounded-full bg-red/[0.1] flex items-center justify-center mb-4">
                <span className="text-red"><Check /></span>
              </div>
              <h3 className="font-display font-bold text-warm-800 text-lg mb-2">{item.title}</h3>
              <p className="text-[0.83rem] text-warm-600 leading-[1.75]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Choose Your Format */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Delivery Formats</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-3">
            Choose Your Format
          </h2>
          <p className="text-[0.88rem] text-warm-600 max-w-[460px] mx-auto">
            Three ways to take your GLP-1 — pick what fits your lifestyle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Most Effective",
              tagStyle: "bg-red text-primary-foreground",
              title: "Weekly Injectable",
              desc: "Once-weekly pen injection. The most studied and effective format, with the strongest clinical results for weight loss.",
            },
            {
              tag: "Needle-Free",
              tagStyle: "bg-warm-100 text-warm-600",
              title: "Daily Sublingual Drops",
              desc: "A few drops under the tongue each day. No needles, fast absorption, and easy to travel with.",
            },
            {
              tag: "Pill Form",
              tagStyle: "bg-warm-100 text-warm-600",
              title: "Daily Oral Tablet",
              desc: "A simple once-daily tablet. Familiar, discreet, and ideal if you prefer to skip injections entirely.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-card border border-warm-100 rounded-2xl p-7 flex flex-col">
              <div className={`inline-block self-start text-[0.62rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded mb-4 ${f.tagStyle}`}>
                {f.tag}
              </div>
              <h3 className="font-display font-bold text-warm-800 text-lg mb-2">{f.title}</h3>
              <p className="text-[0.83rem] text-warm-600 leading-[1.75] mb-5">{f.desc}</p>
              <div className="mt-auto pt-4 border-t border-warm-100">
                <p className="text-[0.75rem] text-warm-400 italic">Your provider recommends the best format for you.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Medication options */}
    <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-16" id="get-started">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Treatment Options</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-3">
            Choose Your Treatment
          </h2>
          <p className="text-[0.88rem] text-warm-600 max-w-[420px] mx-auto">
            Your provider will recommend the right option based on your health profile and goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {meds.map((med) => (
            <div key={med.name} className={`bg-card rounded-2xl border overflow-hidden ${med.popular ? "border-red shadow-soft" : "border-warm-100"}`}>
              {med.popular && (
                <div className="bg-red text-primary-foreground text-center text-[0.65rem] font-bold tracking-[0.1em] uppercase py-2">
                  Most Popular
                </div>
              )}
              <div className="p-7">
                <div className="inline-block bg-warm-100 text-warm-600 text-[0.62rem] font-semibold px-2.5 py-1 rounded mb-3">{med.format}</div>
                <h3 className="font-display font-bold text-warm-800 text-lg mb-1">{med.name}</h3>
                <p className="text-[0.72rem] text-warm-400 italic mb-4">{med.aka}</p>
                <div className="space-y-2 mb-6">
                  {med.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-[0.82rem] text-warm-600">
                      <span className="text-red flex-shrink-0"><Check /></span>{b}
                    </div>
                  ))}
                </div>
                <div className="border-t border-warm-100 pt-4 mb-4">
                  <div className="text-red font-bold text-lg">{med.price}</div>
                  <div className="text-[0.7rem] text-warm-600 font-medium mt-0.5">{med.sub}</div>
                  <div className="text-[0.68rem] text-warm-400 mt-1.5">Doctor consult · Medication · Shipping · Support</div>
                  <div className="text-[0.68rem] text-warm-400 mt-0.5">No membership fee. Cancel anytime.</div>
                </div>
                <a href="/health-check" className="w-full bg-red hover:bg-red-dark text-primary-foreground font-bold py-2.5 rounded-lg text-[0.85rem] flex items-center justify-center gap-1 transition-colors">
                  Get Started <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[0.7rem] text-warm-400 text-center mt-6 leading-[1.7] max-w-[720px] mx-auto">
          *Based on STEP 1 clinical trial data for semaglutide 2.4mg. Individual results vary.
          Compounded semaglutide is not FDA-approved as a finished product. Wilding JPH, et al.
          N Engl J Med. 2021;384:989–1002. Compounded medications use the same active ingredients
          as their FDA-approved counterparts but are prepared by state-licensed pharmacies and
          have not been evaluated by the FDA for safety, efficacy, or quality.
        </p>
      </div>
    </div>

    {/* Muscle preservation */}
    <div className="bg-background px-5 md:px-12 py-16 border-b border-warm-100">
      <div className="max-w-[1080px] mx-auto fade-up">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">
              Muscle Defense
            </div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-4 leading-[1.1]">
              Lose Fat.<br />
              <span className="text-red">Keep Your Muscle.</span>
            </h2>
            <p className="text-[0.9rem] text-warm-600 leading-[1.75] mb-5">
              GLP-1 medications are most effective when paired with adequate protein intake and
              light resistance training. Your Real Care provider will guide you on protecting
              muscle mass throughout your weight loss journey.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "Provider-guided dosing to minimize muscle loss",
              "Nutrition guidance included in your plan",
              "Ongoing check-ins to adjust your protocol",
            ].map((b) => (
              <div
                key={b}
                className="flex items-center gap-3 bg-warm-50 border border-warm-100 rounded-xl px-5 py-4"
              >
                <span className="w-7 h-7 rounded-full bg-red flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Check />
                </span>
                <span className="text-[0.88rem] font-medium text-warm-800">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Guarantee */}
    <div className="bg-warm-800 px-5 md:px-12 py-14 text-center fade-up">
      <div className="max-w-[600px] mx-auto">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Our Guarantee</div>
        <h2 className="font-display font-black text-white text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
          Lose Weight Or<br />Your Money Back
        </h2>
        <p className="text-[0.88rem] text-white/70 leading-[1.75] mb-6">
          Follow your prescribed treatment plan for 5 months with no results? We'll refund you. That's how confident we are in the program. Terms apply.
        </p>
        <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
          Start Your Weight Loss Journey →
        </a>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
      <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
        Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners. Real Care is not affiliated with Novo Nordisk or Eli Lilly. Compounded medications contain the same active ingredients but are not manufactured by the brand-name drug companies and are not FDA-approved as finished products. Payment does not guarantee prescribing. All clinical decisions are at the sole discretion of your licensed provider.
      </p>
    </div>
  </PageLayout>
);

export default WeightLoss;
