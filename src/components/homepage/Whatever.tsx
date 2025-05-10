"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import { useTranslations } from "next-intl";
const leftIcons = [
  {
    src: "/images/png/contractor-2.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px] md:ml-[124px] ml-[158px] md:mt-[21px] mt-2",
    imgSize: "lg:max-w-[38px] max-w-[29px]",
  },
  {
    src: "/images/png/contractor-1.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[58px] lg:h-[85px] h-[58px] md:ml-3 ml-10 md:mt-[60px] mt-10",
    imgSize: "lg:max-w-[38px] max-w-[26px]",
  },
  {
    src: "/images/png/contractor-3.png",
    width: 66,
    height: 17,
    size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px] md:ml-[223px] ml-[169px] md:-mt-[60px] -mt-10 mb-[42px] md:mb-[54px]",
    imgSize: "lg:max-w-[66px] max-w-[45px]",
  },
];

// Define right icons with similar structure
const rightIcons = [
  {
    src: "/images/png/contractor-4.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px] md:ml-[74px] md:ml-9 ml-6 md:mt-[58px] mt-10",
    imgSize: "lg:max-w-[38px] max-w-[29px]",
  },
  {
    src: "/images/png/contractor-6.png",
    width: 38,
    height: 38,
    size: "lg:w-[61px] w-[58px] lg:h-[61px] h-[58px] md:ml-[101px] ml-[69px] lg:mt-[102px] md:mt-[56px] mt-12 md:mb-[19px]",
    imgSize: "lg:max-w-[38px] max-w-[26px]",
  },
  {
    src: "/images/png/contractor-5.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[45px] lg:h-[85px] h-[45px] md:ml-[274px] ml-[202px] md:-mt-[110px] md:translate-y-[0px] -translate-y-[82px]",
    imgSize: "lg:max-w-[66px]  max-w-[18px]",
  },
];

const Whatever = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const t = useTranslations();
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        className="object-cover top-0 right-0 absolute -z-0 pointer-events-none lg:flex hidden"
        src={"/images/svg/large-comet.svg"}
        width={700}
        height={300}
        alt="large-comet"
      />
      <Image
        className="object-cover top-0 right-0 absolute -z-0 pointer-events-none flex lg:hidden"
        src={"/images/svg/large-comet-mobile.svg"}
        width={700}
        height={300}
        alt="large-comet"
      />

      <div className="pt-12 pb-[53px] overflow-visible w-full">
        <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center md:mb-8 mb-[21px]">
          {t("whatever")}
        </h3>

        <div className="max-w-[1002px] mx-auto px-2 lg:px-0">
          <div className="flex md:flex-row flex-col justify-center md:justify-between lg:gap-5 md:pt-5 md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
            {/* Left Side */}
            <div
              id="scene"
              className="left-section mx-auto md:mx-0 max-w-[280px] md:max-w-[409px] justify-center h-auto md:items-stretch items-center w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center relative "
            >
              {leftIcons.map((icon, i) => (
                <div
                  key={i}
                  className={`${icon.size} relative flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2`}
                >
                  <OnIcon className="absolute w-full h-full -z-1 pointer-events-none one" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                  <Image
                    className={`object-cover relative z-10 ${icon.imgSize}`}
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt="contractor"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Center */}
            <div className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30">
              <div className="second-border xl:p-5 p-3 relative z-30 w-fit">
                <div className="relative xl:w-[110px] lg:w-20 w-[55px] xl:h-[110px] lg:h-20 h-[55px] flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden third-border">
                  <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                  <div className="lg:max-w-[51px] max-w-[30px]  relative z-10 xl:p-0 p-0.5">
                    <Image
                      className="object-cover relative z-10 "
                      src="/images/png/center-icon.png"
                      width={51}
                      height={68}
                      alt="center-icon"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="right-section mx-auto md:mx-0 max-w-[280px] md:max-w-[409px] h-auto  w-full md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center relative">
              {rightIcons.map((icon, i) => (
                <div
                  key={i}
                  className={`${icon.size} relative  flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2`}
                >
                  <OnIcon className="absolute w-full h-full -z-1 pointer-events-none one" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                  <Image
                    className={`object-cover relative z-10 ${icon.imgSize}`}
                    src={icon.src}
                    width={icon.width}
                    height={icon.height}
                    alt="contractor"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-lg capitalize text-[#ADB1B5] opacity-90 text-center md:mt-6">
          5000+ Potential Integrations
        </p>
      </div>
    </section>
  );
};

export default Whatever;
