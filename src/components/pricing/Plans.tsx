"use client";
import React, { useState } from "react";
import { planData } from "../common/Helper";
import PlanCard from "./PlanCard";
import PlanToggle from "./PlanToggle";

const Plans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative z-20 mx-auto w-full max-w-[1092px] space-y-4 px-2 pt-12 pb-[22px] lg:space-y-8 xl:px-14">
      <PlanToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

      <div className="flex w-full flex-wrap justify-center gap-5 lg:flex-nowrap">
        {planData.map((plan, index) => (
          <PlanCard plan={plan} isAnnual={isAnnual} key={index} />
        ))}
      </div>

      <p className="text-winterWay text-center text-xs">
        Prices are in USD. Pricing excludes VAT & sales tax where applicable.
        Annual contracts are billed upfront in one invoice.
      </p>
      <button>Compare plan features</button>
    </section>
  );
};

export default Plans;
