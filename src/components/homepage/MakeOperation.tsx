import React from "react";
import {
  AdminWorkIcon,
  EstimateIcon2,
  EstimatesIcon,
  TurnaroundIcon,
} from "../common/Icons";

const MakeOperationlist = [
  {
    title: "3-4x faster",
    description: "Estimate process",
    icon: <EstimateIcon2 />,
  },
  {
    title: "24% faster",
    description: "Job turnaround time",
    icon: <TurnaroundIcon />,
  },
  {
    title: "38% less",
    description: "Time spent on admin work",
    icon: <AdminWorkIcon />,
  },
];

const MakeOperation = () => {
  return (
    <section className="bg-black">
      <div className="main-container">
        <h3 className="text-[42px] font-semibold font-jakarta text-white text-center">
          Make operations your competitive edge
        </h3>
        <p className="text-[22px] text-secondary text-center pt-2">
          The ROI from Contractor+ makes the choice easy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
          {MakeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{item.icon}</span>
              <h3 className="text-2xl font-bold text-white font-jakarta">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;
