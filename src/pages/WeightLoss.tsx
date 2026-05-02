import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-glp1.jpg";

const WeightLoss = () => {
  useSEO(SEO_CONFIGS.weightLoss);
  return (
    <ProductPageTemplate
      pageTitle="GLP-1 Weight Loss"
      label="GLP-1 Weight Loss · Most Popular"
      pill="Doctor-Led Plans"
      productImage={productImage}
      productImageAlt="Compounded GLP-1 auto-injector pen for weight loss"
      heroBg="bg-[#C8E6C9]"
      tagline="A personalized weight-loss plan built around you."
      savingsLabel="Save $80 On Your First Order"
      plans={[
        {
          group: "Compounded Semaglutide",
          options: [
            { label: "3-Month Plan", price: "$129", priceSuffix: "first month", afterPrice: "$209/mo after", badge: "Best Value" },
            { label: "Monthly Plan", price: "$149", priceSuffix: "first month", afterPrice: "$229/mo after" },
          ],
        },
        {
          group: "Compounded Tirzepatide",
          options: [
            { label: "Monthly Plan", price: "$249", priceSuffix: "first month", afterPrice: "$329/mo after" },
          ],
        },
      ]}
      headline={
        <>
          Lose Weight.
          <br />
          <span className="text-red">Keep It Off.</span>
        </>
      }
      sub="Doctor-led GLP-1 plans containing the same active ingredients used in leading prescription weight-loss medications — at a fraction of the brand-name cost. No waiting rooms, no insurance required, delivered to your door."
      trustBullets={[
        "From $179/Mo — All-Inclusive",
        "Same Price At Every Dose",
        "Money-Back Guarantee",
        "No Membership Fee",
        "Free Discreet Shipping",
        "HSA / FSA Accepted",
      ]}
      howTitle="Why GLP-1 Works When Diets Don't"
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
          price: "From $179/Mo",
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
      ctaHeadline="Lose Weight Or Your Money Back"
      ctaSub="A licensed provider reviews your intake within 24–48 hours. Follow your prescribed plan for 5 months with no results and we'll refund you. Terms apply."
      disclaimer="The FDA does not review or approve any compounded medications for safety or effectiveness. Compounded medications contain the same active ingredients as their FDA-approved counterparts but are prepared by state-licensed pharmacies and have not been evaluated by the FDA for safety, efficacy, or quality. Available only if prescribed by a licensed provider after an online consultation. Individual results vary. Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners. Real Care is not affiliated with Novo Nordisk or Eli Lilly. Payment does not guarantee prescribing — all clinical decisions are at the sole discretion of your licensed provider. HSA / FSA eligibility varies by plan administrator."
      faqs={[
        {
          q: "What's Included In My Real Care GLP-1 Plan?",
          a: "Your flat monthly price includes an online medical assessment, ongoing access to a U.S.-licensed provider, your prescribed compounded GLP-1 medication if appropriate, free discreet shipping, and unlimited messaging support — with the same price at every dose.",
        },
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
          a: "Yes. There is no membership fee and no long-term contract. You can pause or cancel your plan at any time directly from your patient portal — and our 5-month money-back guarantee has you covered if you follow the program and don't see results.",
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
