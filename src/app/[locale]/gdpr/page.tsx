"use client";

import gsap from "gsap";
import { useEffect } from "react";

const GDPRPage = () => {
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            GDPR & Data Processing
          </h1>
          <p className="text-alice mb-8 text-sm">
            Last updated: August 9, 2025
          </p>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              1) Who We Are & Our Roles
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Contractor Plus, Inc. ("Contractor+," "we," "us") provides field
              service management software, Contractor+ Voice (telephony), and
              related services.
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>
                <strong>Controller</strong> for account, billing, usage,
                marketing, and website analytics data.
              </li>
              <li>
                <strong>Processor</strong> for customer/end‑customer data you
                upload or connect (e.g., contacts, jobs, invoices, recordings)
                where you are the Controller.
              </li>
            </ul>
            <p className="leading-relaxed text-gray-700">
              Primary contact for EU/UK privacy matters:{" "}
              <a
                href="mailto:gdpr@contractorplus.app"
                className="text-blue-600 hover:text-blue-800"
              >
                gdpr@contractorplus.app
              </a>{" "}
              (or{" "}
              <a
                href="mailto:legal@contractorplus.app"
                className="text-blue-600 hover:text-blue-800"
              >
                legal@contractorplus.app
              </a>
              ).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              2) EU/UK Representative (Article 27)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              If Article 3(2) GDPR or the UK GDPR applies to us (i.e., we offer
              services to or monitor individuals in the EEA/UK while not
              established there), we will appoint a formal EU/UK Representative
              and update this page with their name, address, and email. Note: a
              simple inbox is not enough—the rep must be a person or company
              established in the EEA/UK and authorized in writing to act for us
              before regulators and data subjects.
            </p>
            <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
              <p className="text-decemberSky">
                <strong>Status today:</strong> No EU/UK Representative
                appointed. If/when our activities trigger Article 27, we'll
                designate one and publish full details here.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              3) Legal Bases (GDPR Art. 6)
            </h2>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>
                <strong>Contract</strong> – to provide the Services you request
                (accounts, core app features, integrations).
              </li>
              <li>
                <strong>Legitimate Interests</strong> – service security, fraud
                prevention, product improvement, quality assurance for Voice
                (e.g., call routing/analytics).
              </li>
              <li>
                <strong>Consent</strong> – marketing communications; optional
                features like certain call recordings where local law requires
                consent.
              </li>
              <li>
                <strong>Legal Obligation</strong> – payments, tax/AML/KYC
                compliance, recordkeeping.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              4) Your EU/UK Rights
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              Email{" "}
              <a
                href="mailto:gdpr@contractorplus.app"
                className="text-blue-600 hover:text-blue-800"
              >
                gdpr@contractorplus.app
              </a>{" "}
              to exercise your rights:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>Access/Portability (Art. 15/20)</li>
              <li>Rectification (Art. 16)</li>
              <li>Erasure (Art. 17)</li>
              <li>Restriction/Objection (Arts. 18–21)</li>
              <li>Withdraw Consent at any time</li>
              <li>Object to direct marketing at any time</li>
            </ul>
            <p className="leading-relaxed text-gray-700">
              We will respond within one month (extendable in complex cases).
              You may also lodge a complaint with your local supervisory
              authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              5) Sub‑Processors (we use to run the Service)
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              These vendors process personal data on our behalf. We vet them,
              sign data‑processing terms, and use transfer safeguards where
              needed. We'll update this list and, where contractually required,
              give prior notice before additions.
            </p>

            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  Amazon Web Services, Inc. (AWS)
                </h3>
                <p className="mt-1 text-gray-700">
                  Cloud hosting, storage, backups (app, DB, files).
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> account data, user content, logs.
                  <br />
                  <strong>Location:</strong> primarily USA (with regional
                  options).
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">Twilio, Inc.</h3>
                <p className="mt-1 text-gray-700">
                  Contractor+ Voice (telephony: SIP/voice/SMS); may include call
                  recording/transcription features you enable.
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> phone numbers, call/SMS metadata,
                  audio/recordings.
                  <br />
                  <strong>Location:</strong> USA/EU (varies by routing).
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  Finix Payments, Inc.
                </h3>
                <p className="mt-1 text-gray-700">
                  Payments processing and KYC/AML facilitation for Contractor+
                  Pay.
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> payment tokens, identifiers,
                  transaction metadata, business/KYC info.
                  <br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">Plaid Inc.</h3>
                <p className="mt-1 text-gray-700">
                  Bank connectivity and account verification (where you connect
                  it).
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> bank identifiers/tokens, account and
                  transaction metadata.
                  <br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  Intercom R&D Unlimited Company
                </h3>
                <p className="mt-1 text-gray-700">
                  In‑app support, messaging, helpdesk.
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> account/contact details, usage context,
                  support content.
                  <br />
                  <strong>Location:</strong> EU/USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  Userback Pty Ltd
                </h3>
                <p className="mt-1 text-gray-700">
                  Feedback collection (screenshots, console info you submit).
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> contact details, page metadata,
                  screenshots.
                  <br />
                  <strong>Location:</strong> Australia/EU/USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">Google LLC</h3>
                <p className="mt-1 text-gray-700">
                  Google Analytics & Google Workspace — Website/app analytics;
                  corporate email/docs.
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> analytics identifiers, usage events;
                  communications metadata.
                  <br />
                  <strong>Location:</strong> USA/EU.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">OpenAI, L.L.C.</h3>
                <p className="mt-1 text-gray-700">
                  AI inference for optional features (e.g.,
                  Estimatic/assistants).
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> prompts/content you submit for the
                  feature.
                  <br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  ElevenLabs, Inc.
                </h3>
                <p className="mt-1 text-gray-700">
                  Text‑to‑speech / voice synthesis for optional Voice features.
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> text snippets, generated audio.
                  <br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-800">
                  Slack Technologies, LLC
                </h3>
                <p className="mt-1 text-gray-700">
                  Internal collaboration (limited PII in support escalations).
                </p>
                <p className="text-alice mt-2 text-sm">
                  <strong>Data:</strong> names, emails, ticket snippets.
                  <br />
                  <strong>Location:</strong> USA/EU.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-blue-50 p-4">
              <h3 className="mb-2 font-semibold text-gray-800">
                Not Sub‑Processors (Customer‑Directed Integrations / Independent
                Controllers)
              </h3>
              <p className="text-decemberSky">
                When you connect or sync with these, you act as Controller
                directing data flows; their own policies apply: QuickBooks
                Online (Intuit), Lowe's (for SKU pricing and ordering), Zapier,
                CompanyCam, and other integrations you choose to enable.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              6) International Transfers
            </h2>
            <p className="leading-relaxed text-gray-700">
              We host primarily in the United States. For EEA personal data we
              use the European Commission 2021 Standard Contractual Clauses
              (SCCs), plus supplementary measures where necessary. For UK
              personal data we use the ICO's International Data Transfer
              Agreement (IDTA) or the UK Addendum to the EU SCCs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              7) Security
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We implement technical and organizational measures appropriate to
              risk, including:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>
                Encryption in transit (TLS 1.2+) and at rest (e.g., AES‑256)
              </li>
              <li>Access controls (RBAC/least‑privilege), audit logging</li>
              <li>
                Network isolation, key management, and regular third‑party
                testing
              </li>
              <li>
                Secure SDLC, vulnerability management, and employee training
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              8) Retention
            </h2>
            <p className="leading-relaxed text-gray-700">
              We keep personal data for the life of the account and as needed
              for our legal/operational obligations (e.g., tax/AML). Call
              recordings default to 24 months unless you delete sooner. Backups
              are time‑bound and purge on a rolling basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              9) Breach Notification
            </h2>
            <p className="leading-relaxed text-gray-700">
              If we become aware of a personal‑data breach, we will notify the
              relevant supervisory authority within 72 hours when required, and
              affected customers without undue delay, including information
              necessary to help you meet your own obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              10) Automated Decision‑Making & Profiling
            </h2>
            <p className="leading-relaxed text-gray-700">
              We do not make decisions producing legal or similarly significant
              effects solely by automated means. We may use risk signals (e.g.,
              fraud/abuse flags) to protect the Service; you can contact us to
              contest or request human review where applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              11) Data Processing Addendum (DPA)
            </h2>
            <p className="leading-relaxed text-gray-700">
              Need a signed DPA (Art. 28/46)? Email{" "}
              <a
                href="mailto:dpa@contractorplus.app"
                className="text-blue-600 hover:text-blue-800"
              >
                dpa@contractorplus.app
              </a>{" "}
              and we'll provide our standard DPA with SCCs/UK Addendum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-800">
              12) Changes
            </h2>
            <p className="leading-relaxed text-gray-700">
              We'll update this page as our data practices evolve and will
              provide advance notice of material changes where legally required.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default GDPRPage;
