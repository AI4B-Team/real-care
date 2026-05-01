import PageLayout from "@/components/realcare/PageLayout";
import { Calculator, Flame, Activity, Beef, TrendingDown, ChevronRight } from "lucide-react";

const calculators = [
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and find out if you may qualify for GLP-1 weight loss medications.",
    href: "/calculators/bmi",
    icon: Calculator,
    available: true,
  },
  {
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs based on your age, weight, height, and activity level.",
    href: "#",
    icon: Flame,
    available: false,
  },
  {
    title: "TDEE Calculator",
    description: "Calculate your Total Daily Energy Expenditure to plan effective weight loss or maintenance.",
    href: "#",
    icon: Activity,
    available: false,
  },
  {
    title: "Protein Calculator",
    description: "Find your optimal daily protein intake for muscle preservation during weight loss.",
    href: "#",
    icon: Beef,
    available: false,
  },
  {
    title: "Weight Loss Timeline",
    description: "Project your expected weight loss journey on GLP-1 medications week by week.",
    href: "#",
    icon: TrendingDown,
    available: false,
  },
];

const Calculators = () => {
  return (
    <PageLayout
      title="Health Calculators — Free Tools"
      description="Free health calculators from Real Care. BMI, calorie, TDEE, protein, and weight loss timeline tools to help you understand your health."
    >
      {/* Hero */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
        <div className="max-w-[760px] mx-auto text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Free Tools</div>
          <h1 className="font-display font-black text-warm-800 text-[clamp(2rem,4vw,3rem)] leading-[1.05] mb-4">
            Health Calculators
          </h1>
          <p className="text-[0.92rem] text-warm-600 leading-[1.7] max-w-[560px] mx-auto">
            A growing library of free, evidence-based tools to help you understand your health and find the right treatment plan.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="bg-background px-5 md:px-12 py-14">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {calculators.map((c) => {
              const Icon = c.icon;
              const cardInner = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-red/[0.08] text-red flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    {!c.available && (
                      <span className="inline-flex items-center text-[0.62rem] font-semibold tracking-[0.08em] uppercase text-warm-600 bg-warm-100 px-2.5 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-warm-800 text-lg mb-2">{c.title}</h3>
                  <p className="text-[0.82rem] text-warm-600 leading-[1.65] mb-4">{c.description}</p>
                  {c.available && (
                    <div className="inline-flex items-center gap-1 text-[0.8rem] font-semibold text-red">
                      Open calculator <ChevronRight size={14} />
                    </div>
                  )}
                </>
              );

              return c.available ? (
                <a
                  key={c.title}
                  href={c.href}
                  className="block bg-card border border-warm-100 rounded-2xl p-6 shadow-soft hover:border-red/30 hover:shadow-md transition-all fade-up"
                >
                  {cardInner}
                </a>
              ) : (
                <div
                  key={c.title}
                  className="block bg-card border border-warm-100 rounded-2xl p-6 shadow-soft opacity-80 fade-up"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-warm-800 px-5 md:px-12 py-14 text-center fade-up">
        <div className="max-w-[600px] mx-auto">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Ready to Start?</div>
          <h2 className="font-display font-black text-white text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
            Take Your Free Health Check
          </h2>
          <p className="text-[0.88rem] text-white/70 leading-[1.75] mb-6">
            A full medical assessment takes 5 minutes. A board-certified provider reviews your intake within 24–48 hours.
          </p>
          <a
            href="/health-check"
            className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors"
          >
            Start My Free Health Check →
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Calculators;
