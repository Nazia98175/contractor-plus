"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const TimeAnimation = () => {
  const hour = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minutes = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];

  return (
    <div className="timing-text-heading text-phantom relative flex h-[50px] flex-col items-center text-center text-[28px] font-semibold -tracking-[0.84px] sm:text-3xl md:text-[42px]">
      {/* MIDDLE TIME */}
      <div
        id="middle-time-wrapper"
        className="flex h-[50px] items-center overflow-hidden"
      >
        <div className="h-[50px]">
          <div
            style={{ willChange: "transform" }}
            className="middle-hour-time flex translate-y-[-300px] flex-col items-center"
          >
            {hour.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {hour.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {hour.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center">
          :
        </div>
        <div className="h-[50px]">
          <div className="middle-minute-time flex translate-y-[-3000px] flex-col">
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
            {minutes.map((obj, index) => (
              <div
                key={index}
                className="flex h-[50px] max-h-[50px] min-h-[50px] items-center justify-center"
              >
                {obj}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAnimation;
