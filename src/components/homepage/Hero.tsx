import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import AnimatedLineAura from "../common/SvgAuroraEffect";

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
    <section className="relative overflow-hidden z-20 lg:bg-kuroiBlack hero-mobile-bg">
      {/* <Image
        width={769}
        height={800}
        src="/images/webp/red.webp"
        alt="Red Circle For designing"
        className="absolute top-0 left-0 hidden lg:block h-full z-10 pointer-events-none object-cover"
      /> */}
      <AnimatedLineAura />
      <img
        src="/images/webp/hero-mobile-bg.webp"
        alt="Mobile Hero"
        className="sm:hidden z-10 object-cover h-full pointer-events-none right-[-25%] rotate-12 -bottom-[10%] sm:bottom-[-35%] absolute w-full"
      />
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="absolute top-0 left-0 lg:hidden block h-full z-20 pointer-events-none object-cover w-full"
        layout="lazy"
      />
      <div className="flex items-end main-container z-20 relative lg:pt-[140px] pt-[269px] xl:pb-[196px] lg:pb-[150px] md:pb-[100px] pb-9">
        <div className="lg:max-w-[628px] w-full sm:space-y-6 relative z-30">
          <TextAnimation animateOnScroll={false} delay={3}>
            <h1 className="main-heading gradient-text mb-1.5">{hero_title}</h1>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={3}>
            <p className="text-decemberSky text-xs sm:text-sm md:text-base lg:text-lg font-semibold md:font-medium font-jakarta mb-4">
              {hero_description}
            </p>
          </TextAnimation>
          <div className="flex gap-2.5 sm:flex-row flex-col items-center">
            <button className="bg-red-linear h-10 primary-btn">
              <span className="md:flex hidden">{cta_button_text}</span>
              <span className="flex md:hidden">{cta_button_text}</span>
            </button>
            <button className="flex gap-1.5 items-center font-myriad text-sm text-white cursor-pointer">
              <CheckIcon />
              {ncc_text}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute object-bottom lg:right-[-15%] w-full h-full max-h-[1200px] lg:max-h-[750px] top-0 aspect-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover lg:object-center 3xl:object-cover relative -z-20"
          src="/video/hero-video.mp4"
        ></video>
        <Image
          loading="lazy"
          fill
          unoptimized
          className="absolute -top-[6%] w-full h-[110%] object-cover lg:block hidden "
          src={"/images/webp/hero-video-ovelay.webp"}
          alt="hero-video-ovelay"
        />
        <div className="bg-kuroiBlack z-[9999] absolute h-[10px] w-full bottom-[-3px] lg:block hidden"></div>
      </div>
    </section>
  );
};
export default Hero;
