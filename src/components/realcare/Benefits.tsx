import SectionHeader from "./SectionHeader";
import benefit1 from "@/assets/benefit-1.jpg";
import benefit2 from "@/assets/benefit-2.jpg";
import benefit3 from "@/assets/benefit-3.jpg";
import benefit4 from "@/assets/benefit-4.jpg";

const items = [
  { img: benefit1, badge: "Always Available", title: "Message Your Doctor 24/7", desc: "Your care team responds fast — day or night, weekends included. No appointment needed. Ever." },
  { img: benefit2, badge: "All In One Place", title: "Manage Everything In One Place", desc: "Track your progress, adjust your plan, and manage all prescriptions from one simple dashboard." },
  { img: benefit3, badge: "No Hidden Fees", title: "Clinically-Proven Treatments", desc: "Licensed U.S. pharmacies. No insurance required. Clear starting prices — no surprises at checkout." },
  { img: benefit4, badge: "Fast & Discreet", title: "Free Shipping To Your Door", desc: "Plain packaging. Free expedited delivery. Start your treatment within days — not weeks." },
];

const Benefits = () => (
  <section className="bg-background px-5 md:px-12 pt-32 pb-24">
    <div className="max-w-[1280px] mx-auto">
      <SectionHeader
        label="Why Real Care"
        title={<>Doctor-Led Care<br />Delivered Directly To You</>}
        sub="Skip the waiting room, the insurance battle, and the pharmacy line. Real treatment from real doctors — delivered to your door."
        className="fade-up mb-12"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-up delay-1">
        {items.map((b) => (
          <div key={b.title} className="bg-card rounded-2xl overflow-hidden border border-warm-100">
            <div className="aspect-[4/3] overflow-hidden relative">
              <img src={b.img} alt={b.title} className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur text-warm-800 text-[0.6rem] font-bold tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap border border-warm-100">
                <div className="w-[5px] h-[5px] bg-red rounded-full" />
                {b.badge}
              </div>
            </div>
            <div className="p-5">
              <div className="font-display text-lg font-bold text-warm-800 mb-1.5">{b.title}</div>
              <p className="text-[0.74rem] text-warm-600 leading-[1.6]">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
