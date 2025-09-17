import React from "react";

type TeamColumn = {
  title: string;
};

type Feature = {
  name: string;
  values: string[]; // 3 values for 3 columns
};

const TeamListMobile: React.FC = () => {
  // Column headings
  const columns: TeamColumn[] = [
    { title: "Contractor+" },
    { title: "Mid-Market (Jobber, HCP, Joist)" },
    { title: "Enterprise ServiceTitan, Procore, etc." },
  ];

  // Features with values
  const features: Feature[] = [
    {
      name: "One connected platform",
      values: ["1", "2", "3"],
    },
    {
      name: "Built mobile-first",
      values: ["1", "2", "3"],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[900px] text-white">
      {/* Header Row */}
      <div className="grid grid-cols-3 text-center font-semibold">
        {columns.map((col, index) => (
          <div key={index}>{col.title}</div>
        ))}
      </div>

      {/* Feature Rows */}
      {features.map((feature, featureIndex) => (
        <div key={featureIndex} className="text-center">
          {/* Feature Title */}
          <h3 className="border">{feature.name}</h3>

          {/* Feature Values */}
          <div className="grid grid-cols-3">
            {feature.values.map((val, valIndex) => (
              <div key={valIndex}>{val}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamListMobile;
