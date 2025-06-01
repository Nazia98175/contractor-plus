import React from "react";

const AwardBadgesBackground = () => {
  return (
    <>
      {/* DESKTOP-BACKGROUND */}{" "}
      <div className="absolute top-[-147%] left-[-19%] -z-10 hidden h-[230%] w-[130%] rounded-full bg-[#EE1E25] blur-[120px] md:block" />
      <div className="absolute top-[-250%] left-[-34%] -z-10 hidden h-[300%] w-[170%] rounded-full bg-white blur-[87.5px] md:block" />
      {/* <div className="absolute top-[-22px] left-[769px] z-30 h-[100px] w-[100px] bg-[#D9D9D9]" />
      {/* MOBILE-BACKGROUND */}
      <div className="absolute top-[-88%] -left-[38%] z-20 block h-full w-[175%] rounded-full bg-white blur-[22px] md:hidden"></div>
      <div className="absolute -top-[80%] z-10 block h-full w-full rounded-full bg-[#EE1E25] opacity-90 blur-[120px] md:hidden"></div>
    </>
  );
};

export default AwardBadgesBackground;
