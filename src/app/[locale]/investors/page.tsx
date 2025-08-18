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
  title: "Learn About Contractor+ Investment Opportunities Discover investment",
  description:
    "opportunities, growth highlights, and business potential with Contractor+.",
};
const InvestorsPage = () => {
  return (
    <div>
      <InvestorHero />
      <TheProblem />
      <MidMarketTable />
      <WhyNow />
      <ProofWorking />
      <MarketOpportunity />
      <WhatNext />
      <WinTeam />
    </div>
  );
};

export default InvestorsPage;
