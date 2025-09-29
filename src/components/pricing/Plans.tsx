"use client";
import { PlansProps } from "@/types";
import React, { useState } from "react";
import { ScrollDownIcon } from "../common/Icons";
import PlanCard from "./PlanCard";
import PlanToggle from "./PlanToggle";
import PlanCard2 from "./PlanCard2";

const Plans: React.FC<PlansProps> = ({ onScroll, pricingPlans }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<"annual" | "monthly" | "lifetime">(
    "monthly",
  );
  console.log(pricingPlans, "pricingPlans");

  return (
    <section className="relative z-20 mx-auto flex w-full max-w-[1092px] flex-col items-center justify-center px-2 pt-2 pb-[22px] sm:space-y-8 sm:pt-8 xl:px-14 xl:pt-12">
      {/* <PlanToggle
        isAnnual={isAnnual}
        setIsAnnual={setIsAnnual}
        title={pricingPlans?.title && pricingPlans?.title}
        toggleLabel={pricingPlans?.toggleLabel && pricingPlans?.toggleLabel}
        toggleNote={pricingPlans?.toggleNote && pricingPlans?.toggleNote}
      /> */}
      <div className="flex w-full justify-start gap-4 overflow-x-auto rounded-lg p-2 whitespace-nowrap sm:justify-center sm:overflow-x-visible">
        {["monthly", "annual", "lifetime"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "annual" | "monthly" | "lifetime")
            }
            className={`min-w-[100px] flex-1 rounded-lg px-4 py-2 text-base font-semibold transition-colors duration-300 sm:max-w-[200px] sm:px-6 ${
              activeTab === tab
                ? "bg-thickRed text-white"
                : "hover:bg-thickRed bg-gray-200 text-gray-600 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
        {pricingPlans?.plans &&
          pricingPlans?.plans?.map((plan: any, index: number) => (
            <PlanCard
              plan={plan}
              isAnnual={isAnnual}
              key={index}
              activeTab={activeTab}
            />
          ))}
      </div>

      <p className="text-winterWay xs:max-w-[80%] mx-auto mt-6 text-center text-xs sm:mt-0">
        {pricingPlans?.disclaimer && pricingPlans?.disclaimer}
      </p>
      {/* <button
        onClick={onScroll}
        className="text-winterWay hover:bg-superSilver mb-6 flex h-8 items-center justify-center gap-1 rounded-md px-3 text-sm font-semibold tracking-[0.1px] duration-300 sm:mb-0"
      >
        {pricingPlans?.compareLabel && pricingPlans?.compareLabel}
        <ScrollDownIcon />
      </button> */}
    </section>
  );
};

export default Plans;
