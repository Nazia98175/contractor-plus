import { CompareFeature } from "@/types";
import React from "react";
import { CheckIcon, CloseIcon } from "../common/Icons";

interface CompareCardProps {
  feature: CompareFeature;
  slug?: string;
}

const CompareCard: React.FC<CompareCardProps> = ({ feature, slug }) => {
  return (
    <article
      className={`flex flex-col space-y-2 border-b p-2 ${slug === "estimate" ? "border-superSilver bg-[rgba(255,255,255,0.80)]" : "border-superSilver bg-transparent"}`}
    >
      <h5 className="text-winterWay font-myriad text-center leading-[19px] tracking-[0.1px]">
        {feature.featureName}
      </h5>
      <div className="flex w-full p-1">
        <button className="border-decemberSky flex w-1/2 items-center justify-center border-r">
          {feature.ourProduct == "available" ? (
            <CheckIcon width={24} height={24} className="max-w-6 min-w-6" />
          ) : (
            <span className="max-w-6 min-w-6">
              <CloseIcon />
            </span>
          )}
        </button>
        <button className="flex w-1/2 items-center justify-center">
          {feature.competitorsNote !== null ? (
            // <CheckIcon width={24} height={24} className="max-w-6 min-w-6" />
            <p>{feature?.competitorsNote}</p>
          ) : (
            <span className="max-w-5 min-w-5 md:max-w-6 md:min-w-6">
              <CloseIcon width={24} height={24} />
            </span>
          )}
        </button>
      </div>
    </article>
  );
};

export default CompareCard;
