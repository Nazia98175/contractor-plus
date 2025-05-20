import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Aurora from "../common/Aurora";
const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden z-20 lg:bg-kuroiBlack hero-mobile-bg">
      {/* <div className="absolute inset-0 w-full z-20 opacity-[0.3]">
        <Aurora
          colorStops={["#000000", "#EE1E25", "#FFFFFF"]}
          blend={0.2}
          amplitude={0.8}
          speed={0.3}
        />
      </div> */}
      <Image
        width={769}
        height={800}
        src="/images/webp/red.webp"
        alt="Red Circle For designing"
        className="absolute top-0 left-0 hidden lg:block h-full z-10 pointer-events-none object-cover"
      />
      <img
        src="/images/webp/hero-mobile-bg.webp"
        alt="Mobile Hero"
        className="sm:hidden z-10 object-cover h-full pointer-events-none right-[-25%] rotate-12 -bottom-[10%] md:bottom-[-35%] absolute w-[200%]"
      />
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="absolute top-0 left-0 lg:hidden block h-full z-20 pointer-events-none object-cover w-full"
      />

      <div className="flex items-end main-container z-20 relative lg:pt-[140px] pt-[269px] xl:pb-[196px] lg:pb-[150px] md:pb-[100px] pb-9">
        <div className="lg:max-w-[616px] w-full sm:space-y-6 relative z-30">
          <TextAnimation animateOnScroll={false} delay={0.3}>
            <h1 className="main-heading gradient-text mb-1.5">
              {t("heading")}
            </h1>
          </TextAnimation>
          <TextAnimation animateOnScroll={false} delay={0.3}>
            <p className="text-decemberSky text-xs sm:text-sm md:text-base lg:text-lg font-semibold md:font-medium font-jakarta mb-4">
              {t("desc")}
            </p>
          </TextAnimation>
          <div className="flex gap-2.5 sm:flex-row flex-col items-center">
            <button className="bg-red-linear h-10 primary-btn">
              {t("cta")}
            </button>
            <button className="flex gap-1.5 items-center font-myriad text-sm text-white cursor-pointer">
              <CheckIcon />
              {t("credit")}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute object-bottom right-[-15%] w-full h-full max-h-[1200px] lg:max-h-[750px] top-0 aspect-video">
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
          className="absolute -top-[6%] w-full h-[110%] object-cover lg:block hidden"
          src={"/images/webp/hero-video-ovelay.webp"}
          alt="hero-video-ovelay"
        />
        <div className="bg-kuroiBlack z-[9999] absolute h-[10px] w-full bottom-[-3px] lg:block hidden"></div>
      </div>
    </section>
  );
};
export default Hero;
