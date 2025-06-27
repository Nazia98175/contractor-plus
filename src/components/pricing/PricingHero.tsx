import React from "react";
import TextAnimation from "../common/TextAnimation";
import CommonFormField from "../common/CommonFormField";
import CloudsAnimation from "../common/CloudsAnimation";
import Image from "next/image";
import { DownScrollIcon } from "../common/Icons";
import { PlansProps } from "@/types";

const PricingHero: React.FC<PlansProps> = ({ onScroll }) => {
  return (
    <section className="relative px-2 pt-[110px] pb-[150px] sm:pt-[137px] xl:pb-24">
      <div className="absolute -bottom-[12%] left-1/2 z-10 h-16 w-[110%] -translate-x-1/2 bg-white blur-lg md:-bottom-[11%]"></div>
      <CloudsAnimation className="-bottom-[4%] !-z-0" />
      <Image
        src="/images/webp/pricing.webp"
        alt="Pricing Hero"
        height={1000}
        width={200}
        priority
        className="absolute top-0 right-0 -z-10 hidden h-full w-full max-w-[200px] object-contain xl:block"
      />
      <div className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
        Plans and Pricing
      </div>
      <div className="relative mx-auto w-full max-w-[650px]">
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading mb-4 hidden bg-[linear-gradient(180deg,_#FFFFFF_25%,_#0C1711_177.29%)] bg-clip-text text-center !font-extralight text-transparent sm:block">
            Free to start, free to stay. <br /> Level up when you’re ready.
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0}>
          <h2 className="main-heading xs:max-w-[80%] mx-auto mt-1.5 mb-4 bg-[linear-gradient(276.25deg,_rgba(245,25,30,0.3)_-11.28%,_rgba(255,255,255)_45%)] bg-clip-text text-center !font-medium text-transparent sm:hidden">
            Free to start, free to stay. Level up when you’re ready.
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={false} delay={0.4}>
          <p className="hero-description text-trolleyGrey sm:text-cyanBlue text-center">
            What the other guys charge extra for, Contractor+ offers without
            hidden charges. Upgrade when you need more firepower to grow.
          </p>
        </TextAnimation>
        <div className="pt-5 xl:pt-7">
          <CommonFormField
            title=""
            sub_title=""
            ncc="No credit card required"
            placeholder="Your email"
            createBtn="Get started FREE"
            mobileBtn="Download FREE App"
            showTitle={false}
            variant="secondary"
            showDescription={false}
          />
        </div>

        <button
          onClick={onScroll}
          className="text-pantone mx-auto mt-12 hidden w-fit duration-300 hover:text-white xl:flex"
        >
          <DownScrollIcon />
        </button>
      </div>
    </section>
  );
};

export default PricingHero;
