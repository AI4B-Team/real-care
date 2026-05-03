import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";
import productImage from "@/assets/product-menopause.jpg";
import glp1Img from "@/assets/product-glp1.jpg";
import hairImg from "@/assets/product-hair.jpg";
import skincareImg from "@/assets/product-skincare.jpg";
import labsImg from "@/assets/product-labs.jpg";

const Menopause = () => (
  <ProductPageTemplate
    pageTitle="Menopause Relief & Hormone Therapy"
    alertBanner={{
      type: "info",
      text: "Hormone therapy is not appropriate for everyone. Contraindications include certain types of breast cancer, history of blood clots, stroke, or active liver disease. Your licensed OB-GYN provider will review your complete health history before prescribing. See Important Safety Information.",
    }}
    relatedProducts={[
      { name: "GLP-1 Weight Loss", image: glp1Img, bg: "bg-[#C8E6C9]", href: "/weight-loss" },
      { name: "Hair Loss & Regrowth", image: hairImg, bg: "bg-[#E8C4A0]", href: "/hair-loss" },
      { name: "Prescription Skincare", image: skincareImg, bg: "bg-[#F5D0D5]", href: "/skincare" },
      { name: "Lab Testing", image: labsImg, bg: "bg-[#F0E5BD]", href: "/lab-testing" },
    ]}
    label="Women's Health · Menopause & HRT"
    pill="Bioidentical HRT"
    productImage={productImage}
    productImageAlt="Bioidentical hormone therapy capsules for menopause"
    heroBg="bg-[#F5C8B8]"
    tagline="Personalized hormone therapy for perimenopause and menopause."
    savingsLabel="Free Discreet Shipping"
    headline={<>Feel Like<br /><span className="text-red">Yourself Again.</span></>}
    sub="Doctor-led bioidentical hormone therapy for menopause and perimenopause — prescribed online by licensed OB-GYN providers. Hot flashes, brain fog, sleep, mood — all addressed if appropriate."
    trustBullets={["From $79 / Mo", "Licensed OB-GYN Providers", "Bioidentical Hormones", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Hormone Therapy Works"
    howItems={[
      { title: "Identify Your Symptoms", desc: "Tell us about hot flashes, brain fog, sleep disruption, mood changes, vaginal dryness, and other perimenopause or menopause symptoms." },
      { title: "OB-GYN Review", desc: "A licensed OB-GYN or menopause-trained provider reviews your full health picture, including any prior hormone therapy." },
      { title: "Personalized HRT Protocol", desc: "If prescribed, bioidentical estrogen, progesterone, or both — dosed and delivered in the format that works best for your body and lifestyle." },
      { title: "Monitor & Adjust", desc: "Hormones change. Your provider monitors your response and adjusts your protocol as you move through different stages of menopause." },
    ]}
    medications={[
      {
        name: "Estrogen Therapy",
        desc: "Cream, Patch, Or Gel",
        price: "From $79 / Mo",
        popular: true,
        bullets: ["Bioidentical Estrogen", "May Help Relieve Hot Flashes & Night Sweats", "May Help Improve Mood, Sleep & Cognition", "Multiple Formats Available"],
      },
      {
        name: "Combined HRT",
        desc: "Estrogen + Progesterone",
        price: "From $89 / Mo",
        bullets: ["For Women With A Uterus", "Helps Protect The Uterine Lining", "Bioidentical Progesterone", "Compounded To Your Exact Dose"],
      },
      {
        name: "Vaginal Estrogen",
        desc: "Targeted Low-Dose Therapy",
        price: "From $59 / Mo",
        bullets: ["May Help Relieve Vaginal Dryness & Discomfort", "Minimal Systemic Absorption", "May Improve Sexual Comfort & UTI Prevention", "Safe For Most Women, If Appropriate"],
      },
    ]}
    ctaHeadline="Menopause Doesn't Have To Feel Like This"
    ctaSub="A licensed OB-GYN provider reviews your full health history and symptom profile. If HRT is appropriate for you, your personalized prescription ships free. Results may vary."
    disclaimer="Hormone therapy is not appropriate for everyone. Contraindications include certain types of breast cancer, blood clots, stroke, and liver disease. Compounded bioidentical hormones are not FDA-approved as finished products. All prescribing decisions are at the sole discretion of your licensed provider. Discuss your individual risk factors with your provider."
  />
);

export default Menopause;
