import PageLayout from "@/components/realcare/PageLayout";
import { ClipboardList, Video, Package, MessageCircle, RefreshCw, ShieldCheck } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const steps = [
  {
    n: "01",
    icon: <ClipboardList size={28} />,
    title: "Complete Your Health Assessment",
    desc: "Answer a short set of questions about your health history, goals, and current medications. Takes under 5 minutes. Completely confidential. No in-person visit required.",
    detail: "Your intake is reviewed by a licensed U.S. physician — not an algorithm. We look at your full picture to recommend the right treatment.",
    bullets: [
      "Takes under 5 minutes",
      "100% confidential",
      "No waiting room, ever",
      "Reviewed by a board-certified provider",
    ],
  },
  {
    n: "02",
    icon: <Video size={28} />,
    title: "Meet Your Provider",
    desc: "A licensed U.S. physician reviews your assessment and creates a personalized treatment plan. Depending on your state and treatment, this may be asynchronous (message-based) or via a short video call.",
    detail: "Your provider is available 1:1 for ongoing guidance throughout your entire treatment — not just at signup. 24/7 access included.",
    bullets: [
      "Licensed, board-certified U.S. physicians",
      "1:1 physician guidance throughout treatment",
      "24/7 care team access",
      "Ongoing check-ins and dosage adjustments",
    ],
  },
  {
    n: "03",
    icon: <Package size={28} />,
    title: "Treatment Delivered To Your Door",
    desc: "If prescribed, your medication ships free from a certified U.S. compounding pharmacy in discreet, plain packaging. No Real Care branding on the outside. Tracking included.",
    detail: "Most patients receive their first order within 7–10 business days. GLP-1 injectables ship with ice packs for proper temperature control.",
    bullets: [
      "Free shipping on every order",
      "Plain, discreet packaging",
      "Tracking info sent immediately at shipment",
      "Most first orders arrive in 7–10 business days",
    ],
  },
  {
    n: "04",
    icon: <RefreshCw size={28} />,
    title: "Monthly Refills — No Hassle",
    desc: "Before each monthly refill, you'll receive a short check-in form to confirm your progress and approve your next shipment. You're never auto-shipped without your input.",
    detail: "Your provider reviews your check-in and adjusts your dosage if needed. Refills typically arrive faster than your first order since your prescription is already on file.",
    bullets: [
      "Quick monthly check-in form",
      "Dosage adjustments as needed",
      "Never auto-shipped without approval",
      "Refills ship faster than your first order",
    ],
  },
];

const trust = [
  { icon: <ShieldCheck size={22} />, label: "Licensed In All 50 States", sub: "Through our provider network" },
  { icon: <MessageCircle size={22} />, label: "24/7 Provider Access", sub: "Message anytime — no appointment" },
  { icon: <Check />, label: "$0 Membership Fee", sub: "One price includes everything" },
  { icon: <Package size={22} />, label: "Free Discreet Shipping", sub: "On every order, always" },
];

const HowItWorksPage = () => (
  <PageLayout title="How It Works">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-16">
      <div className="max-w-[1280px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Simple Process</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2.2rem,4vw,3.5rem)] mb-4">
          From First Question<br />
          <span className="text-red">To Front Door — In Days.</span>
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[500px] mx-auto mb-8">
          No waiting rooms. No insurance battles. No pharmacy lines. Just real doctor-prescribed care, delivered to your door.
        </p>
        <a
          href="/health-check"
          className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors"
        >
          Take Your Health Check →
        </a>
      </div>
    </div>

    {/* Trust bar */}
    <div className="bg-warm-800 px-5 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-6 justify-center">
        {trust.map((t) => (
          <div key={t.label} className="flex items-center gap-2.5">
            <span className="text-red">{t.icon}</span>
            <div>
              <div className="text-[0.78rem] font-semibold text-white">{t.label}</div>
              <div className="text-[0.65rem] text-white/50">{t.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Steps */}
    <div className="bg-background px-5 md:px-12 pt-16 pb-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="space-y-6 fade-up">
          {steps.map((step, i) => (
            <div key={step.n} className="grid lg:grid-cols-[120px_1fr_1fr] gap-6 bg-card border border-warm-100 rounded-2xl p-6 md:p-8 items-start">
              {/* Step number */}
              <div className="flex lg:flex-col items-center lg:items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-red text-primary-foreground flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                  {i + 1}
                </div>
                <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-warm-400">Step {i + 1} of {steps.length}</div>
              </div>
              {/* Main content */}
              <div>
                <div className="flex items-center gap-2 text-red mb-3">{step.icon}</div>
                <h3 className="font-display text-xl font-bold text-warm-800 mb-2">{step.title}</h3>
                <p className="text-[0.85rem] text-warm-600 leading-[1.75] mb-3">{step.desc}</p>
                <p className="text-[0.82rem] text-warm-400 italic leading-[1.7]">{step.detail}</p>
              </div>
              {/* Bullets */}
              <div className="bg-warm-50 rounded-xl p-5">
                <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-warm-400 mb-3">What To Expect</div>
                <div className="space-y-2.5">
                  {step.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 text-[0.82rem] text-warm-700">
                      <span className="text-red flex-shrink-0"><Check /></span>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline callout */}
        <div className="mt-12 bg-red rounded-2xl p-8 md:p-10 text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-3">Timeline</div>
          <h3 className="font-display text-3xl font-black text-primary-foreground mb-6">
            Most Patients Go From<br />Signup To Delivery In Under 10 Days
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
            {[
              { time: "5 min", label: "Health Assessment" },
              { time: "24–48 hrs", label: "Provider Review" },
              { time: "2 days", label: "Ships From Pharmacy" },
              { time: "7–10 days", label: "Arrives At Your Door" },
            ].map((t, i) => (
              <div key={t.label} className="flex items-center gap-3 md:gap-4">
                <div className="text-center">
                  <div className="font-display text-xl font-black text-primary-foreground">{t.time}</div>
                  <div className="text-[0.65rem] text-primary-foreground/60 font-semibold tracking-wider uppercase mt-0.5">{t.label}</div>
                </div>
                {i < 3 && <div className="hidden md:block text-primary-foreground/30 text-xl">→</div>}
              </div>
            ))}
          </div>
          <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]">
            Start Your Assessment →
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-14 fade-up">
          <h3 className="font-display text-2xl font-black text-warm-800 text-center mb-8">Common Questions</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { q: "Do I need to see a doctor in person?", a: "No. Real Care is 100% online. Your provider reviews your health assessment and communicates with you through our secure platform." },
              { q: "Will my doctor know my medical history?", a: "Yes. Your provider reviews everything you share in your intake — current medications, health conditions, goals, and history — before making any recommendation." },
              { q: "What if my provider says I'm not eligible?", a: "If you're not medically eligible for a treatment, you'll be notified and fully refunded. Your provider may also suggest an alternative that's better suited for you." },
              { q: "How are refills handled?", a: "Before each monthly refill, you complete a short check-in confirming your progress and approving the next shipment. Your provider reviews and ships accordingly." },
              { q: "What if I have questions after I start treatment?", a: "Your care team is available 24/7 via secure messaging. You can ask questions, report side effects, or request a dosage review anytime." },
              { q: "Is my information secure?", a: "Yes. Real Care is HIPAA-compliant. Your health information is encrypted and protected under federal privacy laws." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-warm-100 rounded-xl p-6">
                <div className="font-semibold text-warm-800 text-[0.92rem] mb-2">{faq.q}</div>
                <p className="text-[0.82rem] text-warm-600 leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 text-center fade-up">
          <h3 className="font-display text-2xl font-black text-warm-800 mb-4">Ready To Get Started?</h3>
          <p className="text-[0.88rem] text-warm-600 mb-6 max-w-[380px] mx-auto">
            Take your free health check — takes under 5 minutes and there's no obligation.
          </p>
          <a href="/health-check" className="inline-block bg-red hover:bg-red-dark text-primary-foreground font-bold px-8 py-3.5 rounded-lg text-[0.9rem] transition-colors">
            Take Your Health Check — Free →
          </a>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default HowItWorksPage;
