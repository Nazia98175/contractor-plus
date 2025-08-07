"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { DividerIcon, WhiteArrowIcon } from "../common/Icons";
import Copy from "../common/Copy";
import LottieAnimation from "../common/LottieAnimation";
import drag from "../../../public/lotties/drag.json";
const PossibleWithContractor = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const contractorRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: { preventDefault: () => void }) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: { clientX: number }) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchStart = (e: { preventDefault: () => void }) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e: { touches: { clientX: number }[] }) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    const moveHandler = (e: any) => handleMouseMove(e);
    const touchMoveHandler = (e: any) => handleTouchMove(e);

    if (isDragging) {
      document.addEventListener("mousemove", moveHandler);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", touchMoveHandler);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", touchMoveHandler);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  useEffect(() => {
    if (
      !containerRef.current ||
      !beforeRef.current ||
      !contractorRef.current ||
      !afterRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const sliderX = (sliderPosition / 100) * containerRect.width;

    const beforeX =
      beforeRef.current.getBoundingClientRect().left - containerRect.left;
    const contractorX =
      contractorRef.current.getBoundingClientRect().left - containerRect.left;
    const afterX =
      afterRef.current.getBoundingClientRect().left - containerRect.left;

    const distances = [
      { label: "before", distance: Math.abs(sliderX - beforeX) },
      { label: "contractor", distance: Math.abs(sliderX - contractorX) },
      { label: "after", distance: Math.abs(sliderX - afterX) },
    ];

    const closest = distances.reduce((a, b) =>
      a.distance < b.distance ? a : b,
    );

    setActiveLabel(closest.label);
  }, [sliderPosition]);

  return (
    <div className="relative mx-auto mt-[45px] mb-[59px] w-full max-w-[1920px]">
      <Copy>
        <h2 className="gradient-custom-2 section-heading-2 relative z-30 -mb-12 px-2 text-center">
          See what’s possible with Contractor+ Local
        </h2>
      </Copy>
      <LottieAnimation
        className="mx-auto h-full w-full"
        loop={true}
        animationData={drag}
      />
      <div className="relative h-full overflow-hidden">
        <div className="pointer-events-none absolute -top-[15%] z-20 h-full max-h-[188px] w-full bg-white blur-[50px]"></div>{" "}
        <div className="pointer-events-none absolute -bottom-[15%] z-20 h-full max-h-[188px] w-full bg-white blur-[50px]"></div>
        <div className="pointer-events-none absolute -top-[20%] bottom-0 left-[-4%] z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>
        <div className="pointer-events-none absolute -top-[20%] right-[-4%] bottom-0 z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>
        <Image
          className="absolute inset-0 object-cover"
          src="/images/webp/double-map.webp"
          alt="double-map"
          unoptimized
          fill
        />
        <div className="relative flex h-full w-full items-center justify-between px-2 py-40 xl:py-[180px]">
          <div className="relative mt-4 flex h-full w-full items-center justify-between">
            <div className="mx-auto flex h-full w-full max-w-[936px] justify-between">
              {/* LEFT SIDE */}
              <div className="flex h-full w-full max-w-[464px] flex-col items-center justify-center text-lg font-semibold tracking-[-0.56px] md:text-xl lg:text-2xl lg:text-[28px]">
                <div
                  className={`xs:text-base relative ml-[16%] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customYellow text-white"
                  }`}
                >
                  6
                </div>
                <div
                  className={`xs:text-base relative mt-12 mr-[23%] mb-[70px] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customRed text-white"
                  }`}
                >
                  32
                </div>
                <div
                  className={`xs:text-base relative flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customYellow text-white"
                  }`}
                >
                  8
                </div>
                <div
                  className={`xs:text-base -mt-5 mr-auto mb-6 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customRed text-white"
                  }`}
                >
                  36
                </div>
                <div
                  className={`xs:text-base flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customRed text-white"
                  }`}
                >
                  29
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex h-full w-full max-w-[318px] -translate-y-12 flex-col items-center justify-center">
                <div
                  className={`xs:text-base -mr-[40%] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition > 50
                      ? "bg-customRed text-white"
                      : "bg-customgreen text-white"
                  }`}
                >
                  4
                </div>
                <div
                  className={`xs:text-base mt-[33px] mb-1 ml-auto flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition > 50
                      ? "bg-customYellow text-white"
                      : "bg-customgreen text-white"
                  }`}
                >
                  2
                </div>
                <div
                  className={`xs:text-base -mr-[10%] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:h-10 sm:w-10 sm:text-lg md:mr-auto md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition > 50
                      ? "bg-customYellow text-white"
                      : "bg-customgreen text-white"
                  }`}
                >
                  1
                </div>
                <div
                  className={`-semibold xs:text-base mt-[63px] mr-[20%] mb-[67px] flex h-8 w-8 items-center justify-center rounded-full text-sm tracking-[-0.56px] transition-colors sm:mr-[50%] sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition > 50
                      ? "bg-customRed text-white"
                      : "bg-customgreen text-white"
                  }`}
                >
                  3
                </div>
                <div
                  className={`xs:text-base mr-[30%] flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold tracking-[-0.56px] transition-colors sm:mr-auto sm:h-10 sm:w-10 sm:text-lg md:text-xl lg:h-12 lg:w-12 lg:text-2xl xl:text-[28px] ${
                    sliderPosition > 50
                      ? "bg-customYellow text-white"
                      : "bg-customgreen text-white"
                  }`}
                >
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={containerRef}
          className="w-full cursor-col-resize overflow-hidden rounded-lg"
          onMouseMove={handleMouseMove}
        >
          <div
            className="absolute top-0 bottom-0 z-50 w-1 cursor-col-resize"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
            }}
          >
            <DividerIcon className="w-[3px] sm:w-[5px]" />
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="absolute top-1/2 left-1/2 flex h-8 -translate-x-1/2 -translate-y-1/2 transform cursor-col-resize items-center justify-center overflow-hidden rounded-full transition-transform hover:scale-110"
            >
              <div className="bg-customRed flex h-6 w-10 items-center justify-center gap-2 rounded-[50px] sm:h-7 sm:w-[50px] lg:h-9 lg:w-[61px]">
                <WhiteArrowIcon className="h-3 w-[9px] rotate-180 sm:h-[17px]" />
                <WhiteArrowIcon className="h-3 w-[9px] sm:h-[17px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex w-full max-w-[805px] items-center justify-between">
        <div
          className={`w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl ${
            sliderPosition < 50 ? "custom-icon-color" : "text-customGrey"
          }`}
        >
          Before
        </div>

        <div
          className={`w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl ${
            sliderPosition === 50 ? "custom-icon-color" : "text-customGrey"
          }`}
        >
          HVAC Contractor
        </div>

        <div
          className={`w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl ${
            sliderPosition > 50 ? "custom-icon-color" : "text-customGrey"
          }`}
        >
          After
        </div>
      </div>
    </div>
  );
};

export default PossibleWithContractor;
