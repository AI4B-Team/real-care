import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const Privacy = () => (
  <PageLayout title="Privacy Policy">
    <LegalPage label="Legal" title="Privacy Policy" updated="April 1, 2026">

      <P>Real Care Inc. ("Real Care," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this policy carefully.</P>

      <H2>1. Information We Collect</H2>

      <H3>Personal Information You Provide</H3>
      <UL>
        <LI>Name, email address, phone number, and mailing address</LI>
        <LI>Date of birth and gender</LI>
        <LI>Payment information (processed securely by our payment processors)</LI>
        <LI>Health history, medications, symptoms, and treatment goals submitted in your health assessment</LI>
        <LI>Communications with your care team</LI>
        <LI>Photos or images you submit for clinical review</LI>
      </UL>

      <H3>Information Collected Automatically</H3>
      <UL>
        <LI>IP address, browser type, device type, and operating system</LI>
        <LI>Pages visited, time spent, and click patterns</LI>
        <LI>Referring URLs and search terms</LI>
        <LI>Cookies and similar tracking technologies</LI>
      </UL>

      <H2>2. How We Use Your Information</H2>
      <P>We use your information to:</P>
      <UL>
        <LI>Facilitate your connection with licensed healthcare providers</LI>
        <LI>Process payments and manage your subscription</LI>
        <LI>Ship your prescribed medications</LI>
        <LI>Communicate with you about your care, account, and our services</LI>
        <LI>Improve our platform and personalize your experience</LI>
        <LI>Comply with legal obligations</LI>
        <LI>Detect and prevent fraud</LI>
        <LI>Send marketing communications (you may opt out at any time)</LI>
      </UL>

      <H2>3. Health Information and HIPAA</H2>
      <P>The health information you provide may constitute Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA). We handle your PHI in accordance with our HIPAA Notice of Privacy Practices, which is available separately on our website. Your health information is shared only with your treating providers, our affiliated pharmacies as necessary to fulfill your prescription, and as required by law.</P>

      <H2>4. Information Sharing</H2>
      <P>We do not sell your personal information. We may share your information with:</P>
      <UL>
        <LI><strong>Healthcare providers:</strong> Licensed physicians and providers in our network who treat you</LI>
        <LI><strong>Pharmacies:</strong> State-licensed compounding pharmacies that fulfill your prescriptions</LI>
        <LI><strong>Service providers:</strong> Vendors who help us operate our platform (payment processing, email, analytics) under strict confidentiality agreements</LI>
        <LI><strong>Legal authorities:</strong> When required by law, court order, or to protect safety</LI>
        <LI><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</LI>
      </UL>

      <H2>5. Cookies and Tracking</H2>
      <P>We use cookies and similar technologies to enhance your experience, analyze usage, and support our marketing. You can control cookies through your browser settings. Disabling cookies may affect some functionality of our platform.</P>
      <P>We may use third-party analytics services such as Google Analytics and advertising platforms such as Meta (Facebook) and Google Ads. These services have their own privacy policies.</P>

      <H2>6. Data Security</H2>
      <P>We implement industry-standard technical, administrative, and physical safeguards to protect your information, including encryption of data in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</P>

      <H2>7. Data Retention</H2>
      <P>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Health records are retained in accordance with applicable state and federal medical record retention requirements.</P>

      <H2>8. Your Rights</H2>
      <P>Depending on your location, you may have the right to:</P>
      <UL>
        <LI>Access the personal information we hold about you</LI>
        <LI>Correct inaccurate information</LI>
        <LI>Request deletion of your information (subject to legal retention requirements)</LI>
        <LI>Opt out of marketing communications</LI>
        <LI>Restrict or object to certain processing</LI>
        <LI>Data portability</LI>
      </UL>
      <P>To exercise these rights, contact us at privacy@realcare.com.</P>

      <H2>9. California Residents (CCPA)</H2>
      <P>California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information. To submit a CCPA request, contact privacy@realcare.com.</P>

      <H2>10. Children's Privacy</H2>
      <P>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.</P>

      <H2>11. Changes to This Policy</H2>
      <P>We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our platform. The updated policy will be effective as of the date posted.</P>

      <H2>12. Contact</H2>
      <P>For privacy-related questions or requests, contact: Real Care Inc., Privacy Officer, privacy@realcare.com</P>

    </LegalPage>
  </PageLayout>
);

export default Privacy;
