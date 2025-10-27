import React from "react";

interface TableHeadProps {
  plans: any[];
}

const TableHead: React.FC<TableHeadProps> = ({ plans }) => {
  const getButtonStyles = (variant?: string | null) => {
    switch (variant) {
      case "pro":
        return "bg-offWhite border-winterWay text-winterWay";
      case "proTeam":
        return "bg-softBlush border-thickRed border-softBlush";
      default:
        return "text-wallStreet border-winterWay";
    }
  };

  return (
    <thead>
      <tr className="border-decemberSky border-b">
        <th className="border-r border-gray-300 px-5 py-6 text-left">
          <h2 className="text-winterWay text-xl font-semibold">
            Compare Plans
          </h2>
        </th>
        {plans.map((plan, idx) => (
          <th
            key={plan.id || idx}
            className={`px-5 py-6 text-center ${
              idx !== plans.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-winterWay text-lg font-semibold">
                {plan.name}
              </h3>
              {plan.ctaText && (
                <button
                  aria-label="table plan"
                  className={`${getButtonStyles(plan.variant)} font-myriad mt-4 w-full min-w-[229px] rounded-md border px-6 py-2.5 text-base font-semibold tracking-[0.1px] transition-colors`}
                >
                  {plan.ctaText}
                </button>
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
