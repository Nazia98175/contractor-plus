import React from "react";
import { CloseIcon, GreenCrossIcon } from "../common/Icons";

type TeamColumn = {
  title: string;
};

type Feature = {
  name: string;
  values: { icon: boolean }[]; // 3 values for 3 columns
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
      values: [{ icon: true }, { icon: false }, { icon: false }],
    },
    {
      name: "Built mobile-first",
      values: [{ icon: true }, { icon: false }, { icon: false }],
    },
    {
      name: "Onboard quickly",
      values: [{ icon: true }, { icon: false }, { icon: false }],
    },
    {
      name: "Instant Sync",
      values: [{ icon: true }, { icon: false }, { icon: false }],
    },
    {
      name: "Full access is $98/month",
      values: [{ icon: true }, { icon: false }, { icon: false }],
    },
  ];

  return (
    <div className="border-winterWay mx-auto mt-[34px] w-full max-w-[900px] rounded-lg border text-white">
      {/* Header Row */}
      <div className="grid grid-cols-3 pb-3 text-center font-semibold">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-2 text-start text-xs font-semibold ${
              index === 0
                ? "font-semibold text-white"
                : "text-wallStreet font-bold"
            } ${index === 1 ? "border-winterWay border-x" : ""}`}
          >
            {col.title}
          </div>
        ))}
      </div>

      {/* Feature Rows */}
      {features.map((feature, featureIndex) => (
        <div key={featureIndex} className="text-center">
          {/* Feature Title */}
          <h3 className="text-lightBlackGrey text-base">{feature.name}</h3>

          {/* Feature Values */}
          <div className="grid grid-cols-3 py-3">
            {feature.values.map((val, valIndex) => (
              <div
                key={valIndex}
                className={`flex items-center justify-center ${valIndex === 1 ? "border-winterWay border-x" : ""}`}
              >
                {val.icon ? (
                  <span className="flex w-full max-w-[23px] sm:max-w-[14px]">
                    <GreenCrossIcon />
                  </span>
                ) : (
                  <CloseIcon width={24} height={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamListMobile;
