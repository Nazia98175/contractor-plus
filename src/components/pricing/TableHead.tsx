import React from "react";
import PlanButton from "./PlanButton";
import { Plan } from "@/types";

const TableHead: React.FC<{ plans: Plan[] }> = ({ plans }) => (
  <thead>
    <tr>
      <th className="text-wallStreet w-1/4 px-8 py-5 text-center text-2xl font-bold">
        Compare plans
      </th>
      {plans.map((plan) => (
        <th
          key={plan.name}
          className="group border-decemberSky w-1/4 border-l px-8 py-5 text-center"
        >
          <span className="text-winterWay text-2xl text-[28px] font-semibold">
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
