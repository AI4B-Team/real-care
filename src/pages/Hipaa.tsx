import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const Hipaa = () => (
  <PageLayout title="HIPAA Notice of Privacy Practices">
    <LegalPage label="Legal" title="HIPAA Notice of Privacy Practices" updated="April 1, 2026">

      <P><strong>THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</strong></P>

      <H2>Our Commitment to Your Privacy</H2>
      <P>Real Care Affiliated P.C.s and our network of licensed healthcare providers ("we," "us," or "our Practice") are committed to maintaining the privacy of your Protected Health Information (PHI). This Notice of Privacy Practices describes how we may use and disclose your PHI and your rights regarding that information.</P>

      <H2>What is Protected Health Information?</H2>
      <P>Protected Health Information (PHI) is information about you, including demographic information, that may identify you and relates to your past, present, or future physical or mental health condition, the provision of healthcare to you, or payment for that care.</P>

      <H2>How We May Use and Disclose Your PHI</H2>

      <H3>Treatment</H3>
      <P>We may use and disclose your PHI to provide, coordinate, or manage your healthcare and related services. For example, we share your health information with prescribing providers, consulting specialists, and dispensing pharmacies as necessary to provide your treatment.</P>

      <H3>Payment</H3>
      <P>We may use and disclose your PHI to obtain payment for the services we provide to you, including verifying insurance coverage (where applicable), billing, and collections.</P>

      <H3>Healthcare Operations</H3>
      <P>We may use and disclose your PHI for our healthcare operations, including quality assessment, provider training, audits, and business management activities necessary to operate our practice.</P>

      <H3>Other Permitted Uses and Disclosures</H3>
      <UL>
        <LI><strong>Required by Law:</strong> We will disclose your PHI when required by federal, state, or local law</LI>
        <LI><strong>Public Health Activities:</strong> To public health authorities for disease prevention or control</LI>
        <LI><strong>Health Oversight:</strong> To government agencies for oversight of the healthcare system</LI>
        <LI><strong>Law Enforcement:</strong> Under specific circumstances as required or permitted by law</LI>
        <LI><strong>Serious Threat to Health or Safety:</strong> To prevent or lessen a serious threat to health or safety</LI>
        <LI><strong>Workers' Compensation:</strong> For workers' compensation purposes as authorized by law</LI>
      </UL>

      <H2>Uses and Disclosures Requiring Your Authorization</H2>
      <P>We will obtain your written authorization before using or disclosing your PHI for purposes beyond treatment, payment, and healthcare operations, including:</P>
      <UL>
        <LI>Marketing communications</LI>
        <LI>Sale of your PHI</LI>
        <LI>Psychotherapy notes (where applicable)</LI>
        <LI>Most uses of highly sensitive information</LI>
      </UL>
      <P>You may revoke any authorization in writing at any time, except where we have already acted in reliance on it.</P>

      <H2>Your Rights Regarding Your PHI</H2>

      <H3>Right to Access</H3>
      <P>You have the right to inspect and obtain a copy of your PHI maintained in our records. We may charge a reasonable cost-based fee for copies. Requests must be made in writing.</P>

      <H3>Right to Amend</H3>
      <P>You have the right to request that we amend your PHI if you believe it is incorrect or incomplete. We may deny your request under certain circumstances.</P>

      <H3>Right to an Accounting of Disclosures</H3>
      <P>You have the right to request a list of disclosures of your PHI made by us for purposes other than treatment, payment, healthcare operations, and certain other activities.</P>

      <H3>Right to Request Restrictions</H3>
      <P>You have the right to request restrictions on how we use and disclose your PHI. We are not required to agree to your request unless it involves disclosure to a health plan for payment or operations purposes and you have paid for the services in full.</P>

      <H3>Right to Confidential Communications</H3>
      <P>You have the right to request that we communicate with you about your health information in a certain way or at a certain location.</P>

      <H3>Right to a Paper Copy of This Notice</H3>
      <P>You have the right to a paper copy of this Notice at any time, even if you have agreed to receive this Notice electronically.</P>

      <H2>Data Breach Notification</H2>
      <P>In the event of a breach of your unsecured PHI, we will notify you as required by the HIPAA Breach Notification Rule and applicable state law.</P>

      <H2>Changes to This Notice</H2>
      <P>We reserve the right to change this Notice and make the revised Notice effective for PHI we already have about you as well as information we receive in the future. We will post the current Notice on our website and make it available upon request.</P>

      <H2>Complaints</H2>
      <P>If you believe your privacy rights have been violated, you may file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for filing a complaint.</P>
      <P>To file a complaint with Real Care: privacy@realcare.com</P>
      <P>To file a complaint with HHS: www.hhs.gov/ocr/privacy/hipaa/complaints</P>

      <H2>Contact Our Privacy Officer</H2>
      <P>Real Care Inc. | Privacy Officer | privacy@realcare.com | REALCARE.COM</P>

    </LegalPage>
  </PageLayout>
);

export default Hipaa;
