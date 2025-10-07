"use client";
import React, { useEffect, useState } from "react";
import {
  AdditionalRevenueIcon,
  AnnualTimeIcon,
  ImpactIcon,
  ImprovementIcon,
} from "../common/Icons";

interface ImpactResultsProps {
  timeSaved: number;
  additionalRevenue: number;
  improvedConversionRate: number;
  show: boolean;
}

const VersionOneResult: React.FC<ImpactResultsProps> = ({
  timeSaved,
  additionalRevenue,
  improvedConversionRate,
  show,
}) => {
  // Calculate estimated minutes per day usage based on time saved
  // Assuming 260 working days per year (52 weeks × 5 days)
  const dailyTimeSaved = timeSaved / 260; // hours per day

  // Convert to minutes per day (hourly rate × 60)
  // Assuming 25% of saved time would be replaced by BigChief usage
  const dailyMinutesUsage = dailyTimeSaved * 60 * 0.25;

  // Calculate monthly minutes (assuming 22 business days per month)
  const estimatedMonthlyUsage = Math.ceil(dailyMinutesUsage * 22);

  // Calculate credit costs
  const creditRate = 0.29; // $ per minute
  const monthlyIncludedCredits = 50; // 50 included credits per month
  const monthlyIncludedCost = monthlyIncludedCredits * creditRate;
  const monthlyCreditCost = estimatedMonthlyUsage * creditRate;
  const annualCreditCost = (monthlyCreditCost - monthlyIncludedCost) * 12;

  // Calculate ROI
  const annualROI = (additionalRevenue / annualCreditCost - 1) * 100;
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
          <div className="bg-doctor flex w-full cursor-pointer flex-col items-center justify-start gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm">
            <span className="bg-opacity-20 mx-auto flex h-10 w-10 flex-col items-center justify-center rounded-full bg-black text-white">
              <AnnualTimeIcon />
            </span>
            <p className="text-wallStreet py-2 uppercase"> Annual Time Saved</p>
            <p className="min-w-[150px] text-2xl font-bold text-black">
              {timeSaved.toFixed(0)}
            </p>
            <p className="text-black">hours/year</p>
          </div>
          <div className="bg-doctor flex w-full cursor-pointer flex-col items-center justify-start gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm">
            <span className="bg-opacity-20 mx-auto flex h-10 w-10 flex-col items-center justify-center rounded-full bg-black text-white">
              <AdditionalRevenueIcon />
            </span>
            <p className="text-wallStreet py-2 uppercase">
              {" "}
              Additional Revenue
            </p>
            <p className="min-w-[150px] text-2xl font-bold text-black">
              ${additionalRevenue.toLocaleString()}
            </p>
            <p className="text-black">per year</p>
          </div>
          <div className="bg-doctor flex w-full cursor-pointer flex-col items-center justify-start gap-2 rounded-xl p-2.5 text-center duration-300 hover:shadow-sm">
            <span className="bg-opacity-20 mx-auto flex h-10 w-10 flex-col items-center justify-center rounded-full bg-black text-white">
              <ImprovementIcon />
            </span>
            <p className="text-wallStreet py-2 uppercase">
              {" "}
              Conversion Improvement
            </p>
            <p className="min-w-[150px] text-2xl font-bold text-black">
              {improvedConversionRate.toFixed(1)}%
            </p>
            <p className="text-black">annual increase</p>
          </div>
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
                  Based on {estimatedMonthlyUsage} minutes/month usage
                </p>
                <div className="flex justify-between gap-4">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Credit Rat
                  </p>
                  <p className="font-bold">${creditRate.toFixed(2)}/minute</p>
                </div>
                <div className="flex justify-between gap-4 pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Monthly Credit Cost
                  </p>
                  <p className="font-bold">
                    ${monthlyCreditCost.toFixed(2)}/mo
                  </p>
                </div>
                <div className="flex justify-between gap-4 pt-2 pb-3">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Monthly Included Credits
                  </p>
                  <p className="text-sweetGarden font-bold">
                    -${monthlyIncludedCost.toFixed(2)}/mo
                  </p>
                </div>
                <div className="border-opacity-20 border-superSilver flex justify-between gap-4 border-t pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Credit Cost
                  </p>
                  <p className="text-sweetGarden font-bold">
                    ${annualCreditCost.toFixed(2)}
                  </p>
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
                  {annualROI.toFixed(0)}x
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#5ed5a8"
                        d="M11 20V7.75L5.75 13L5 12.34l6.5-6.5l6.5 6.5l-.75.66L12 7.75V20z"
                      />
                    </svg>
                  </span>
                  <span className="text-sweetGarden"></span>
                </p>
                <div className="flex justify-between gap-4">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Revenue Gain
                  </p>
                  <p className="font-bold text-black opacity-90">
                    ${additionalRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between gap-4 pt-2 pb-3">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Annual Credit Cost
                  </p>
                  <p className="font-bold text-black opacity-90">
                    ${annualCreditCost.toFixed(2)}
                  </p>
                </div>

                <div className="border-opacity-20 border-superSilver flex justify-between gap-4 border-t pt-2">
                  <p className="text-sm font-normal text-black opacity-90 sm:text-base">
                    Net Annual Benefit
                  </p>
                  <p className="text-green text-sweetGarden font-bold">
                    ${(additionalRevenue - annualCreditCost).toLocaleString()}
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
