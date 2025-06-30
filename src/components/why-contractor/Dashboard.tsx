"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TickIcon } from "./Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "80% bottom",
        scrub: 1,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalItems = itemRefs.current.length;
          const activeItems = Math.ceil(progress * totalItems);

          itemRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const tickPath = ref.querySelector(".tick-icon path");
            const tickWrapper = ref.querySelector(".tick-icon");
            const title = ref.querySelector(".dashboard-title");

            if (index < activeItems) {
              // Activate item
              gsap.to(tickPath, {
                fill: "#5ED5A8",
                duration: 0.3,
                ease: "power2.out",
              });

              gsap.to(tickWrapper, {
                scale: 1.05,
                filter: "drop-shadow(0 0 40px #5ED5A8)",
                duration: 0.3,
                ease: "power2.out",
              });

              gsap.to(title, {
                opacity: 1,
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
              });
            } else {
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
            }
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
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
            className={`dashboard-item flex h-fit flex-col items-center justify-center gap-[18px] px-3 text-center max-sm:py-3 sm:gap-3 md:mx-auto md:mt-12 md:max-w-[280px] lg:mt-[72px] lg:max-w-[327px] ${i === 1 ? "-translate-y-20" : i === 2 ? "translate-y-20" : ""}`}
          >
            <p className="dashboard-title text-lg font-semibold text-white opacity-60 duration-300 md:text-base lg:text-lg">
              {text}
            </p>
            <TickIcon className="tick-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
