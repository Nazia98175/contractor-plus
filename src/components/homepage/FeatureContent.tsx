"use client";
import Image from "next/image";
import React from "react";
import { BlurIcon } from "../common/Icons";

type FeatureContent = {
  title: string;
  mainDesc?: string;
  description: string;
  titleImg: string;
};

type Props = {
  featureContents: FeatureContent[];
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

const FeatureContent = ({ featureContents, contentRefs }: Props) => {
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
          <div className="bg-white py-4 px-5 h-[276px] lg:h-[245px] w-full relative rounded-lg shadow-sm overflow-hidden">
            <Image
              src={content.titleImg}
              alt="Feature"
              fill
              className="object-cover rounded-md"
            />
            <BlurIcon className="absolute inset-0 w-full h-full mix-blend-color-dodge" />
          </div>
          <div className="text-base md:text-lg font-medium text-secondary max-w-[615px] font-jakarta space-y-2">
            {content.mainDesc && (
              <p className="text-wallStreet">{content.mainDesc}</p>
            )}
            <p>{content.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureContent;
