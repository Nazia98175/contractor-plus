"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SearchIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BlogHero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="relative z-10 pt-52 pr-3 text-center text-4xl font-extrabold sm:pr-6 sm:text-5xl lg:pr-10 lg:text-6xl xl:text-[72px]">
        <h1 className="gradient-text-shadow absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[46px]">
          Contractor+ HQ
        </h1>
        <h1 className="gradient-text-shadow relative z-10">Contractor+ HQ</h1>
      </div>
      <div className="relative z-30 mx-auto mt-16 flex w-full max-w-[788px] items-center justify-center rounded-lg bg-[rgba(12,13,17,0.42)] p-2.5 backdrop-blur-[42px]">
        <select name="" id=""></select>
        <div className="border-secondary flex h-10 w-full items-center rounded-md border pl-3.5">
          <SearchIcon color="white" />
          <input
            type="text"
            autoFocus
            placeholder="Most popular articles"
            className="w-full px-3 text-white placeholder:text-white focus:outline-none"
          />
        </div>
      </div>

      {/* IMAGE ON TOP (foreground parallax) */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/svg/parallax.svg")' }}
      />
    </div>
  );
};

export default BlogHero;
