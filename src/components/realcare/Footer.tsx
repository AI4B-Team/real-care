import { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import compoundedUsa from "@/assets/compounded-usa-white.png";
import legitScript from "@/assets/legitscript-certified.png";

const popularLinks = [
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "Hair Loss", href: "/hair-loss" },
  { label: "ED Treatment", href: "/ed-treatment" },
  { label: "Testosterone", href: "/testosterone" },
  { label: "Peptides", href: "/peptides" },
  { label: "Skincare", href: "/skincare" },
  { label: "Lab Testing", href: "/lab-testing" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Our Doctors", href: "/our-doctors" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "Health Check", href: "/health-check" },
];

const moreLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Affiliates", href: "/affiliates" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Calculators", href: "/calculators" },
  { label: "Couples", href: "/couples" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Medical Consent", href: "/medical-consent" },
  { label: "HIPAA", href: "/hipaa" },
  { label: "Telehealth Consent", href: "/telehealth-consent" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Cookies", href: "/cookies" },
  { label: "Consumer Health Data", href: "/consumer-health-data-privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com/realcarehealth", Icon: Facebook },
  { label: "Instagram", href: "https://instagram.com/realcarehealth", Icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@realcarehealth", Icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/realcarehealth", Icon: Linkedin },
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

        {/* Top section: brand + newsletter | columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">

          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <div className="bg-red w-[110px] p-[6px] mb-6">
              <div className="border-[2px] border-white py-1 px-[14px] flex flex-col items-center">
                <span className="font-body text-[1.65rem] font-black text-white tracking-[0.05em] leading-none">REAL</span>
                <span className="font-body text-[0.42rem] font-bold tracking-[0.3em] text-white uppercase mt-[2px]">CARE</span>
              </div>
            </div>

            <h3 className="text-[1.05rem] font-semibold text-white mb-3">Sign up to receive health tips.</h3>
            <form onSubmit={handleSubmit} className="flex items-center bg-white/5 border border-white/15 rounded-full overflow-hidden max-w-[360px] mb-3">
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
                Submit
              </button>
            </form>
            <p className="text-[0.7rem] text-white/50 leading-[1.6] max-w-[340px]">
              By submitting your email address you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Popular */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/50 uppercase mb-5">Popular</h4>
            <ul className="space-y-3">
              {popularLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.88rem] text-white/85 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/50 uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[0.88rem] text-white/85 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* More + Legal */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/50 uppercase mb-5">More From Real Care</h4>
              <ul className="space-y-3">
                {moreLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.88rem] text-white/85 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[0.72rem] font-semibold tracking-[0.2em] text-white/50 uppercase mb-5">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[0.78rem] text-white/70 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15"></div>

        {/* Socials + Badges row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8">
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/70 hover:text-white transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <img
              src={legitScript}
              alt="LegitScript Certified"
              loading="lazy"
              width={512}
              height={512}
              className="h-[72px] w-auto"
            />
            <img
              src={compoundedUsa}
              alt="Compounded in the U.S.A."
              loading="lazy"
              className="h-[60px] w-auto"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15"></div>

        {/* Disclaimer block */}
        <div className="pt-8 space-y-4 text-[0.72rem] text-white/55 leading-[1.7]">
          <p>
            <span className="text-white/75 font-medium">Prescription Process:</span> Online evaluations with independent licensed medical professionals determine prescription appropriateness. Physicians may prescribe FDA-approved or compounded medications based on patient needs and clinical necessity. The FDA does not review compounded medications for safety or effectiveness.
          </p>
          <p>
            <span className="text-white/75 font-medium">Medication Access:</span> If eligible after provider consultation, prescriptions can be filled at network pharmacies unless you specify otherwise. Product packaging may differ from images shown. Compounded medications are dispensed by state-licensed pharmacies and are not FDA-approved. Results vary.
          </p>
          <p>
            <span className="text-white/75 font-medium">Pricing:</span> Our "Same Price at Every Dose" policy ensures consistent pricing regardless of dosage adjustments throughout your program (excluding new member discounts or specific plans). Terms apply. <span className="text-white/75 font-medium">Accessibility:</span> Real Care is committed to equal web access for persons with disabilities. For accessibility feedback, contact <a href="mailto:care@realcare.com" className="underline hover:text-white">care@realcare.com</a>.
          </p>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-[0.78rem] text-white/55">© 2026 Real Care Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
