import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-glp1.jpg";
import edImg from "@/assets/product-ed.jpg";
import trtImg from "@/assets/product-trt.jpg";
import peptideImg from "@/assets/product-peptides.jpg";
import labsImg from "@/assets/product-labs.jpg";

const WeightLoss = () => {
  useSEO(SEO_CONFIGS.weightLoss);
  return (
    <ProductPageTemplate
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
      heroBg="bg-[#C8E6C9]"
      tagline="Personalized weight management plans, built around you and guided by licensed providers."
      savingsLabel="Save $50 On Your First Order"
      plans={[
        {
          group: "Compounded Semaglutide",
          options: [
            { label: "3+ Month Plan", price: "$149", priceSuffix: "/Mo", afterPrice: "Paid Upfront", badge: "Best Value" },
            { label: "Monthly Plan", price: "$129", priceSuffix: "First Month", afterPrice: "$179/Mo After" },
          ],
        },
        {
          group: "Compounded Tirzepatide",
          options: [
            { label: "Monthly Plan", price: "$249", priceSuffix: "First Month", afterPrice: "$299/Mo After" },
          ],
        },
      ]}
      headline={
        <span className="whitespace-nowrap">Lose Weight. Keep It Off.</span>
      }
      sub="Personalized weight management plans prescribed by U.S.-licensed providers when clinically appropriate. Online consultations, ongoing provider support, and discreet home delivery — no insurance required."
      trustBullets={[
        "From $129 First Month — All-Inclusive",
        "Same Price At Every Dose",
        "On-Demand Medical Support",
        "No Membership Fee. No Hidden Fees",
        "Free Discreet Shipping",
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
          price: "From $129/Mo",
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
          price: "From $249/Mo",
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
          price: "From $1,399/Mo",
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
          q: "Do I Need Insurance Or A Referral?",
          a: "No. Real Care is cash-pay only and does not require insurance or a referral. We accept HSA and FSA cards, which can effectively reduce your cost by up to 30–40% depending on your tax bracket.",
        },
        {
          q: "Can I Cancel Anytime?",
          a: "Yes. There is no membership fee and no long-term contract. You can pause or cancel your plan at any time directly from your patient portal. Our 90-Day Results Guarantee also covers you — follow the program for 90 consecutive days and if you don't achieve measurable weight loss, we refund your medication costs in full. See realcare.com/refund-policy for full terms.",
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
