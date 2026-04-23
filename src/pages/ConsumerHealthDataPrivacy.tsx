import LegalPage, { H2, P, UL, LI } from "@/components/realcare/LegalPage";

const ConsumerHealthDataPrivacy = () => (
  <LegalPage
    label="Consumer Health Data"
    title="Consumer Health Data Privacy Notice"
    updated="April 2026"
  >
    <P>
      This notice applies to residents of Washington, Nevada, and Connecticut and describes how
      Real Care collects, uses, and shares your consumer health data under the Washington My
      Health My Data Act, Nevada SB 370, and the Connecticut Data Privacy Act. It supplements
      our general Privacy Policy.
    </P>

    <H2>Health Data We Collect</H2>
    <UL>
      <LI>Weight, height, and other body measurements</LI>
      <LI>Medical history and current conditions</LI>
      <LI>Symptoms reported during your health check</LI>
      <LI>Medications, allergies, and supplements</LI>
      <LI>Lab results ordered through our provider network</LI>
    </UL>

    <H2>How We Use Your Health Data</H2>
    <UL>
      <LI>Connecting you with a licensed provider for evaluation and prescribing</LI>
      <LI>Coordinating treatment and follow-up care</LI>
      <LI>Communicating with you about your treatment plan</LI>
      <LI>Processing payment and shipping medication</LI>
    </UL>

    <H2>Who We Share Your Health Data With</H2>
    <UL>
      <LI>OpenLoop Health — our network of licensed providers</LI>
      <LI>State-licensed pharmacies that dispense your medication</LI>
      <LI>Stripe — for secure payment processing</LI>
      <LI>Service providers under written confidentiality obligations</LI>
    </UL>
    <P>We do not sell your consumer health data.</P>

    <H2>Your Rights</H2>
    <UL>
      <LI>Access the consumer health data we hold about you</LI>
      <LI>Request correction of inaccurate data</LI>
      <LI>Request deletion of your data</LI>
      <LI>Request a portable copy of your data</LI>
      <LI>Withdraw consent to processing at any time</LI>
    </UL>

    <H2>How to Exercise Your Rights</H2>
    <P>
      Email{" "}
      <a href="mailto:privacy@realcare.com" className="text-red underline">
        privacy@realcare.com
      </a>{" "}
      with your request. We will respond within 30 days. We may need to verify your identity
      before fulfilling the request.
    </P>

    <H2>State-Specific Rights</H2>
    <P>
      Residents of Washington, Nevada, and Connecticut have enhanced rights under their state
      consumer health data laws, including the right to lodge a complaint with their state
      attorney general.
    </P>

    <H2>Effective Date</H2>
    <P>This notice is effective April 2026.</P>
  </LegalPage>
);

export default ConsumerHealthDataPrivacy;
