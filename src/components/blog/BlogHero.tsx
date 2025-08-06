"use client";
import { useEffect, useState } from "react";
import { contractorTypes } from "../common/Helper";
import { SearchIcon } from "../common/Icons";
import CustomSelect from "./CustomSelect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BlogHero = () => {
  const [selectedValue, setSelectedValue] = useState("contractor");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial fade-in animations
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
    // Create timeline for parallax
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top top",
        end: "bottom 30%",
        scrub: 1,
        markers: false,
      },
    });

    // Add mountains to timeline with different speeds
    tl.to("#mountain-1", { y: -90, ease: "none", scaleY: 1.2 }, 0)
      .to("#mountain-2", { y: -120, ease: "none", scaleY: 1.4 }, 0)
      .to("#mountain-3", { y: -250, ease: "none" }, 0)
      .to("#mountain-4", { y: -340, ease: "none" }, 0)
      .to("#mountain-5", { y: -150, ease: "none" }, 0);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="blog-parallax-container"
      className="relative pt-44 pb-[460px] 2xl:pt-52"
    >
      <div className="relative z-10 -mt-8 pr-3 text-center text-4xl font-extrabold sm:pr-6 sm:text-5xl lg:pr-10 lg:text-6xl xl:text-[72px]">
        <h1 className="gradient-text-shadow absolute bottom-0 left-1/2 z-0 -translate-x-1/2 blur-[26px]">
          Contractor+ HQ
        </h1>
        <h1 className="gradient-text-shadow relative z-10">Contractor+ HQ</h1>
      </div>
      <div className="font-myriad bg-rgba15 relative z-30 mx-auto mt-16 flex w-full max-w-[788px] flex-col-reverse items-center justify-center gap-2 rounded-lg p-2.5 backdrop-blur-[42px] sm:flex-row">
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
      {/* PARALLAX IMAGES CONTAINER */}
      <div className="parallax-container absolute top-0 bottom-0 left-0 h-screen w-full">
        <img
          id="mountain-1"
          src="/images/mountain/mountain-1.png"
          className="absolute bottom-0 left-0 z-[15] h-[42.5vw] w-full"
          alt=""
        />
        <img
          id="mountain-2"
          src="/images/mountain/mountain-2.png"
          className="absolute bottom-0 left-0 z-[14] h-[23vw] w-full"
          alt=""
        />
        <img
          id="mountain-3"
          src="/images/mountain/mountain-3.png"
          className="absolute bottom-0 left-0 z-[13] h-[28vw] w-full"
          alt=""
        />
        <img
          id="mountain-4"
          src="/images/mountain/mountain-4.png"
          className="absolute bottom-0 left-0 z-[12] h-[40vw] w-full"
          alt=""
        />
        <img
          id="mountain-5"
          src="/images/mountain/mountain-5.png"
          className="absolute bottom-0 left-0 z-[11] h-[28vw] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogHero;
