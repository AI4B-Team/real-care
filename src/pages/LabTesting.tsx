import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-labs.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import trtImg from "@/assets/product-trt.jpg";
import menopauseImg from "@/assets/product-menopause.jpg";
import peptideImg from "@/assets/product-peptides.jpg";

const LabTesting = () => (
  <ProductPageTemplate
    pageTitle="Comprehensive Lab Testing"
    customSteps={[
      { num: "01", label: "Order", headline: "Your provider orders your labs online.", body: "Complete a quick intake. Your licensed provider selects the right panel for your goals and orders it to a lab near you — no office visit required.", stat: "Ordered within 24 hours" },
      { num: "02", label: "Test", headline: "Walk in to any Quest or LabCorp near you.", body: "Thousands of locations nationwide. Walk-in appointments available. Blood draw takes under 10 minutes — then you're done.", stat: "6,000+ lab locations" },
      { num: "03", label: "Review", headline: "Your provider reviews and explains your results.", body: "Results in your portal in 3–5 days. Your provider delivers a clear action plan — what's normal, what's not, and what to do next.", stat: "Provider-reviewed · Action plan included" },
    ]}
    relatedProducts={[
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Testosterone Therapy", image: trtImg, bg: "bg-[#E5D5BD]", href: "/testosterone" },
      { name: "Menopause & HRT", image: menopauseImg, bg: "bg-[#F5C8B8]", href: "/menopause" },
      { name: "Peptides & Longevity", image: peptideImg, bg: "bg-[#D6C9E8]", href: "/peptides" },
    ]}
    label="Men & Women · Lab Testing"
    pill="40+ Biomarkers"
    productImage={productImage}
    productImageAlt="At-home lab test collection kit"
    heroBg="bg-[#F0E5BD]"
    tagline="40+ biomarkers reviewed by a licensed provider."
    savingsLabel="No Office Visit Required"
    headline={<>Know Your Numbers.<br /><span className="text-red">Own Your Health.</span></>}
    sub="Comprehensive lab testing ordered by a licensed provider — 40+ biomarkers including testosterone, thyroid, metabolic panel, and more. Provider-reviewed action plan included."
    trustBullets={["From $99 — One Time", "40+ Biomarkers", "Provider-Reviewed Results", "No Membership Fee", "No Office Visit"]}
    howTitle="How Lab Testing Works"
    howItems={[
      { title: "Order Online", desc: "Your licensed provider orders your lab panel based on your health goals and concerns — no office visit required." },
      { title: "Visit A Nearby Lab", desc: "Get your blood drawn at one of thousands of Quest Diagnostics or LabCorp locations near you. Walk-ins available." },
      { title: "Results In 3–5 Days", desc: "Your results are securely delivered to your Real Care portal and reviewed by your provider." },
      { title: "Get Your Action Plan", desc: "Your provider reviews your results and delivers a personalized action plan with clear recommendations for treatment or lifestyle changes." },
    ]}
    medications={[
      {
        name: "Men's Comprehensive Panel",
        desc: "Hormones, Metabolic, Heart Health",
        price: "$149",
        popular: true,
        bullets: ["Total & Free Testosterone", "Estradiol, SHBG, LH, FSH", "Complete Metabolic Panel", "Lipid Panel, Thyroid, CBC"],
      },
      {
        name: "Women's Comprehensive Panel",
        desc: "Hormones, Thyroid, Metabolic",
        price: "$149",
        bullets: ["Estrogen, Progesterone, FSH", "Total & Free Testosterone", "Thyroid Panel (TSH, T3, T4)", "Complete Metabolic + CBC"],
      },
      {
        name: "GLP-1 Readiness Panel",
        desc: "Pre-Treatment Safety Screening",
        price: "$99",
        bullets: ["HbA1c & Fasting Glucose", "Kidney & Liver Function", "Lipid Panel", "Required For Some GLP-1 Prescriptions"],
      },
    ]}
    ctaHeadline="Know What's Actually Going On Inside"
    ctaSub="Order your panel online. Walk in to a nearby lab. Get provider-reviewed results and a clear action plan — no office visit ever needed."
    disclaimer="Lab testing is not a substitute for a comprehensive medical examination. Results are reviewed by a licensed provider for context but do not constitute a complete medical diagnosis. Lab locations and availability vary. Quest Diagnostics and LabCorp are independent companies not affiliated with Real Care."
  />
);

export default LabTesting;
