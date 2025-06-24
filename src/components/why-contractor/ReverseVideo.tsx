"use client";
import { useEffect, useRef } from "react";
import { StrokeText } from "./Icons";
import TextAnimation from "../common/TextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ReverseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    gsap.registerPlugin(ScrollTrigger);

    // Ensure video metadata is loaded
    const setupScroll = () => {
      gsap.to(video, {
        currentTime: video.duration || 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom bottom",
          scrub: true,
          markers: false,
          pin: false, // set to true if you wanna pin the section
          onUpdate: (self) => {
            video.currentTime = self.progress * video.duration;
          },
        },
      });
    };

    if (video.readyState >= 2) {
      setupScroll();
    } else {
      video.addEventListener("loadedmetadata", setupScroll);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-[0] bg-[#000] px-2.5">
      <video
        ref={videoRef}
        className="relative z-[-1] mx-auto h-full w-full max-w-[1440px] object-cover object-top"
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/l-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute -top-1 left-0 z-10 h-10 w-full sm:h-[142px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1 left-0 z-10 h-20 w-full rotate-180 sm:h-[250px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <TextAnimation animateOnScroll={true} delay={0}>
        <div className="absolute top-1/2 left-1/2 z-10 flex h-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pt-14 sm:pt-36 w-full">
          <h2 className="text-center text-lg leading-[127%] font-semibold text-white sm:text-4xl lg:text-5xl xl:text-[52px]">
            "If it ain't broke, don't fix it" is the
          </h2>
          <StrokeText />
        </div>
      </TextAnimation>
    </section>
  );
};

export default ReverseVideo;
