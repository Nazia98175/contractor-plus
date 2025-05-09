"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  // State to track if mobile view is active
  const [isMobile, setIsMobile] = useState(false);

  // Refs for animation targets
  const sectionRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const centerRef = useRef(null);
  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Left icons data
  const leftIcons = [
    {
      src: "/images/png/contractor-2.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-[29px]",
      initialX: -150, // Reduced distance for better responsiveness
      initialY: -80,
    },
    {
      src: "/images/png/contractor-1.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[58px] lg:h-[85px] h-[58px]",
      imgSize: "lg:max-w-[38px] max-w-[26px]",
      initialX: -150,
      initialY: 80,
    },
    {
      src: "/images/png/contractor-3.png",
      width: 66,
      height: 17,
      size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px]",
      imgSize: "lg:max-w-[66px] max-w-[45px]",
      initialX: -150,
      initialY: 80,
    },
  ];

  // Right icons data
  const rightIcons = [
    {
      src: "/images/png/contractor-4.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-7",
      initialX: 150, // Reduced distance for better responsiveness
      initialY: -80,
    },
    {
      src: "/images/png/contractor-5.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]",
      imgSize: "lg:max-w-[38px] max-w-5",
      initialX: 150,
      initialY: 80,
    },
    {
      src: "/images/png/contractor-6.png",
      width: 33,
      height: 33,
      size: "lg:w-[61px] w-10 lg:h-[61px] h-10",
      imgSize: "lg:max-w-[33px] max-w-[21px]",
      initialX: 150,
      initialY: 80,
    },
  ];

  // Initialize refs arrays
  const setLeftIconRef = (el: HTMLDivElement | null, index: number) => {
    leftIconsRef.current[index] = el;
  };

  const setRightIconRef = (el: HTMLDivElement | null, index: number) => {
    rightIconsRef.current[index] = el;
  };

  // Handle window resize and set mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Setup GSAP animations
  useEffect(() => {
    // Skip if running on server or refs aren't ready
    if (typeof window === "undefined" || !sectionRef.current) return;

    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Clear any existing GSAP animations
    gsap.killTweensOf(leftIconsRef.current);
    gsap.killTweensOf(rightIconsRef.current);
    gsap.killTweensOf(centerRef.current);

    // Create a context to isolate animations
    const ctx = gsap.context(() => {
      // Single smooth scroll trigger for clean translations
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "center -20%",
        scrub: 0, // Increased for smoother scrubbing (less jerky)
        invalidateOnRefresh: true, // Updates on window resize
      };

      // Get animation settings based on viewport
      const getInitialX = (baseValue: number) => {
        // Scale down offsets for smaller screens
        if (window.innerWidth < 768) return baseValue * 0.6;
        if (window.innerWidth < 1024) return baseValue * 0.8;
        return baseValue;
      };

      const getInitialY = (baseValue: number) => {
        // Scale down offsets for smaller screens
        if (window.innerWidth < 768) return baseValue * 0.6;
        if (window.innerWidth < 1024) return baseValue * 0.8;
        return baseValue;
      };

      // Animate left icons with responsive offsets
      leftIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        const iconData = leftIcons[index];

        // Reset transform first to prevent jerking caused by existing transforms
        gsap.set(icon, { clearProps: "all" });

        // Simple clean fromTo animation with responsive values
        gsap.fromTo(
          icon,
          {
            x: getInitialX(iconData.initialX),
            y: getInitialY(iconData.initialY),
            scale: 0.2,
            opacity: 0,
            filter: "blur(8px)",
            force3D: true, // For smoother animations
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: scrollTrigger,
            force3D: true,
          }
        );
      });

      // Animate right icons with responsive offsets
      rightIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        const iconData = rightIcons[index];

        // Reset transform first to prevent jerking
        gsap.set(icon, { clearProps: "all" });

        // Simple clean fromTo animation with responsive values
        gsap.fromTo(
          icon,
          {
            x: getInitialX(iconData.initialX),
            y: getInitialY(iconData.initialY),
            scale: 0.2,
            opacity: 0,
            filter: "blur(8px)",
            force3D: true,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            scrollTrigger: scrollTrigger,
            force3D: true,
          }
        );
      });

      // Animate center icon with responsive values
      gsap.set(centerRef.current, { clearProps: "all" });

      gsap.fromTo(
        centerRef.current,
        {
          y: getInitialY(-100),
          scale: 0.3,
          opacity: 0,
          filter: "blur(8px)",
          force3D: true,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: scrollTrigger,
          force3D: true,
        }
      );

      // Setup gentle floating AFTER scroll animations (less impact for smaller screens)
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 40%",
        onEnter: () => {
          // Only apply floating animations if not in mobile view or when elements are fully visible
          if (!isMobile) {
            // Left icons gentle floating
            leftIconsRef.current.forEach((icon, index) => {
              if (!icon) return;

              // Very gentle floating patterns
              const yDistance = index % 2 === 0 ? 4 : -4; // Reduced distance
              const duration = 5 + index * 0.5; // Slower for smoother movement

              gsap.to(icon, {
                y: yDistance,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                force3D: true,
              });
            });

            // Right icons gentle floating
            rightIconsRef.current.forEach((icon, index) => {
              if (!icon) return;

              // Very gentle floating patterns
              const yDistance = index % 2 === 0 ? -4 : 4; // Reduced distance
              const duration = 5 + index * 0.5; // Slower for smoother movement

              gsap.to(icon, {
                y: yDistance,
                duration: duration,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                force3D: true,
              });
            });

            // Center icon subtle pulsing
            gsap.to(centerRef.current, {
              scale: 1.03, // Reduced scale change
              duration: 4, // Slower animation
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true,
            });
          }
        },
        onLeaveBack: () => {
          // Clean up floating animations when scrolling back up
          leftIconsRef.current.forEach((icon) => {
            if (icon) gsap.killTweensOf(icon, { y: true });
          });

          rightIconsRef.current.forEach((icon) => {
            if (icon) gsap.killTweensOf(icon, { y: true });
          });

          if (centerRef.current)
            gsap.killTweensOf(centerRef.current, { scale: true });
        },
      });
    }, sectionRef); // Scope to section element

    // Cleanup function
    return () => {
      ctx.revert(); // Clean up all animations
    };
  }, [isMobile]); // Re-run when mobile state changes

  return (
    <section
      className="pt-12 pb-[53px] overflow-hidden will-change-transform"
      ref={sectionRef}
    >
      <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
        Whatever you use, Contractor+ connects
      </h3>
      <div className="container mx-auto px-4">
        <div className="main-container flex md:flex-row flex-col justify-center md:justify-between gap-5 pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
          {/* Left side - using Grid instead of absolute positioning */}
          <div
            ref={leftContainerRef}
            className="max-w-[409px] w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px] will-change-transform"
          >
            <div className="grid grid-cols-3 grid-rows-3 h-full w-full relative">
              {/* Left top icon */}
              <div
                ref={(el) => setLeftIconRef(el, 0)}
                className={`${leftIcons[0].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-2 col-span-1 row-start-1 self-start justify-self-center will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${leftIcons[0].imgSize}`}
                  src={leftIcons[0].src}
                  width={leftIcons[0].width}
                  height={leftIcons[0].height}
                  alt="contractor"
                  unoptimized
                />
              </div>

              {/* Left bottom left icon */}
              <div
                ref={(el) => setLeftIconRef(el, 1)}
                className={`${leftIcons[1].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-1 row-start-3 self-end justify-self-start will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${leftIcons[1].imgSize}`}
                  src={leftIcons[1].src}
                  width={leftIcons[1].width}
                  height={leftIcons[1].height}
                  alt="contractor"
                  unoptimized
                />
              </div>

              {/* Left bottom right icon */}
              <div
                ref={(el) => setLeftIconRef(el, 2)}
                className={`${leftIcons[2].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-3 row-start-3 self-end justify-self-end will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${leftIcons[2].imgSize}`}
                  src={leftIcons[2].src}
                  width={leftIcons[2].width}
                  height={leftIcons[2].height}
                  alt="contractor"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Center element */}
          <div
            ref={centerRef}
            className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30 will-change-transform"
          >
            <div className="second-border xl:p-5 p-3 relative z-30 w-fit">
              <div className="relative xl:w-[110px] lg:w-20 w-[67px] xl:h-[110px] lg:h-20 h-[67px] flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden third-border">
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className="object-cover relative z-10 lg:max-w-[51px] max-w-[31px]"
                  src={"/images/png/center-icon.png"}
                  width={51}
                  height={68}
                  alt="center-icon"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Right side - using Grid instead of absolute positioning */}
          <div
            ref={rightContainerRef}
            className="max-w-[409px] w-full md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px] will-change-transform"
          >
            <div className="grid grid-cols-3 grid-rows-3 h-full w-full relative">
              {/* Right top icon */}
              <div
                ref={(el) => setRightIconRef(el, 0)}
                className={`${rightIcons[0].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-1 row-start-1 self-start justify-self-start will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${rightIcons[0].imgSize}`}
                  src={rightIcons[0].src}
                  width={rightIcons[0].width}
                  height={rightIcons[0].height}
                  alt="contractor"
                  unoptimized
                />
              </div>

              {/* Right bottom right icon */}
              <div
                ref={(el) => setRightIconRef(el, 1)}
                className={`${rightIcons[1].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-3 row-start-3 self-end justify-self-end will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${rightIcons[1].imgSize}`}
                  src={rightIcons[1].src}
                  width={rightIcons[1].width}
                  height={rightIcons[1].height}
                  alt="contractor"
                  unoptimized
                />
              </div>

              {/* Right bottom left icon */}
              <div
                ref={(el) => setRightIconRef(el, 2)}
                className={`${rightIcons[2].size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 col-start-2 row-start-3 self-end justify-self-start will-change-transform`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${rightIcons[2].imgSize}`}
                  src={rightIcons[2].src}
                  width={rightIcons[2].width}
                  height={rightIcons[2].height}
                  alt="contractor"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatever;
