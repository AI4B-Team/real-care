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
  "low-testosterone-signs": {
    title: "7 Signs of Low Testosterone (And What To Do About It)",
    category: "Men's Health",
    readTime: "5 min read",
    published: "April 12, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Low testosterone affects roughly 40% of men over 45 — but it's not just an older man's problem. Symptoms are easy to miss or mistake for stress, poor sleep, or aging. Here's how to know when something more is going on.",
    sections: [
      { heading: "1. Persistent Fatigue That Sleep Doesn't Fix", body: "Testosterone plays a key role in energy regulation. If you're sleeping 7-8 hours and still waking up exhausted — not just tired, but genuinely depleted — low T may be a factor. This is different from normal tiredness. Patients with low testosterone often describe it as a heaviness or fog that doesn't lift, even after rest." },
      { heading: "2. Declining Muscle Mass Despite Exercise", body: "Testosterone is the primary anabolic hormone that drives muscle protein synthesis. When levels drop, building or even maintaining muscle becomes significantly harder. If you're training consistently but your body composition is moving in the wrong direction — less muscle, more fat, especially around the midsection — that's a pattern worth investigating." },
      { heading: "3. Reduced Sex Drive", body: "Libido is one of the most sensitive indicators of testosterone levels. A gradual but noticeable decline in sexual interest — not situational, but persistent — is one of the earliest and most common signs of low T. This is different from occasional stress-related changes. Low testosterone produces a sustained flatness in desire that doesn't correlate with external circumstances." },
      { heading: "4. Difficulty Getting or Maintaining Erections", body: "Testosterone contributes to erectile function, though it's not the only factor. Low T can reduce the frequency of morning erections, make it harder to achieve erections during sexual activity, and reduce overall sexual satisfaction. If ED is accompanied by low libido and fatigue, the combination strongly suggests a hormonal component worth testing." },
      { heading: "5. Mood Changes — Specifically Irritability and Depression", body: "Testosterone influences mood-regulating neurotransmitters including serotonin and dopamine. Men with low T frequently report increased irritability, a shorter fuse, difficulty concentrating, and a general flatness or lack of motivation. Depression is a recognized symptom of low testosterone — and treating the underlying hormonal imbalance often improves mood substantially." },
      { heading: "6. Increased Body Fat — Particularly Visceral Fat", body: "Testosterone and estrogen exist in balance. When testosterone drops, estrogen becomes relatively more dominant, which promotes fat storage — particularly visceral (abdominal) fat. This creates a vicious cycle: adipose tissue converts testosterone to estrogen, further lowering T levels. Weight gain in the belly despite no significant change in diet is a common clinical presentation." },
      { heading: "7. Brain Fog and Difficulty Concentrating", body: "Cognitive function — memory, focus, processing speed — is influenced by testosterone. Many men with low T describe difficulty concentrating, forgetting things they normally wouldn't, or a general mental slowness. This is distinct from normal stress-related distraction and tends to be consistent across contexts." },
      { heading: "What To Do Next", body: "The only way to confirm low testosterone is a blood test. A provider will order a total testosterone test (and often free testosterone, LH, and FSH) and interpret results in the context of your symptoms. Normal reference ranges are broad — some men feel symptoms at levels technically 'within range.' If your symptoms align with what's described above, a telehealth consultation is a fast, private way to get answers. Real Care providers can order labs, interpret results, and recommend treatment if appropriate." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice. Low testosterone is a diagnosed medical condition requiring evaluation by a licensed provider. Do not self-prescribe testosterone or related medications.",
    related: [
      { title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?", href: "/blog/semaglutide-vs-tirzepatide", category: "Weight Loss" },
      { title: "ED in Young Men: Why It's More Common Than You Think", href: "/blog/ed-in-young-men", category: "Men's Health" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "perimenopause-vs-menopause": {
    title: "Perimenopause vs. Menopause: What's Actually Different?",
    category: "Women's Health",
    readTime: "6 min read",
    published: "April 14, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Most women know the word menopause but are surprised to find out what they're actually experiencing — often years earlier — is perimenopause. Here's a clear breakdown of the difference, what to expect, and when treatment makes sense.",
    sections: [
      { heading: "Menopause: The Definition Is Simple", body: "Menopause is technically a single point in time: the day that marks 12 consecutive months without a menstrual period. That's it. Average age is 51 in the United States, though it can occur earlier naturally or as a result of surgery. Everything after that point is called postmenopause. The confusion arises because the years leading up to menopause — when symptoms are often at their most intense — go by a different name." },
      { heading: "Perimenopause: The Transition That Nobody Talks About", body: "Perimenopause is the transition period before menopause. It typically begins 4-8 years before a woman's final period — often starting in the mid-to-late 40s, though it can begin as early as the late 30s. During this time, estrogen and progesterone levels fluctuate erratically rather than declining steadily. This unpredictability is why symptoms can feel so inconsistent and confusing. You might have a normal period one month, a missed period the next, and intense hot flashes the month after." },
      { heading: "Symptoms: What Overlaps and What Doesn't", body: "Both perimenopause and postmenopause share many symptoms: hot flashes and night sweats, sleep disruption, mood changes (irritability, anxiety, depression), vaginal dryness and discomfort, reduced libido, cognitive changes (brain fog, memory), and changes in body composition. What's different in perimenopause: irregular periods are characteristic (absent in postmenopause), hormone levels fluctuate rather than remain consistently low, and symptoms may be more unpredictable cycle-to-cycle. In postmenopause, estrogen levels are consistently low and symptoms often stabilize — though they don't necessarily disappear." },
      { heading: "How It's Diagnosed", body: "Perimenopause is primarily a clinical diagnosis based on symptoms and age. Blood tests measuring FSH (follicle-stimulating hormone) and estradiol can be informative but are not definitive because hormone levels fluctuate significantly during perimenopause — a single test can be misleading. In contrast, postmenopause can be confirmed by 12 consecutive months without menstruation combined with elevated FSH." },
      { heading: "Treatment: Hormone Replacement Therapy (HRT)", body: "Hormone replacement therapy is the most effective treatment for menopausal symptoms at any stage. HRT works by replenishing estrogen (and progesterone for women with a uterus) to reduce symptom burden. Modern bioidentical HRT — available through Real Care — uses hormones chemically identical to those your body produces. The old concerns about HRT (stemming from the 2002 Women's Health Initiative study) have been substantially revised by subsequent research, particularly for women under 60 who start treatment within 10 years of menopause." },
      { heading: "When To Start Treatment", body: "You don't need to wait until you've reached menopause to consider HRT. Many women begin treatment during perimenopause when symptoms are actively disrupting their quality of life — sleep, work, relationships, and mood. A telehealth provider can evaluate your symptoms, order labs if appropriate, and recommend a personalized hormone protocol. Real Care providers specialize in women's hormonal health and are available without an in-person appointment." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice. Hormone therapy should be discussed with a licensed provider who can evaluate your individual health history and risk factors.",
    related: [
      { title: "Female Hair Loss: The Hormonal Connection Nobody Explains", href: "/blog/female-hair-loss-hormones", category: "Women's Health" },
      { title: "GLP-1 Side Effects: What To Expect and How To Manage Them", href: "/blog/glp1-side-effects", category: "Weight Loss" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "glp1-side-effects": {
    title: "GLP-1 Side Effects: What To Expect and How To Manage Them",
    category: "Weight Loss",
    readTime: "7 min read",
    published: "April 16, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "GLP-1 medications work — but they come with side effects that catch many patients off guard. Knowing what's normal, what's manageable, and what warrants a call to your provider makes the difference between giving up too early and reaching your goals.",
    sections: [
      { heading: "The Most Common Side Effects", body: "The majority of GLP-1 side effects are gastrointestinal. In clinical trials, 40-50% of patients reported nausea, making it the most common complaint. Others include constipation (24-35%), diarrhea (9-30%), vomiting (6-24%), and reduced appetite (9-19%). These are dose-dependent — they're most common during dose escalation periods and typically improve as your body adjusts. Most patients who push through the first 4-8 weeks find that GI symptoms diminish significantly." },
      { heading: "Managing Nausea", body: "Nausea is the #1 reason patients discontinue GLP-1 therapy. Most of it is preventable with simple strategies: Eat small, frequent meals rather than large ones. Avoid high-fat, fried, or very spicy foods during the adjustment period. Eat slowly and stop when you feel full — the medication amplifies satiety signals. Inject in the evening so peak blood levels coincide with sleep. Stay well hydrated. If nausea is severe, talk to your provider — anti-nausea medication (ondansetron) can be added to your protocol at no additional cost in some plans." },
      { heading: "Managing Constipation", body: "Constipation is the second most common complaint and is caused by GLP-1's effect on slowing gastric emptying and gut motility. Strategies: Increase water intake significantly (aim for 80-100oz daily). Add soluble fiber (psyllium husk, chia seeds, oatmeal). Take short walks after meals to stimulate motility. A daily magnesium supplement (magnesium citrate 200-400mg) is safe and often effective. If constipation is severe, contact your provider — stool softeners or other interventions can be recommended." },
      { heading: "What's Not Normal — Contact Your Provider If:", body: "While GI symptoms are expected, some signs warrant prompt medical attention: Severe, persistent abdominal pain (particularly upper abdominal pain radiating to the back — this can indicate pancreatitis). Vomiting that prevents you from keeping liquids down for more than 24 hours. Signs of dehydration (dark urine, dizziness, rapid heart rate). Vision changes. Symptoms of low blood sugar if you are also on other diabetes medications. When in doubt, message your provider through the patient portal or contact emergency services if symptoms are severe." },
      { heading: "Muscle Loss: The Side Effect Nobody Talks About", body: "Up to 40-50% of weight lost on GLP-1 medications can come from lean muscle mass rather than fat — particularly without adequate protein intake and resistance training. This matters because muscle loss slows metabolism, making weight maintenance harder long-term. To minimize muscle loss: aim for 1.2-1.6g of protein per kilogram of body weight daily, engage in light resistance training 2-3x per week, and discuss your specific protocol with your Real Care provider. B12 is included in Real Care's semaglutide formulation to support energy and neurological health during treatment." },
      { heading: "Timeline: When Do Side Effects Improve?", body: "Week 1-4: Side effects are typically at their most intense during starting dose and first escalation. Week 4-8: Symptoms begin to diminish as your body adapts to each dose level. By week 8-12: Most patients report significantly reduced GI symptoms. If side effects are still severe at week 12, contact your provider — dose adjustment or a switch in medication format may help. Important: Many patients who stop early due to side effects would have reached full efficacy had they continued through the adjustment period." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice. Individual experiences with GLP-1 medications vary. Always discuss side effects with your prescribing provider before making changes to your treatment plan.",
    related: [
      { title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?", href: "/blog/semaglutide-vs-tirzepatide", category: "Weight Loss" },
      { title: "Does Compounded Semaglutide Actually Work?", href: "/blog/compounded-semaglutide", category: "Weight Loss" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "ed-in-young-men": {
    title: "ED in Young Men: Why It's More Common Than You Think",
    category: "Men's Health",
    readTime: "5 min read",
    published: "April 18, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Erectile dysfunction is often thought of as an older man's problem. It's not. Rates among men under 40 have increased significantly over the past decade — and most cases are treatable. Here's what's actually going on.",
    sections: [
      { heading: "How Common Is ED in Young Men?", body: "Studies suggest that 25-30% of men under 40 experience ED at some point — and the rate has been increasing. A landmark 2013 study in the Journal of Sexual Medicine found that 1 in 4 new ED patients was under 40, and that younger men with ED often had more severe symptoms than older men. The old narrative — that ED is a condition of aging — is factually incorrect." },
      { heading: "The Primary Causes in Men Under 40", body: "In older men, ED is usually vascular — reduced blood flow due to cardiovascular disease or diabetes. In younger men, the causes are different and more varied: Psychological factors (performance anxiety, depression, relationship stress) are the most common cause in men under 30. Pornography-induced ED is increasingly recognized as a real clinical phenomenon. Low testosterone affects men at any age. Lifestyle factors: obesity, sedentary behavior, heavy alcohol use, smoking. Sleep deprivation — chronic poor sleep significantly impacts testosterone and erectile function. Certain medications (antidepressants, blood pressure medications, antihistamines) cause ED as a side effect." },
      { heading: "Psychological vs. Physical: How to Tell", body: "A simple clinical indicator: if you experience morning erections but have difficulty during sexual activity, the cause is likely psychological or situational rather than physical. Consistent absence of morning erections suggests a physiological component worth investigating. Your provider can help distinguish between the two with a comprehensive intake and, if needed, targeted lab work." },
      { heading: "Treatment Options", body: "ED in young men is highly treatable — often more responsive to treatment than in older men because the underlying physiology is typically intact. PDE5 inhibitors (sildenafil, tadalafil): First-line treatment for most men regardless of age. Effective in 70-80% of cases. Available in multiple formats including chewable options. Lifestyle modification: Exercise, weight loss, reduced alcohol, and sleep improvement can resolve ED without medication in some cases. Hormone therapy: If low testosterone is contributing, TRT can improve erectile function significantly. Psychological support: Cognitive-behavioral therapy and sex therapy are highly effective for psychological ED. Real Care providers can prescribe PDE5 inhibitors, assess for hormonal causes, and coordinate care for the full range of contributing factors." },
      { heading: "Why Men Don't Seek Help", body: "Despite high prevalence, most young men with ED don't see a doctor — stigma, embarrassment, and the assumption that 'it'll go away on its own' are the primary barriers. Telehealth has substantially lowered this barrier. A private online consultation, no waiting room, discreet delivery. There is no benefit to waiting — untreated ED tends to worsen, and the psychological impact compounds over time." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice. ED can be a sign of underlying health conditions. Always discuss symptoms with a licensed provider.",
    related: [
      { title: "7 Signs of Low Testosterone (And What To Do About It)", href: "/blog/low-testosterone-signs", category: "Men's Health" },
      { title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?", href: "/blog/semaglutide-vs-tirzepatide", category: "Weight Loss" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "tretinoin-vs-retinol": {
    title: "Tretinoin vs. Retinol: The Difference That Actually Matters",
    category: "Skincare",
    readTime: "5 min read",
    published: "April 20, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Retinol is in every drugstore. Tretinoin requires a prescription. Both are forms of Vitamin A — so what's actually different? The answer matters more than most skincare articles admit.",
    sections: [
      { heading: "The Fundamental Difference", body: "Retinol and tretinoin are both retinoids — derivatives of Vitamin A that work by binding to retinoic acid receptors in the skin. The key difference is bioavailability. Tretinoin (retinoic acid) is the active form — it works immediately on skin cells. Retinol is a precursor that must be converted by the skin into retinoic acid before it's active. This conversion process is inefficient — estimates suggest only 1-2% of applied retinol actually becomes the active retinoic acid in your skin. This explains why tretinoin produces results faster and more reliably." },
      { heading: "Clinical Evidence: What the Research Shows", body: "Tretinoin has decades of clinical evidence behind it. It's FDA-approved for acne and photoaging (fine lines, wrinkles, age spots). Studies consistently show meaningful improvement in 12-24 weeks. Retinol has limited independent clinical trial data — most studies showing retinol's effects use it at concentrations (0.1-1%) that don't translate to most over-the-counter products, which often contain 0.01-0.03%. The skincare industry's retinol marketing is built on tretinoin's evidence base, not retinol's." },
      { heading: "Irritation: The Honest Comparison", body: "Tretinoin causes more initial irritation than retinol — redness, peeling, and dryness in the first 4-8 weeks are common. This is often called the 'retinization' period. But this shouldn't be a reason to avoid it. Irritation can be minimized by starting with a lower concentration (0.025%), using every other night, applying a moisturizer buffer, and building up slowly. Most patients who stick with tretinoin through the adjustment period find that irritation diminishes substantially after 8-12 weeks. Custom compounded formulations — available through Real Care — can include soothing ingredients like niacinamide and hyaluronic acid to reduce the irritation curve." },
      { heading: "Who Should Use Which", body: "Retinol: Good starting point for very sensitive skin, those new to retinoids, or those primarily interested in mild anti-aging maintenance with minimal side effects. Tretinoin: Better for active acne, significant photoaging, uneven skin tone, or anyone who wants clinically proven results rather than marketing claims. If you've been using retinol for 6+ months without clear results, tretinoin is the logical next step." },
      { heading: "How To Get Tretinoin", body: "Tretinoin is a prescription medication — you can't buy it over the counter in the United States. A licensed dermatologist or telehealth provider can evaluate your skin concerns and prescribe an appropriate formulation. Real Care providers prescribe custom compounded tretinoin formulas that can include complementary ingredients (niacinamide, azelaic acid, hyaluronic acid) tailored to your skin type and concerns. Starting at $35/month — far less than most medical-grade OTC alternatives that don't contain actual prescription-strength actives." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice or a prescription. Tretinoin is a prescription medication. Skin response to retinoids varies significantly between individuals.",
    related: [
      { title: "Female Hair Loss: The Hormonal Connection Nobody Explains", href: "/blog/female-hair-loss-hormones", category: "Women's Health" },
      { title: "Perimenopause vs. Menopause: What's Actually Different?", href: "/blog/perimenopause-vs-menopause", category: "Women's Health" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "real-care-vs-hims-vs-ro": {
    title: "Real Care vs. Hims vs. Ro: The Honest Pricing Comparison",
    category: "Pricing",
    readTime: "7 min read",
    published: "April 22, 2026",
    author: "Real Care Medical Team",
    authorRole: "Real Care Inc.",
    intro: "GLP-1 telehealth is a crowded market — and the pricing is deliberately confusing. This is an honest, line-by-line comparison of what you actually pay at Real Care, Hims & Hers, and Ro. No affiliate spin. Just the math.",
    sections: [
      { heading: "The Hidden Cost: Membership Fees", body: "The biggest difference most people miss when comparing telehealth platforms is the membership fee. Hims & Hers charges $149/month for their Weight Loss Membership — separate from the cost of medication. Ro charges $145/month for their Body Program membership — again, on top of medication. Real Care charges $0 in membership fees. Ever. This is not a promotion or introductory rate. It's the permanent model. One price covers your doctor consultation, medication, and free shipping. Nothing extra." },
      { heading: "GLP-1 Weight Loss: True Cost Comparison", body: "Real Care: $179 first month, then $299/mo (no membership fee). 3-month plan from $209/mo. Hims: medication starts at ~$199/month + $149/month membership = $348+/month true cost. Ro: medication starts at ~$199/month + $145/month membership = $344+/month true cost. Annual difference: Hims and Ro patients pay $1,740+ more per year in membership fees alone compared to Real Care — for the same class of medication. This is money that funds Hims & Hers' 2,400-person payroll and investor returns, not your care." },
      { heading: "What's Actually Included", body: "Real Care: Doctor consultation included. Medication included. Free discreet shipping included. 24/7 provider messaging included. No membership fee. HSA/FSA accepted. Hims: Doctor consultation included in membership. Medication priced separately. Shipping included. Support available. Membership required. Ro: Doctor consultation included in Body Program. Medication priced separately. Shipping included. Insurance concierge available (adds significant value if you have insurance coverage). Membership required." },
      { heading: "Where Ro Has an Advantage", body: "Ro's insurance concierge service is genuinely valuable if you have insurance coverage for GLP-1 medications. For patients with coverage, Ro can navigate prior authorization and get branded Wegovy at $50-$90/month copay — potentially far cheaper than any compounded option. If you have insurance coverage for GLP-1 medications, check Ro's insurance concierge first. Real Care is a cash-pay platform and does not navigate insurance. If you do not have insurance coverage — which applies to most patients in this market — Real Care's pricing is the most transparent in the space." },
      { heading: "The Co-Ed Differentiator", body: "Real Care is the only major telehealth platform built for both men and women on a single platform. Hims serves men (and Hers serves women) on separate brands with separate websites. Ro serves both but on a single brand without a unified experience." },
      { heading: "The Bottom Line", body: "If you have insurance that covers GLP-1 medications: check Ro's insurance concierge first. If you are paying cash and want the most transparent pricing with no membership fees: Real Care's model is straightforward — one price, everything included. This comparison reflects publicly available pricing as of April 2026 and may change. Always verify current pricing directly with each provider." },
    ],
    disclaimer: "Pricing data reflects publicly available information as of April 2026. Real Care is the publisher of this article. We have attempted to represent competitor pricing accurately but encourage readers to verify directly with each platform. This is not independent journalism.",
    related: [
      { title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?", href: "/blog/semaglutide-vs-tirzepatide", category: "Weight Loss" },
      { title: "GLP-1 Side Effects: What To Expect and How To Manage Them", href: "/blog/glp1-side-effects", category: "Weight Loss" },
      { title: "Does Compounded Semaglutide Actually Work?", href: "/blog/compounded-semaglutide", category: "Weight Loss" },
    ],
  },
  "compounded-semaglutide": {
    title: "Does Compounded Semaglutide Actually Work?",
    category: "Weight Loss",
    readTime: "6 min read",
    published: "April 24, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Compounded semaglutide costs a fraction of brand-name Wegovy or Ozempic. The obvious question is: does it actually work? The answer requires understanding what compounding is, what the FDA actually says, and what the clinical evidence shows.",
    sections: [
      { heading: "What Is Compounded Semaglutide?", body: "Compounded semaglutide is semaglutide prepared by a state-licensed compounding pharmacy rather than manufactured by Novo Nordisk (the maker of Ozempic® and Wegovy®). It contains the same active ingredient — semaglutide — at the same molecular structure. The compounding pharmacy prepares it to meet an individual patient's specific prescription. Compounded medications have a long history in healthcare — they're used when commercial products are unavailable, unsuitable for a specific patient, or cost-prohibitive." },
      { heading: "What the FDA Actually Says", body: "Compounded semaglutide is not FDA-approved as a finished drug product. This is true — but it's also true of every compounded medication, including IV drips prepared in hospital pharmacies, custom topical creams, and thousands of other compounded drugs that are standard of care. The FDA does not evaluate compounded medications for safety, efficacy, or quality before dispensing. However, compounding pharmacies operate under state pharmacy board oversight and must meet USP (United States Pharmacopeia) standards. Real Care works only with licensed 503A compounding pharmacies — the highest quality tier." },
      { heading: "Does It Have the Same Active Ingredient?", body: "Yes — if sourced from a legitimate licensed pharmacy. Compounded semaglutide uses semaglutide base (or semaglutide sodium or acetate salt forms) as the active pharmaceutical ingredient. A legitimate pharmacy sources this from FDA-registered API suppliers and can provide Certificates of Analysis confirming purity and concentration. Patients should be wary of compounded GLP-1 medications from unlicensed, unverified sources — the risk of underdosing, contamination, or substituted ingredients is real in the unregulated gray market." },
      { heading: "What Do Patients Actually Experience?", body: "Patient-reported outcomes with compounded semaglutide mirror the clinical trial data for branded semaglutide. Reviews across telehealth platforms consistently show: appetite suppression within 1-2 weeks of starting. Weight loss of 1-2 lbs per week during active dose escalation. Blood sugar improvement in patients with prediabetes. Reduction in food noise — the constant preoccupation with food that many patients describe as their biggest obstacle. There are no large-scale independent clinical trials specifically on compounded semaglutide. The assumption of equivalence is based on the identical active ingredient, which is reasonable but not formally proven." },
      { heading: "The Oral Tirzepatide Controversy", body: "A class-action lawsuit has raised legitimate questions about whether compounded oral tirzepatide has a viable absorption pathway. The only FDA-approved oral GLP-1 (Rybelsus, an oral semaglutide) required a specialized absorption enhancer — sodium N-[8-(2-hydroxybenzoyl) aminocaprylate] (SNAC) — to achieve even 1% bioavailability. No published data shows compounded oral tirzepatide achieves therapeutic absorption without similar technology. If you are considering oral tirzepatide specifically, discuss this with your provider." },
      { heading: "The Bottom Line", body: "Compounded semaglutide from a licensed pharmacy contains the same active ingredient as Wegovy® at a fraction of the price ($179 first month, $299/mo after vs. $1,415/mo for brand-name Wegovy). Patient outcomes mirror clinical trial data. The main risks — which are manageable — are pharmacy quality and injection technique. Real Care sources medication only from licensed, verified compounding pharmacies and provides dosing instructions with every shipment." },
    ],
    disclaimer: "This article is for informational purposes only. Compounded semaglutide is not FDA-approved as a finished drug product. Individual results vary. Always discuss medication choices with a licensed provider.",
    related: [
      { title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?", href: "/blog/semaglutide-vs-tirzepatide", category: "Weight Loss" },
      { title: "GLP-1 Side Effects: What To Expect and How To Manage Them", href: "/blog/glp1-side-effects", category: "Weight Loss" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "female-hair-loss-hormones": {
    title: "Female Hair Loss: The Hormonal Connection Nobody Explains",
    category: "Women's Health",
    readTime: "6 min read",
    published: "April 26, 2026",
    author: "Real Care Medical Team",
    authorRole: "Board-Certified Providers · Real Care",
    intro: "Hair loss in women is common, deeply distressing, and frequently misunderstood. Unlike male pattern baldness, female hair loss often has a hormonal root cause that responds well to treatment — if it's properly identified.",
    sections: [
      { heading: "How Common Is Female Hair Loss?", body: "Female pattern hair loss (FPHL) affects approximately 30 million women in the United States. Unlike men, who typically lose hair in a defined receding hairline pattern, women more commonly experience diffuse thinning — particularly at the crown and top of the scalp while the hairline often remains intact. It can begin as early as the 20s and becomes significantly more common after menopause." },
      { heading: "The Hormonal Mechanisms", body: "Several hormonal pathways contribute to female hair loss: Androgens (specifically DHT, a derivative of testosterone) miniaturize hair follicles in genetically susceptible women — the same mechanism as male pattern baldness, just with different expression. Estrogen decline — during perimenopause and menopause, falling estrogen allows androgens to have relatively greater effect on follicles. Thyroid dysfunction — both hypothyroidism and hyperthyroidism cause diffuse hair shedding. PCOS — elevated androgens associated with polycystic ovary syndrome are a significant cause of hair loss in women of reproductive age. Postpartum hormone changes — the dramatic estrogen drop after delivery causes telogen effluvium, a temporary but often alarming hair shedding 2-4 months after birth." },
      { heading: "The Most Common Misdiagnosis", body: "Many women with hormonally-driven hair loss are told their labs are 'normal' and sent home without treatment. Standard lab ranges for thyroid and hormones are broad — a TSH of 3.5 is technically 'normal' but can be the source of significant symptoms in some women. Similarly, testosterone levels that appear 'normal' for a woman can still be causing hair loss if the individual has high androgen sensitivity. An experienced provider looks at the full clinical picture — symptoms, patterns, timing — not just whether a number falls within a reference range." },
      { heading: "Treatment Options That Work", body: "Topical minoxidil: The most evidence-based treatment for FPHL. Prescription-strength minoxidil (5% solution or compounded formulas) significantly outperforms OTC options. Oral minoxidil: Low-dose oral minoxidil (0.25-2.5mg daily) is increasingly prescribed for women and shows strong results in studies with fewer local side effects than topical application. Anti-androgens: Spironolactone is commonly prescribed off-label for women with androgenic hair loss — it blocks DHT at the follicle level. HRT: For perimenopausal and postmenopausal women, restoring estrogen can slow or reverse hormonally-driven hair loss. Compounded combination formulas: Real Care providers can prescribe custom topical formulas combining minoxidil with anti-inflammatory or anti-androgenic agents tailored to your specific presentation." },
      { heading: "When To Seek Evaluation", body: "See a provider if: You notice more hair in the shower drain or on your brush than usual. Your part is widening or your ponytail feels thinner. Hair loss coincides with a hormonal event (postpartum, starting/stopping birth control, perimenopause). Hair loss is accompanied by other symptoms (fatigue, weight changes, acne, irregular periods). Earlier evaluation generally leads to better outcomes — hair follicles that have been dormant for years may not recover even with effective treatment." },
    ],
    disclaimer: "This article is for informational purposes only and does not constitute medical advice. Female hair loss has many potential causes and requires evaluation by a licensed provider for accurate diagnosis and treatment.",
    related: [
      { title: "Perimenopause vs. Menopause: What's Actually Different?", href: "/blog/perimenopause-vs-menopause", category: "Women's Health" },
      { title: "Tretinoin vs. Retinol: The Difference That Actually Matters", href: "/blog/tretinoin-vs-retinol", category: "Skincare" },
      { title: "Real Care vs. Hims vs. Ro: Honest Pricing Comparison", href: "/blog/real-care-vs-hims-vs-ro", category: "Pricing" },
    ],
  },
  "semaglutide-vs-tirzepatide": {
    title: "Semaglutide vs. Tirzepatide: Which GLP-1 Is Right For You?",
    category: "Weight Loss",
    readTime: "6 min read",
    published: "April 10, 2026",
    author: "Dr. Sarah Chen, MD",
    authorRole: "Board-Certified Internal Medicine · Real Care Provider",
    intro: "Both semaglutide and tirzepatide are GLP-1 medications that have transformed weight loss medicine. But they're not identical — and the difference matters when choosing your treatment. Here's an honest, evidence-based breakdown.",
    sections: [
      { heading: "What Is Semaglutide?", body: "Semaglutide is a GLP-1 receptor agonist — a medication that mimics a naturally occurring hormone that regulates appetite and blood sugar. It's the active ingredient in Ozempic® (approved for type 2 diabetes) and Wegovy® (approved for chronic weight management). In clinical trials, patients on semaglutide lost an average of 14.9% of body weight over 68 weeks. Compounded semaglutide — available through Real Care — uses the same active ingredient as these brand-name medications but is prepared by licensed U.S. compounding pharmacies." },
      { heading: "What Is Tirzepatide?", body: "Tirzepatide is a dual agonist — it activates both GLP-1 and GIP receptors. GIP is another gut hormone involved in appetite and fat storage. This dual mechanism appears to produce stronger weight loss effects. In the SURMOUNT-1 trial, patients on the highest dose of tirzepatide lost an average of 20.9% of body weight — significantly more than semaglutide. Tirzepatide is the active ingredient in Mounjaro® (diabetes) and Zepbound® (weight loss). Compounded tirzepatide is available through Real Care at a fraction of the brand-name cost." },
      { heading: "Head-to-Head: The Key Differences", body: "Weight loss: Tirzepatide generally produces greater average weight loss (20.9% vs. 14.9% in trials). Side effects: Both cause similar GI effects — nausea, constipation, and reduced appetite. Tirzepatide may cause slightly less nausea at equivalent doses. Cost: Both compounded versions are significantly cheaper than brand-name alternatives. At Real Care, semaglutide starts at $179 your first month ($299/mo after) and tirzepatide at $279 your first month ($399/mo after). Multi-month plans from $209/mo (sema) and $316/mo (tirz). Format: Both are available as weekly injections. Oral/sublingual options exist for semaglutide." },
      { heading: "Which Should You Choose?", body: "Your provider will make this recommendation based on your health history, prior medication experience, and weight loss goals. In general: if you've tried GLP-1 medications before without adequate results, tirzepatide may be worth the step up. If you're new to GLP-1 therapy, semaglutide is a proven starting point with a longer safety track record. The best medication is the one your provider prescribes based on your complete clinical picture — not just the one with the higher average in clinical trials." },
      { heading: "The Bottom Line", body: "Both medications work. Tirzepatide produces higher average weight loss in trials. Semaglutide has a longer safety record and more real-world data. Real Care providers can prescribe either — the decision is clinical, not commercial." },
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
