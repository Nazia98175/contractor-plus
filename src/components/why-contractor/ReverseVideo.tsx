"use client";
import { useEffect, useRef, useState } from "react";
import { StrokeText } from "./Icons";

const ReverseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [debugInfo, setDebugInfo] = useState({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    error: "",
    videoState: "not loaded",
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isReversing = false;
    let reverseInterval: NodeJS.Timeout | null = null;

    const updateDebug = () => {
      setDebugInfo({
        isPlaying: !video.paused,
        currentTime: video.currentTime,
        duration: video.duration,
        error: "",
        videoState: isReversing ? "reversing" : "playing forward",
      });
    };

    const playForward = () => {
      isReversing = false;
      if (reverseInterval) {
        clearInterval(reverseInterval);
        reverseInterval = null;
      }

      video.playbackRate = 0.65; // 30% faster than 0.5
      video
        .play()
        .then(() => {
          console.log("Video playing forward");
          updateDebug();
        })
        .catch((e) => {
          console.error("Play error:", e);
          setDebugInfo((prev) => ({ ...prev, error: e.message }));
        });
    };

    const startReverse = () => {
      console.log("Starting reverse");
      isReversing = true;
      video.pause();

      reverseInterval = setInterval(() => {
        if (video.currentTime <= 0.05) {
          clearInterval(reverseInterval!);
          reverseInterval = null;
          video.currentTime = 0;
          playForward();
        } else {
          video.currentTime -= 0.02; // 30% faster reverse
        }
        updateDebug();
      }, 40); // Faster interval
    };

    const handleTimeUpdate = () => {
      updateDebug();

      if (!isReversing && video.currentTime >= video.duration - 0.1) {
        startReverse();
      }
    };

    const handleError = (e: Event) => {
      console.error("Video error:", e);
      setDebugInfo((prev) => ({ ...prev, error: "Video loading error" }));
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("error", handleError);
    video.addEventListener("loadeddata", () => {
      console.log("Video loaded, duration:", video.duration);
      playForward();
    });

    if (video.readyState >= 3) {
      playForward();
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("error", handleError);
      if (reverseInterval) clearInterval(reverseInterval);
    };
  }, []);

  return (
    <section className="relative z-10 h-[242px] sm:h-[541px] px-2.5">
      <video
        ref={videoRef}
        className="absolute z-[-1] h-full w-full object-cover object-top left-0"
        muted
        playsInline
        preload="auto"
      >
        <source src="/video/l-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute -top-1 left-0 h-10 sm:h-[142px] w-full"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1 left-0 h-20 sm:h-[250px] w-full rotate-180"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center pt-10">
        <h2 className="text-lg leading-[127%] font-extrabold sm:text-4xl lg:text-5xl xl:text-[52px] text-center text-white">
          "If it ain't broke, don't fix it" is the
        </h2>
        <StrokeText />
      </div>
    </section>
  );
};

export default ReverseVideo;
