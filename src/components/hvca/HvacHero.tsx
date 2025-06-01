"use client";
import Image from "next/image";
import "swiper/css"; // Core Swiper styles
import {
  HeroAnimatedMobileIcon,
  HvacGlowHeroDesktopIcon,
  HvacGlowHeroMobileIcon,
  SliderIcon1,
} from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import VideoOptimizer from "../homepage/VideoOptimizer";
import HvacHeroSlider from "./HvacHeroSlider";

const HvacHero = () => {
  const features = [
    {
      id: 1,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "We make every Sholaz .",
    },
    {
      id: 2,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "Got lorem loren.",
    },
    {
      id: 3,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "The Sholaz app is",
    },
    {
      id: 4,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "We make every Sholaz .",
    },
    {
      id: 5,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "Got lorem loren.",
    },
    {
      id: 6,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "The Sholaz app is",
    },
    {
      id: 7,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "We make every Sholaz .",
    },
    {
      id: 8,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "Got lorem loren.",
    },
    {
      id: 9,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "The Sholaz app is",
    },
    {
      id: 10,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "We make every Sholaz .",
    },
    {
      id: 11,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "Got lorem loren.",
    },
    {
      id: 12,
      title: "24% faster",
      icon: <SliderIcon1 />,
      heading: "Job turnaround time",
      percentage: 24,
      description: "The Sholaz app is",
    },
  ];

  return (
    <section className="bg-kuroiBlack relative overflow-hidden">
      <div className="relative overflow-hidden">
        <Image
          width={769}
          height={800}
          src="/images/webp/hero-video-ovelay.webp"
          alt="Red Circle For designing"
          className="pointer-events-none absolute top-0 left-0 block h-full w-full object-cover lg:hidden"
          layout="lazy"
        />
        <div className="main-container relative flex items-end pt-[395px] pb-9 sm:pt-[269px] md:pb-[100px] lg:pt-[180px] lg:pb-[150px] xl:pb-[208px]">
          <HvacGlowHeroMobileIcon />
          <HvacGlowHeroDesktopIcon />
          <div className="relative z-30 w-full sm:space-y-6 lg:max-w-[750px]">
            <TextAnimation animateOnScroll={false} delay={3}>
              <h1 className="main-heading gradient-text">
                Not just HVAC software. Meet your operating system.
              </h1>
            </TextAnimation>
            {/* <TextAnimation animateOnScroll={false} delay={3}> */}
            <p className="text-decemberSky my-4 mb-4 max-w-[478px] text-xs font-semibold sm:text-sm md:text-base md:font-medium lg:text-lg xl:my-[26px]">
              Contractor+ connects every function of your business so it finally
              all works in sync.
            </p>
            {/* </TextAnimation> */}
            <div className="flex w-full flex-col items-center gap-2.5 sm:w-fit">
              <button className="bg-red-linear primary-btn h-10">
                <span className="hidden md:flex">Get started FREE</span>
                <span className="flex md:hidden">Download App</span>
              </button>
              <button className="font-myriad flex cursor-pointer items-center gap-1.5 text-sm text-white">
                No Credit Card Required
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-[2%] bottom-0 z-10 hidden h-[70%] w-[314px] lg:flex xl:right-[7%]">
          <HvacHeroSlider features={features} />
        </div>
        <div className="absolute top-0 right-0 h-full max-h-[1200px] w-full max-w-[945px] lg:max-h-[750px]">
          {/* <VideoOptimizer
            highResUrl="/video/hero-video.mp4"
            lowResUrl="/video/hero-video.mp4"
          /> */}
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="3xl:object-cover relative -z-20 h-full w-full object-cover lg:object-right"
            src="/video/hero-video.mp4"
          ></video> */}
          <Image
            alt=""
            src={"/images/webp/hvac-hero.webp"}
            width={945}
            height={729}
            className="hidden w-full object-right sm:block"
          />
          <Image
            alt=""
            src={"/images/webp/hvac-hero-mobile.webp"}
            width={945}
            height={729}
            className="block w-full object-contain sm:hidden"
          />
          <Image
            priority
            fill
            unoptimized
            className="absolute -top-[6%] !left-[-1%] hidden !h-[111%] w-full object-cover lg:block"
            src="/images/webp/hero-video-ovelay.webp"
            alt="hero-video-ovelay"
          />
          {/* <div className="bg-kuroiBlack absolute bottom-[-3px] z-[1000] hidden h-[10px] w-full lg:block"></div> */}
        </div>
      </div>
      <div className="pointer-events-none relative left-0 flex h-12 w-full sm:h-20 md:translate-y-1 lg:h-[150px]">
        <div className="animate-cloud-layer-1 absolute h-full w-[115%]">
          <Image
            fill={true}
            src="/images/webp/claud.webp"
            alt="Cloud Layer 1"
            className="w-full object-cover sm:h-20 lg:h-[150px]"
            unoptimized
          />
        </div>
        {/* Cloud Layer 2 */}
        <div className="animate-cloud-layer-2 absolute h-full w-[115%]">
          <Image
            fill={true}
            src="/images/webp/claud.webp"
            alt="Cloud Layer 2"
            className="h-12 w-full object-cover sm:h-20 lg:h-[150px]"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default HvacHero;
