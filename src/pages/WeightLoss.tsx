import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-glp1.jpg";
import galleryInjection from "@/assets/format-injection.jpg";
import galleryWomen from "@/assets/feat-women-weight.jpg";
import galleryGoal from "@/assets/goal-weight.jpg";
import edImg from "@/assets/product-ed.jpg";
import trtImg from "@/assets/product-trt.jpg";
import peptideImg from "@/assets/product-peptides.jpg";
import labsImg from "@/assets/product-labs.jpg";

const WeightLoss = () => {
  useSEO(SEO_CONFIGS.weightLoss);
  return (
    <ProductPageTemplate
      showCompetitorComparison
      showGuarantee
      pageTitle="GLP-1 Weight Loss"
      relatedProducts={[
        { name: "Testosterone Therapy", image: trtImg, bg: "bg-[#E5D5BD]", href: "/testosterone" },
        { name: "ED Treatment", image: edImg, bg: "bg-[#BFD9E8]", href: "/ed-treatment" },
        { name: "Peptides & Longevity", image: peptideImg, bg: "bg-[#D6C9E8]", href: "/peptides" },
        { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
      ]}
      label="GLP-1 Weight Loss · Most Popular"
      pill="Doctor-Led Plans"
      productImage={productImage}
      productImageAlt="Compounded GLP-1 auto-injector pen for weight loss"
      galleryImages={[galleryInjection, galleryWomen, galleryGoal]}
      heroBg="bg-[#C8E6C9]"
      tagline="Personalized weight management plans, built around you and guided by licensed providers."
      savingsLabel="First Shipment $120 Off"
      plans={[
        {
          group: "Compounded Semaglutide",
          options: [
            { label: "12-Month Plan", price: "$174", priceSuffix: "/Mo", afterPrice: "$2,088/yr · Save $1,370 vs Monthly", badge: "Best Deal" },
            { label: "6-Month Plan", price: "$191", priceSuffix: "/Mo", afterPrice: "$1,146/6mo · Save $526 vs Monthly", badge: "6 Months" },
            { label: "3-Month Plan", price: "$209", priceSuffix: "/Mo", afterPrice: "$627/quarter · Save $149 vs Monthly", badge: "Most Popular" },
            { label: "Monthly Plan", price: "$179", priceSuffix: "First Month", afterPrice: "$299/Mo After — Save $120 Today" },
          ],
        },
        {
          group: "Compounded Tirzepatide",
          options: [
            { label: "12-Month Plan", price: "$263", priceSuffix: "/Mo", afterPrice: "$3,156/yr · Save $1,632 vs Monthly", badge: "Best Deal" },
            { label: "6-Month Plan", price: "$299", priceSuffix: "/Mo", afterPrice: "$1,794/6mo · Save $600 vs Monthly", badge: "6 Months" },
            { label: "3-Month Plan", price: "$316", priceSuffix: "/Mo", afterPrice: "$948/quarter · Save $249 vs Monthly", badge: "Most Popular" },
            { label: "Monthly Plan", price: "$279", priceSuffix: "First Month", afterPrice: "$399/Mo After — Save $120 Today" },
          ],
        },
      ]}
      headline={
        <span className="whitespace-nowrap">Lose Weight. Keep It Off.</span>
      }
      sub="Personalized weight management plans prescribed by U.S.-licensed providers when clinically appropriate. Online consultations, ongoing provider support, and discreet home delivery — no insurance required."
      trustBullets={[
        "From $179 First Month — All-Inclusive",
        "Same Price At Every Dose",
        "UNLIMITED On-Demand Medical Support",
        "No Membership Fee. No Hidden Fees",
        "FREE Discreet Shipping",
        "HSA / FSA Accepted",
      ]}
      howTitle="The Science Behind GLP-1"
      howItems={[
        {
          title: "Reduces Appetite",
          desc: "GLP-1 medications mimic a natural hormone that signals fullness to your brain. Less hunger means fewer calories — without willpower battles.",
        },
        {
          title: "Slows Digestion",
          desc: "Food moves more slowly through your stomach, keeping you satisfied longer. No more snacking between meals or energy crashes.",
        },
        {
          title: "Regulates Blood Sugar",
          desc: "GLP-1 medications may help stabilize blood sugar levels, reducing the energy crashes and cravings that drive overeating.",
        },
      ]}
      medications={[
        {
          name: "Compounded Semaglutide",
          desc: "Once-Weekly Injection · Includes B12 For Energy Support",
          price: "From $179 First Month",
          popular: true,
          bullets: [
            "May Reduce Appetite And Cravings",
            "Once-Weekly Subcutaneous Injection",
            "Gradual Provider-Guided Dose Escalation",
            "B12 Included To Support Energy Levels",
          ],
        },
        {
          name: "Compounded Tirzepatide",
          desc: "Once-Weekly Injection · Dual GLP-1 / GIP Action",
          price: "From $279 First Month",
          bullets: [
            "Dual GLP-1 / GIP Receptor Action",
            "May Produce Greater Average Weight Loss",
            "Once-Weekly Subcutaneous Injection",
            "Higher Average Results In Clinical Trials",
          ],
        },
        {
          name: "Brand-Name Options",
          desc: "FDA-Approved · Available If Prescribed",
          price: "From $1,028/Mo",
          bullets: [
            "Ozempic®, Wegovy®, Zepbound®, Mounjaro®",
            "FDA-Approved Branded Medications",
            "Cash-Pay Retail — No Insurance Required",
            "Prescribed Only If Clinically Appropriate",
          ],
        },
      ]}
      ctaHeadline="90-Day Results Guarantee — Or Your Medication Costs Back"
      ctaSub={`Take your prescribed medication as directed, complete your monthly provider check-ins, and follow the recommended lifestyle guidance for 90 consecutive days. If your licensed provider determines you have not achieved measurable weight loss, we will refund your medication costs in full. Results may vary. Individual response to GLP-1 therapy differs based on health history, adherence, and lifestyle. See full guarantee terms at <a href="/refund-policy" class="underline hover:text-white">realcare.com/refund-policy</a>.`}
      disclaimer="The FDA does not review or approve any compounded medications for safety or effectiveness. Compounded medications contain the same active ingredients as their FDA-approved counterparts but are prepared by state-licensed pharmacies and have not been evaluated by the FDA for safety, efficacy, or quality. Available only if prescribed by a licensed provider after an online consultation. Individual results vary. Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners. Real Care is not affiliated with Novo Nordisk or Eli Lilly. Payment does not guarantee prescribing — all clinical decisions are at the sole discretion of your licensed provider. HSA / FSA eligibility varies by plan administrator."
      faqs={[
        {
          q: "Is Compounded Semaglutide The Same As Ozempic Or Wegovy?",
          a: "Compounded semaglutide contains the same active ingredient (semaglutide) used in Ozempic® and Wegovy®. However, compounded medications are not FDA-approved as finished products and are prepared by state-licensed compounding pharmacies. Brand-name medications are also available if prescribed by your provider.",
        },
        {
          q: "How Soon Will I See Weight-Loss Results?",
          a: "Most patients begin to notice reduced appetite within the first 1–2 weeks. Meaningful weight changes typically appear over 8–12 weeks and continue throughout your dose escalation. Individual results vary.",
        },
        {
          q: "What Are The Common Side Effects?",
          a: "The most commonly reported side effects of GLP-1 medications are mild-to-moderate nausea, fatigue, and digestive changes — usually most noticeable during dose increases. Your provider will guide you through gradual escalation and is available to adjust your plan at any time. Review the full Important Safety Information before starting treatment.",
        },
        {
          q: "Where Are The Compounded Medications Made?",
          a: "All compounded GLP-1 medications dispensed through Real Care are prepared by state-licensed compounding pharmacies based in the United States.",
        },
        {
          q: "Will My Price Change As My Dose Increases?",
          a: "No. Real Care's 'Same Price At Every Dose' policy keeps your monthly cost flat as your provider adjusts your dosage throughout your program (excluding new-member intro offers and limited-time plans).",
        },
      ]}
    />
  );
};

export default WeightLoss;
