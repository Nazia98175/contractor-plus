import Image from "next/image";
import React from "react";
import { OnIcon, OnIconw } from "../common/Icons";

const Whatever = () => {
  return (
    <section className="pt-12 pb-[53px] ">
      <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
        Whatever you use, Contractor+ connects
      </h3>
      <div className="main-container flex md:flex-row flex-col justify-center md:justify-between gap-5 pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
        <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
          <div className="p-2 lg:w-[85px] w-[55px] lg:h-[85px] h-[55px] absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ml-[124px] mt-11">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[38px] max-w-[29px]"
              src={"/images/png/contractor-2.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 lg:w-[85px] w-[58px] lg:h-[85px] h-[58px] absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden mt-[182px] ml-[13px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[38px] max-w-[26px]"
              src={"/images/png/contractor-1.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 lg:w-[85px] w-[62px] lg:h-[85px] h-[62px] absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ml-[227px] mt-[204px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[66px] max-w-[45px]"
              src={"/images/png/contractor-3.png"}
              width={66}
              height={17}
              alt="contractor"
              unoptimized
            />
          </div>
        </div>
        <div className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30">
          <div className="second-border xl:p-5 p-3 relative z-30 w-fit">
            <div className="relative xl:w-[110px] lg:w-20 w-[67px] xl:h-[110px] lg:h-20 h-[67px] flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden third-border">
              <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
              <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
              <Image
                className="object-cover relative z-10 lg:max-w-[51px] max-w-[31px]"
                src={"/images/png/center-icon.png"}
                width={51}
                height={68}
                alt="center-icon"
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
          <div className="p-2 lg:w-[85px] w-[55px] lg:h-[85px] h-[55px] absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ml-[53px] mt-[53px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[38px] max-w-7"
              src={"/images/png/contractor-4.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 lg:w-[85px] w-[46px] lg:h-[85px] h-[46px] absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden mt-[182px] right-[43px] bottom-[63px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[38px] max-w-5"
              src={"/images/png/contractor-5.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 lg:w-[61px] w-10 lg:h-[61px] h-10 absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ml-[103px] bottom-[45px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10 lg:max-w-[33px] max-w-[21px]"
              src={"/images/png/contractor-6.png"}
              width={33}
              height={33}
              alt="contractor"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatever;
