"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CheckIcon, SideIcon } from "../common/Icons";
import { trackFeatures } from "../common/Helper";
import CardReveal from "../common/CardReveal";
import TextAnimation from "../common/TextAnimation";

const FeatureItem = ({ text }: { text: string }) => (
  <article className="p-3 rounded bg-doctor2 flex text-nowrap font-semibold items-center gap-2.5 text-sm md:text-base lg:text-lg text-lightblack ma-w-[500px] w-full mx-2">
    <CheckIcon width={25} height={25} className="min-w-5" />
    {text}
  </article>
);

const TrackProperties = () => {
  return (
    <section className="bg-white relative pt-28">
      <Image
        className="absolute w-[100%] h-full left-0 z-0 -top-[35%] xl:-top-[20%] object-contain xl:object-cover"
        src={"/images/webp/finally-desktop-bg.webp"}
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
      />
      {/* Device Images */}
      <CardReveal
        staggerDelay={0.15}
        animationDuration={0.8}
        distance={50}
        animateOnScroll={true}
      >
        <div className="flex relative pb-20 md:pb-24 xl:pb-0  justify-center items-center">
          <div className="bg-white-linear hidden lg:block absolute left-0 z-20 -bottom-[84px] h-[267px] w-full"></div>
          <Image
            src="/images/webp/mix-screens.webp"
            className="max-w-[1098px] w-full object-cover img-shadow md:block hidden"
            alt="Mobile"
            width={1098}
            height={578}
            unoptimized
          />
          <Image
            src="/images/webp/mix-screens-mobile.webp"
            className="max-w-[1098px] w-full object-cover img-shadow block md:hidden"
            alt="Mobile"
            width={1098}
            height={578}
            unoptimized
          />
        </div>
      </CardReveal>

      {/* Heading + Paragraph */}
      <div className="relative z-30 -mt-3 px-2 bg-white">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="section-heading gradient-text-2 text-center !font-black lg:!font-semibold w-fit mx-auto">
            View every property like you do your customers
          </h2>
        </TextAnimation>
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="max-w-[885px] mx-auto paragraph-style text-center">
            The only platform made for field service, trades, and general
            contractors
          </p>
        </TextAnimation>

        <div className="w-full mt-3.5 sm:mt-9">
          <Marquee speed={30} direction="right" pauseOnHover>
            {trackFeatures.map((text, index) => (
              <FeatureItem key={index} text={text} />
            ))}
          </Marquee>
        </div>
        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          animateOnScroll={true}
        >
          <div className="flex gap-2.5 sm:flex-row flex-col items-center justify-center mt-3.5 md:mt-7">
            <button className="bg-red-linear h-10 flex gap-1.5 items-center primary-btn">
              Get started free <SideIcon />
            </button>
            <button className="flex gap-1.5 items-center font-myriad text-sm text-wallStreet font-semibold cursor-pointer">
              <CheckIcon />
              No Credit Card Required
            </button>
          </div>
        </CardReveal>
      </div>
    </section>
  );
};

export default TrackProperties;
