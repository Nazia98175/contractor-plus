"use client";
import React, { useState } from "react";
import TableHead from "./TableHead";
import { communicationFeatures, leadFeatures, plans } from "../common/Helper";
import TableSectionTitle from "./TableSectionHead";
import TableFeatureRow from "./TableFeatureRow";

// 👇 this part goes outside the component
const initialOpenStates: Record<string, boolean> = {};
leadFeatures.forEach((_, i) => (initialOpenStates[`lead-${i}`] = true));
communicationFeatures.forEach(
  (_, i) => (initialOpenStates[`comm-${i}`] = true),
);

const ComparisonTable: React.FC = () => {
  const [openStates, setOpenStates] = useState(initialOpenStates);

  const toggleCollapse = (key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="font-myriad mx-auto w-full max-w-[1092px] px-2 py-16 xl:px-0 xl:py-[106px]">
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <table className="min-w-full border-collapse">
          <TableHead plans={plans} />
          <tbody>
            <TableSectionTitle title="Lead & Client Management" />
            {leadFeatures.map((feature, i) => {
              const key = `lead-${i}`;
              return (
                <TableFeatureRow
                  key={feature.name}
                  feature={feature}
                  index={key}
                  isOpen={openStates[key] ?? true}
                  toggle={() => toggleCollapse(key)}
                  isMobile={false}
                  plans={plans}
                />
              );
            })}

            <TableSectionTitle title="Communication" />
            {communicationFeatures.map((feature, i) => {
              const key = `comm-${i}`;
              return (
                <TableFeatureRow
                  key={feature.name}
                  feature={feature}
                  index={key}
                  isOpen={openStates[key] ?? true}
                  toggle={() => toggleCollapse(key)}
                  isMobile={false}
                  plans={plans}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="mx-auto max-w-[600px] space-y-4 lg:hidden">
        <h3 className="text-wallStreet px-1 text-xl font-bold">
          Lead & Client Management
        </h3>
        {leadFeatures.map((feature, i) => {
          const key = `lead-${i}`;
          return (
            <TableFeatureRow
              key={feature.name}
              feature={feature}
              index={key}
              isOpen={openStates[key] ?? true}
              toggle={() => toggleCollapse(key)}
              isMobile={true}
              plans={plans}
            />
          );
        })}

        <h3 className="text-wallStreet mt-8 px-1 text-xl font-bold">
          Communication
        </h3>
        {communicationFeatures.map((feature, i) => {
          const key = `comm-${i}`;
          return (
            <TableFeatureRow
              key={feature.name}
              feature={feature}
              index={key}
              isOpen={openStates[key] ?? true}
              toggle={() => toggleCollapse(key)}
              isMobile={true}
              plans={plans}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ComparisonTable;
