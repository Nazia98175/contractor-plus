"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef = useRef(null);

  const leftIcons = [
    {
      src: "/images/png/contractor-2.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-[29px]",
      initialX: -150,
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

  const rightIcons = [
    {
      src: "/images/png/contractor-4.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
      imgSize: "lg:max-w-[38px] max-w-[29px]", // Fixed incorrect value
      initialX: 150,
      initialY: -80,
    },
    {
      src: "/images/png/contractor-5.png",
      width: 38,
      height: 38,
      size: "lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]",
      imgSize: "lg:max-w-[38px] max-w-[25px]", // Fixed incorrect value
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Clean up previous animations to prevent conflicts
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf([
      ...leftIconsRef.current,
      ...rightIconsRef.current,
      centerRef.current,
    ]);

    const ctx = gsap.context(() => {
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "center 10%", // Adjusted for better visibility
        scrub: 0.6,
        invalidateOnRefresh: true,
      };

      const getInitial = (val: number) => {
        if (window.innerWidth < 768) return val * 0.6;
        if (window.innerWidth < 1024) return val * 0.8;
        return val;
      };

      [...leftIconsRef.current].forEach((el, i) => {
        if (!el) return;
        const { initialX, initialY } = leftIcons[i];
        gsap.set(el, { clearProps: "all" });
        gsap.fromTo(
          el,
          {
            x: getInitial(initialX),
            y: getInitial(initialY),
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
            scrollTrigger,
            force3D: true,
          }
        );
      });

      [...rightIconsRef.current].forEach((el, i) => {
        if (!el) return;
        const { initialX, initialY } = rightIcons[i];
        gsap.set(el, { clearProps: "all" });
        gsap.fromTo(
          el,
          {
            x: getInitial(initialX),
            y: getInitial(initialY),
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
            scrollTrigger,
            force3D: true,
          }
        );
      });

      gsap.set(centerRef.current, { clearProps: "all" });
      gsap.fromTo(
        centerRef.current,
        {
          y: getInitial(-100),
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
          scrollTrigger,
          force3D: true,
        }
      );

      // Hover animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 50%", // Adjusted to start animations sooner
        onEnter: () => {
          if (!isMobile) {
            [...leftIconsRef.current].forEach((el, i) => {
              if (!el) return;
              const y = i % 2 === 0 ? 4 : -4;
              gsap.to(el, {
                y,
                duration: 5 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                force3D: true,
              });
            });

            [...rightIconsRef.current].forEach((el, i) => {
              if (!el) return;
              const y = i % 2 === 0 ? -4 : 4;
              gsap.to(el, {
                y,
                duration: 5 + i * 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                force3D: true,
              });
            });

            gsap.to(centerRef.current, {
              scale: 1.03,
              duration: 4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              force3D: true,
            });
          }
        },
        onLeaveBack: () => {
          leftIconsRef.current.forEach(
            (el) => el && gsap.killTweensOf(el, { y: true })
          );
          rightIconsRef.current.forEach(
            (el) => el && gsap.killTweensOf(el, { y: true })
          );
          if (centerRef.current)
            gsap.killTweensOf(centerRef.current, { scale: true });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <Image
        className="object-cover top-0 right-0 absolute -z-0 pointer-events-none lg:flex hidden"
        src={"/images/svg/large-comet.svg"}
        width={700}
        height={300}
        alt="large-comet"
      />
      <Image
        className="object-cover top-0 right-0 absolute -z-0 pointer-events-none flex lg:hidden"
        src={"/images/svg/large-comet-mobile.svg"}
        width={700}
        height={300}
        alt="large-comet"
      />

      <div
        ref={sectionRef}
        className="pt-12 pb-[53px] overflow-visible will-change-transform w-full"
      >
        <h3 className="text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center mb-8">
          Whatever you use, Contractor+ connects
        </h3>
        <div className="container mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-center md:justify-between lg:gap-5 pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
            {/* Left Grid */}
            <div className="max-w-[409px] lg:py-[59px] py-8 w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center">
              <div className="grid grid-cols-3 grid-rows-3 h-full w-full relative">
                {leftIcons.map((icon, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      leftIconsRef.current[i] = el;
                    }}
                    className={`${
                      icon.size
                    } flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 ${
                      i === 0
                        ? "col-start-2 row-start-1 self-start justify-self-center"
                        : i === 1
                        ? "col-start-1 row-start-3 self-end justify-self-start"
                        : "col-start-3 row-start-3 self-end justify-self-end"
                    } will-change-transform`}
                  >
                    <OnIcon className="absolute w-full h-full -z-1 pointer-events-none one" />
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

            {/* Center */}
            <div
              ref={centerRef}
              className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30 will-change-transform"
            >
              <div className="second-border xl:p-5 p-3 relative z-30 w-fit">
                <div className="relative xl:w-[110px] lg:w-20 w-[55px] xl:h-[110px] lg:h-20 h-[55px] flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden third-border">
                  <OnIcon className="absolute w-full h-full pointer-events-none -z-1 one" />
                  <OnIconw className="absolute w-[99%] h-[99%] pointer-events-none two" />
                  <Image
                    className="object-cover relative z-10 lg:max-w-[51px] max-w-[31px]"
                    src="/images/png/center-icon.png"
                    width={51}
                    height={68}
                    alt="center-icon"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="max-w-[409px] lg:py-[59px] py-8 w-full md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center">
              <div className="grid grid-cols-3 grid-rows-3 h-full w-full relative">
                {rightIcons.map((icon, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      rightIconsRef.current[i] = el;
                    }}
                    className={`${
                      icon.size
                    } flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 ${
                      i === 0
                        ? "col-start-1 row-start-1 self-start justify-self-start"
                        : i === 1
                        ? "col-start-3 row-start-3 self-end justify-self-end"
                        : "col-start-2 row-start-3 self-end justify-self-start"
                    } will-change-transform`}
                  >
                    <OnIcon className="absolute w-full h-full -z-1 pointer-events-none one" />
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
        </div>
      </div>

      {/* Additional text section */}
      <div className="text-center pt-8 pb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Make operations your competitive edge
        </h2>
        <p className="text-xl md:text-2xl text-white opacity-90">
          The ROI from Contractor+ makes the choice easy
        </p>
      </div>
    </section>
  );
};

export default Whatever;
