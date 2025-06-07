import React from "react";
import { Claud2Icon, Claud3Icon, Claud4Icon, ClaudIcon } from "../common/Icons";
import Image from "next/image";

const WhyContractorHero = () => {
  return (
    <section className="relative h-[97vh]">
      {/* Left icon */}
      <div className="absolute top-[10%] left-0 h-full w-fit">
        <ClaudIcon />
      </div>

      {/* Right icon */}
      <div className="absolute top-[5%] right-0 h-full w-fit">
        <Claud2Icon />
      </div>
      <div className="absolute bottom-0 left-0 h-fit w-[68%]">
        <Claud3Icon />
      </div>
      <div className="absolute right-0 bottom-0 h-fit w-[90%]">
        <Claud4Icon />
      </div>

      {/* Background tree image */}
      <div className="absolute bottom-0 left-0 h-[297px] w-full">
        <Image
          src="/images/svg/tree.svg"
          alt="Decorative tree graphic"
          fill
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Main content text */}
      <div className="relative z-10 flex h-full items-center justify-center text-3xl font-bold text-white">
        WhyContractorHero
      </div>
    </section>
  );
};

export default WhyContractorHero;
