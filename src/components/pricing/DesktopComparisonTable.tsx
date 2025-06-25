import React from "react";
import TableHead from "./TableHead";
import { comparisonTableData, plans } from "../common/Helper";
import TableSectionTitle from "./TableSectionHead";
import TableFeatureRow from "./TableFeatureRow";

interface Props {
  openStates: Record<string, boolean>;
  toggleCollapse: (key: string) => void;
}

const DesktopComparisonTable: React.FC<Props> = ({
  openStates,
  toggleCollapse,
}) => {
  return (
    <table className="min-w-full border-collapse">
      <TableHead plans={plans} />
      <tbody>
        {comparisonTableData.map((section) => (
          <React.Fragment key={section.title}>
            <TableSectionTitle title={section.title} />
            {section.features.map((feature, i) => {
              const key = `${section.key}-${i}`;
              return (
                <TableFeatureRow
                  key={feature.name}
                  feature={feature}
                  index={key}
                  isOpen={openStates[key]}
                  toggle={() => toggleCollapse(key)}
                  isMobile={false}
                />
              );
            })}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DesktopComparisonTable;
