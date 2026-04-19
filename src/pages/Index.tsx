import { useFadeUp } from "@/hooks/useFadeUp";
import Announce from "@/components/realcare/Announce";
import Nav from "@/components/realcare/Nav";
import Hero from "@/components/realcare/Hero";
import Goals from "@/components/realcare/Goals";
import Benefits from "@/components/realcare/Benefits";
import HealthCheck from "@/components/realcare/HealthCheck";
import ProductSection from "@/components/realcare/ProductSection";
import HowItWorks from "@/components/realcare/HowItWorks";
import Reviews from "@/components/realcare/Reviews";
import StatsCTA from "@/components/realcare/StatsCTA";
import Couples from "@/components/realcare/Couples";
import Footer from "@/components/realcare/Footer";

import featMen from "@/assets/feat-men.jpg";
import featWomen from "@/assets/feat-women.jpg";
import featWomenWeight from "@/assets/feat-women-weight.jpg";
import goalMenopause from "@/assets/goal-menopause.jpg";
import pWeightM from "@/assets/p-weight-m.jpg";
import pTrt from "@/assets/p-trt.jpg";
import pHairM from "@/assets/p-hair-m.jpg";
import pPept from "@/assets/p-peptides.jpg";
import pSkinM from "@/assets/p-skin-m.jpg";
import pMentalM from "@/assets/p-mental-m.jpg";
import pLabs from "@/assets/p-labs.jpg";
import pSuppsM from "@/assets/p-supps-m.jpg";
import pWeightW from "@/assets/p-weight-w.jpg";
import pHairW from "@/assets/p-hair-w.jpg";
import pSkinW from "@/assets/p-skin-w.jpg";
import pMentalW from "@/assets/p-mental-w.jpg";
import pLibido from "@/assets/p-libido.jpg";
import pBC from "@/assets/p-bc.jpg";
import pMeals from "@/assets/p-meals.jpg";
import pSuppsW from "@/assets/p-supps-w.jpg";

const menProducts = [
  { img: pWeightM, name: "GLP-1 Weight Loss", desc: "Semaglutide & tirzepatide. Same active ingredient as Ozempic® — fraction of the cost.", price: "From $179/mo", pill: "Most Popular" },
  { img: pTrt, name: "Low Testosterone (TRT)", desc: "Lab testing + personalized TRT. More energy, stronger drive, better mood. Results in weeks.", price: "From $99/mo", pill: "Top Rated" },
  { img: pHairM, name: "Hair Loss & Regrowth", desc: "Finasteride + minoxidil — clinically proven to stop shedding and regrow hair monthly.", price: "From $39/mo" },
  { img: pPept, name: "Peptides & Longevity", desc: "BPC-157, Sermorelin, CJC-1295 for recovery, muscle, anti-aging, and peak performance.", price: "From $129/mo", pill: "New" },
  { img: pSkinM, name: "Men's Skincare", desc: "Prescription anti-aging and acne treatment. Custom formula for your skin type.", price: "From $35/mo" },
  { img: pMentalM, name: "Mental Health", desc: "Anxiety, depression, and sleep — online prescriptions from licensed providers.", price: "From $49/mo" },
  { img: pLabs, name: "Comprehensive Lab Testing", desc: "40+ biomarkers — testosterone, thyroid, heart. Doctor-developed action plan included.", price: "From $149", pill: "New" },
  { img: pSuppsM, name: "Supplements & Nutrition", desc: "Doctor-formulated stacks and GLP-1 aligned meal plans shipped monthly.", price: "From $49/mo" },
];

const womenProducts = [
  { img: goalMenopause, name: "Menopause Relief (HRT)", desc: "Bioidentical hormone therapy for hot flashes, night sweats, brain fog, and mood — prescribed online.", price: "From $89/mo", pill: "Most Requested" },
  { img: pHairW, name: "Fuller, Thicker Hair", desc: "Prescription minoxidil blends and serums to stop shedding and restore volume and density.", price: "From $39/mo", pill: "Top Rated" },
  { img: pSkinW, name: "Prescription Skincare", desc: "Custom formulas for acne, anti-aging, dark spots, and texture — prescription strength.", price: "From $35/mo" },
  { img: pMentalW, name: "Mental Health", desc: "Anxiety, depression, burnout, and sleep — treated with empathy by licensed providers.", price: "From $49/mo" },
  { img: pLibido, name: "Sexual Health & Libido", desc: "Low libido treatment, vaginal dryness, and sexual wellness — private and effective.", price: "From $49/mo" },
  { img: pBC, name: "Birth Control", desc: "Pill, patch, and ring — prescribed online, shipped free. No in-person visit required.", price: "From $20/mo" },
  { img: pMeals, name: "Nutrition & Meals", desc: "Chef-prepared, medically aligned meals to complement your GLP-1 or hormone therapy.", price: "From $12/meal", pill: "New" },
  { img: pSuppsW, name: "Women's Supplements", desc: "Collagen, hormone support, GLP-1 companion vitamins — doctor-formulated for women.", price: "From $45/mo" },
];

const Index = () => {
  useFadeUp();
  return (
    <main>
      <Announce />
      <Nav />
      <Hero />
      <Goals />
      <Benefits />
      <HealthCheck />
      <ProductSection
        id="men"
        bg="white"
        label="Men"
        title={<>Built For Men<br />Who Expect More</>}
        sub="Doctor-prescribed care for performance, weight loss, hair, and longevity — all discreet, all online."
        ctaText="See All Men's Treatments →"
        featured={{
          img: featMen,
          pill: "#1 For Men",
          title: <>Better Sex.<br />Every Time.</>,
          desc: "FDA-approved ED treatment prescribed online and shipped to your door in 24 hours. Works in 15 minutes. Lasts up to 36 hours. Plain packaging — always guaranteed.",
          tags: ["Generic Viagra (Sildenafil)", "Generic Cialis (Tadalafil)", "Fast-Acting Chewables", "Premature Ejaculation"],
          price: <>From <strong className="text-warm-800 text-base">$2/dose</strong> — discreet packaging guaranteed</>,
          cta: "Get ED Treatment →",
        }}
        products={menProducts}
      />
      <ProductSection
        id="women"
        bg="warm"
        label="Women"
        title={<>Whole-Body Care<br />Built Around Her</>}
        sub="Menopause relief, GLP-1 weight loss, fuller hair, clearer skin — personalized care for every stage of life."
        ctaText="See All Women's Treatments →"
        featured={{
          img: featWomenWeight,
          pill: "#1 For Women",
          title: <>Lose Weight.<br />Keep It Off.</>,
          desc: "GLP-1 weight loss for women — semaglutide and tirzepatide, the same active ingredients as Ozempic® and Mounjaro®. Doctor-guided, shipped monthly, with a money-back guarantee.",
          tags: ["Semaglutide (Generic Ozempic®)", "Tirzepatide (Generic Mounjaro®)", "Doctor-Guided Plan", "Money-Back Guarantee"],
          price: <>From <strong className="text-warm-800 text-base">$179/mo</strong> — includes doctor consultation</>,
          cta: "Start Weight Loss →",
        }}
        products={womenProducts}
      />
      <HowItWorks />
      <Reviews />
      <StatsCTA />
      <Couples />
      <Footer />
    </main>
  );
};

export default Index;
