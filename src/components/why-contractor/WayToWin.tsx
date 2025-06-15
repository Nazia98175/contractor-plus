import Image from "next/image";

const WayToWin = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-1/2 mx-auto w-full max-w-[1100px] translate-x-[-50%] px-3 pt-5 sm:pt-20 z-10">
        <h2 className="main-heading text-center max-sm:!text-lg">
          <span className="text-white">The new way to win? </span>
          <span className="block bg-gradient-to-b from-[#FFFFFF] to-[#BE0C0C] bg-clip-text text-transparent max-sm:max-w-[80%] mx-auto">
            A connected system that moves as one.
          </span>{" "}
        </h2>
        <p className="text-sm sm:text-base xl:text-lg font-medium text-superSilver sm:max-w-[70%] mx-auto text-center leading-[130%] mt-4">
          Contractors who want growth are moving from a frankenstack of software
          and tools to one solution that removes every point of friction.{" "}
        </p>
      </div>
      <Image
        unoptimized
        className="w-full max-sm:hidden"
        height={100}
        width={100}
        src={"/images/png/way-to-win-bg.png"}
        alt="way to win"
      />
      <Image
        unoptimized
        className="w-full sm:hidden"
        height={100}
        width={100}
        src={"/images/png/way-to-win-bg-mobile.png"}
        alt="way to win"
      />
    </div>
  );
};

export default WayToWin;
