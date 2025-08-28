"use client";

import gsap from "gsap";
import { useEffect } from "react";

const AccessibilityPage = () => {

      useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
          gsap.to("#home-page-view-port-screen", {
            opacity: 1,
            duration: 1,
          });
          gsap.to("#home-page-header-view-port-screen", {
            opacity: 1,
            duration: 1,
          });
          gsap.to("#home-page-footer-view-port-screen", {
            opacity: 1,
            duration: 1,
          });
        }, 1000);
      }, []);


  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accessibility Statement
          </h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: August 9, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">General</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractor Plus, Inc. is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone, and applying the relevant 
              accessibility standards to create an inclusive digital environment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Contractor+, we believe that digital accessibility is not just a legal requirement but a 
              fundamental human right. We strive to ensure that our website{" "}
              <a href="https://contractorplus.app" className="text-blue-600 hover:text-blue-800">
                https://contractorplus.app
              </a>{" "}
              is accessible to all users, regardless of their abilities or the assistive technologies they use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Measures to support accessibility
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractor Plus, Inc. takes the following comprehensive measures to ensure accessibility of 
              https://contractorplus.app:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Organizational Measures</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li>Include accessibility as part of our mission statement and core values</li>
              <li>Include accessibility throughout our internal policies and procedures</li>
              <li>Integrate accessibility into our procurement practices and vendor requirements</li>
              <li>Appoint an accessibility officer and/or ombudsperson with dedicated responsibilities</li>
              <li>Provide continual accessibility training for our staff, including developers, designers, and content creators</li>
              <li>Assign clear accessibility goals and responsibilities across departments</li>
              <li>Employ formal accessibility quality assurance methods and testing protocols</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technical Measures</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Regular accessibility audits using automated and manual testing tools</li>
              <li>Implementation of WCAG 2.1 AA guidelines across all digital properties</li>
              <li>User testing with people with disabilities to validate real-world accessibility</li>
              <li>Continuous monitoring and improvement of accessibility features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Conformance status</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers 
              to improve accessibility for people with disabilities. It defines three levels of conformance: 
              Level A, Level AA, and Level AAA.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>https://contractorplus.app is fully conformant with WCAG 2.1 level AA.</strong> Fully 
              conformant means that the content fully meets the accessibility standard without any exceptions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">This website also complies with:</p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Section 508 of the Rehabilitation Act</li>
              <li>Americans with Disabilities Act (ADA)</li>
              <li>EN 301 549 European Standard</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Technical specifications</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              https://contractorplus.app relies on the following technologies to work with the particular 
              combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-4">
              <li><strong>HTML5:</strong> Semantic markup for proper document structure</li>
              <li><strong>WAI-ARIA:</strong> Advanced accessibility attributes for complex interactions</li>
              <li><strong>CSS3:</strong> Responsive design and accessibility-friendly styling</li>
              <li><strong>JavaScript:</strong> Progressive enhancement for accessibility features</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These technologies are relied upon for conformance with the accessibility standards used. 
              Our website is built with progressive enhancement principles, ensuring core functionality 
              remains available even if JavaScript is disabled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Assessment approach</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractor Plus, Inc. assessed the accessibility of https://contractorplus.app by the following approaches:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automated Testing</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li>Regular automated accessibility scanning using Contractor+'s accessibility testing platform</li>
              <li>Integration with development workflow for continuous accessibility monitoring</li>
              <li>Monthly comprehensive accessibility audits</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Manual Testing</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li>Expert accessibility reviews by certified accessibility professionals</li>
              <li>Keyboard navigation testing across all interactive elements</li>
              <li>Screen reader testing with NVDA, JAWS, VoiceOver, and TalkBack</li>
              <li>Color contrast verification meeting WCAG AA standards</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">User Testing</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Usability testing with people with disabilities</li>
              <li>Feedback collection from users of assistive technologies</li>
              <li>Regular accessibility user experience studies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Contractor+ Accessibility Widget
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This website is equipped with an accessibility widget to provide additional assistive features 
              that go beyond standard web accessibility requirements:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Accessibility profiles for people with disabilities
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our accessibility widget includes specialized profiles designed for different types of disabilities:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li><strong>Seizure Safe Profile:</strong> Eliminates flashes and reduces color that could trigger seizures</li>
              <li><strong>Vision Impaired Profile:</strong> Enhances the website's visuals for users with visual impairments</li>
              <li><strong>ADHD Friendly Profile:</strong> Reduces distractions and improves focus for users with ADHD</li>
              <li><strong>Cognitive Disability Profile:</strong> Provides additional reading and focusing assistance</li>
              <li><strong>Keyboard Navigation Profile:</strong> Optimizes the website for keyboard-only navigation</li>
              <li><strong>Blind Users Profile:</strong> Optimizes the website for screen-reader compatibility</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Additional accessibility features</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Additional accessibility features available through our widget:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Text Adjustments:</strong> Font size increases up to 200%, font family changes to readable fonts</li>
              <li><strong>Color & Contrast:</strong> High contrast mode, color adjustments for colorblind users</li>
              <li><strong>Content Highlighting:</strong> Link highlighting, button emphasis, and content structure emphasis</li>
              <li><strong>Navigation Aids:</strong> Reading guides, rulers, and content magnification</li>
              <li><strong>Motor Impairments:</strong> Focus indicators enhancement, click area enlargement</li>
              <li><strong>Animation Controls:</strong> Pause animations, reduce motion for vestibular disorders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Feedback</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We welcome your feedback on the accessibility of https://contractorplus.app. Please let us know 
              if you encounter accessibility barriers on our website:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Accessibility Contact Information:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+18553928803" className="text-blue-600 hover:text-blue-800">
                    +1 (855) 392-8803
                  </a>
                </li>
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:hello@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                    hello@contractorplus.app
                  </a>
                </li>
                <li>
                  <strong>Postal Address:</strong> 1317 Edgewater Drive Suite 719, Orlando FL 32804
                </li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Response Time:</strong> We try to respond to accessibility feedback within 2-3 business 
              days and resolve reported issues within 5-10 business days, depending on complexity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Compatibility with browsers and assistive technology
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              https://contractorplus.app is designed to be compatible with the following assistive technologies:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Screen Readers</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li>NVDA (Windows) - Fully supported with regular testing</li>
              <li>JAWS (Windows) - Comprehensive compatibility and optimization</li>
              <li>VoiceOver (macOS/iOS) - Native Apple screen reader support</li>
              <li>TalkBack (Android) - Mobile accessibility optimization</li>
              <li>Dragon NaturallySpeaking - Voice recognition software compatibility</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Browsers</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-6">
              <li>Recent versions of major browsers including Chrome, Firefox, Safari, and Edge</li>
              <li>Mobile browsers on iOS Safari and Android Chrome</li>
              <li>Browser zoom up to 200% without horizontal scrolling</li>
              <li>High contrast mode support across all browsers</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Other Assistive Technology</h3>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Voice recognition software (Dragon, Windows Speech Recognition)</li>
              <li>Switch navigation devices and software</li>
              <li>Eye-tracking systems and head mouse devices</li>
              <li>Alternative keyboards and input devices</li>
              <li>Magnification software (ZoomText, MAGic)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Known limitations and alternatives
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite our best efforts to ensure accessibility of https://contractorplus.app, there may be some 
              limitations. Below is a description of known limitations, and potential solutions. Please contact 
              us if you observe an issue not listed below.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Known limitations for https://contractorplus.app:</strong>
            </p>
            <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-3 mb-6">
              <li>
                <strong>Third-party Content:</strong> Some embedded content from third-party providers 
                (social media widgets, videos, maps) may not be fully accessible. We work with vendors 
                to ensure accessibility compliance.
              </li>
              <li>
                <strong>Legacy PDF Documents:</strong> Some older PDF documents may not be fully accessible. 
                We are systematically reviewing and updating these documents to meet accessibility standards.
              </li>
              <li>
                <strong>Live Content:</strong> Real-time content such as live chat or dynamic updates may 
                have accessibility limitations. We provide alternative methods to access this information.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>What we're doing:</strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Continuous accessibility improvements and updates</li>
              <li>Regular third-party vendor accessibility reviews</li>
              <li>Proactive identification and resolution of accessibility barriers</li>
              <li>User feedback integration into our development process</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Additional Accessibility Resources
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              For more information about web accessibility, please visit:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>
                Web Accessibility Initiative (WAI) -{" "}
                <a href="https://www.w3.org/WAI" className="text-blue-600 hover:text-blue-800">
                  https://www.w3.org/WAI
                </a>
              </li>
              <li>
                WebAIM (Web Accessibility In Mind) -{" "}
                <a href="https://webaim.org" className="text-blue-600 hover:text-blue-800">
                  https://webaim.org
                </a>
              </li>
              <li>
                Deque University -{" "}
                <a href="https://dequeuniversity.com" className="text-blue-600 hover:text-blue-800">
                  https://dequeuniversity.com
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Assessment of current compliance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website was last reviewed for accessibility compliance on August 9, 2025.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Accessibility Standards Compliance:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>WCAG 2.1 AA: ✅ Fully Compliant</li>
                <li>Section 508: ✅ Compliant</li>
                <li>ADA Title III: ✅ Compliant</li>
                <li>EN 301 549: ✅ Compliant</li>
              </ul>
            </div>
          </section>

          <section className="border-t pt-8 mt-12">
            <p className="text-gray-700 leading-relaxed">
              This Accessibility Statement is approved by:
            </p>
            <div className="mt-4 text-gray-700">
              <p className="font-semibold">Contractor Plus, Inc.</p>
              <p>Accessibility Officer</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                  hello@contractorplus.app
                </a>
              </p>
              <p>Date: August 9, 2025</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default AccessibilityPage;