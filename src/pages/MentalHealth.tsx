import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const MentalHealth = () => (
  <ProductPageTemplate
    pageTitle="Mental Health — Online Therapy & Prescriptions"
    label="Men & Women · Mental Health"
    pill="Private & Confidential"
    headline={<>Feel Like<br /><span className="text-red">Yourself Again.</span></>}
    sub="Online mental health prescriptions for anxiety, depression, and sleep — from licensed psychiatric providers. Private, judgment-free, delivered monthly."
    trustBullets={["From $49/mo", "Licensed Psychiatrists", "Private & Confidential", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="Private Mental Health Care — 100% Online"
    howItems={[
      { title: "Confidential Assessment", desc: "Complete your mental health intake in total privacy. Your information is protected by HIPAA and never shared without your consent." },
      { title: "Psychiatric Provider Review", desc: "A board-certified psychiatrist or psychiatric nurse practitioner reviews your intake and determines appropriate treatment." },
      { title: "Prescription If Appropriate", desc: "If medication is appropriate for your situation, your provider writes a prescription and explains the plan in detail." },
      { title: "Ongoing Care", desc: "Monthly check-ins track your progress. Your provider adjusts your treatment as needed. You can message them anytime, 24/7." },
    ]}
    medications={[
      {
        name: "Anxiety Treatment",
        desc: "SSRIs and non-habit-forming options",
        price: "From $49/mo",
        popular: true,
        bullets: ["Non-habit-forming medications", "SSRIs and SNRIs available", "Buspirone for daily anxiety", "Provider check-ins included"],
      },
      {
        name: "Depression Treatment",
        desc: "Personalized antidepressant protocol",
        price: "From $49/mo",
        bullets: ["Sertraline, escitalopram, and more", "Personalized dosing", "Mood tracking included", "Provider adjusts as needed"],
      },
      {
        name: "Sleep Treatment",
        desc: "Non-habit-forming sleep prescriptions",
        price: "From $39/mo",
        bullets: ["Prescription sleep aids", "Non-habit-forming options prioritized", "Sleep hygiene guidance included", "Short-term and long-term options"],
      },
    ]}
    ctaHeadline="Private Care For How You Really Feel"
    ctaSub="A licensed psychiatric provider reviews your intake within 24 hours. Everything is private, confidential, and HIPAA-protected."
    disclaimer="Real Care mental health services are for mild to moderate anxiety, depression, and sleep issues. We do not treat severe psychiatric conditions, psychosis, bipolar disorder requiring mood stabilizers, or active suicidal ideation. If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. All prescribing decisions are at the sole discretion of your licensed provider."
  />
);

export default MentalHealth;
