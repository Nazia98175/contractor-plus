"use client";

import type { ContractorIndustry as ContractorIndustryType } from "@/types";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Copy from "../common/Copy";
import { SliderRedLineIcon } from "../common/Icons";

// Lazy load the slider component
const ContractorIndustrySlider = dynamic(
  () => import("./ContractorIndustrySlider"),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-[400px] w-full animate-pulse">
        <div className="mx-auto flex h-full items-center justify-center gap-4">
          <div className="bg-lightBlack h-[300px] w-64 rounded-xl" />
          <div className="bg-lightBlack hidden h-[300px] w-64 rounded-xl md:block" />
          <div className="bg-lightBlack hidden h-[300px] w-64 rounded-xl lg:block" />
        </div>
      </div>
    ),
  },
);

interface TheIndustryProps {
  contractorIndustry: ContractorIndustryType;
}

const ContractorIndustry: React.FC<TheIndustryProps> = ({
  contractorIndustry,
}) => {
  return (
    <section className="relative overflow-hidden">
      <span className="absolute top-0 left-0 block h-full w-full md:hidden">
        <SliderRedLineIcon />
      </span>
      <div className="relative z-30 mx-auto w-full max-w-[1010px] pt-7 md:pt-8">
        <div className="px-2">
          <div className="relative mx-auto w-full max-w-[883px] text-center">
            <Copy animateOnScroll={true}>
              <h3 className="section-heading gradient-text text-center">
                {contractorIndustry?.title ?? ""}
              </h3>
            </Copy>
          </div>
          <Copy animateOnScroll={true}>
            <h6 className="text-superSilver font-jakarta py-4 text-center text-base font-medium sm:font-normal">
              {contractorIndustry?.subTitle ?? ""}
            </h6>
          </Copy>
        </div>

        <Suspense
          fallback={
            <div className="relative h-[400px] w-full animate-pulse">
              <div className="mx-auto flex h-full items-center justify-center gap-4">
                <div className="bg-lightBlack h-[300px] w-64 rounded-xl" />
                <div className="bg-lightBlack hidden h-[300px] w-64 rounded-xl md:block" />
                <div className="bg-lightBlack hidden h-[300px] w-64 rounded-xl lg:block" />
              </div>
            </div>
          }
        >
          <ContractorIndustrySlider imageCard={contractorIndustry?.imageCard} />
        </Suspense>
      </div>
    </section>
  );
};

export default ContractorIndustry;
