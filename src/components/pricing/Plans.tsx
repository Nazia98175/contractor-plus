import React from "react";
import PlanCard from "./PlanCard";
import { planData } from "../common/Helper";

const Plans: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1092px] px-14 py-[22px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planData.map((plan, index) => (
          <PlanCard plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
