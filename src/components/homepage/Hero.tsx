import { useTranslations } from "next-intl";
import { CheckIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import VideoViewer from "./VideoViewer";
const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="relative overflow-hidden max-w-[1920px] w-full mx-auto">
      <div className="flex items-end main-container relative pt-[292px] pb-11 md:pb-20 lg:pt-[138px] lg:pb-36 xl:pb-[202px]">
        <div className="max-w-[616px] w-full sm:space-y-6 relative z-30">
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
      <div className="absolute object-bottom right-0 w-full h-full max-h-[1200px] lg:max-h-[750px] 3xl:max-h-[1024px] top-0 aspect-video z-10 ">
        <div className="max-w-[945px] w-full ml-auto h-full object-cover ">
          <VideoViewer />
        </div>
        <svg
          className="absolute w-[115%] h-[119%] left-0 top-[-10%] bg-[100%_160%]"
          width="100%"
          height="100%"
          viewBox="0 0 1440 669"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_540_30620)">
            <path
              d="M968.5 -66L-133 -58.826V766.929H2030L694.5 414.5L968.5 -66Z"
              fill="#000"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_540_30620"
              x="-234.9"
              y="-167.9"
              width="2366.8"
              height="1036.73"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50.95"
                result="effect1_foregroundBlur_540_30620"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="lg:hidden block bg-black-linear absolute inset-0 w-full h-full z-0"></div>
    </section>
  );
};
export default Hero;
