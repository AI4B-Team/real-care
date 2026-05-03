// SafetyInfoPage.tsx
// Real Care — Important Safety Information
// Route: /safety-info
// Stack: React 18 + TypeScript + Vite + Tailwind CSS (Lovable)
// Icons: lucide-react ONLY — no emoji icons anywhere
// Compliance: All copy follows Real Care FTC/FDA telehealth guidelines

import { useState, useEffect, useRef } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import {
  AlertTriangle,
  Phone,
  ExternalLink,
  ChevronUp,
  Search,
  Printer,
  Shield,
  Info,
  AlertCircle,
  ChevronDown,
  ArrowUpRight,
  BookOpen,
  Stethoscope,
  FlaskConical,
  Pill,
  Heart,
  Brain,
  Microscope,
  Syringe,
  User,
  Users,
  Zap,
  ShieldAlert,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  label: string;
  badge?: "Rx" | "Compounded" | "FDA-Approved" | "Branded";
  category: string;
}

// ─── TOC Data ─────────────────────────────────────────────────────────────────

const SECTIONS: Section[] = [
  // Platform
  { id: "platform-services",    label: "Real Care Services",         category: "Platform Policies" },
  { id: "platform-advertising", label: "Advertisements",             category: "Platform Policies" },
  { id: "platform-offers",      label: "Special Pricing & Offers",   category: "Platform Policies" },
  { id: "platform-compounding", label: "Compounded Medications",     category: "Platform Policies" },
  { id: "platform-trademarks",  label: "Trademark Disclaimer",       category: "Platform Policies" },
  { id: "platform-reporting",   label: "Pharmacovigilance & Reporting", category: "Platform Policies" },
  { id: "platform-inquiries",   label: "Contact & Inquiries",        category: "Platform Policies" },
  // Weight Loss
  { id: "sema",       label: "Compounded Semaglutide", badge: "Compounded", category: "Weight Loss" },
  { id: "tirz",       label: "Compounded Tirzepatide", badge: "Compounded", category: "Weight Loss" },
  { id: "ozempic",    label: "Ozempic®",               badge: "FDA-Approved", category: "Weight Loss" },
  { id: "wegovy",     label: "Wegovy®",                badge: "FDA-Approved", category: "Weight Loss" },
  { id: "zepbound",   label: "Zepbound®",              badge: "FDA-Approved", category: "Weight Loss" },
  { id: "mounjaro",   label: "Mounjaro®",              badge: "FDA-Approved", category: "Weight Loss" },
  // Men's Health
  { id: "ed",  label: "Sildenafil / Tadalafil (ED)", badge: "Compounded", category: "Men's Health" },
  { id: "trt", label: "Testosterone (TRT)",           badge: "Compounded", category: "Men's Health" },
  // Women's Health
  { id: "hrt", label: "Hormone Therapy (HRT)",        badge: "Compounded", category: "Women's Health" },
  { id: "birth-control", label: "Oral Contraceptives", badge: "Rx",        category: "Women's Health" },
  // Hair Loss
  { id: "finasteride", label: "Finasteride",  badge: "Rx", category: "Hair Loss" },
  { id: "minoxidil",   label: "Minoxidil",    badge: "Rx", category: "Hair Loss" },
  // Skincare
  { id: "tretinoin",    label: "Tretinoin",                   badge: "Rx",         category: "Skincare" },
  { id: "skincare-compound", label: "Compounded Skincare Rx", badge: "Compounded", category: "Skincare" },
  // Mental Health
  { id: "naltrexone",  label: "Naltrexone / Bupropion", badge: "Compounded", category: "Mental Health" },
  { id: "ssri",        label: "SSRIs (Sertraline / Escitalopram)", badge: "Rx", category: "Mental Health" },
  // Peptides
  { id: "sermorelin",  label: "Sermorelin",   badge: "Compounded", category: "Peptides" },
  { id: "bpc157",      label: "BPC-157",      badge: "Compounded", category: "Peptides" },
  { id: "ipamorelin",  label: "Ipamorelin / CJC-1295", badge: "Compounded", category: "Peptides" },
  { id: "ghk-cu",      label: "GHK-Cu",       badge: "Compounded", category: "Peptides" },
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Platform Policies": <BookOpen size={13} />,
  "Weight Loss":       <Syringe  size={13} />,
  "Men's Health":      <User     size={13} />,
  "Women's Health":    <Users    size={13} />,
  "Hair Loss":         <Zap      size={13} />,
  "Skincare":          <Pill     size={13} />,
  "Mental Health":     <Brain    size={13} />,
  "Peptides":          <FlaskConical size={13} />,
};

const BADGE_STYLES: Record<string, string> = {
  "Compounded":   "bg-teal-50 text-teal-700 border-teal-200",
  "FDA-Approved": "bg-blue-50 text-blue-700 border-blue-200",
  "Rx":           "bg-purple-50 text-purple-700 border-purple-200",
  "Branded":      "bg-amber-50 text-amber-700 border-amber-200",
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function BlackBoxWarning({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 border-gray-900 rounded-xl p-5 my-5 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="bg-gray-900 text-white text-xs font-black px-3 py-1 rounded tracking-widest uppercase">
          Black Box Warning
        </div>
        <ShieldAlert size={16} className="text-gray-900" />
      </div>
      <div className="text-sm text-gray-800 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-red-200 bg-red-50 rounded-xl p-4 my-4">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle size={15} className="text-red-600 shrink-0" />
        <span className="text-xs font-bold text-red-700 uppercase tracking-wider">Warning — Seek Care Immediately If You Experience:</span>
      </div>
      <div className="text-sm text-red-800 leading-relaxed">{children}</div>
    </div>
  );
}

function SectionHeader({
  id, title, badge, category,
}: {
  id: string; title: string; badge?: string; category: string;
}) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div id={id} className="flex items-start justify-between pt-10 mb-1 scroll-mt-24">
      <div>
        <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">{category}</p>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {badge && (
          <span className={`mt-2 inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border ${BADGE_STYLES[badge] ?? ""}`}>
            {badge}
          </span>
        )}
      </div>
      <button
        onClick={scrollToTop}
        className="shrink-0 ml-4 p-2 rounded-full border border-gray-200 text-gray-400 hover:text-teal-600 hover:border-teal-300 transition-colors mt-2"
        title="Back to top"
      >
        <ChevronUp size={14} />
      </button>
    </div>
  );
}

function SectionDivider() {
  return <hr className="border-gray-100 my-8" />;
}

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-gray-800 mt-6 mb-3">{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-[7px]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function FDAParagraph() {
  return (
    <p className="text-xs text-gray-500 italic mt-6 border-t border-gray-100 pt-4">
      The statements above have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.{" "}
      To report suspected adverse reactions, contact the FDA at{" "}
      <a href="tel:18003291088" className="text-teal-600 hover:underline">1-800-FDA-1088</a>{" "}
      or visit{" "}
      <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline inline-flex items-center gap-0.5">
        fda.gov/medwatch <ExternalLink size={10} />
      </a>.
      In an emergency, call 911 or go to the nearest emergency room.
    </p>
  );
}

function ReturnLink() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="text-xs text-teal-600 hover:underline mt-2 inline-flex items-center gap-1"
    >
      <ChevronUp size={12} /> Return to treatment list
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function SafetyInfoPage() {
  const [activeId, setActiveId] = useState("platform-services");
  const [search, setSearch] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver — highlight active TOC item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(search.toLowerCase()) ||
    s.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(filtered.map((s) => s.category))];

  return (
    <PageLayout title="Important Safety Information">
    <div className="min-h-screen bg-white font-sans">
      {/* Print + Get Started action bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 h-12 flex items-center justify-end gap-3">
          <button
            onClick={() => window.print()}
            className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 hover:text-teal-600 border border-gray-200 rounded-full px-3 py-1.5 transition-colors"
          >
            <Printer size={12} /> Print This Page
          </button>
          <a
            href="/health-check"
            className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex gap-8 items-start">
          {/* ── Left TOC ─────────────────────────────────────────── */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-20">
              {/* Page title */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={15} className="text-teal-600" />
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Safety Info</span>
                </div>
                <p className="text-xs text-gray-400 mt-1.5">Last Reviewed: May 2026</p>
              </div>

              {/* Search */}
              <div className="relative mb-4">
                <Search size={12} className="absolute left-2.5 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Filter Treatments..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 text-xs rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:border-teal-400 focus:bg-white transition-colors"
                />
              </div>

              {/* TOC */}
              <nav className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
                {categories.map((cat) => (
                  <div key={cat}>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      {CATEGORY_ICONS[cat]}
                      {cat}
                    </div>
                    <div className="space-y-0.5">
                      {filtered
                        .filter((s) => s.category === cat)
                        .map((s) => (
                          <button
                            key={s.id}
                            onClick={() => scrollTo(s.id)}
                            className={`w-full text-left text-xs px-2.5 py-1.5 rounded-lg transition-all flex items-center gap-2 ${
                              activeId === s.id
                                ? "bg-teal-50 text-teal-700 font-semibold"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            {activeId === s.id && (
                              <span className="w-1 h-1 rounded-full bg-teal-500 shrink-0" />
                            )}
                            <span className={activeId === s.id ? "" : "ml-3"}>{s.label}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── Main Content ──────────────────────────────────────── */}
          <main ref={contentRef} className="flex-1 min-w-0 max-w-3xl">

            {/* Intro */}
            <div className="mb-8 p-5 bg-gray-50 rounded-2xl border border-gray-100">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Important Safety Information</h1>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Please review the Important Safety Information below for intended use, potential risks, side effects, use in specific populations, and drug interactions of prescription treatments facilitated through Real Care.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Real Care encourages the reporting of adverse side effects to your licensed medical provider and the dispensing pharmacy. To report suspected adverse reactions to any medication, contact the FDA at{" "}
                <a href="tel:18003291088" className="text-teal-600 font-semibold hover:underline">1-800-FDA-1088</a>{" "}
                or visit{" "}
                <a href="https://www.fda.gov/medwatch" className="text-teal-600 font-semibold hover:underline inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">
                  fda.gov/medwatch <ExternalLink size={11} />
                </a>.
              </p>
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-red-700">
                <Phone size={14} className="shrink-0" />
                In a medical emergency, call 911 or go to the nearest emergency room immediately.
              </div>
            </div>

            {/* ════ PLATFORM SECTIONS ════ */}

            <SectionHeader id="platform-services" title="Real Care Services" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Real Care offers and facilitates access to consultations with independent, licensed medical professionals to determine medical appropriateness for advertised treatments and plans. Real Care, through its software services, may facilitate fulfillment of prescriptions through its third-party pharmacy network.</p>
              <p>Real Care Health, Inc., as a managed services organization, does not provide medical advice, does not fulfill prescription medication directly, and is not licensed as a medical provider or pharmacy. Real Care offers software and technology services to facilitate medical consultation and prescription fulfillment. For further information, see Real Care's Terms of Service.</p>
              <p className="text-xs text-gray-500">Real Care operates in compliance with applicable state and federal telehealth regulations. Telehealth consultations are conducted by licensed providers authorized to practice in the patient's state of residence. LegitScript certification is in progress.</p>
            </div>
            <SectionDivider />

            <SectionHeader id="platform-advertising" title="Advertisements" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Advertisements published by Real Care are paid for by Real Care Health, Inc. for the purposes of advertising and marketing Real Care services. Advertisements may include paid actors or actor portrayals. Advertisements including testimonials, endorsements, or real Real Care members will be identified as such.</p>
              <p>Medication and program results may vary and there is no guarantee of any given outcome. Before-and-after images and customer testimonials reflect individual member experiences and have not been independently verified. Individual results will vary based on health history, lifestyle, medication adherence, and biological response to treatment.</p>
            </div>
            <SectionDivider />

            <SectionHeader id="platform-offers" title="Special Pricing & Offers" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Advertisements from RealCare.com may include, from time to time, special or introductory offers for promotional pricing of services. The $50 first-order discount applies to eligible new members and is auto-applied at checkout. Actual price will depend on product, format, and plan prescribed.</p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />Real Care reserves the right to adjust pricing from time to time in accordance with supply and market conditions.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />Promotional "first month" pricing is an introductory offer and not a long-term rate.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />"Same price at every dose" offers apply to standard full-price plans and are subject to change with 24-hour notice.</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />Plans are subscription services which may be canceled at any time through the patient portal.</li>
              </ul>
            </div>
            <SectionDivider />

            <SectionHeader id="platform-compounding" title="Compounded Medications" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Licensed medical professionals may issue prescriptions for compounded medications that can be filled by licensed, U.S.-based compounding pharmacies. Compounded medications are not approved by the FDA for safety or effectiveness but may be prescribed when commercially available FDA-approved drugs do not meet individual patient needs.</p>
              <p>Real Care may facilitate the filling of FDA-approved medications or compounded medications through a network of state-licensed pharmacies. Medication may be compounded based on a licensed provider's prescription to meet the specific needs of the patient, which may differ from commercially available products.</p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
                <p className="font-semibold text-amber-800 mb-1 flex items-center gap-2"><AlertCircle size={14} />Important</p>
                <p className="text-amber-700">The FDA does not review or approve compounded medications for safety or effectiveness. Compounded medications may vary in potency, quality, and purity compared to FDA-approved formulations. All compounded medications dispensed through Real Care's network are prepared by state-licensed 503(a) compounding pharmacies or FDA-registered 503(b) outsourcing facilities.</p>
              </div>
            </div>
            <SectionDivider />

            <SectionHeader id="platform-trademarks" title="Trademark Disclaimer" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Ozempic®, Wegovy®, and Rybelsus® are registered trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Real Care Health, Inc. has no ownership over brand-name, FDA-approved medications or products and is not affiliated with, endorsed by, or sponsored by Novo Nordisk, Eli Lilly, or any manufacturer of branded medications.</p>
              <p>Brand-name medications referenced on this site are dispensed through licensed pharmacies by prescription only and are not manufactured, sold, or shipped by Real Care.</p>
            </div>
            <SectionDivider />

            <SectionHeader id="platform-reporting" title="Pharmacovigilance & Reporting" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>Real Care maintains a pharmacovigilance protocol: adverse events reported by patients or providers are documented internally and reviewed by clinical leadership. Severe or unexpected reactions may be reported to regulatory authorities in accordance with compounding pharmacy guidelines and applicable federal and state law.</p>
              <p>Patients experiencing side effects should:</p>
              <BulletList items={[
                "Contact your Real Care care team immediately through your patient portal for non-emergency concerns.",
                "Contact your prescribing provider if you experience unexpected or worsening symptoms.",
                "Call 911 or go to the nearest emergency room for any medical emergency.",
                "Report adverse drug reactions to the FDA at 1-800-FDA-1088 or fda.gov/medwatch.",
              ]} />
            </div>
            <SectionDivider />

            <SectionHeader id="platform-inquiries" title="Contact & Inquiries" category="Platform Policies" />
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>For questions related to Real Care's advertisements, services, or safety information, contact us at <a href="mailto:support@realcare.com" className="text-teal-600 hover:underline">support@realcare.com</a>.</p>
              <p>For accessibility feedback: <a href="mailto:accessibility@realcare.com" className="text-teal-600 hover:underline">accessibility@realcare.com</a>.</p>
              <p>For HIPAA or privacy inquiries: <a href="mailto:privacy@realcare.com" className="text-teal-600 hover:underline">privacy@realcare.com</a>.</p>
            </div>

            {/* ════ WEIGHT LOSS ════ */}
            <SectionDivider />

            <SectionHeader id="sema" title="Compounded Semaglutide" badge="Compounded" category="Weight Loss" />
            <p className="text-xs text-gray-500 italic mb-4">*Compounded medications may be prescribed by physicians but have not been regulated by the FDA for safety, effectiveness, or quality. FDA-approved medicines containing semaglutide are available (Ozempic®, Wegovy®).</p>

            <BlackBoxWarning>
              <p><strong>Thyroid C-Cell Tumors:</strong> In rodent studies, semaglutide caused thyroid C-cell tumors, including thyroid cancer. It is unknown whether semaglutide causes thyroid tumors or thyroid cancer in humans.</p>
              <p className="mt-2">Compounded semaglutide is <strong>contraindicated</strong> in patients with a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
              <p className="mt-2"><strong>Notify your provider immediately</strong> if you develop: trouble swallowing · hoarseness · a lump or swelling in your neck · shortness of breath.</p>
            </BlackBoxWarning>

            <WarningBox>
              <ul className="space-y-1.5 mt-1">
                {[
                  "Severe nausea and/or vomiting resulting in dehydration — stay well hydrated",
                  "Kidney problems — vomiting, nausea, diarrhea can cause dehydration and worsen pre-existing kidney conditions",
                  "Pancreatitis — severe pain in abdomen or back that will not go away",
                  "Acute gallbladder disease — upper right stomach pain, fever, jaundice (yellowing of eyes/skin), nausea/vomiting",
                  "Hepatitis/elevated liver enzymes/jaundice",
                  "Diabetic retinopathy — changes in vision, especially in patients with type 2 diabetes",
                  "Signs of low blood sugar — dizziness, shakiness, sweating, rapid heartbeat, confusion (rare with GLP-1s; if occurs, consume 15–20g of sugar immediately and seek care)",
                  "Increasing heart rate",
                  "Worsening depression, behavioral changes, or suicidal thoughts",
                  "Serious allergic reaction — swelling of face, lips, tongue, or throat; difficulty breathing; severe rash; fainting; rapid heartbeat",
                ].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />{item}</li>)}
              </ul>
            </WarningBox>

            <SubHead>Additional Warnings</SubHead>
            <BulletList items={[
              "Do not share semaglutide with other people.",
              "Do not use if pregnant, trying to become pregnant, or breastfeeding. Stop at least 2 months before attempting pregnancy. May cause fetal harm.",
              "Use adequate contraception while on this medication.",
              "Avoid alcohol while taking semaglutide.",
              "Notify your provider of any kidney, liver, or pancreas conditions.",
              "If taking diabetes medications (insulin, sulfonylureas), discuss with your prescribing provider — doses may need adjustment as you lose weight.",
              "Clinical evidence indicates that stopping GLP-1 treatment may result in weight regain. Discuss long-term treatment strategy with your licensed provider.",
            ]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Compounded semaglutide can interact with alcohol and certain prescription and non-prescription medications. The risk of hypoglycemia is increased when combined with insulin or insulin secretagogues (sulfonylureas such as glipizide, glimepiride, glyburide). Semaglutide delays gastric emptying and may impact the absorption of oral medications. Drug levels of medications with narrow therapeutic windows (e.g., warfarin) should be monitored closely. If taking thyroid hormone medication, review timing with your prescribing provider prior to starting semaglutide.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="tirz" title="Compounded Tirzepatide" badge="Compounded" category="Weight Loss" />
            <p className="text-xs text-gray-500 italic mb-4">*Compounded medications may be prescribed by physicians but have not been regulated by the FDA for safety, effectiveness, or quality. FDA-approved medicines containing tirzepatide are available (Mounjaro®, Zepbound®).</p>

            <BlackBoxWarning>
              <p><strong>Thyroid C-Cell Tumors:</strong> Compounded tirzepatide usage has been associated with the potential development of thyroid tumors, including thyroid cancer, in rodent studies. It is unknown whether tirzepatide causes thyroid tumors or cancer in humans.</p>
              <p className="mt-2">Contraindicated in individuals with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2). Do not use if you have had a prior serious allergic reaction to tirzepatide.</p>
            </BlackBoxWarning>

            <SubHead>Serious Side Effects</SubHead>
            <BulletList items={[
              "Gastrointestinal Issues — notify your provider if you experience persistent or severe stomach discomfort",
              "Kidney Complications — diarrhea, nausea, and vomiting may cause dehydration; adequate fluid intake is essential",
              "Gallbladder Problems — upper abdominal pain, fever, jaundice, or clay-colored stools; seek immediate care",
              "Pancreatitis — discontinue and contact your provider if persistent abdominal pain occurs",
              "Severe Allergic Reaction — facial swelling, difficulty breathing, rash, or rapid heartbeat; seek emergency care",
              "Hypoglycemia (low blood sugar) — risk increases when combined with insulin or sulfonylureas; symptoms include dizziness, sweating, confusion, rapid heartbeat",
              "Vision Changes — notify your provider of any alterations in vision",
              "Worsening depression, behavioral changes, or suicidal thoughts",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Nausea", "Diarrhea", "Vomiting", "Constipation", "Abdominal pain", "Indigestion", "Injection site reactions", "Fatigue", "Belching", "Hair loss", "Heartburn"]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Compounded tirzepatide may interact with alcohol, insulin, and insulin secretagogues. Delays gastric emptying and may affect absorption of oral medications. Tirzepatide may reduce the efficacy of oral birth control pills — discuss contraception with your provider before starting. Your provider may recommend alternative contraception for 4 weeks after starting and after each dose increase. Drug levels of narrow therapeutic index medications (e.g., warfarin) should be monitored closely.</p>

            <SubHead>Stopping Treatment</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Clinical evidence indicates that stopping GLP-1/GIP treatment may result in weight regain. Discuss your long-term treatment strategy with your licensed provider.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            {/* ── Branded GLP-1s ── */}
            {[
              {
                id: "ozempic",
                name: "Ozempic®",
                drug: "semaglutide",
                mfr: "Novo Nordisk",
                indication: "Type 2 diabetes (also used off-label for weight management)",
                url: "https://www.ozempic.com",
                phone: "1-833-NOVO-411",
              },
              {
                id: "wegovy",
                name: "Wegovy®",
                drug: "semaglutide",
                mfr: "Novo Nordisk",
                indication: "Chronic weight management in adults with obesity or overweight with weight-related condition",
                url: "https://www.wegovy.com",
                phone: "1-833-NOVO-411",
              },
              {
                id: "zepbound",
                name: "Zepbound®",
                drug: "tirzepatide",
                mfr: "Eli Lilly",
                indication: "Chronic weight management in adults with obesity or overweight with weight-related condition",
                url: "https://www.zepbound.lilly.com",
                phone: "1-800-545-5979",
              },
              {
                id: "mounjaro",
                name: "Mounjaro®",
                drug: "tirzepatide",
                mfr: "Eli Lilly",
                indication: "Type 2 diabetes in adults, used along with diet and exercise",
                url: "https://www.mounjaro.com",
                phone: "1-833-807-6576",
              },
            ].map((med) => (
              <div key={med.id}>
                <SectionHeader id={med.id} title={med.name} badge="FDA-Approved" category="Weight Loss" />
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5 text-sm">
                  <p className="text-blue-800 font-semibold mb-1 flex items-center gap-2"><Info size={14} />FDA-Approved Medication</p>
                  <p className="text-blue-700">{med.name} ({med.drug}) is an FDA-approved prescription medication manufactured by {med.mfr}. Real Care Health, Inc. does not manufacture, sell, or ship {med.name}. If prescribed, it is dispensed through a licensed pharmacy. Real Care is not affiliated with {med.mfr}.</p>
                </div>

                <p className="text-sm text-gray-600 mb-4"><strong>Approved indication:</strong> {med.indication}.</p>

                <BlackBoxWarning>
                  <p><strong>Thyroid C-Cell Tumors:</strong> {med.name} may cause thyroid tumors, including thyroid cancer. Do not use if you or any family member has ever had medullary thyroid carcinoma (MTC) or if you have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
                  <p className="mt-2">Contact your provider immediately if you develop: a lump or swelling in your neck · hoarseness · trouble swallowing · shortness of breath.</p>
                </BlackBoxWarning>

                <SubHead>Serious Side Effects — Contact Your Provider Immediately</SubHead>
                <BulletList items={[
                  "Pancreatitis — severe stomach pain that will not go away, with or without vomiting",
                  "Low blood sugar (hypoglycemia) — risk increased if taken with sulfonylureas or insulin",
                  "Serious allergic reactions — swelling of face, lips, tongue, or throat; breathing difficulty; rash; dizziness; rapid heartbeat",
                  "Kidney problems — dehydration from GI side effects can worsen existing kidney conditions",
                  "Severe stomach problems",
                  "Changes in vision",
                  "Gallbladder problems — upper stomach pain, fever, jaundice, clay-colored stools",
                ]} />

                <SubHead>Common Side Effects</SubHead>
                <BulletList items={["Nausea", "Diarrhea", "Decreased appetite", "Vomiting", "Constipation", "Indigestion", "Stomach pain"]} />

                <SubHead>Before Using</SubHead>
                <BulletList items={[
                  "If taking oral birth control, discuss with your provider — efficacy may be reduced during treatment and for 4 weeks after each dose increase.",
                  "Do not use if pregnant, planning pregnancy, or breastfeeding. Consult your provider.",
                  "Disclose all medical conditions (pancreas, kidney, liver, severe stomach problems) and all medications.",
                  `For full prescribing information, visit ${med.url} or call ${med.phone}.`,
                ]} />

                <p className="text-xs text-gray-500 italic mt-5 border-t border-gray-100 pt-4">
                  {med.name} is a trademark of {med.mfr}. This information is for educational purposes only. For complete prescribing information, consult the full Prescribing Information or speak with your healthcare provider. To report side effects, call 1-800-FDA-1088 or visit fda.gov/medwatch.
                </p>
                <ReturnLink />
                <SectionDivider />
              </div>
            ))}

            {/* ════ MEN'S HEALTH ════ */}

            <SectionHeader id="ed" title="Sildenafil / Tadalafil (ED)" badge="Compounded" category="Men's Health" />
            <p className="text-xs text-gray-500 italic mb-4">*Compounded formulations are not FDA-approved. FDA-approved brand-name medications containing these active ingredients are available (Viagra®, Cialis®).</p>

            <WarningBox>
              <ul className="space-y-1.5 mt-1">
                {[
                  "Sudden severe decrease or loss of vision — stop use and seek emergency care immediately (possible non-arteritic ischemic optic neuropathy, NAION)",
                  "Sudden decrease or loss of hearing, sometimes with ringing in ears or dizziness",
                  "Chest pain or pressure, especially during or after sexual activity — call 911",
                  "Dangerously low blood pressure if taken with nitrates (nitroglycerin, isosorbide) — this combination is contraindicated and potentially fatal",
                  "Prolonged or painful erection lasting more than 4 hours (priapism) — seek emergency care immediately to prevent permanent damage",
                ].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />{item}</li>)}
              </ul>
            </WarningBox>

            <SubHead>Contraindications — Do Not Use If You:</SubHead>
            <BulletList items={[
              "Take any form of nitrate medication (nitroglycerin, isosorbide mononitrate/dinitrate) — this combination can cause a sudden, severe drop in blood pressure",
              "Take guanylate cyclase stimulators (riociguat/Adempas)",
              "Have been advised to avoid sexual activity due to cardiovascular conditions",
              "Have severe liver or kidney impairment",
              "Have had a recent stroke, heart attack, or are experiencing unstable angina",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Headache", "Facial flushing", "Nasal congestion", "Indigestion or stomach upset", "Vision changes (blue-green tint, blurring) — more common with sildenafil", "Back pain or muscle aches — more common with tadalafil", "Dizziness or lightheadedness"]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">PDE5 inhibitors (sildenafil, tadalafil) interact significantly with: nitrates (contraindicated), alpha-blockers (additive blood pressure lowering), antihypertensives, certain antifungals (ketoconazole, itraconazole), HIV protease inhibitors, and grapefruit juice (sildenafil). Always disclose all medications and supplements to your provider.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="trt" title="Testosterone (TRT)" badge="Compounded" category="Men's Health" />

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm">
              <p className="font-semibold text-amber-800 mb-1 flex items-center gap-2"><AlertCircle size={14} />Video Consultation Required</p>
              <p className="text-amber-700">Testosterone therapy requires a synchronous (live) video consultation with a licensed medical provider. Asynchronous (questionnaire-only) consultation is not available for this treatment. Your provider will review symptoms, labs, and medical history in real time before any prescription is written.</p>
            </div>

            <BlackBoxWarning>
              <p><strong>Cardiovascular Risk:</strong> Testosterone and other anabolic steroids have been associated with serious adverse cardiovascular events including myocardial infarction, stroke, and venous thromboembolism, some fatal.</p>
              <p className="mt-2"><strong>Abuse Potential:</strong> Testosterone is a Schedule III controlled substance under the Controlled Substances Act. Misuse or abuse of testosterone can cause serious adverse reactions including liver toxicity, hypertension, psychiatric effects, and infertility.</p>
            </BlackBoxWarning>

            <SubHead>Warnings</SubHead>
            <BulletList items={[
              "May suppress natural testosterone production — do not discontinue without medical supervision",
              "Worsening of sleep apnea — notify your provider",
              "Polycythemia (elevated red blood cell count) — requires periodic blood monitoring",
              "Possible adverse effects on cardiovascular health, including lipid changes",
              "May increase prostate-specific antigen (PSA) — inform your provider of any prostate history",
              "Infertility — testosterone therapy can suppress sperm production; discuss fertility goals before starting",
              "Not for use in women or children",
              "Gel/cream formulations: avoid skin-to-skin contact with others, especially women and children, until dry",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Acne or oily skin", "Hair loss (if genetically predisposed)", "Increased red blood cell count", "Mood changes or irritability", "Injection site reactions (if injectable)", "Fluid retention", "Breast tissue tenderness (gynecomastia)"]} />

            <SubHead>Monitoring</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Regular lab monitoring is required during TRT, including: testosterone levels, hematocrit (red blood cell count), PSA, lipid panel, and liver function. Your provider will determine appropriate monitoring intervals.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            {/* ════ WOMEN'S HEALTH ════ */}

            <SectionHeader id="hrt" title="Hormone Therapy (HRT)" badge="Compounded" category="Women's Health" />

            <BlackBoxWarning>
              <p><strong>Cardiovascular Disorders, Breast Cancer, Endometrial Cancer, and Probable Dementia:</strong> Estrogens increase the risk of endometrial cancer in women with a uterus when used without progestins. Adding a progestin is recommended to reduce this risk.</p>
              <p className="mt-2">Estrogens with or without progestins should not be used for the prevention of cardiovascular disease or dementia. Risks include: increased risk of stroke and deep vein thrombosis (DVT) · increased risk of invasive breast cancer · increased risk of probable dementia in postmenopausal women aged 65 or older.</p>
              <p className="mt-2">Use the lowest effective dose for the shortest duration consistent with treatment goals and individual patient risks.</p>
            </BlackBoxWarning>

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={[
              "Breast tenderness, bloating, nausea, headache, mood changes (estrogen)",
              "Skin irritation at application site (patch/gel)",
              "Vaginal irritation or spotting (vaginal formulations)",
              "Drowsiness, dizziness, breast tenderness, breakthrough bleeding (progesterone)",
            ]} />

            <SubHead>Serious Side Effects — Seek Care Immediately</SubHead>
            <BulletList items={[
              "Blood clots (DVT, pulmonary embolism) — leg pain/swelling, chest pain, shortness of breath",
              "Stroke — sudden numbness, vision changes, confusion, severe headache",
              "Heart attack — chest pain, arm pain, shortness of breath",
              "Severe allergic reactions",
              "Breast lumps or changes — report any new breast symptoms",
            ]} />

            <SubHead>Contraindications</SubHead>
            <BulletList items={[
              "Known or suspected breast cancer or history of breast cancer",
              "Known or suspected estrogen-dependent neoplasia",
              "History of blood clots (DVT, PE, or arterial thromboembolic disease)",
              "Active liver disease or liver dysfunction",
              "Known hypersensitivity to any components",
              "Pregnancy",
            ]} />

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="birth-control" title="Oral Contraceptives" badge="Rx" category="Women's Health" />
            <p className="text-xs text-gray-500 italic mb-4">Combined oral contraceptives (estrogen + progestin) and progestin-only pills are FDA-approved prescription medications dispensed through licensed pharmacies.</p>

            <BlackBoxWarning>
              <p><strong>Cigarette Smoking & Serious Cardiovascular Events:</strong> Cigarette smoking increases the risk of serious cardiovascular events from combined oral contraceptive use. This risk increases with age (particularly &gt;35) and with the number of cigarettes smoked. Women who use combined oral contraceptives should be strongly advised not to smoke.</p>
            </BlackBoxWarning>

            <SubHead>Serious Side Effects — Seek Care Immediately</SubHead>
            <BulletList items={[
              "Blood clots (DVT, pulmonary embolism) — leg pain or swelling, chest pain, shortness of breath",
              "Stroke — sudden numbness, vision changes, severe headache, confusion",
              "Heart attack — chest pain, arm pain, shortness of breath",
              "High blood pressure",
              "Liver problems including benign and malignant liver tumors",
              "Gallbladder disease",
              "Severe allergic reactions",
            ]} />

            <SubHead>Contraindications — Do Not Use If You:</SubHead>
            <BulletList items={[
              "Smoke and are over 35 years of age",
              "Have a history of blood clots, stroke, or heart attack",
              "Have uncontrolled high blood pressure",
              "Have known or suspected breast cancer or estrogen-dependent cancer",
              "Have unexplained vaginal bleeding",
              "Have severe liver disease or liver tumors",
              "Have migraine with aura",
              "Are pregnant or recently postpartum",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Nausea", "Breast tenderness", "Headache", "Breakthrough bleeding or spotting", "Mood changes", "Decreased libido", "Weight changes", "Acne (improvement or worsening)"]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Certain antibiotics (rifampin), anticonvulsants (phenytoin, carbamazepine, topiramate), antiretrovirals, and St. John's Wort may reduce contraceptive efficacy. Backup contraception may be required. Disclose all medications and supplements to your provider.</p>

            <SubHead>Important Note</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Oral contraceptives do not protect against HIV or other sexually transmitted infections. Use additional barrier protection as appropriate.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="finasteride" title="Finasteride" badge="Rx" category="Hair Loss" />
            <p className="text-xs text-gray-500 italic mb-4">Finasteride is FDA-approved for the treatment of male-pattern hair loss (androgenetic alopecia) in men only. It is not approved for use in women or children.</p>

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={[
              "Decreased libido",
              "Erectile dysfunction",
              "Decreased ejaculation volume",
              "Breast tenderness or enlargement",
              "Rash",
            ]} />
            <p className="text-sm text-gray-600 mt-2">These side effects may diminish over time. Not all users experience side effects.</p>

            <SubHead>Warnings</SubHead>
            <BulletList items={[
              "May increase the risk of high-grade prostate cancer — discuss with your provider",
              "Alters PSA levels — inform your provider before any prostate cancer screening",
              "Sexual side effects may persist after discontinuation in rare cases (Post-Finasteride Syndrome)",
              "Not approved for use in women or children under 18",
              "Depression or mood changes — contact your provider if you experience mental health changes",
            ]} />

            <SubHead>Contraindications</SubHead>
            <BulletList items={[
              "Pregnancy or potential pregnancy — may cause birth defects in male fetuses; do not handle crushed or broken tablets",
              "Allergy to finasteride or any component",
              "Under 18 years of age",
              "Liver disease unless cleared by your provider",
            ]} />

            <SubHead>Storage</SubHead>
            <BulletList items={["Store at room temperature, away from moisture and heat", "Keep in original packaging", "Do not use expired medication", "Keep out of reach of children"]} />

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="minoxidil" title="Minoxidil" badge="Rx" category="Hair Loss" />
            <p className="text-xs text-gray-500 italic mb-4">Topical minoxidil 2% and 5% is FDA-approved for androgenetic alopecia. Compounded oral or combination formulations are not FDA-approved.</p>

            <SubHead>Contraindications</SubHead>
            <BulletList items={[
              "Pregnancy or breastfeeding (lack of safety data; potential fetal effects)",
              "Known hypersensitivity to minoxidil",
              "Pheochromocytoma (rare adrenal tumor)",
            ]} />

            <SubHead>Use With Caution If You Have:</SubHead>
            <BulletList items={[
              "Uncontrolled hypotension",
              "History of heart failure or recent cardiovascular events",
              "Edema or fluid retention disorders",
              "Currently taking antihypertensive medications (additive blood pressure–lowering effect)",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Lightheadedness or dizziness", "Fluid retention / mild swelling", "Facial hair growth (women)", "Mild heart palpitations"]} />

            <SubHead>Serious Side Effects — Seek Care Immediately</SubHead>
            <BulletList items={[
              "Severe dizziness or fainting",
              "Significant or rapid weight gain (fluid retention)",
              "Chest pain or rapid heartbeat",
              "Severe allergic reaction (rash, swelling, difficulty breathing)",
            ]} />

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            {/* ════ SKINCARE ════ */}

            <SectionHeader id="tretinoin" title="Tretinoin" badge="Rx" category="Skincare" />
            <p className="text-xs text-gray-500 italic mb-4">Topical tretinoin (a retinoid) is FDA-approved for acne vulgaris and used off-label for photoaging, fine lines, and hyperpigmentation. Available by prescription only.</p>

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={[
              "Skin redness, dryness, peeling, or flaking (especially during first 2–6 weeks)",
              "Mild burning or stinging upon application",
              "Increased skin sensitivity",
              "Temporary worsening of acne ('purge') in the first several weeks",
              "Increased sensitivity to sun (photosensitivity)",
            ]} />

            <SubHead>Warnings</SubHead>
            <BulletList items={[
              "Do not use if pregnant, planning pregnancy, or breastfeeding — topical retinoids may pose risk to a developing fetus.",
              "Avoid sun exposure and use broad-spectrum SPF 30+ daily — tretinoin increases UV sensitivity.",
              "Do not apply to broken, sunburned, or eczematous skin.",
              "Avoid concurrent use of harsh exfoliants (AHAs/BHAs at high strength), benzoyl peroxide (unless directed), or waxing of treated areas.",
              "Discontinue and contact your provider if severe irritation, blistering, or allergic reaction occurs.",
            ]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Concurrent use of medicated soaps, abrasive cleansers, products with high concentrations of alcohol, astringents, spices, or lime, and other topicals containing sulfur, resorcinol, or salicylic acid may increase irritation. Use cautiously with photosensitizing medications (thiazide diuretics, tetracyclines, fluoroquinolones, sulfonamides, phenothiazines).</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="skincare-compound" title="Compounded Skincare Rx" badge="Compounded" category="Skincare" />
            <p className="text-xs text-gray-500 italic mb-4">*Compounded skincare formulations (e.g., tretinoin + niacinamide + azelaic acid; hydroquinone + tretinoin + hydrocortisone; melasma blends) are prepared by state-licensed compounding pharmacies based on a licensed provider's prescription. Compounded products are not FDA-approved.</p>

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={[
              "Skin irritation, redness, peeling, or dryness",
              "Stinging or burning upon application",
              "Increased photosensitivity",
              "Temporary hyperpigmentation or hypopigmentation (with hydroquinone)",
              "Contact dermatitis (rare)",
            ]} />

            <SubHead>Warnings</SubHead>
            <BulletList items={[
              "Do not use during pregnancy or breastfeeding.",
              "Hydroquinone-containing formulas: limit duration of use as directed by your provider; long-term unsupervised use may cause ochronosis (paradoxical darkening of skin).",
              "Hydrocortisone-containing formulas: limit to short-term use under provider supervision to avoid skin atrophy, telangiectasia, and rebound effects.",
              "Use broad-spectrum SPF 30+ daily.",
              "Discontinue if severe irritation or allergic reaction occurs and notify your provider.",
            ]} />

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            {/* ════ MENTAL HEALTH ════ */}

            <SectionHeader id="naltrexone" title="Naltrexone / Bupropion" badge="Compounded" category="Mental Health" />

            <WarningBox>
              <ul className="space-y-1.5 mt-1">
                {[
                  "Suicidal thoughts or behaviors — bupropion has an FDA black box warning for increased risk of suicidal thinking in some patients, especially under age 24. Contact your provider or call 988 (Suicide & Crisis Lifeline) if you experience worsening depression or suicidal thoughts.",
                  "Seizures — bupropion lowers the seizure threshold. Do not use if you have a seizure disorder, eating disorder (anorexia/bulimia), or are withdrawing from alcohol or benzodiazepines.",
                  "Severe allergic reactions — rash, angioedema, anaphylaxis",
                ].map((item, i) => <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />{item}</li>)}
              </ul>
            </WarningBox>

            <SubHead>Contraindications</SubHead>
            <BulletList items={[
              "Currently taking or within 14 days of stopping an MAOI",
              "Seizure disorder or history of seizures",
              "Eating disorder (anorexia nervosa or bulimia nervosa)",
              "Abrupt discontinuation of alcohol or benzodiazepines",
              "Pregnancy or breastfeeding",
              "Known hypersensitivity to naltrexone, bupropion, or components",
            ]} />

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={["Nausea (most common)", "Headache", "Insomnia", "Dry mouth", "Constipation", "Dizziness", "Decreased appetite"]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Bupropion significantly inhibits CYP2D6 — this affects many commonly used medications including antidepressants, antipsychotics, antiarrhythmics, and beta-blockers. Do not take with MAOIs. Naltrexone blocks opioid receptors — do not use if currently dependent on opioids or opioid-containing medications (will precipitate acute withdrawal). Always disclose all medications, including herbal supplements, to your provider.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            {/* ════ PEPTIDES ════ */}

            <SectionHeader id="sermorelin" title="Sermorelin" badge="Compounded" category="Peptides" />
            <p className="text-xs text-gray-500 italic mb-4">*Sermorelin is a compounded prescription therapy. It is not FDA-approved as a finished drug product. It is prescribed off-label by licensed providers.</p>

            <SubHead>Common Side Effects</SubHead>
            <BulletList items={[
              "Injection site reactions — redness, swelling, or pain at injection site",
              "Facial flushing",
              "Headache",
              "Dizziness",
              "Difficulty swallowing",
              "Nausea",
              "Sleepiness",
            ]} />

            <SubHead>Warnings</SubHead>
            <BulletList items={[
              "Use with caution in patients with hypothyroidism, as untreated thyroid deficiency may reduce response to sermorelin.",
              "Individuals with active malignancy — growth hormone-releasing agents may theoretically stimulate tumor growth; consult your oncologist.",
              "Sermorelin stimulates growth hormone release — use should be supervised by a licensed provider with monitoring as appropriate.",
              "Not for use in pregnancy or breastfeeding due to lack of safety data.",
            ]} />

            <SubHead>Drug Interactions</SubHead>
            <p className="text-sm text-gray-700 leading-relaxed">Glucocorticoids (steroids) may attenuate the response to sermorelin. Insulin and antidiabetic agents may need adjustment. Disclose all medications and supplements to your provider.</p>

            <FDAParagraph />
            <ReturnLink />
            <SectionDivider />

            <SectionHeader id="bpc157" title="BPC-157" badge="Compounded" category="Peptides" />
            <p className="text-xs text-gray-500 italic mb-4">*BPC-157 (Body Protection Compound-157) is a compounded prescription peptide. It is not FDA-approved as a finished drug product. Clinical evidence in humans is limited; most data is from preclinical studies. Prescribed off-label by licensed providers for investigational use.</p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm">
              <p className="font-semibold text-amber-800 mb-1 flex items-center gap-2"><AlertCircle size={14} />Investigational / Limited Human Data</p>
              <p className="text-amber-700">BPC-157 has not undergone controlled human clinical trials for safety or efficacy in any indication. All available data is from animal studies and limited anecdotal reports. Long-term safety in humans is unknown. Patients should discuss risks and unknowns with their licensed provider before starting.</p>
            </div>

            <SubHead>Reported Side Effects (From Limited Human Data)</SubHead>
            <BulletList items={[
              "Injection site reactions — redness, swelling, pain",
              "Nausea (reported at higher doses)",
              "Dizziness or lightheadedness",
              "Fatigue",
            ]} />

            <SubHead>Precautions</SubHead>
            <BulletList items={[
              "Not recommended during pregnancy or breastfeeding.",
              "Individuals with active cancer: peptides with tissue-repair properties may theoretically influence tumor biology — consult your oncologist.",
              "No established drug interaction data available — disclose all medications to your provider.",
              "Discontinue use and notify your provider if any unexpected or worsening symptoms occur.",
            ]} />

            <FDAParagraph />
            <ReturnLink />

            {/* ── Final Compliance Note ── */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-xs font-bold text-gray-700 mb-3 flex items-center gap-2">
                <Shield size={14} className="text-teal-600" /> Legal & Compliance Notice
              </p>
              <div className="space-y-2 text-xs text-gray-500 leading-relaxed">
                <p>The information on this page is provided for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Prescription medications are only available when prescribed after an online consultation with a licensed healthcare provider. Access to medications and treatment plans is not guaranteed.</p>
                <p>Compounded medications are prepared by state-licensed 503(a) compounding pharmacies or FDA-registered 503(b) outsourcing facilities. The FDA does not review or approve compounded medications for safety or effectiveness.</p>
                <p>Ozempic®, Wegovy®, and Rybelsus® are registered trademarks of Novo Nordisk A/S. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Viagra® is a registered trademark of Pfizer Inc. Cialis® is a registered trademark of Eli Lilly and Company. Real Care Health, Inc. is not affiliated with any of these manufacturers.</p>
                <p>Plans are offered as a subscription service which you can cancel at any time. Results may vary. Actual product packaging may differ from images shown.</p>
                <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-200">
                  <a href="/notice-of-privacy-practices" className="text-teal-600 hover:underline">Notice of Privacy Practices (HIPAA)</a>
                  <a href="/terms" className="text-teal-600 hover:underline">Terms of Service</a>
                  <a href="/privacy" className="text-teal-600 hover:underline">Privacy Policy</a>
                  <a href="/sms-privacy" className="text-teal-600 hover:underline">SMS Privacy Policy</a>
                  <a href="/shipping-policy" className="text-teal-600 hover:underline">Shipping Policy</a>
                  <a href="mailto:support@realcare.com" className="text-teal-600 hover:underline">Contact Us</a>
                </div>
              </div>
            </div>

          </main>

          {/* ── Right Emergency Panel ── */}
          <aside className="hidden xl:block w-44 shrink-0">
            <div className="sticky top-20 space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-red-700 mb-2 flex items-center gap-1.5">
                  <Phone size={12} /> Medical Emergency?
                </p>
                <a href="tel:911" className="block w-full bg-red-600 text-white text-center font-bold text-sm py-2 rounded-lg hover:bg-red-700 transition-colors mb-2">
                  Call 911
                </a>
                <p className="text-xs text-gray-500 leading-relaxed">Go to your nearest emergency room immediately.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <AlertCircle size={12} /> Report Side Effects
                </p>
                <p className="text-xs text-gray-600 mb-2">FDA MedWatch</p>
                <a href="tel:18003291088" className="block text-xs text-teal-600 font-semibold hover:underline mb-1">1-800-FDA-1088</a>
                <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="block text-xs text-teal-600 font-semibold hover:underline flex items-center gap-0.5">
                  fda.gov/medwatch <ExternalLink size={9} />
                </a>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Stethoscope size={12} /> Your Care Team
                </p>
                <a href="/portal" className="block text-xs text-teal-600 font-semibold hover:underline">Open Patient Portal</a>
                <p className="text-xs text-gray-500 mt-1">24/7 provider messaging available.</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                <p className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                  <Brain size={12} /> Mental Health Crisis
                </p>
                <p className="text-xs text-gray-600 mb-1">Suicide & Crisis Lifeline</p>
                <a href="tel:988" className="block text-xs text-teal-600 font-bold hover:underline">Call or text 988</a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
    </PageLayout>
  );
}
