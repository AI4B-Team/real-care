import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronDown, Mail, MessageCircle, Clock } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "How do I get started with Real Care?",
        a: "Click 'Health Check' in the navigation or visit realcare.com/health-check. Complete your free medical assessment — it takes about 5 minutes. A board-certified provider reviews your intake within 24–48 hours and reaches out with your personalized treatment plan.",
      },
      {
        q: "Is the health assessment really free?",
        a: "Yes. The health assessment is completely free. You only pay if a provider approves you for treatment and you choose to move forward with a plan.",
      },
      {
        q: "How long does it take to get approved?",
        a: "Most patients receive a response from their provider within 24–48 hours of submitting their assessment. If your provider needs additional information, they will message you directly through your patient portal.",
      },
      {
        q: "What states do you serve?",
        a: "Real Care serves all 50 U.S. states. Our provider network includes board-certified physicians licensed in every state through OpenLoop Health.",
      },
      {
        q: "Do I need insurance?",
        a: "No. Real Care is a cash-pay telehealth platform. You do not need insurance. However, you can pay with your HSA or FSA card — GLP-1 prescriptions and other medical treatments typically qualify as eligible medical expenses.",
      },
    ],
  },
  {
    category: "Medications & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "After your provider approves your prescription, your medication ships from a licensed U.S. pharmacy within 2 business days. Delivery typically arrives in 7–10 business days. You will receive a tracking number by email.",
      },
      {
        q: "Is shipping free?",
        a: "Yes. Free discreet shipping is included in every plan. Your medication arrives in plain, unmarked packaging with no indication of the contents.",
      },
      {
        q: "What is compounded medication?",
        a: "Compounded medications contain the same active ingredients as brand-name drugs like Ozempic® and Wegovy® but are prepared by state-licensed pharmacies to meet individual patient needs. They are not FDA-approved as finished products, but the active ingredients are the same. Your provider will explain whether compounded medication is appropriate for you.",
      },
      {
        q: "Can my dose change over time?",
        a: "Yes. GLP-1 treatment involves gradual dose escalation — your provider will increase your dose over time based on your progress and tolerance. Your monthly price does not change as your dose increases. The price you start with is the price you stay on.",
      },
      {
        q: "What if my medication gets lost or damaged in shipping?",
        a: "Contact us at support@realcare.com immediately. We will work with the pharmacy to replace your medication at no additional cost.",
      },
    ],
  },
  {
    category: "Pricing & Billing",
    items: [
      {
        q: "What does my plan include?",
        a: "Every Real Care plan includes your doctor consultation, prescription medication, free discreet shipping, and 24/7 provider messaging. There are no separate fees, no membership charges, and no surprise bills.",
      },
      {
        q: "Is there a membership fee?",
        a: "Never. Real Care charges $0 in membership fees — ever. Unlike Hims ($149/mo membership) and Ro ($145/mo membership), your plan price covers everything.",
      },
      {
        q: "Can I pay with my HSA or FSA card?",
        a: "Yes. Use your HSA or FSA card at checkout just like a regular debit card. Prescription medications through Real Care typically qualify as eligible medical expenses. Eligibility may vary by plan administrator — check with your HSA/FSA provider if you are unsure.",
      },
      {
        q: "When am I charged?",
        a: "Your first payment is made at checkout after your health assessment. If you select a monthly plan, you are charged automatically each month on the same date. Annual and multi-month plans are charged as a single upfront payment.",
      },
      {
        q: "Can I switch plans?",
        a: "Yes. You can switch between monthly, 3-month, 6-month, and annual plans at any time through your patient portal under Billing. Changes take effect at your next renewal date.",
      },
      {
        q: "Can I pause or cancel my subscription?",
        a: "Monthly plans can be cancelled at any time with no penalty. Multi-month and annual plans are prepaid — you can pause or cancel, but prepaid months are non-refundable except under the weight loss money-back guarantee.",
      },
    ],
  },
  {
    category: "GLP-1 Weight Loss",
    items: [
      {
        q: "Am I eligible for GLP-1 medication?",
        a: "GLP-1 medications are typically prescribed to patients with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related health condition such as high blood pressure, type 2 diabetes, or high cholesterol. Your provider makes the final eligibility determination based on your full health assessment.",
      },
      {
        q: "What is the difference between semaglutide and tirzepatide?",
        a: "Semaglutide (same active ingredient as Ozempic® and Wegovy®) targets GLP-1 receptors and is the most widely studied GLP-1 medication. Tirzepatide (same active ingredient as Mounjaro® and Zepbound®) targets both GLP-1 and GIP receptors and may produce greater average weight loss in clinical trials. Your provider will recommend the right medication based on your health profile and goals.",
      },
      {
        q: "Do you offer needle-free options?",
        a: "Yes. Real Care offers compounded semaglutide in three formats: weekly injectable, daily sublingual drops, and daily oral tablet. If you prefer to avoid injections, your provider can prescribe a non-injectable format. Discuss your preference during your health assessment.",
      },
      {
        q: "How much weight can I expect to lose?",
        a: "Based on the STEP 1 clinical trial, patients on semaglutide 2.4mg lost an average of 14.9% of body weight over 68 weeks. Results vary significantly based on individual factors including starting weight, diet, activity level, and adherence to treatment. Your provider will help you set realistic goals for your specific situation.",
      },
      {
        q: "What is your money-back guarantee?",
        a: "Real Care offers a 5-month money-back guarantee on GLP-1 weight loss plans. If you follow your prescribed treatment plan for 5 months and see no results, we will refund you. Annual and 6-month plan patients are fully covered. Monthly plan patients are not eligible. Full terms at realcare.com/refund-policy.",
      },
      {
        q: "What are the common side effects?",
        a: "The most common side effects of GLP-1 medications are nausea, constipation, diarrhea, and reduced appetite — especially during the first few weeks and after dose increases. These typically improve as your body adjusts. If you experience severe or persistent side effects, message your provider immediately through your patient portal.",
      },
    ],
  },
  {
    category: "Patient Portal & Messaging",
    items: [
      {
        q: "How do I message my provider?",
        a: "Log in at realcare.com/patient-portal and click the Messages tab. Type your message and your provider or care team will respond within 24 hours. For urgent medical concerns, contact emergency services or visit an urgent care clinic.",
      },
      {
        q: "How do I request a refill?",
        a: "Log in to your patient portal and click the Refill tab. Complete the short check-in form — your provider reviews it and approves your refill within 24 hours. Your medication ships automatically if approved.",
      },
      {
        q: "I can't log in to my account. What do I do?",
        a: "Visit realcare.com/forgot-password to reset your password using your email address. If you are still unable to log in, email support@realcare.com and include the email address associated with your account.",
      },
      {
        q: "How do I update my shipping address or credit card?",
        a: "Log in to your patient portal and click the Settings tab to update your shipping address. Click the Billing tab to update your payment method through the secure billing portal.",
      },
      {
        q: "Is my health information private?",
        a: "Yes. Real Care is HIPAA-compliant. Your health information is encrypted, never sold to third parties, and only shared with the providers and pharmacies directly involved in your care. You can read our full privacy policy at realcare.com/privacy and our HIPAA Notice at realcare.com/hipaa.",
      },
    ],
  },
  {
    category: "Couples Plan",
    items: [
      {
        q: "How does the couples plan work?",
        a: "When both partners enroll in Real Care, each person saves 15% off their individual monthly treatment price. Each person still completes their own separate health assessment and receives their own personalized treatment plan. The 15% discount is applied automatically — no code needed.",
      },
      {
        q: "Do we have to be on the same treatment?",
        a: "No. Each partner chooses their own treatment independently. One partner could be on GLP-1 weight loss while the other is on TRT or HRT — the 15% discount applies to both regardless of which treatments you choose.",
      },
      {
        q: "Can we share a patient portal?",
        a: "No. Each patient has their own private, secure patient portal. Health information is never shared between accounts, even for couples.",
      },
    ],
  },
];

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-warm-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className={`text-[0.9rem] font-semibold transition-colors ${open ? "text-red" : "text-warm-800 group-hover:text-red"}`}>{q}</span>
        <ChevronDown size={16} className={`flex-shrink-0 text-warm-400 transition-transform duration-200 ${open ? "rotate-180 text-red" : ""}`} />
      </button>
      {open && (
        <div className="pb-4 pr-6">
          <p className="text-[0.85rem] text-warm-600 leading-[1.75]">{a}</p>
        </div>
      )}
    </div>
  );
};

const SupportFAQ = () => (
  <PageLayout title="Support & FAQ">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
      <div className="max-w-[860px] mx-auto text-center fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Help Center</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3rem)] mb-4">
          How Can We Help?
        </h1>
        <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-[480px] mx-auto">
          Find answers to the most common questions below. Can't find what you need? Email us directly — we respond within 24 hours.
        </p>
      </div>
    </div>

    {/* Contact options */}
    <div className="bg-red px-5 md:px-12 py-5">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 justify-center items-center">
        {[
          { icon: <Mail size={15} />, label: "support@realcare.com", sub: "Email — 24hr response" },
          { icon: <MessageCircle size={15} />, label: "Patient Portal Messaging", sub: "Existing patients — fastest response" },
          { icon: <Clock size={15} />, label: "Mon–Fri 9am–6pm ET", sub: "Business hours" },
        ].map((c) => (
          <div key={c.label} className="flex items-center gap-2.5 text-primary-foreground">
            <span className="text-primary-foreground/70">{c.icon}</span>
            <div>
              <div className="text-[0.8rem] font-semibold">{c.label}</div>
              <div className="text-[0.68rem] text-primary-foreground/60">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* FAQ sections */}
    <div className="bg-background px-5 md:px-12 pt-14 pb-24">
      <div className="max-w-[860px] mx-auto space-y-10 fade-up">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="font-display font-black text-warm-800 text-xl mb-4 pb-3 border-b-2 border-red/20">
              {section.category}
            </h2>
            <div className="bg-card border border-warm-100 rounded-2xl px-6">
              {section.items.map((item) => (
                <AccordionItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}

        {/* Still need help */}
        <div className="bg-warm-800 rounded-2xl p-8 text-center">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Still Need Help?</div>
          <h3 className="font-display font-bold text-white text-xl mb-3">We're Real Humans</h3>
          <p className="text-[0.85rem] text-white/60 leading-[1.75] mb-5 max-w-[380px] mx-auto">
            No chatbots. No runaround. Email our support team directly and a real person responds within 24 hours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="mailto:support@realcare.com"
              className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-6 py-3 rounded-lg text-[0.85rem] transition-colors"
            >
              Email Support →
            </a>
            <a
              href="/patient-portal"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-6 py-3 rounded-lg text-[0.85rem] transition-colors"
            >
              Patient Portal
            </a>
          </div>
          <p className="text-[0.72rem] text-white/30 mt-4">
            For urgent medical concerns, contact emergency services or visit your nearest urgent care clinic.
          </p>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default SupportFAQ;
