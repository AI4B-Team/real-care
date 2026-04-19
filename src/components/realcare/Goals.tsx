import goalWeight from "@/assets/goal-weight.jpg";
import goalSex from "@/assets/goal-sex.jpg";
import goalHair from "@/assets/goal-hair.jpg";
import goalSkin from "@/assets/goal-skin.jpg";
import goalMenopause from "@/assets/goal-menopause.jpg";
import goalEnergy from "@/assets/goal-energy.jpg";

const goals = [
  { img: goalWeight, name: "Lose Weight", sub: "GLP-1 from $179/mo", href: "#men" },
  { img: goalSex, name: "Better Sex", sub: "ED treatment from $2/dose", href: "#men" },
  { img: goalHair, name: "Fuller Hair", sub: "Regrowth from $39/mo", href: "#women" },
  { img: goalSkin, name: "Improve Skin", sub: "Prescription skincare from $35/mo", href: "#women" },
  { img: goalMenopause, name: "Menopause Relief", sub: "HRT & hormones from $89/mo", href: "#women" },
  { img: goalEnergy, name: "More Energy", sub: "Testosterone & peptides from $99/mo", href: "#men" },
];

const Goals = () => (
  <div className="max-w-[1280px] mx-auto -mt-[5.5rem] px-5 md:px-12 relative z-10 fade-up delay-2">
    <div className="bg-card rounded-[20px] shadow-card overflow-hidden border border-warm-100">
      <div className="px-8 pt-5 pb-2">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red">
          Prescription Treatments For Your Health Goals
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((g, i) => (
          <a
            key={g.name}
            href={g.href}
            className={`flex items-center gap-4 px-8 py-5 hover:bg-warm-50 transition-colors border-t border-warm-100 group ${
              i % 3 === 1 ? "lg:border-l lg:border-r border-warm-100" : ""
            } ${i % 2 === 1 ? "sm:border-l lg:sm:border-l-0 border-warm-100" : ""}`}
          >
            <div className="w-[58px] h-[58px] rounded-[10px] overflow-hidden bg-warm-100 flex-shrink-0">
              <img src={g.img} alt={g.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <div className="text-[0.95rem] font-bold text-warm-800 leading-tight">{g.name}</div>
              <div className="text-[0.7rem] text-warm-400 mt-0.5">{g.sub}</div>
            </div>
            <div className="w-8 h-8 bg-warm-800 group-hover:bg-red transition-colors rounded-full flex items-center justify-center text-primary-foreground text-sm">
              →
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Goals;
