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
          className="bg-doctor w-full scroll-mt-8 space-y-2.5 rounded-2xl p-3.5 md:scroll-mt-12 md:space-y-3 lg:scroll-mt-16 lg:space-y-[18px] xl:scroll-mt-24"
        >
          <h4 className="text-wallStreet text-lg leading-[100%] font-bold sm:text-xl md:text-2xl">
            {content.title}
          </h4>
          <div className="relative h-[230px] w-full overflow-hidden rounded-lg bg-white p-3 lg:h-[245px]">
            <Image
              src={content.titleImg}
              alt="Feature"
              width={611}
              height={245}
              className="rounded-md object-cover"
            />
            {/* <BlurIcon className="absolute inset-0 h-full w-full mix-blend-luminosity" /> */}
          </div>
          <p className="text-wallStreet max-w-[615px] space-y-2 text-sm font-medium sm:text-base lg:text-lg">
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
