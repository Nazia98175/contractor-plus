import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckIcon, HeroAnimatedIcon } from "../common/Icons";
// import HeroAuroraEffect from "../common/HeroAuroraEffect";
import TextAnimation from "../common/TextAnimation";

type HeroProps = {
  homePageContent: any;
};
const Hero = ({ homePageContent }: { homePageContent: any }) => {
  const t = useTranslations("hero");
  const {
    hero_title,
    hero_description,
    cta_button_text,
    cta_button_link,
    ncc_text,
  } = homePageContent ?? {};

  return (
    <section className="lg:bg-kuroiBlack hero-mobile-bg relative z-20 overflow-hidden">
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px]"></div>
     <HeroAnimatedIcon/>
      {/* <HeroAuroraEffect /> */}
      <img
        src="/images/webp/hero-mobile-bg.webp"
        alt="Mobile Hero"
        className="pointer-events-none absolute right-0 -bottom-[30%] z-10 h-full w-full object-cover sm:hidden"
      />
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
            <button className="bg-red-linear primary-btn h-10">
              <span className="hidden md:flex">{cta_button_text}</span>
              <span className="flex md:hidden">{cta_button_text}</span>
            </button>
            <button className="font-myriad flex cursor-pointer items-center gap-1.5 text-sm text-white">
              <CheckIcon />
              {ncc_text}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 aspect-video h-full max-h-[1200px] w-full object-bottom lg:right-[-15%] lg:max-h-[750px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="3xl:object-cover relative -z-20 h-full w-full object-cover lg:object-right"
          src="/video/hero-video.mp4"
        ></video>
        <Image
          loading="lazy"
          fill
          unoptimized
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
