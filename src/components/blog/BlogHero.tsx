"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CustomSelect from "./CustomSelect";
import { contractorTypes } from "../common/Helper";

gsap.registerPlugin(ScrollTrigger);

const BlogHero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState("contractor");

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
    <div className="relative h-[90vh]">
      <div className="relative z-10 pt-44 pr-3 text-center text-4xl font-extrabold sm:pr-6 sm:text-5xl lg:pr-10 lg:text-6xl xl:text-[72px]">
        <h1 className="gradient-text-shadow absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[46px]">
          Contractor+ HQ
        </h1>
        <h1 className="gradient-text-shadow relative z-10">Contractor+ HQ</h1>
      </div>
      <div className="relative z-30 mx-auto mt-16 flex w-full max-w-[788px] flex-col-reverse items-center justify-center gap-2 rounded-lg bg-[rgba(12,13,17,0.42)] p-2.5 backdrop-blur-[42px] sm:flex-row">
        <CustomSelect
          options={contractorTypes}
          value={selectedValue}
          onChange={(option) => setSelectedValue(option?.value || "")}
          className="sm:max-w-[294px]"
        />
        <div className="border-secondary flex h-10 w-full items-center rounded-lg border pl-3.5">
          <SearchIcon color="#ADB1B5" />
          <input
            type="text"
            autoFocus
            placeholder="Most popular articles"
            className="w-full px-3 text-white placeholder:text-white focus:outline-none"
          />
        </div>
      </div>

      <div
        ref={bgRef}
        className="absolute inset-0 z-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/svg/parallax.svg")' }}
      />
    </div>
  );
};

export default BlogHero;
