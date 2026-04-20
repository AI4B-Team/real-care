import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const EdTreatment = () => (
  <ProductPageTemplate
    pageTitle="ED Treatment — Better Sex"
    label="Men's Health · ED Treatment"
    pill="Works In 15 Minutes"
    headline={<>Better Sex.<br /><span className="text-red">Every Time.</span></>}
    sub="FDA-approved ED treatment prescribed online and shipped to your door. Works in 15 minutes, lasts up to 36 hours. Plain packaging — always."
    trustBullets={["From $2/dose", "Works In 15–30 Min", "Lasts Up To 36 Hours", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How ED Treatment Works"
    howItems={[
      { title: "Complete Your Assessment", desc: "Answer questions about your health history online. Your information is reviewed by a board-certified urologist." },
      { title: "Your Provider Prescribes", desc: "If appropriate, your doctor writes a prescription for the medication that fits your needs and lifestyle." },
      { title: "Ships In Plain Packaging", desc: "Your medication ships from a licensed U.S. pharmacy in discreet packaging with no identifying information on the outside." },
      { title: "Results When You Need Them", desc: "Take as needed. Works in 15–30 minutes. No planning required with daily Tadalafil options." },
    ]}
    medications={[
      {
        name: "Sildenafil (Generic Viagra®)",
        desc: "Fast-acting, works in 30 min, lasts 4–6 hrs",
        price: "From $2/dose",
        popular: true,
        bullets: ["Same active ingredient as Viagra®", "Works in 30–60 minutes", "Effective for 4–6 hours", "Take as needed"],
      },
      {
        name: "Tadalafil (Generic Cialis®)",
        desc: "Longest lasting — up to 36 hours",
        price: "From $2/dose",
        bullets: ["Same active ingredient as Cialis®", "Works in 30–45 minutes", "Effective up to 36 hours", "Daily or as-needed dosing"],
      },
      {
        name: "Fast-Acting Chewables",
        desc: "Dissolves fast — no water needed",
        price: "From $4/dose",
        bullets: ["Chewable format — discreet and portable", "Works in 15–20 minutes", "No water required", "Great for spontaneous moments"],
      },
      {
        name: "Premature Ejaculation",
        desc: "Dapoxetine-based treatment",
        price: "From $3/dose",
        bullets: ["Clinically proven to delay PE", "Take 1–3 hours before activity", "Combined ED/PE options available", "Prescribed by licensed provider"],
      },
    ]}
    ctaHeadline="Better Sex Starts Here"
    ctaSub="A licensed provider reviews your intake within 24 hours. Medication ships the same day you're approved."
    disclaimer="Viagra® is a registered trademark of Pfizer Inc. Cialis® is a registered trademark of Eli Lilly and Company. Real Care is not affiliated with these companies. Compounded and generic medications contain the same active ingredients but are not manufactured by the brand-name companies. Payment does not guarantee prescribing. All clinical decisions are at the sole discretion of your licensed provider."
  />
);

export default EdTreatment;
