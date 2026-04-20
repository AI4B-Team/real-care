import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const HairLoss = () => (
  <ProductPageTemplate
    pageTitle="Hair Loss & Regrowth"
    label="Men & Women · Hair Loss"
    pill="Clinically Proven"
    headline={<>Fuller Hair.<br /><span className="text-red">Starting In 90 Days.</span></>}
    sub="Prescription-strength hair loss treatment for men and women. Clinically proven to stop shedding and regrow hair — delivered monthly."
    trustBullets={["From $39/mo", "Men & Women", "Clinically Proven Ingredients", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Hair Regrowth Works"
    howItems={[
      { title: "Stops Hair Loss First", desc: "Finasteride (men) and prescription minoxidil block the hormones that cause follicle miniaturization — halting further loss." },
      { title: "Stimulates Regrowth", desc: "Minoxidil increases blood flow to hair follicles, reviving dormant ones and stimulating new growth over 3–6 months." },
      { title: "Custom Formulas", desc: "For women, we offer compounded blends tailored to female hair loss patterns — different from men's and more effective." },
      { title: "Monthly Shipments", desc: "Your prescription ships monthly in discreet packaging. Consistent use is key — most patients see results within 90 days." },
    ]}
    medications={[
      {
        name: "Men's Hair Kit",
        desc: "Finasteride + Minoxidil",
        price: "From $39/mo",
        popular: true,
        bullets: ["Finasteride — blocks DHT (root cause of male hair loss)", "Minoxidil foam or solution — stimulates regrowth", "Clinically proven combination", "Results in 90–180 days"],
      },
      {
        name: "Women's Hair Kit",
        desc: "Prescription minoxidil blends",
        price: "From $39/mo",
        bullets: ["Prescription minoxidil strength", "Formulated for female hair loss patterns", "Topical serums and foams available", "Safe for postpartum, hormonal, and genetic loss"],
      },
      {
        name: "Advanced Formula",
        desc: "Compounded multi-ingredient blend",
        price: "From $69/mo",
        bullets: ["Higher-strength minoxidil", "Retinoic acid to enhance absorption", "Anti-inflammatory agents", "Recommended for moderate-to-severe loss"],
      },
    ]}
    ctaHeadline="Stop the Shedding. Start Regrowing."
    ctaSub="A licensed dermatologist reviews your intake within 24 hours. Most patients see reduced shedding within 30 days."
    disclaimer="Individual results vary. Hair regrowth requires consistent daily use for a minimum of 3–6 months to evaluate effectiveness. Finasteride is approved for men only. Women who are pregnant or may become pregnant should not use finasteride. Compounded medications are not FDA-approved as finished products."
  />
);

export default HairLoss;
