import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Peptides = () => (
  <ProductPageTemplate
    pageTitle="Peptides & Longevity"
    label="Men's Health · Peptides"
    pill="Performance & Recovery"
    headline={<>Perform Better.<br /><span className="text-red">Recover Faster.</span></>}
    sub="Doctor-prescribed peptide therapy for muscle recovery, fat loss, anti-aging, and peak performance. The cutting edge of longevity medicine — now accessible online."
    trustBullets={["From $129/mo", "Board-Certified Providers", "Licensed U.S. Pharmacies", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Peptide Therapy Works"
    howItems={[
      { title: "Performance Assessment", desc: "Tell us your goals — recovery, muscle building, fat loss, anti-aging, or energy. Your provider builds a protocol around your specific objectives." },
      { title: "Provider Prescribes", desc: "A licensed provider reviews your health history and goals, then prescribes the appropriate peptide or peptide stack." },
      { title: "Compounded In A Licensed Pharmacy", desc: "Your peptides are prepared by a state-licensed U.S. compounding pharmacy and shipped with proper cold-chain packaging." },
      { title: "Track Your Results", desc: "Monthly check-ins review your progress. Your provider adjusts your protocol as you hit goals and progress through your plan." },
    ]}
    medications={[
      {
        name: "BPC-157",
        desc: "Recovery & healing",
        price: "From $129/mo",
        popular: true,
        bullets: ["Accelerates muscle and joint recovery", "Reduces inflammation", "Supports gut health", "Popular with athletes and biohackers"],
      },
      {
        name: "Sermorelin",
        desc: "Growth hormone stimulator",
        price: "From $149/mo",
        bullets: ["Stimulates natural GH release", "Improves body composition", "Better sleep quality", "Anti-aging benefits"],
      },
      {
        name: "CJC-1295 / Ipamorelin",
        desc: "Stacked GH peptide protocol",
        price: "From $199/mo",
        bullets: ["Powerful GH-releasing combination", "Lean muscle preservation", "Fat loss acceleration", "Improved energy and recovery"],
      },
    ]}
    ctaHeadline="Peak Performance Starts Here"
    ctaSub="A licensed provider reviews your intake within 24 hours. Peptide therapy ships in cold-chain packaging directly to your door."
    disclaimer="Peptide therapy is a developing field and many peptides are not FDA-approved for general use. Compounded peptides are prepared by state-licensed pharmacies but are not FDA-approved as finished products. Long-term safety data is limited for many peptides. All prescribing decisions are at the sole discretion of your licensed provider. Individual results vary significantly."
  />
);

export default Peptides;
