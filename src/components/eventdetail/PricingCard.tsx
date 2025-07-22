import React from "react";
import { EventDetailIcon } from "../common/Icons";

const PricingCard = ({ pricing }: { pricing: any }) => {
  return (
    <article className="w-full max-w-[400px]">
      <img
        className="h-full w-full"
        src={pricing.image}
        alt={pricing.seatname}
      />
      <div className="pt-4">
        <h3 className="font-2xl font-semibold text-[#B4B4B4]">
          {pricing.seatname}
        </h3>
        <p className="pt-2 pb-4 text-base text-[#667085]">
          {pricing.Description}
        </p>
        <div className="flex items-center justify-between p-2">
          <h3 className="text-sm font-extrabold text-white">
            {pricing.pricing}
          </h3>
          <span>
            <EventDetailIcon />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PricingCard;
