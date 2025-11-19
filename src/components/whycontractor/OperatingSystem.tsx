import React from "react";
import { FooterLogoIcon, WhyContractorGradientIcon } from "../common/Icons";
import FeaturesGrid from "./FeaturesGrid";

interface PropOperatingSystem {
  image: any;
  featuresPlatform: any;
}

const OperatingSystem: React.FC<PropOperatingSystem> = ({
  image,
  featuresPlatform,
}) => {
  return (
    <div className="bg-kuroiBlack relative z-10">
      <img
        className="absolute top-[-20px] left-0 h-[72px] w-full sm:h-[100px]"
        src="/images/webp/blur-effect.webp"
        alt="blur effect"
      />
      <div className="bg-athenaBlue absolute top-[0px] left-0 hidden h-[500px] w-[60px] rotate-45 opacity-25 blur-[40px] md:block"></div>
      <span className="absolute top-[0px] right-0 hidden w-full max-w-[614px] overflow-hidden md:block">
        <WhyContractorGradientIcon />
      </span>

      <div className="mx-auto max-w-[855px] pt-16 max-xl:px-4 sm:pt-20">
        <div className="mx-auto max-w-[222px]">
          <FooterLogoIcon />
        </div>
        <h2 className="section-heading service-text max-sm:!text-custom-4xl pt-9 text-center !font-normal sm:pt-4">
          {featuresPlatform?.title}
        </h2>
        <p className="industry-shift-text pt-2 pb-[1px] text-center text-sm leading-[110%] sm:text-base xl:text-lg">
          {featuresPlatform?.subTitle}
        </p>
      </div>
      <div className="mx-auto w-full max-w-[974px] pt-23 pb-20.5 max-xl:px-4 max-lg:pt-15 max-lg:pb-15 max-md:px-3 max-md:pt-12.5 max-md:pb-13">
        <p className="industry-shift-text pb-11.5 text-center text-[26px] !leading-[100%] font-light max-lg:text-xl max-md:text-base max-sm:!font-semibold">
          {featuresPlatform?.description}
        </p>
      <FeaturesGrid features={featuresPlatform?.features} />

      </div>
    </div>
  );
};

export default OperatingSystem;
