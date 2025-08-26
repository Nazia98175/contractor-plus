"use client";
import { useState } from 'react';
import Script from 'next/script';

// Extend HTMLDivElement to include name property for this component only
interface TermlyEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  'data-id'?: string;
}

const PrivacyPolicyPage = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="main-container max-w-4xl mx-auto px-4">
       
        
        {/* Termly Privacy Policy Embed Container */}
        <div 
          id="privacy-policy-container"
          className="prose prose-lg max-w-none"
        >
          <div 
            {...({
              name: "termly-embed",
              "data-id": "7a7e36a7-17b4-4aab-9b38-cec525264819"
            } as TermlyEmbedProps)}
          />
        </div>

        {/* Load Termly Script using Next.js Script component */}
        <Script
          id="termly-policy-script"
          src="https://app.termly.io/embed-policy.min.js"
          strategy="afterInteractive"
          onLoad={() => setIsScriptLoaded(true)}
        />
        
        {/* Fallback content while loading */}
        {!isScriptLoaded && (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading privacy policy...</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        [name="termly-embed"] {
          font-family: inherit;
        }
        [name="termly-embed"] h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
        }
        [name="termly-embed"] h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
        }
        [name="termly-embed"] p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        [name="termly-embed"] ul {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }
        [name="termly-embed"] li {
          margin-bottom: 0.5rem;
        }
        [name="termly-embed"] a {
          color: #2563eb;
          text-decoration: underline;
        }
        [name="termly-embed"] a:hover {
          color: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;