import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

// ⚠️ COMPLIANCE NOTE: Replace these with real verified patient testimonials
// before launch. FTC requires testimonials to reflect real patient experiences.
// Remove or clearly label as "Illustrative Example" until you have real reviews.
// Collect real reviews via: post-delivery email (Klaviyo flow), Trustpilot invite.
const reviews = [
  { tag: "GLP-1 Weight Loss", quote: "Real patient testimonial coming soon. We'll add verified reviews from our first patients here.", name: "Patient Name", meta: "Weight Loss · GLP-1 Program", img: avatar1, placeholder: true },
  { tag: "Men's Health", quote: "Real patient testimonial coming soon. We'll add verified reviews from our first patients here.", name: "Patient Name", meta: "Men's Health · ED Treatment", img: avatar2, placeholder: true },
  { tag: "Women's Health", quote: "Real patient testimonial coming soon. We'll add verified reviews from our first patients here.", name: "Patient Name", meta: "Women's Health · Menopause HRT", img: avatar3, placeholder: true },
];

const Reviews = () => (
  <section id="results" className="bg-background px-5 md:px-12 pt-14 pb-24">
    <div className="max-w-[1280px] mx-auto">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-6 fade-up">
        <div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Real Patient Stories</div>
          <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)]">
            Real People.<br /><span className="text-red">Real Results.</span>
          </h2>
        </div>
        <div className="bg-card border border-warm-100 rounded-full px-4 py-2 flex items-center gap-2 text-[0.73rem] text-warm-600">
          <div className="text-red tracking-widest text-sm">★★★★★</div>
          <div>Verified Patient Reviews</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 fade-up delay-1">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-warm-100 rounded-[14px] p-7">
            <span className="inline-block bg-red/[0.08] text-red text-[0.6rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded mb-3.5">{r.tag}</span>
            <p className="text-[0.92rem] text-warm-800 leading-[1.65] mb-5">"{r.quote}"</p>
            <div className="flex items-center gap-2.5">
              <img src={r.img} alt={r.name} className="w-9 h-9 rounded-full object-cover border-2 border-warm-100" />
              <div>
                <div className="text-[0.79rem] font-semibold text-warm-800">{r.name}</div>
                <div className="text-[0.67rem] text-warm-400">{r.meta}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
