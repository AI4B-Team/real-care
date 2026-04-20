import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const RefundPolicy = () => (
  <PageLayout title="Refund & Cancellation Policy">
    <LegalPage label="Legal" title="Refund & Cancellation Policy" updated="April 1, 2026">

      <P>At Real Care, we believe in honest, transparent pricing with no hidden fees. This policy explains exactly how cancellations and refunds work — no surprises.</P>

      <H2>1. Cancellation</H2>
      <P>You may cancel your Real Care subscription at any time. There are no cancellation fees and no long-term contracts.</P>
      <H3>How to Cancel</H3>
      <UL>
        <LI>Email our care team at support@realcare.com with the subject line "Cancel My Subscription"</LI>
        <LI>Include your full name and the email address on your account</LI>
        <LI>We will confirm your cancellation in writing within 1 business day</LI>
      </UL>
      <H3>Cancellation Timing</H3>
      <P>To avoid being charged for the next billing cycle, your cancellation request must be received at least <strong>72 hours before your next billing date</strong>. Cancellation requests received within 72 hours of your billing date may result in one additional charge for the upcoming cycle, as your order may already be in processing.</P>
      <P>Once a cancellation is confirmed, your access to Real Care services will continue through the end of your current billing period.</P>

      <H2>2. Refunds</H2>

      <H3>Medical Ineligibility Refund</H3>
      <P>If a licensed provider reviews your intake and determines you are not medically eligible for treatment, you will receive a full refund of any charges related to that unfulfilled order. This typically occurs within 5–7 business days.</P>

      <H3>Standard Cancellation</H3>
      <P>If you cancel after your subscription has begun and medication has been ordered, no refund is issued for that billing cycle, as your medication has already been prepared and/or shipped. This is consistent with standard practice across the compounded GLP-1 telehealth industry.</P>

      <H3>Damaged or Incorrect Orders</H3>
      <P>If your medication arrives damaged, incorrect, or significantly delayed through no fault of your own, contact us at support@realcare.com within 5 business days of delivery. We will replace the affected medication or issue a refund at our discretion.</P>

      <H3>Weight Loss Money-Back Guarantee</H3>
      <P>Our GLP-1 weight loss program includes a satisfaction guarantee subject to the following terms:</P>
      <UL>
        <LI>You must complete a minimum of 5 consecutive months on the program without lapses</LI>
        <LI>You must have followed your provider's prescribed dosage and treatment plan as directed</LI>
        <LI>You must have completed all required monthly check-in forms</LI>
        <LI>If you have not experienced measurable weight loss after meeting these requirements, contact us at guarantee@realcare.com with your documentation</LI>
        <LI>Approved refunds are issued minus a 25% provider consultation fee</LI>
        <LI>The guarantee applies only to GLP-1 weight loss products and not to other treatments</LI>
      </UL>
      <P>The money-back guarantee is available to first-time Real Care weight loss patients only, one time per household.</P>

      <H2>3. Refund Processing</H2>
      <P>Approved refunds are issued to your original payment method within 5–10 business days. Processing times may vary depending on your bank or card issuer.</P>

      <H2>4. HSA/FSA Payments</H2>
      <P>Refunds for HSA or FSA card purchases are returned to the original card. If your HSA/FSA card has expired or been replaced, contact your plan administrator for next steps.</P>

      <H2>5. Contact</H2>
      <P>For cancellation or refund requests: support@realcare.com</P>
      <P>For guarantee claims: guarantee@realcare.com</P>
      <P>We respond to all requests within 1 business day.</P>

    </LegalPage>
  </PageLayout>
);

export default RefundPolicy;
