import React from "react";
import { FooterLogoIcon } from "../common/Icons";
import { operatingSystemList } from "../common/Helper";

const OperatingSystem = () => {
  return (
    <div>
      <div className="mx-auto max-w-[855px]">
        <div className="mx-auto max-w-[222px]">
          {" "}
          <FooterLogoIcon />
        </div>
        <h2 className="section-heading pt-4 text-center text-white">
          The only operating system for build and service contractors
        </h2>
        <p className="text-superSilver pt-2 text-center leading-[100%]">
          Contractor+ is where friction goes to die
        </p>
      </div>
      <div className="mx-auto w-full max-w-[974px] pt-15.5 pb-20.5 max-xl:px-4 max-lg:pt-15 max-lg:pb-15 max-md:px-3 max-md:pt-12.5 max-md:pb-13">
        <p className="pb-11.5 text-center text-[26px] leading-[100%] font-light tracking-tight text-[#A9A9A9] max-lg:text-xl max-md:text-base">
          Replace the stack of tools and apps you’ve been duct-taping together
          with a single platform to replace them all. No complexity, no sticker
          shock.{" "}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-4 max-md:gap-y-5">
          {operatingSystemList.map((obj, i) => {
            const isSecondLast = i === operatingSystemList.length - 2;
            const isLast = i === operatingSystemList.length - 1;
            const isNotFirstInRowDesktop = i % 3 !== 0;
            const isNotFirstInRowMobile = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`flex min-h-20 w-1/3 flex-col justify-center rounded-xl border-[#A9A9A9] max-lg:min-h-18 max-lg:w-1/2 max-md:max-h-16.5 max-md:min-h-16 max-md:max-w-[150px] lg:items-center ${isNotFirstInRowDesktop ? "lg:border-l" : ""} ${isNotFirstInRowMobile ? "max-lg:border-l" : ""} ${isSecondLast ? "lg:border-r" : ""} ${isLast ? "border-t border-l-0" : ""} `}
              >
                <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 max-md:mx-auto max-md:max-w-32.5">
                  <span>{obj.icon}</span>
                  <p className="text-lg leading-[100%] font-bold text-white opacity-80 max-lg:text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
                    {obj.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OperatingSystem;
