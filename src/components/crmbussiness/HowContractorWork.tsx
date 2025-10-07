"use client";
import Image from "next/image";
import React from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import FreeTrialButton from "../common/FreeTrialButton";
import { CheckIcon } from "../common/Icons";
import Copy from "../common/Copy";
import CardReveal from "../common/CardReveal";
interface Content {
  title: string;
}

interface LikeYouDo {
  title: string;
  content: Content[];
}

interface Props {
  data?: LikeYouDo;
  ncc: string;
  trackProperties?: any;
}
const HowContractorWork: React.FC<Props> = ({ ncc, trackProperties }) => {
  if (!trackProperties?.featuresList?.[1]?.content?.length) return null;
  return (
    <>
      <section className="relative z-20 mx-auto flex w-full max-w-[1064px] flex-col items-center justify-between gap-5 px-2 pt-7 leading-0 sm:py-14 md:flex-row md:gap-10 lg:pt-[48px] lg:pb-[54px]">
        {/* Left: Image */}
        <div className="flex w-full max-w-[480px] items-center justify-center">
          <img
            src={trackProperties?.featuresList?.[1]?.cardImg.url || null}
            alt="Illustration showing contractor workflow"
            className="h-auto w-full object-contain"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full max-w-[742px] space-y-4 lg:space-y-5">
          <Copy animateOnScroll={true} delay={0.3}>
            <h3 className="text-winterWay hidden text-[22px] !leading-[130%] font-extrabold tracking-[-0.72px] sm:block sm:text-2xl sm:font-semibold md:text-3xl xl:text-4xl">
              {trackProperties?.featuresList?.[1]?.title}
            </h3>
            <h3 className="gradient-text-2 xs:max-w-[83%] block max-w-[91%] text-[22px] !leading-[130%] font-extrabold tracking-[-0.72px] sm:hidden sm:max-w-full">
              {trackProperties?.featuresList?.[1]?.title}
            </h3>
          </Copy>

          <ul className="space-y-[14px] sm:space-y-3 lg:space-y-5">
            {trackProperties?.featuresList?.[1]?.content?.map(
              (feature: any, index: number) => (
                <CardReveal delay={0.2 + index * 0.1} distance={20} key={index}>
                  <div key={index}>
                    <li className="text-lightBlack flex gap-2.5 text-xs font-medium sm:items-start sm:px-2 sm:text-sm sm:font-semibold md:px-3 md:py-2.5 md:text-base xl:text-lg">
                      <CheckIcon
                        className="mt-0.5 h-full w-full max-w-4 min-w-4 md:max-w-6 md:min-w-5"
                        width={25}
                        height={25}
                      />
                      <span>{feature?.title}</span>
                    </li>
                    {feature?.desc && (
                      <p className="font-semibild text-wallStreet mt-2.5 text-sm leading-[100%] md:text-lg lg:text-base">
                        {feature?.desc}
                      </p>
                    )}
                  </div>
                </CardReveal>
              ),
            )}
          </ul>
        </div>
      </section>

      <div className="relative z-20 hidden flex-col items-center justify-center gap-2.5 px-2 sm:flex">
        <FreeTrialButton
          ariaLabel="freeTrial"
          className="gap-1.5"
          text={trackProperties?.btnText}
        />
        <CardRequiredButton className="text-wallStreet" text={ncc} />
      </div>
    </>
  );
};

export default HowContractorWork;
