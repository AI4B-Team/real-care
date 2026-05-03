import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-skincare.jpg";
import hairImg from "@/assets/product-hair.jpg";
import menopauseImg from "@/assets/product-menopause.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import labsImg from "@/assets/product-labs.jpg";

const Skincare = () => (
  <ProductPageTemplate
    pageTitle="Prescription Skincare"
    relatedProducts={[
      { name: "Hair Loss & Regrowth", image: hairImg, bg: "bg-[#E8C4A0]", href: "/hair-loss" },
      { name: "Menopause & HRT", image: menopauseImg, bg: "bg-[#F5C8B8]", href: "/menopause" },
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
    ]}
    label="Men & Women · Skincare"
    pill="Prescription Strength"
    productImage={productImage}
    productImageAlt="Custom prescription skincare serum dropper bottle"
    heroBg="bg-[#F5D0D5]"
    tagline="Custom prescription skincare formulas, delivered monthly."
    savingsLabel="Free Shipping On Every Order"
    headline={<>Clearer Skin.<br /><span className="text-red">Prescription Strength.</span></>}
    sub="Custom prescription skincare formulas prescribed online by licensed dermatology providers. Stronger than anything over the counter — delivered monthly if appropriate for you."
    trustBullets={["From $35 / Mo", "Custom Formulas", "Board-Certified Providers", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Prescription Skincare Works"
    howItems={[
      { title: "Photo Assessment", desc: "Submit photos of your skin concerns during intake. A licensed provider reviews your skin type, conditions, and goals." },
      { title: "Custom Formula", desc: "Your provider builds a personalized formula combining the right prescription ingredients for your specific skin — not a generic product." },
      { title: "Compounded In A Pharmacy", desc: "Your custom formula is prepared by a state-licensed compounding pharmacy with prescription-strength active ingredients unavailable OTC." },
      { title: "Adjust & Optimize", desc: "Monthly check-ins allow your provider to adjust your formula as your skin responds and improves over time." },
    ]}
    medications={[
      {
        name: "Anti-Aging Formula",
        desc: "Tretinoin + Brightening Agents",
        price: "From $35 / Mo",
        popular: true,
        bullets: ["Prescription Tretinoin (Retin-A)", "May Help Reduce Fine Lines, Wrinkles & Texture", "May Help Brighten Dark Spots", "Custom Strength For Your Skin"],
      },
      {
        name: "Acne Formula",
        desc: "Tretinoin + Antibiotics",
        price: "From $40 / Mo",
        bullets: ["Prescription-Strength Acne Treatment", "Tretinoin + Clindamycin Blend", "May Help Reduce Inflammation & Breakouts", "Works On Face, Back & Chest"],
      },
      {
        name: "Brightening Formula",
        desc: "Hyperpigmentation + Dark Spots",
        price: "From $45 / Mo",
        bullets: ["Hydroquinone Or Azelaic Acid", "Targets Hyperpigmentation", "Supports More Even Skin Tone & Texture", "Safe For Most Skin Tones"],
      },
    ]}
    ctaHeadline="Your Skin Deserves Prescription Strength"
    ctaSub="Submit your skin photos and goals. A licensed dermatology provider builds a prescription formula specific to your skin type and ships it in 5 business days."
    disclaimer="Prescription skincare medications require a valid prescription. Tretinoin and hydroquinone are not suitable for everyone. Pregnant women should not use tretinoin or hydroquinone. Compounded medications are not FDA-approved as finished products. All prescribing decisions are at the sole discretion of your licensed provider."
  />
);

export default Skincare;
