"use client";
import { useEffect, useRef } from "react";
import { StrokeText } from "./Icons";
import TextAnimation from "../common/TextAnimation";

const ReverseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(0);
  const isPlayingForward = useRef<boolean>(false);
  const isPlayingReverse = useRef<boolean>(false);
  const hasPlayedForward = useRef<boolean>(false);
  const reverseInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Initialize video
    video.pause();
    video.currentTime = 0;
    video.playbackRate = 1.5; // Play at 1.5x speed - faster but smooth

    const playForward = () => {
      if (isPlayingForward.current || video.currentTime >= video.duration - 0.1) return;
      
      // Stop any reverse playback
      if (reverseInterval.current) {
        clearInterval(reverseInterval.current);
        reverseInterval.current = null;
      }
      
      isPlayingForward.current = true;
      isPlayingReverse.current = false;
      
      // Actually play the video
      video.play().then(() => {
        console.log("Video playing forward");
      }).catch(err => {
        console.error("Error playing video:", err);
      });
    };

    const playReverse = () => {
      if (isPlayingReverse.current || !hasPlayedForward.current || video.currentTime <= 0.1) return;
      
      // Pause forward playback
      video.pause();
      isPlayingForward.current = false;
      isPlayingReverse.current = true;
      
      console.log("Starting reverse from:", video.currentTime);
      
      // Manual reverse playback
      reverseInterval.current = setInterval(() => {
        if (video.currentTime <= 0.1) {
          video.currentTime = 0;
          clearInterval(reverseInterval.current!);
          reverseInterval.current = null;
          isPlayingReverse.current = false;
          hasPlayedForward.current = false;
          console.log("Reverse complete");
          return;
        }
        
        video.currentTime = Math.max(0, video.currentTime - 0.025);
      }, 16); // ~60fps - slower reverse to match forward speed
    };

    // Handle when video ends naturally
    video.addEventListener('ended', () => {
      console.log("Video ended");
      isPlayingForward.current = false;
      hasPlayedForward.current = true;
    });

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      
      // Check if section is in viewport
      const sectionInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (!sectionInView) {
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDelta = currentScrollY - lastScrollY.current;
      
      // Detect scroll direction
      if (scrollDelta > 2) {
        // Scrolling down - play forward
        playForward();
      } else if (scrollDelta < -2) {
        // Scrolling up - play reverse
        playReverse();
      }

      lastScrollY.current = currentScrollY;
    };

    // Set initial scroll position
    lastScrollY.current = window.scrollY;
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener('ended', () => {});
      if (reverseInterval.current) {
        clearInterval(reverseInterval.current);
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
        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-14 sm:pt-36">
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