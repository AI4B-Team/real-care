import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you charge a monthly membership fee?",
    a: "Never. One simple price covers your doctor consultation, medication, and free shipping. No membership fee. No hidden charges. What you see is what you pay — period.",
  },
  {
    q: "Is HSA or FSA accepted?",
    a: "Yes. Real Care consultations and prescriptions typically qualify for HSA and FSA reimbursement. Use your card at checkout or submit for reimbursement.",
  },
  {
    q: "How fast will I get my treatment?",
    a: "Most patients go from first question to first delivery in under 48 hours. Your prescription ships free from a certified U.S. pharmacy in discreet packaging.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "Every Real Care treatment is backed by a money-back guarantee. If you don't see results, you don't pay. Cancel anytime — no questions, no fees.",
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
