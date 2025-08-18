import MarketOpportunity from "@/components/investers/MarketOpportunity";
import MidMarketTable from "@/components/investers/MidMarketTable";
import ProofWorking from "@/components/investers/ProofWorking";
import TheProblem from "@/components/investers/TheProblem";
import WinTeam from "@/components/investers/WinTeam";
import React from "react";

const InversterPage = () => {
  return (
    <div>
      <TheProblem />
      <MidMarketTable />
      <ProofWorking />
      <MarketOpportunity />
      <WinTeam />
    </div>
  );
};

export default InversterPage;
