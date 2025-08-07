"use client";
import React, { useEffect, useRef } from "react";
import Plans from "./Plans";
import CompleteFeatureList from "./CompleteFeatureList";
import ComparisonTable from "./ComparisonTable";
import PricingHero from "./PricingHero";
import gsap from "gsap";

const GroupOfComponets = ({
  pageContent,
  commonData,
  pricingPlans,
  reviews,
}: any) => {
  const compariosnTableRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  // console.log(pricingComparison, "pricingComparison"); //Has to integrate further
  const scrollToTable = () => {
    if (!compariosnTableRef.current) return;
    compariosnTableRef.current.scrollIntoView({ behavior: "smooth" });
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
      <div className="bg-white">
        <div ref={plansRef}>
          <Plans onScroll={scrollToTable} pricingPlans={pricingPlans} />
        </div>
        <CompleteFeatureList onScroll={scrollToTable} reviews={reviews} />
        <ComparisonTable ref={compariosnTableRef} />
      </div>
    </>
  );
};

export default GroupOfComponets;
