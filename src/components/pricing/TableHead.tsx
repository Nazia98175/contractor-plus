import React from "react";
import PlanButton from "./PlanButton";
import { Plan } from "@/types";

const TableHead: React.FC<{ plans: Plan[] }> = ({ plans }) => (
  <thead>
    <tr className="border-decemberSky border-b">
      <th className="text-wallStreet w-1/4 px-3.5 py-5 text-center text-xl font-bold text-nowrap lg:text-2xl xl:px-8">
        Contractor+ Features
      </th>
      {plans.map((plan) => (
        <th
          key={plan.name}
          className="group border-decemberSky w-1/4 border-l px-3 py-5 text-center xl:px-5"
        >
          <span className="text-winterWay text-2xl font-semibold lg:text-[28px]">
            {plan.name}
          </span>
          <PlanButton
            cta={plan.cta}
            variant={plan.variant}
            className="mt-3.5"
          />
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHead;
