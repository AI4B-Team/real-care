import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Announce from "@/components/realcare/Announce";
import Nav from "@/components/realcare/Nav";
import Footer from "@/components/realcare/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
    document.title = "Page Not Found | Real Care";
  }, [location.pathname]);

  return (
    <div>
      <Announce />
      <Nav />
      <main className="min-h-[70vh] bg-warm-50 flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-[480px]">
          <div className="font-display font-black text-[8rem] leading-none text-warm-100 mb-2">404</div>
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Page Not Found</div>
          <h1 className="font-display font-black text-warm-800 text-3xl mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-[0.88rem] text-warm-600 leading-[1.75] mb-8">
            The link you followed may be broken or the page may have been moved.
            Let's get you back on track.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/" className="bg-red hover:bg-red-dark text-primary-foreground font-bold px-7 py-3 rounded-lg text-[0.88rem] transition-colors">
              Go Home →
            </a>
            <a href="/health-check" className="border border-warm-200 hover:border-warm-600 text-warm-800 font-medium px-6 py-3 rounded-lg text-[0.88rem] transition-colors">
              Take Health Check
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-3 text-center">
            {[
              { label: "Weight Loss", href: "/weight-loss" },
              { label: "Better Sex", href: "/ed-treatment" },
              { label: "Testosterone", href: "/testosterone" },
              { label: "Hair Loss", href: "/hair-loss" },
              { label: "Menopause", href: "/menopause" },
              { label: "Skincare", href: "/skincare" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-[0.75rem] text-warm-400 hover:text-red transition-colors py-1.5 border border-warm-100 rounded-lg hover:border-red">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
