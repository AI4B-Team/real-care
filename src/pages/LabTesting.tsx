import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const LabTesting = () => (
  <ProductPageTemplate
    pageTitle="Comprehensive Lab Testing"
    label="Men & Women · Lab Testing"
    pill="40+ Biomarkers"
    headline={<>Know Your Numbers.<br /><span className="text-red">Own Your Health.</span></>}
    sub="Comprehensive lab testing ordered by a licensed physician — 40+ biomarkers including testosterone, thyroid, metabolic panel, and more. Doctor-reviewed action plan included."
    trustBullets={["From $99 — One Time", "40+ Biomarkers", "Doctor-Reviewed Results", "No Membership Fee", "No Office Visit"]}
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
        desc: "Hormones, metabolic, heart health",
        price: "$149",
        popular: true,
        bullets: ["Total & free testosterone", "Estradiol, SHBG, LH, FSH", "Complete metabolic panel", "Lipid panel, thyroid, CBC"],
      },
      {
        name: "Women's Comprehensive Panel",
        desc: "Hormones, thyroid, metabolic",
        price: "$149",
        bullets: ["Estrogen, progesterone, FSH", "Testosterone (free & total)", "Thyroid panel (TSH, T3, T4)", "Complete metabolic + CBC"],
      },
      {
        name: "GLP-1 Readiness Panel",
        desc: "Pre-treatment safety screening",
        price: "$99",
        bullets: ["HbA1c and fasting glucose", "Kidney and liver function", "Lipid panel", "Required for some GLP-1 prescriptions"],
      },
    ]}
    ctaHeadline="Know What's Actually Going On Inside"
    ctaSub="Lab testing ordered within 24 hours of your assessment. Results reviewed by your provider with a clear action plan."
    disclaimer="Lab testing is not a substitute for a comprehensive medical examination. Results are reviewed by a licensed provider for context but do not constitute a complete medical diagnosis. Lab locations and availability vary. Quest Diagnostics and LabCorp are independent companies not affiliated with Real Care."
  />
);

export default LabTesting;
