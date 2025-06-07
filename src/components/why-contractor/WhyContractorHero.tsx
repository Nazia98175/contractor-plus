import React from "react";
import {
  Claud2Icon,
  Claud3Icon,
  Claud4Icon,
  ClaudIcon,
  SmallIcon,
} from "../common/Icons";
import Image from "next/image";

const WhyContractorHero = () => {
  return (
    <section className="relative h-[98vh] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 z-[1] h-full max-h-[600px] w-full max-w-[1138px] -translate-x-1/2 rounded-[1138px] bg-[rgba(105,105,105,0.50)] blur-[150px] sm:max-h-[474px]"></div>
      {/* Left icon */}
      <div className="absolute top-[10%] left-0 h-fit w-full max-w-[80%] sm:max-w-[626px]">
        <ClaudIcon />
      </div>

      {/* Right icon */}
      <div className="absolute top-[7%] right-0 h-auto w-full max-w-[70%] sm:top-[5%] sm:max-w-[626px]">
        <Claud2Icon />
      </div>
      <div className="absolute bottom-0 left-0 h-fit w-[68%]">
        <Claud3Icon />
      </div>
      <div className="absolute top-[32%] right-[20%] h-auto w-full max-w-[70%] sm:max-w-[428px]">
        <SmallIcon />
      </div>
      <div className="absolute right-0 bottom-0 h-fit w-[90%]">
        <Claud4Icon />
      </div>

      {/* Background tree image */}
      <div className="absolute bottom-0 left-0 z-[3] h-[297px] w-full">
        <Image
          src="/images/svg/tree.svg"
          alt="Decorative tree graphic"
          fill
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-20 left-1/2 z-[2] -translate-x-1/2">
        <Image
          src="/images/svg/file.svg"
          alt="File"
          width={81}
          height={111}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Main content text */}
      <div className="relative z-10 flex h-full items-center justify-center font-bold text-white">
        <h2
          style={{
            background: "linear-gradient(180deg, #0C0D11 4.55%, #FFF 115.15%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="main-heading w-fit"
        >
          Why Contractor+?
        </h2>
      </div>
    </section>
  );
};

export default WhyContractorHero;
