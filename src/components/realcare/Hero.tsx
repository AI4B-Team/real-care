import heroImg from "@/assets/hero.jpg";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
);

const Hero = () => (
  <div className="bg-warm-50 px-5 md:px-12 pt-20 pb-36 md:pb-[9.5rem]">
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center fade-up">
      <div>
        <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.68rem] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-5">
          500,000+ Patients · Licensed Providers · All 50 States
        </div>
        <div className="inline-flex items-center gap-1.5 bg-red text-primary-foreground text-[0.7rem] font-bold tracking-[0.08em] uppercase px-3 py-1 rounded mb-4">
          <Check /> 100% Online
        </div>
        <h1 className="font-display font-black leading-[1.06] tracking-tight text-warm-800 mb-4 text-[clamp(2.5rem,4.8vw,4.6rem)]">
          Weight Loss,<br />
          <em className="not-italic italic text-red">Better Sex,</em>
          <br />
          <span className="text-red">Fuller Hair</span> & More.
        </h1>
        <p className="text-[0.93rem] text-warm-600 leading-[1.75] max-w-[640px] mb-7">
          Doctor-prescribed treatment for the things that matter most — no waiting room, no insurance battles, no runaround. For him and for her.
        </p>
        <div className="flex gap-3 flex-wrap items-center">
          <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.85rem] font-semibold px-8 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
            Take Your Health Check →
          </a>
          <a href="#how" className="border-[1.5px] border-warm-200 hover:border-warm-600 text-warm-800 text-[0.85rem] font-medium px-6 py-3.5 rounded-lg transition-colors">
            How It Works
          </a>
        </div>
        <div className="flex gap-6 flex-wrap mt-6">
          {["Money-Back Guarantee", "HSA / FSA Accepted", "Free Discreet Shipping"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[0.74rem] text-warm-600">
              <span className="text-red"><Check /></span>{t}
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-[20px] overflow-hidden aspect-[4/5] bg-warm-100 fade-up delay-1">
        <img src={heroImg} alt="Real Care patient — 100% online healthcare" className="w-full h-full object-cover object-top" />
        <div className="absolute bottom-5 left-5 bg-background/95 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3 shadow-soft">
          <div className="font-display text-2xl font-black text-red leading-none">4.8★</div>
          <div className="text-[0.68rem] text-warm-600 leading-snug">From 11,400+<br />Verified Reviews</div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
