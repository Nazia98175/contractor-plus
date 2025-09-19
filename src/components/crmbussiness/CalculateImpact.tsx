"use client";
import React, { useEffect, useRef, useState } from "react";
import CalculateImpactSelect from "./CalculateImpactSelect";
import CalculateImpactRange from "./CalculateImpactRange";
import gsap from "gsap";
import {
  BigChiefEmailIcon,
  BigChiefIcon2,
  HourDotterIcon,
  RatePercentIcon,
} from "../common/Icons";
import VersionOneResult from "./VersionOneResult";

const CalculateImpact = () => {
  const [selectedValue, setSelectedValue] = useState("10 - 15");
  const [Averagejob, setAveragejob] = useState("1K - 3K");
  const [estimateTime, setestimateTime] = useState("1.0 - 1.5 hrs.");

  // ✅ Define options
  const estimateweek = [
    { label: "10 - 15", value: "10 - 15" },
    { label: "11 - 15", value: "11 - 15" },
    { label: "12 - 15", value: "12 - 15" },
    { label: "20 - 15", value: "20 - 15" },
  ];
  const averagejob = [
    { label: "1K - 3K", value: "1K - 3K" },
    { label: "1K - 4K", value: "1K - 4K" },
    { label: "2K - 3K", value: "2K - 3K" },
    { label: "4K - 3K", value: "4K - 3K" },
  ];

  const estimatetime = [
    { label: "1.0 - 1.5 hrs.", value: "1.0 - 1.5 hrs." },
    { label: "1.0 - 1.1 hrs.", value: "1.0 - 1.1 hrs." },
    { label: "1.2 - 1.5 hrs.", value: "1.2 - 1.5 hrs." },
    { label: "1.4 - 1.1 hrs.", value: "1.4 - 1.1 hrs." },
  ];
  const [calculate, setCalculate] = useState(false);
  const resultRef = useRef(null);

  useEffect(() => {
    if (calculate && resultRef.current) {
      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    }
  }, [calculate]);
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
          {/* Header with Logo */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-wallStreet text-sm font-bold sm:text-lg">
              Potential Calculator
            </h2>
            <span>
              <BigChiefIcon2 />
            </span>
          </div>

          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {/* Custom Select */}
              <div className="space-y-2">
                <label
                  className="text-wallStreet text-base"
                  htmlFor="estimates"
                >
                  Estimates per week
                </label>
                <CalculateImpactSelect
                  options={estimateweek}
                  value={selectedValue}
                  onChange={(option) =>
                    setSelectedValue(option?.value || "10 - 15")
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-wallStreet text-base"
                  htmlFor="estimates"
                >
                  Average job size ($)
                </label>
                <CalculateImpactSelect
                  options={averagejob}
                  buttonIcon={<HourDotterIcon />}
                  value={Averagejob}
                  onChange={(option) =>
                    setAveragejob(option?.value || "10 - 15")
                  }
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
              {/* Custom Select */}
              <div className="space-y-2">
                <label
                  className="text-wallStreet text-base"
                  htmlFor="estimates"
                >
                  Time per estimate (hrs)
                </label>
                <CalculateImpactSelect
                  options={estimatetime}
                  value={estimateTime}
                  onChange={(option) =>
                    setestimateTime(option?.value || "10 - 15")
                  }
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-wallStreet text-base"
                  htmlFor="estimates"
                >
                  Hourly pay for estimates ($)
                </label>
                <div className="border-wallStreet flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-3">
                  <span>
                    <HourDotterIcon />
                  </span>
                  <input
                    className="text-wallStreet placeholder:text-wallStreet h-full w-full outline-none"
                    type="text"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
            <div className="grid-col-1 grid gap-4 sm:gap-6 md:grid-cols-2">
              <CalculateImpactRange />
              <div className="space-y-2">
                <label
                  className="text-wallStreet text-base"
                  htmlFor="estimates"
                >
                  Close rate (%)
                </label>
                <div className="border-wallStreet flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-3">
                  <input
                    className="text-wallStreet placeholder:text-wallStreet h-full w-full outline-none"
                    type="text"
                    placeholder="100"
                  />
                  <span className="border-wallStreet flex h-full items-center justify-center border-l pl-2">
                    <RatePercentIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-wallStreet text-base" htmlFor="estimates">
                Your Email
              </label>
              <div className="border-wallStreet flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-3">
                <span className="flex items-center justify-center">
                  <BigChiefEmailIcon />
                </span>
                <input
                  className="text-wallStreet placeholder:text-wallStreet h-full w-full outline-none"
                  type="email"
                  placeholder="example@mail.com"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setCalculate(true)}
                className="bg-romanRed h-[32px] w-full rounded-md text-center text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:scale-95 sm:max-w-[248px]"
              >
                Calculate Impact
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Fade-in VersionOneResult */}
      {calculate && (
        <div ref={resultRef}>
          <VersionOneResult />
        </div>
      )}
    </div>
  );
};

export default CalculateImpact;
