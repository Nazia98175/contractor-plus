import React from "react";
import { FooterLogoIcon } from "../common/Icons";
import { operatingSystemList } from "../common/Helper";

const OperatingSystem = () => {
  return (
    <div className="relative z-10 bg-kuroiBlack">
      <div className="mx-auto max-w-[855px] max-xl:px-4 pt-10 sm:pt-20">
        <div className="mx-auto max-w-[222px]">
          {" "}
          <FooterLogoIcon />
        </div>
        <h2
          style={{
            backgroundImage:
              "linear-gradient(95.5deg, #FFFFFF, #FFFFFF, #BE0C0C)",
          }}
          className="section-heading !font-normal bg-gradient-to-95 from-[#FFFFFF] to-[#BE0C0C] bg-clip-text pt-4 text-center text-transparent"
        >
          The only operating system for build and service contractors
        </h2>
        <p
          style={{
            backgroundImage: "linear-gradient(0deg, #ADB1B5, #00000033)",
          }}
          className="bg-clip-text pt-2 pb-[1px] text-center leading-[110%] text-transparent text-sm sm:text-base xl:text-lg"
        >
          Contractor+ is where friction goes to die
        </p>
      </div>
      <div className="mx-auto w-full max-w-[974px] pt-23 pb-20.5 max-xl:px-4 max-lg:pt-15 max-lg:pb-15 max-md:px-3 max-md:pt-12.5 max-md:pb-13">
        <p
          style={{
            backgroundImage:
              "linear-gradient(180deg, #A9A9A9 25%, #0C1711 177.29%)",
          }}
          className="bg-clip-text pb-11.5 text-center text-[26px] leading-[100%] font-light tracking-tight text-transparent max-lg:text-xl max-md:text-base"
        >
          Replace the stack of tools and apps you’ve been duct-taping together
          with a single platform to replace them all. No complexity, no sticker
          shock.{" "}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-[18px]">
          {operatingSystemList.map((obj, i) => {
            const isSecondLast = i === operatingSystemList.length - 2;
            const isLast = i === operatingSystemList.length - 1;
            const isNotFirstInRowDesktop = i % 3 !== 0;
            const isNotFirstInRowMobile = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`flex min-h-20 w-1/3 flex-col justify-center rounded-xl border-[#5050509a] max-lg:min-h-18 max-lg:w-1/2 max-md:max-h-16.5 max-md:min-h-16 max-md:max-w-[150px] lg:items-center ${isNotFirstInRowDesktop ? "lg:border-l" : ""} ${isNotFirstInRowMobile ? "max-lg:border-l" : ""} ${isSecondLast ? "lg:border-r" : ""} ${isLast ? "border-t border-l-0" : ""} `}
              >
                <div className="flex flex-col items-center justify-center gap-2.5 p-2.5 max-md:mx-auto max-md:max-w-32.5">
                  <span>{obj.icon}</span>
                  <p
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #A9A9A9 25%, #0C1711 177.29%)",
                    }}
                    className="bg-clip-text text-lg leading-[100%] font-bold text-transparent opacity-80 max-lg:text-center max-lg:text-base max-md:text-sm max-sm:text-xs"
                  >
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
