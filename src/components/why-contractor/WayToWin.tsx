import Image from "next/image";
import TextAnimation from "../common/TextAnimation";

const WayToWin = () => {
  return (
    <div className="relative z-20 max-sm:mt-[120px]">
      <div className="absolute top-0 left-1/2 z-10 mx-auto w-full max-w-[1100px] translate-x-[-50%] px-3 pt-5 sm:pt-20">
        <TextAnimation animateOnScroll={true} delay={0}>
          <h2 className="main-heading !font-semibold text-center max-sm:!text-lg">
            <span className="text-white">The new way to win? </span>
            <span className="mx-auto block bg-gradient-to-b from-[#FFFFFF] to-[#BE0C0C] bg-clip-text text-transparent max-sm:max-w-[80%]">
              A connected system that moves as one.
            </span>{" "}
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0}>
          <p className="text-superSilver mx-auto mt-4 text-center text-sm leading-[130%] font-medium sm:max-w-[70%] sm:text-base xl:text-lg">
            Contractors who want growth are moving from a frankenstack of
            software and tools to one solution that removes every point of
            friction.{" "}
          </p>
        </TextAnimation>
      </div>
      <Image
        unoptimized
        className="w-full max-sm:hidden xl:h-[707px] 2xl:h-[unset]"
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
