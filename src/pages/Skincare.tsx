import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Skincare = () => (
  <ProductPageTemplate
    pageTitle="Prescription Skincare"
    label="Men & Women · Skincare"
    pill="Prescription Strength"
    headline={<>Clearer Skin.<br /><span className="text-red">Prescription Strength.</span></>}
    sub="Custom prescription skincare formulas prescribed online by board-certified dermatologists. Stronger than anything over the counter — delivered monthly."
    trustBullets={["From $35/mo", "Custom Formulas", "Board-Certified Dermatologists", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Prescription Skincare Works"
    howItems={[
      { title: "Photo Assessment", desc: "Submit photos of your skin concerns during intake. A board-certified dermatologist reviews your skin type, conditions, and goals." },
      { title: "Custom Formula", desc: "Your dermatologist creates a personalized formula combining the right prescription ingredients for your specific skin — not a generic product." },
      { title: "Compounded In A Pharmacy", desc: "Your custom formula is prepared by a licensed compounding pharmacy with prescription-strength active ingredients unavailable OTC." },
      { title: "Adjust & Optimize", desc: "Monthly check-ins allow your provider to adjust your formula as your skin responds and improves over time." },
    ]}
    medications={[
      {
        name: "Anti-Aging Formula",
        desc: "Tretinoin + brightening agents",
        price: "From $35/mo",
        popular: true,
        bullets: ["Prescription tretinoin (Retin-A)", "Reduces fine lines, wrinkles, texture", "Brightens dark spots", "Custom strength for your skin"],
      },
      {
        name: "Acne Formula",
        desc: "Tretinoin + antibiotics",
        price: "From $40/mo",
        bullets: ["Prescription-strength acne treatment", "Tretinoin + clindamycin blend", "Reduces inflammation and breakouts", "Works on face, back, chest"],
      },
      {
        name: "Brightening Formula",
        desc: "Hyperpigmentation + dark spots",
        price: "From $45/mo",
        bullets: ["Hydroquinone or azelaic acid", "Targets hyperpigmentation", "Even skin tone and texture", "Safe for all skin tones"],
      },
    ]}
    ctaHeadline="Your Skin Deserves Prescription Strength"
    ctaSub="A dermatologist reviews your intake and photos within 24 hours. Your custom formula ships within 5 business days."
    disclaimer="Prescription skincare medications require a valid prescription. Tretinoin and hydroquinone are not suitable for everyone. Pregnant women should not use tretinoin or hydroquinone. Compounded medications are not FDA-approved as finished products. All prescribing decisions are at the sole discretion of your licensed provider."
  />
);

export default Skincare;
