import MarketOpportunity from "@/components/investers/MarketOpportunity";
import ProofWorking from "@/components/investers/ProofWorking";
import TheProblem from "@/components/investers/TheProblem";
import WinTeam from "@/components/investers/WinTeam";
import React from "react";

const InversterPage = () => {
  return (
    <div id="home-page-wrapper">
      <div id="home-page-view-port-screen">
        <TheProblem />
        <ProofWorking />
        <MarketOpportunity />
        <WinTeam />
      </div>
    </div>
  );
};

export default InversterPage;
