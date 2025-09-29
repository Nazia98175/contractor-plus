"use client";
import React, { useEffect, useRef } from "react";
import Plans from "./Plans";
import CompleteFeatureList from "./CompleteFeatureList";
import ComparisonTable from "./ComparisonTable";
import PricingHero from "./PricingHero";
import gsap from "gsap";

interface GroupOfComponentsProps {
  pageContent: any;
  commonData: any;
  pricingPlans: any;
  reviews: any;
  pricingData?: any; // Add this prop for CMS pricing data
  pricingComparison?: any[]; // Add this prop for CMS pricing data
}

const GroupOfComponents: React.FC<GroupOfComponentsProps> = ({
  pageContent,
  commonData,
  pricingPlans,
  reviews,
  pricingComparison,
}) => {
  const comparisonTableRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  const scrollToTable = () => {
    if (!comparisonTableRef.current) return;
    comparisonTableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 1000);
  }, []);

  return (
    <>
      <div
        id="home-page-view-port-screen"
        className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover"
      >
        <PricingHero
          onScroll={scrollToPlans}
          pageContent={pageContent}
          commonData={commonData}
        />
      </div>
      <div className="relative bg-white">
        <div className="pointer-events-none absolute top-[-5%] left-1/2 z-10 hidden h-20 w-[110%] -translate-x-1/2 bg-white blur-sm sm:block md:blur-[13px]"></div>
        <div ref={plansRef}>
          <Plans onScroll={scrollToTable} pricingPlans={pricingPlans} />
        </div>
      </div>
      <div className="bg-white">
        <CompleteFeatureList onScroll={scrollToTable} reviews={reviews} />
      </div>
      <div className="bg-white" ref={comparisonTableRef}>
        <ComparisonTable pricingComparison={pricingComparison} />
      </div>
    </>
  );
};

export default GroupOfComponents;
