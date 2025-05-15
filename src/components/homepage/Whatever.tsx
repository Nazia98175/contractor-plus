"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { OnIcon, OnIconw } from "../common/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { leftIcons, rightIcons } from "../common/Helper";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";
import ParticlesComponent from "../common/ParticlesComponent";
import FooterLogoWithStars from "../common/FooterLogoWithStars";
// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Whatever = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const leftIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rightIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerRef = useRef(null);
  const t = useTranslations();
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Clean up previous animations to prevent conflicts
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf([
      ...leftIconsRef.current,
      ...rightIconsRef.current,
      centerRef.current,
    ]);

    const ctx = gsap.context(() => {
      // Set initial positions using GSAP
      const leftSection = document.querySelector(".left-section");
      const rightSection = document.querySelector(".right-section");

      if (leftSection && rightSection) {
        // Position the icons absolutely within their containers
        leftIconsRef.current.forEach((el, i) => {
          if (!el) return;

          // Set initial absolute position - using finalX/Y for positioning
          gsap.set(el, {
            position: "absolute",
            left: leftIcons[i].finalX,
            top: leftIcons[i].finalY,
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            scale: 0.2,
            filter: "blur(8px)",
          });
        });

        rightIconsRef.current.forEach((el, i) => {
          if (!el) return;

          // Set initial absolute position - using finalX/Y for positioning
          gsap.set(el, {
            position: "absolute",
            left: rightIcons[i].finalX,
            top: rightIcons[i].finalY,
            xPercent: -50,
            yPercent: -50,
            opacity: 0,
            scale: 0.2,
            filter: "blur(8px)",
          });
        });
      }

      // ScrollTrigger configuration - with more responsive breakpoints
      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "center 10%",
        scrub: 0.6,
        invalidateOnRefresh: true,
        // Add markers for debugging (remove in production)
        // markers: true,

        // Add breakpoints for more control
        id: "icons-animation",

        // Dynamically update animation properties on refresh
        onRefresh: (self: { refresh: () => void }) => {
          // This will re-run calculations when screen size changes
          self.refresh();
        },
      };

      const getInitial = (val: number) => {
        if (window.innerWidth < 768) return val * 0.6;
        if (window.innerWidth < 1024) return val * 0.8;
        return val;
      };

      // Animate left icons - translating from initialX/Y to finalX/Y
      leftIconsRef.current.forEach((el, i) => {
        if (!el) return;

        // Create a variable to store the starting position (responsive)
        const getStartX = () => {
          if (window.innerWidth < 768) return leftIcons[i].initialX * 0.6;
          if (window.innerWidth < 1024) return leftIcons[i].initialX * 0.8;
          return leftIcons[i].initialX;
        };

        const getStartY = () => {
          if (window.innerWidth < 768) return leftIcons[i].initialY * 0.6;
          if (window.innerWidth < 1024) return leftIcons[i].initialY * 0.8;
          return leftIcons[i].initialY;
        };

        // Apply initial transform offset - This is what will animate
        gsap.set(el, {
          x: getStartX(),
          y: getStartY(),
        });

        // Animate to final position (x:0, y:0) on scroll
        gsap.to(el, {
          x: 0, // Final position (no offset)
          y: 0, // Final position (no offset)
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger,
          force3D: true,
        });
      });

      // Animate right icons - translating from initialX/Y to finalX/Y
      rightIconsRef.current.forEach((el, i) => {
        if (!el) return;

        // Create a variable to store the starting position (responsive)
        const getStartX = () => {
          if (window.innerWidth < 768) return rightIcons[i].initialX * 0.6;
          if (window.innerWidth < 1024) return rightIcons[i].initialX * 0.8;
          return rightIcons[i].initialX;
        };

        const getStartY = () => {
          if (window.innerWidth < 768) return rightIcons[i].initialY * 0.6;
          if (window.innerWidth < 1024) return rightIcons[i].initialY * 0.8;
          return rightIcons[i].initialY;
        };

        // Apply initial transform offset - This is what will animate
        gsap.set(el, {
          x: getStartX(),
          y: getStartY(),
        });

        // Animate to final position (x:0, y:0) on scroll
        gsap.to(el, {
          x: 0, // Final position (no offset)
          y: 0, // Final position (no offset)
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger,
          force3D: true,
        });
      });

      // Center element animation - only triggered on scroll, not automatic
      gsap.set(centerRef.current, {
        y: getInitial(80), // Increased offset to make translation more visible
        x: 0, // No horizontal movement for center element
        opacity: 0,
        scale: 0.3,
        filter: "blur(8px)",
      });

      gsap.to(centerRef.current, {
        y: 0, // Final position
        x: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        scrollTrigger,
        force3D: true,
      });

      // Hover animation - Only start after elements have entered view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 50%",
        onEnter: () => {
          if (!isMobile) {
            [...leftIconsRef.current].forEach((el, i) => {
              if (!el) return;
              const y = i % 2 === 0 ? 4 : -4;
              gsap.to(el, {
                y: `+=${y}`, // Use relative animation to preserve scroll position
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
                y: `+=${y}`, // Use relative animation to preserve scroll position
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
    <section className="relative w-full overflow-hidden">
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
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <h3 className="section-heading text-white text-center md:mb-8 mb-[21px]">
            {t("whatever")}
          </h3>
        </TextAnimation>
        <div ref={containerRef} className="max-w-[1002px] mx-auto px-2 lg:px-0">
          <div className="flex md:flex-row flex-col justify-center md:justify-between lg:gap-5 md:pt-5 items-center md:bg-none bg-[url('/images/svg/mobile-lines_animated.svg')] bg-no-repeat bg-contain bg-center">
            {/* Left Side */}
            <div
              id="scene"
              className="left-section max-w-[409px] lg:py-[59px] md:py-8 w-full md:bg-[url('/images/svg/left-red-lines_animated.svg')] bg-no-repeat bg-cover bg-center relative md:h-[300px] h-[249px]"
            >
              {leftIcons.map((icon, i) => (
                <div
                  data-depth="0.2"
                  key={i}
                  ref={(el) => {
                    leftIconsRef.current[i] = el;
                  }}
                  className={`${icon.size} absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 will-change-transform`}
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

            {/* Center */}
            <div
              ref={centerRef}
              className="max-w-[270px] w-fit first-border xl:p-5 p-3 m-auto relative z-30 will-change-transform"
            >
              <FooterLogoWithStars />
            </div>

            {/* Right Side */}
            <div className="right-section max-w-[409px] lg:py-[59px] py-8 w-full md:bg-[url('/images/svg/right-red-line_animated.svg')] bg-no-repeat bg-cover bg-center relative md:h-[300px] h-[249px]">
              {rightIcons.map((icon, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    rightIconsRef.current[i] = el;
                  }}
                  className={`${icon.size} absolute flex items-center justify-center lg:rounded-3xl rounded-xl overflow-hidden p-2 will-change-transform`}
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
        <TextAnimation animateOnScroll={true} delay={0.3}>
          <p className="text-lg capitalize text-granite opacity-90 text-center">
            <span className="!text-white sm:!text-heatherGrey pr-2">5000+</span>
            {t("potentialIntegrations")}
          </p>
        </TextAnimation>
      </div>
    </section>
  );
};

export default Whatever;
