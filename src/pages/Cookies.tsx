import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const Cookies = () => (
  <LegalPage label="Cookies" title="Cookies Policy" updated="April 2026">
    <H2>What Are Cookies</H2>
    <P>
      Cookies are small text files placed on your device when you visit a website. They are widely
      used to make websites work more efficiently, remember your preferences, and provide
      information to site owners.
    </P>

    <H2>Cookies We Use</H2>
    <H3>Essential Cookies</H3>
    <P>
      Required for core site functionality such as authentication, session management, and secure
      checkout. These cookies cannot be disabled.
    </P>
    <H3>Analytics Cookies</H3>
    <P>
      Help us understand how visitors use Real Care so we can improve the experience. We use Google
      Analytics 4 (GA4) for aggregated traffic and usage analytics.
    </P>
    <H3>Marketing Cookies</H3>
    <P>
      Used to deliver relevant ads and measure the effectiveness of marketing campaigns. We use
      Meta Pixel and Klaviyo to support these activities.
    </P>

    <H2>Third-Party Cookies</H2>
    <UL>
      <LI>
        <strong>Google Analytics</strong> — site analytics. Opt out at{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" className="text-red underline">
          tools.google.com/dlpage/gaoptout
        </a>
        .
      </LI>
      <LI>
        <strong>Meta Pixel</strong> — ad measurement and retargeting. Manage at{" "}
        <a href="https://www.facebook.com/settings?tab=ads" className="text-red underline">
          facebook.com/settings
        </a>
        .
      </LI>
      <LI>
        <strong>Klaviyo</strong> — email marketing personalization and attribution.
      </LI>
    </UL>

    <H2>How to Control Cookies</H2>
    <P>
      Most browsers allow you to refuse or delete cookies through their settings. Disabling
      essential cookies may prevent parts of Real Care from functioning properly.
    </P>

    <H2>CCPA Rights for California Residents</H2>
    <P>
      California residents have the right to request deletion of personal information collected via
      cookies and to opt out of the sale or sharing of that information. To exercise your rights,
      email{" "}
      <a href="mailto:privacy@realcare.com" className="text-red underline">
        privacy@realcare.com
      </a>
      .
    </P>

    <H2>Contact</H2>
    <P>
      Questions about this Cookies Policy can be sent to{" "}
      <a href="mailto:privacy@realcare.com" className="text-red underline">
        privacy@realcare.com
      </a>
      .
    </P>
  </LegalPage>
);

export default Cookies;
