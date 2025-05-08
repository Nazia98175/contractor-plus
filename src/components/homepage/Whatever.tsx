import Image from "next/image";
import React from "react";
import { OnIcon, OnIconw } from "../common/Icons";

const Whatever = () => {
  return (
    <section className="bg-black">
      <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
        Whatever you use, Contractor+ connects
      </h3>
      <div className="main-container flex justify-between gap-5">
        <div className="max-w-[409px] w-full relative bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-contain bg-center h-[409px]">
          <div className="p-2 w-[85px] h-[85px] absolute flex items-center justify-center rounded-3xl overflow-hidden ml-[124px] mt-11">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
              src={"/images/png/contractor-2.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 w-[85px] h-[85px] absolute flex items-center justify-center rounded-3xl overflow-hidden mt-[182px] ml-[13px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
              src={"/images/png/contractor-1.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 w-[85px] h-[85px] absolute flex items-center justify-center rounded-3xl overflow-hidden ml-[227px] mt-[204px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
              src={"/images/png/contractor-3.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
        </div>
        <div className="max-w-[270px] w-full first-border p-5 m-auto relative z-30">
          <div className="second-border p-5 w-full relative z-30">
            <div className="third-border p-5 w-full relative z-30 flex items-center justify-center">
              <div className="relative w-[110px] h-[110px] flex items-center justify-center rounded-3xl overflow-hidden">
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className="object-cover relative z-10"
                  src={"/images/png/center-icon.png"}
                  width={51}
                  height={68}
                  alt="center-icon"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[409px] w-full relative bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-contain bg-center h-[409px]">
          <div className="p-2 w-[85px] h-[85px] absolute flex items-center justify-center rounded-3xl overflow-hidden ml-[53px] mt-[53px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
              src={"/images/png/contractor-4.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 w-[85px] h-[85px] absolute flex items-center justify-center rounded-3xl overflow-hidden mt-[182px] right-[43px] bottom-[63px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
              src={"/images/png/contractor-1.png"}
              width={38}
              height={38}
              alt="contractor"
              unoptimized
            />
          </div>
          <div className="p-2 w-[61px] h-[61px] absolute flex items-center justify-center rounded-3xl overflow-hidden ml-[103px] bottom-[45px]">
            <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
            <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
            <Image
              className="object-cover relative z-10"
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
