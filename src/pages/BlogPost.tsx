import PageLayout from "@/components/realcare/PageLayout";
import { ChevronRight } from "lucide-react";

// Placeholder blog post data — in production replace with CMS (Sanity, Contentful, etc.)
// or Supabase blog_posts table
const POSTS: Record<string, {
  title: string;
  category: string;
  readTime: string;
  published: string;
  author: string;
  authorRole: string;
  intro: string;
  sections: { heading: string; body: string }[];
  disclaimer?: string;
  related: { title: string; href: string; category: string }[];
}> = {
  "semaglutide-vs-tirzepatide": {
    title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?",
    category: "Weight Loss",
    readTime: "6 min read",
    published: "April 10, 2026",
    author: "Dr. Sarah Chen, MD",
    authorRole: "Board-Certified Internal Medicine · Real Care Provider",
    intro: "Both semaglutide and tirzepatide are GLP-1 medications that have transformed weight loss medicine. But they're not identical — and the difference matters when choosing your treatment. Here's an honest, evidence-based breakdown.",
    sections: [
      {
        heading: "What Is Semaglutide?",
        body: "Semaglutide is a GLP-1 receptor agonist — a medication that mimics a naturally occurring hormone that regulates appetite and blood sugar. It's the active ingredient in Ozempic® (approved for type 2 diabetes) and Wegovy® (approved for chronic weight management). In clinical trials, patients on semaglutide lost an average of 14.9% of body weight over 68 weeks. Compounded semaglutide — available through Real Care — uses the same active ingredient as these brand-name medications but is prepared by licensed U.S. compounding pharmacies.",
      },
      {
        heading: "What Is Tirzepatide?",
        body: "Tirzepatide is a dual agonist — it activates both GLP-1 and GIP receptors. GIP is another gut hormone involved in appetite and fat storage. This dual mechanism appears to produce stronger weight loss effects. In the SURMOUNT-1 trial, patients on the highest dose of tirzepatide lost an average of 20.9% of body weight — significantly more than semaglutide. Tirzepatide is the active ingredient in Mounjaro® (diabetes) and Zepbound® (weight loss). Compounded tirzepatide is available through Real Care at a fraction of the brand-name cost.",
      },
      {
        heading: "Head-to-Head: The Key Differences",
        body: "Weight loss: Tirzepatide generally produces greater average weight loss (20.9% vs. 14.9% in trials). Side effects: Both cause similar GI effects — nausea, constipation, and reduced appetite. Tirzepatide may cause slightly less nausea at equivalent doses. Cost: Both compounded versions are significantly cheaper than brand-name alternatives. At Real Care, semaglutide starts at $179/mo and tirzepatide at $349/mo. Format: Both are available as weekly injections. Oral/sublingual options exist for semaglutide.",
      },
      {
        heading: "Which Should You Choose?",
        body: "Your provider will make this recommendation based on your health history, prior medication experience, and weight loss goals. In general: if you've tried GLP-1 medications before without adequate results, tirzepatide may be worth the step up. If you're new to GLP-1 therapy, semaglutide is a proven starting point with a longer safety track record. The best medication is the one your provider prescribes based on your complete clinical picture — not just the one with the higher average in clinical trials.",
      },
      {
        heading: "The Bottom Line",
        body: "Both medications work. Tirzepatide produces higher average weight loss in trials. Semaglutide has a longer safety record and more real-world data. Real Care providers can prescribe either — the decision is clinical, not commercial.",
      },
    ],
    disclaimer: "Clinical trial data referenced is from FDA-approved semaglutide (STEP 1 trial) and FDA-approved tirzepatide (SURMOUNT-1 trial). Compounded versions use the same active ingredients but are not FDA-approved as finished products and have not been independently studied to the same extent. Individual results vary. This article is for informational purposes only and does not constitute medical advice.",
    related: [
      { title: "GLP-1 Side Effects: What To Expect and How To Manage Them", href: "/blog/glp1-side-effects", category: "Weight Loss" },
      { title: "Does Compounded Semaglutide Actually Work?", href: "/blog/compounded-semaglutide", category: "Weight Loss" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
};

const BlogPost = () => {
  const slug = window.location.pathname.split("/blog/")[1] || "";
  const post = POSTS[slug];

  if (!post) {
    return (
      <PageLayout title="Article Not Found">
        <div className="min-h-[60vh] flex items-center justify-center px-5 py-14 bg-warm-50">
          <div className="text-center">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-red mb-3">Article Not Found</div>
            <h1 className="font-display font-black text-warm-800 text-2xl mb-4">This article doesn't exist yet.</h1>
            <a href="/blog" className="text-red font-semibold hover:underline">← Back to Blog</a>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={post.title}>
      {/* Hero */}
      <div className="bg-warm-50 border-b border-warm-100 px-5 md:px-12 py-14">
        <div className="max-w-[780px] mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <a href="/blog" className="text-[0.72rem] text-warm-400 hover:text-red transition-colors">Blog</a>
            <span className="text-warm-200">›</span>
            <span className="text-[0.72rem] font-semibold text-red">{post.category}</span>
          </div>
          <h1 className="font-display font-black text-warm-800 leading-[1.1] text-[clamp(1.8rem,3.5vw,2.8rem)] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <div className="text-[0.82rem] font-semibold text-warm-800">{post.author}</div>
              <div className="text-[0.72rem] text-warm-400">{post.authorRole}</div>
            </div>
            <div className="w-px h-8 bg-warm-100 hidden sm:block" />
            <div className="text-[0.72rem] text-warm-400">{post.published}</div>
            <div className="text-[0.72rem] text-warm-400">·</div>
            <div className="text-[0.72rem] text-warm-400">{post.readTime}</div>
          </div>
        </div>
      </div>

      <div className="bg-background px-5 md:px-12 py-12">
        <div className="max-w-[780px] mx-auto">

          {/* Intro */}
          <p className="text-[1rem] text-warm-700 leading-[1.8] mb-10 font-medium border-l-4 border-red pl-5">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display font-bold text-warm-800 text-xl mb-3">{section.heading}</h2>
                <p className="text-[0.9rem] text-warm-600 leading-[1.85]">{section.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-red rounded-2xl p-8 text-center">
            <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-primary-foreground/50 mb-2">Take The Next Step</div>
            <h3 className="font-display font-black text-primary-foreground text-2xl mb-3">
              Find Out Which Treatment Is Right For You
            </h3>
            <p className="text-[0.85rem] text-primary-foreground/70 mb-5">
              A licensed provider reviews your intake and recommends the right treatment — within 24 hours.
            </p>
            <a href="/health-check" className="inline-block bg-background text-red font-bold px-8 py-3 rounded-lg hover:bg-warm-50 transition-colors">
              Take Your Free Health Check →
            </a>
          </div>

          {/* Disclaimer */}
          {post.disclaimer && (
            <div className="mt-8 bg-warm-50 border border-warm-100 rounded-xl p-5">
              <div className="text-[0.62rem] font-bold tracking-[0.14em] uppercase text-warm-400 mb-2">Medical Disclaimer</div>
              <p className="text-[0.75rem] text-warm-500 leading-[1.7]">{post.disclaimer}</p>
            </div>
          )}

          {/* Related articles */}
          {post.related.length > 0 && (
            <div className="mt-12">
              <div className="text-[0.64rem] font-bold tracking-[0.16em] uppercase text-warm-400 mb-5">Related Articles</div>
              <div className="space-y-3">
                {post.related.map((rel) => (
                  <a key={rel.href} href={rel.href} className="flex items-center justify-between bg-card border border-warm-100 rounded-xl p-4 hover:border-red hover:shadow-soft group transition-all">
                    <div>
                      <div className="text-[0.62rem] font-bold tracking-[0.1em] uppercase text-red mb-1">{rel.category}</div>
                      <div className="text-[0.88rem] font-semibold text-warm-800 group-hover:text-red transition-colors leading-tight">{rel.title}</div>
                    </div>
                    <ChevronRight size={16} className="text-warm-300 group-hover:text-red transition-colors flex-shrink-0 ml-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPost;
