import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-trt.jpg";
import edImg from "@/assets/product-ed.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import peptideImg from "@/assets/product-peptides.jpg";
import labsImg from "@/assets/product-labs.jpg";

const Testosterone = () => (
  <ProductPageTemplate
    pageTitle="Testosterone Therapy (TRT)"
    alertBanner={{
      type: "warning",
      text: "Testosterone therapy requires a live video consultation with a licensed provider. Asynchronous (questionnaire-only) consultation is not available for this treatment.",
    }}
    relatedProducts={[
      { name: "ED Treatment", image: edImg, bg: "bg-[#BFD9E8]", href: "/ed-treatment" },
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Peptides & Longevity", image: peptideImg, bg: "bg-[#D6C9E8]", href: "/peptides" },
      { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
    ]}
    label="Men's Health · Testosterone"
    pill="Lab Testing Included"
    productImage={productImage}
    productImageAlt="Testosterone vial and syringe for hormone therapy"
    heroBg="bg-[#E5D5BD]"
    tagline="Lab testing, provider consult, and medication — one flat price."
    savingsLabel="Lab Testing Included"
    headline={<>More Energy.<br /><span className="text-red">Stronger Drive.</span></>}
    sub="Doctor-led testosterone replacement therapy prescribed online. Lab testing, provider consultation, and monthly medication — all included in one flat price."
    trustBullets={["From $99 / Mo — All-Inclusive", "Lab Testing Included", "Board-Certified Providers", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How TRT Works"
    howItems={[
      { title: "Lab Testing First", desc: "We order a comprehensive hormone panel to measure your testosterone levels and check for contraindications before any prescription is written." },
      { title: "Provider Review", desc: "A licensed provider reviews your labs and health history to determine whether TRT is clinically appropriate for you." },
      { title: "Personalized Protocol", desc: "If prescribed, your provider builds a dosing protocol tailored to your levels, symptoms, and goals — not a one-size-fits-all approach." },
      { title: "Ongoing Monitoring", desc: "Regular check-ins and follow-up labs help keep your levels optimized and let your provider adjust your treatment as needed." },
    ]}
    medications={[
      {
        name: "Testosterone Cypionate",
        desc: "Weekly Injection · Most Common TRT Protocol",
        price: "From $99 / Mo",
        popular: true,
        bullets: ["Most Common Delivery Method", "Simple Weekly Self-Injection", "Stable Hormone Levels", "Lab Testing + Provider Included"],
      },
      {
        name: "Testosterone Cream / Gel",
        desc: "Daily Topical · No Needles Required",
        price: "From $119 / Mo",
        bullets: ["Daily Topical Application", "No Injections Required", "Steady Daily Absorption", "Lab Testing + Provider Included"],
      },
    ]}
    ctaHeadline="Reclaim Your Energy & Drive"
    ctaSub="Low T is more common than you think. Your provider orders labs and determines if TRT is clinically appropriate for you — all online."
    disclaimer="Lab testing requirements vary by state. Testosterone therapy is not appropriate for everyone — contraindications include certain prostate conditions, blood disorders, and fertility goals. All prescribing decisions are at the sole discretion of your licensed provider. Payment does not guarantee prescribing of medication."
  />
);

export default Testosterone;
