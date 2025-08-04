import Image from "next/image";
import React from "react";

const HerosectionBackground = () => {
  return (
    <>
      <Image
        width={800}
        height={1000}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        className="absolute top-0 left-0 hidden max-h-[800px] w-full max-w-[800px] object-center lg:block"
        src={"/images/webp/hero-red-line.webp"}
        alt="hero-red-line"
      />
      <Image
        width={800}
        height={2000}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        className="pointer-events-none absolute top-[20%] z-50 flex h-[135%] w-[110%] object-center lg:hidden"
        src={"/images/webp/hero-red-line-mobile.webp"}
        alt="hero-red-line"
      />
      <div className="bg-kuroiBlack 3xl:block pointer-events-none absolute -bottom-[10%] -left-[0px] z-0 hidden h-[16%] w-[139%] blur-[8px]"></div>
    </>
  );
};

export default HerosectionBackground;
