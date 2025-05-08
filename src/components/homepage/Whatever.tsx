"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  // Refs for animation targets
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef = useRef(null);

  // Left icons data
  const leftIcons = [
    {
      src: "/images/png/contractor-2.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-[29px]",
      position: "ml-[124px] mt-11",
      initialX: -80,
      initialY: -30,
    },
    {
      src: "/images/png/contractor-1.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[58px] lg:h-[85px] h-[58px]",
      imgSize: "lg:max-w-[38px] max-w-[26px]",
      position: "mt-[182px] ml-[13px]",
      initialX: -100,
      initialY: -10,
    },
    {
      src: "/images/png/contractor-3.png",
      width: 66,
      height: 17,
      size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px]",
      imgSize: "lg:max-w-[66px] max-w-[45px]",
      position: "ml-[227px] mt-[204px]",
      initialX: -60,
      initialY: 20,
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
      position: "ml-[53px] mt-[53px]",
      initialX: 80,
      initialY: -30,
    },
    {
      src: "/images/png/contractor-5.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]",
      imgSize: "lg:max-w-[38px] max-w-5",
      position: "right-[43px] bottom-[63px] mt-[182px]",
      initialX: 100,
      initialY: 10,
    },
    {
      src: "/images/png/contractor-6.png",
      width: 33,
      height: 33,
      size: "lg:w-[61px] w-10 lg:h-[61px] h-10",
      imgSize: "lg:max-w-[33px] max-w-[21px]",
      position: "ml-[103px] bottom-[45px]",
      initialX: 60,
      initialY: 20,
    },
  ];

  // Initialize refs arrays
  const setLeftIconRef = (el: HTMLDivElement | null, index: number) => {
    leftIconsRef.current[index] = el;
  };

  const setRightIconRef = (el: HTMLDivElement | null, index: number) => {
    rightIconsRef.current[index] = el;
  };

  // Setup GSAP animations
  useEffect(() => {
    // Skip if running on server or refs aren't ready
    if (typeof window === "undefined" || !containerRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Create a context to isolate animations
    const ctx = gsap.context(() => {
      // Setup the scroll trigger for the section
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 80%", // Start animation when the top of the section is 80% from the top of viewport
        end: "center 40%", // End animation when the center of the section is 40% from the top of viewport
        scrub: 1, // Smooth scrubbing effect with 1 second lag
        // markers: true, // For debugging - comment out in production
      };

      // Animate left icons
      leftIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        const iconData = leftIcons[index];

        // Main scroll animation
        gsap.fromTo(
          icon,
          {
            x: iconData.initialX,
            y: iconData.initialY,
            scale: 0.2,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            scrollTrigger: scrollTrigger,
          }
        );
      });

      // Animate right icons
      rightIconsRef.current.forEach((icon, index) => {
        if (!icon) return;

        const iconData = rightIcons[index];

        // Main scroll animation
        gsap.fromTo(
          icon,
          {
            x: iconData.initialX,
            y: iconData.initialY,
            scale: 0.2,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            scrollTrigger: scrollTrigger,
          }
        );
      });

      // Animate center icon
      gsap.fromTo(
        centerRef.current,
        {
          y: -20,
          scale: 0.8,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: scrollTrigger,
        }
      );

      // Setup floating animations (continuously running)
      // These run after the scroll animations are complete

      // Once scroll is past the trigger end, start the floating animations
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 40%", // Start after the main animations finish
        onEnter: () => {
          // Left icons floating
          leftIconsRef.current.forEach((icon, index) => {
            if (!icon) return;

            // Alternate floating patterns
            const yDistance = index % 2 === 0 ? 6 : -6;
            const xDistance = index % 2 === 0 ? 4 : -4;
            const duration = 3 + index * 0.5;

            gsap.to(icon, {
              y: yDistance,
              x: xDistance,
              duration: duration,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          });

          // Right icons floating
          rightIconsRef.current.forEach((icon, index) => {
            if (!icon) return;

            // Alternate floating patterns
            const yDistance = index % 2 === 0 ? -6 : 6;
            const xDistance = index % 2 === 0 ? -4 : 4;
            const duration = 3 + index * 0.5;

            gsap.to(icon, {
              y: yDistance,
              x: xDistance,
              duration: duration,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          });

          // Center icon subtle pulsing
          gsap.to(centerRef.current, {
            scale: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      });
    }, containerRef); // Scope to container element

    // Cleanup function
    return () => {
      ctx.revert(); // Clean up all animations
    };
  }, []);

  return (
    <section className="pt-12 pb-[53px] overflow-hidden" ref={sectionRef}>
      <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
        Whatever you use, Contractor+ connects
      </h3>
      <div className="container mx-auto" ref={containerRef}>
        <div className="main-container flex md:flex-row flex-col justify-center md:justify-between gap-5 pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
          {/* Left side icons */}
          <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
            {leftIcons.map((icon, index) => (
              <div
                key={`left-${index}`}
                ref={(el) => setLeftIconRef(el, index)}
                className={`p-2 ${icon.size} absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ${icon.position}`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${icon.imgSize}`}
                  src={icon.src}
                  width={icon.width}
                  height={icon.height}
                  alt="contractor"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Center element */}
          <div
            ref={centerRef}
            className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30"
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

          {/* Right side icons */}
          <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
            {rightIcons.map((icon, index) => (
              <div
                key={`right-${index}`}
                ref={(el) => setRightIconRef(el, index)}
                className={`p-2 ${icon.size} absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden ${icon.position}`}
              >
                <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                <Image
                  className={`object-cover relative z-10 ${icon.imgSize}`}
                  src={icon.src}
                  width={icon.width}
                  height={icon.height}
                  alt="contractor"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whatever;
