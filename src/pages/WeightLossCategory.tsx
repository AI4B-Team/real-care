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
  const realCareCostYr = 179 + 11 * 299;
  const savings = brandedCostYr - realCareCostYr;

  const trustBadges = [
    "$179 Your First Month",
    "Same Price Every Dose",
    "90-Day Results Guarantee",
    "Free Discreet Shipping",
  ];

  const products = [
    {
      name: "Compounded Semaglutide",
      tag: "Most Popular",
      tagBg: "bg-emerald-100 text-emerald-800",
      headline: "From $179/Mo",
      sub: "first month · $299/mo after",
      desc: "Same active ingredient as Ozempic® and Wegovy® — compounded at a U.S.-licensed pharmacy. Once-weekly injection with B12.",
      bullets: [
        "Once-weekly injection",
        "From $179 your first month",
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
      headline: "From $279/Mo",
      sub: "first month · $399/mo after",
      desc: "Dual GLP-1/GIP action — same active ingredient as Mounjaro® and Zepbound®. Clinically shown to produce greater average weight loss.",
      bullets: [
        "Dual GLP-1/GIP receptor action",
        "From $279 your first month",
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
    ["Intro price", "$179/mo", "$279/mo", "$1,028–1,415/mo"],
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
    <PageLayout title="GLP-1 Weight Loss" description="Compare Real Care GLP-1 weight loss treatments — semaglutide, tirzepatide, and brand-name options. From $179 your first month.">
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

      {/* Product Showcase Carousel */}
      <ProductCarousel navigate={navigate} />

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

type Nav = ReturnType<typeof useNavigate>;

const carouselCards = [
  {
    name: "GLP-1",
    sub: "Starting at $179/mo",
    bg: "bg-[#EFF6EE]",
    href: "/weight-loss/semaglutide",
    type: "image" as const,
    img: productGlp1,
    alt: "Compounded Semaglutide GLP-1 injection vial",
    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))",
  },
  {
    name: "GLP-1 + GIP",
    sub: "Starting at $279/mo",
    bg: "bg-[#EEF3FB]",
    href: "/weight-loss/tirzepatide",
    type: "image" as const,
    img: productGlp1,
    alt: "Compounded Tirzepatide GLP-1 + GIP injection vial",
    filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15)) hue-rotate(200deg) saturate(1.3)",
  },
  {
    name: "Ozempic®",
    sub: "Starting at $1,028/mo",
    bg: "bg-[#EAF2FA]",
    href: "/weight-loss/semaglutide#branded",
    type: "pen" as const,
    penColor: "#3B7BC8",
    penDark: "#2C5F9E",
    label: "Ozempic",
    sublabel: "semaglutide",
    caption: "Ozempic® pen",
  },
  {
    name: "Mounjaro®",
    sub: "Starting at $1,122/mo",
    bg: "bg-[#F1ECF8]",
    href: "/weight-loss/semaglutide#branded",
    type: "pen" as const,
    penColor: "#7B3FA0",
    penDark: "#5E2E82",
    label: "Mounjaro",
    sublabel: "tirzepatide",
    caption: "Mounjaro® pen",
  },
  {
    name: "Zepbound®",
    sub: "Starting at $1,128/mo",
    bg: "bg-[#EAF5EE]",
    href: "/weight-loss/semaglutide#branded",
    type: "pen" as const,
    penColor: "#3FA060",
    penDark: "#2E824A",
    label: "Zepbound",
    sublabel: "tirzepatide",
    caption: "Zepbound® pen",
  },
  {
    name: "Wegovy®",
    sub: "Starting at $1,415/mo",
    bg: "bg-[#FBF1E8]",
    href: "/weight-loss/semaglutide#branded",
    type: "pen" as const,
    penColor: "#D4681A",
    penDark: "#A04E10",
    label: "Wegovy",
    sublabel: "semaglutide",
    caption: "Wegovy® pen",
  },
];

const ProductCarousel = ({ navigate }: { navigate: Nav }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-white px-5 md:px-12 py-16">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display font-black text-warm-800 text-[1.7rem] mb-2">
          Your Personal Weight Loss Solutions
        </h2>
        <p className="text-[0.88rem] text-warm-500 mb-10 italic">
          Find the perfect treatment for real results.
        </p>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselCards.map((c) => (
              <div
                key={c.name}
                onClick={() => navigate(c.href)}
                className={`flex-shrink-0 w-[280px] snap-start ${c.bg} rounded-2xl p-6 flex flex-col cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="flex-1 flex flex-col items-center justify-center mb-4" style={{ minHeight: "220px" }}>
                  {c.type === "image" ? (
                    <img
                      src={c.img}
                      alt={c.alt}
                      className="w-auto h-[200px] object-contain"
                      style={{ filter: c.filter }}
                    />
                  ) : (
                    <>
                      <svg width="80" height="180" viewBox="0 0 80 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="28" y="5" width="24" height="145" rx="12" fill={c.penColor} opacity="0.9" />
                        <circle cx="40" cy="5" r="12" fill={c.penDark} />
                        <rect x="26" y="50" width="28" height="50" rx="2" fill={c.penDark} />
                        <rect x="33" y="150" width="14" height="20" rx="4" fill="#888" />
                        <text x="40" y="80" textAnchor="middle" fill="white" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">{c.label}</text>
                        <text x="40" y="91" textAnchor="middle" fill="white" fontSize="4.5" fontFamily="sans-serif">{c.sublabel}</text>
                      </svg>
                      <p className="text-[0.6rem] text-warm-400 mt-1">{c.caption}</p>
                    </>
                  )}
                </div>
                <div className="mt-auto">
                  <h3 className="font-display font-bold text-warm-800 text-[1.05rem] mb-0.5">{c.name}</h3>
                  <p className="text-[0.82rem] text-warm-500 mb-4">{c.sub}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(c.href); }}
                      className="flex-1 bg-[#E8A020] hover:bg-[#D4901C] text-white font-bold py-2.5 rounded-lg text-[0.8rem] transition-colors"
                    >
                      Get Started
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate("/safety-info"); }}
                      className="flex-1 border border-warm-300 text-warm-700 font-medium py-2.5 rounded-lg text-[0.8rem] hover:bg-warm-50 transition-colors"
                    >
                      Important Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-warm-200 flex items-center justify-center hover:bg-warm-50 transition-colors"
            >
              <ChevronLeft size={18} className="text-warm-700" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-warm-200 flex items-center justify-center hover:bg-warm-50 transition-colors"
            >
              <ChevronRight size={18} className="text-warm-700" />
            </button>
          </div>

          <p className="text-[0.7rem] text-warm-400 leading-[1.75] mt-6 text-center max-w-[800px] mx-auto">
            Real Care connects patients with independent licensed providers who may prescribe medication through state-licensed pharmacies.
            Prescription medication only available if prescribed after an online consultation with a licensed healthcare provider.
            Compounded medications are not FDA-approved for safety or effectiveness. Results may vary. Plans are a subscription
            service — cancel anytime. Actual product packaging may appear differently than shown.
            Ozempic® and Wegovy® are trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are trademarks of Eli Lilly and Company.
            Real Care is not affiliated with these manufacturers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeightLossCategory;
