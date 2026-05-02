import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-mental.jpg";

const MentalHealth = () => (
  <ProductPageTemplate
    pageTitle="Mental Health — Online Therapy & Prescriptions"
    label="Men & Women · Mental Health"
    pill="Private & Confidential"
    productImage={productImage}
    productImageAlt="Mental health prescription medication bottle"
    headline={<>Feel Like<br /><span className="text-red">Yourself Again.</span></>}
    sub="Online mental health prescriptions for anxiety, depression, and sleep — from licensed psychiatric providers. Private, judgment-free, delivered monthly if appropriate for you."
    trustBullets={["From $49 / Mo", "Licensed Psychiatric Providers", "Private & Confidential", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="Private Mental Health Care — 100% Online"
    howItems={[
      { title: "Confidential Assessment", desc: "Complete your mental health intake in total privacy. Your information is protected by HIPAA and never shared without your consent." },
      { title: "Psychiatric Provider Review", desc: "A licensed psychiatric provider reviews your intake and determines whether treatment is clinically appropriate." },
      { title: "Prescription If Appropriate", desc: "If medication is appropriate for your situation, your provider writes a prescription and explains the plan in detail." },
      { title: "Ongoing Care", desc: "Monthly check-ins track your progress. Your provider adjusts your treatment as needed. Message them anytime, 24/7." },
    ]}
    medications={[
      {
        name: "Anxiety Treatment",
        desc: "SSRIs & Non-Habit-Forming Options",
        price: "From $49 / Mo",
        popular: true,
        bullets: ["Non-Habit-Forming Medications", "SSRIs & SNRIs Available", "Buspirone For Daily Anxiety", "Provider Check-Ins Included"],
      },
      {
        name: "Depression Treatment",
        desc: "Personalized Antidepressant Protocol",
        price: "From $49 / Mo",
        bullets: ["Sertraline, Escitalopram & More", "Personalized Dosing", "Mood Tracking Included", "Provider Adjusts As Needed"],
      },
      {
        name: "Sleep Treatment",
        desc: "Non-Habit-Forming Sleep Prescriptions",
        price: "From $39 / Mo",
        bullets: ["Prescription Sleep Aids", "Non-Habit-Forming Options Prioritized", "Sleep Hygiene Guidance Included", "Short-Term & Long-Term Options"],
      },
    ]}
    ctaHeadline="Private Care For How You Really Feel"
    ctaSub="A licensed psychiatric provider reviews your intake within 24–48 hours. Everything is private, confidential, and HIPAA-protected."
    disclaimer="Real Care mental health services are intended for mild to moderate anxiety, depression, and sleep concerns. We do not treat severe psychiatric conditions, psychosis, bipolar disorder requiring mood stabilizers, or active suicidal ideation. If you are in crisis, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room. All prescribing decisions are at the sole discretion of your licensed provider."
  />
);

export default MentalHealth;
