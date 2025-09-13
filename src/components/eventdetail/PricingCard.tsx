import React from "react";
import { EventDetailIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Image from "next/image";

const PricingCard = ({ pricing }: { pricing: any }) => {
  return (
    <article className="card-shine-2 w-full">
      {pricing?.image && (
        <CardReveal delay={0.4} distance={50}>
          <Image
            width={500}
            height={500}
            className="h-full max-h-[200px] min-h-[200px] w-full rounded-lg"
            src={pricing?.image?.url}
            alt={pricing?.title}
          />
        </CardReveal>
      )}
      <CardReveal delay={0.5} distance={50}>
        <div className="p-3">
          <h3 className="font-2xl text-pantone3 font-semibold">
            {pricing?.title ?? ""}
          </h3>
          <p className="text-flintstone pt-2 pb-4 text-base">
            {pricing?.subTitle ?? ""}
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white">
              {pricing?.currency ?? ""} {pricing?.price ?? ""}
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
