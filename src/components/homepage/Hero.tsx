"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  CheckIcon,
  HeroAnimatedIcon,
  HeroAnimatedMobileIcon,
} from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import FreeAccountButton from "../common/FreeAccountButton";
import CardRequiredButton from "../common/CardRequiredButton";
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
    cta_button_link,
    ncc_text,
    hero_image,
    mobileBtn,
  } = homePageContent ?? {};
  return (
    <section className="lg:bg-kuroiBlack hero-mobile-bg relative z-20 overflow-hidden">
      <div className="bg-kuroiBlack pointer-events-none absolute -bottom-[5%] left-1/2 z-20 h-20 w-[120%] -translate-x-1/2 blur-[15px]"></div>
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px]"></div>
      <HeroAnimatedIcon />
      <HeroAnimatedMobileIcon />
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="pointer-events-none absolute top-0 left-0 z-20 block h-full w-full object-cover lg:hidden"
        layout="lazy"
      />
      <div className="main-container relative z-20 flex items-end pt-[269px] pb-9 md:pb-[100px] lg:pt-[140px] lg:pb-[150px] xl:pb-[196px]">
        <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[628px]">
          <TextAnimation animateOnScroll={false} delay={3}>
            <h1 className="main-heading gradient-text mb-4">{hero_title}</h1>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={3}>
            <p className="text-decemberSky font-jakarta mb-4 text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg">
              {hero_description}
            </p>
          </TextAnimation>

          <div className="flex w-full flex-col items-center gap-2.5 sm:w-fit">
            <FreeAccountButton text={cta_button_text} />
            <CardRequiredButton text={ncc_text} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 aspect-video h-full max-h-[1200px] w-full object-bottom lg:right-[-15%] lg:max-h-[750px]">
        <VideoOptimizer
          highResUrl={"/video/hero-video.mp4"}
          lowResUrl="/video/hero-video.mp4"
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
