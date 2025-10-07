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
  // Hardcoded values
  const missedCalls = "5";
  const conversionRate = "15";
  const unpaidInvoices = "10";
  const technicalIssuesPerWeek = [3];

  // State for input values
  const [avgTicketValue, setAvgTicketValue] = useState("5000");
  const [hoursSpentOnCalls, setHoursSpentOnCalls] = useState("2");

  // State for results visibility
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculated results
  const [timeSaved, setTimeSaved] = useState(0);
  const [additionalRevenue, setAdditionalRevenue] = useState(0);
  const [improvedConversionRate, setImprovedConversionRate] = useState(0);

  // Handle calculation

  // Go back to input form
  const handleGoBack = () => {
    setShowResults(false);
  };

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

  const calculateImpact = () => {
    // Show calculating animation
    setIsCalculating(true);

    // Convert inputs to numbers
    const missedCallsNum = parseInt(missedCalls);
    const avgTicketValueNum = parseInt(avgTicketValue);
    const conversionRateNum = parseInt(conversionRate) / 100;
    const hoursSpentOnCallsNum = parseInt(hoursSpentOnCalls);
    const unpaidInvoicesNum = parseInt(unpaidInvoices);
    const technicalIssuesNum = technicalIssuesPerWeek[0];

    // Calculate time saved (hours per year)
    // Assume 260 working days per year (52 weeks * 5 days)
    const workingDaysPerYear = 260;

    // Time saved from missed calls (15 minutes per call, converted to hours)
    const timeFromMissedCalls = missedCallsNum * 0.25 * workingDaysPerYear;

    // Time saved from technical support (30 minutes per issue)
    const timeFromTechnicalSupport = technicalIssuesNum * 0.5 * 52; // 52 weeks per year

    // Time saved from collection calls (12 minutes per invoice, converted to hours)
    const timeFromCollectionCalls = unpaidInvoicesNum * 0.2 * 12; // 12 months per year

    // Direct time saved from reception calls (based on input hours per day)
    const timeFromReceptionCalls = hoursSpentOnCallsNum * workingDaysPerYear;

    const totalTimeSaved =
      timeFromMissedCalls +
      timeFromTechnicalSupport +
      timeFromCollectionCalls +
      timeFromReceptionCalls;

    // Calculate additional revenue
    const additionalLeadsConverted =
      missedCallsNum * workingDaysPerYear * (conversionRateNum + 0.05) * 0.8;
    const additionalCollectionRevenue =
      unpaidInvoicesNum * avgTicketValueNum * 0.3;
    const totalAdditionalRevenue =
      additionalLeadsConverted * avgTicketValueNum +
      additionalCollectionRevenue;

    // Calculate improved conversion rate (percentage points)
    const improvedRate = 5; // 5% improvement

    // Update result states
    setTimeSaved(Math.round(totalTimeSaved));
    setAdditionalRevenue(Math.round(totalAdditionalRevenue));
    setImprovedConversionRate(improvedRate);
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
    // Delay to show animation
    setTimeout(() => {
      setIsCalculating(false);
      // Show results
      setShowResults(true);
    }, 800);
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
                  value={avgTicketValue}
                  onChange={(e) => setAvgTicketValue(e.target.value)}
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
                  value={hoursSpentOnCalls}
                  onChange={(e) => setHoursSpentOnCalls(e.target.value)}
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center pt-5">
              <button
                aria-label="submit"
                onClick={calculateImpact}
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
          <VersionOneResult
            timeSaved={timeSaved}
            additionalRevenue={additionalRevenue}
            improvedConversionRate={improvedConversionRate}
            show={showResults}
          />
        </div>
      )}
    </div>
  );
};

export default CalculateImpact;
