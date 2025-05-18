import React from "react";
import { PlayIcon, StartIcon } from "../common/Icons";
import Image from "next/image";

const CrmReviewCard = () => {
  const rating = 4.5;
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index}>
        <StartIcon filled={index < rating} />
      </span>
    ));
  };
  return (
    <article className="max-w-[402px] w-full">
      <div className="flex gap-5 items-center">
        <div className="relative">
          <Image
            width={90}
            height={90}
            src="/images/webp/user-1.webp"
            alt="User"
            className="rounded min-w-[90px] max-w-[90px]"
          />
          <div className="p-[5px] absolute -bottom-2 -right-2 rounded-full bg-white text-pleasure">
            <PlayIcon />
          </div>
        </div>
        <div className="w-full flex flex-col gap-1.5">
          <div className="flex justify-between w-full items-center flex-wrap gap-2.5">
            <h5 className="text-xl !leading-[130%] lg:!leading-[130%] lg:text-2xl font-inter font-medium tracking-[0.1px] text-lightBlack">
              Clark J.
            </h5>
            <div className="flex items-center gap-1 h-fit">
              {renderStars(rating)}
            </div>
          </div>
          <img
            src="/images/svg/randsIcon.svg"
            alt="Company Logo"
            className="max-w-[82px] w-full"
          />
        </div>
      </div>
      <p className="p-2 text-lg tracking-[0.1px] font-medium font-jakarta text-winterWay mt-3">
        "Since I started sending all my estimates using Contractor+, / have
        stopped losing bids. The professional image / gain by using this app is
        helping me win more business. Contractor+ is a game changer!"
      </p>
    </article>
  );
};

export default CrmReviewCard;
