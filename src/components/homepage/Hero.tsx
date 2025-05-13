import { useTranslations } from "next-intl";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden max-w-[1920px] mx-auto">
      <div className="flex items-end h-screen max-h-[900px] main-container z-20 relative pb-11 md:pb-20 lg:pt-[138px] lg:pb-36 xl:pb-[202px] lg:h-full">
        <div className="max-w-[616px] w-full sm:space-y-6">
          <TextAnimation clipEffect={true} animateOnScroll={false} delay={0.3}>
            <h1 className="main-heading text-white mb-1.5">{t("heading")}</h1>
          </TextAnimation>
          <TextAnimation clipEffect={true} animateOnScroll={false} delay={0.3}>
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
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-bottom hidden lg:block -right-[15%] w-full h-full max-h-[1200px] lg:max-h-[750px] top-0 aspect-video"
      >
        <source src="/images/video/hero-video.mp4" type="video/mp4" />
        {t("video")}
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute object-cover right-0 w-full block lg:hidden z-0 top-0 h-full aspect-video"
      >
        <source src="/images/video/hero-video.mp4" type="video/mp4" />
        {t("video")}
      </video>

      <div className="lg:block hidden absolute left-0 top-0 z-0 w-full h-full">
        <Image
          src="/images/webp/hero-bg.webp"
          alt="Hero Background"
          fill
          className="object-bottom-right"
        />
      </div>
      <div className="lg:hidden block bg-black-linear absolute inset-0 w-full h-full z-0"></div>

      {/* Here is have to add particle js  */}
      <img
        src="/images/png/stars.png"
        className="absolute inset-0 w-full h-full z-10 object-cover"
        alt="Stars"
      />
    </section>
  );
};

export default Hero;
