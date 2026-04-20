import ProductPageTemplate from "@/components/realcare/ProductPageTemplate";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const Testosterone = () => (
  <ProductPageTemplate
    pageTitle="Testosterone Therapy (TRT)"
    label="Men's Health · Testosterone"
    pill="Lab Testing Included"
    headline={<>More Energy.<br /><span className="text-red">Stronger Drive.</span></>}
    sub="Personalized testosterone replacement therapy prescribed online. Lab testing, doctor consultation, and monthly medication — all included in one price."
    trustBullets={["From $99/mo — All-Inclusive", "Lab Testing Included", "Board-Certified Providers", "No Membership Fee", "Free Discreet Shipping"]}
    howTitle="How TRT Works"
    howItems={[
      { title: "Lab Testing First", desc: "We order a comprehensive hormone panel to measure your testosterone levels and check for contraindications before any prescription is written." },
      { title: "Provider Review", desc: "A board-certified endocrinologist or urologist reviews your labs and health history to determine if TRT is appropriate." },
      { title: "Personalized Protocol", desc: "Your provider creates a dosage protocol tailored to your levels, symptoms, and goals — not a one-size-fits-all approach." },
      { title: "Ongoing Monitoring", desc: "Regular check-ins and follow-up labs ensure your levels stay optimized and your treatment is adjusted as needed." },
    ]}
    medications={[
      {
        name: "Testosterone Cypionate",
        desc: "Weekly injection — most common TRT protocol",
        price: "From $99/mo",
        popular: true,
        bullets: ["Most effective delivery method", "Weekly self-injection (simple)", "Stable hormone levels", "Lab testing + provider included"],
      },
      {
        name: "Testosterone Cream/Gel",
        desc: "Daily topical — no needles required",
        price: "From $119/mo",
        bullets: ["Daily topical application", "No injections required", "Steady daily absorption", "Lab testing + provider included"],
      },
    ]}
    ctaHeadline="Reclaim Your Energy & Drive"
    ctaSub="Low T is more common than you think — and more treatable than ever. Take your assessment and get your labs ordered within 48 hours."
    disclaimer="Lab testing requirements vary by state. Testosterone therapy is not appropriate for everyone. Contraindications include prostate cancer, certain blood conditions, and fertility goals. All prescribing decisions are at the sole discretion of your licensed provider. Payment does not guarantee prescribing of medication."
  />
);

export default Testosterone;
