import React from "react";

const AwardBadgesBackground = () => {
  return (
    <>
      {/* DESKTOP-BACKGROUND */}
      <div className="absolute top-[-10%] z-10 h-[110%] w-[100%] rounded-full bg-[#0C0D11] blur-[100px]" />
      <div className="absolute top-[-20%] z-0 h-[110%] w-[100%] rounded-full bg-[#EE1E25] blur-[120px]" />
      <div className="absolute top-[-30%] z-10 h-[110%] w-[100%] rounded-full bg-white blur-[87.5px]" />
      <div className="absolute top-[-40%] z-20 h-[110%] w-[100%] rounded-full bg-white blur-[21.8px]" />
      {/* <div className="absolute top-[-22px] left-[769px] z-30 h-[100px] w-[100px] bg-[#D9D9D9]" /> */}

      {/* MOBILE-BACKGROUND */}
      <div className="absolute top-[-88%] -left-[38%] z-10 h-full w-[175%] rounded-full bg-white blur-[22px] md:flex"></div>
      <div className="absolute -top-[75%] z-0 h-full w-full rounded-full bg-[#EE1E25] opacity-90 blur-[120px] md:flex"></div>
      <div className="absolute top-[-220px] z-0 h-[200px] w-full rounded-full bg-white opacity-70 blur-[87px] md:flex"></div>
    </>
  );
};

export default AwardBadgesBackground;
