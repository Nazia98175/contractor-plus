"use client";
import Image from "next/image";
import React from "react";
import CardRequiredButton from "../common/CardRequiredButton";
import Copy from "../common/Copy";
import FreeTrialButton from "../common/FreeTrialButton";
import { CheckIcon } from "../common/Icons";
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
  trackProperties: any;
}
const AutmateDoContacts: React.FC<Props> = ({ ncc, trackProperties }) => {
  return (
    <>
      <section className="relative z-20 mx-auto flex w-full max-w-[1064px] flex-col items-center justify-between gap-5 px-2 pt-7 leading-0 sm:py-14 md:flex-row md:gap-10 lg:pt-[48px] lg:pb-[54px]">
        <div className="w-full space-y-4 md:max-w-[522px] lg:space-y-5">
          <Copy animateOnScroll={true} delay={0.3}>
            <h3 className="text-winterWay hidden w-full text-2xl font-semibold sm:block">
              {trackProperties?.featuresList?.[0]?.title}
            </h3>
            <h3 className="gradient-text-2 block text-[22px] font-extrabold sm:hidden">
              {trackProperties?.featuresList?.[0]?.title}
            </h3>
          </Copy>

          <ul className="space-y-[14px] sm:space-y-3 lg:space-y-5">
            {trackProperties?.featuresList?.[0]?.content?.map(
              (feature: any, index: number) => (
                <li
                  key={index}
                  className="text-lightBlack flex gap-2.5 text-xs font-medium sm:items-start sm:px-2 sm:text-sm sm:font-semibold md:px-3 md:py-2.5 md:text-base xl:text-lg"
                >
                  <CheckIcon
                    className="mt-0.5 h-full w-full max-w-4 min-w-4 md:max-w-6 md:min-w-5"
                    width={25}
                    height={25}
                  />
                  <span>{feature?.title}</span>
                </li>
              ),
            )}
          </ul>

          <Copy animateOnScroll={true} delay={0.3}>
            <h5 className="text-wallStreet w-full text-sm font-semibold md:text-base">
              {trackProperties?.featuresList?.[0]?.conclusion}
            </h5>
          </Copy>
        </div>

        <div className="flex w-full items-center justify-center md:max-w-[480px]">
          <Image
            src={trackProperties?.featuresList?.[0]?.cardImg?.src}
            alt={
              trackProperties?.featuresList?.[0]?.cardImg?.alt || "Illustration"
            }
            width={480}
            height={600}
            className="h-auto w-full object-contain"
            sizes="(max-width: 767px) 480px"
          />
        </div>
      </section>
      <div className="relative z-20 hidden flex-col items-center justify-center gap-2.5 px-2 sm:flex">
        <FreeTrialButton className="gap-1.5" text={trackProperties?.btnText} />
        <CardRequiredButton className="text-wallStreet" text={ncc} />
      </div>
    </>
  );
};

export default AutmateDoContacts;
