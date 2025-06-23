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
        className="absolute top-[46%] flex h-full w-[110%] object-center sm:hidden"
        src={"/images/webp/hero-red-line-mobile.webp"}
        alt="hero-red-line"
      />
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[10%] -left-[0px] z-0 block h-[16%] w-[139%] blur-[8px]"></div>
      <div className="bg-kuroiBlack absolute -bottom-[65%] -left-[65%] block h-full w-full rotate-[36deg] blur-[15px] sm:hidden"></div>
    </>
  );
};

export default HerosectionBackground;
