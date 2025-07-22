"use client";
import { useEffect, useState } from "react";
import { contractorTypes } from "../common/Helper";
import { SearchIcon } from "../common/Icons";
import CustomSelect from "./CustomSelect";
import gsap from "gsap";

const BlogHero = () => {
  const [selectedValue, setSelectedValue] = useState("contractor");
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-blog", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  return (
    <div className="relative bg-[url('/images/webp/parallax.webp')] bg-cover bg-fixed bg-center pt-44 pb-[400px] 2xl:pt-52">
      <div className="relative -z-10 -mt-8 pr-3 text-center text-4xl font-extrabold sm:pr-6 sm:text-5xl lg:pr-10 lg:text-6xl xl:text-[72px]">
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
    </div>
  );
};

export default BlogHero;
