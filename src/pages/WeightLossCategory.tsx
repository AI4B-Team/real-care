import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/realcare/PageLayout";
import { Shield, ChevronRight, ChevronLeft } from "lucide-react";
import productGlp1 from "@/assets/product-glp1.jpg";

const WeightLossCategory = () => {
  const navigate = useNavigate();
  const [currentWeight, setCurrentWeight] = useState(185);
  const [goalWeight, setGoalWeight] = useState(150);

  const lossNeeded = Math.max(currentWeight - goalWeight, 0);
  const weeksEst = Math.max(Math.round(lossNeeded / 1.2), 0);
  const monthsEst = Math.max(Math.round(weeksEst / 4.3), 0);

  const brandedCostYr = 1028 * 12;
  const realCareCostYr = 149 + 11 * 299;
  const savings = brandedCostYr - realCareCostYr;

  const trustBadges = [
    "$149 Your First Month",
    "Same Price Every Dose",
    "90-Day Results Guarantee",
    "Free Discreet Shipping",
  ];

  const products = [
    {
      name: "Compounded Semaglutide",
      tag: "Most Popular",
      tagBg: "bg-emerald-100 text-emerald-800",
      headline: "From $149/Mo",
      sub: "intro price · $299/mo after",
      desc: "Same active ingredient as Ozempic® and Wegovy® — compounded at a U.S.-licensed pharmacy. Once-weekly injection with B12.",
      bullets: [
        "Once-weekly injection",
        "From $149 your first month",
        "B12 energy support included",
        "Same price every dose",
      ],
      cta: "See Semaglutide Plans",
      href: "/weight-loss/semaglutide",
    },
    {
      name: "Compounded Tirzepatide",
      tag: "Fastest Results",
      tagBg: "bg-sky-100 text-sky-800",
      headline: "From $249/Mo",
      sub: "intro price · $399/mo after",
      desc: "Dual GLP-1/GIP action — same active ingredient as Mounjaro® and Zepbound®. Clinically shown to produce greater average weight loss.",
      bullets: [
        "Dual GLP-1/GIP receptor action",
        "From $249 your first month",
        "Greater avg weight loss in trials",
        "Once-weekly injection",
      ],
      cta: "See Tirzepatide Plans",
      href: "/weight-loss/tirzepatide",
    },
    {
      name: "Brand-Name Options",
      tag: "FDA-Approved",
      tagBg: "bg-warm-100 text-warm-700",
      headline: "From $1,028/Mo",
      sub: "cash-pay retail · no insurance needed",
      desc: "Ozempic®, Wegovy®, Zepbound®, and Mounjaro® — FDA-approved medications available cash-pay if your provider determines it appropriate.",
      bullets: [
        "FDA-approved branded medications",
        "Ozempic® from $1,028/mo",
        "Wegovy® from $1,415/mo",
        "Zepbound® from $1,128/mo",
      ],
      cta: "Learn About Branded Options",
      href: "/weight-loss/semaglutide#branded",
    },
  ];

  const compareRows: [string, string, string, string][] = [
    ["Intro price", "$149/mo", "$249/mo", "$1,028–1,415/mo"],
    ["Ongoing monthly", "$299/mo", "$399/mo", "$1,028–1,415/mo"],
    ["12-month rate", "$174/mo", "$263/mo", "Same as standard"],
    ["Avg weekly weight loss", "~0.5–1.5%", "~0.7–2%", "Same as compounded"],
    ["Mechanism", "GLP-1", "GLP-1 + GIP", "GLP-1 or GLP-1+GIP"],
    ["FDA approval status", "Compounded*", "Compounded*", "FDA-Approved"],
    ["Same price every dose", "Yes", "Yes", "Yes"],
    ["90-Day guarantee", "Yes", "Yes", "No"],
    ["Free shipping", "Yes", "Yes", "Yes"],
  ];

  return (
    <PageLayout title="GLP-1 Weight Loss" description="Compare Real Care GLP-1 weight loss treatments — semaglutide, tirzepatide, and brand-name options. From $149 your first month.">
      {/* Hero */}
      <section className="bg-[#C8E6C9] px-5 md:px-12 py-14 md:py-20">
        <div className="max-w-[960px] mx-auto text-center">
          <div className="inline-block bg-white/60 text-emerald-900 text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-4">
            GLP-1 Weight Loss
          </div>
          <h1 className="font-display font-black text-warm-800 text-[clamp(2.2rem,4vw,3.2rem)] leading-tight mb-5">
            Lose Weight. Keep It Off.
          </h1>
          <p className="text-warm-700 text-[1rem] md:text-[1.05rem] max-w-[640px] mx-auto leading-relaxed mb-7">
            Personalized GLP-1 treatment plans guided by U.S.-licensed providers.
            Choose the medication that fits your goals and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {trustBadges.map((t) => (
              <div key={t} className="inline-flex items-center gap-1.5 bg-white text-warm-800 text-[0.75rem] font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <Shield size={13} className="text-emerald-700" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-white px-5 md:px-12 py-14">
        <div className="max-w-[640px] mx-auto bg-warm-50 rounded-3xl border border-warm-100 p-6 md:p-8">
          <h2 className="font-display font-bold text-warm-800 text-[1.4rem] mb-2 text-center">
            How Much Can You Lose?
          </h2>
          <p className="text-center text-[0.85rem] text-warm-500 mb-6">
            Estimate your results based on clinical GLP-1 outcomes. Individual results vary.
          </p>

          <label className="text-[0.8rem] font-medium text-warm-700 block mb-2">
            Current weight: <span className="text-red font-bold">{currentWeight} lbs</span>
          </label>
          <input
            type="range"
            min={150}
            max={400}
            value={currentWeight}
            onChange={(e) => {
              const v = Number(e.target.value);
              setCurrentWeight(v);
              if (goalWeight > v - 10) setGoalWeight(v - 10);
            }}
            className="w-full accent-red"
          />

          <label className="text-[0.8rem] font-medium text-warm-700 block mt-4 mb-2">
            Goal weight: <span className="text-red font-bold">{goalWeight} lbs</span>
          </label>
          <input
            type="range"
            min={100}
            max={currentWeight - 10}
            value={goalWeight}
            onChange={(e) => setGoalWeight(Number(e.target.value))}
            className="w-full accent-red"
          />

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="bg-white rounded-xl p-4 border border-warm-100">
              <div className="text-[0.7rem] uppercase tracking-wider text-warm-500 mb-1">Goal</div>
              <div className="font-display font-black text-warm-800 text-[1.5rem]">{lossNeeded}</div>
              <div className="text-[0.7rem] text-warm-500">lbs to lose</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-warm-100">
              <div className="text-[0.7rem] uppercase tracking-wider text-warm-500 mb-1">Time</div>
              <div className="font-display font-black text-warm-800 text-[1.5rem]">{weeksEst}</div>
              <div className="text-[0.7rem] text-warm-500">weeks</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-warm-100">
              <div className="text-[0.7rem] uppercase tracking-wider text-warm-500 mb-1">≈</div>
              <div className="font-display font-black text-warm-800 text-[1.5rem]">{monthsEst}</div>
              <div className="text-[0.7rem] text-warm-500">months</div>
            </div>
          </div>

          <p className="text-[0.7rem] text-warm-400 text-center mt-4">
            Based on avg GLP-1 clinical results of ~5% body weight per 3 months. Individual results vary. Not a medical estimate.
          </p>

          <button
            onClick={() => navigate("/health-check")}
            className="mt-5 w-full bg-red hover:bg-red-dark text-white font-bold py-3 rounded-xl text-[0.9rem] transition-colors"
          >
            Start Your Assessment →
          </button>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="bg-warm-800 px-5 md:px-12 py-14">
        <div className="max-w-[960px] mx-auto text-center">
          <div className="inline-block bg-white/10 text-white/80 text-[0.65rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-4">
            Real Savings
          </div>
          <h2 className="font-display font-black text-white text-[clamp(1.5rem,2.5vw,2rem)] mb-8">
            Compounded vs Brand-Name: The Cost Reality
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Branded Ozempic (cash pay)", price: "$1,028/mo", sub: "$12,336/yr", dim: true },
              { label: "Real Care Semaglutide", price: "$149", sub: "your first month" },
              { label: "You save vs Ozempic", price: `$${savings.toLocaleString()}`, sub: "estimated first year", green: true },
            ].map((c) => (
              <div key={c.label} className={`rounded-2xl p-6 ${c.green ? "bg-emerald-500/20 border border-emerald-400/40" : "bg-white/5 border border-white/10"}`}>
                <div className="text-white/70 text-[0.78rem] mb-2">{c.label}</div>
                <div className={`font-display font-black text-[1.8rem] ${c.dim ? "text-white/50 line-through decoration-2" : c.green ? "text-emerald-300" : "text-white"}`}>
                  {c.price}
                </div>
                <div className="text-white/60 text-[0.75rem] mt-1">{c.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-[0.7rem] mt-6 max-w-[600px] mx-auto">
            Savings estimated vs Ozempic cash-pay retail. Branded price from Beluga Health pharmacy schedule. Actual savings vary by plan selected and duration.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-white px-5 md:px-12 py-14">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.6rem,2.5vw,2rem)] text-center mb-3">
            Choose Your Treatment
          </h2>
          <p className="text-center text-[0.9rem] text-warm-500 mb-10 max-w-[640px] mx-auto">
            All options require a licensed provider consultation. Medication prescribed only if clinically appropriate.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {products.map((p) => (
              <div key={p.name} className="bg-card rounded-2xl border border-warm-100 p-6 flex flex-col shadow-soft">
                <span className={`inline-block self-start text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${p.tagBg}`}>
                  {p.tag}
                </span>
                <h3 className="font-display font-bold text-warm-800 text-[1.15rem] mb-1">{p.name}</h3>
                <div className="text-red font-black text-[1.3rem]">{p.headline}</div>
                <div className="text-[0.75rem] text-warm-500 mb-3">{p.sub}</div>
                <p className="text-[0.83rem] text-warm-600 leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[0.78rem] text-warm-700">
                      <ChevronRight size={13} className="text-red flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(p.href)}
                  className="w-full bg-red hover:bg-red-dark text-white font-bold py-3 rounded-xl text-[0.85rem] transition-colors"
                >
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-warm-50 px-5 md:px-12 py-14">
        <div className="max-w-[960px] mx-auto">
          <h2 className="font-display font-bold text-warm-800 text-[1.4rem] text-center mb-8">
            Compare Your Options
          </h2>
          <div className="overflow-x-auto bg-white rounded-2xl border border-warm-100">
            <table className="w-full text-[0.82rem]">
              <thead>
                <tr className="border-b border-warm-200 bg-warm-50">
                  <th className="text-left py-3 px-4 text-warm-500 font-medium text-[0.7rem] uppercase tracking-wider">Feature</th>
                  <th className="py-3 px-3 text-center text-warm-800 font-bold">Compounded Sema</th>
                  <th className="py-3 px-3 text-center text-warm-800 font-bold">Compounded Tirz</th>
                  <th className="py-3 px-3 text-center text-warm-500 font-medium">Branded Options</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([feature, sema, tirz, branded]) => (
                  <tr key={feature} className="border-b border-warm-100 last:border-b-0">
                    <td className="py-3 px-4 text-warm-600 font-medium">{feature}</td>
                    <td className="py-3 px-3 text-center text-warm-800">{sema}</td>
                    <td className="py-3 px-3 text-center text-warm-800">{tirz}</td>
                    <td className="py-3 px-3 text-center text-warm-500">{branded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.7rem] text-warm-400 mt-4 text-center">
            *Compounded medications are not FDA-approved for safety or effectiveness. Prescription required. Results vary.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default WeightLossCategory;
