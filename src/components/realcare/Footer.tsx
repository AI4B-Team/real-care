import qrReal from "@/assets/qr-real.png";
import phoneDoctor from "@/assets/app-phone-doctor.png";

const sections = [
  { title: "Treatment", links: ["Weight Loss", "Better Sex (ED)", "Testosterone (TRT)", "Fuller Hair", "Skincare", "Menopause & HRT", "Mental Health", "Peptides & Longevity", "Lab Testing"] },
  { title: "Company", links: ["Our Doctors", "Care Coaching", "How It Works", "Real Health Blog", "Refer A Friend", "Couples Care", "Affiliates"] },
  { title: "Support", links: ["Contact Us", "Patient Portal", "Pricing & Plans", "FAQ", "Shipping Info", "Refund Policy"] },
];

const Footer = () => (
  <footer className="bg-black text-white px-5 md:px-12 pt-14 pb-10">
    <div className="max-w-[1280px] mx-auto">
      <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 mb-12 overflow-hidden">
        <img
          src={phoneDoctor}
          alt="Real Care app on a phone showing a video call with a doctor"
          width={768}
          height={1024}
          loading="lazy"
          className="hidden lg:block absolute right-[20%] top-1/2 -translate-y-1/2 h-[120%] w-auto pointer-events-none select-none z-10"
        />
        {/* Red video icon to the left of the phone */}
        <div
          aria-hidden="true"
          className="hidden lg:flex absolute right-[32%] top-[18%] z-20 w-11 h-11 rounded-full bg-red items-center justify-center shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10.5V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3.5l5 4.5V6l-5 4.5z" fill="white"/>
          </svg>
        </div>
        <div className="relative">
          <div className="text-[0.62rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Get The App</div>
          <h3 className="font-display text-2xl md:text-3xl font-black leading-[1.15] text-white mb-3">
            REAL Care.<br />In Your Pocket.
          </h3>
          <p className="text-[0.82rem] text-white/70 leading-[1.6] max-w-[380px] mb-5">
            Track your treatment, message your provider, and reorder in seconds. Available on iOS and Android.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            <a href="#" className="bg-white text-black text-[0.78rem] font-semibold px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors">Download for iOS</a>
            <a href="#" className="border border-white/30 text-white text-[0.78rem] font-semibold px-5 py-2.5 rounded-lg hover:border-white transition-colors">Download for Android</a>
          </div>
        </div>
        <div className="relative flex items-center gap-5 lg:justify-end z-20 lg:-ml-10">
          <div className="bg-white p-3 rounded-xl shadow-xl">
            <img src={qrReal} alt="Scan to download the Real Care app" width={140} height={140} loading="lazy" className="w-[140px] h-[140px] block" />
          </div>
          <div className="text-[0.78rem] text-white/70 leading-[1.5] max-w-[140px]">
            <div className="text-white font-semibold mb-1">Scan to download</div>
            Point your phone camera at the code to get the app.
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-14">
        <div>
          <div className="bg-red w-[110px] p-[6px] mb-4">
            <div className="border-[2px] border-white py-1 px-[14px] flex flex-col items-center">
              <span className="font-body text-[1.65rem] font-black text-white tracking-[0.05em] leading-none">REAL</span>
              <span className="font-body text-[0.42rem] font-bold tracking-[0.3em] text-white uppercase mt-[2px]">CARE</span>
            </div>
          </div>
          <p className="text-[0.78rem] text-white/70 leading-[1.65] max-w-[240px] mb-6">
            Healthcare redefined for real life. Licensed providers. Clear pricing. Shipped to your door.
          </p>
          <div className="flex gap-2">
            {["Instagram", "TikTok", "YouTube"].map((s) => (
              <a key={s} href="#" className="text-[0.62rem] font-semibold tracking-wider border border-white/30 text-white/80 px-3 py-1.5 rounded hover:border-red hover:text-red transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
        {sections.map((s) => (
          <div key={s.title}>
            <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-white/60 mb-4">{s.title}</div>
            <div className="flex flex-col gap-2.5">
              {s.links.map((l) => (
                <a key={l} href="#" className="text-[0.79rem] text-white/80 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/15 pt-8 flex justify-between items-center flex-wrap gap-4">
        <div className="text-[0.69rem] text-white/60">© 2026 Real Care Inc. All Rights Reserved. REALCARE.COM</div>
        <div className="flex gap-6">
          {["Terms", "Privacy", "Medical Consent", "HIPAA"].map((l) => (
            <a key={l} href="#" className="text-[0.69rem] text-white/60 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
      </div>
      <p className="text-[0.62rem] text-white/50 leading-[1.7] mt-8 pt-6 border-t border-white/15">
        *Medical treatment provided by Real Care Affiliated P.C.s and our network of licensed providers through OpenLoop Health. Prescriptions issued only after consultation with an independent licensed provider. Compounded medications dispensed by state-licensed pharmacies and are not FDA-approved. Results vary. Money-back guarantee subject to program terms. HSA/FSA eligibility varies. Individuals in advertising may be models or actors.
      </p>
    </div>
  </footer>
);

export default Footer;
