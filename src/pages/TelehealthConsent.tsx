import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, H3, P, UL, LI } from "@/components/realcare/LegalPage";

const TelehealthConsent = () => (
  <PageLayout title="Telehealth Consent">
    <LegalPage label="Legal" title="Consent to Telehealth Services" updated="April 1, 2026">

      <P>Before receiving telehealth services from Real Care, please read this consent carefully. By proceeding with your health assessment and enrolling in Real Care services, you acknowledge that you have read, understood, and agree to this consent.</P>

      <H2>1. What Is Telehealth?</H2>
      <P>Telehealth involves the use of electronic communications — including secure messaging, asynchronous review of health information, and video consultations — to enable licensed healthcare providers to evaluate, diagnose, and treat patients at a distance. Real Care operates primarily through asynchronous telehealth, meaning your provider reviews your health information and responds without requiring a real-time video visit, unless one is clinically required or requested.</P>

      <H2>2. How Telehealth Works at Real Care</H2>
      <UL>
        <LI><strong>Intake assessment:</strong> You complete a health questionnaire and provide your medical history, current medications, and health goals</LI>
        <LI><strong>Provider review:</strong> A licensed, board-certified U.S. physician reviews your intake asynchronously — typically within 24–48 hours</LI>
        <LI><strong>Prescription (if appropriate):</strong> If you are medically eligible, your provider writes a prescription that is sent to our partner compounding pharmacy</LI>
        <LI><strong>Ongoing care:</strong> You can message your provider 24/7 through your patient portal for follow-up questions, dosage adjustments, or side effect management</LI>
        <LI><strong>Monthly check-ins:</strong> Before each refill, you complete a brief progress form that your provider reviews</LI>
      </UL>

      <H2>3. Potential Benefits of Telehealth</H2>
      <UL>
        <LI>Access to medical care without travel or waiting rooms</LI>
        <LI>Increased access to specialists in states with limited providers</LI>
        <LI>Convenience and flexibility — receive care from home</LI>
        <LI>Faster access to treatment than traditional in-person appointments</LI>
        <LI>Discreet, private care for sensitive health concerns</LI>
      </UL>

      <H2>4. Potential Risks and Limitations</H2>
      <P>You acknowledge that telehealth has certain limitations compared to in-person care:</P>
      <UL>
        <LI>Your provider cannot physically examine you</LI>
        <LI>Technical failures may interrupt or delay delivery of telehealth services</LI>
        <LI>Not all medical conditions are appropriate for telehealth treatment</LI>
        <LI>Your provider may determine that in-person care is necessary for your situation</LI>
        <LI>Asynchronous review (without real-time video) may result in delayed responses compared to in-person care</LI>
        <LI>Emergency situations cannot be addressed through telehealth — call 911 in an emergency</LI>
      </UL>

      <H2>5. Privacy and Security</H2>
      <P>All telehealth sessions and communications at Real Care are conducted through HIPAA-compliant systems. Your health information is encrypted in transit and at rest. We do not share your health information with third parties except as described in our Privacy Policy and HIPAA Notice of Privacy Practices.</P>
      <P>However, you acknowledge that no electronic system is 100% secure, and there is a risk — although small — of unauthorized access to your information during electronic transmission.</P>

      <H2>6. State-Specific Requirements</H2>
      <P>Telehealth regulations vary by state. In some states, a synchronous (real-time video) consultation may be required before a prescription can be issued. If your state requires a video visit, your provider will contact you to schedule one before prescribing. Real Care serves patients in all 50 states through our licensed provider network.</P>

      <H2>7. Right to Withdraw Consent</H2>
      <P>Your participation in telehealth is entirely voluntary. You have the right to withdraw this consent at any time without affecting your right to receive care through other means. To withdraw consent and cancel your Real Care account, contact us at support@realcare.com.</P>

      <H2>8. No Guarantee of Prescription</H2>
      <P>Submitting a health assessment and providing payment information does not guarantee that you will be prescribed any medication. All prescribing decisions are made solely by your licensed provider based on your individual medical eligibility and clinical need. If your provider determines you are not an appropriate candidate, you will be notified and refunded.</P>

      <H2>9. Emergency Care</H2>
      <P>Real Care telehealth services are NOT appropriate for medical emergencies. If you experience a medical emergency, call 911 immediately or go to your nearest emergency room. Do not use the patient portal or messaging system for emergency situations.</P>

      <H2>10. Your Acknowledgment</H2>
      <P>By proceeding with Real Care services, you confirm that:</P>
      <UL>
        <LI>You have read and understood this consent to telehealth services</LI>
        <LI>You voluntarily consent to receiving healthcare services via telehealth</LI>
        <LI>You understand the benefits, risks, and limitations of telehealth care</LI>
        <LI>You understand that telehealth may not be appropriate for all medical conditions</LI>
        <LI>You are 18 years of age or older</LI>
        <LI>You understand that a prescription is not guaranteed</LI>
      </UL>

      <H2>Contact</H2>
      <P>Questions about telehealth consent? Contact us at support@realcare.com or visit our patient portal at realcare.com/patient-portal.</P>

    </LegalPage>
  </PageLayout>
);

export default TelehealthConsent;
