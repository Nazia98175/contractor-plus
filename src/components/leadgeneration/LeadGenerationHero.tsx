"use client";
import { useOneLinkRedirect } from "@/app/lib/handleOneLinkRedirect";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import AppsRating from "../common/AppsRating";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeTrialButton from "../common/FreeTrialButton";
interface LeadGenerationHeroProps {
  tag: string;
  heading: string;
  description: string;
  getStartedFreeBtn: string;
  mobileBtn: string;
  nccTxt: string;
  imgUrl: string;
}

const LeadGenerationHero: React.FC<LeadGenerationHeroProps> = ({
  tag,
  heading,
  description,
  getStartedFreeBtn,
  mobileBtn,
  nccTxt,
  imgUrl,
}) => {
  return (
    <section className="main-container flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-4">
      <div className="w-full max-w-[650px] xl:max-w-[732px]">
        <CardReveal distance={30} delay={0.1}>
          <div className="hidden items-center justify-center pb-1 md:flex lg:justify-start">
            <span className="bg-darkKnight text-wallStreet rounded-[6px] px-3 py-1 text-xs font-semibold">
              {tag}
            </span>
          </div>
        </CardReveal>
        <h2 className="xs:text-[28px] w-fit text-center text-[26px] font-extrabold text-white sm:mx-auto sm:text-4xl lg:text-start lg:text-5xl">
          {heading}
        </h2>
        <p className="text-decemberSky mt-4 w-full text-center text-xs font-medium sm:text-sm md:my-[26px] md:text-base lg:text-start lg:text-lg xl:max-w-[75%]">
          {description}
        </p>
        <div className="mx-auto flex w-fit flex-wrap-reverse items-center justify-center gap-4 sm:gap-5 lg:mx-0 lg:w-full lg:justify-start">
          <AppsRating delayApple={0.5} delayGoogle={0.6} />
          <CardReveal distance={50} delay={0.8} className="w-full sm:w-fit">
            <div className="flex w-full flex-col items-center gap-1.5 px-2 sm:w-fit">
              <FreeTrialButton
                className="!hidden sm:!flex"
                text={getStartedFreeBtn}
                showIcon={false}
              />
              <FreeTrialButton
                showIcon={false}
                className="mt-4 !flex w-full sm:!hidden"
                text={mobileBtn}
              />
              <CardRequiredButton
                className="text-wallStreet sm:text-secondary"
                text={nccTxt}
              />
            </div>
          </CardReveal>
        </div>
      </div>
      <div className="relative h-full max-h-[436px] w-full max-w-[650px] lg:max-w-[450px]">
        <Image
          className="h-full max-h-[436px] w-full rounded-xl object-cover"
          src={imgUrl}
          alt={heading}
          width={450}
          height={436}
        />
        <div className="lead-generation-img-overlay pointer-events-none absolute top-0 left-0 z-0 h-full w-full"></div>
      </div>
    </section>
  );
};

export default LeadGenerationHero;
