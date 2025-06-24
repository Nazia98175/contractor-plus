import { MoveLeftIcon } from "lucide-react";
import React from "react";
import { planData } from "../common/Helper";
import PlanCard from "./PlanCard";

const Plans: React.FC = () => {
  return (
    <div className="font-myriad mx-auto w-full max-w-[1092px] px-14 py-[22px]">
      <div className="mb-8 flex items-center justify-center gap-3 py-3">
        <button className="text-wallStreet text-lg">Monthly Plan</button>
        <label className="inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer bg-wallStreet relative h-6 w-10 rounded-full peer-checked:bg-[linear-gradient(262deg,_#DC1112_-10.83%,_#76090A_83.23%)] peer-focus:outline-none after:absolute after:start-[2.5px] after:top-1/2 after:h-[19px] after:min-w-[19px] after:-translate-y-1/2 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-[82%] peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
        </label>
        <div className="flex items-center gap-2.5">
          <button className="text-winterWay text-lg font-bold">
            Annual Plan
          </button>

          <p className="flex items-center gap-2 text-[#4F5357]">
            <MoveLeftIcon color="#5ED5A8" />
            Save up to 40%
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {planData.map((plan, index) => (
          <PlanCard plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
