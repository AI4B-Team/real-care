import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const Terms = () => (
  <PageLayout title="Terms & Conditions">
    <LegalPage label="Legal" title="Terms & Conditions" updated="April 1, 2026">

      <P>Please read these Terms and Conditions carefully before using the Real Care platform operated by Real Care Inc. ("Real Care," "we," "us," or "our"). By accessing or using our website, services, or any associated applications, you agree to be bound by these Terms. If you do not agree, do not use our services.</P>

      <H2>1. About Real Care</H2>
      <P>Real Care Inc. is a patient management and technology platform that provides administrative and operational support to licensed physicians and healthcare providers. Real Care does not employ healthcare providers, practice medicine, or directly provide medical or pharmacy services. Medical treatment is provided exclusively by independent, licensed healthcare professionals operating through our affiliated provider networks, including Real Care Affiliated P.C.s and OpenLoop Health-affiliated entities.</P>
      <P>Payment to Real Care does not guarantee the prescribing or dispensing of any medication. All clinical decisions, including whether to prescribe medication, are made solely at the discretion of your licensed provider.</P>

      <H2>2. Eligibility</H2>
      <P>To use Real Care services, you must:</P>
      <UL>
        <LI>Be at least 18 years of age</LI>
        <LI>Be a resident of a U.S. state where our services are available</LI>
        <LI>Have a demonstrated medical need as determined by a licensed provider</LI>
        <LI>Provide accurate and complete health information</LI>
        <LI>Not be using our services for any unlawful purpose</LI>
      </UL>

      <H2>3. Services Description</H2>
      <P>Real Care provides a digital platform that connects patients with licensed healthcare providers for telehealth consultations and, where medically appropriate, prescription medications dispensed by licensed U.S. compounding pharmacies. Services may include but are not limited to weight management, men's health, women's health, skincare, hair loss treatment, mental health support, and hormone therapy.</P>
      <P>Medications dispensed through our platform are compounded medications prepared by state-licensed pharmacies. Compounded medications are not FDA-approved as finished products, though they are prepared using FDA-approved active ingredients in FDA-regulated facilities. Compounded medications have not been evaluated by the FDA for safety, efficacy, or quality.</P>

      <H2>4. Subscription and Billing</H2>
      <P>Real Care services are offered on a month-to-month subscription basis unless otherwise specified. By enrolling, you authorize Real Care to charge your payment method on a recurring monthly basis. Your subscription will automatically renew unless canceled at least 72 hours before your next billing date.</P>
      <P>All prices displayed include your provider consultation, medication, and shipping. There are no separate membership fees. Prices are subject to change with advance notice.</P>
      <P>HSA and FSA cards are accepted for eligible medical expenses. Tax-advantaged status depends on your specific plan — consult your plan administrator.</P>

      <H2>5. Cancellation Policy</H2>
      <P>You may cancel your subscription at any time by contacting our care team at least 72 hours before your next billing date. Cancellation requests submitted within 72 hours of your billing date may result in one additional charge for the upcoming cycle. Cancellations are confirmed in writing. See our full Refund and Cancellation Policy for details.</P>

      <H2>6. Medical Disclaimer</H2>
      <P>Real Care is not a substitute for professional medical advice, diagnosis, or treatment. The information provided through our platform is for informational purposes only. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this website.</P>
      <P>Results vary. Individual outcomes depend on many factors including adherence to treatment, personal health history, and lifestyle choices.</P>

      <H2>7. Accuracy of Health Information</H2>
      <P>You agree to provide accurate, complete, and current health information when completing your intake assessment and at all times during your care. Providing false or misleading health information may result in inappropriate treatment and is grounds for immediate termination of your account. Real Care and its affiliated providers are not responsible for adverse outcomes resulting from inaccurate information provided by you.</P>

      <H2>8. Intellectual Property</H2>
      <P>All content on the Real Care platform, including text, images, logos, graphics, and software, is the property of Real Care Inc. or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</P>
      <P>Certain materials on our website may be generated or enhanced using artificial intelligence technologies. No representation or warranty is made regarding the accuracy, completeness, or reliability of such content. Individuals appearing in advertising may be actors or models.</P>

      <H2>9. Privacy</H2>
      <P>Your privacy is important to us. Our collection, use, and protection of your personal and health information is governed by our Privacy Policy and HIPAA Notice of Privacy Practices, which are incorporated into these Terms by reference.</P>

      <H2>10. Limitation of Liability</H2>
      <P>To the fullest extent permitted by law, Real Care Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if advised of the possibility of such damages.</P>
      <P>Our total liability to you for any claims arising from your use of the services shall not exceed the total amount paid by you to Real Care in the three months preceding the claim.</P>

      <H2>11. Governing Law</H2>
      <P>These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Delaware.</P>

      <H2>12. Changes to Terms</H2>
      <P>We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through the platform. Continued use of our services after changes constitutes acceptance of the revised Terms.</P>

      <H2>13. Contact</H2>
      <P>Questions about these Terms? Contact us at legal@realcare.com or write to: Real Care Inc., Legal Department, [Address], United States.</P>

    </LegalPage>
  </PageLayout>
);

export default Terms;
