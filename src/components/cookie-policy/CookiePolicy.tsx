"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import gsap from "gsap";

interface TermlyEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  "data-id"?: string;
}

const CookiePolicy = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

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
    <div className="min-h-screen bg-white pt-12 pb-12 md:pt-22">
      <div className="main-container mx-auto max-w-4xl px-4">
        {/* Termly Privacy Policy Embed Container */}
        <div
          id="privacy-policy-container"
          className="prose prose-lg max-w-none"
        >
          <div
            {...({
              name: "termly-embed",
              "data-id": "772d55d6-ea1a-4983-90ab-4825c3c8ed55",
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
          <div className="py-8 text-center">
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

export default CookiePolicy;
