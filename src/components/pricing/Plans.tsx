"use client";
import React, { useState } from "react";
import { planData } from "../common/Helper";
import { ScrollDownIcon } from "../common/Icons";
import PlanCard from "./PlanCard";
import PlanToggle from "./PlanToggle";
import { PlansProps } from "@/types";

const Plans: React.FC<PlansProps> = ({ onScroll }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative z-20 mx-auto flex w-full max-w-[1092px] flex-col items-center justify-center px-2 pt-2 pb-[22px] sm:space-y-8 sm:pt-8 xl:px-14 xl:pt-12">
      <PlanToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

      <div className="flex w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
        {planData.map((plan, index) => (
          <PlanCard plan={plan} isAnnual={isAnnual} key={index} />
        ))}
      </div>

      <p className="text-winterWay xs:max-w-[80%] mx-auto mt-6 text-center text-xs sm:mt-0">
        Prices are in USD. Pricing excludes VAT & sales tax where applicable.
        Annual contracts are billed upfront in one invoice.
      </p>
      <button
        onClick={onScroll}
        className="text-winterWay hover:bg-superSilver mb-6 flex h-8 items-center justify-center gap-1 rounded-md px-3 text-sm font-semibold tracking-[0.1px] duration-300 sm:mb-0"
      >
        Compare plan features
        <ScrollDownIcon />
      </button>
    </section>
  );
};

export default Plans;
