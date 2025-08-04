"use client";
import React, { useRef } from "react";
import Plans from "./Plans";
import CompleteFeatureList from "./CompleteFeatureList";
import ComparisonTable from "./ComparisonTable";
import PricingHero from "./PricingHero";

const GroupOfComponets = () => {
  const compariosnTableRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const scrollToTable = () => {
    if (!compariosnTableRef.current) return;
    compariosnTableRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PricingHero onScroll={scrollToPlans} />
      </div>
      <div className="bg-white">
        <div ref={plansRef}>
          <Plans onScroll={scrollToTable} />
        </div>
        <CompleteFeatureList onScroll={scrollToTable} />
        <ComparisonTable ref={compariosnTableRef} />
      </div>
    </>
  );
};

export default GroupOfComponets;
