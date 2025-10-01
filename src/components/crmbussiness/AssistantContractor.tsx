import React from "react";
import Copy from "../common/Copy";
import Button from "../common/Button";
import { TrynowIcon, TrynowWhiteIcon } from "../common/Icons";
import CloudsAnimation from "../common/CloudsAnimation";

const AssistantContractor = () => {
  return (
    <section className="relative z-20 overflow-hidden px-2 xl:overflow-visible">
      <div className="absolute top-[-2%] left-0 z-[99] h-[6%] w-[120%] bg-white blur-[2px]"></div>
      <CloudsAnimation
        className="pointer-events-none absolute top-[-13%] -bottom-[11%] left-0 z-50 flex h-[67%] w-full rotate-180 blur-[2px] sm:top-[-11%] lg:blur-[0]"
        imageClass="h-[50%] z-20 !bottom-[-30px]"
        imageClassMobile="h-[50%] z-20 !bottom-[52px]"
        cloud1Class="md:bottom-0 !bottom-[47px] sm:bottom-[65px] h-[84px]"
        cloud2Class="bottom-0"
      />
      <div className="mx-auto flex max-w-[990px] flex-col items-center justify-center px-4 pt-[134px] pb-10 sm:pt-[169px]">
        <Copy animateOnScroll={true}>
          <h4 className="text-decemberSky pb-4 text-center text-[22px] font-extrabold sm:text-[28px] md:text-[38px]">
            The Go-To AI Assistant For Contractors
          </h4>
        </Copy>
        <Copy animateOnScroll={true}>
          <p className="text-secondary pb-8 text-center text-sm font-medium sm:text-lg md:text-xl">
            Harness the power of BigChief & let the world’s most intuitive
            construction AI assistant handle the hustle for you. Lower costs.
            Less Hassle. Greater efficiency.
          </p>
        </Copy>
        <Button className="flex w-full max-w-[300px] items-center justify-center gap-3">
          Only at Contractor+
          <TrynowWhiteIcon />
        </Button>
      </div>
    </section>
  );
};

export default AssistantContractor;
