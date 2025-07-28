import React from "react";
import { EventDetailIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Image from "next/image";

const PricingCard = ({ pricing }: { pricing: any }) => {
  return (
    <article className="card-shine-2 w-full">
      <CardReveal delay={0.4} distance={50}>
        <Image
          width={500}
          height={500}
          className="h-full w-full"
          src={pricing.image}
          alt={pricing.seatname}
        />
      </CardReveal>
      <CardReveal delay={0.5} distance={50}>
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
      </CardReveal>
    </article>
  );
};

export default PricingCard;
