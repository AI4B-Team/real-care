import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Menopause = () => (
  <ProductPageTemplate
    pageTitle="Menopause Relief & Hormone Therapy"
    label="Women's Health · Menopause & HRT"
    pill="Bioidentical HRT"
    headline={<>Feel Like<br /><span className="text-red">Yourself Again.</span></>}
    sub="Bioidentical hormone therapy for menopause and perimenopause — prescribed online by OB-GYN specialists. Hot flashes, brain fog, sleep, mood — all addressed."
    trustBullets={["From $79/mo", "OB-GYN Specialists", "Bioidentical Hormones", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How Hormone Therapy Works"
    howItems={[
      { title: "Identify Your Symptoms", desc: "Tell us about hot flashes, brain fog, sleep disruption, mood changes, vaginal dryness, and other perimenopause or menopause symptoms." },
      { title: "OB-GYN Review", desc: "A board-certified OB-GYN or menopause specialist reviews your full health picture, including any prior hormone therapy." },
      { title: "Personalized HRT Protocol", desc: "Bioidentical estrogen, progesterone, or both — dosed and delivered in the format that works best for your body and lifestyle." },
      { title: "Monitor & Adjust", desc: "Hormones change. Your provider monitors your response and adjusts your protocol as you move through different stages of menopause." },
    ]}
    medications={[
      {
        name: "Estrogen Therapy",
        desc: "Cream, patch, or gel",
        price: "From $79/mo",
        popular: true,
        bullets: ["Bioidentical estrogen", "Relieves hot flashes and night sweats", "Improves mood, sleep, and cognition", "Multiple formats available"],
      },
      {
        name: "Combined HRT",
        desc: "Estrogen + Progesterone",
        price: "From $89/mo",
        bullets: ["For women with a uterus", "Protects uterine lining", "Bioidentical progesterone", "Compounded to your exact dose"],
      },
      {
        name: "Vaginal Estrogen",
        desc: "Targeted low-dose therapy",
        price: "From $59/mo",
        bullets: ["Relieves vaginal dryness and discomfort", "Minimal systemic absorption", "Improves sexual comfort and UTI prevention", "Safe for most women"],
      },
    ]}
    ctaHeadline="Menopause Doesn't Have To Feel Like This"
    ctaSub="An OB-GYN specialist reviews your intake within 24 hours. Most women feel relief within 4–6 weeks of starting HRT."
    disclaimer="Hormone therapy is not appropriate for everyone. Contraindications include certain types of breast cancer, blood clots, stroke, and liver disease. Compounded bioidentical hormones are not FDA-approved as finished products. All prescribing decisions are at the sole discretion of your licensed provider. Discuss your individual risk factors with your provider."
  />
);

export default Menopause;
