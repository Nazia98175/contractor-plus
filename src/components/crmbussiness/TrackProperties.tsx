"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";

const FeatureItem = ({ text }: { text: string }) => (
  <article className="bg-doctor2 text-lightBlack text-lightblack mx-2 flex w-full max-w-[500px] items-center gap-2.5 rounded p-3 text-sm font-semibold text-nowrap md:text-base lg:text-lg">
    <CheckIcon width={25} height={25} className="min-w-5" />
    {text}
  </article>
);
interface Props {
  ncc: string;
  trackProperties: any;
}

const TrackProperties: React.FC<Props> = ({ ncc, trackProperties }) => {
  return (
    <section className="relative pt-28 lg:pt-5">
      <Image
        className="absolute -top-[35%] left-0 z-0 h-[83%] w-[100%] object-cover lg:h-[100%] 2xl:h-[120%]"
        src={"/images/webp/finally-desktop-bg.webp"}
        alt="finally-desktop-bg"
        width={1920}
        height={1920}
      />
      {/* Device Images */}
      {/* <CardReveal
        staggerDelay={0.15}
        animationDuration={0.8}
        distance={50}
        animateOnScroll={true}
      > */}
      <div className="relative z-10 flex items-center justify-center px-2">
        <div className="bg-white-linear absolute -bottom-[59px] left-0 z-10 hidden h-[267px] w-full md:block"></div>
        <Image
          src="/images/webp/mix-screens.webp"
          className="drop-shadow-img-shadow hidden w-full max-w-[1098px] object-cover md:block"
          alt="Mobile"
          width={1098}
          height={578}
          unoptimized
        />
        <Image
          src="/images/webp/mix-screens-mobile.webp"
          className="drop-shadow-img-shadow mb-10 block w-full max-w-[1098px] object-cover md:mb-0 md:hidden"
          alt="Mobile"
          width={1098}
          height={578}
          unoptimized
        />
      </div>
      {/* </CardReveal> */}

      {/* Heading + Paragraph */}
      <div className="relative z-10 px-2 md:-mt-3">
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h2 className="section-heading gradient-text-2 z-30 mx-auto w-fit text-center !font-black lg:!font-semibold">
            {trackProperties?.title}
          </h2>
        </TextAnimation>

        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="paragraph-style mx-auto max-w-[950px] text-center">
            {trackProperties?.sub_title}
          </p>
        </TextAnimation>

        {/* <div className="mt-3.5 w-full sm:mt-9">
          <Marquee speed={30} direction="right" pauseOnHover>
            {trackProperties?.cards.map((text: any, index: any) => (
              <FeatureItem key={index} text={text?.text} />
            ))}
          </Marquee>
        </div> */}
      </div>
    </section>
  );
};

export default TrackProperties;
