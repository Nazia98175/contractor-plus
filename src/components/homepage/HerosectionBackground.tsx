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
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[69%] -left-[47%] z-0 block h-full w-[139%] rotate-[27.82deg] blur-[25px] md:hidden"></div>
    </>
  );
};

export default HerosectionBackground;
