import React from "react";
import { LineIcon } from "../common/Icons";

const PlanCard = () => {
  return (
    <article className="rounded-lg bg-white pb-6 shadow-[0px_17px_33px_-2px_rgba(28,39,49,0.08)]">
      <div className="p-6">
        <h4 className="xs-heading text-wallStreet !font-bold">Freedom</h4>
        <p className="font-myriad text-secondary text-sm">Free forever</p>

        <h3 className="text-winterWay text-[38px] font-bold">
          $0 <span className="text-secondary text-lg font-semibold">/mo</span>
        </h3>

        <div className="py-1.5">
          <LineIcon />
          <p className="text-wallStreet pt-2 text-xs font-medium">
            Just Starting
          </p>
        </div>
      </div>
    </article>
  );
};

export default PlanCard;
