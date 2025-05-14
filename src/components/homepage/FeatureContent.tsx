"use client";
import React from "react";

type Content = {
  title: string;
  mainDesc?: string;
  description: string;
};

type Props = {
  features: string[];
  featureContents: Content[];
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  t: (key: string) => string;
};

const FeatureContent = ({
  features,
  featureContents,
  contentRefs,
  t,
}: Props) => {
  return (
    <>
      {featureContents.map((content, index) => (
        <div
          key={index}
          ref={(el) => {
            contentRefs.current[index] = el;
          }}
          className="p-3.5 bg-gray-100 rounded-2xl w-full space-y-[18px] xl:scroll-mt-24 lg:scroll-mt-16 md:scroll-mt-12 scroll-mt-8"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-wallStreet leading-[100%] font-jakarta">
            {content.title}
          </h4>
          <div className="bg-white py-4 px-5 h-[276px] lg:h-[245px] w-full relative rounded-lg shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-400">
              {features[index]} {t("visualization")}
            </div>
          </div>
          <p className="text-base md:text-lg font-medium text-secondary max-w-[615px] font-jakarta">
            {content.mainDesc && (
              <span className="text-wallStreet inline-block">
                {content.mainDesc}
              </span>
            )}
            {content.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeatureContent;
