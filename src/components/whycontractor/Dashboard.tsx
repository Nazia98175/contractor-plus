"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { TickIcon } from "./Icons";
import { PropWayToWin } from "./WayToWin";

gsap.registerPlugin(ScrollTrigger);

const Dashboard: React.FC<PropWayToWin> = ({ connectedSystem }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animation order: [1, 0, 3, 2]
  const animationOrder = [1, 0, 3, 2];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial state for all items
    itemRefs.current.forEach((ref) => {
      if (!ref) return;
      const tickPath = ref.querySelector(".tick-icon path");
      const tickWrapper = ref.querySelector(".tick-icon");
      const title = ref.querySelector(".dashboard-title");

      gsap.set(tickPath, { fill: "#ADB1B5" });
      gsap.set(tickWrapper, {
        scale: 1,
        filter: "drop-shadow(0 0 0px transparent)",
      });
      gsap.set(title, { opacity: 0.6, scale: 1 });
    });

    // Create individual ScrollTriggers for each item
    animationOrder.forEach((itemIndex, orderIndex) => {
      const ref = itemRefs.current[itemIndex];
      if (!ref) return;

      ScrollTrigger.create({
        trigger: ref,
        start: window.innerWidth < 768 ? "top 10%" : "top center", // Earlier trigger on mobile, later on desktop
        end: "bottom 40%",
        markers: false,
        onEnter: () => {
          const tickPath = ref.querySelector(".tick-icon path");
          const tickWrapper = ref.querySelector(".tick-icon");
          const title = ref.querySelector(".dashboard-title");
          const glowSvg = ref.querySelector(".glow-svg");

          // Animate with a slight delay based on order
          const delay = orderIndex * 0.1;

          gsap.to(tickPath, {
            fill: "#5ED5A8",
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          gsap.to(tickWrapper, {
            scale: 1.05,
            filter: "drop-shadow(0 0 40px #5ED5A8)",
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          gsap.to(title, {
            opacity: 1,
            scale: 1.02,
            duration: 0.5,
            delay: delay,
            ease: "power2.out",
          });

          // Animate the glow SVG
          gsap.to(glowSvg, {
            opacity: 1,
            scale: 1.1,
            duration: 0.6,
            delay: delay,
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          // Reset when scrolling back up
          const tickPath = ref.querySelector(".tick-icon path");
          const tickWrapper = ref.querySelector(".tick-icon");
          const title = ref.querySelector(".dashboard-title");
          const glowSvg = ref.querySelector(".glow-svg");

          gsap.to(tickPath, {
            fill: "#ADB1B5",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(tickWrapper, {
            scale: 1,
            filter: "drop-shadow(0 0 0px transparent)",
            duration: 0.3,
            ease: "power2.out",
          });

          gsap.to(title, {
            opacity: 0.6,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });

          // Hide the glow SVG
          gsap.to(glowSvg, {
            opacity: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-[0] -mt-10 bg-black lg:-mt-16 xl:mt-[-97px]"
    >
      <video
        className="w-full mix-blend-screen md:hidden"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/dashboard-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden max-md:hidden xl:h-[1300px]">
        <video className="h-full w-full" autoPlay loop muted playsInline>
          <source src="/video/dashboard-desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-between px-3 max-md:mt-10 max-md:gap-24 md:absolute md:top-[12%] md:left-1/2 md:translate-x-[-50%] md:grid-cols-2 lg:h-[300px] xl:h-[400px]">
        {connectedSystem?.systemList?.map((item: any, i: number) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            data-animation-order={animationOrder.indexOf(i)}
            className={`dashboard-item relative flex h-fit flex-col items-center justify-center gap-[18px] px-3 text-center max-sm:py-3 sm:gap-3 md:mx-auto md:max-w-[280px] lg:max-w-[327px] xl:mt-[72px] ${i === 1 ? "md:-translate-y-10 xl:-translate-y-20" : i === 2 ? "md:translate-y-10 xl:translate-y-20" : ""}`}
          >
            <p className="dashboard-title text-lg font-semibold text-white opacity-60 duration-300 md:text-base lg:text-lg">
              {item.title}
            </p>
            <span className="relative flex items-center justify-center py-10 md:py-0">
              <svg
                className="glow-svg pointer-events-none absolute top-1/2 left-1/2 -translate-1/2 opacity-0 duration-500 ease-out"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: -1,
                }}
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_2486_19020)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.2084 26.9902C42.6441 25.6699 40.3559 25.6699 38.7917 26.9902L37.3671 28.1926C36.7023 28.7537 35.8796 29.0945 35.0126 29.1679L33.1551 29.3249C31.1155 29.4974 29.4974 31.1155 29.3249 33.1551L29.1679 35.0126C29.0945 35.8796 28.7537 36.7023 28.1926 37.3671L26.9902 38.7917C25.6699 40.3559 25.6699 42.6441 26.9902 44.2084L28.1926 45.6329C28.7537 46.2977 29.0945 47.1205 29.1679 47.9874L29.3249 49.845C29.4974 51.8846 31.1155 53.5027 33.1551 53.6751L35.0126 53.8321C35.8796 53.9056 36.7023 54.2463 37.3671 54.8075L38.7917 56.0099C40.3559 57.33 42.6441 57.33 44.2084 56.0099L45.6329 54.8075C46.2977 54.2463 47.1205 53.9056 47.9874 53.8321L49.845 53.6751C51.8846 53.5027 53.5027 51.8846 53.6751 49.845L53.8321 47.9874C53.9056 47.1205 54.2463 46.2977 54.8075 45.6329L56.0099 44.2084C57.33 42.6441 57.33 40.3559 56.0099 38.7917L54.8075 37.3671C54.2463 36.7023 53.9056 35.8796 53.8321 35.0126L53.6751 33.1551C53.5027 31.1155 51.8846 29.4974 49.845 29.3249L47.9874 29.1679C47.1205 29.0945 46.2977 28.7537 45.6329 28.1926L44.2084 26.9902ZM49.1354 38.6373C49.8733 37.8994 49.8733 36.703 49.1354 35.9651C48.3976 35.2271 47.2011 35.2271 46.4632 35.9651L39.4014 43.0269L36.5386 40.164C35.8007 39.4261 34.6043 39.4261 33.8664 40.164C33.1285 40.9019 33.1285 42.0983 33.8664 42.8362L38.0654 47.0351C38.8033 47.773 39.9996 47.773 40.7375 47.0351L49.1354 38.6373Z"
                    fill="#5ED5A8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2486_19020"
                    x="0.6"
                    y="0.6"
                    width="81.8"
                    height="81.8"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="12.7"
                      result="effect1_foregroundBlur_2486_19020"
                    />
                  </filter>
                </defs>
              </svg>
              <TickIcon className="tick-icon" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
