import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-peptides.jpg";
import trtImg from "@/assets/product-trt.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import labsImg from "@/assets/product-labs.jpg";
import edImg from "@/assets/product-ed.jpg";

const Peptides = () => (
  <ProductPageTemplate
    pageTitle="Peptides & Longevity"
    alertBanner={{
      type: "info",
      text: "Peptide therapies are investigational. Many peptides have not been evaluated in controlled human clinical trials. Long-term safety data is limited. Discuss risks and unknowns with your licensed provider before starting.",
    }}
    relatedProducts={[
      { name: "Testosterone Therapy", image: trtImg, bg: "bg-[#E5D5BD]", href: "/testosterone" },
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
      { name: "ED Treatment", image: edImg, bg: "bg-[#BFD9E8]", href: "/ed-treatment" },
    ]}
    label="Men & Women · Peptides"
    pill="Performance & Recovery"
    productImage={productImage}
    productImageAlt="Compounded peptide therapy injection vial"
    heroBg="bg-[#D6C9E8]"
    tagline="Doctor-prescribed peptide therapy for performance and recovery."
    savingsLabel="Compounded In The U.S.A."
    headline={<>Perform Better.<br /><span className="text-red">Recover Faster.</span></>}
    sub="Doctor-prescribed peptide therapy for muscle recovery, fat loss, anti-aging, and peak performance. Cutting-edge longevity care — accessible online if appropriate for you."
    trustBullets={["From $129 / Mo", "Board-Certified Providers", "U.S. State-Licensed Pharmacies", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Peptide Therapy Works"
    howItems={[
      { title: "Performance Assessment", desc: "Tell us your goals — recovery, muscle building, fat loss, anti-aging, or energy. Your provider builds a protocol around your specific objectives." },
      { title: "Provider Prescribes", desc: "A licensed provider reviews your health history and goals, then prescribes the appropriate peptide or peptide stack if clinically appropriate." },
      { title: "Compounded In A Licensed Pharmacy", desc: "Your peptides are prepared by a U.S. state-licensed compounding pharmacy and shipped with proper cold-chain packaging." },
      { title: "Track Your Results", desc: "Monthly check-ins review your progress. Your provider adjusts your protocol as you progress through your plan." },
    ]}
    medications={[
      {
        name: "BPC-157",
        desc: "Recovery & Healing",
        price: "From $129 / Mo",
        popular: true,
        bullets: ["May Support Muscle And Joint Recovery", "May Help Reduce Inflammation", "Often Used For Gut Health Support", "Popular With Athletes And Biohackers"],
      },
      {
        name: "Sermorelin",
        desc: "Growth Hormone Stimulator",
        price: "From $149 / Mo",
        bullets: ["May Stimulate Natural GH Release", "May Improve Body Composition", "Often Reported Better Sleep Quality", "Anti-Aging Support"],
      },
      {
        name: "CJC-1295 / Ipamorelin",
        desc: "Stacked GH Peptide Protocol",
        price: "From $199 / Mo",
        bullets: ["Powerful GH-Releasing Combination", "May Support Lean Muscle Preservation", "May Support Fat Loss", "Often Reported Improved Energy & Recovery"],
      },
    ]}
    ctaHeadline="Peak Performance Starts Here"
    ctaSub="A licensed provider reviews your goals and health history and builds a peptide protocol if clinically appropriate. Shipped in cold-chain packaging directly to your door."
    disclaimer="Peptide therapy is a developing field and many peptides are not FDA-approved for general use. Compounded peptides are prepared by state-licensed pharmacies but are not FDA-approved as finished products. Long-term safety data is limited for many peptides. All prescribing decisions are at the sole discretion of your licensed provider. Individual results vary significantly."
  />
);

export default Peptides;
