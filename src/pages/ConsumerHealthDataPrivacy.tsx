import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const ConsumerHealthDataPrivacy = () => (
  <PageLayout title="Consumer Health Data Privacy Notice">
    <LegalPage label="Legal" title="Consumer Health Data Privacy Notice" updated="April 1, 2026">
      <P>This Consumer Health Data Privacy Notice ("Notice") applies to residents of Washington State, Nevada, and Connecticut, and supplements our main Privacy Policy. It describes how Real Care Inc. ("Real Care," "we," "us," or "our") collects, uses, and shares your consumer health data as defined under applicable state law, including Washington's My Health My Data Act (MHMDA), Nevada SB 370, and Connecticut's consumer health data laws.</P>

      <P>If you are a resident of Washington, Nevada, or Connecticut, please read this Notice carefully. Your rights under these laws are in addition to your rights under our main Privacy Policy and applicable federal law, including HIPAA.</P>

      <H2>1. What Is Consumer Health Data?</H2>
      <P>Under applicable state laws, "consumer health data" means personal information that is linked or reasonably linkable to a consumer and that identifies the consumer's past, present, or future physical or mental health condition, including:</P>
      <UL>
        <LI>Individual health conditions, diagnoses, diseases, and disorders</LI>
        <LI>Social, psychological, behavioral, and medical interventions</LI>
        <LI>Health-related surgeries or procedures</LI>
        <LI>Use or purchase of prescribed medication</LI>
        <LI>Bodily functions, vital signs, symptoms, or measurements</LI>
        <LI>Diagnoses or diagnostic testing, treatment, or medication</LI>
        <LI>Gender-affirming care</LI>
        <LI>Reproductive or sexual health data</LI>
        <LI>Biometric data</LI>
        <LI>Precise geolocation data that could reasonably indicate attempts to acquire health services or products</LI>
      </UL>

      <H2>2. Consumer Health Data We Collect</H2>
      <P>In connection with providing our telehealth services, we collect the following categories of consumer health data:</P>
      <UL>
        <LI><strong>Medical history:</strong> Existing conditions, prior diagnoses, medications, allergies, and surgical history as provided in your health assessment</LI>
        <LI><strong>Physical measurements:</strong> Height, weight, BMI, and related body composition data</LI>
        <LI><strong>Symptoms and health goals:</strong> Weight loss goals, symptoms you report, and treatment preferences</LI>
        <LI><strong>Prescription and treatment data:</strong> Medications prescribed to you, dosing information, and treatment progress</LI>
        <LI><strong>Lab and diagnostic data:</strong> Results from any lab testing ordered through our platform</LI>
        <LI><strong>Provider communications:</strong> Messages between you and your care team regarding your health</LI>
        <LI><strong>Reproductive and sexual health data:</strong> Information provided for relevant treatment categories (e.g., birth control, sexual health, hormone therapy)</LI>
      </UL>

      <H2>3. How We Use Your Consumer Health Data</H2>
      <P>We use consumer health data only for the following purposes:</P>
      <UL>
        <LI>Providing telehealth services and facilitating your care with licensed providers</LI>
        <LI>Processing prescriptions and coordinating medication delivery with licensed pharmacies</LI>
        <LI>Communicating with you about your treatment plan and health status</LI>
        <LI>Processing payments and managing your subscription</LI>
        <LI>Complying with legal obligations, including HIPAA requirements</LI>
        <LI>Improving the safety, quality, and effectiveness of our services (in de-identified or aggregate form only)</LI>
      </UL>
      <P>We do not use consumer health data for advertising, marketing profiling, or sale to third parties.</P>

      <H2>4. Who We Share Your Consumer Health Data With</H2>
      <P>We share consumer health data only with parties necessary to provide your care:</P>
      <UL>
        <LI><strong>OpenLoop Health:</strong> Our affiliated provider network of licensed physicians who review your intake and make prescribing decisions</LI>
        <LI><strong>Licensed compounding pharmacies:</strong> Partners who prepare and ship your medication (currently Empower Pharmacy and/or affiliates)</LI>
        <LI><strong>Stripe Inc.:</strong> Payment processor — receives billing information, not detailed health data</LI>
        <LI><strong>Supabase Inc.:</strong> Database and authentication infrastructure provider operating under HIPAA-compliant terms</LI>
      </UL>
      <P>We do not sell consumer health data. We do not share consumer health data with data brokers, advertisers, or employers.</P>

      <H2>5. Your Rights</H2>

      <H3>5.1 Right to Access</H3>
      <P>You have the right to confirm whether we are processing your consumer health data and to receive a copy of the specific consumer health data we hold about you.</P>

      <H3>5.2 Right to Correction</H3>
      <P>You have the right to request that we correct inaccurate consumer health data we hold about you.</P>

      <H3>5.3 Right to Deletion</H3>
      <P>You have the right to request deletion of your consumer health data. Note that some data must be retained to comply with HIPAA, other legal obligations, or to complete a transaction you requested.</P>

      <H3>5.4 Right to Data Portability</H3>
      <P>You have the right to receive a copy of your consumer health data in a portable, readily usable format.</P>

      <H3>5.5 Right to Withdraw Consent</H3>
      <P>Where we process your consumer health data based on consent, you have the right to withdraw that consent at any time. Withdrawing consent does not affect the lawfulness of processing before withdrawal.</P>

      <H3>5.6 Washington-Specific Rights (MHMDA)</H3>
      <P>Washington residents have additional rights under the My Health My Data Act, including the right to opt out of any processing of consumer health data not strictly necessary to provide the services you requested. To exercise this right, email privacy@realcare.com.</P>

      <H2>6. How to Exercise Your Rights</H2>
      <P>To exercise any of the rights described above, please contact us at:</P>
      <UL>
        <LI><strong>Email:</strong> privacy@realcare.com — Subject line: "Consumer Health Data Request - [Your State]"</LI>
        <LI><strong>Response time:</strong> We will respond within 30 days of receiving your request. We may need to verify your identity before processing your request.</LI>
        <LI><strong>No fee:</strong> We will not charge you a fee to exercise your rights unless your request is manifestly unfounded, excessive, or repetitive.</LI>
      </UL>
      <P>If you are a Washington State resident and believe we have violated your rights under MHMDA, you may file a complaint with the Washington State Attorney General's Office.</P>

      <H2>7. Data Retention</H2>
      <P>We retain consumer health data for as long as necessary to provide our services, comply with HIPAA's medical record retention requirements (minimum 6 years from creation or last effective date), fulfill legal obligations, and resolve disputes. When retention is no longer required, we securely delete or de-identify your data.</P>

      <H2>8. Security</H2>
      <P>We implement administrative, technical, and physical safeguards appropriate to the sensitivity of consumer health data, including encryption at rest and in transit, access controls, and regular security assessments. We are HIPAA-compliant and maintain Business Associate Agreements with all service providers who access protected health information.</P>

      <H2>9. Contact Us</H2>
      <P>For questions about this Notice or your consumer health data rights:</P>
      <UL>
        <LI>Email: privacy@realcare.com</LI>
        <LI>Mail: Real Care Inc. — Privacy Office, Jacksonville, FL</LI>
      </UL>
      <P>This Notice applies in addition to, and does not replace, your rights under HIPAA. For HIPAA-specific rights, see our HIPAA Notice of Privacy Practices at realcare.com/hipaa.</P>
    </LegalPage>
  </PageLayout>
);

export default ConsumerHealthDataPrivacy;
