import Gdpr from "@/components/gdpr/Gdpr";
import React from "react";
export const metadata = {
  title: "GDPR Policy: Contractor+ Data Rights & Compliance",
  description:
    "Read about Contractor+ compliance with GDPR and your data rights as a user..",
  keywords: ["Gdpr"],
  openGraph: {
    images: [
      {
        url: "/images/webp/gdpr-og.webp",
        width: 1920,
        height: 630,
        alt: "gdpr-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/gdpr",
  },
};
const GdprPage = () => {
  return <Gdpr />;
};

export default GdprPage;
