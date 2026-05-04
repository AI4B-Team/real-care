import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does Real Care work?",
    a: "It's simple. Complete a short online health assessment — takes under 5 minutes. A licensed U.S. provider reviews your information and creates a personalized treatment plan. If prescribed, your medication is prepared at a certified U.S. compounding pharmacy and shipped free, directly to your door in discreet packaging. No waiting rooms. No insurance required.",
  },
  {
    q: "How fast will I receive my medication?",
    a: "Most prescriptions are reviewed and approved within 24–48 hours of completing your assessment. Once approved, your medication is prepared at our pharmacy partner and ships within 2 business days. You'll receive tracking information by email or text as soon as it ships. Most patients receive their first order within 7–10 business days. Refills ship automatically and typically arrive faster since your prescription is already on file.",
  },
  {
    q: "Do you charge a membership fee?",
    a: "Never. One plan price covers your consultation, medication, and free discreet shipping — no membership fees, no hidden charges. Some platforms charge $100-149/month in membership fees on top of medication costs. Real Care charges $0. What you see is what you pay.",
  },
  {
    q: "Is shipping really free?",
    a: "Yes — always. Every order ships free in plain, discreet packaging with no mention of Real Care or the contents on the outside. GLP-1 injectable medications are shipped with ice packs to maintain proper temperature during transit. You'll receive a tracking number the moment your order ships.",
  },
  {
    q: "Can I use my HSA or FSA?",
    a: "Yes. Real Care consultations and prescriptions typically qualify for HSA and FSA reimbursement. Use your HSA or FSA card directly at checkout, or submit your receipt for reimbursement through your plan provider. HSA/FSA eligibility varies by plan — check with your provider if you have questions.",
  },
  {
    q: "Is a real doctor involved?",
    a: "Yes — always. Every prescription is reviewed and approved by a licensed, board-certified U.S. provider. You'll never receive medication without a doctor's sign-off. After approval, your provider is available for 1:1 guidance and questions throughout your entire treatment — not just at signup.",
  },
  {
    q: "Is 24/7 support included?",
    a: "Yes. Every Real Care plan includes unlimited 24/7 access to your care team. Message your provider anytime — day or night, weekends included — with questions about your medication, side effects, or dosage. No appointment needed.",
  },
  {
    q: "Do I need insurance?",
    a: "No. Real Care is 100% cash-pay with no insurance required. There are no surprise bills, no prior authorization battles, and no claim denials. One plan price covers everything — no hidden fees, no membership charges.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. No cancellation fees. Cancel anytime by contacting our care team at least 72 hours before your next billing date. We'll confirm your cancellation in writing.",
  },
  {
    q: "Are the medications FDA-approved?",
    a: "Real Care works with certified U.S. compounding pharmacies to provide compounded medications using FDA-approved active ingredients. Compounded medications are prepared in FDA-regulated facilities and prescribed by licensed providers — however, compounded medications as finished products are not FDA-approved or evaluated for safety, efficacy, or quality. All treatment decisions are made by your licensed provider based on your individual health profile.",
  },
  {
    q: "What states do you serve?",
    a: "Real Care is available in all 50 states through our licensed provider network. Availability of specific treatments may vary by state due to local regulations.",
  },
  {
    q: "How do monthly refills work?",
    a: "Before each monthly refill ships, you'll receive a short check-in form to confirm your progress, note any side effects, and approve the next shipment. This gives you — and your provider — a chance to adjust your dosage or treatment before anything ships. You're never auto-shipped without your input.",
  },
];

const FAQ = () => (
  <section id="faq" className="bg-background px-5 md:px-12 pt-14 pb-24">
    <div className="max-w-[820px] mx-auto fade-up">
      <div className="text-center mb-10">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">FAQ</div>
        <h2 className="font-display font-black leading-[1.1] text-warm-800 text-[clamp(1.9rem,3.5vw,2.6rem)]">
          Questions, <span className="text-red">Answered Honestly</span>
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-warm-100 rounded-xl px-5 data-[state=open]:shadow-soft">
            <AccordionTrigger className="font-display text-[1.05rem] font-bold text-warm-800 hover:no-underline py-5 text-left">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[0.88rem] text-warm-600 leading-[1.75] pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
