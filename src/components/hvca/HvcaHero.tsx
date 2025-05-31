"use client";
import Image from "next/image";
import "swiper/css"; // Core Swiper styles
import { HeroAnimatedMobileIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import VideoOptimizer from "../homepage/VideoOptimizer";
import HvcaHeroSlider from "./HvcaHeroSlider";

const HvcaHero = () => {
  const features = [
    {
      id: 1,
      title: "We Provide Support",
      description:
        "We make every Sholaz trip hassle-free! Our support pages help you set up your account, use the app, adjust fares, and much more.",
    },
    {
      id: 2,
      title: "We Answer Your Questions",
      description:
        "Got questions? Get answers! We will answer any questions you may have. And if you ever need help, our support is always available.",
    },
    {
      id: 3,
      title: "We Help You Drive Safely",
      description:
        "The Sholaz app is packed with features to keep you safe and confident before, during, and after every trip.",
    },
    {
      id: 4,
      title: "We Provide Support",
      description:
        "We make every Sholaz trip hassle-free! Our support pages help you set up your account, use the app, adjust fares, and much more.",
    },
    {
      id: 5,
      title: "We Answer Your Questions",
      description:
        "Got questions? Get answers! We will answer any questions you may have. And if you ever need help, our support is always available.",
    },
    {
      id: 6,
      title: "We Help You Drive Safely",
      description:
        "The Sholaz app is packed with features to keep you safe and confident before, during, and after every trip.",
    },
    {
      id: 7,
      title: "We Provide Support",
      description:
        "We make every Sholaz trip hassle-free! Our support pages help you set up your account, use the app, adjust fares, and much more.",
    },
    {
      id: 8,
      title: "We Answer Your Questions",
      description:
        "Got questions? Get answers! We will answer any questions you may have. And if you ever need help, our support is always available.",
    },
    {
      id: 9,
      title: "We Help You Drive Safely",
      description:
        "The Sholaz app is packed with features to keep you safe and confident before, during, and after every trip.",
    },
    {
      id: 10,
      title: "We Provide Support",
      description:
        "We make every Sholaz trip hassle-free! Our support pages help you set up your account, use the app, adjust fares, and much more.",
    },
    {
      id: 11,
      title: "We Answer Your Questions",
      description:
        "Got questions? Get answers! We will answer any questions you may have. And if you ever need help, our support is always available.",
    },
    {
      id: 12,
      title: "We Help You Drive Safely",
      description:
        "The Sholaz app is packed with features to keep you safe and confident before, during, and after every trip.",
    },
  ];

  return (
    <section className="lg:bg-kuroiBlack hero-mobile-bg relative z-20 overflow-hidden">
      <div className="bg-athenaBlue absolute top-56 right-0 h-6 w-full max-w-[800px] rotate-45 blur-[40px]"></div>

      {/* <HeroAnimatedIcon /> */}
      <HeroAnimatedMobileIcon />
      <span className="absolute top-0 left-[10%] z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1020"
          height="671"
          fill="none"
          viewBox="0 0 1020 671"
        >
          <g
            filter="url(#filter0_f_1464_68065)"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            <path
              stroke="url(#paint0_linear_1464_68065)"
              strokeLinecap="round"
              strokeWidth="216"
              d="M197 957.924 507.5 416.5 823-129.962"
            ></path>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1464_68065"
              x1="853.107"
              x2="600.639"
              y1="357.525"
              y2="55.953"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.062" stopOpacity="0"></stop>
              <stop offset="0.997" stopColor="#A6070C"></stop>
              <stop offset="1"></stop>
            </linearGradient>
            <filter
              id="filter0_f_1464_68065"
              width="1018.04"
              height="1479.92"
              x="0.982"
              y="-325.98"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_1464_68065"
                stdDeviation="44"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </span>
      <Image
        width={769}
        height={800}
        src="/images/webp/hero-video-ovelay.webp"
        alt="Red Circle For designing"
        className="pointer-events-none absolute top-0 left-0 z-20 block h-full w-full object-cover lg:hidden"
        layout="lazy"
      />
      <div className="main-container relative z-20 flex items-end pt-[269px] pb-9 md:pb-[100px] lg:pt-[180px] lg:pb-[150px] xl:pb-[208px]">
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
      <div className="absolute right-[5%] bottom-0 z-[1000] hidden h-[80%] w-[300px] bg-red-900 lg:flex">
        <HvcaHeroSlider features={features} />
      </div>
      <div className="absolute top-0 aspect-video h-full max-h-[1200px] w-full object-bottom lg:right-[-15%] lg:max-h-[750px]">
        <VideoOptimizer
          highResUrl="/video/hero-video.mp4"
          lowResUrl="/video/hero-video.mp4"
        />
        {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="3xl:object-cover relative -z-20 h-full w-full object-cover lg:object-right"
            src="/video/hero-video.mp4"
          ></video> */}
        <Image
          priority
          fill
          unoptimized
          className="absolute -top-[6%] hidden h-[110%] w-full object-cover lg:block"
          src={"/images/webp/hero-video-ovelay.webp"}
          alt="hero-video-ovelay"
        />
        {/* <div className="bg-kuroiBlack absolute bottom-[-3px] z-[1000] hidden h-[10px] w-full lg:block"></div> */}
      </div>
    </section>
  );
};

export default HvcaHero;
