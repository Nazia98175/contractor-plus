"use client";
import { platforms } from "@/components/common/Helper";
import CommonFormField from "@/components/common/CommonFormField";
import TrustBar from "@/components/common/TrustBar";
import AnimationHeader from "@/components/why-contractor/AnimationHeader";
import BloodEnough from "@/components/why-contractor/BloodEnough";
import Dashboard from "@/components/why-contractor/Dashboard";
import IndustryShifted from "@/components/why-contractor/IndustryShifted";
import OperatingSystem from "@/components/why-contractor/OperatingSystem";
import ReverseVideo from "@/components/why-contractor/ReverseVideo";
import SeperateSolution from "@/components/why-contractor/SeperateSolution";
import VideoBottomPart from "@/components/why-contractor/VideoBottomPart";
import WayToWin from "@/components/why-contractor/WayToWin";
import WhyContractorHero from "@/components/why-contractor/WhyContractorHero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface WhyContractorMainProps {
  data: {
    commonData: any;
    pageContent: any;
    industryShiftHighlights: any;
    narrativeFlow: any;
    seperateSolution: any;
  };
}

const WhyContractorMain:React.FC<WhyContractorMainProps> = ({data}) => {
  const redDotRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate the exact distance the dot should travel
    const calculateDistance = () => {
      if (!sectionRef.current) return 0;
      const sectionHeight = sectionRef.current.offsetHeight;
      return sectionHeight + sectionHeight * 0; // Add 10% extra
    };

    // Create the scroll animation for the red dot
    gsap.to(redDotRef.current, {
      y: calculateDistance, // Use calculated distance
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom bottom", // Animate until the very bottom of the section
        scrub: 1,
        invalidateOnRefresh: true, // Recalculate on window resize
      },
    });

    gsap.to("#why-contractor-hero-section", {
      opacity: 1,
      duration: 1,
    });

    gsap.to("#home-page-header-view-port-screen", {
      opacity: 1,
      duration: 1,
    });

    gsap.to("#industry-shifted-section", {
      opacity: 1,
      duration: 1,
    });

    gsap.to("#home-page-footer-view-port-screen", {
      opacity: 1,
      duration: 1,
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div id="home-page-wrapper-2" className="">
        <div
          id="home-page-view-port-screen-why-contractor"
          className="relative opacity-0"
        >
          <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
            <Image
              className="absolute top-0 left-0 z-[-1] h-auto w-full"
              src={"/images/webp/why-contractor-hero-bg.webp"}
              height={100}
              width={100}
              alt="WhyContractorHeroImg"
              unoptimized
            />
            <WhyContractorHero pageContent={data?.pageContent} />
            <IndustryShifted industry={data?.industryShiftHighlights} />
            <AnimationHeader animationHeader={data?.narrativeFlow?.animationHeader} />
          </div>
        </div>
        <main
          ref={sectionRef}
          className="bg-kuroiBlack relative pt-[67px] sm:pt-[157px]"
        >
          {/* Background line (gray/wallStreet color) */}
          <span className="bg-wallStreet absolute top-[-250px] left-1/2 z-[1] block h-[86%] w-[1px] translate-x-[-50%] sm:top-[-300px]"></span>

          {/* Animated red dot that moves on scroll - starts at top of gray line */}
          <span
            ref={redDotRef}
            className="absolute top-[-250px] left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br from-[#EE1E25] to-[#881115] sm:top-[-300px]"
          ></span>
          <BloodEnough bloodEnough={data?.narrativeFlow?.animationHeader?.[1]} />
          <SeperateSolution seperateSolution={data?.seperateSolution} />
          <ReverseVideo reverseVideo={data?.narrativeFlow?.frictionGrowth} />
          <VideoBottomPart list={data?.narrativeFlow?.list} />
          <WayToWin />
          <Dashboard />
        </main>
        <OperatingSystem />
        {/* <ThousandsReviews
          data={{
            title: "All unified. All in sync. All in one place.",
            sub_title:
              "This is what it feels like to finally run your business, not be run by it.",
            placeholder: "Your Email",
          }}
          createBtn="Get started FREE"
          descColorClass="text-secondary max-sm:!text-sm sm:text-base md:text-!lg"
          ncc="No credit card required"
          mobileBtn="Download FREE App"
          titleClass="max-sm:!text-2xl"
          inputClass="max-sm:!hidden"
          ccClass="max-sm:!hidden"
          mobileBtnHref="https://contractorplus.app/"
        /> */}
        {/* <main className="pb-14">
        <TrustBarHvca showTrustedSection={false} platforms={platforms} />
      </main> */}
        <div className="pb-14">
          <div className="px-2 pt-12 pb-8 md:pb-12 xl:pt-[11px]">
            <CommonFormField
              title={"All unified. All in sync. All in one place."}
              subTitle={
                "This is what it feels like to finally run your business, not be run by it."
              }
              placeholder={"Your Email"}
              createBtn={"Get Started Free"}
              mobileBtn={"Download FREE App"}
              ncc={"No credit card required"}
              variant={"tertiary"}
            />
          </div>
          {/* <TrustBar showTrustedSection={true} platforms={platforms} /> */}
        </div>
      </div>
    </>
  );
};

export default WhyContractorMain;
