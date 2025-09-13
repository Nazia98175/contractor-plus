"use client";
import React from "react";
import Copy from "../common/Copy";

interface marketOpportunityItems {
  title?: string;
  desc?: string;
  image?: any;
  subTitle?: string;
  subDesc?: string;
}

interface MarketOpportunityProps {
  marketOpportunityData?: marketOpportunityItems[];
}

const MarketOpportunity: React.FC<MarketOpportunityProps> = ({
  marketOpportunityData = [],
}) => {
  return (
    <>
      {marketOpportunityData.map((item, index) => (
        <div key={index} className={index === 0 ? "" : "pt-10"}>
          {/* Header Section */}
          <div className="relative px-4 pb-[60px] lg:pb-[115px]">
            <div className="market-opportunity-bg pointer-events-none absolute top-[-310%] hidden h-full w-full rotate-[180deg] md:block xl:top-[-240%]"></div>
            <Copy animateOnScroll={true}>
              <h3 className="text-mana relative z-20 text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
                {item.title}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture relative z-20 pt-3 text-center text-sm font-semibold md:text-lg">
                {item.desc}
              </p>
            </Copy>
          </div>

          {/* Content Section */}
          <div
            className={`relative mx-auto flex max-w-[1441px] items-center justify-between gap-4 px-2 sm:px-[60px] md:gap-6 lg:px-[100px] xl:-mt-16 2xl:px-[128px] ${
              index % 2 === 0
                ? "flex-col md:flex-row"
                : "flex-col md:flex-row-reverse"
            }`}
          >
            {/* Main Image with Background */}
            <div className="relative">
              <img
                className="w-full max-w-[299px]"
                src={item.image.url}
                alt="market"
              />
              <img
                className={`absolute top-[-25%] z-[-1] hidden w-full max-w-[330px] opacity-60 md:block ${
                  index % 2 === 0 ? "left-[-30%]" : "right-[-30%]"
                }`}
                src={item.image.url}
                alt="market"
              />
            </div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-[746px]">
              <h3 className="industry-shift-text text-lg font-medium md:text-2xl lg:text-3xl">
                {item.subTitle}
              </h3>
              <p className="text-steel pt-4 text-sm font-extralight md:text-lg lg:text-[22px]">
                {item.subDesc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketOpportunity;
