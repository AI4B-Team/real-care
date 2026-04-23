import { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X, ChevronRight } from "lucide-react";


interface NavItem { title: string; href: string; desc?: string; badge?: string; }
interface NavGroup { label: string; items: NavItem[]; }

const navGroups: NavGroup[] = [
  {
    label: "Men",
    items: [
      { title: "Weight Loss", href: "/weight-loss", desc: "GLP-1 from $179/mo", badge: "Popular" },
      { title: "Better Sex", href: "/ed-treatment", desc: "ED from $2/dose", badge: "#1" },
      { title: "Testosterone", href: "/testosterone", desc: "TRT from $99/mo" },
      { title: "Hair Loss", href: "/hair-loss", desc: "From $39/mo" },
      { title: "Peptides", href: "/peptides", desc: "From $129/mo", badge: "New" },
      { title: "Mental Health", href: "/mental-health", desc: "From $49/mo" },
      { title: "Lab Testing", href: "/lab-testing", desc: "From $149" },
      { title: "All Men's", href: "/men", desc: "See everything" },
    ],
  },
  {
    label: "Women",
    items: [
      { title: "Weight Loss", href: "/weight-loss", desc: "GLP-1 from $179/mo", badge: "Popular" },
      { title: "Menopause", href: "/menopause", desc: "HRT from $89/mo", badge: "Specialist" },
      { title: "Skincare", href: "/skincare", desc: "Rx from $35/mo" },
      { title: "Hair Growth", href: "/hair-loss", desc: "From $39/mo" },
      { title: "Mental Health", href: "/mental-health", desc: "From $49/mo" },
      { title: "Birth Control", href: "/women", desc: "From $20/mo" },
      { title: "Lab Testing", href: "/lab-testing", desc: "From $149" },
      { title: "All Women's", href: "/women", desc: "See everything" },
    ],
  },
  {
    label: "Info",
    items: [
      { title: "How It Works", href: "/how-it-works" },
      { title: "Our Doctors", href: "/our-doctors" },
      { title: "Pricing", href: "/pricing" },
      { title: "Couples", href: "/couples" },
      { title: "Blog", href: "/blog" },
      { title: "About", href: "/about" },
      { title: "Affiliates", href: "/affiliates" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
      { title: "HIPAA", href: "/hipaa" },
      { title: "Consent", href: "/medical-consent" },
      { title: "Refunds", href: "/refund-policy" },
    ],
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>("Men");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentGroup = navGroups.find((g) => g.label === activeGroup);

  return (
    <nav className="bg-background border-b border-warm-100 flex items-center justify-between px-5 md:px-12 h-16 sticky top-0 z-50 shadow-[0_1px_0_hsl(var(--warm-100))]">
      <Logo href="/" />

      <div className="hidden lg:flex items-center gap-1">
        <a href="/#men" className="text-[0.82rem] font-semibold text-warm-800 px-3.5 py-1.5 rounded-md hover:bg-red/[0.07] hover:text-red transition-colors">Men</a>
        <a href="/#women" className="text-[0.82rem] font-semibold text-warm-800 px-3.5 py-1.5 rounded-md hover:bg-red/[0.07] hover:text-red transition-colors">Women</a>
        <div className="w-px h-[18px] bg-warm-200 mx-1" />
        <a href="/health-check" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Health Check</a>
        <a href="/how-it-works" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">How It Works</a>
        <a href="/our-doctors" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Our Doctors</a>
        <a href="/pricing" className="text-[0.82rem] font-medium text-warm-600 px-3.5 py-1.5 rounded-md hover:bg-warm-50 hover:text-warm-800 transition-colors">Pricing</a>
      </div>

      <div className="flex items-center gap-2" ref={menuRef}>
        <a href="/login" className="hidden sm:inline-block text-[0.8rem] font-medium text-warm-600 px-3.5 py-2">Log In</a>
        <a href="/health-check" className="hidden sm:inline-block bg-red hover:bg-red-dark text-primary-foreground text-[0.8rem] font-semibold px-5 py-2.5 rounded-md transition-colors">
          Get Started →
        </a>



        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-warm-50 text-warm-800 transition-colors ml-1"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {open && (
          <div className="absolute top-[64px] right-0 w-screen max-w-[440px] bg-card border border-warm-100 rounded-b-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden z-50 flex">
            {/* Group tabs */}
            <div className="w-[130px] bg-warm-50 border-r border-warm-100 flex-shrink-0 flex flex-col">
              <div className="p-3 space-y-0.5 flex-1">
                {navGroups.map((group) => (
                  <button
                    key={group.label}
                    onMouseEnter={() => setActiveGroup(group.label)}
                    onClick={() => setActiveGroup(group.label)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[0.82rem] font-semibold transition-colors ${
                      activeGroup === group.label
                        ? "bg-red text-primary-foreground"
                        : "text-warm-700 hover:bg-warm-100"
                    }`}
                  >
                    {group.label}
                    <ChevronRight size={12} className={activeGroup === group.label ? "opacity-80" : "text-warm-300"} />
                  </button>
                ))}
              </div>
              <div className="border-t border-warm-100 p-3 space-y-0.5">
                <a href="/login" onClick={() => setOpen(false)} className="block px-3 py-2 text-[0.78rem] text-warm-600 hover:text-warm-800 hover:bg-warm-100 rounded-lg transition-colors">
                  Log In
                </a>
                <a href="/health-check" onClick={() => setOpen(false)} className="block px-3 py-2 text-[0.78rem] font-bold text-red hover:bg-red/[0.08] rounded-lg transition-colors">
                  Get Started →
                </a>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 p-3 overflow-y-auto max-h-[480px]">
              {currentGroup && (
                <>
                  <div className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-warm-400 px-2 mb-2">
                    {currentGroup.label === "Men" ? "Men's Treatments" : currentGroup.label === "Women" ? "Women's Treatments" : currentGroup.label}
                  </div>
                  <div className="space-y-0.5">
                    {currentGroup.items.map((item) => (
                      <a
                        key={item.href + item.title}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-warm-50 group transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[0.83rem] font-semibold text-warm-800 group-hover:text-red transition-colors">{item.title}</span>
                            {item.badge && (
                              <span className="bg-red text-primary-foreground text-[0.52rem] font-bold tracking-[0.08em] uppercase px-1.5 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.desc && <div className="text-[0.68rem] text-warm-400 mt-0.5">{item.desc}</div>}
                        </div>
                        <ChevronRight size={12} className="text-warm-300 group-hover:text-red transition-colors flex-shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
