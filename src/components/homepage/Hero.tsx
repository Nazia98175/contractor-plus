import { useTranslations } from "next-intl";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import VideoViewer from "./VideoViewer";
const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden">
      <div className="flex items-end main-container  z-10 relative pt-[292px] pb-11 md:pb-20 lg:pt-[138px] lg:pb-36 xl:pb-[202px] 3xl:min-h-[1000px] max-h-[1000px]">
        <div className="max-w-[616px] w-full sm:space-y-6">
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
      <div className="absolute object-bottom lg:-right-[15%] w-full h-full max-h-[1200px] lg:max-h-[750px] 3xl:max-h-[1024px] top-0 aspect-video">
        <VideoViewer />
      </div>
      <div className="lg:block hidden absolute left-0 top-0 z-0 w-full h-full">
        <Image
          src="/images/webp/hero-bg.webp"
          alt="Hero Background"
          fill
          className="object-bottom-right"
        />
      </div>
      <div className="lg:hidden block bg-black-linear absolute inset-0 w-full h-full z-0"></div>
    </section>
  );
};
export default Hero;
