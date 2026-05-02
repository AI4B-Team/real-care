import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-labs.jpg";

const LabTesting = () => (
  <ProductPageTemplate
    pageTitle="Comprehensive Lab Testing"
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
    ctaSub="Lab testing is ordered within 24–48 hours of your assessment. Results are reviewed by your licensed provider with a clear action plan."
    disclaimer="Lab testing is not a substitute for a comprehensive medical examination. Results are reviewed by a licensed provider for context but do not constitute a complete medical diagnosis. Lab locations and availability vary. Quest Diagnostics and LabCorp are independent companies not affiliated with Real Care."
  />
);

export default LabTesting;
