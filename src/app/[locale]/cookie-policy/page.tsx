import CookiePolicy from "@/components/cookie-policy/CookiePolicy";
import React from "react";
export const metadata = {
  title: "Cookie Policy: How Contractor+ Uses Cookies",
  description:
    "Learn how Contractor+ uses cookies for analytics, preferences, and site performance.",
  keywords: ["Cookie Policy"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/contractor-client-agreement-og.webp",
  //       width: 1200,
  //       height: 630,
  //       alt: "contractor-client-agreement-og",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/cookie-policy",
  },
};
const CookiePolicyPage = () => {
  return <CookiePolicy />;
};

export default CookiePolicyPage;
