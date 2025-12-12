"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Suspense, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamic imports with loading states
const CommonFormField = dynamic(
  () => import("@/components/common/CommonFormField"),
  {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-800/20" />,
  },
);

const WhyContractorHero = dynamic(
  () => import("@/components/whycontractor/WhyContractorHero"),
  {
    loading: () => <div className="h-screen animate-pulse bg-gray-800/20" />,
  },
);

const IndustryShifted = dynamic(
  () => import("@/components/whycontractor/IndustryShifted"),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-gray-800/20" />,
  },
);

const AnimationHeader = dynamic(
  () => import("@/components/whycontractor/AnimationHeader"),
  {
    loading: () => <div className="h-[300px] animate-pulse bg-gray-800/20" />,
  },
);

const BloodEnough = dynamic(
  () => import("@/components/whycontractor/BloodEnough"),
  {
    loading: () => <div className="h-[300px] animate-pulse bg-gray-800/20" />,
  },
);

const SeperateSolution = dynamic(
  () => import("@/components/whycontractor/SeperateSolution"),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-gray-800/20" />,
  },
);

const ReverseVideo = dynamic(
  () => import("@/components/whycontractor/ReverseVideo"),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-gray-800/20" />,
  },
);

const VideoBottomPart = dynamic(
  () => import("@/components/whycontractor/VideoBottomPart"),
  {
    loading: () => <div className="h-[400px] animate-pulse bg-gray-800/20" />,
  },
);

const WayToWin = dynamic(() => import("@/components/whycontractor/WayToWin"), {
  loading: () => <div className="h-[600px] animate-pulse bg-gray-800/20" />,
});

const Dashboard = dynamic(
  () => import("@/components/whycontractor/Dashboard"),
  {
    loading: () => <div className="h-[800px] animate-pulse bg-gray-800/20" />,
  },
);

const OperatingSystem = dynamic(
  () => import("@/components/whycontractor/OperatingSystem"),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-gray-800/20" />,
  },
);

interface WhyContractorMainProps {
  data: {
    commonData: any;
    pageContent: any;
    industryShiftHighlights: any;
    narrativeFlow: any;
    seperateSolution: any;
    connectedSystem: any;
    featuresPlatform: any;
    emailSign: any;
  };
}

const WhyContractorMain: React.FC<WhyContractorMainProps> = ({ data }) => {
  const redDotRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const calculateDistance = () => {
      if (!sectionRef.current) return 0;
      const sectionHeight = sectionRef.current.offsetHeight;
      return sectionHeight;
    };

    gsap.to(redDotRef.current, {
      y: calculateDistance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    gsap.to("#why-contractor-hero-section", {
      opacity: 1,
      duration: 0.7,
    });

    gsap.to("#home-page-header-view-port-screen", {
      opacity: 1,
      duration: 0.7,
    });

    gsap.to("#industry-shifted-section", {
      opacity: 1,
      duration: 0.7,
    });

    gsap.to("#home-page-footer-view-port-screen", {
      opacity: 1,
      duration: 0.7,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="home-page-wrapper-2">
      <Suspense
        fallback={<div className="h-screen animate-pulse bg-gray-800/20" />}
      >
        <div
          id="home-page-view-port-screen-why-contractor"
          className="relative opacity-0"
        >
          <div className="relative bg-[url('/images/webp/why-contractor-hero-bg.webp')] bg-cover">
            <Image
              className="absolute top-0 left-0 z-[-1] h-auto w-full"
              src={"/images/webp/why-contractor-hero-bg.webp"}
              height={100}
              width={100}
              loading="lazy"
              alt="WhyContractorHeroImg"
              unoptimized
            />
            <WhyContractorHero pageContent={data?.pageContent} />
            <IndustryShifted industry={data?.industryShiftHighlights} />
            <AnimationHeader
              animationHeader={data?.narrativeFlow?.animationHeader}
            />
          </div>
        </div>
      </Suspense>

      <main className="relative pt-[67px] sm:pt-[157px]">
        <Suspense
          fallback={<div className="h-[2000px] animate-pulse bg-gray-800/20" />}
        >
          <main ref={sectionRef} className="relative">
            <span className="bg-wallStreet absolute top-[-250px] left-1/2 z-[1] block h-[97%] w-[1px] translate-x-[-50%] sm:top-[-300px]"></span>
            <span
              ref={redDotRef}
              className="from-redPigment to-netherworld absolute top-[-250px] left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br sm:top-[-300px]"
            ></span>
            <BloodEnough
              bloodEnough={data?.narrativeFlow?.animationHeader?.[1]}
            />
            <SeperateSolution seperateSolution={data?.seperateSolution} />
            <ReverseVideo reverseVideo={data?.narrativeFlow?.frictionGrowth} />
            <VideoBottomPart list={data?.narrativeFlow?.list} />
            <WayToWin connectedSystem={data?.connectedSystem} />
          </main>
        </Suspense>

        <Suspense
          fallback={<div className="h-[800px] animate-pulse bg-gray-800/20" />}
        >
          <Dashboard connectedSystem={data?.connectedSystem} />
        </Suspense>
      </main>

      <Suspense
        fallback={<div className="h-[600px] animate-pulse bg-gray-800/20" />}
      >
        <OperatingSystem
          image={data?.connectedSystem?.image}
          featuresPlatform={data?.featuresPlatform}
        />
      </Suspense>

      <Suspense
        fallback={<div className="h-[400px] animate-pulse bg-gray-800/20" />}
      >
        <div className="pb-14">
          <div className="mt-12 mb-8 px-2 md:mb-12 xl:mt-[11px]">
            <CommonFormField
              title={data?.emailSign?.title}
              subTitle={data?.emailSign?.subTitle}
              placeholder={data?.emailSign?.placeholder}
              createBtn={data?.commonData?.getStartedFreeBtn}
              mobileBtn={data?.commonData?.mobileBtn}
              ncc={data?.commonData?.nccTxt}
              variant={"tertiary"}
              showonlybutton={false}
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default WhyContractorMain;
