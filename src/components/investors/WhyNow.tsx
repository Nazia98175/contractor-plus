import React from "react";
import {
  CommunicateRedIcon,
  KeepUpIcon,
  RedClockIcon,
  SmartPhoneIcon,
  UpArrowRedIcon,
} from "../common/Icons";
import Copy from "../common/Copy";

const WhyNow = () => {
  return (
    <section className="mx-auto max-w-[1920px] px-3 lg:px-0">
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full object-contain lg:block"
          src="/images/webp/why-now-bg.webp"
          alt="now bg"
        />
        <div className="mx-auto w-full max-w-[600px] pt-[26px] pb-[32px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <Copy animateOnScroll={true}>
            <h3 className="text-mana text-center text-2xl font-semibold sm:text-4xl lg:text-5xl xl:text-[52px]">
              Why now?
            </h3>
          </Copy>
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture pt-3 text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Field service is in the middle of a generational software shift.
            </p>
          </Copy>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full lg:block"
          src="/images/webp/why-now-bg2.webp"
          alt="now bg"
        />
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <UpArrowRedIcon />
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Labor and material costs are rising, businesses need to run as
              efficiently and effectively as possible
            </p>
          </Copy>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full lg:block"
          src="/images/webp/why-now-bg3.webp"
          alt="now bg"
        />
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <RedClockIcon />
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Customers demand speed in work and communication from contractors
            </p>
          </Copy>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full lg:block"
          src="/images/webp/why-now-bg4.webp"
          alt="now bg"
        />
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <CommunicateRedIcon />
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              AI is changing how contractors communicate, quote, schedule, and
              manage jobs
            </p>
          </Copy>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full lg:block"
          src="/images/webp/why-now-bg6.webp"
          alt="now bg"
        />
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <SmartPhoneIcon />
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              Smartphone-first crews are demanding tools that actually work in
              the field
            </p>
          </Copy>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 hidden h-full w-full lg:block"
          src="/images/webp/why-now-bg5.webp"
          alt="now bg"
        />
        <div className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center pt-[32px] pb-[41px] sm:py-[50px] md:py-[160px] lg:py-[180px] xl:py-[200px]">
          <KeepUpIcon />
          <Copy animateOnScroll={true}>
            <p className="text-ironFixture text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
              The industry’s dominant players have gotten too big, slow, and
              expensive to keep up.
            </p>
          </Copy>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
