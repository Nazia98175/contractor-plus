import Copy from "@/components/common/Copy";
import InvestorHero from "@/components/investors/InvestorHero";
import MarketOpportunity from "@/components/investors/MarketOpportunity";
import MidMarketTable from "@/components/investors/MidMarketTable";
import ProofWorking from "@/components/investors/ProofWorking";
import TheProblem from "@/components/investors/TheProblem";
import WhatNext from "@/components/investors/WhatNext";
import WhyNow from "@/components/investors/WhyNow";
import WinTeam from "@/components/investors/WinTeam";
import React from "react";

export const metadata = {
  title:
    "Learn About Contractor+ Investment Opportunities Discover investment.",
  description:
    "opportunities, growth highlights, and business potential with Contractor+.",
  keywords: ["Investors"],
  openGraph: {
    images: [
      {
        url: "/images/webp/investors-og.webp",
        width: 1920,
        height: 630,
        alt: "investors-og",
      },
    ],
  },
  alternates: {
    canonical: "https://v2site.contractorplus.app/investors",
  },
};
const InvestorsPage = () => {
  return (
    <main id="home-page-wrapper-2">
      <div
        id="home-page-view-port-screen-estimatic-ai"
        className="relative opacity-0"
      >
        <InvestorHero />
        <TheProblem />
        <MidMarketTable />
        <WhyNow />
        <ProofWorking />
        <MarketOpportunity />
        <WhatNext />
        <WinTeam />
        <div className="mx-auto w-full max-w-[1296px] px-4 pt-[74px] pb-[80px] md:pt-[100px] lg:pt-[190px]">
          <Copy animateOnScroll={true}>
            <p className="text-secondary text-center text-xs font-medium">
              <span className="font-bold">Disclaimer:</span> This offering is
              made pursuant to exemptions under Regulation D and Regulation
              Crowdfunding (Reg CF) of the U.S. Securities Act of 1933.
              Securities are not registered, may be illiquid and involve risk.
              For Reg D offerings, only accredited investors may participate (or
              a limited number of sophisticated investors if under Rule 506(b)).
              For Reg CF, investments are made through an SEC-registered
              intermediary and are subject to contribution limits and resale
              restrictions. Nothing herein constitutes legal, tax, or investment
              advice. Please consult your own advisors before investing.
            </p>
          </Copy>
        </div>
      </div>
    </main>
  );
};

export default InvestorsPage;
