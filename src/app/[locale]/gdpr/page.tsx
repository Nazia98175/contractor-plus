"use client";

const GDPRPage = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            GDPR & Data Processing
          </h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: August 9, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              1) Who We Are & Our Roles
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Contractor Plus, Inc. ("Contractor+," "we," "us") provides field service management software, 
              Contractor+ Voice (telephony), and related services.
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-4">
              <li><strong>Controller</strong> for account, billing, usage, marketing, and website analytics data.</li>
              <li><strong>Processor</strong> for customer/end‑customer data you upload or connect (e.g., contacts, jobs, invoices, recordings) where you are the Controller.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Primary contact for EU/UK privacy matters:{" "}
              <a href="mailto:gdpr@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                gdpr@contractorplus.app
              </a>{" "}
              (or{" "}
              <a href="mailto:legal@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                legal@contractorplus.app
              </a>
              ).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              2) EU/UK Representative (Article 27)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If Article 3(2) GDPR or the UK GDPR applies to us (i.e., we offer services to or monitor 
              individuals in the EEA/UK while not established there), we will appoint a formal EU/UK 
              Representative and update this page with their name, address, and email. Note: a simple 
              inbox is not enough—the rep must be a person or company established in the EEA/UK and 
              authorized in writing to act for us before regulators and data subjects.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-gray-700">
                <strong>Status today:</strong> No EU/UK Representative appointed. If/when our activities 
                trigger Article 27, we'll designate one and publish full details here.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              3) Legal Bases (GDPR Art. 6)
            </h2>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li><strong>Contract</strong> – to provide the Services you request (accounts, core app features, integrations).</li>
              <li><strong>Legitimate Interests</strong> – service security, fraud prevention, product improvement, quality assurance for Voice (e.g., call routing/analytics).</li>
              <li><strong>Consent</strong> – marketing communications; optional features like certain call recordings where local law requires consent.</li>
              <li><strong>Legal Obligation</strong> – payments, tax/AML/KYC compliance, recordkeeping.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              4) Your EU/UK Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Email{" "}
              <a href="mailto:gdpr@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                gdpr@contractorplus.app
              </a>{" "}
              to exercise your rights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 mb-4">
              <li>Access/Portability (Art. 15/20)</li>
              <li>Rectification (Art. 16)</li>
              <li>Erasure (Art. 17)</li>
              <li>Restriction/Objection (Arts. 18–21)</li>
              <li>Withdraw Consent at any time</li>
              <li>Object to direct marketing at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We will respond within one month (extendable in complex cases). You may also lodge a 
              complaint with your local supervisory authority.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              5) Sub‑Processors (we use to run the Service)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These vendors process personal data on our behalf. We vet them, sign data‑processing terms, 
              and use transfer safeguards where needed. We'll update this list and, where contractually 
              required, give prior notice before additions.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Amazon Web Services, Inc. (AWS)</h3>
                <p className="text-gray-700 mt-1">Cloud hosting, storage, backups (app, DB, files).</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> account data, user content, logs.<br />
                  <strong>Location:</strong> primarily USA (with regional options).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Twilio, Inc.</h3>
                <p className="text-gray-700 mt-1">
                  Contractor+ Voice (telephony: SIP/voice/SMS); may include call recording/transcription 
                  features you enable.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> phone numbers, call/SMS metadata, audio/recordings.<br />
                  <strong>Location:</strong> USA/EU (varies by routing).
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Finix Payments, Inc.</h3>
                <p className="text-gray-700 mt-1">
                  Payments processing and KYC/AML facilitation for Contractor+ Pay.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> payment tokens, identifiers, transaction metadata, business/KYC info.<br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Plaid Inc.</h3>
                <p className="text-gray-700 mt-1">Bank connectivity and account verification (where you connect it).</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> bank identifiers/tokens, account and transaction metadata.<br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Intercom R&D Unlimited Company</h3>
                <p className="text-gray-700 mt-1">In‑app support, messaging, helpdesk.</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> account/contact details, usage context, support content.<br />
                  <strong>Location:</strong> EU/USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Userback Pty Ltd</h3>
                <p className="text-gray-700 mt-1">Feedback collection (screenshots, console info you submit).</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> contact details, page metadata, screenshots.<br />
                  <strong>Location:</strong> Australia/EU/USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Google LLC</h3>
                <p className="text-gray-700 mt-1">
                  Google Analytics & Google Workspace — Website/app analytics; corporate email/docs.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> analytics identifiers, usage events; communications metadata.<br />
                  <strong>Location:</strong> USA/EU.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">OpenAI, L.L.C.</h3>
                <p className="text-gray-700 mt-1">AI inference for optional features (e.g., Estimatic/assistants).</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> prompts/content you submit for the feature.<br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">ElevenLabs, Inc.</h3>
                <p className="text-gray-700 mt-1">Text‑to‑speech / voice synthesis for optional Voice features.</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> text snippets, generated audio.<br />
                  <strong>Location:</strong> USA.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800">Slack Technologies, LLC</h3>
                <p className="text-gray-700 mt-1">Internal collaboration (limited PII in support escalations).</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Data:</strong> names, emails, ticket snippets.<br />
                  <strong>Location:</strong> USA/EU.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Not Sub‑Processors (Customer‑Directed Integrations / Independent Controllers)
              </h3>
              <p className="text-gray-700">
                When you connect or sync with these, you act as Controller directing data flows; their 
                own policies apply: QuickBooks Online (Intuit), Lowe's (for SKU pricing and ordering), 
                Zapier, CompanyCam, and other integrations you choose to enable.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              6) International Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We host primarily in the United States. For EEA personal data we use the European Commission 
              2021 Standard Contractual Clauses (SCCs), plus supplementary measures where necessary. For 
              UK personal data we use the ICO's International Data Transfer Agreement (IDTA) or the UK 
              Addendum to the EU SCCs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              7) Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement technical and organizational measures appropriate to risk, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
              <li>Encryption in transit (TLS 1.2+) and at rest (e.g., AES‑256)</li>
              <li>Access controls (RBAC/least‑privilege), audit logging</li>
              <li>Network isolation, key management, and regular third‑party testing</li>
              <li>Secure SDLC, vulnerability management, and employee training</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              8) Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We keep personal data for the life of the account and as needed for our legal/operational 
              obligations (e.g., tax/AML). Call recordings default to 24 months unless you delete sooner. 
              Backups are time‑bound and purge on a rolling basis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              9) Breach Notification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If we become aware of a personal‑data breach, we will notify the relevant supervisory 
              authority within 72 hours when required, and affected customers without undue delay, 
              including information necessary to help you meet your own obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              10) Automated Decision‑Making & Profiling
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not make decisions producing legal or similarly significant effects solely by 
              automated means. We may use risk signals (e.g., fraud/abuse flags) to protect the Service; 
              you can contact us to contest or request human review where applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              11) Data Processing Addendum (DPA)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Need a signed DPA (Art. 28/46)? Email{" "}
              <a href="mailto:dpa@contractorplus.app" className="text-blue-600 hover:text-blue-800">
                dpa@contractorplus.app
              </a>{" "}
              and we'll provide our standard DPA with SCCs/UK Addendum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              12) Changes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We'll update this page as our data practices evolve and will provide advance notice of 
              material changes where legally required.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default GDPRPage;