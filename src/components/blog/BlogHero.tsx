"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect, useRef, useState } from "react";
import CustomSelect from "./CustomSelect";
import { contractorTypes } from "../common/Helper";
import { SearchIcon } from "../common/Icons";

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
        <h1 className="gradient-text-shadow absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[26px]">
          Contractor+ HQ
        </h1>
        <h1 className="gradient-text-shadow relative z-10">Contractor+ HQ</h1>
      </div>
      <div className="font-myriad relative z-30 mx-auto mt-16 flex w-full max-w-[788px] flex-col-reverse items-center justify-center gap-2 rounded-lg bg-[rgba(12,13,17,0.42)] p-2.5 backdrop-blur-[42px] sm:flex-row">
        <CustomSelect
          options={contractorTypes}
          value={selectedValue}
          onChange={(option) => setSelectedValue(option?.value || "")}
          className="sm:max-w-[294px]"
        />
        <div className="flex w-full items-center gap-2.5">
          <div className="border-secondary flex h-10 w-full items-center rounded-lg border pl-3.5">
            <SearchIcon />
            <input
              type="text"
              autoFocus
              placeholder="Select Contractor + HQ"
              className="text-decemberSky placeholder:text-decemberSky w-full px-3 tracking-[0.1px] focus:outline-none"
            />
          </div>
          <button className="bg-romanRed flex h-10 w-10 max-w-10 min-w-10 items-center justify-center rounded-lg duration-300 hover:opacity-80">
            <SearchIcon color="#fff" />
          </button>
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
