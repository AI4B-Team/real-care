import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/hero-doctor.jpg";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
);

const Hero = () => (
  <div className="bg-warm-50 px-5 md:px-12 pt-4 pb-16 md:pt-6 md:pb-20">
    <div className="max-w-[1280px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-center fade-up">
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
            500,000+ Patients · Licensed Providers · All 50 States
          </div>
          <div className="inline-flex items-center gap-1.5 bg-red text-primary-foreground text-[0.62rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded">
            <Check /> 100% Online
          </div>
        </div>
        <h1 className="font-display font-black leading-[1.04] tracking-tight text-warm-800 mb-3 text-[clamp(1.85rem,3.4vw,3.2rem)]">
          Weight Loss, <em className="not-italic italic text-red">Better Sex,</em>
          <br />
          <span className="text-red">Fuller Hair</span> <span className="text-warm-800">& More.</span>
        </h1>
        <p className="text-[0.85rem] text-warm-600 leading-[1.55] max-w-[560px] mb-4">
          Doctor-prescribed treatment for the things that matter most — no waiting room, no insurance battles, no runaround. For him and for her.
        </p>
        <div className="flex gap-2.5 flex-wrap items-center">
          <a href="#health-check" className="bg-red hover:bg-red-dark text-primary-foreground text-[0.8rem] font-semibold px-6 py-2.5 rounded-lg transition-all hover:-translate-y-0.5">
            Take Your Health Check →
          </a>
          <a href="#how" className="border-[1.5px] border-warm-200 hover:border-warm-600 text-warm-800 text-[0.8rem] font-medium px-5 py-2.5 rounded-lg transition-colors">
            How It Works
          </a>
        </div>
        <div className="flex gap-4 flex-wrap mt-3.5">
          {["Money-Back Guarantee", "HSA / FSA Accepted", "Free Discreet Shipping"].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-[0.7rem] text-warm-600">
              <span className="text-red"><Check /></span>{t}
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-[5/4] max-h-[48vh] fade-up delay-1">
        <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-warm-100">
          <img src={heroImg} alt="Real Care patient — 100% online healthcare" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute -top-3 -right-3 md:-top-4 md:-right-8 lg:-right-12 w-[30%] aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-soft bg-warm-100">
          <img src={doctorImg} alt="Licensed Real Care provider" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-md rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-soft">
          <div className="font-display text-xl font-black text-red leading-none">4.8★</div>
          <div className="text-[0.65rem] text-warm-600 leading-snug">From 11,400+<br />Verified Reviews</div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
