"use client";
import React from "react";
import { featureContentss } from "../common/Helper";
import LottieAnimation from "../common/LottieAnimation";
type FeatureContent = {
  id: number;
  title: string;
  cardQuote: string | null;
  userName: string | null;
  cardImg: any | null;
  content: {
    id: number;
    title: string;
    desc: string;
  }[];
  // title: string;
  // highlight?: string;
  // description: string;
  // titleImg: string;
};

type Props = {
  featureContents: FeatureContent[];
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

const FeatureContent = ({ featureContents, contentRefs }: Props) => {
  const firstContents = featureContents
    ?.map((feature) => feature?.content[0])
    .filter(Boolean);

  return (
    <>
      {firstContents?.map((content: any, index: any) => (
        <div
          key={index}
          ref={(el) => {
            contentRefs.current[index] = el;
          }}
          className="bg-doctor w-full scroll-mt-8 space-y-2.5 rounded-2xl p-3.5 md:scroll-mt-12 md:space-y-3 lg:scroll-mt-16 lg:space-y-[18px] xl:scroll-mt-24"
        >
          <h4 className="text-wallStreet text-lg leading-[100%] font-bold sm:text-xl md:text-2xl">
            {content?.title}
          </h4>
          <div className="relative w-full overflow-hidden rounded-lg">
            <LottieAnimation
              animationData={featureContentss?.[index]?.titleImg}
            />
          </div>
          <p className="text-wallStreet space-y-2 text-sm font-medium sm:text-base lg:max-w-[615px] lg:text-lg">
            {content.desc}
            {featureContents?.[index]?.cardQuote && (
              <span className="text-secondary">
                {" "}
                {featureContents?.[index]?.cardQuote}
              </span>
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeatureContent;
