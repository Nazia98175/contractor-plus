import Image from "next/image";
import React from "react";

const HerosectionBackground = () => {
  return (
    <>
      {/* <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px] lg:hidden"></div> */}
      <Image
        width={800}
        height={1000}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        className="absolute top-0 left-0 hidden max-h-[800px] w-full max-w-[800px] object-center sm:block"
        src={"/images/webp/hero-red-line.webp"}
        alt="hero-red-line"
      />
      <Image
        width={800}
        height={1000}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        className="pointer-events-none absolute top-[46%] z-50 flex h-full w-[110%] object-center sm:hidden"
        src={"/images/webp/hero-red-line-mobile.webp"}
        alt="hero-red-line"
      />
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[10%] -left-[0px] z-0 block h-[16%] w-[139%] blur-[8px]"></div>
      <div className="bg-custom-1 absolute -bottom-0 left-[0%] block h-full w-[110%] sm:hidden"></div>
    </>
  );
};

export default HerosectionBackground;
