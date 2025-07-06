"use client";
import React, { forwardRef, useState } from "react";
import { comparisonTableData } from "../common/Helper";
import DesktopComparisonTable from "./DesktopComparisonTable";
import MobileComparisonTable from "./MobileComparisonTable";
import MobilePlansHeader from "./MobilePlansHead";

// Correct usage of forwardRef
const ComparisonTable = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [desktopOpenStates, setDesktopOpenStates] = useState(() => {
    const states: Record<string, boolean> = {};
    comparisonTableData.forEach((section) => {
      section.features.forEach((_, i) => {
        states[`${section.key}-${i}`] = false;
      });
    });
    return states;
  });

  const [mobileOpenKey, setMobileOpenKey] = useState<string | null>(null);

  const toggleDesktopCollapse = (key: string) => {
    setDesktopOpenStates((prev) => {
      const newStates: Record<string, boolean> = {};
      Object.keys(prev).forEach((k) => {
        newStates[k] = false;
      });
      if (!prev[key]) {
        newStates[key] = true;
      }
      return newStates;
    });
  };

  const toggleMobileCollapse = (key: string) => {
    setMobileOpenKey((prev) => (prev === key ? null : key));
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
          openKey={mobileOpenKey}
          toggleCollapse={toggleMobileCollapse}
        />
      </div>
    </section>
  );
});

export default ComparisonTable;
