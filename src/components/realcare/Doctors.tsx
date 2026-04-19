import SectionHeader from "./SectionHeader";
import doc1 from "@/assets/doc-1.jpg";
import doc2 from "@/assets/doc-2.jpg";
import doc3 from "@/assets/doc-3.jpg";
import doc4 from "@/assets/doc-4.jpg";

const doctors = [
  {
    img: doc1,
    name: "Dr. Sarah Chen, MD",
    cred: "Board-Certified Internal Medicine",
    specialty: "Weight Loss · GLP-1 · Metabolic Health",
    school: "Johns Hopkins School of Medicine",
    years: "14 yrs",
  },
  {
    img: doc2,
    name: "Dr. Marcus Reid, MD",
    cred: "Board-Certified Urologist",
    specialty: "Men's Health · TRT · Sexual Wellness",
    school: "Stanford University School of Medicine",
    years: "11 yrs",
  },
  {
    img: doc3,
    name: "Dr. Amara Johnson, MD",
    cred: "Board-Certified OB-GYN",
    specialty: "Women's Health · Menopause · HRT",
    school: "Yale School of Medicine",
    years: "9 yrs",
  },
  {
    img: doc4,
    name: "Dr. David Klein, MD",
    cred: "Board-Certified Dermatologist",
    specialty: "Skincare · Hair Loss · Anti-Aging",
    school: "Harvard Medical School",
    years: "22 yrs",
  },
];

const stats = [
  { n: "300+", l: "Licensed U.S. Providers" },
  { n: "All 50", l: "States Covered" },
  { n: "< 24 hr", l: "Avg. Response Time" },
  { n: "100%", l: "Board-Certified" },
];

const Doctors = () => (
  <section id="doctors" className="bg-warm-50 px-5 md:px-12 pt-16 pb-24">
    <div className="max-w-[1280px] mx-auto">
      <SectionHeader
        label="Meet Your Care Team"
        title={<>Real Doctors. Real Credentials.<br /><em className="not-italic italic text-red">Real Accountability.</em></>}
        sub="Every prescription is reviewed and signed by a U.S. board-certified physician — not a chatbot, not an algorithm. The same doctors you'd find at top hospitals, now available 24/7 from your phone."
        className="fade-up mb-12"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-up delay-1 mb-12">
        {doctors.map((d) => (
          <div key={d.name} className="bg-card rounded-2xl overflow-hidden border border-warm-100 group">
            <div className="aspect-[4/5] overflow-hidden relative bg-warm-100">
              <img
                src={d.img}
                alt={`${d.name} — ${d.cred}`}
                width={640}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute top-3 left-3 bg-background/95 backdrop-blur text-warm-800 text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-warm-100">
                <div className="w-[5px] h-[5px] bg-red rounded-full" />
                {d.years} Practicing
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-[1.05rem] font-bold text-warm-800 leading-tight mb-1">{d.name}</div>
              <div className="text-[0.68rem] font-semibold tracking-[0.06em] uppercase text-red mb-2.5">{d.cred}</div>
              <div className="text-[0.74rem] text-warm-600 leading-[1.55] mb-2">{d.specialty}</div>
              <div className="text-[0.68rem] text-warm-400 italic">{d.school}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card border border-warm-100 rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 fade-up delay-2">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-black text-warm-800 leading-none mb-1.5">{s.n}</div>
            <div className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-warm-600">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Doctors;
