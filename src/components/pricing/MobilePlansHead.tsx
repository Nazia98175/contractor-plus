import React from "react";

interface MobilePlansHeaderProps {
  plans?: any[];
}

const MobilePlansHeader: React.FC<MobilePlansHeaderProps> = ({
  plans = [],
}) => {
  // If no plans from CMS, use default
  const defaultPlans = [
    { name: "Freedom", priceLabel: "Free For Life" },
    { name: "PRO", priceLabel: "$29 /mo" },
    { name: "PRO Team", priceLabel: "$95 /mo" },
  ];

  // Use CMS plans if available, otherwise use defaults
  const displayPlans = plans.length > 0 ? plans : defaultPlans;

  return (
    <div className="mb-3 grid grid-cols-3">
      {displayPlans.map((plan, index) => (
        <div
          key={plan.id || plan.name || index}
          className={`bg-doctor space-y-3 px-3 py-2 ${
            index !== 0 ? "border-decemberSky border-l" : ""
          }`}
        >
          <h5 className="text-winterWay text-xs font-semibold tracking-[0.5px] sm:text-center sm:text-base md:text-lg">
            {plan.name}
          </h5>
          {/* Show price if available from CMS, otherwise show CTA text or empty */}
          <h4 className="text-winterWay text-xs font-bold tracking-[0.5px] sm:text-center sm:text-base md:text-lg">
            {plan.priceLabel || plan.price || plan.ctaText || ""}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default MobilePlansHeader;
