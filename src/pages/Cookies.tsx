import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const Cookies = () => (
  <PageLayout title="Cookies Policy">
    <LegalPage label="Legal" title="Cookies Policy" updated="April 1, 2026">
      <P>This Cookies Policy explains how Real Care Inc. ("Real Care," "we," "us," or "our") uses cookies and similar tracking technologies on our website at realcare.com. By using our site, you consent to our use of cookies as described in this policy.</P>

      <H2>1. What Are Cookies?</H2>
      <P>Cookies are small text files placed on your device (computer, tablet, or smartphone) when you visit a website. They help websites remember your preferences, understand how you use the site, and provide a better experience. Cookies cannot run programs or deliver viruses to your device.</P>
      <P>We also use similar technologies such as web beacons, pixels, and local storage that function similarly to cookies. This policy refers to all of these collectively as "cookies."</P>

      <H2>2. Cookies We Use</H2>

      <H3>2.1 Essential Cookies</H3>
      <P>These cookies are strictly necessary for the website to function. They cannot be disabled without affecting site functionality.</P>
      <UL>
        <LI><strong>Session cookies:</strong> Maintain your login state in the patient portal while you browse</LI>
        <LI><strong>Security cookies:</strong> Protect against cross-site request forgery (CSRF) attacks</LI>
        <LI><strong>Load balancing cookies:</strong> Ensure stable site performance during high traffic</LI>
      </UL>
      <P>Legal basis: Necessary for the performance of a contract (providing our services to you).</P>

      <H3>2.2 Analytics Cookies</H3>
      <P>These cookies help us understand how visitors interact with our website so we can improve it.</P>
      <UL>
        <LI><strong>Google Analytics 4 (GA4):</strong> Tracks page views, session duration, traffic sources, and user behavior. Data is anonymized where possible. Provider: Google LLC. Duration: Up to 2 years.</LI>
      </UL>
      <P>Legal basis: Legitimate interests (improving our website and services). You may opt out at any time.</P>

      <H3>2.3 Marketing & Advertising Cookies</H3>
      <P>These cookies are used to deliver relevant advertising and track the effectiveness of our marketing campaigns.</P>
      <UL>
        <LI><strong>Meta Pixel (Facebook/Instagram):</strong> Tracks conversions from Meta ads and helps us reach relevant audiences. Provider: Meta Platforms Inc. Duration: Up to 90 days.</LI>
        <LI><strong>Klaviyo:</strong> Tracks email engagement and links email activity to website behavior for personalized communications. Provider: Klaviyo Inc. Duration: Up to 2 years.</LI>
      </UL>
      <P>Legal basis: Consent. You may withdraw consent at any time using the methods described in Section 5.</P>

      <H2>3. Third-Party Cookies</H2>
      <P>Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties whose cookies may be present on our site include:</P>
      <UL>
        <LI><strong>Google LLC</strong> (Analytics) — privacy.google.com</LI>
        <LI><strong>Meta Platforms Inc.</strong> (Advertising) — facebook.com/privacy</LI>
        <LI><strong>Klaviyo Inc.</strong> (Email tracking) — klaviyo.com/legal/privacy-policy</LI>
        <LI><strong>Stripe Inc.</strong> (Payment processing) — stripe.com/privacy</LI>
      </UL>

      <H2>4. Cookie Duration</H2>
      <P>Cookies on our site fall into two categories by duration:</P>
      <UL>
        <LI><strong>Session cookies:</strong> Deleted automatically when you close your browser</LI>
        <LI><strong>Persistent cookies:</strong> Remain on your device for a set period (days to 2 years depending on the cookie) or until you delete them manually</LI>
      </UL>

      <H2>5. How to Control Cookies</H2>
      <P>You have several options to control or limit how we use cookies:</P>
      <UL>
        <LI><strong>Browser settings:</strong> Most browsers allow you to block or delete cookies. Visit your browser's help section for instructions. Note that blocking essential cookies may affect site functionality.</LI>
        <LI><strong>Google Analytics opt-out:</strong> Install the Google Analytics Opt-out Browser Add-on at tools.google.com/dlpage/gaoptout</LI>
        <LI><strong>Meta ad preferences:</strong> Manage your ad preferences at facebook.com/ads/preferences</LI>
        <LI><strong>Email unsubscribe:</strong> All marketing emails from Klaviyo include an unsubscribe link</LI>
      </UL>

      <H2>6. California Residents — CCPA Rights</H2>
      <P>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):</P>
      <UL>
        <LI>The right to know what personal information is collected, used, shared, or sold</LI>
        <LI>The right to delete personal information collected from you</LI>
        <LI>The right to opt-out of the sale of your personal information (Real Care does not sell personal information)</LI>
        <LI>The right to non-discrimination for exercising your CCPA rights</LI>
      </UL>
      <P>To exercise these rights, email privacy@realcare.com with the subject line "CCPA Request."</P>

      <H2>7. Updates to This Policy</H2>
      <P>We may update this Cookies Policy from time to time to reflect changes in technology, regulation, or our business practices. We will post the updated policy on this page with a revised "last updated" date. We encourage you to review this policy periodically.</P>

      <H2>8. Contact Us</H2>
      <P>If you have questions about our use of cookies, contact us at:</P>
      <UL>
        <LI>Email: privacy@realcare.com</LI>
        <LI>Mail: Real Care Inc., Jacksonville, FL</LI>
      </UL>
    </LegalPage>
  </PageLayout>
);

export default Cookies;
