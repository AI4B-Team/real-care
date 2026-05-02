import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-hair.jpg";

const HairLoss = () => (
  <ProductPageTemplate
    pageTitle="Hair Loss & Regrowth"
    label="Men & Women · Hair Loss"
    pill="Clinically Studied"
    productImage={productImage}
    productImageAlt="Prescription hair regrowth serum dropper bottle"
    heroBg="bg-[#E8C4A0]"
    tagline="Doctor-led prescription hair-loss care for men and women."
    savingsLabel="Free Shipping On Every Order"
    headline={<>Fuller Hair.<br /><span className="text-red">Starting In 90 Days.</span></>}
    sub="Doctor-led prescription hair-loss care for men and women. Clinically studied ingredients designed to help slow shedding and may support regrowth — delivered monthly if appropriate."
    trustBullets={["From $39 / Mo", "Men & Women", "Clinically Studied Ingredients", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Hair Regrowth Works"
    howItems={[
      { title: "Stops Hair Loss First", desc: "Finasteride (for men, if prescribed) and prescription minoxidil work to block the hormones that drive follicle miniaturization — helping slow further loss." },
      { title: "Stimulates Regrowth", desc: "Minoxidil increases blood flow to hair follicles, helping revive dormant ones and supporting new growth over 3–6 months." },
      { title: "Custom Formulas", desc: "For women, compounded blends are tailored to female hair-loss patterns — different from men's and matched to your specific intake." },
      { title: "Monthly Shipments", desc: "Your prescription ships monthly in discreet packaging. Consistent use is key — many patients see initial results within 90 days." },
    ]}
    medications={[
      {
        name: "Men's Hair Kit",
        desc: "Finasteride + Minoxidil",
        price: "From $39 / Mo",
        popular: true,
        bullets: ["Finasteride — May Help Block DHT", "Minoxidil Foam Or Solution — Supports Regrowth", "Clinically Studied Combination", "Most Patients See Results In 90–180 Days"],
      },
      {
        name: "Women's Hair Kit",
        desc: "Prescription Minoxidil Blends",
        price: "From $39 / Mo",
        bullets: ["Prescription-Strength Minoxidil", "Formulated For Female Hair-Loss Patterns", "Topical Serums & Foams Available", "Used For Postpartum, Hormonal & Genetic Loss"],
      },
      {
        name: "Advanced Formula",
        desc: "Compounded Multi-Ingredient Blend",
        price: "From $69 / Mo",
        bullets: ["Higher-Strength Minoxidil", "Retinoic Acid To Help Enhance Absorption", "Anti-Inflammatory Agents", "Often Recommended For Moderate-To-Severe Loss"],
      },
    ]}
    ctaHeadline="Stop The Shedding. Start Regrowing."
    ctaSub="A licensed dermatology provider reviews your intake within 24–48 hours. Many patients report reduced shedding within 30 days."
    disclaimer="Individual results vary. Hair regrowth requires consistent daily use for a minimum of 3–6 months to evaluate effectiveness. Finasteride is approved for men only. Women who are pregnant or may become pregnant should not use finasteride. Compounded medications are not FDA-approved as finished products. All prescribing decisions are at the sole discretion of your licensed provider."
  />
);

export default HairLoss;
