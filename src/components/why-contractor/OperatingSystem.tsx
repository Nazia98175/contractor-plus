import React from "react";
import { FooterLogoIcon } from "../common/Icons";
import { operatingSystemList } from "../common/Helper";
import Image from "next/image";

const OperatingSystem = () => {
  return (
    <div className="bg-kuroiBlack relative z-10 overflow-hidden">
      <div className="bg-athenaBlue absolute top-[0px] left-0 hidden h-[500px] w-[60px] rotate-45 opacity-25 blur-[40px] md:block"></div>
      <span className="absolute top-[0px] right-0 hidden w-full max-w-[614px] overflow-hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          viewBox="0 0 770 1256"
        >
          <g
            filter="url(#filter0_f_2968_3209)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              stroke="url(#paint0_linear_2968_3209)"
              strokeLinecap="round"
              strokeWidth="432"
              d="m304.021 304.779 355 355 354.999 355.001"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2968_3209"
              x1="591.605"
              x2="948.407"
              y1="971.38"
              y2="839.101"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.062" stopOpacity="0"></stop>
              <stop offset="0.997" stopColor="#EE1E25"></stop>
              <stop offset="1" stopColor="#fff"></stop>
            </linearGradient>
            <filter
              id="filter0_f_2968_3209"
              width="1318"
              height="1318"
              x="0.021"
              y="0.779"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_2968_3209"
                stdDeviation="44"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </span>

      <div className="mx-auto max-w-[855px] pt-10 max-xl:px-4 sm:pt-20">
        <div className="mx-auto max-w-[222px]">
          {" "}
          <FooterLogoIcon />
        </div>
        <h2
          style={{
            backgroundImage:
              "linear-gradient(95.5deg, #FFFFFF, #FFFFFF, #BE0C0C)",
          }}
          className="section-heading max-sm:!text-custom-4xl bg-gradient-to-95 from-[#FFFFFF] to-[#BE0C0C] bg-clip-text pt-9 text-center !font-normal text-transparent sm:pt-4"
        >
          The only operating system for build and service contractors
        </h2>
        <p
          style={{
            backgroundImage: "linear-gradient(0deg, #ADB1B5, #00000033)",
          }}
          className="bg-clip-text pt-2 pb-[1px] text-center text-sm leading-[110%] text-transparent sm:text-base xl:text-lg"
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
          className="bg-clip-text pb-11.5 text-center text-[26px] !leading-[100%] font-light tracking-tight text-transparent max-lg:text-xl max-md:text-base max-sm:!font-semibold"
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
                className={`relative flex min-h-20 w-1/3 flex-col justify-center rounded-xl max-lg:min-h-18 max-lg:w-1/2 max-md:max-h-16.5 max-md:min-h-16 max-md:max-w-[150px] lg:items-center ${isNotFirstInRowDesktop ? "lg:gradient-grey-border-left" : ""} ${isNotFirstInRowMobile ? "max-lg:gradient-grey-border-left" : ""} ${isSecondLast ? "lg:gradient-grey-border-right" : ""} ${isLast ? "gradient-grey-border-top" : ""} `}
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
