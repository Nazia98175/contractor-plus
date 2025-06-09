import BuildBusinessOnBlood from "@/components/why-contractor/BuildBusinessOnBlood";
import CantScale from "@/components/why-contractor/CantScale";
import FastestWayToLoose from "@/components/why-contractor/FastestWayToLoose";
import NewWayToWin from "@/components/why-contractor/NewWayToWin";
import WhyContractorHero from "@/components/why-contractor/WhyContractorHero";
import React from "react";

const WhyContractorPage = () => {
  return (
    <main className="bg-kuroiBlack -z-[2]">
      <WhyContractorHero />
      <CantScale />
      <BuildBusinessOnBlood />
      <FastestWayToLoose />
      <NewWayToWin />
    </main>
  );
};

export default WhyContractorPage;
