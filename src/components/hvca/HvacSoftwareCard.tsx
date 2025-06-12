import React from "react";
import { AlertIcon } from "../common/Icons";

const HvacSoftwareCard = ({ card }: { card: any }) => {
  return (
    <article className="software-bg card-shine relative flex w-full max-w-[390px] cursor-pointer flex-col items-center gap-2.5 overflow-hidden rounded-lg p-2.5">
      <AlertIcon />
      <h4 className="text-winterWay relative mx-auto w-full text-center text-base leading-[130%] font-medium text-ellipsis text-shadow-[0px_0px_20px_rgba(255,255,255,0.50)] sm:text-lg xl:text-[22px]">
        {card.text}
      </h4>
    </article>
  );
};

export default HvacSoftwareCard;
