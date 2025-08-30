import Gdpr from "@/components/gdpr/Gdpr";
import React from "react";
export const metadata = {
  title: "Gdpr | Contractor+",
  description: "Gdpr.",
  keywords: ["Gdpr"],
  // openGraph: {
  //   images: [
  //     {
  //       url: "/images/webp/contractor-invoicing-software.webp",
  //       width: 1920,
  //       height: 630,
  //       alt: "contractor-invoicing-software",
  //     },
  //   ],
  // },
  alternates: {
    canonical: "https://v2site.contractorplus.app/gdpr",
  },
};
const GdprPage = () => {
  return <Gdpr />;
};

export default GdprPage;
