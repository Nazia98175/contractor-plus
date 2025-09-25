"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import {
  AnnualTimeIcon,
  BigChiefIcon2,
  GrowGraph,
  HourDotterIcon,
} from "../common/Icons";
import VersionOneResult from "./VersionOneResult";

const CalculateImpact: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement | null>(null);

  // ✅ Scroll + animate when section is shown
  useEffect(() => {
    if (showResult && resultRef.current) {
      resultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    }
  }, [showResult]);

  const handleCalculate = () => {
    if (!showResult) {
      setShowResult(true); // first time → show + animate
    } else if (resultRef.current) {
      // already visible → scroll + animate again
      resultRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    }
  };

  return (
    <div className="bg-white px-4 pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-[690px]">
        {/* Header */}
        <div className="mb-[20px] text-center md:mb-[35px] lg:mb-[52px]">
          <h1 className="section-heading crm-gradient mb-2">
            Calculate The Impact
          </h1>
          <p className="text-wallStreet text-base font-medium">
            Big Chief AI Will Help Us Your Business Line
          </p>
        </div>

        {/* Main Form Card */}
        <div className="border-superSilver rounded-lg border bg-white p-4 sm:p-6 md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-wallStreet text-sm font-bold sm:text-lg">
              Potential Calculator
            </h2>
            <span>
              <BigChiefIcon2 />
            </span>
          </div>

          <div className="w-full">
            <p className="text-wallStreet flex items-center gap-1 pt-1 text-lg leading-[110%]">
              <GrowGraph />
              If BigChief helps you close just 2 more jobs per month...
            </p>

            {/* Inputs */}
            <div className="pt-5">
              <span className="text-wallStreet inline-block pb-2">
                What's your average job size?
              </span>
              <div className="border-wallStreet flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <span className="text-grey inline-block ps-2 text-xl sm:ps-4">
                  <HourDotterIcon />
                </span>
                <input
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  type="number"
                  placeholder="5000"
                  defaultValue={5000}
                />
              </div>
            </div>

            <div className="pt-5">
              <span className="text-wallStreet pb-2 leading-[110%]">
                How many minutes do you spend talking to leads and clients every
                month?
              </span>
              <div className="border-wallStreet flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <span className="text-wallStreet inline-block ps-2 text-xl sm:ps-4">
                  <AnnualTimeIcon />
                </span>
                <input
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  type="number"
                  placeholder="2"
                  defaultValue={2}
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center pt-5">
              <button
                onClick={handleCalculate}
                className="bg-romanRed h-[32px] w-full rounded-md text-center text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:scale-95 sm:max-w-[248px]"
              >
                Calculate Impact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Only show after first click */}
      {showResult && (
        <div ref={resultRef}>
          <VersionOneResult />
        </div>
      )}
    </div>
  );
};

export default CalculateImpact;
