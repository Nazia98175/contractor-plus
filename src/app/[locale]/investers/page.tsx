import InvestersHero from "@/components/investers/InvestersHero";
import MarketOpportunity from "@/components/investers/MarketOpportunity";
import MidMarketTable from "@/components/investers/MidMarketTable";
import ProofWorking from "@/components/investers/ProofWorking";
import TheProblem from "@/components/investers/TheProblem";
import WhatNext from "@/components/investers/WhatNext";
import WhyNow from "@/components/investers/WhyNow";
import WinTeam from "@/components/investers/WinTeam";
import React from "react";

const InversterPage = () => {
  return (
    <div>
      <InvestersHero />
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

export default InversterPage;
