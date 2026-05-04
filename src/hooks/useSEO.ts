/**
 * useSEO — Sets page title, meta description, and OG tags per page
 * Import and call in any page component
 */

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const useSEO = ({ title, description, canonical, ogImage, noIndex }: SEOProps): void => {
  useEffect(() => {
    // Title
    document.title = `${title} | Real Care`;

    // Meta description
    setMeta("name", "description", description);

    // OG tags
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    if (ogImage) setMeta("property", "og:image", ogImage);
    if (canonical) setMeta("property", "og:url", canonical);

    // Twitter
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    // No-index for account pages
    if (noIndex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      setMeta("name", "robots", "index, follow");
    }
  }, [title, description, canonical, ogImage, noIndex]);
};

const setMeta = (attr: "name" | "property", value: string, content: string): void => {
  let el = document.querySelector(`meta[${attr}="${value}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, value);
    document.head.appendChild(el);
  }
  el.content = content;
};

// Pre-defined SEO configs for all product pages
export const SEO_CONFIGS = {
  home: {
    title: "Look Better. Feel Better. Perform Better",
    description: "Doctor-prescribed GLP-1 weight loss, ED, testosterone, menopause, and more. 100% online. No membership fees. Free discreet shipping. Licensed in all 50 states.",
    canonical: "https://realcare.com/",
  },
  weightLoss: {
    title: "GLP-1 Weight Loss — Semaglutide & Tirzepatide",
    description: "Doctor-prescribed compounded semaglutide and tirzepatide from $179 first month ($299/mo after). Same active ingredient as Ozempic and Wegovy — at a fraction of the cost. No membership fee.",
    canonical: "https://realcare.com/weight-loss",
  },
  edTreatment: {
    title: "ED Treatment — Generic Viagra, Cialis & Chewables",
    description: "Prescription ED treatment from $2/dose. Sildenafil, Tadalafil, and fast-acting chewables prescribed online and shipped discreetly.",
    canonical: "https://realcare.com/ed-treatment",
  },
  testosterone: {
    title: "Testosterone Replacement Therapy (TRT)",
    description: "Personalized TRT prescribed online. Lab testing, doctor consultation, and monthly testosterone included from $99/mo. More energy, stronger drive, better mood.",
    canonical: "https://realcare.com/testosterone",
  },
  hairLoss: {
    title: "Hair Loss Treatment for Men & Women",
    description: "Prescription finasteride and minoxidil for men and women from $39/mo. Clinically proven to stop shedding and regrow hair. Doctor-prescribed, delivered monthly.",
    canonical: "https://realcare.com/hair-loss",
  },
  skincare: {
    title: "Prescription Skincare — Custom Tretinoin Formulas",
    description: "Custom prescription skincare formulas from $35/mo. Board-certified dermatologist creates your personalized anti-aging, acne, or brightening formula.",
    canonical: "https://realcare.com/skincare",
  },
  mentalHealth: {
    title: "Online Mental Health Prescriptions",
    description: "Online psychiatric prescriptions for anxiety, depression, and sleep from $39/mo. Private, judgment-free care from licensed providers. HIPAA-compliant messaging.",
    canonical: "https://realcare.com/mental-health",
  },
  menopause: {
    title: "Menopause Relief & Hormone Therapy (HRT)",
    description: "Bioidentical hormone therapy for menopause from $89/mo. Hot flashes, brain fog, sleep, and mood — all addressed online by OB-GYN specialists.",
    canonical: "https://realcare.com/menopause",
  },
  peptides: {
    title: "Peptide Therapy — BPC-157, Sermorelin, CJC-1295",
    description: "Doctor-prescribed peptide therapy for recovery, muscle, anti-aging, and peak performance from $129/mo. Compounded by licensed U.S. pharmacies.",
    canonical: "https://realcare.com/peptides",
  },
  labTesting: {
    title: "Comprehensive Lab Testing — 40+ Biomarkers",
    description: "Physician-ordered lab testing from $149. 40+ biomarkers including testosterone, thyroid, and metabolic panel. Doctor-reviewed action plan included.",
    canonical: "https://realcare.com/lab-testing",
  },
  pricing: {
    title: "Pricing — One Price, Everything Included",
    description: "Real Care pricing starts from $179 first month. No membership fees. No hidden charges. Consultation, medication, and free shipping all included in one plan price.",
    canonical: "https://realcare.com/pricing",
  },
  men: {
    title: "Men's Health — Weight Loss, ED, TRT & More",
    description: "Doctor-prescribed men's health treatments online. GLP-1 weight loss, ED, testosterone, hair loss, and more. No membership fees, no waiting rooms.",
    canonical: "https://realcare.com/men",
  },
  women: {
    title: "Women's Health — Menopause, Weight Loss & More",
    description: "Doctor-prescribed women's health treatments online. GLP-1 weight loss, menopause HRT, skincare, hair regrowth, and more. No membership fees, no waiting rooms.",
    canonical: "https://realcare.com/women",
  },
  blog: {
    title: "Real Health Blog — Evidence-Based Health",
    description: "Evidence-based health guides written by board-certified physicians. No hype, no fluff. GLP-1 weight loss, testosterone, menopause, skincare, and more.",
    canonical: "https://realcare.com/blog",
  },
  ourDoctors: {
    title: "Our Doctors — Board-Certified U.S. Providers",
    description: "Every Real Care prescription is reviewed by a board-certified U.S. physician. 300+ licensed providers, all 50 states, 24/7 availability.",
    canonical: "https://realcare.com/our-doctors",
  },
  howItWorks: {
    title: "How It Works — From Quiz to Door in Days",
    description: "Real Care telehealth in 3 steps. Complete your health assessment, meet your doctor, receive your prescription. Most first orders arrive in 7–10 business days.",
    canonical: "https://realcare.com/how-it-works",
  },
  healthCheck: {
    title: "Free Health Check — Find Your Treatment",
    description: "Take your free 5-minute health assessment. A board-certified provider reviews your intake within 24 hours and creates your personalized treatment plan.",
    canonical: "https://realcare.com/health-check",
  },
  // Account pages — no-index
  login: { title: "Log In", description: "Log in to your Real Care patient portal.", noIndex: true },
  portal: { title: "Patient Portal", description: "Manage your Real Care prescriptions, messages, and orders.", noIndex: true },
  forgotPassword: { title: "Reset Password", description: "Reset your Real Care account password.", noIndex: true },
};
