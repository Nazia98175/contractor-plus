"use client";
import { platforms } from "@/components/common/Helper";
// import ThousandsReviews from "@/components/hvca/ThousandsReviews";
import TrustBarHvca from "@/components/hvca/TrustBarHvca";
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
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyContractorPage = () => {
  const redDotRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Calculate the exact distance the dot should travel
    const calculateDistance = () => {
      if (!sectionRef.current) return 0;
      const sectionHeight = sectionRef.current.offsetHeight;
      return sectionHeight + sectionHeight * 0.1; // Add 10% extra
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

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <main className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <Image
          className="absolute top-0 left-0 z-[-1] h-auto w-full"
          src={"/images/webp/why-contractor-hero-bg.webp"}
          height={100}
          width={100}
          alt="WhyContractorHeroImg"
          unoptimized
        />
        <WhyContractorHero />
        <IndustryShifted />
        <AnimationHeader />
      </main>
      <main
        ref={sectionRef}
        className="bg-kuroiBlack relative pt-[67px] sm:pt-[157px]"
      >
        {/* Background line (gray/wallStreet color) */}
        <span className="bg-wallStreet absolute top-[-5%] left-1/2 z-[1] block h-full w-[1px] translate-x-[-50%]"></span>

        {/* Animated red dot that moves on scroll - starts at top of gray line */}
        <span
          ref={redDotRef}
          className="absolute top-[-5%] left-1/2 z-[2] block h-[18px] w-[1px] translate-x-[-50%] rounded-full bg-gradient-to-br from-[#EE1E25] to-[#881115]"
        ></span>
        <BloodEnough />
        <SeperateSolution />
        <ReverseVideo />
        <VideoBottomPart />
        <WayToWin />
        <Dashboard />
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
        <main className="pb-14">
          <TrustBarHvca showTrustedSection={false} platforms={platforms} />
        </main>
      </main>
    </>
  );
};

export default WhyContractorPage;
