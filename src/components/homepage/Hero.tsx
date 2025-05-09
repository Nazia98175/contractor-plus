import React from "react";
import { CheckIcon, HeroBg } from "../common/Icons";

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-w-[1920px] mx-auto">
      <div className="flex items-end h-screen max-h-[900px] main-container z-20 relative pb-20 lg:pt-[138px] lg:pb-[202px] lg:h-full">
        <div className="max-w-[616px] w-full sm:space-y-6">
          <h1 className="main-heading text-white mb-1.5">
            The only operating system for build & service contractors
          </h1>
          <p className="text-decemberSky text-xs sm:text-sm md:text-base lg:text-lg font-semibold md:font-medium font-jakarta mb-4">
            All the power of big software, none of the pain. One platform—not
            six—to manage jobs, crews, customers, and growth.
          </p>
          <div className="flex gap-2.5 sm:flex-row flex-col items-center">
            <button className="bg-red-linear h-10 primary-btn">
              Create free account
            </button>
            <button className="flex gap-1.5 items-center font-myriad text-sm text-white cursor-pointer">
              <CheckIcon />
              No Credit Card Required
            </button>
          </div>
        </div>
      </div>

      {/* BACKGROUND  */}
      <img
        src="/images/webp/hero.webp"
        alt="Hero"
        className="absolute object-center hidden md:block right-0 w-full lg:max-w-[945px] top-0"
      />
      <img
        src="/images/webp/hero-mobile.webp"
        alt="Hero Mobile"
        className="absolute object-center right-0 w-full block md:hidden z-0 top-0"
      />

      <img
        src="/images/webp/hero-bg.webp"
        alt="Hero Background"
        className="lg:block hidden absolute left-0 top-0 z-0 w-full h-full"
      />
      <div className="lg:hidden block bg-black-linear absolute inset-0 w-full h-full z-0"></div>
      <img
        src="/images/webp/red-circle.webp"
        className="absolute top-0 left-0 w-full hidden lg:block h-full z-10"
        alt="Red Circle For designing"
      />

      <img
        src="/images/png/stars.png"
        className="absolute inset-0 w-full h-full z-10 object-cover"
        alt="Stars"
      />
    </section>
  );
};

export default Hero;
