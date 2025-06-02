import React from "react";

const FinallyBackground = () => {
  return (
    <>
      {" "}
      <div className="absolute -top-[75%] -left-[23%] z-20 hidden h-[150%] w-[140%] blur-[100px] md:block">
        <div className="glow-ellipse bg-lightBlack-desktop"></div>
        <div className="glow-ellipse bg-red-desktop"></div>
        <div className="glow-ellipse bg-red-desktop"></div>
        <div className="glow-ellipse bg-lightBlack-desktop"></div>
        <div className="glow-ellipse bg-lightBlack-desktop"></div>
      </div>
      <div className="absolute -top-[145%] -left-[75%] z-20 block h-full w-[250%] blur-[23px] md:hidden">
        <div className="absolute top-[779px] left-1/2 h-[1115px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EE1E25] opacity-90 blur-[32px] sm:top-[623px]"></div>
        <div className="absolute top-[808px] left-1/2 h-[983px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C01A06] opacity-90 blur-[29.6px] sm:top-[621px]"></div>
        <div className="absolute top-[668px] left-1/2 h-[905px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0C0D11] opacity-90 blur-[81px] sm:h-[732px]"></div>
        <div className="absolute top-[667px] left-1/2 h-[771px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0C0D11] opacity-90 blur-[15px] sm:h-[499px]"></div>
      </div>
    </>
  );
};

export default FinallyBackground;
