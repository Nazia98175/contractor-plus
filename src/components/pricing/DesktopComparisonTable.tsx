import React from "react";
import TableHead from "./TableHead";
import TableSectionTitle from "./TableSectionHead";
import TableFeatureRow from "./TableFeatureRow";

interface Props {
  pricingComparison: any;
  openStates: Record<string, boolean>;
  toggleCollapse: (key: string) => void;
}

const DesktopComparisonTable: React.FC<Props> = ({
  pricingComparison,
  openStates,
  toggleCollapse,
}) => {
  // Extract plans and comparison table from CMS data
  const plans = pricingComparison?.plans || [];
  const comparisonTable = pricingComparison?.comparisonTable || [];

  return (
    <table className="min-w-full border-collapse">
      <TableHead plans={plans} />
      <tbody>
        {comparisonTable.map((section: any, sectionIdx: number) => (
          <React.Fragment key={section.id || sectionIdx}>
            <TableSectionTitle title={section.title} />
            {section.features.map((feature: any, featureIdx: number) => {
              const key = `section-${sectionIdx}-feature-${featureIdx}`;

              // Transform Strapi data to match expected format
              const transformedFeature = {
                title: feature.title,
                description: feature.description,
                available: feature.avilability.map((avail: any) => {
                  // Return boolean or text based on availability
                  if (avail.availableText) {
                    return avail.availableText;
                  }
                  return avail.available || false;
                }),
              };

              return (
                <TableFeatureRow
                  key={feature.id || featureIdx}
                  feature={transformedFeature}
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
