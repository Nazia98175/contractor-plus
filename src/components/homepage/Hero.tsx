import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-w-[1920px] mx-auto">
      <img
        src="/images/webp/hero.webp"
        alt="Hero"
        className="absolute right-0 max-w-[945px] top-0"
      />

      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1440 669"
          fill="none"
        >
          <g filter="url(#filter0_f_22_9143)">
            <path
              d="M968.5 -66L-133 -58.826V766.929H2030L694.5 414.5L968.5 -66Z"
              fill="#0C0D11"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_22_9143"
              x="-234.9"
              y="-167.9"
              width="2366.8"
              height="1036.73"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50.95"
                result="effect1_foregroundBlur_22_9143"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <section className="flex justify-between main-container z-10 relative min-h-[700px] max-h-[892px] h-full">
        <div className="max-w-[616px] w-full pt-20">
          <h1 className="main-heading text-white">
            The only operating system for build & service contractors
          </h1>
          <p className="text-decemberSky text-lg font-medium font-jakarta">
            All the power of big software, none of the pain. One platform—not
            six—to manage jobs, crews, customers, and growth.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Hero;
