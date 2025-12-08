"use client";
import { PlansProps } from "@/types";
import React, { useState } from "react";
import { LifeTimeIcon, SaveArrowIcon } from "../common/Icons";
import PlanCard from "./PlanCard";

const Plans: React.FC<PlansProps> = ({ onScroll, pricingPlans }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<"annual" | "monthly" | "lifetime">(
    "annual",
  );
  console.log(activeTab, "active");

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

      <div className="flex w-full justify-start gap-4 overflow-x-auto whitespace-nowrap sm:justify-center sm:overflow-visible">
        {/* Monthly Plan */}
        <div className="sm:border-decemberSky flex w-fit justify-start gap-4 rounded-[500px] border border-transparent p-2 sm:justify-center">
          <button
            aria-label="pricing tab monthly"
            onClick={() => setActiveTab("monthly")}
            className={`font-myriad min-w-fit rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "monthly"
                ? "bg-expressionismGreen font-bold text-white"
                : "text-wallStreet font-normal"
            }`}
          >
            Monthly Plan
          </button>

          {/* Annual Plan */}
          <button
            aria-label="pricing tab annual"
            onClick={() => setActiveTab("annual")}
            className={`flex min-w-fit items-center justify-center gap-3 rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "annual"
                ? "bg-dancingJewel font-bold text-white"
                : "text-wallStreet font-normal"
            }`}
          >
            Annual Plan
            {activeTab === "annual" && (
              <>
                <SaveArrowIcon />
                <i className="text-lightShutterbug !text-base !font-semibold">
                  Save up to Save 40%
                </i>
              </>
            )}
          </button>

          {/* Lifetime Plan */}
          {/* <button
            aria-label="pricing tab lifetime"
            onClick={() => setActiveTab("lifetime")}
            className={`flex min-w-fit items-center justify-center gap-3 rounded-[500px] px-4 py-1 text-base transition-colors duration-300 sm:px-6 sm:text-lg ${
              activeTab === "lifetime"
                ? "bg-majorelleGardens font-bold text-white"
                : "text-wallStreet font-normal"
            }`}
          >
            Lifetime
            {activeTab === "lifetime" && (
              <span>
                <LifeTimeIcon />
              </span>
            )}
          </button> */}
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
        {pricingPlans?.plans &&
          pricingPlans?.plans?.map((plan: any, index: number) => (
            <PlanCard
              plan={plan}
              isAnnual={isAnnual}
              key={index}
              index={index}
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
