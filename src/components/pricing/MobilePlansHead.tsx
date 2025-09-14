import React from "react";

const mobilePlans = [
  { name: "Freedom", priceLabel: "Free For Life" },
  { name: "PRO", priceLabel: "$29 /mo" },
  { name: "PRO Team", priceLabel: "$95 /mo" },
];

const MobilePlansHeader: React.FC = () => {
  return (
    <div className="mb-3 grid grid-cols-3">
      {mobilePlans.map((plan, index) => (
        <div
          key={plan.name}
          className={`bg-doctor space-y-3 px-3 py-2 ${
            index !== 0 ? "border-decemberSky border-l" : ""
          }`}
        >
          <h5 className="text-winterWay text-xs font-semibold tracking-[0.5px] sm:text-center sm:text-base md:text-lg">
            {plan.name}
          </h5>
          <h4 className="text-winterWay text-xs font-bold tracking-[0.5px] sm:text-center sm:text-base md:text-lg">
            {plan.priceLabel}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default MobilePlansHeader;
