"use client";
import React from "react";
import { featureContentss } from "../common/Helper";
import LottieAnimation from "../common/LottieAnimation";
import Image from "next/image";

type FeatureContent = {
  id: number;
  title: string;
  cardQuote: string | null;
  userName: string | null;
  cardImg: any | null;
  imgSrc: string;
  content: {
    id: number;
    title: string;
    desc: string;
  }[];
};

type Props = {
  featureContents: FeatureContent[];
  contentRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
};

const FeatureContent = ({ featureContents, contentRefs }: Props) => {
  return (
    <>
      {featureContents
        ?.slice(0, featureContents?.length - 1)
        ?.map((content: any, index: any) => (
          <div
            key={index}
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="bg-doctor w-full scroll-mt-8 space-y-2.5 rounded-2xl p-3.5 md:scroll-mt-12 md:space-y-3 lg:scroll-mt-16 lg:space-y-[18px] xl:scroll-mt-24"
          >
            <h4 className="text-wallStreet text-start text-lg leading-[110%] font-bold sm:text-xl md:text-2xl">
              {content?.subTitle ?? ""}
            </h4>
            <div className="relative w-full overflow-hidden">
              <LottieAnimation
                loop={false}
                animationData={featureContentss?.[index]?.titleImg}
                className="hidden sm:block"
                playOnce={true} // Enable play-once behavior
              />

              <Image
                src={featureContentss?.[index].imgSrc}
                alt={content?.subTitle || "Feature Image"}
                width={611}
                height={245}
                className="object-cover sm:hidden"
              />
            </div>
            <p className="text-wallStreet space-y-2 text-sm font-medium sm:text-base lg:max-w-[615px] lg:text-lg">
              {content.description}
            </p>
          </div>
        ))}
    </>
  );
};

export default FeatureContent;
