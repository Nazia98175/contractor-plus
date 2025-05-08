"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  MotionValue,
} from "framer-motion";

const Whatever = () => {
  // References for scroll animations
  const containerRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Define animation transforms
  const xOffsets = [
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 0]), // Left top
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, 0]), // Left bottom
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0]), // Left right
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0]), // Right top
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 40, 0]), // Right bottom
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, 0]), // Right left
  ];

  const yOffsets = [
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, 0]), // Left top
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 0]), // Left bottom
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]), // Left right
    useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, 0]), // Right top
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 20, 0]), // Right bottom
    useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]), // Right left
  ];

  // Central icon - subtle pulse animation
  const centerScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1.1, 1.1, 1]
  );

  // Auto-run animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  // Data for icons
  const leftIcons = [
    {
      src: "/images/png/contractor-2.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-[29px]",
    },
    {
      src: "/images/png/contractor-1.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[58px] lg:h-[85px] h-[58px]",
      imgSize: "lg:max-w-[38px] max-w-[26px]",
    },
    {
      src: "/images/png/contractor-3.png",
      width: 66,
      height: 17,
      size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px]",
      imgSize: "lg:max-w-[66px] max-w-[45px]",
    },
  ];

  const rightIcons = [
    {
      src: "/images/png/contractor-4.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-7",
    },
    {
      src: "/images/png/contractor-5.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]",
      imgSize: "lg:max-w-[38px] max-w-5",
    },
    {
      src: "/images/png/contractor-6.png",
      width: 33,
      height: 33,
      size: "lg:w-[61px] w-10 lg:h-[61px] h-10",
      imgSize: "lg:max-w-[33px] max-w-[21px]",
    },
  ];

  // Generate icon elements with proper animation
  const renderIcon = (
    icon: { src: any; width: any; height: any; size: any; imgSize: any },
    index: number,
    xOffset: MotionValue<number>,
    yOffset: MotionValue<number>,
    delay: number
  ) => (
    <motion.div
      style={{ x: xOffset, y: yOffset }}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay } },
      }}
      className={`p-2 ${icon.size} flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden relative`}
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
    </motion.div>
  );

  return (
    <section className="pt-12 pb-[53px] relative" ref={containerRef}>
      <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
        Whatever you use, Contractor+ connects
      </h3>

      {/* Main container with CSS Grid layout */}
      <div className="main-container flex md:flex-row flex-col justify-center md:justify-between gap-5 pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
        {/* Left Side */}
        <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
          <div className="grid grid-cols-12 h-full relative">
            {/* Left top icon */}
            <div className="col-span-12 col-start-1 lg:col-start-4">
              <div className="flex justify-center mt-11">
                {renderIcon(leftIcons[0], 0, xOffsets[0], yOffsets[0], 0)}
              </div>
            </div>

            {/* Left bottom left icon */}
            <div className="col-span-4 col-start-1 self-end mb-16">
              <div className="flex justify-start ml-[13px]">
                {renderIcon(leftIcons[1], 1, xOffsets[1], yOffsets[1], 0.1)}
              </div>
            </div>

            {/* Left bottom right icon */}
            <div className="col-span-4 col-start-8 self-end mb-12">
              <div className="flex justify-end">
                {renderIcon(leftIcons[2], 2, xOffsets[2], yOffsets[2], 0.2)}
              </div>
            </div>
          </div>
        </div>

        {/* Center element */}
        <div className="max-w-[270px] w-fit m-auto relative z-30">
          <motion.div
            style={{ scale: centerScale }}
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            className="first-border xl:p-5 p-3 relative z-30"
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
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="max-w-[409px] w-full relative md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center h-[363px]">
          <div className="grid grid-cols-12 h-full relative">
            {/* Right top icon */}
            <div className="col-span-4 col-start-2">
              <div className="flex justify-start mt-[53px]">
                {renderIcon(rightIcons[0], 3, xOffsets[3], yOffsets[3], 0.1)}
              </div>
            </div>

            {/* Right bottom right icon */}
            <div className="col-span-4 col-start-8 self-end mb-16">
              <div className="flex justify-end mr-[43px]">
                {renderIcon(rightIcons[1], 4, xOffsets[4], yOffsets[4], 0.2)}
              </div>
            </div>

            {/* Right bottom left icon */}
            <div className="col-span-4 col-start-4 self-end mb-[45px]">
              <div className="flex justify-start">
                {renderIcon(rightIcons[2], 5, xOffsets[5], yOffsets[5], 0.3)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Custom CSS for animations - can be added to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(0px) translateX(20px);
          }
          75% {
            transform: translateY(15px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        @keyframes floatAlt {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(15px) translateX(-10px);
          }
          50% {
            transform: translateY(0px) translateX(-20px);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .icon-float {
          animation: float 8s ease-in-out infinite;
        }

        /* Alternating float directions */
        .icon-float:nth-child(2n) {
          animation: floatAlt 7s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .icon-float:nth-child(3n) {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Whatever;
