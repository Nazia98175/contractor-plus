import { CompareFeature } from "@/types";
import React from "react";
import { CheckIcon, CloseIcon } from "../common/Icons";

interface CompareCardProps {
  feature: CompareFeature;
}

const CompareCard: React.FC<CompareCardProps> = ({ feature }) => {
  return (
    <article className="flex flex-col p-2 space-y-2 border-b border-superSilver">
      <h5 className="text-center text-winterWay tracking-[0.1px] font-myriad leading-[19px]">
        {feature.featureName}
      </h5>
      <div className="p-1 flex w-full">
        <button className="w-1/2 flex justify-center items-center border-r border-decemberSky">
          {feature.ourProduct == "available" ? (
            <CheckIcon width={24} height={24} className="max-w-6 min-w-6" />
          ) : (
            <span className="max-w-6 min-w-6">
              <CloseIcon />
            </span>
          )}
        </button>
        <button className="w-1/2 flex justify-center items-center">
          {feature.othersHave ? (
            <CheckIcon width={24} height={24} className="max-w-6 min-w-6" />
          ) : (
            <span className="max-w-6 min-w-6">
              <CloseIcon />
            </span>
          )}
        </button>
      </div>
    </article>
  );
};

export default CompareCard;
