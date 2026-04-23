import LegalPage, { H2, P } from "@/components/realcare/LegalPage";

const Accessibility = () => (
  <LegalPage label="Accessibility" title="Accessibility Statement" updated="April 2026">
    <P>
      Real Care is committed to ensuring digital accessibility for people with disabilities. We are
      continually improving the user experience for everyone and applying the relevant
      accessibility standards.
    </P>

    <H2>Conformance Status</H2>
    <P>
      We aim to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These
      guidelines explain how to make web content more accessible to people with a wide range of
      disabilities, including auditory, cognitive, neurological, physical, speech, and visual
      disabilities.
    </P>

    <H2>Technical Specifications</H2>
    <P>
      Accessibility of realcare.com relies on the following technologies to work with the
      particular combination of web browser and any assistive technologies or plugins installed on
      your computer: HTML, WAI-ARIA, CSS, and JavaScript. These technologies are relied upon for
      conformance with the accessibility standards used.
    </P>

    <H2>Known Limitations</H2>
    <P>
      Despite our best efforts to ensure accessibility, there may be some limitations. Some
      third-party content (such as embedded videos and PDFs) may not be fully accessible. We are
      working with our vendors to remediate these issues.
    </P>

    <H2>Feedback</H2>
    <P>
      We welcome your feedback on the accessibility of Real Care. Please let us know if you
      encounter accessibility barriers by emailing{" "}
      <a href="mailto:accessibility@realcare.com" className="text-red underline">
        accessibility@realcare.com
      </a>
      . We try to respond to feedback within 5 business days.
    </P>
  </LegalPage>
);

export default Accessibility;
