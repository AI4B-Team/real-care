import PageLayout from "@/components/realcare/PageLayout";

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const About = () => (
  <PageLayout title="About Real Care">
    {/* Hero */}
    <div className="bg-warm-800 px-5 md:px-12 py-20">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Our Mission</div>
        <h1 className="font-display font-black leading-[1.05] text-white text-[clamp(2.2rem,4vw,3.5rem)] mb-4 max-w-[700px]">
          Healthcare That Works<br />
          <span className="text-red">For Real Life.</span>
        </h1>
        <p className="text-[0.9rem] text-white/70 leading-[1.75] max-w-[560px]">
          Real Care exists because healthcare is broken for most people. Too expensive. Too slow. Too complicated. We built a better way — doctor-prescribed treatment, delivered to your door, at prices that make sense.
        </p>
      </div>
    </div>

    {/* Mission */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
      <div className="max-w-[860px] mx-auto fade-up">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">The Problem</div>
            <h2 className="font-display font-bold text-warm-800 text-2xl mb-4">The System Was Built For Insurance Companies. Not For You.</h2>
            <div className="space-y-3">
              {[
                "Waiting weeks for an appointment to get a prescription you already know you need",
                "Paying $1,300+/month for brand-name GLP-1 medications that insurance denies",
                "Driving to a pharmacy and dealing with insurance prior authorizations",
                "Separate membership fees, hidden charges, and surprise bills",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-[0.83rem] text-warm-600 leading-[1.65]">
                  <span className="text-red flex-shrink-0 mt-0.5">✕</span>{p}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">The Real Care Way</div>
            <h2 className="font-display font-bold text-warm-800 text-2xl mb-4">One Price. Everything Included. At Your Door In Days.</h2>
            <div className="space-y-3">
              {[
                "5-minute health check — provider reviews within 24 hours",
                "GLP-1 weight loss starting at $179/mo — all-inclusive, no hidden fees",
                "Free discreet shipping from certified U.S. compounding pharmacies",
                "Zero membership fees — ever. What you see is what you pay.",
              ].map((p) => (
                <div key={p} className="flex items-start gap-2.5 text-[0.83rem] text-warm-600 leading-[1.65]">
                  <span className="text-red flex-shrink-0 mt-0.5"><Check /></span>{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 pt-14 pb-16">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-center mb-10">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">What We Stand For</div>
          <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Honest Pricing", desc: "No membership fees, no hidden charges, no bait-and-switch. One price that includes everything. We say it loudly because most competitors won't." },
            { title: "Real Doctors", desc: "Every prescription is reviewed by a board-certified U.S. physician. No AI prescribing, no fake doctor personas, no shortcuts." },
            { title: "Radical Transparency", desc: "We tell you exactly what compounded medications are and aren't. You deserve the full picture before you decide." },
            { title: "Co-Ed Care", desc: "We built the only telehealth platform that serves men and women equally — with a couples plan nobody else offers." },
            { title: "Compliance First", desc: "LegitScript certified. HIPAA compliant. Licensed in all 50 states. We do this right or we don't do it." },
            { title: "Patient-First Always", desc: "If a provider determines you're not eligible for treatment, you'll know immediately and be fully refunded. Your health comes before our revenue." },
          ].map((v) => (
            <div key={v.title} className="bg-card border border-warm-100 rounded-2xl p-6">
              <div className="w-8 h-8 rounded-full bg-red/[0.1] flex items-center justify-center mb-4">
                <span className="text-red"><Check /></span>
              </div>
              <h3 className="font-semibold text-warm-800 mb-2">{v.title}</h3>
              <p className="text-[0.81rem] text-warm-600 leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Legal disclaimer */}
    <div className="bg-background px-5 md:px-12 pt-12 pb-16">
      <div className="max-w-[860px] mx-auto fade-up">
        <div className="bg-warm-50 border border-warm-100 rounded-2xl p-7">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-3">About Our Platform</div>
          <p className="text-[0.82rem] text-warm-600 leading-[1.8]">
            Real Care Inc. is a patient management platform that provides administrative and operational support to physicians and practitioners employed by or contracted with Real Care Affiliated P.C.s and our network of licensed providers. Real Care does not provide medical or pharmacy services, employ healthcare providers, or influence clinical decision-making. All medical treatment is provided by independent, licensed healthcare professionals. Payment does not guarantee the prescribing or dispensing of medication. This website is an advertisement for telehealth services; any treatment or prescription is at the sole discretion of the prescribing provider.
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
      <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.5rem)] mb-4">
        Ready To Experience Real Care?
      </h2>
      <p className="text-[0.88rem] text-primary-foreground/70 mb-6 max-w-[400px] mx-auto">
        Take your free health check — 5 minutes, no obligation.
      </p>
      <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]">
        Take Your Health Check →
      </a>
    </div>
  </PageLayout>
);

export default About;
