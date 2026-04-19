import step1 from "@/assets/step-1-assessment.jpg";
import step2 from "@/assets/step-2-doctor.jpg";
import step3 from "@/assets/step-3-delivery.jpg";

const steps = [
  {
    n: "01",
    img: step1,
    alt: "Complete a quick health assessment on your phone",
    title: "Complete Your Assessment",
    desc: "Answer a few questions about your health goals and history. Takes under 5 minutes. No waiting room. No judgment.",
  },
  {
    n: "02",
    img: step2,
    alt: "Meet with a licensed doctor over video on your phone",
    title: "Meet Your Doctor",
    desc: "A licensed medical provider reviews your intake and creates a personalized treatment plan. Ongoing messaging always included — ask anything, anytime.",
  },
  {
    n: "03",
    img: step3,
    alt: "Treatment delivered discreetly to your door",
    title: "Treatment Delivered To You",
    desc: "Your prescription ships free from a certified U.S. pharmacy in discreet packaging — directly to your door in days, not weeks.",
  },
];

const HowItWorks = () => (
  <section id="how" className="bg-warm-50 px-5 md:px-12 pt-14 pb-24 border-t border-warm-100">
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-8 fade-up">
        <div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Simple Process</div>
          <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">
            Care Without The Complexity
          </h2>
          <p className="text-[0.88rem] text-warm-600 leading-[1.75] mt-3">
            Most patients go from first question to first delivery in under 48 hours.
          </p>
        </div>
        <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
          Take Your Health Check →
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 mt-14 fade-up delay-1">
        {steps.map((s) => (
          <div key={s.n} className="bg-card rounded-2xl border border-warm-100 overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3] bg-warm-100 overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                width={768}
                height={576}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border border-warm-100 shadow-soft flex items-center justify-center font-display text-[0.95rem] font-bold text-warm-800">
                {parseInt(s.n)}
              </div>
            </div>
            <div className="p-7">
              <div className="font-display text-xl font-bold text-warm-800 mb-2.5">{s.title}</div>
              <p className="text-[0.81rem] text-warm-600 leading-[1.75]">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
