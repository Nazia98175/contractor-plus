"use client";
import React, { forwardRef, useState } from "react";
import { comparisonTableData } from "../common/Helper";
import DesktopComparisonTable from "./DesktopComparisonTable";
import MobileComparisonTable from "./MobileComparisonTable";
import MobilePlansHeader from "./MobilePlansHead";

// Initialize desktop openStates per feature (all open)
const generateInitialDesktopStates = () => {
  const states: Record<string, boolean> = {};
  comparisonTableData.forEach((section) => {
    section.features.forEach((_, i) => {
      states[`${section.key}-${i}`] = true;
    });
  });
  return states;
};

// Initialize mobile openStates per group (all open)
const generateInitialMobileStates = () => {
  const states: Record<string, boolean> = {};
  comparisonTableData.forEach((group) => {
    states[group.key] = true;
  });
  return states;
};

// Correct usage of forwardRef
const ComparisonTable = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [desktopOpenStates, setDesktopOpenStates] = useState(
    generateInitialDesktopStates(),
  );
  const [mobileOpenStates, setMobileOpenStates] = useState(
    generateInitialMobileStates(),
  );

  const toggleDesktopCollapse = (key: string) => {
    setDesktopOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileCollapse = (key: string) => {
    setMobileOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section
      ref={ref}
      className="font-myriad relative z-20 mx-auto w-full max-w-[1092px] px-2 py-12 sm:py-16 lg:pb-24 xl:px-0 xl:pt-[106px] xl:pb-[130px]"
    >
      <div className="hidden lg:block">
        <DesktopComparisonTable
          openStates={desktopOpenStates}
          toggleCollapse={toggleDesktopCollapse}
        />
      </div>

      <div className="block lg:hidden">
        <MobilePlansHeader />
        <MobileComparisonTable
          openStates={mobileOpenStates}
          toggleCollapse={toggleMobileCollapse}
        />
      </div>
    </section>
  );
});

export default ComparisonTable;
