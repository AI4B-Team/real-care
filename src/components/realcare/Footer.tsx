import { useState } from "react";
import compoundedUsa from "@/assets/compounded-usa-white.png";

const productLinks = [
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "Hair Loss", href: "/hair-loss" },
  { label: "ED Treatment", href: "/ed-treatment" },
  { label: "Testosterone", href: "/testosterone" },
  { label: "Peptides", href: "/peptides" },
  { label: "Skincare", href: "/skincare" },
  { label: "Lab Testing", href: "/lab-testing" },
];

const companyLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Patient Portal", href: "/patient-portal" },
];

const legalLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Notice of Privacy Practices (HIPAA)", href: "/hipaa" },
  { label: "SMS Privacy", href: "/sms-privacy" },
  { label: "Medical Consent", href: "/medical-consent" },
  { label: "Telehealth", href: "/telehealth-consent" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "My Health My Data", href: "/my-health-my-data" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Important Safety Info", href: "/safety-info" },
];

// Real brand logos (official simple-icons SVG paths)
const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/realcare",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85 0 3.205-.012 3.584-.069 4.85-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.141 0-3.515.011-4.756.068-1.054.048-1.626.222-2.006.371a3.34 3.34 0 0 0-1.213.789 3.34 3.34 0 0 0-.789 1.213c-.149.38-.323.952-.371 2.006-.057 1.241-.068 1.615-.068 4.756s.011 3.515.068 4.756c.048 1.054.222 1.626.371 2.006a3.34 3.34 0 0 0 .789 1.213c.342.342.687.563 1.213.789.38.149.952.323 2.006.371 1.241.057 1.615.068 4.756.068s3.515-.011 4.756-.068c1.054-.048 1.626-.222 2.006-.371a3.34 3.34 0 0 0 1.213-.789 3.34 3.34 0 0 0 .789-1.213c.149-.38.323-.952.371-2.006.057-1.241.068-1.615.068-4.756s-.011-3.515-.068-4.756c-.048-1.054-.222-1.626-.371-2.006a3.34 3.34 0 0 0-.789-1.213 3.34 3.34 0 0 0-1.213-.789c-.38-.149-.952-.323-2.006-.371-1.241-.057-1.615-.068-4.756-.068zm0 3.131a4.868 4.868 0 1 1 0 9.736 4.868 4.868 0 0 1 0-9.736zm0 8.03a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324zm6.184-8.224a1.137 1.137 0 1 1-2.274 0 1.137 1.137 0 0 1 2.274 0z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@realcare",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@realcare",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/realcare",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-black text-white px-5 md:px-12 pt-16 pb-10">
      <div className="max-w-[1280px] mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">

          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5 mb-6">
              <div className="bg-red w-[110px] p-[6px]">
                <div className="border-[2px] border-white py-1 px-[14px] flex flex-col items-center">
                  <span className="font-body text-[1.65rem] font-black text-white tracking-[0.05em] leading-none">REAL</span>
                  <span className="font-body text-[0.42rem] font-bold tracking-[0.3em] text-white uppercase mt-[2px]">CARE</span>
                </div>
              </div>
            </div>

            <h3 className="text-[1rem] font-semibold text-white mb-3">Sign up for health tips & offers.</h3>
            <form onSubmit={handleSubmit} className="flex items-center bg-white/5 border border-white/15 rounded-full overflow-hidden max-w-[380px] mb-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-3 text-[0.85rem] text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black text-[0.82rem] font-semibold px-5 py-2.5 m-1 rounded-full hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[0.7rem] text-white/50 leading-[1.6] max-w-[360px]">
              By subscribing you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/65 hover:text-white transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links - right aligned */}
          <div className="lg:col-span-7 lg:col-start-6 grid grid-cols-2 gap-8 lg:justify-items-end">
            {/* Treatments */}
            <div>
              <h4 className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase mb-5">Treatments</h4>
              <ul className="space-y-3">
                {productLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.86rem] text-white/85 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[0.7rem] font-semibold tracking-[0.2em] text-white/45 uppercase mb-5">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.86rem] text-white/85 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15"></div>

        {/* Disclaimer block */}
        <div className="pt-8 space-y-4 text-[0.72rem] text-white/55 leading-[1.7]">
          <p>
            <span className="text-white/75 font-medium">Care Model:</span> Clinical care is delivered by Real Care Affiliated P.C.s and a network of independent, board-certified providers via OpenLoop Health. Treatment is only prescribed after a licensed provider reviews your intake and confirms it's clinically appropriate for you. Not every patient qualifies.
          </p>
          <p>
            <span className="text-white/75 font-medium">Medications & Pharmacy:</span> When approved, prescriptions are filled by partner state-licensed pharmacies and shipped directly to your door. Some treatments may include compounded formulations, which are not reviewed or approved by the FDA for safety, effectiveness, or quality. Physicians may prescribe compounded medications as needed to meet individual patient requirements. Product appearance and packaging may vary.
          </p>
          <p>
            <span className="text-white/75 font-medium">Not Medical Advice:</span> The information on this website is provided for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment. It should not be used as a substitute for advice from a qualified healthcare professional. Always consult a licensed healthcare provider before starting any new medication, supplement, or weight loss program.
          </p>
          <p>
            <span className="text-white/75 font-medium">Stopping Treatment:</span> Clinical evidence indicates that stopping GLP-1 treatment may result in weight regain. Long-term use in combination with diet, exercise, and lifestyle modification is generally recommended to maintain results. Discuss your long-term treatment strategy with your licensed medical provider.
          </p>
          <p>
            <span className="text-white/75 font-medium">Testimonials & Results:</span> Customer testimonials and before-and-after images featured on this site are provided by real Real Care members and reflect their individual experiences. Results have not been independently verified. Individual results will vary based on health history, lifestyle, medication adherence, and biological response to treatment.
          </p>
          <p>
            <span className="text-white/75 font-medium">Trademarks:</span> Ozempic®, Wegovy®, Zepbound®, Mounjaro®, and Rybelsus® are registered trademarks of Novo Nordisk A/S and Eli Lilly and Company, respectively. Real Care Inc. is not affiliated with, endorsed by, or sponsored by Novo Nordisk, Eli Lilly, or any manufacturer of branded medications. Brand-name medications are dispensed through licensed pharmacies by prescription only and are not manufactured or sold by Real Care.
          </p>
          <p>
            <span className="text-white/75 font-medium">Pricing & Guarantee:</span> Our "Same Price at Every Dose" promise keeps your monthly cost flat as your provider adjusts your dosage (introductory offers and limited-time plans excluded). Money-back guarantees, if any, are subject to the terms of your specific program. HSA/FSA acceptance varies by plan. People shown in marketing may be models or paid actors.
          </p>
          <p>
            <span className="text-white/75 font-medium">Data & Advertising:</span> By using our services, you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>. Real Care may use de-identified or aggregated information to improve our services and for advertising purposes in compliance with applicable law. We do not share individually identifiable health information with advertisers. To opt out, contact <a href="mailto:privacy@realcare.com" className="underline hover:text-white">privacy@realcare.com</a>.
          </p>
          <p>
            <span className="text-white/75 font-medium">Accessibility:</span> Real Care Inc. is committed to equal digital access for all users. For accessibility feedback, email <a href="mailto:accessibility@realcare.com" className="underline hover:text-white">accessibility@realcare.com</a>.
          </p>
          <p className="text-white/45">
            Real Care Inc. • Jacksonville, FL • <a href="mailto:support@realcare.com" className="underline hover:text-white/70">support@realcare.com</a>
          </p>
        </div>

        {/* Legal links bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-[0.72rem] text-white/55 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 mt-6 pt-6">
          <p className="text-[0.75rem] text-white/55 text-center">© 2026 Real Care Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
