"use client";
import React, { useEffect, useState } from "react";
import {
  AdditionalRevenueIcon,
  AnnualTimeIcon,
  ImpactIcon,
  ImprovementIcon,
} from "../common/Icons";

// Helper type for data items
type DataItem = {
  icon: React.ReactElement;
  title: string;
  value: number | string;
  duration: string;
  format: (val: number) => string | number;
};

// Animate function
const animateValue = (
  start: number,
  end: number,
  duration: number,
  formatFn: (val: number) => string | number,
  callback: (val: string | number) => void,
) => {
  const range = end - start;
  let current = start;
  const increment = range / (duration / 16.67); // assuming ~60fps

  const step = () => {
    current += increment;
    if (
      (increment > 0 && current >= end) ||
      (increment < 0 && current <= end)
    ) {
      callback(formatFn(end));
    } else {
      callback(formatFn(Math.round(current)));
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const VersionOneResult: React.FC = () => {
  const data: DataItem[] = [
    {
      icon: <AnnualTimeIcon />,
      title: "Annual Time Saved",
      value: 817,
      duration: "hours/year",
      format: (val) => Math.round(val),
    },
    {
      icon: <AdditionalRevenueIcon />,
      title: "Additional Revenue",
      value: "$1,055,000",
      duration: "per year",
      format: (val) => `$${Number(val).toLocaleString()}`,
    },
    {
      icon: <ImprovementIcon />,
      title: "Conversion Improvement",
      value: "5.0%",
      duration: "annual increase",
      format: (val) => `${Math.round(val)}%`,
    },
  ];

  const [animatedValues, setAnimatedValues] = useState<(string | number)[]>(
    data.map(() => "0"),
  );

  useEffect(() => {
    data.forEach((item, index) => {
      const rawValue =
        typeof item.value === "string"
          ? parseFloat(item.value.replace(/[$,%]/g, "").replace(/,/g, ""))
          : item.value;

      let startValue = rawValue - 100;
      if (startValue < 0) startValue = 0;

      animateValue(startValue, rawValue, 3000, item.format, (val) => {
        setAnimatedValues((prev) => {
          const updated = [...prev];
          updated[index] = val;
          return updated;
        });
      });
    });
  }, []);
  return (
    <>
      <div className="implimenting_parent border-superSilver mx-auto mt-10 max-w-[1120px] rounded-lg border bg-white px-2 pt-3 pb-5 shadow-lg">
        <p className="bg-romanRed mx-auto mt-3 flex max-w-[220px] items-center justify-center gap-1 rounded-md px-3 py-1 text-center text-sm font-semibold text-white">
          <ImpactIcon />
          Your Impact Analysis
        </p>
        <h4 className="font-fold mt-2 mb-4 py-5 text-center text-2xl sm:text-3xl">
          Your Potential Impact with BigChief
        </h4>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data.map((obj, i) => (
            <div
              key={i}
              className="bg-doctor flex w-full cursor-pointer flex-col items-center justify-start gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm"
            >
              <span className="bg-opacity-20 mx-auto flex h-10 w-10 flex-col items-center justify-center rounded-full bg-black text-white">
                {obj.icon}
              </span>
              <p className="text-wallStreet py-2 uppercase">{obj.title}</p>
              <p className="min-w-[150px] text-2xl font-bold text-black">
                {animatedValues[i]}
              </p>
              <p className="text-black">{obj.duration}</p>
            </div>
          ))}
        </div>
        <div className="border-superSilver mt-5 w-full overflow-hidden rounded-lg border">
          <h4 className="font-fold bg-opacity-10 border-superSilver border border-b py-3 text-center text-[22px]">
            Cost & Return Analysis
          </h4>
          <div className="p-3 sm:p-5">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="border-opacity-20 bg-doctor border-superSilver w-full rounded-md border p-4 shadow-sm">
                <div className="flex w-full items-center gap-3">
                  <p className="bg-opacity-40 bg-romanRed rounded-full px-2 text-white">
                    Estimated
                  </p>
                  <p>Usage & Credits</p>
                </div>
                <p className="py-3 text-base leading-[110%] text-black">
                  Based on 1037 minutes/month usage
                </p>
                <div className="flex justify-between gap-4">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Revenue Gain
                  </p>
                  <p className="font-bold">$1,055,000</p>
                </div>
                <div className="flex justify-between gap-4 pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Credit Cost
                  </p>
                  <p className="font-bold">$3434.76</p>
                </div>
                <div className="flex justify-between gap-4 pt-2 pb-3">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Net Annual Benefit
                  </p>
                  <p className="text-sweetGarden font-bold">$1,051,565.24</p>
                </div>
                <div className="border-opacity-20 border-superSilver flex justify-between gap-4 border-t pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Credit Cost
                  </p>
                  <p className="text-sweetGarden font-bold">$3434.76</p>
                </div>
              </div>
              <div className="border-opacity-20 bg-doctor border-superSilver w-full rounded-md border p-4 shadow-sm">
                <div className="flex w-full items-center gap-3">
                  <p className="bg-opacity-60 bg-sweetGarden rounded-full px-2 text-white">
                    ROI
                  </p>
                  <p className="text-base text-black opacity-90">
                    Return on Investment
                  </p>
                </div>
                <p className="flex items-center gap-1 py-5 text-3xl font-bold text-black opacity-90">
                  30615x <span className="text-sweetGarden"></span>
                </p>
                <div className="flex justify-between gap-4">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Credit Rate
                  </p>
                  <p className="font-bold text-black opacity-90">
                    $0.29/minute
                  </p>
                </div>
                <div className="flex justify-between gap-4 pt-2 pb-3">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Monthly Credit Cost
                  </p>
                  <p className="font-bold text-black opacity-90">$300.73/mo</p>
                </div>

                <div className="border-opacity-20 border-superSilver flex justify-between gap-4 border-t pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Credit Cost
                  </p>
                  <p className="text-green text-sweetGarden font-bold">
                    $3434.76
                  </p>
                </div>
              </div>
            </div>
            <div className="border-opacity-20 bg-doctor border-superSilve mt-5 w-full rounded-md p-4 text-black shadow-sm">
              <span className="font-bold">Credit Details:</span> BigChief uses a
              credit-based system. Credits can be purchased starting at $0.29
              per minute, with volume discounts available. Credits are also
              included with Contractor+ PRO and PRO TEAM subscriptions.
            </div>
          </div>
        </div>
        <div className="Implementing bg-red-linear mt-3 rounded-lg px-2 py-3 text-center text-gray-200">
          Implementing BigChief AI can transform your business operations,
          saving you valuable time while significantly increasing your bottom
          line.
        </div>
        <p className="text-gray mt-5 text-center text-sm leading-[120%] font-normal">
          Conversion improvement is a hypothetical estimate. Actual results may
          vary and cannot be guaranteed. All calculations are projections based
          on provided inputs.
        </p>
      </div>
    </>
  );
};

export default VersionOneResult;
