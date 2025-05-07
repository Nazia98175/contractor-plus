import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden max-w-[1920px] mx-auto">
      <img
        src="/images/webp/hero.webp"
        alt="Hero"
        className="absolute right-0 max-w-[945px] top-0"
      />

      <div className="lg:block hidden absolute left-0 top-0 z-0 w-full h-full">
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
      <div className="lg:hidden block bg-black-linear absolute left-0 top-0 z-0 w-full h-full">
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
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
        <div className="max-w-[616px] w-full pt-20 space-y-6">
          <h1 className="main-heading text-white">
            The only operating system for build & service contractors
          </h1>
          <p className="text-decemberSky text-lg font-medium font-jakarta">
            All the power of big software, none of the pain. One platform—not
            six—to manage jobs, crews, customers, and growth.
          </p>
          <div className="flex gap-2.5 items-center">
            <button className="bg-red-linear py-2.5 px-6 tracking-[0.1px] rounded-lg text-white font-montserrat font-black italic">
              Create free account
            </button>
            <button className="flex gap-1.5 items-center font-myriad text-sm text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4522 1.22493C9.61406 0.517469 8.3879 0.517471 7.54971 1.22493L6.78637 1.86923C6.43011 2.16992 5.98926 2.35254 5.52473 2.39183L4.52937 2.476C3.43643 2.56843 2.56941 3.43546 2.47698 4.52839L2.3928 5.52375C2.35352 5.98828 2.1709 6.42914 1.87021 6.7854L1.22591 7.54874C0.518446 8.38692 0.518447 9.61308 1.22591 10.4513L1.87021 11.2146C2.1709 11.5708 2.35352 12.0117 2.3928 12.4762L2.47698 13.4716C2.56941 14.5646 3.43643 15.4316 4.52937 15.524L5.52473 15.6081C5.98926 15.6475 6.43011 15.8301 6.78638 16.1308L7.54971 16.7751C8.3879 17.4825 9.61406 17.4825 10.4522 16.7751L11.2156 16.1308C11.5718 15.8301 12.0127 15.6475 12.4772 15.6081L13.4726 15.524C14.5656 15.4316 15.4326 14.5646 15.525 13.4716L15.6091 12.4762C15.6485 12.0117 15.8311 11.5708 16.1318 11.2146L16.7761 10.4513C17.4835 9.61308 17.4835 8.38692 16.7761 7.54874L16.1318 6.78539C15.8311 6.42914 15.6485 5.98828 15.6091 5.52375L15.525 4.52839C15.4326 3.43546 14.5656 2.56843 13.4726 2.476L12.4772 2.39183C12.0127 2.35254 11.5718 2.16992 11.2156 1.86923L10.4522 1.22493ZM13.0924 7.46599C13.4878 7.07059 13.4878 6.42951 13.0924 6.03411C12.6971 5.63869 12.0559 5.63869 11.6605 6.03411L7.87646 9.81816L6.34241 8.28411C5.94701 7.88869 5.30592 7.88869 4.91052 8.28411C4.51511 8.67951 4.51511 9.32059 4.91052 9.71599L7.16052 11.9659C7.55592 12.3614 8.19701 12.3614 8.59241 11.9659L13.0924 7.46599Z"
                  fill="#5ED5A8"
                />
              </svg>
              No Credit Card Required
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
