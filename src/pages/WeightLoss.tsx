import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const WeightLoss = () => {
  useSEO(SEO_CONFIGS.weightLoss);
  return (
  <PageLayout title="GLP-1 Weight Loss">

    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-10 items-center fade-up">
        <div>
          <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-4">
            GLP-1 Weight Loss · Most Popular
          </div>
          <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3.2rem)] mb-4">
            Lose Weight.<br />
            <span className="text-red">Keep It Off.</span>
          </h1>
          <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[500px] mb-6">
            Doctor-prescribed GLP-1 medications — the same GLP-1 molecules used in prescription weight loss medications — at a fraction of the brand-name cost. No waiting rooms, no insurance required, delivered to your door.
          </p>
          <div className="flex gap-3 flex-wrap mb-6">
            <a href="/health-check" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors flex items-center gap-2">
              See If I Qualify <ChevronRight size={16} />
            </a>
            <a href="/how-it-works" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
              How It Works
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {["From $179/mo ($6/day) — All-Inclusive", "Money-Back Guarantee", "No Membership Fee", "Free Discreet Shipping", "HSA/FSA Accepted"].map((t) => (
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
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">The Science</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)]">
            Why GLP-1 Works When<br />Diets Don't
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Reduces Appetite", desc: "GLP-1 medications mimic a natural hormone that tells your brain you're full. Less hunger means fewer calories — without willpower battles." },
            { title: "Slows Digestion", desc: "Food moves more slowly through your stomach, keeping you satisfied longer. No more snacking between meals or energy crashes." },
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

    {/* Medication options */}
    <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-16 border-b border-warm-100" id="treatments">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Treatment Options</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-3">
            Choose Your Medication
          </h2>
          <p className="text-[0.88rem] text-warm-600 max-w-[420px] mx-auto">
            Your provider recommends the right medication and format based on your health profile and goals.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              name: "Compounded Semaglutide",
              aka: "Contains semaglutide — the same molecule used in GLP-1 medications for weight management",
              format: "Weekly injection",
              price: "From $179/mo",
              popular: true,
              bullets: ["Reduces appetite and cravings", "Once-weekly injection", "Gradual dose escalation", "Includes B12 for energy support"],
            },
            {
              name: "Compounded Tirzepatide",
              aka: "Contains tirzepatide — the same molecule used in dual GLP-1/GIP medications for weight management",
              format: "Weekly injection",
              price: "From $349/mo",
              popular: false,
              bullets: ["Dual GLP-1 / GIP receptor action", "May produce greater weight loss", "Once-weekly injection", "Higher average results in clinical trials"],
            },
            {
              name: "Oral Semaglutide",
              aka: "GLP-1 without injections",
              format: "Daily tablet",
              price: "From $249/mo",
              popular: false,
              bullets: ["No needles required", "Daily sublingual tablet", "Same active ingredient as injectable", "Ideal for needle-phobic patients"],
            },
          ].map((med) => (
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
                  <div className="text-[0.68rem] text-warm-400">Doctor consult · Medication · Shipping · Support</div>
                  <div className="text-[0.68rem] text-warm-400 mt-0.5">No membership fee. Cancel anytime.</div>
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

    {/* Delivery formats */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-16 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Delivery Formats</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-3">
            Choose Your Format
          </h2>
          <p className="text-[0.88rem] text-warm-600 max-w-[400px] mx-auto">
            Three ways to take your GLP-1 — pick what fits your lifestyle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { badge: "Most Effective", badgeRed: true, title: "Weekly Injectable", desc: "Once-weekly pen injection. The most studied and effective format, with the strongest clinical results for weight loss.", note: "Your provider recommends the best format for you." },
            { badge: "Needle-Free", badgeRed: false, title: "Daily Sublingual Drops", desc: "A few drops under the tongue each day. No needles, fast absorption, and easy to travel with.", note: "Your provider recommends the best format for you." },
            { badge: "Pill Form", badgeRed: false, title: "Daily Oral Tablet", desc: "A simple once-daily tablet. Familiar, discreet, and ideal if you prefer to skip injections entirely.", note: "Your provider recommends the best format for you." },
          ].map((fmt) => (
            <div key={fmt.title} className="bg-card border border-warm-100 rounded-2xl p-7">
              <span className={`inline-block text-[0.62rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded mb-4 ${fmt.badgeRed ? "bg-red text-white" : "bg-warm-100 text-warm-600"}`}>
                {fmt.badge}
              </span>
              <h3 className="font-display font-bold text-warm-800 text-lg mb-2">{fmt.title}</h3>
              <p className="text-[0.83rem] text-warm-600 leading-[1.75] mb-4">{fmt.desc}</p>
              <p className="text-[0.72rem] text-warm-400 italic">{fmt.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Muscle preservation */}
    <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-16 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Protect Your Progress</div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
              Lose Fat.<br />
              <span className="text-red">Keep Your Muscle.</span>
            </h2>
            <p className="text-[0.88rem] text-warm-600 leading-[1.75] mb-6">
              GLP-1 medications are most effective when paired with adequate protein intake and light resistance training. Your Real Care provider will guide you on protecting muscle mass throughout your weight loss journey — not just prescribe and disappear.
            </p>
            <div className="space-y-3">
              {[
                "Provider-guided dosing to minimize muscle loss",
                "Protein and nutrition guidance included in your plan",
                "Ongoing check-ins to adjust your protocol as you progress",
                "B12 included in semaglutide formula to support energy levels",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[0.84rem] text-warm-700">
                  <span className="text-red flex-shrink-0"><Check /></span>{item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "100g", l: "Daily protein target your provider will guide you toward" },
              { n: "24/7", l: "Provider access to adjust your plan anytime" },
              { n: "5 mo", l: "Money-back guarantee if no results after 5 months" },
              { n: "$0", l: "Extra charge as your dose increases — price stays locked" },
            ].map((s) => (
              <div key={s.l} className="bg-card border border-warm-100 rounded-2xl p-5">
                <div className="font-display text-2xl font-black text-warm-800 mb-1.5">{s.n}</div>
                <div className="text-[0.72rem] text-warm-600 leading-[1.5]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* HSA/FSA */}
    <div className="bg-background px-5 md:px-12 py-10 border-b border-warm-100">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="bg-green-50 border border-green-200 rounded-2xl px-7 py-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={22} className="text-green-700" />
          </div>
          <div className="flex-1">
            <div className="font-display font-bold text-warm-800 text-lg mb-1">HSA / FSA Accepted</div>
            <p className="text-[0.83rem] text-warm-600 leading-[1.7]">
              Pay for your GLP-1 treatment with pre-tax health savings dollars. Patients in the 30% tax bracket effectively pay <strong className="text-warm-800">~$125/mo</strong> instead of $179/mo when using their HSA or FSA card. That's up to 40% in real savings on top of an already all-inclusive price.
            </p>
          </div>
          <a href="/health-check" className="flex-shrink-0 bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-3 rounded-lg text-[0.85rem] transition-colors whitespace-nowrap">
            See If I Qualify →
          </a>
        </div>
      </div>
    </div>

    {/* Money-back guarantee */}
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

    {/* Clinical citation */}
    <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-6">
      <p className="max-w-[900px] mx-auto text-[0.7rem] text-warm-400 leading-[1.7] text-center">
        *Based on STEP 1 clinical trial data for semaglutide 2.4mg. Individual results vary. Wilding JPH, et al. N Engl J Med. 2021;384:989–1002. Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners. Real Care is not affiliated with Novo Nordisk or Eli Lilly. Compounded medications contain the same active ingredients but are not manufactured by the brand-name drug companies and are not FDA-approved as finished products. Compounded medications use the same active ingredients as their FDA-approved counterparts but are prepared by state-licensed pharmacies and have not been evaluated by the FDA for safety, efficacy, or quality. Payment does not guarantee prescribing. All clinical decisions are at the sole discretion of your licensed provider. HSA/FSA eligibility varies by plan administrator.
      </p>
    </div>

  </PageLayout>
  );
};

export default WeightLoss;
