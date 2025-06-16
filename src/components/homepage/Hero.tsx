"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import CardRequiredButton from "../common/CardRequiredButton";
import CardReveal from "../common/CardReveal";
import FreeAccountButton from "../common/FreeAccountButton";
import { HeroAnimatedIcon, HeroAnimatedMobileIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
const VideoOptimizer = dynamic(() => import("./VideoOptimizer"), {
  ssr: false,
});
type HeroProps = {
  homePageContent: any;
};
const Hero = ({ homePageContent }: { homePageContent: any }) => {
  // const t = useTranslations("hero");
  const {
    hero_title,
    hero_description,
    cta_button_text,
    ncc_text,
    hero_image,
    mobileBtn,
  } = homePageContent ?? {};
  console.log("testing", hero_image);
  return (
    <section className="lg:bg-kuroiBlack hero-mobile-bg relative z-20 overflow-hidden pt-[269px] pb-9 md:pb-[100px] lg:pt-[140px] lg:pb-[150px] xl:pb-[196px]">
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[5%] left-1/2 z-20 hidden h-24 w-[120%] -translate-x-1/2 blur-[13px] lg:block"></div>
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[5%] left-1/2 z-20 hidden h-16 w-[120%] -translate-x-1/2 blur-[8px] lg:block"></div>
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px]"></div>
      <HeroAnimatedIcon />
      <HeroAnimatedMobileIcon />
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="pointer-events-none absolute top-0 left-0 z-[-1] block h-full w-full object-cover lg:hidden"
        layout="lazy"
      />
      <div className="main-container relative z-10 flex items-end">
        <div className="relative z-30 flex w-full flex-col gap-[6px] sm:gap-6 lg:max-w-[628px]">
          <TextAnimation animateOnScroll={false} delay={0.2}>
            <h1 className="main-heading gradient-text">{hero_title}</h1>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.4}>
            <p className="text-decemberSky text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
              {hero_description}
            </p>
          </TextAnimation>
          <CardReveal
            staggerDelay={0.6}
            animationDuration={0.6}
            distance={50}
            delay={1.0}
            animateOnScroll={false}
            className="mt-2 flex w-full flex-col items-center gap-2.5 sm:mt-0 sm:w-fit"
          >
            <FreeAccountButton
              showIcon={false}
              text={cta_button_text}
              className="!hidden sm:!flex"
            />
            <FreeAccountButton
              showIcon={false}
              text={mobileBtn}
              className="flex sm:!hidden"
            />
            <CardRequiredButton text={ncc_text} />
          </CardReveal>
        </div>
      </div>
      <div className="3xl:right-[0%] absolute top-0 -z-10 aspect-video h-full max-h-[1200px] w-full object-bottom lg:right-[-15%] lg:max-h-[750px]">
        <VideoOptimizer
          highResUrl={"/video/hero-video-higher.mp4"}
          lowResUrl={"/video/hero-video.mp4"}
        />
        <Image
          loading="lazy"
          fill
          className="absolute -top-[6%] hidden h-[110%] w-full object-cover lg:block"
          src={"/images/webp/hero-video-ovelay.webp"}
          alt="hero-video-ovelay"
        />
        <div className="bg-kuroiBlack absolute bottom-[-3px] z-[9999] hidden h-[10px] w-full lg:block"></div>
      </div>
    </section>
  );
};
export default Hero;
