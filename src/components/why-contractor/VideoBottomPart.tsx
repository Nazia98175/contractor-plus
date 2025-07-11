"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnimation from "../common/TextAnimation";
import Copy from "../common/Copy";

const VideoBottomPart = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);
  const sectionRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const refs = [sectionRef1, sectionRef2, sectionRef3, sectionRef4];

      console.log(
        "Checking refs:",
        refs.map((r) => (r.current ? "Found" : "Not found")),
      );

      refs.forEach((ref, index) => {
        if (!ref.current) {
          console.log(`Ref ${index} not found`);
          return;
        }

        const trigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top 60%",
          end: "bottom 20%",
          markers: false,
          once: window.innerWidth < 768, // only once on mobile
          onEnter: () => {
            console.log(`Section ${index} entered`);
            ref.current?.classList.add("scroll-active");
          },
          onLeaveBack: () => {
            // Only allow remove on desktop
            if (window.innerWidth >= 768) {
              ref.current?.classList.remove("scroll-active");
            }
          },
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        .video-section-wrapper h3 {
          color: #8a8e91;
          transition: color 0.3s ease-in-out;
        }
        
        .video-section-wrapper.scroll-active h3 {
          color: #fff !important;
        }
        
        .video-section-wrapper svg path {
          fill: #3f464b;
          stroke: #1c2731;
          transition: all 0.3s ease-in-out;
        }
        
        .video-section-wrapper.scroll-active svg path {
          fill: #fff !important;
          stroke: #fff !important;
        }
        
        .video-section-wrapper .icon-span {
          transition: transform 0.3s ease-in-out;
        }
        
        .video-section-wrapper.scroll-active .icon-span {
          transform: rotate(45deg);
        }
      `}</style>

      <section className="relative flex flex-col gap-[154px] pt-[67px] sm:gap-[170px] sm:pt-[94px]">
        <div className="flex flex-col gap-[154px] sm:gap-[123px]">
          <div
            ref={sectionRef1}
            className="video-section-wrapper relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]"
          >
            <Copy animateOnScroll={true} delay={0}>
              <h3 className="sub-heading mb-1 text-center font-semibold duration-300 xl:px-44">
                Your work ethic isn't broken… But your workflow IS.
              </h3>
            </Copy>
            <span className="icon-span mt-[18px] flex justify-center duration-300">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                  fill="#3F464B"
                  stroke="#1C2731"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>

          <div
            ref={sectionRef2}
            className="video-section-wrapper relative z-10 mx-auto max-w-[927px] p-3 backdrop-blur-[5px] sm:p-[22px]"
          >
            <Copy animateOnScroll={true} delay={0}>
              <h3 className="sub-heading mb-1 text-center font-semibold duration-300 xl:px-44">
                It's a thousand micro inefficiencies stealing time and bleeding
                margin.
              </h3>
            </Copy>
            <span className="icon-span mt-[18px] flex justify-center duration-300">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                  fill="#3F464B"
                  stroke="#1C2731"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[154px] sm:gap-[235px]">
          <div
            ref={sectionRef3}
            className="video-section-wrapper relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]"
          >
            <Copy animateOnScroll={true} delay={0}>
              <h3 className="sub-heading text-center font-semibold duration-300 xl:px-6">
                You're not scaling, you're just surviving.
              </h3>
            </Copy>
            <span className="icon-span mt-[18px] flex justify-center duration-300">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                  fill="#3F464B"
                  stroke="#1C2731"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>

          <div
            ref={sectionRef4}
            className="video-section-wrapper relative z-10 mx-auto max-w-[873px] p-3 backdrop-blur-[5px] sm:p-[22px]"
          >
            <Copy animateOnScroll={true} delay={0}>
              <h3 className="sub-heading text-center font-semibold duration-300 xl:px-6">
                And in this market, if you're not getting ahead.. you're falling
                more and more behind.
              </h3>
            </Copy>
            <span className="icon-span mt-[18px] flex justify-center duration-300">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4149 12.9151L29.4122 18.1976L29.4115 19.1968H19.1405L19.1391 28.4735L19.1398 29.4741L18.1385 29.4727L12.8546 29.4685L11.8554 29.4678L11.8561 28.4686L11.8574 19.1962L2.58632 19.1989H1.58643V18.199L1.58367 12.9164V11.9165L2.58425 11.9159L11.8561 11.9138L11.8581 2.64198V1.64209L12.8573 1.64278L18.1399 1.64002H19.1398L19.1405 2.6406V11.9145L28.4151 11.9152H29.4149V12.9151Z"
                  fill="#3F464B"
                  stroke="#1C2731"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoBottomPart;
