import React from "react";
import {
  ProofIcon1,
  ProofIcon2,
  ProofIcon3,
  ProofIcon4,
  ProofIcon5,
  ProofIcon6,
} from "../common/Icons";
import Copy from "../common/Copy";

const ProofWorking = () => {
  return (
    <div className="mx-auto w-full max-w-[1224px] px-4 pt-20 md:py-20">
      <div className="pt-5 pb-[57px] md:py-10">
        <Copy animateOnScroll={true}>
          <h2 className="text-mana text-center text-2xl font-semibold sm:text-3xl md:text-[40px] lg:text-[52px]">
            Why Contractor+?{" "}
          </h2>
        </Copy>
        <Copy animateOnScroll={true}>
          <p className="text-ironFixture pt-3 text-center text-sm font-semibold sm:text-lg md:text-xl lg:text-2xl">
            We’re the first and only OS for contractors. A connected system that
            moves as one cohesive engine to run the entire business. Contractor+
            removes every point of friction in the operation by automating the
            tasks, handoffs, and updates that usually slip through the cracks.
            It’s not a collection of point solutions, but one solution synced
            between each module.{" "}
          </p>
        </Copy>
      </div>
      <Copy animateOnScroll={true}>
        <h3 className="text-mana pb-3 text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
          Proof it’s working
        </h3>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-ironFixture pt-3 pb-[71px] text-center text-lg font-bold">
          This isn’t another FSM software. We built something contractors use,
          love, and stick with.
        </p>
      </Copy>
      <div className="relative">
        <div className="flex items-center justify-center pb-8">
          <img
            className="block w-full max-w-[180px] lg:hidden xl:max-w-[231px]"
            src="/images/svg/Proof-working-logo.svg"
            alt="proof"
          />
        </div>
        <img
          className="absolute top-1/2 left-1/2 hidden w-full max-w-[180px] -translate-x-1/2 -translate-y-1/2 transform lg:block xl:max-w-[231px]"
          src="/images/svg/Proof-working-logo.svg"
          alt="proof"
        />
        {/* desktop-view  */}
        <div className="flex flex-col-reverse items-center justify-between gap-10 sm:mb-8 sm:gap-4 lg:flex-row">
          <div className="lg:mix-w-[320px] w-full max-w-[228px] sm:max-w-[320px]">
            <div className="relative pr-[61px] sm:pr-0">
              <span className="absolute -right-[9%] bottom-0 sm:-right-20">
                <ProofIcon1 />
              </span>

              <h3 className="py-1 text-end text-base font-semibold text-white">
                $1M+ ARR
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold sm:text-end">
              With zero institutional capital
            </p>
          </div>
          <div className="lg:mix-w-[320px] w-full max-w-[228px] sm:max-w-[320px]">
            <div className="relative pl-[32px] sm:pl-0">
              <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                <ProofIcon2 />
              </span>
              <h3 className="py-1 text-start text-base font-semibold text-white">
                ~6%
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
              of freemium users organically convert to a paid plan
            </p>
          </div>
        </div>
        <div className="mb-8 hidden flex-col-reverse items-center justify-between gap-4 sm:flex lg:flex-row">
          <div className="mix-w-[320px] w-full max-w-[320px]">
            <div className="relative">
              <span className="absolute -right-20 bottom-0">
                <ProofIcon3 />
              </span>
              <h3 className="py-1 text-end text-base font-semibold text-white">
                4.7★
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-end text-xs font-semibold">
              Avg rating across Capterra, G2, Apple, and Google Play
            </p>
          </div>
          <div className="mix-w-[320px] w-full max-w-[320px]">
            <div className="relative">
              <span className="absolute bottom-0 -left-20">
                <ProofIcon4 />
              </span>
              <h3 className="py-1 text-start text-base font-semibold text-white">
                94%
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
              Gross retention
            </p>
          </div>
        </div>
        <div className="mb-8 hidden flex-col-reverse items-center justify-between gap-4 sm:flex lg:flex-row">
          <div className="mix-w-[320px] w-full max-w-[320px]">
            <div className="relative">
              <span className="absolute -right-20 -bottom-4">
                <ProofIcon5 />
              </span>
              <h3 className="py-1 text-end text-base font-semibold text-white">
                ~150%
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-end text-xs font-semibold">
              YoY growth
            </p>
          </div>
          <div className="mix-w-[320px] w-full max-w-[320px]">
            <div className="relative">
              <span className="absolute -bottom-4 -left-20">
                <ProofIcon6 />
              </span>
              <h3 className="py-1 text-start text-base font-semibold text-white">
                $700K
              </h3>
            </div>
            <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
              All built with just $700K from angels and Reg CF
            </p>
          </div>
        </div>
        {/* mobile view */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-center pt-[42px]">
            <div className="lg:mix-w-[320px] w-full max-w-[228px] sm:max-w-[320px]">
              <div className="relative pl-[32px] sm:pl-0">
                <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                  <ProofIcon2 />
                </span>
                <h3 className="py-1 text-start text-base font-semibold text-white">
                  94%
                </h3>
              </div>
              <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
                Gross retention
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start pt-[42px]">
            <div className="lg:mix-w-[320px] w-full max-w-[246px] sm:max-w-[320px]">
              <div className="relative pr-[61px] sm:pr-0">
                <span className="absolute -right-[9%] bottom-0 sm:-right-20">
                  <ProofIcon1 />
                </span>
                <h3 className="py-1 text-end text-base font-semibold text-white">
                  4.7★
                </h3>
              </div>
              <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold sm:text-end">
                Avg rating across Capterra, G2, Apple, and Google Play
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end pt-[42px]">
            <div className="lg:mix-w-[320px] w-full max-w-[240px] sm:max-w-[320px]">
              <div className="relative pl-[32px] sm:pl-0">
                <span className="absolute bottom-0 left-[-19%] sm:-left-20">
                  <ProofIcon2 />
                </span>
                <h3 className="py-1 text-start text-base font-semibold text-white">
                  $700K
                </h3>
              </div>
              <p className="text-lightBlackGrey pt-2 text-start text-xs font-semibold">
                All built with just $700K from angels and Reg CF
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start pt-[42px]">
            <div className="lg:mix-w-[320px] w-full max-w-[290px] sm:max-w-[320px]">
              <div className="relative pr-[61px] sm:pr-0">
                <span className="absolute -right-[9%] bottom-0 sm:-right-20">
                  <ProofIcon1 />
                </span>
                <h3 className="py-1 text-end text-base font-semibold text-white">
                  ~150%
                </h3>
              </div>
              <p className="text-lightBlackGrey pt-2 pr-[61px] text-end text-xs font-semibold sm:pl-0">
                YoY growth
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="ccc mx-auto w-fit text-center text-base font-semibold tracking-[-0.32px] not-only:mt-[65px]">
        Now imagine what we’ll do with <br className="block sm:hidden" /> real
        capital.
      </p>
    </div>
  );
};

export default ProofWorking;
