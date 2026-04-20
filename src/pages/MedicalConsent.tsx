import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, P, UL, LI } from "@/components/realcare/LegalPage";

const MedicalConsent = () => (
  <PageLayout title="Medical Consent">
    <LegalPage label="Legal" title="Informed Medical Consent" updated="April 1, 2026">

      <P>By enrolling in Real Care services and submitting your health assessment, you acknowledge that you have read, understood, and agree to this Informed Medical Consent. Please read carefully before proceeding.</P>

      <H2>1. Telehealth Services</H2>
      <P>You consent to receiving healthcare services through telehealth — the delivery of healthcare via electronic communications, including asynchronous review of your health information by a licensed provider. You understand that:</P>
      <UL>
        <LI>Telehealth involves the use of electronic communications to enable healthcare providers to provide care at a distance</LI>
        <LI>Your provider may review your health intake, photographs, and history asynchronously (without a real-time video visit) unless a synchronous visit is required or requested</LI>
        <LI>The laws that protect confidentiality of medical information also apply to telehealth</LI>
        <LI>Technical difficulties may occasionally interrupt or prevent delivery of telehealth services</LI>
        <LI>Not all medical conditions are appropriate for telehealth treatment, and your provider may determine in-person care is necessary</LI>
      </UL>

      <H2>2. Compounded Medications</H2>
      <P>If prescribed, you may receive compounded medications prepared by state-licensed U.S. compounding pharmacies. You understand and acknowledge that:</P>
      <UL>
        <LI>Compounded medications are not FDA-approved as finished products and have not been evaluated by the FDA for safety, efficacy, or quality</LI>
        <LI>Compounded medications use FDA-approved active ingredients and are prepared in FDA-regulated facilities</LI>
        <LI>Compounded GLP-1 medications (semaglutide, tirzepatide) are not the same as brand-name Ozempic®, Wegovy®, Mounjaro®, or Zepbound®, though they contain the same active ingredients</LI>
        <LI>The long-term effects of compounded versions of these medications have not been independently studied to the same extent as FDA-approved versions</LI>
        <LI>You have discussed any questions about compounded medications with your provider</LI>
      </UL>

      <H2>3. Voluntary Participation</H2>
      <P>Your participation in Real Care services is entirely voluntary. You have the right to withdraw your consent and discontinue treatment at any time without affecting your right to future care elsewhere. To cancel, contact our care team at least 72 hours before your next billing date.</P>

      <H2>4. Accurate Health Information</H2>
      <P>You agree to provide complete, accurate, and current health information, including all current medications, supplements, allergies, medical conditions, and prior treatments. You understand that providing inaccurate information may result in inappropriate treatment and could be harmful to your health.</P>

      <H2>5. No Guarantee of Prescription</H2>
      <P>Submitting a health assessment and making payment does not guarantee that you will receive a prescription or specific medication. All prescribing decisions are made solely by your licensed healthcare provider based on your clinical eligibility and medical need. If your provider determines you are not an appropriate candidate for treatment, you will be notified and refunded any charges for unprocessed orders.</P>

      <H2>6. Risk of Treatment</H2>
      <P>You acknowledge that all medical treatments involve risks. Potential risks vary by treatment and will be communicated by your provider. You have had the opportunity to ask questions about your treatment, its risks, benefits, and alternatives.</P>
      <P>GLP-1 medications carry risks including but not limited to: nausea, vomiting, diarrhea, constipation, pancreatitis, gallbladder problems, and rare but serious risk of thyroid tumors (based on animal studies). Individuals with a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2 should not use GLP-1 medications.</P>

      <H2>7. Emergency Care</H2>
      <P>In a medical emergency, call 911 or go to your nearest emergency room. Real Care telehealth services are not appropriate for medical emergencies.</P>

      <H2>8. Follow-Up and Ongoing Care</H2>
      <P>You agree to attend required follow-up check-ins and complete monthly refill assessments honestly. You agree to contact your care team if you experience unexpected side effects or changes in your health status.</P>

      <H2>9. Acknowledgment</H2>
      <P>By proceeding with Real Care services, you confirm that:</P>
      <UL>
        <LI>You have read and understood this consent</LI>
        <LI>You have had the opportunity to ask questions</LI>
        <LI>You voluntarily consent to telehealth services and potential treatment with compounded medications</LI>
        <LI>You are 18 years of age or older</LI>
        <LI>You understand that your provider may determine you are not eligible for treatment</LI>
      </UL>

      <P>Questions about this consent? Contact our care team at support@realcare.com</P>

    </LegalPage>
  </PageLayout>
);

export default MedicalConsent;
