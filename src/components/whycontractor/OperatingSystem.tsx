import Image from "next/image";
import React from "react";
import CardReveal from "../common/CardReveal";
import { operatingSystemList } from "../common/Helper";
import { FooterLogoIcon, WhyContractorGradientIcon } from "../common/Icons";

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
        <div className="flex flex-wrap items-center justify-center gap-y-[18px]">
          {featuresPlatform?.features?.map((obj: any, i: number) => {
            const isSecondLast = i === operatingSystemList.length - 2;
            const isLast = i === operatingSystemList.length - 1;
            const isNotFirstInRowDesktop = i % 3 !== 0;
            const isNotFirstInRowMobile = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`relative flex min-h-20 w-1/3 flex-col justify-center rounded-xl max-lg:min-h-18 max-lg:w-1/2 max-md:max-h-16.5 max-md:min-h-16 max-md:max-w-[150px] lg:items-center ${isNotFirstInRowDesktop ? "lg:gradient-grey-border-left" : ""} ${isNotFirstInRowMobile ? "max-lg:gradient-grey-border-left" : ""} ${isSecondLast ? "lg:gradient-grey-border-right w-[50%]" : ""} ${isLast ? "gradient-grey-border-top w-[50%]" : ""} `}
              >
                <CardReveal
                  delay={0.2}
                  distance={50}
                  className="flex flex-col items-center justify-center gap-2.5 p-2.5 max-md:mx-auto max-md:max-w-32.5"
                >
                  <span>
                    {obj?.icon !== null && (
                      <Image
                        width={obj?.icon?.width}
                        height={obj?.icon?.height}
                        alt={obj?.icon?.alternativeText || obj?.icon?.name}
                        src={obj?.icon?.url}
                      ></Image>
                    )}
                  </span>
                  <p className="industry-shift-text text-lg leading-[100%] font-bold opacity-80 max-lg:text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                    {obj.title}
                  </p>
                </CardReveal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperatingSystem;
