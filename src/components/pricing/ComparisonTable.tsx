"use client";
import React, { forwardRef, useState } from "react";
import DesktopComparisonTable from "./DesktopComparisonTable";
import MobileComparisonTable from "./MobileComparisonTable";
import MobilePlansHeader from "./MobilePlansHead";

interface ComparisonTableProps {
  pricingComparison?: any;
}

const ComparisonTable = forwardRef<HTMLDivElement, ComparisonTableProps>(
  ({ pricingComparison }, ref) => {
    // Initialize states based on CMS data
    const [desktopOpenStates, setDesktopOpenStates] = useState(() => {
      const states: Record<string, boolean> = {};
      if (pricingComparison?.comparisonTable) {
        pricingComparison.comparisonTable.forEach(
          (section: any, sectionIdx: number) => {
            section.features.forEach((_: any, featureIdx: number) => {
              states[`section-${sectionIdx}-feature-${featureIdx}`] = false;
            });
          },
        );
      }
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

    // If no data from CMS, show loading or empty state
    if (!pricingComparison) {
      return (
        <section
          ref={ref}
          className="font-myriad relative z-20 mx-auto w-full max-w-[1092px] px-2 py-12 sm:py-16 lg:pb-24 xl:px-0 xl:pt-[106px] xl:pb-[130px]"
        >
          <div className="text-center text-gray-500">
            Loading pricing comparison...
          </div>
        </section>
      );
    }

    return (
      <section
        ref={ref}
        className="font-myriad relative z-20 mx-auto w-full max-w-[1092px] px-2 py-12 sm:py-16 lg:pb-24 xl:px-0 xl:pt-[106px] xl:pb-[130px]"
      >
        <div className="hidden lg:block">
          <DesktopComparisonTable
            pricingComparison={pricingComparison}
            openStates={desktopOpenStates}
            toggleCollapse={toggleDesktopCollapse}
          />
        </div>

        <div className="block lg:hidden">
          <MobilePlansHeader plans={pricingComparison.plans} />
          <MobileComparisonTable
            pricingComparison={pricingComparison}
            openKey={mobileOpenKey}
            toggleCollapse={toggleMobileCollapse}
          />
        </div>
      </section>
    );
  },
);

ComparisonTable.displayName = "ComparisonTable";

export default ComparisonTable;
