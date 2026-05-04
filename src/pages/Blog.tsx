import { useState } from "react";
import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight, Loader2, CheckCircle } from "lucide-react";
import { useSEO, SEO_CONFIGS } from "@/hooks/useSEO";

const posts = [
  {
    category: "Weight Loss",
    title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?",
    excerpt: "Both medications work — but they work differently. Here's an honest breakdown of the science, the costs, and how to choose.",
    readTime: "6 min read",
    href: "/blog/semaglutide-vs-tirzepatide",
    featured: true,
  },
  {
    category: "Men's Health",
    title: "Signs Your Testosterone Is Low (And What To Do About It)",
    excerpt: "Low energy, brain fog, low libido — these aren't just 'getting older.' Here's what low T actually looks like and how TRT helps.",
    readTime: "5 min read",
    href: "/blog/low-testosterone-signs",
  },
  {
    category: "Women's Health",
    title: "Perimenopause vs. Menopause: What's The Difference?",
    excerpt: "Most women don't know perimenopause can start in your 30s. Here's what's happening in your body and what actually helps.",
    readTime: "7 min read",
    href: "/blog/perimenopause-vs-menopause",
  },
  {
    category: "Weight Loss",
    title: "GLP-1 Side Effects: What To Expect and How To Manage Them",
    excerpt: "Nausea, constipation, fatigue — the side effects are real but manageable. Here's what our providers recommend.",
    readTime: "5 min read",
    href: "/blog/glp1-side-effects",
  },
  {
    category: "Men's Health",
    title: "ED at 30: Why More Men Are Experiencing It (And What Actually Works)",
    excerpt: "Erectile dysfunction affects 1 in 4 men under 40. Stress, lifestyle, and hormones all play a role. Here's the full picture.",
    readTime: "6 min read",
    href: "/blog/ed-in-young-men",
  },
  {
    category: "Skincare",
    title: "Tretinoin 101: Why It's The Only Anti-Aging Ingredient That Actually Works",
    excerpt: "Retinol is sold everywhere. Tretinoin is prescription-only. One has clinical evidence. Here's why it matters.",
    readTime: "5 min read",
    href: "/blog/tretinoin-vs-retinol",
  },
  {
    category: "Pricing",
    title: "GLP-1 Telehealth in 2026: How to Find a Platform You Can Trust",
    excerpt: "What to look for before enrolling: what's included in the price, whether there are membership fees, and how refund policies work.",
    readTime: "8 min read",
    href: "/blog/glp1-telehealth-how-to-choose",
  },
  {
    category: "Weight Loss",
    title: "Does Compounded Semaglutide Actually Work?",
    excerpt: "Same active ingredient. Different manufacturer. Here's what the research says — and what it doesn't.",
    readTime: "7 min read",
    href: "/blog/compounded-semaglutide",
  },
  {
    category: "Women's Health",
    title: "Hair Loss After 40: The Hormonal Connection Most Doctors Miss",
    excerpt: "Thyroid, estrogen, DHT — female hair loss is complex. Here's what's actually causing it and the treatments that work.",
    readTime: "6 min read",
    href: "/blog/female-hair-loss-hormones",
  },
];

const categories = ["All", "Weight Loss", "Men's Health", "Women's Health", "Skincare", "Pricing"];

const Blog = () => {
  useSEO(SEO_CONFIGS.blog);
  const [nlEmail, setNlEmail] = useState("");
  const [nlSending, setNlSending] = useState(false);
  const [nlDone, setNlDone] = useState(false);

  const subscribeNewsletter = async () => {
    if (!nlEmail.includes("@")) return;
    setNlSending(true);
    try {
      await fetch("/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: nlEmail }),
      });
      setNlDone(true);
    } catch { /* silent fail */ } finally { setNlSending(false); }
  };

  return (
  <PageLayout title="Real Health Blog">
    {/* Hero */}
    <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
      <div className="max-w-[1280px] mx-auto fade-up">
        <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3.5">Real Health Blog</div>
        <h1 className="font-display font-black leading-[1.05] text-warm-800 text-[clamp(2rem,4vw,3rem)] mb-3 max-w-[620px]">
          Evidence-Based Health.<br />
          <span className="text-red">No Hype. No Fluff.</span>
        </h1>
        <p className="text-[0.9rem] text-warm-600 max-w-[460px]">
          Written and reviewed by board-certified physicians. Everything we publish is factual, sourced, and honest about what works and what doesn't.
        </p>
      </div>
    </div>

    <div className="bg-background px-5 md:px-12 pt-10 pb-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10 fade-up">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`text-[0.78rem] font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                i === 0
                  ? "bg-red border-red text-primary-foreground"
                  : "border-warm-200 text-warm-600 hover:border-red hover:text-red"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {posts.filter((p) => p.featured).map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="block bg-warm-800 rounded-2xl overflow-hidden mb-8 group hover:shadow-hover transition-shadow fade-up"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red text-primary-foreground text-[0.62rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-[0.72rem] text-white/40 font-semibold tracking-wider uppercase">{post.category}</span>
              </div>
              <h2 className="font-display font-black text-white text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.15] mb-3 max-w-[700px] group-hover:text-red transition-colors">
                {post.title}
              </h2>
              <p className="text-[0.88rem] text-white/60 leading-[1.7] max-w-[600px] mb-5">{post.excerpt}</p>
              <div className="flex items-center gap-3">
                <span className="text-[0.78rem] text-white/40">{post.readTime}</span>
                <span className="text-red text-[0.82rem] font-semibold flex items-center gap-1">
                  Read Article <ChevronRight size={14} />
                </span>
              </div>
            </div>
          </a>
        ))}

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 fade-up">
          {posts.filter((p) => !p.featured).map((post) => (
            <a
              key={post.title}
              href={post.href}
              className="bg-card border border-warm-100 rounded-2xl p-6 hover:border-red hover:shadow-soft group transition-all block"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-red">{post.category}</span>
                <span className="text-warm-200">·</span>
                <span className="text-[0.68rem] text-warm-400">{post.readTime}</span>
              </div>
              <h3 className="font-display font-bold text-warm-800 text-[1.05rem] leading-[1.3] mb-2 group-hover:text-red transition-colors">
                {post.title}
              </h3>
              <p className="text-[0.8rem] text-warm-600 leading-[1.65] mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-1 text-[0.78rem] font-semibold text-warm-400 group-hover:text-red transition-colors">
                Read More <ChevronRight size={13} />
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 bg-red rounded-2xl p-8 md:p-10 text-center fade-up">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-3">Stay Informed</div>
          <h3 className="font-display font-black text-primary-foreground text-2xl mb-3">
            Real Health. In Your Inbox.
          </h3>
          <p className="text-[0.85rem] text-primary-foreground/70 mb-6 max-w-[360px] mx-auto">
            Evidence-based health insights, new treatment guides, and no spam. Unsubscribe anytime.
          </p>
          <div className="flex gap-3 justify-center flex-wrap max-w-[440px] mx-auto">
            <input type="email" value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && subscribeNewsletter()} placeholder="your@email.com" className="flex-1 min-w-[200px] border-0 rounded-lg px-4 py-2.5 text-[0.85rem] text-warm-800 focus:outline-none" />
            {nlDone ? (
              <div className="flex items-center gap-2 text-white font-semibold text-[0.85rem] whitespace-nowrap"><CheckCircle size={16} /> Subscribed!</div>
            ) : (
              <button onClick={subscribeNewsletter} disabled={nlSending || !nlEmail.includes("@")} className="bg-warm-800 hover:bg-black disabled:opacity-60 text-white font-bold px-6 py-2.5 rounded-lg text-[0.85rem] transition-colors whitespace-nowrap flex items-center gap-1.5">
                {nlSending ? <><Loader2 size={14} className="animate-spin" /> Subscribing...</> : "Subscribe →"}
              </button>
            )}
          </div>
          <p className="text-[0.68rem] text-primary-foreground/40 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  </PageLayout>
  );
};

export default Blog;
