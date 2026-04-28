import PageLayout from "@/components/realcare/PageLayout";
import LegalPage, { H2, P, UL, LI } from "@/components/realcare/LegalPage";

const Accessibility = () => (
  <PageLayout title="Accessibility Statement">
    <LegalPage label="Accessibility" title="Accessibility Statement" updated="April 1, 2026">
      <P>Real Care Inc. is committed to ensuring that our website and digital services are accessible to everyone, including people with disabilities. We believe that every person deserves equal access to healthcare information and services.</P>

      <H2>1. Our Commitment</H2>
      <P>We are actively working to ensure our digital content conforms to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible to people with disabilities, including those with visual, auditory, cognitive, and motor impairments.</P>

      <H2>2. Current Conformance Status</H2>
      <P>Real Care is partially conformant with WCAG 2.1 Level AA. "Partially conformant" means that some parts of the content do not fully conform to the accessibility standard. We are continuously working to improve.</P>
      <P>Measures we have implemented include:</P>
      <UL>
        <LI>Semantic HTML structure across all pages</LI>
        <LI>Sufficient color contrast ratios between text and backgrounds</LI>
        <LI>Alt text for meaningful images</LI>
        <LI>Keyboard navigation support throughout the site</LI>
        <LI>Form labels associated with form inputs</LI>
        <LI>Responsive design that works across screen sizes and zoom levels</LI>
        <LI>Focus indicators for interactive elements</LI>
      </UL>

      <H2>3. Known Limitations</H2>
      <P>While we aim for full conformance, some areas of the site may not yet fully meet accessibility standards. We are committed to identifying and resolving these issues on an ongoing basis. Known areas we are actively improving include:</P>
      <UL>
        <LI>Some older PDF documents may not be fully accessible to screen readers</LI>
        <LI>Certain third-party embedded content may not meet our accessibility standards</LI>
        <LI>Some complex data visualizations may require additional descriptive text</LI>
      </UL>

      <H2>4. Assistive Technologies</H2>
      <P>Our site has been tested with the following assistive technologies:</P>
      <UL>
        <LI>Screen readers: NVDA, JAWS, and VoiceOver</LI>
        <LI>Voice control: Dragon NaturallySpeaking and Voice Control (macOS/iOS)</LI>
        <LI>Keyboard-only navigation</LI>
        <LI>Browser zoom up to 200%</LI>
      </UL>

      <H2>5. Technical Specifications</H2>
      <P>Our website relies on the following technologies for conformance with WCAG 2.1:</P>
      <UL>
        <LI>HTML5</LI>
        <LI>CSS3</LI>
        <LI>JavaScript (React)</LI>
        <LI>WAI-ARIA where appropriate</LI>
      </UL>

      <H2>6. Feedback and Contact</H2>
      <P>We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers, please contact us:</P>
      <UL>
        <LI>Email: accessibility@realcare.com</LI>
        <LI>General support: support@realcare.com</LI>
        <LI>Mailing address: Real Care Inc., Jacksonville, FL</LI>
      </UL>
      <P>We aim to respond to accessibility feedback within 2 business days. If you are not satisfied with our response, you may contact the U.S. Department of Health and Human Services Office for Civil Rights.</P>

      <H2>7. Formal Complaints</H2>
      <P>If you are not satisfied with our response to your accessibility feedback, you have the right to file a complaint with the relevant supervisory authority. In the United States, accessibility complaints related to healthcare services may be filed with the U.S. Department of Health and Human Services Office for Civil Rights at hhs.gov/ocr.</P>

      <H2>8. Ongoing Efforts</H2>
      <P>Real Care is committed to accessibility as an ongoing effort. We regularly review our website for accessibility issues, conduct user testing with people who use assistive technologies, and train our team on accessibility best practices. This statement was last reviewed and updated in April 2026.</P>
    </LegalPage>
  </PageLayout>
);

export default Accessibility;
