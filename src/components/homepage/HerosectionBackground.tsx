import Image from "next/image";
import React from "react";

const HerosectionBackground = () => {
  return (
    <>
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px] lg:hidden"></div>
      <img
        className="absolute top-0 left-0 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
        src={"/images/webp/hero-red-line.webp"}
        alt="hero-red-line"
      />
      <img
        className="absolute top-[36%] flex h-full w-[110%] object-center sm:hidden"
        src={"/images/webp/hero-red-line-mobile.webp"}
        alt="hero-red-line"
      />
      {/* <Image
        width={769}
        height={800}
        priority
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="pointer-events-none absolute top-0 left-0 z-[-1] block h-full w-full object-cover lg:hidden"
      /> */}
    </>
  );
};

export default HerosectionBackground;
