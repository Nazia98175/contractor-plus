"use client";
import Copy from "../common/Copy";
import CoreFeaturesCard from "./CoreFeaturesCard";

interface CoreFeaturesData {
  title: string;
  subTitle: string;
  features?: any;
}

interface CoreFeaturesProps {
  coreFeatures: CoreFeaturesData;
}

const CoreFeatures: React.FC<CoreFeaturesProps> = ({ coreFeatures }) => {
  return (
    <section className="relative z-20 bg-white">
      <div className="absolute top-[-2px] z-50 h-2 bg-red-900"></div>
      <div className="mx-auto w-full max-w-[985px] pt-12 text-center md:text-start">
        <Copy delay={0.2}>
          <h4 className="sub-heading text-lightBlack w-full font-semibold md:w-fit">
            {coreFeatures?.title}
          </h4>
        </Copy>
        <Copy delay={0.4}>
          <h5 className="mt-3 leading-[130%]">{coreFeatures?.subTitle}</h5>
        </Copy>
        <CoreFeaturesCard featuresList={coreFeatures?.features} />
      </div>
    </section>
  );
};

export default CoreFeatures;
