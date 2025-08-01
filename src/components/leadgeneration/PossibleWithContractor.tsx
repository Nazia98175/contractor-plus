"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

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
    <div className="relative mx-auto h-[90vh] w-full max-w-[1920px] py-20">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Before & After Comparison
      </h2>

      <div className="relative h-full overflow-hidden">
        <Image
          className="absolute inset-0 object-cover"
          src="/images/webp/double-map.webp"
          alt="double-map"
          unoptimized
          fill
        />
        <div className="relative flex h-full w-full items-center justify-between">
          <div className="relative mt-4 flex h-full w-full items-center justify-between px-4">
            <div className="mx-auto flex h-full w-full max-w-[936px] justify-between">
              {/* LEFT SIDE */}
              <div className="flex h-full w-full max-w-[464px] flex-col items-center justify-center">
                <div
                  className={`relative ml-[69px] flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition < 50
                      ? "bg-customgreen text-white"
                      : "bg-customYellow text-white"
                  }`}
                >
                  6
                </div>
                <div
                  className={`relative mt-12 mr-[107px] mb-[70px] flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition < 50
                      ? "bg-green-900 text-red-900"
                      : "bg-customRed text-white"
                  }`}
                >
                  32
                </div>
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition < 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  8
                </div>
                <div
                  className={`-mt-5 mr-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition < 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  36
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition < 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  29
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex h-full w-full max-w-[318px] flex-col items-center justify-center">
                <div
                  className={`-mr-[127px] flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition >= 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  4
                </div>
                <div
                  className={`mt-[33px] mb-1 ml-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition >= 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  2
                </div>
                <div
                  className={`mr-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition >= 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  1
                </div>
                <div
                  className={`mt-[63px] mr-[161px] mb-[67px] flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition >= 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
                  }`}
                >
                  3
                </div>
                <div
                  className={`mr-auto flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    sliderPosition >= 50
                      ? "bg-green-900 text-red-900"
                      : "bg-yellow-900 text-yellow-100"
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
            className="border-color absolute top-0 bottom-0 z-50 w-1 cursor-col-resize"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              className="absolute top-1/2 left-1/2 flex h-8 -translate-x-1/2 -translate-y-1/2 transform cursor-col-resize items-center justify-center overflow-hidden rounded-full transition-transform hover:scale-110"
            >
              <div className="bg-redPigment h-9 w-[61px] rounded-[50px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-4">
        <div
          ref={beforeRef}
          className={`w-fit px-3 py-1 text-sm font-medium transition-colors ${
            activeLabel === "before" ? "text-red-600" : "text-green-900"
          }`}
        >
          Before
        </div>

        <div
          ref={contractorRef}
          className={`w-fit px-3 py-1 text-sm font-medium transition-colors ${
            activeLabel === "contractor" ? "text-red-600" : "text-green-900"
          }`}
        >
          HVAC Contractor
        </div>

        <div
          ref={afterRef}
          className={`w-fit px-3 py-1 text-sm font-medium transition-colors ${
            activeLabel === "after" ? "text-red-600" : "text-green-900"
          }`}
        >
          After
        </div>
      </div>
    </div>
  );
};

export default PossibleWithContractor;
