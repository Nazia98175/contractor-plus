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
    <section className="font-myriad mx-auto mt-[106px] w-full max-w-[1092px]">
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
                isOpen={openStates[key]}
                toggle={() => toggleCollapse(key)}
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
                isOpen={openStates[key]}
                toggle={() => toggleCollapse(key)}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonTable;
