import { ReactNode, useRef, useState } from "react";
import { Link } from "react-router-dom";
import klarnaLogo from "@/assets/klarna-logo.png";
import afterpayLogo from "@/assets/afterpay-logo.png";
import affirmLogo from "@/assets/affirm-logo.svg";
import step1Img from "@/assets/step-1-phone-form.jpg";
import step2Img from "@/assets/realcare-box.png";
import step3Img from "@/assets/step-3-support.jpg";
import PageLayout from "./PageLayout";
import {
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Stethoscope,
  Truck,
  Clock,
  HeartHandshake,
  Star,
  BadgeCheck,
  Sparkles,
  Shield,
  DollarSign,
  Tag,
  Repeat,
  RotateCcw,
  XCircle,
  Pill,
  Beaker,
  FlaskConical,
  Users,
  Lock,
  Activity,
  Droplet,
  Zap,
  Timer,
  ClipboardList,
  Check as CheckIcon,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const bulletIcon = (text: string): LucideIcon => {
  const t = text.toLowerCase();
  if (/same price|every dose|flat/.test(t)) return Repeat;
  if (/\$|price|cost|\/\s*mo|\/mo|per month|one[\s-]?time/.test(t)) return DollarSign;
  if (/on[\s-]?demand|24\/7|support|messaging|provider support/.test(t)) return HeartHandshake;
  if (/money[\s-]?back|guarantee|refund/.test(t)) return RotateCcw;
  if (/no membership|no fee|no office|no commitment/.test(t)) return XCircle;
  if (/shipping|delivery|discreet/.test(t)) return Truck;
  if (/hsa|fsa|eligible|accepted/.test(t)) return BadgeCheck;
  if (/lab|biomarker|test/.test(t)) return FlaskConical;
  if (/board[\s-]?certified|licensed|provider|doctor|psychiatric|ob[\s-]?gyn/.test(t)) return Stethoscope;
  if (/private|confidential|hipaa|secure/.test(t)) return Lock;
  if (/men\s*&\s*women|men and women|all genders/.test(t)) return Users;
  if (/clinical|studied|ingredients|formula|custom/.test(t)) return Beaker;
  if (/pharmacy|pharmacies|compounded/.test(t)) return Pill;
  if (/works in|min|fast|quick/.test(t)) return Zap;
  if (/lasts|hours|duration/.test(t)) return Timer;
  if (/bioidentical|hormone/.test(t)) return Droplet;
  if (/results|review|provider[\s-]?reviewed/.test(t)) return ClipboardList;
  return CheckCircle2;
};

const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface Medication {
  name: string;
  desc: string;
  price: string;
  popular?: boolean;
  bullets: string[];
}

interface PlanOption {
  label: string;
  price: string;
  priceSuffix?: string;
  afterPrice?: string;
  badge?: string;
}

interface PlanGroup {
  group: string;
  options: PlanOption[];
}

interface FAQ {
  q: string;
  a: string;
}

interface Review {
  name: string;
  text: string;
}

interface RelatedProduct {
  name: string;
  image: string;
  bg: string;
  href: string;
}

interface ProductPageProps {
  title?: string;
  label: string;
  pill?: string;
  headline: ReactNode;
  sub: string;
  trustBullets: string[];
  howTitle: string;
  howItems: { title: string; desc: string }[];
  medications: Medication[];
  ctaHeadline: string;
  ctaSub: string;
  disclaimer?: string;
  pageTitle: string;

  productImage?: string;
  productImageAlt?: string;
  galleryImages?: string[];
  heroBg?: string;
  tagline?: string;
  savingsLabel?: string;
  plans?: PlanGroup[];
  faqs?: FAQ[];
  /** Optional long-form description shown in the Description tab. */
  description?: string;
  /** Customer reviews ("More from our members"). */
  reviews?: Review[];
  /** Related products ("You may also be interested in"). */
  relatedProducts?: RelatedProduct[];
  /** Show the "Why Real Care" no-membership-fee section. Weight loss only. */
  showCompetitorComparison?: boolean;
  /** Show the 90-Day Results Guarantee section. Weight loss only. */
  showGuarantee?: boolean;
  /** Custom steps to override the default 3-step section. */
  customSteps?: { num: string; label: string; headline: string; body: string; stat: string }[];
  /** Alert banner shown directly below the hero. */
  alertBanner?: { type: "warning" | "info"; text: string };
}

const DEFAULT_FAQS: FAQ[] = [
  { q: "What's Included In My Real Care Plan?", a: "Your plan includes an online medical assessment, ongoing access to a U.S.-licensed provider, your prescribed medication if appropriate for your health profile, free discreet shipping, and unlimited messaging support — all included in one plan price with no hidden fees." },
  { q: "How Soon Will I See Results?", a: "Timelines vary by treatment and individual response. Most patients begin to notice changes within the first 30–90 days of consistent use. Your provider will set realistic expectations based on your specific plan and check in regularly." },
  { q: "Do I Need Insurance?", a: "No. Real Care is cash-pay only — no insurance is required. We accept HSA and FSA cards, which can effectively reduce your cost by up to 30–40% depending on your tax bracket." },
  { q: "Can I Cancel Anytime?", a: "Yes. There is no membership fee and no long-term contract. You can pause or cancel your plan at any time directly from your patient portal." },
  { q: "Who Prescribes My Medication?", a: "All prescriptions are written by independent, board-certified U.S.-licensed providers in our network — only after they review your intake and confirm the treatment is clinically appropriate for you." },
  { q: "Is It Discreet?", a: "Yes. Every order ships in plain, unbranded packaging. Your medical information is protected under HIPAA and never shared with third parties." },
];

const DEFAULT_REVIEWS: Review[] = [
  { name: "Corey B.", text: "Real Care made it incredibly easy. My provider was responsive, the medication arrived fast, and I finally feel like myself again." },
  { name: "Lorraine K.", text: "I'm in my 40s and have never felt better. Sleeping through the night, more energy, and my labs are trending the right way." },
  { name: "Allan K.", text: "I've tried other telehealth companies — Real Care is on a different level. Clear pricing and they actually follow up with me." },
  { name: "Alfredo D.", text: "They acted quickly and got everything settled fast. The team works hard and goes out of their way to help." },
  { name: "Deborah M.", text: "Great communication and my order arrived the next day. Highly recommend Real Care to anyone on the fence." },
];

const ProductPageTemplate = ({
  label,
  pill,
  headline,
  sub,
  trustBullets,
  howTitle,
  howItems,
  medications,
  ctaHeadline,
  ctaSub,
  disclaimer,
  pageTitle,
  productImage,
  productImageAlt,
  galleryImages,
  heroBg = "bg-[#D7EEE4]",
  tagline,
  savingsLabel,
  plans,
  faqs = DEFAULT_FAQS,
  description,
  reviews = DEFAULT_REVIEWS,
  relatedProducts,
  showCompetitorComparison = false,
  showGuarantee = false,
  customSteps,
  alertBanner,
}: ProductPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [tab, setTab] = useState<"benefits" | "description">("benefits");
  const allImages = [productImage, ...(galleryImages || [])].filter(Boolean) as string[];
  const [activeImage, setActiveImage] = useState(productImage || "");
  const rightPanelRef = useRef<HTMLDivElement | null>(null);

  const handleHeroWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const panel = rightPanelRef.current;
    if (!panel) return;
    if (window.innerWidth < 1024) return; // only on lg+
    const max = panel.scrollHeight - panel.clientHeight;
    if (max <= 0) return;
    const atTop = panel.scrollTop <= 0;
    const atBottom = panel.scrollTop >= max - 1;
    // Allow page to scroll past the hero only when the panel is fully scrolled
    if ((e.deltaY > 0 && atBottom) || (e.deltaY < 0 && atTop)) return;
    e.preventDefault();
    panel.scrollTop += e.deltaY;
  };

  const planGroups: PlanGroup[] =
    plans ??
    medications.map((m) => ({
      group: m.name,
      options: [
        {
          label: m.desc,
          price: m.price.replace(/^From\s+/i, ""),
          badge: m.popular ? "Best Value" : undefined,
        },
      ],
    }));

  const computedDescription =
    description ||
    `Discover how this treatment may support your goals as part of a healthy lifestyle. Personalized care guided by Real Care's licensed medical providers — with the right format, the right dose, and ongoing support every step of the way.`;

  return (
    <PageLayout title={pageTitle}>
      {/* Hero — Eden-style: big sticky image left, scrollable buy card right */}
      <div onWheel={handleHeroWheel} className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 pt-10 md:pt-14 pb-4 md:pb-5 lg:h-[calc(100vh-4rem)] lg:overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-5 lg:gap-8 items-start lg:items-stretch lg:h-full fade-up text-[0.85em]">
          {/* Image panel — fixed in place while the right panel scrolls on desktop */}
          <div className="relative lg:self-start lg:mt-2">
            <div className={`aspect-square lg:aspect-auto lg:h-[calc(100vh-18rem)] rounded-3xl ${heroBg} overflow-hidden max-h-[calc(100vh-18rem)] mx-auto w-full`}>
              {activeImage && (
                <img
                  src={activeImage}
                  alt={productImageAlt || "Product"}
                  loading="eager"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white text-emerald-700 text-[0.7rem] font-semibold px-3 py-1.5 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> In Stock
            </div>
            {allImages.length > 1 && (
              <div className="mt-3 flex gap-2 flex-wrap justify-center">
                {allImages.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${heroBg} ${
                      activeImage === img ? "border-warm-800" : "border-warm-100 hover:border-warm-300"
                    }`}
                    aria-label="View product image"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buy card column */}
          <div ref={rightPanelRef} className="lg:h-full lg:overflow-y-auto lg:pt-1 lg:pr-2 lg:pb-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 bg-red/[0.08] text-red text-[0.62rem] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full">
                {label}
              </div>
              {pill && (
                <div className="inline-flex items-center gap-1.5 bg-red text-primary-foreground text-[0.62rem] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded">
                  <Check /> {pill}
                </div>
              )}
            </div>

            <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(1.8rem,3.4vw,2.6rem)] mb-2">
              {headline}
            </h1>

            {tagline && (
              <p className="text-[0.92rem] text-warm-600 leading-[1.5] mb-3">{tagline}</p>
            )}

            {savingsLabel && (
              <div className="flex items-center justify-center gap-2 bg-yellow-300 text-yellow-950 text-[0.85rem] font-bold rounded-2xl py-2.5 px-4 mb-3 shadow-sm">
                <ArrowRight size={16} className="text-yellow-800" strokeWidth={2.5} />
                {savingsLabel}
              </div>
            )}

            {/* Trustpilot */}
            <div className="flex justify-center mb-3">
              <a
                href="https://www.trustpilot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[0.78rem] text-warm-700 hover:text-warm-800"
              >
                <span className="font-semibold">Excellent</span>
                <span className="inline-flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="w-4 h-4 bg-[#00B67A] inline-flex items-center justify-center">
                      <Star size={10} fill="white" strokeWidth={0} className="text-white" />
                    </span>
                  ))}
                </span>
                <span className="underline">5,019 reviews on</span>
                <span className="inline-flex items-center gap-1 font-semibold">
                  <Star size={14} fill="#00B67A" strokeWidth={0} />
                  Trustpilot
                </span>
              </a>
            </div>

            {/* Plan selector card */}
            <div className="bg-card border border-warm-100 rounded-2xl p-5 md:p-6 shadow-soft">
              {planGroups.map((g, gi) => (
                <div key={g.group} className={gi > 0 ? "mt-5 pt-5 border-t border-warm-100" : ""}>
                  <div className="text-center font-sans font-semibold tracking-[0.02em] text-warm-700 text-[0.8rem] uppercase mb-3">
                    {g.group}
                  </div>
                  <div className="space-y-2">
                    {g.options.map((opt) => (
                      <div
                        key={opt.label + opt.price}
                        className="relative flex items-center justify-between gap-3 bg-warm-50 border border-warm-100 rounded-xl px-4 py-3"
                      >
                        {opt.badge && (
                          <span className="absolute -top-2 right-3 bg-emerald-500 text-white text-[0.6rem] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                            {opt.badge}
                          </span>
                        )}
                        <div className="text-[0.85rem] font-semibold text-warm-800">{opt.label}</div>
                        <div className="text-right">
                          <div className="leading-tight">
                            <span className="text-warm-800 font-bold text-[1.1rem]">{opt.price}</span>
                            {opt.priceSuffix && (
                              <span className="text-emerald-700 text-[0.72rem] font-semibold ml-1">
                                {opt.priceSuffix}
                              </span>
                            )}
                          </div>
                          {opt.afterPrice && (
                            <div className="text-[0.68rem] text-warm-500">{opt.afterPrice}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-3 flex flex-col items-center gap-2">
                <h3 className="font-display font-black text-warm-800 text-[1rem] md:text-[1.1rem]">
                  Buy Now, Pay Later
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-2">
                  <span className="inline-flex items-center bg-[#B2FCE4] rounded-lg px-3 h-7">
                    <img src={afterpayLogo} alt="Afterpay" loading="lazy" className="h-4 w-auto" />
                  </span>
                  <span className="inline-flex items-center bg-[#FFA8CD] rounded-lg px-3 h-7">
                    <img src={klarnaLogo} alt="Klarna" loading="lazy" className="h-4 w-auto" />
                  </span>
                  <span className="inline-flex items-center justify-center bg-[#4F46F4] rounded-lg px-3 h-7 overflow-hidden">
                    <img src={affirmLogo} alt="Affirm" loading="lazy" className="h-6 w-auto" />
                  </span>
                </div>
              </div>

              <a
                href="/health-check"
                className="mt-4 w-full bg-warm-800 hover:bg-warm-900 text-white font-bold px-6 py-3.5 rounded-xl text-[0.95rem] transition-colors flex items-center justify-center gap-2"
              >
                See If I Qualify <ChevronRight size={16} />
              </a>
              <div className="text-center text-[0.7rem] text-warm-500 mt-2">
                Discount Auto-Applied At Checkout
              </div>
              <p className="text-center text-[0.65rem] text-warm-400 leading-[1.6] mt-3">
                *First month pricing shown. Ongoing rate depends on plan and medication prescribed.<br />
                **The FDA does not review or approve compounded medications for safety or effectiveness.<br />
                <a href="/safety-info" className="underline hover:text-warm-700">Important Safety Information</a>.
              </p>
            </div>

            {/* Tabs: Benefits / Description */}
            <div className="mt-6 bg-card border border-warm-100 rounded-2xl p-5 md:p-6">
              <div className="flex bg-warm-50 rounded-lg p-1 mb-5 max-w-[320px] mx-auto">
                <button
                  onClick={() => setTab("benefits")}
                  className={`flex-1 text-[0.8rem] font-semibold py-2 rounded-md transition-colors ${
                    tab === "benefits" ? "bg-white text-warm-800 shadow-sm" : "text-warm-500"
                  }`}
                >
                  Benefits
                </button>
                <button
                  onClick={() => setTab("description")}
                  className={`flex-1 text-[0.8rem] font-semibold py-2 rounded-md transition-colors ${
                    tab === "description" ? "bg-white text-warm-800 shadow-sm" : "text-warm-500"
                  }`}
                >
                  Description
                </button>
              </div>

              <h3 className="font-display text-lg font-bold text-warm-800 text-center mb-5">What's Included</h3>

              {tab === "benefits" ? (
                <div className="space-y-3">
                  {trustBullets.map((t) => {
                    const Icon = bulletIcon(t);
                    return (
                      <div key={t} className="flex items-start gap-3 text-[0.85rem] text-warm-700 leading-[1.55]">
                        <span className="text-emerald-600 flex-shrink-0 mt-0.5">
                          <Icon size={16} />
                        </span>
                        {t}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-[0.85rem] text-warm-700 leading-[1.75]">{computedDescription}</p>
              )}

              <div className="mt-5 pt-5 border-t border-warm-100 flex flex-wrap items-center justify-between gap-3 text-[0.72rem] text-warm-600">
                <div className="flex items-center gap-1.5">
                  <Shield size={12} className="text-emerald-600" /> No Insurance Needed
                </div>
                <div className="flex items-center gap-1.5">
                  <BadgeCheck size={12} className="text-emerald-600" /> FSA & HSA Eligible
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-red" /> Compounded In The U.S.A.
                </div>
              </div>
            </div>

            {/* Inline FAQ accordion in right panel */}
            <div className="mt-6 space-y-2">
              {faqs.slice(0, 5).map((f, i) => {
                const key = 1000 + i;
                const isOpen = openFaq === key;
                return (
                  <div key={f.q} className="bg-card border border-warm-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left"
                    >
                      <span className="font-sans font-semibold text-warm-800 text-[0.95rem]">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={`flex-shrink-0 text-warm-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-[0.82rem] text-warm-600 leading-[1.7]">{f.a}</div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 text-center">
              <a href="/safety-info" className="text-[0.85rem] text-warm-800 underline underline-offset-4 font-semibold hover:text-warm-900">
                Important Safety Information
              </a>
            </div>

            <p className="text-[0.78rem] text-warm-600 leading-[1.7] mt-6">{sub}</p>
          </div>
        </div>
      </div>

      {/* Alert banner — TRT video, Mental Health crisis, Peptides investigational, etc. */}
      {alertBanner && (
        <div
          className={`px-5 md:px-12 py-3.5 text-center text-[0.82rem] font-medium leading-[1.6] ${
            alertBanner.type === "warning"
              ? "bg-amber-50 border-b border-amber-200 text-amber-800"
              : "bg-blue-50 border-b border-blue-200 text-blue-800"
          }`}
        >
          {alertBanner.text}
        </div>
      )}
      {/* The Science (treatment-specific) — moved above the 3-step section */}
      <div className="bg-warm-50 px-5 md:px-12 pt-14 pb-14 border-b border-warm-100">
        <div className="max-w-[1280px] mx-auto fade-up">
          <div className="text-center mb-10">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">The Science</div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">{howTitle}</h2>
          </div>
          <div
            className={`grid gap-5 ${
              howItems.length === 2
                ? "md:grid-cols-2"
                : howItems.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
            }`}
          >
            {howItems.map((item) => (
              <div key={item.title} className="bg-card border border-warm-100 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-full bg-red/[0.1] flex items-center justify-center mb-4">
                  <span className="text-red"><Check /></span>
                </div>
                <h3 className="font-display font-bold text-warm-800 text-base mb-2">{item.title}</h3>
                <p className="text-[0.82rem] text-warm-600 leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-background px-5 md:px-12 py-20 border-b border-warm-100">
        <div className="max-w-[1180px] mx-auto fade-up">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-red mb-4">
              How It Works
            </p>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight mb-5">
              Real Doctors. Real Medication. Real Change.
            </h2>
            <p className="text-[0.9rem] text-warm-600 leading-[1.75] max-w-xl mx-auto">
              No insurance required. No waiting rooms. A licensed provider reviews your health,
              writes your prescription, and your medication ships free — direct to your door.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                label: "Consult",
                headline: "Tell us about yourself.\nA real doctor reviews — not an algorithm.",
                body: "Complete a brief online health questionnaire at your own pace. A licensed medical provider — a real physician authorized in your state — personally reviews your intake and consults with you 100% online. You'll know quickly whether prescription treatment may be an appropriate option for you.",
                trust: [
                  "Licensed providers in all 50 states",
                  "100% online — no waiting rooms, no commutes",
                  "Free consultation — no commitment required",
                ],
                img: step1Img,
                alt: "Hands holding a phone with the Real Care intake form",
                imageBg: "#F5EDE0",
              },
              {
                number: "02",
                label: "Prescribed",
                headline: "If it's right for you,\nit ships directly to your door.",
                body: "If your provider determines prescription medication is clinically appropriate, your personalized treatment is dispensed from a U.S.-licensed compounding pharmacy and shipped directly to you — fast, free, and discreetly packaged. Often delivered within 48 hours of your prescription being written.",
                trust: [
                  "Shipped from U.S.-licensed pharmacies",
                  "Free expedited delivery on every order",
                  "FSA & HSA eligible · No hidden fees",
                ],
                img: step2Img,
                alt: "Discreet shipping package",
                imageBg: "#EDE8E0",
              },
              {
                number: "03",
                label: "Supported",
                headline: "Your care team doesn't\nclock out when you do.",
                body: "Real Care isn't a prescription vending machine. Your dedicated medical team is available around the clock — for dosage questions, side effect check-ins, and progress reviews. We adjust your plan as your body responds.",
                trust: [
                  "24/7 provider messaging — always available",
                  "Dosage adjustments & plan changes included",
                  "Cancel anytime · No membership fees",
                ],
                img: step3Img,
                alt: "Patient receiving a message from her provider",
                imageBg: "#E8E4DC",
              },
            ].map((s) => (
              <div key={s.number} className="flex flex-col">
                <div
                  className="font-display font-black leading-none -mb-3 select-none"
                  style={{ fontSize: "72px", color: "#F5EDE0", letterSpacing: "-3px" }}
                >
                  {s.number}
                </div>
                <p className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-red mb-2">
                  {s.label}
                </p>
                <h3 className="font-display text-xl font-bold text-warm-800 leading-snug mb-5 whitespace-pre-line">
                  {s.headline}
                </h3>
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] mb-5"
                  style={{ background: s.imageBg }}
                >
                  <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="text-[0.85rem] text-warm-600 leading-[1.75] mb-5">{s.body}</p>
                <div className="space-y-2.5 mt-auto">
                  {s.trust.map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F5EDE0] flex items-center justify-center shrink-0">
                        <CheckIcon size={10} className="text-red" strokeWidth={3} />
                      </div>
                      <span className="text-[0.78rem] font-semibold text-warm-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="/health-check"
              className="inline-flex items-center gap-2 bg-red hover:bg-red-dark text-white font-bold px-8 py-4 rounded-full text-[0.9rem] transition-colors"
            >
              Take Your Free Health Check
              <ArrowRight size={16} />
            </a>
            <p className="text-[0.72rem] text-warm-400 mt-3">
              No insurance · No commitment · Licensed providers in all 50 states
            </p>
          </div>
        </div>
      </div>

      {/* Why Real Care — gated to weight loss */}
      {showCompetitorComparison && (
      <div className="bg-warm-800 px-5 md:px-12 py-16 border-b border-warm-100">
        <div className="max-w-[600px] mx-auto text-center fade-up">
          <p className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-red mb-4">
            Why Real Care
          </p>
          <h2 className="font-display font-black text-white text-[clamp(1.6rem,3vw,2.2rem)] leading-tight mb-6">
            The Only GLP-1 Platform <br />With No Membership Fee. Ever.
          </h2>
          <div className="inline-flex flex-col items-center bg-red rounded-2xl px-10 py-8 mb-8">
            <div className="font-display font-black text-white text-[4rem] leading-none mb-1">$0</div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.15em] text-white/70">
              Membership Fee — Guaranteed, Ever
            </div>
          </div>
          <p className="text-[0.88rem] text-white/60 leading-[1.7] max-w-[760px] mx-auto text-center whitespace-normal md:whitespace-nowrap">
            Some platforms charge up to $149/month just to access their medication — on top of what you pay for the prescription itself.
          </p>
          <p className="text-[0.88rem] text-white/60 leading-[1.7] max-w-[760px] mx-auto mt-2 text-center whitespace-normal md:whitespace-nowrap">
            Real Care charges $0. One plan price covers your consultation, medication, and free shipping. Nothing extra.
          </p>
          <p className="text-[0.68rem] text-white/30 mt-4">
            Based on publicly available platform pricing as of 2026. Medication costs are additional and vary by plan.
          </p>
        </div>
      </div>
      )}

      {/* Treatments */}
      {!plans && (
        <div className="bg-background px-5 md:px-12 pt-14 pb-16" id="treatments">
          <div className="max-w-[1280px] mx-auto fade-up">
            <div className="text-center mb-10">
              <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Treatment Options</div>
              <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">Choose Your Plan</h2>
              <p className="text-[0.85rem] text-warm-600 mt-3 max-w-[440px] mx-auto">
                Your provider recommends the right option based on your health profile and goals.
              </p>
            </div>
            <div
              className={`grid gap-5 ${
                medications.length <= 2
                  ? "max-w-[800px] mx-auto md:grid-cols-2"
                  : medications.length === 3
                  ? "lg:grid-cols-3"
                  : "md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {medications.map((med) => (
                <div
                  key={med.name}
                  className={`bg-card rounded-2xl border overflow-hidden ${
                    med.popular ? "border-red shadow-soft" : "border-warm-100"
                  }`}
                >
                  {med.popular && (
                    <div className="bg-red text-primary-foreground text-center text-[0.65rem] font-bold tracking-[0.1em] uppercase py-2">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-warm-800 text-lg mb-1">{med.name}</h3>
                    <p className="text-[0.78rem] text-warm-400 italic mb-4">{med.desc}</p>
                    <div className="space-y-2 mb-6">
                      {med.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2 text-[0.81rem] text-warm-600 leading-[1.55]">
                          <span className="text-red flex-shrink-0 mt-0.5"><Check /></span>
                          {b}
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-warm-100 pt-4 mb-4">
                      <div className="text-red font-bold text-lg">{med.price}</div>
                      <div className="text-[0.67rem] text-warm-400">Doctor Consult · Medication · Shipping · Support</div>
                      <div className="text-[0.67rem] text-warm-400 mt-0.5">No Membership Fee. Cancel Anytime.</div>
                    </div>
                    <a
                      href="/health-check"
                      className="w-full bg-red hover:bg-red-dark text-primary-foreground font-bold py-2.5 rounded-lg text-[0.85rem] flex items-center justify-center gap-1 transition-colors"
                    >
                      Get Started <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-background px-5 md:px-12 py-12 border-b border-warm-100">
        <div className="max-w-[1080px] mx-auto fade-up">
          <h4 className="font-display font-bold text-warm-800 text-[0.95rem] mb-2">Disclaimer</h4>
          <p className="text-[0.78rem] text-warm-500 leading-[1.75]">
            {disclaimer || "Only available if prescribed after an online consultation with a healthcare provider. Benefits outlined are based on third-party studies. Plans are offered as a subscription service which can be canceled at any time. Actual product packaging may appear differently than shown. Physicians may prescribe compounded medications as needed to meet patient requirements. The FDA does not review or approve any compounded medications for safety or effectiveness. Statements on this page have not been evaluated by the FDA. Results may vary. If you notice any side effects while using this treatment, contact your healthcare provider immediately."}
          </p>
        </div>
      </div>

      {/* You may also be interested in */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="bg-warm-50 px-5 md:px-12 py-16 border-b border-warm-100">
          <div className="max-w-[1280px] mx-auto fade-up">
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)] text-center mb-10">
              You May Also Be Interested In
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <div key={p.name} className="group">
                  <div className={`aspect-square rounded-2xl ${p.bg} overflow-hidden mb-4 relative`}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col gap-2 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={p.href} className="bg-warm-800 hover:bg-warm-900 text-white text-center font-bold py-2 rounded-full text-[0.78rem]">
                        Get Started
                      </Link>
                      <Link to={p.href} className="bg-background text-warm-800 text-center font-bold py-2 rounded-full text-[0.78rem]">
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-warm-800 text-[0.95rem] text-center">{p.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="bg-background px-5 md:px-12 py-14 border-b border-warm-100">
        <div className="max-w-[820px] mx-auto fade-up">
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.8rem,3vw,2.4rem)]">
              Learn More About {pageTitle}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="bg-warm-50 border border-warm-100 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-sans font-semibold text-warm-800 text-[1rem]">{f.q}</span>
                    <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-warm-800 text-white" : "bg-warm-800 text-white"}`}>
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-[0.85rem] text-warm-600 leading-[1.75]">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 90-Day Results Guarantee — gated to weight loss */}
      {showGuarantee && (
        <div className="bg-warm-50 border-t border-warm-100 px-5 md:px-12 py-16">
          <div className="max-w-[820px] mx-auto fade-up bg-card border-2 border-red rounded-3xl p-8 md:p-10 text-center">
            <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-red mb-3">
              90-Day Results Guarantee
            </div>
            <h2 className="font-display font-black text-warm-800 text-[clamp(1.6rem,2.6vw,2.1rem)] leading-tight mb-4">
              Real results in 90 days — or your medication costs back.
            </h2>
            <p className="text-[0.85rem] text-warm-600 leading-[1.75] mb-6">
              Take your prescribed medication as directed, complete your monthly provider check-ins, and follow the recommended lifestyle guidance for 90 consecutive days. If your provider determines you have not achieved measurable weight loss, we will refund your medication costs in full.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {["Stay on prescribed dose", "Complete monthly check-ins", "Follow lifestyle guidance"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 bg-warm-50 border border-warm-100 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold text-warm-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red" />
                  {t}
                </span>
              ))}
            </div>
            <a href="/refund-policy" className="text-[0.78rem] text-warm-700 underline underline-offset-4 hover:text-warm-900">
              See full guarantee terms →
            </a>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="bg-red px-5 md:px-12 py-14 text-center fade-up">
        <div className="max-w-[560px] mx-auto">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/60 mb-3">
            {ctaHeadline.toLowerCase().includes("guarantee") ? "90-Day Results Guarantee" : "Get Started"}
          </div>
          <h2 className="font-display font-black text-primary-foreground text-[clamp(1.8rem,3vw,2.4rem)] mb-4">
            {ctaHeadline}
          </h2>
          <p className="text-[0.88rem] text-primary-foreground/80 mb-6" dangerouslySetInnerHTML={{ __html: ctaSub }} />
          <a
            href="/health-check"
            className="inline-block bg-background text-red font-bold px-8 py-3.5 rounded-lg hover:bg-warm-50 transition-colors text-[0.9rem]"
          >
            Take Your Health Check →
          </a>
          <div className="flex flex-wrap justify-center gap-5 mt-5">
            {["No Membership Fee", "24/7 Provider Access", "Free Discreet Shipping", "Cancel Anytime"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-[0.7rem] text-primary-foreground/70">
                <Check />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductPageTemplate;
