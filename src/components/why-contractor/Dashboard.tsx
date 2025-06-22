"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TickIcon } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      itemRefs.current.forEach((ref, index) => {
        if (!ref) return;

        ScrollTrigger.create({
          trigger: ref,
          start: "top 50%",
          end: "bottom 20%",
          onEnter: () => {
            ref.classList.add("scroll-active");
          },
          onLeaveBack: () => {
            ref.classList.remove("scroll-active");
          },
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        .dashboard-item p {
          color: #8A8E91;
          transition: color 0.3s ease-in-out;
        }
        
        .dashboard-item.scroll-active p {
          color: #FFFFFF !important;
        }
        
        /* Default icon style */
        .dashboard-item .tick-icon path {
          fill: #ADB1B5;
          transition: all 0.3s ease-in-out;
        }
        
        /* Active icon style with glow effect */
        .dashboard-item.scroll-active .tick-icon {
          filter: drop-shadow(0 0 40 #5ED5A8);
        }
        
        .dashboard-item.scroll-active .tick-icon path {
          fill: #5ED5A8 !important;
        }
        
        /* Add subtle scale animation on activation */
        .dashboard-item .tick-icon {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }
        
        .dashboard-item.scroll-active .tick-icon {
          transform: scale(1.05);
        }
      `}</style>

      <div
        ref={sectionRef}
        className="bg-kuroiBlack relative z-[0] -mt-20 xl:mt-[-97px]"
      >
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full md:hidden"
          src={"/images/png/dashboard-img-mobile.png"}
          alt="dashboard"
        />
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full max-md:hidden xl:h-[1300px] 2xl:h-[unset]"
          src={"/images/png/dashboard-img.png"}
          alt="dashboard"
        />
        <div className="z-10 mx-auto grid w-full max-w-[1100px] grid-cols-1 justify-between px-3 max-md:mt-10 max-md:gap-24 md:absolute md:top-[12%] md:left-1/2 md:translate-x-[-50%] md:grid-cols-2 lg:h-[400px]">
          {[
            "One dashboard for office and field",
            "One source of truth",
            "One solution that needs no workarounds",
            "One mobile app your team actually uses",
          ].map((text, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="dashboard-item flex h-fit flex-col items-center justify-center gap-[18px] px-3 text-center max-sm:py-3 sm:gap-3 md:mx-auto md:mt-12 md:max-w-[280px] lg:mt-[72px] lg:max-w-[327px]"
            >
              <p className="dashboard-title text-lg font-semibold duration-300 md:text-base lg:text-lg">
                {text}
              </p>
              <TickIcon className="tick-icon" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
