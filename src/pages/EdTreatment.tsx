import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-ed.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import trtImg from "@/assets/product-trt.jpg";
import peptideImg from "@/assets/product-peptides.jpg";
import labsImg from "@/assets/product-labs.jpg";

const EdTreatment = () => (
  <ProductPageTemplate
    pageTitle="ED Treatment — Better Sex"
    relatedProducts={[
      { name: "Testosterone Therapy", image: trtImg, bg: "bg-[#E5D5BD]", href: "/testosterone" },
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Peptides & Longevity", image: peptideImg, bg: "bg-[#D6C9E8]", href: "/peptides" },
      { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
    ]}
    label="Men's Health · ED Treatment"
    pill="Works In 15 Minutes"
    productImage={productImage}
    productImageAlt="Generic ED tablets in blister pack"
    heroBg="bg-[#BFD9E8]"
    tagline="Better sex, prescribed online and shipped discreetly."
    savingsLabel="Discreet Shipping On Every Order"
    headline={<>Better Sex.<br /><span className="text-red">Every Time.</span></>}
    sub="Doctor-prescribed ED treatment ordered online and shipped to your door in plain packaging. Works in as little as 15 minutes — and may last up to 36 hours, if appropriate for you."
    trustBullets={["From $2 / Dose", "Works In 15–30 Min", "Lasts Up To 36 Hours", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How ED Treatment Works"
    howItems={[
      { title: "Complete Your Assessment", desc: "Answer questions about your health history online. Your information is reviewed by a licensed provider." },
      { title: "Your Provider Prescribes", desc: "If appropriate, your provider writes a prescription for the medication that fits your needs and lifestyle." },
      { title: "Ships In Plain Packaging", desc: "Your medication ships from a U.S. state-licensed pharmacy in discreet packaging with no identifying information on the outside." },
      { title: "Results When You Need Them", desc: "Take as needed. May begin working in 15–30 minutes. Daily tadalafil options are also available if prescribed." },
    ]}
    medications={[
      {
        name: "Sildenafil (Generic Viagra®)",
        desc: "Fast-Acting · Works In 30 Min · Lasts 4–6 Hrs",
        price: "From $2 / Dose",
        popular: true,
        bullets: ["Same Active Ingredient As Viagra®", "May Begin Working In 30–60 Minutes", "Effective For Up To 4–6 Hours", "Take As Needed"],
      },
      {
        name: "Tadalafil (Generic Cialis®)",
        desc: "Longest-Lasting · Up To 36 Hours",
        price: "From $2 / Dose",
        bullets: ["Same Active Ingredient As Cialis®", "May Begin Working In 30–45 Minutes", "Effective Up To 36 Hours", "Daily Or As-Needed Dosing"],
      },
      {
        name: "Fast-Acting Chewables",
        desc: "Dissolves Fast · No Water Needed",
        price: "From $4 / Dose",
        bullets: ["Chewable Format — Discreet & Portable", "May Begin Working In 15–20 Minutes", "No Water Required", "Great For Spontaneous Moments"],
      },
      {
        name: "Premature Ejaculation",
        desc: "Dapoxetine-Based Treatment",
        price: "From $3 / Dose",
        bullets: ["Clinically Studied To Help Delay PE", "Take 1–3 Hours Before Activity", "Combined ED / PE Options Available", "Prescribed By A Licensed Provider"],
      },
    ]}
    ctaHeadline="Better Sex Starts Here"
    ctaSub="A licensed provider reviews your intake and, if appropriate, your medication ships in plain packaging within 2 business days."
    disclaimer="Viagra® is a registered trademark of Pfizer Inc. Cialis® is a registered trademark of Eli Lilly and Company. Real Care is not affiliated with these companies. Generic medications contain the same active ingredients but are not manufactured by the brand-name companies. Payment does not guarantee prescribing — all clinical decisions are at the sole discretion of your licensed provider."
  />
);

export default EdTreatment;
