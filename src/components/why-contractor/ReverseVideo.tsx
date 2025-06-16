"use client";
import { useEffect, useRef } from "react";
import { StrokeText } from "./Icons";
import TextAnimation from "../common/TextAnimation";

const ReverseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isPlayingRef = useRef(false);
  const directionRef = useRef<"forward" | "reverse" | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let lastScrollY = window.scrollY;

    const playForward = () => {
      if (isPlayingRef.current && directionRef.current === "forward") return;

      isPlayingRef.current = true;
      directionRef.current = "forward";

      const animate = () => {
        if (video.currentTime < video.duration - 0.1) {
          video.currentTime = Math.min(
            video.duration,
            video.currentTime + 0.01,
          );
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          video.currentTime = video.duration;
          isPlayingRef.current = false;
          directionRef.current = null;
        }
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animate();
    };

    const playReverse = () => {
      if (isPlayingRef.current && directionRef.current === "reverse") return;

      isPlayingRef.current = true;
      directionRef.current = "reverse";

      const animate = () => {
        if (video.currentTime > 0.01) {
          video.currentTime = Math.max(0, video.currentTime - 0.01);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          video.currentTime = 0;
          isPlayingRef.current = false;
          directionRef.current = null;
        }
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      animate();
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;

      // Check if section is visible
      const isVisible = rect.top < windowHeight && rect.bottom > 0;

      if (!isVisible) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        isPlayingRef.current = false;
        directionRef.current = null;
        lastScrollY = currentScrollY;
        return;
      }

      // Only process if not currently playing
      if (!isPlayingRef.current) {
        const scrollDelta = currentScrollY - lastScrollY;

        // Need significant scroll to trigger (at least 5 pixels)
        if (Math.abs(scrollDelta) > 5) {
          if (scrollDelta > 0) {
            // Scrolling down - play forward if not at end
            if (video.currentTime < video.duration - 0.1) {
              playForward();
            }
          } else {
            // Scrolling up - play reverse if not at start
            if (video.currentTime > 0.1) {
              playReverse();
            }
          }
        }
      }

      lastScrollY = currentScrollY;
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Wait for video to be ready
    const handleLoadedMetadata = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[0] h-[242px] px-2.5 sm:h-[541px]"
    >
      <video
        ref={videoRef}
        className="absolute left-0 z-[-1] h-full w-full object-cover object-top"
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/l-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute -top-1 left-0 h-10 w-full sm:h-[142px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1 left-0 h-20 w-full rotate-180 sm:h-[250px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <TextAnimation animateOnScroll={true} delay={0}>
        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-10">
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
