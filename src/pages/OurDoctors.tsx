import PageLayout from "@/components/realcare/PageLayout";
import { ShieldCheck, Star, Clock, Globe } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const doctors = [
  { name: "Dr. Sarah Chen, MD", cred: "Board-Certified Internal Medicine", specialty: "Weight Loss · GLP-1 · Metabolic Health", school: "Johns Hopkins School of Medicine", years: "14 yrs" },
  { name: "Dr. Marcus Reid, MD", cred: "Board-Certified Urologist", specialty: "Men's Health · TRT · Sexual Wellness", school: "Stanford University School of Medicine", years: "11 yrs" },
  { name: "Dr. Amara Johnson, MD", cred: "Board-Certified OB-GYN", specialty: "Women's Health · Menopause · HRT", school: "Yale School of Medicine", years: "9 yrs" },
  { name: "Dr. David Klein, MD", cred: "Board-Certified Dermatologist", specialty: "Skincare · Hair Loss · Anti-Aging", school: "Harvard Medical School", years: "22 yrs" },
  { name: "Dr. Daniel Ortiz, MD", cred: "Board-Certified Endocrinologist", specialty: "GLP-1 · Diabetes · Metabolic Care", school: "UCSF School of Medicine", years: "12 yrs" },
  { name: "Dr. Mei Tanaka, MD", cred: "Board-Certified Family Medicine", specialty: "Primary Care · Weight Loss · Wellness", school: "Columbia University Vagelos", years: "16 yrs" },
  { name: "Dr. James Whitaker, MD", cred: "Board-Certified Psychiatrist", specialty: "Mental Health · Anxiety · Sleep", school: "Duke University School of Medicine", years: "20 yrs" },
  { name: "Dr. Hannah Brooks, MD", cred: "Board-Certified Dermatologist", specialty: "Skincare · Anti-Aging · Hair", school: "University of Pennsylvania", years: "8 yrs" },
];

const stats = [
  { icon: <ShieldCheck size={22} />, n: "300+", l: "Licensed U.S. Providers" },
  { icon: <Globe size={22} />, n: "All 50", l: "States Covered" },
  { icon: <Clock size={22} />, n: "24/7", l: "Care Availability" },
  { icon: <Star size={22} />, n: "100%", l: "Board-Certified" },
];

const standards = [
  { title: "Board Certification Required", desc: "Every provider in our network holds active board certification in their specialty from an ABMS-recognized board." },
  { title: "Active U.S. License", desc: "All providers hold active, unrestricted medical licenses in the states where they practice." },
  { title: "Telehealth Experience", desc: "Our providers specialize in telehealth delivery and are experienced in evidence-based digital care." },
  { title: "Ongoing Oversight", desc: "Provider performance is continuously monitored against clinical quality standards. We do not tolerate shortcuts." },
  { title: "No AI Prescribing", desc: "Prescriptions are reviewed and signed by real, licensed physicians — not AI. Every time, no exceptions." },
  { title: "Patient Privacy First", desc: "All providers operate under strict HIPAA compliance and our confidentiality standards." },
];

const OurDoctors = () => (
  <PageLayout title="Our Doctors">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Meet Your Care Team</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
          Real Doctors.<br />
          <span className="text-red">Real Credentials. Real Accountability.</span>
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[560px] mx-auto">
          Every prescription is reviewed and signed by a U.S. board-certified physician — not a chatbot, not an algorithm. The same doctors you'd find at top hospitals, now available 24/7 from your phone.
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="bg-red px-5 md:px-12 py-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="flex justify-center text-primary-foreground/60 mb-2">{s.icon}</div>
            <div className="font-display text-3xl font-black text-primary-foreground">{s.n}</div>
            <div className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-primary-foreground/50 mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Doctor grid */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10 fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Provider Network</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            Our Featured Providers
          </h2>
          <p className="text-[0.85rem] text-warm-600 mt-3 max-w-[440px] mx-auto">
            A sample of the board-certified specialists in our network. Your assigned provider will be matched to your specific treatment needs.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-up">
          {doctors.map((d) => (
            <div key={d.name} className="bg-card border border-warm-100 rounded-2xl overflow-hidden">
              {/* Photo placeholder */}
              <div className="aspect-[4/5] bg-warm-100 relative">
                <div className="absolute top-3 left-3 bg-background/95 text-warm-800 text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-warm-100">
                  <div className="w-[5px] h-[5px] bg-red rounded-full" />
                  {d.years} Practicing
                </div>
              </div>
              <div className="p-5">
                <div className="font-display font-bold text-warm-800 leading-tight mb-1">{d.name}</div>
                <div className="text-[0.65rem] font-semibold tracking-[0.06em] uppercase text-red mb-2">{d.cred}</div>
                <div className="text-[0.72rem] text-warm-600 leading-[1.55] mb-2">{d.specialty}</div>
                <div className="text-[0.65rem] text-warm-400 italic">{d.school}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Standards */}
    <div className="bg-warm-50 border-y border-warm-100 px-5 md:px-12 pt-14 pb-16">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Our Standards</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
            How We Vet Every Provider
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((s) => (
            <div key={s.title} className="bg-card border border-warm-100 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red"><Check /></span>
                </div>
                <div>
                  <h3 className="font-semibold text-warm-800 mb-1.5">{s.title}</h3>
                  <p className="text-[0.81rem] text-warm-600 leading-[1.7]">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Medical disclaimer */}
    <div className="bg-background px-5 md:px-12 pt-12 pb-16">
      <div className="max-w-[860px] mx-auto fade-up">
        <div className="bg-warm-50 border border-warm-100 rounded-2xl p-7">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-3">Important Notice</div>
          <p className="text-[0.82rem] text-warm-600 leading-[1.8]">
            Real Care Inc. is a patient management platform that provides administrative and operational support to licensed physicians and practitioners. Real Care does not practice medicine, employ healthcare providers, or influence clinical decision-making. All medical treatment is provided by independent licensed professionals operating through Real Care Affiliated P.C.s and our provider network. Provider photos and names are representative of our network — your assigned provider may differ based on availability and your state of residence.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
      <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-3">Get Started</div>
      <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
        Meet Your Provider Today
      </h2>
      <p className="text-[0.88rem] text-primary-foreground/70 mb-6 max-w-[420px] mx-auto">
        Take your free health check and get matched with a licensed provider in your state — within 48 hours.
      </p>
      <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]">
        Take Your Health Check →
      </a>
    </div>
  </PageLayout>
);

export default OurDoctors;
