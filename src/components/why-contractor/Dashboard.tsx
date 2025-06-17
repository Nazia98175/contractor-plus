"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TickIcon } from "./Icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Dashboard = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".dashboard-title") as HTMLElement[];
      const icons = gsap.utils.toArray(".tick-icon path");

      titles.forEach((el) => {
        gsap.fromTo(
          el,
          { color: "#8A8E91" },
          {
            color: "#FFFFFF",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
              onLeaveBack: () =>
                gsap.to(el, { color: "#8A8E91", duration: 0.3 }),
              onLeave: () => gsap.to(el, { color: "#8A8E91", duration: 0.3 }),
            },
          },
        );
      });

      icons.forEach((icon) => {
        const pathIcon = icon as SVGPathElement;
        const originalColor = pathIcon.getAttribute("fill");

        gsap.fromTo(
          pathIcon,
          { fill: originalColor || "#ADB1B5" },
          {
            fill: "#5ED5A8",
            scrollTrigger: {
              trigger: pathIcon,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
              onLeaveBack: () =>
                gsap.to(pathIcon, {
                  fill: originalColor || "#ADB1B5",
                  duration: 0.3,
                }),
              onLeave: () =>
                gsap.to(pathIcon, {
                  fill: originalColor || "#ADB1B5",
                  duration: 0.3,
                }),
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-kuroiBlack relative z-10 -mt-20 xl:mt-[-97px]"
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
            className="flex h-fit flex-col items-center justify-center gap-[18px] px-3 text-center max-sm:py-3 sm:gap-3 md:mx-auto md:mt-12 md:max-w-[280px] lg:mt-[72px] lg:max-w-[327px]"
          >
            <p className="dashboard-title text-lg font-semibold md:text-base lg:text-lg">
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
