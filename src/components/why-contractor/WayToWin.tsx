import React, { useEffect, useState } from "react";
import Image from "next/image";
import TextAnimation from "../common/TextAnimation";
import Copy from "../common/Copy";

const WayToWin = () => {
  const [windowLights, setWindowLights] = useState<boolean[]>([]);
  const [pulsingWindows, setPulsingWindows] = useState<number[]>([]);

  // Initialize random window states
  useEffect(() => {
    // Create initial state for ~50 windows
    const initialLights = Array(50)
      .fill(false)
      .map(() => Math.random() > 0.25); // More lights on initially
    setWindowLights(initialLights);

    // Set some windows to pulse
    const initialPulsing = [5, 15, 25, 35, 45].filter(
      () => Math.random() > 0.5,
    );
    setPulsingWindows(initialPulsing);
  }, []);

  // Randomly toggle windows - FASTER
  useEffect(() => {
    const interval = setInterval(
      () => {
        setWindowLights((prev) => {
          const newLights = [...prev];
          // Randomly pick 2-4 windows to toggle
          const windowsToToggle = Math.floor(Math.random() * 3) + 2;

          for (let i = 0; i < windowsToToggle; i++) {
            const randomIndex = Math.floor(Math.random() * newLights.length);
            newLights[randomIndex] = !newLights[randomIndex];
          }

          return newLights;
        });

        // Occasionally change which windows are pulsing
        if (Math.random() > 0.7) {
          setPulsingWindows((prev) => {
            const newPulsing = [...prev];
            const randomIndex = Math.floor(Math.random() * 50);
            if (newPulsing.includes(randomIndex)) {
              return newPulsing.filter((i) => i !== randomIndex);
            } else if (newPulsing.length < 8) {
              return [...newPulsing, randomIndex];
            }
            return newPulsing;
          });
        }
      },
      1500 + Math.random() * 2000, // Faster: 1.5-3.5 seconds
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-sm:mt-[120px]">
      <div className="absolute top-0 left-1/2 z-10 mx-auto w-full max-w-[1100px] translate-x-[-50%] px-3 pt-5 sm:pt-20">
        <Copy animateOnScroll={true} delay={0}>
          <h2 className="main-heading text-center !font-semibold max-sm:!text-lg">
            <span className="text-white">The new way to win? </span>
            <span className="mx-auto block bg-gradient-to-b from-[#FFFFFF] to-[#BE0C0C] bg-clip-text text-transparent max-sm:max-w-[80%]">
              A connected system that moves as one.
            </span>{" "}
          </h2>
        </Copy>
        <Copy animateOnScroll={true} delay={0}>
          <p className="text-superSilver mx-auto mt-4 text-center text-sm leading-[130%] font-medium sm:max-w-[70%] sm:text-base xl:text-lg">
            Contractors who want growth are moving from a frankenstack of
            software and tools to one solution that removes every point of
            friction.{" "}
          </p>
        </Copy>
      </div>
      <div className="before:from-kuroiBlack after:from-kuroiBlack relative mx-auto max-w-[1440px] before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:to-transparent before:content-[''] after:absolute after:top-0 after:right-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:to-transparent after:content-['']">
        <div className="relative">
          <Image
            unoptimized
            className="w-full max-sm:hidden xl:h-[707px] 2xl:h-[unset]"
            height={100}
            width={100}
            src={"/images/png/way-to-win-bg.png"}
            alt="way to win"
          />

          {/* Building Lights Overlay - Desktop */}
          <div className="pointer-events-none absolute inset-0 max-xl:hidden">
            {/* Left Building Group */}
            <div className="absolute bottom-[22%] left-[7%] z-10 grid grid-cols-3 gap-1">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`left-${i}`}
                  className={`h-1 w-1 rounded-sm transition-all duration-[800ms] ease-in-out ${
                    windowLights[i]
                      ? pulsingWindows.includes(i)
                        ? "animate-pulse bg-yellow-200/80 shadow-[0_0_8px_rgba(254,240,138,0.8)]"
                        : "bg-yellow-200/60 shadow-[0_0_6px_rgba(254,240,138,0.6)]"
                      : "bg-gray-800/20"
                  }`}
                />
              ))}
            </div>

            {/* Center-Left Building */}
            <div className="absolute bottom-[18%] left-[20%] z-10 grid grid-cols-2 gap-1.5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`center-left-${i}`}
                  className={`h-1 w-1.5 rounded-sm transition-all duration-[1000ms] ease-in-out ${
                    windowLights[i + 12]
                      ? pulsingWindows.includes(i + 12)
                        ? "animate-pulse bg-amber-200/70 shadow-[0_0_10px_rgba(252,211,77,0.7)]"
                        : "bg-yellow-100/50 shadow-[0_0_5px_rgba(254,240,138,0.5)]"
                      : "bg-gray-700/10"
                  }`}
                />
              ))}
            </div>

            {/* Center Building (Tallest) - Enhanced glow */}
            <div className="absolute right-[36%] bottom-[17%] z-10 grid grid-cols-4 gap-1">
              {[...Array(16)].map((_, i) => (
                <div
                  key={`center-${i}`}
                  className={`h-1.5 w-1 rounded-sm transition-all duration-[1200ms] ease-in-out ${
                    windowLights[i + 20]
                      ? pulsingWindows.includes(i + 20)
                        ? "animate-pulse bg-yellow-300/90 shadow-[0_0_12px_rgba(253,224,71,0.9)]"
                        : "bg-yellow-200/70 shadow-[0_0_8px_rgba(254,240,138,0.7)]"
                      : "bg-gray-800/30"
                  }`}
                />
              ))}
            </div>

            {/* Right Building Group */}
            <div className="absolute right-[12%] bottom-[30%] z-10 grid grid-cols-3 gap-1.5">
              {[...Array(14)].map((_, i) => (
                <div
                  key={`right-${i}`}
                  className={`h-1 w-1 rounded-sm transition-all duration-[900ms] ease-in-out ${
                    windowLights[i + 36]
                      ? pulsingWindows.includes(i + 36)
                        ? "animate-pulse bg-orange-200/60 shadow-[0_0_10px_rgba(254,215,170,0.6)]"
                        : "bg-yellow-100/40 shadow-[0_0_4px_rgba(254,240,138,0.4)]"
                      : "bg-gray-700/15"
                  }`}
                />
              ))}
            </div>

            {/* Additional ambient glow effects */}
            <div className="absolute bottom-[20%] left-[15%] h-20 w-20 animate-pulse bg-yellow-200/10 blur-3xl" />
            <div className="absolute right-[25%] bottom-[25%] h-16 w-16 animate-pulse bg-amber-300/10 blur-2xl delay-700" />
          </div>
        </div>
      </div>
      <div className="relative sm:hidden">
        <Image
          unoptimized
          className="w-full"
          height={100}
          width={100}
          src={"/images/png/way-to-win-bg-mobile.png"}
          alt="way to win"
        />
      </div>
    </div>
  );
};

export default WayToWin;
