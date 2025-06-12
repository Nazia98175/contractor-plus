const AwardBadgesBackground = () => {
  return (
    <>
      {/* DESKTOP-BACKGROUND */}
      <div className="bg-redPigment pointer-events-none absolute top-[-157%] left-[-19%] -z-10 hidden h-[230%] w-[130%] rounded-full blur-[120px] md:block" />
      <div className="pointer-events-none absolute top-[-250%] left-[-34%] -z-10 hidden h-[300%] w-[170%] rounded-full bg-white blur-[87.5px] md:block" />
      {/* MOBILE-BACKGROUND */}
      <div className="pointer-events-none absolute top-[-88%] -left-[38%] z-20 block h-full w-[175%] rounded-full bg-white blur-[22px] md:hidden"></div>
      <div className="bg-redPigment pointer-events-none absolute -top-[80%] z-10 block h-full w-full rounded-full opacity-90 blur-[120px] md:hidden"></div>
    </>
  );
};

export default AwardBadgesBackground;
