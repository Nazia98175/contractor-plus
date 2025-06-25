"use client";
import React, { useState } from "react";
import { comparisonTableData, plans } from "../common/Helper";
import DesktopComparisonTable from "./DesktopComparisonTable";
import MobileComparisonTable from "./MobileComparisonTable";

const generateInitialStates = () => {
  const states: Record<string, boolean> = {};
  comparisonTableData.forEach((section) => {
    section.features.forEach((_, i) => {
      states[`${section.key}-${i}`] = true;
    });
  });
  return states;
};

const ComparisonTable: React.FC = () => {
  const [openStates, setOpenStates] = useState(generateInitialStates());

  const toggleCollapse = (key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="font-myriad mx-auto w-full max-w-[1092px] px-2 py-16 xl:px-0 xl:py-[106px]">
      <div className="hidden lg:block">
        <DesktopComparisonTable
          openStates={openStates}
          toggleCollapse={toggleCollapse}
        />
      </div>

      <div className="block lg:hidden">
        <MobileComparisonTable
          openStates={openStates}
          toggleCollapse={toggleCollapse}
        />
      </div>
    </section>
  );
};

export default ComparisonTable;
