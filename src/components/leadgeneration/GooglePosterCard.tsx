import React from "react";
import { SmallStarIcon } from "../common/Icons";

const GooglePosterCard = () => {
  return (
    <div className="space-y-2.5">
      {/* FIRST-CARD */}
      <div className="flex flex-col gap-1 rounded-xl bg-white p-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div className="bg-nyanza text-pestering flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]">
            1
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Top-rated general contractor serving Indianapolis and surrounding
          areas. Licensed, insured, and trusted by homeowners for quality
          renovations and custom builds.
        </span>
        <div className="font-inter text-mana flex items-center text-[10px] font-semibold">
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          (1,415)
        </div>
      </div>
      {/* SECOND-CARD */}
      <div className="flex flex-col gap-1 rounded-xl bg-white p-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div className="bg-silver text-pantone3 flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]">
            2
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Competitor description
        </span>
      </div>
      {/* THIRD-CARD */}
      <div className="flex flex-col gap-1 rounded-xl bg-white p-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div className="bg-silver text-pantone3 flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]">
            3
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Competitor description
        </span>
      </div>
    </div>
  );
};

export default GooglePosterCard;
