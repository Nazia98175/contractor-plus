"use client";
import Image from "next/image";
import React from "react";
import { BlurIcon } from "../common/Icons";

type FeatureContent = {
  title: string;
  highlight?: string;
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
          className="p-3.5 bg-doctor rounded-2xl w-full space-y-2.5 md:space-y-3 lg:space-y-[18px] xl:scroll-mt-24 lg:scroll-mt-16 md:scroll-mt-12 scroll-mt-8"
        >
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-wallStreet leading-[100%]">
            {content.title}
          </h4>
          <div className="bg-white p-3 h-[230px] lg:h-[245px] w-full relative rounded-lg overflow-hidden">
            <Image
              src={content.titleImg}
              alt="Feature"
              fill
              className="object-cover rounded-md"
            />
            <BlurIcon className="absolute inset-0 w-full h-full mix-blend-luminosity" />
          </div>
          <p className="text-base md:text-lg font-medium text-wallStreet  max-w-[615px] space-y-2">
            {content.description}
            {content.highlight && (
              <span className="text-secondary"> {content.description}</span>
            )}
          </p>
        </div>
      ))}
    </>
  );
};

export default FeatureContent;
