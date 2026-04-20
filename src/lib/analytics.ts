/**
 * Real Care Analytics & Tracking
 *
 * Tracks:
 * - Page views (GA4 + Meta Pixel)
 * - Health check started / completed
 * - Checkout initiated / completed
 * - Key product page views
 *
 * Install:
 * 1. Add your GA4 Measurement ID to .env.local as VITE_GA4_ID
 * 2. Add your Meta Pixel ID as VITE_META_PIXEL_ID
 * 3. Add your Klaviyo public key as VITE_KLAVIYO_PUBLIC_KEY
 * 4. Import and call initAnalytics() in main.tsx
 */

const GA4_ID = import.meta.env.VITE_GA4_ID || "";
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || "";
const KLAVIYO_PUBLIC_KEY = import.meta.env.VITE_KLAVIYO_PUBLIC_KEY || "";

// ─── Initialize all tracking ─────────────────────────────────────────────────

export const initAnalytics = (): void => {
  if (typeof window === "undefined") return;

  initGA4();
  initMetaPixel();
  initKlaviyoWeb();
};

// ─── Google Analytics 4 ──────────────────────────────────────────────────────

const initGA4 = (): void => {
  if (!GA4_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA4_ID, {
    page_path: window.location.pathname,
    send_page_view: true,
  });
};

export const trackPageView = (path: string): void => {
  if (typeof window.gtag === "function") {
    window.gtag("config", GA4_ID, { page_path: path });
  }
};

export const trackGA4Event = (eventName: string, params?: Record<string, unknown>): void => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

// ─── Meta (Facebook) Pixel ───────────────────────────────────────────────────

const initMetaPixel = (): void => {
  if (!META_PIXEL_ID) return;

  // Meta Pixel base code
  (function(f: Window, b: Document, e: string, v: string) {
    if ((f as Window & { fbq?: unknown }).fbq) return;
    const n = function(...args: unknown[]) { (n as unknown as { callMethod: (...a: unknown[]) => void }).callMethod
      ? (n as unknown as { callMethod: (...a: unknown[]) => void }).callMethod(...args)
      : (n as unknown as { queue: unknown[] }).queue.push(args); };
    (n as unknown as { push: unknown; loaded: boolean; version: string; queue: unknown[] }).push = n;
    (n as unknown as { loaded: boolean }).loaded = true;
    (n as unknown as { version: string }).version = "2.0";
    (n as unknown as { queue: unknown[] }).queue = [];
    (f as Window & { fbq?: unknown }).fbq = n;
    const t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    const s = b.getElementsByTagName(e)[0];
    s?.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
};

export const trackMetaEvent = (eventName: string, params?: Record<string, unknown>): void => {
  if (typeof window.fbq === "function") {
    window.fbq("track", eventName, params);
  }
};

// ─── Klaviyo Web Tracking ─────────────────────────────────────────────────────

const initKlaviyoWeb = (): void => {
  if (!KLAVIYO_PUBLIC_KEY) return;

  const script = document.createElement("script");
  script.async = true;
  script.type = "text/javascript";
  script.src = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_PUBLIC_KEY}`;
  document.head.appendChild(script);
};

export const klaviyoIdentify = (email: string, properties?: Record<string, unknown>): void => {
  if (typeof window._learnq === "undefined") return;
  window._learnq.push(["identify", { $email: email, ...properties }]);
};

export const klaviyoTrack = (eventName: string, properties?: Record<string, unknown>): void => {
  if (typeof window._learnq === "undefined") return;
  window._learnq.push(["track", eventName, properties]);
};

// ─── High-value conversion events ─────────────────────────────────────────────

/** Track when someone starts the health check */
export const trackHealthCheckStarted = (gender?: string): void => {
  trackGA4Event("health_check_started", { gender });
  trackMetaEvent("Lead", { content_name: "health_check" });
  klaviyoTrack("Health Check Started", { gender });
};

/** Track when health check is completed and submitted */
export const trackHealthCheckCompleted = (treatment: string, email: string): void => {
  trackGA4Event("health_check_completed", { treatment_category: treatment });
  trackMetaEvent("CompleteRegistration", { content_name: treatment });
  klaviyoIdentify(email, { treatmentGoal: treatment });
  klaviyoTrack("Health Check Completed", { treatment });
};

/** Track when checkout is initiated */
export const trackCheckoutStarted = (treatment: string, priceCents: number): void => {
  trackGA4Event("begin_checkout", {
    currency: "USD",
    value: priceCents / 100,
    items: [{ item_name: treatment, price: priceCents / 100 }],
  });
  trackMetaEvent("InitiateCheckout", {
    content_name: treatment,
    value: priceCents / 100,
    currency: "USD",
  });
};

/** Track successful purchase */
export const trackPurchase = (treatment: string, priceCents: number, orderId: string): void => {
  trackGA4Event("purchase", {
    currency: "USD",
    transaction_id: orderId,
    value: priceCents / 100,
    items: [{ item_name: treatment, price: priceCents / 100 }],
  });
  trackMetaEvent("Purchase", {
    content_name: treatment,
    value: priceCents / 100,
    currency: "USD",
  });
};

/** Track product page views for retargeting */
export const trackProductView = (treatment: string): void => {
  trackGA4Event("view_item", { items: [{ item_name: treatment }] });
  trackMetaEvent("ViewContent", { content_name: treatment, content_type: "product" });
};

// ─── Type declarations ────────────────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    _learnq: unknown[];
  }
}
