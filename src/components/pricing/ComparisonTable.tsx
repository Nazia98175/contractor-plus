"use client";
import React, { useState } from "react";
import { comparisonTableData, plans } from "../common/Helper";
import DesktopComparisonTable from "./DesktopComparisonTable";
import MobileComparisonTable from "./MobileComparisonTable";
import TableHead from "./TableHead";
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

const ComparisonTable: React.FC = () => {
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
    <section className="font-myriad mx-auto w-full max-w-[1092px] px-2 py-16 xl:px-0 xl:py-[106px]">
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
};

export default ComparisonTable;
