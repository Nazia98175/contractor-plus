"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CheckIcon, SideIcon } from "../common/Icons";
import { trackFeatures } from "../common/Helper";

const FeatureItem = ({ text }: { text: string }) => (
  <article className="p-3 rounded bg-doctor2 flex text-nowrap font-semibold items-center gap-2.5 text-sm md:text-base lg:text-lg text-lightblack ma-w-[500px] w-full mx-2">
    <CheckIcon width={25} height={25} className="min-w-5" />
    {text}
  </article>
);

const TrackProperties = () => {
  return (
    <section className="pt-28 lg:pt-[140px] bg-white relative">
      <Image
        className="absolute w-[100%] h-full left-0 z-0 -top-[35%] xl:-top-[20%] object-contain xl:object-cover"
        src={"/images/webp/finally-desktop-bg.webp"}
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
      />
      {/* Device Images */}

      <div className="flex relative pb-20 md:pb-24 xl:pb-0  justify-center items-center">
        <div className="bg-white-linear hidden lg:block absolute left-0 z-20 -bottom-[84px] h-[267px] w-full"></div>
        <img
          src="/images/webp/mobile.webp"
          className="-mr-[17%] max-w-[28%] xl:-mr-16 z-0 xl:max-w-[262px] -mt-[20%] xl:-mt-0"
          alt="Mobile"
        />
        <img
          src="/images/webp/crm-ipad.webp"
          className="max-w-[76%] xl:max-w-[660px] w-full z-10 xl:drop-shadow-[-21px_-16px_85.2px_rgba(0,0,0,0.85)]"
          alt="Ipad"
        />
        <img
          src="/images/webp/mobile-2.webp"
          className="max-w-[26%] xl:max-w-[250px] -mb-[20%] xl:mb-0 z-20 xl:z-0 -ml-[14%] xl:-ml-12"
          alt="Mobile 2"
        />
      </div>

      {/* Heading + Paragraph */}
      <div className="relative z-30 -mt-3 px-2 bg-white">
        <h2 className="section-heading gradient-text-2 text-center !font-black lg:!font-semibold w-fit mx-auto">
          View every property like you do your customers
        </h2>
        <p className="max-w-[885px] mx-auto paragraph-style text-center">
          The only platform made for field service, trades, and general
          contractors
        </p>

        <div className="w-full mt-3.5 sm:mt-9">
          <Marquee speed={30} direction="right" pauseOnHover>
            {trackFeatures.map((text, index) => (
              <FeatureItem key={index} text={text} />
            ))}
          </Marquee>
        </div>

        <div className="flex gap-2.5 sm:flex-row flex-col items-center justify-center mt-3.5 md:mt-7">
          <button className="bg-red-linear h-10 flex gap-1.5 items-center primary-btn">
            Get started free <SideIcon />
          </button>
          <button className="flex gap-1.5 items-center font-myriad text-sm text-wallStreet font-semibold cursor-pointer">
            <CheckIcon />
            No Credit Card Required
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackProperties;
