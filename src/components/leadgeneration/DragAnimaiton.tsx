"use client";
import React, { useState, useRef, useEffect } from "react";
import Copy from "../common/Copy";
interface DragAnimation {
  title: string;
}
const DragAnimation: React.FC<DragAnimation> = ({ title }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(70);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number): void => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = (): void => {
    setIsDragging(true);
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent): void => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      const handleDocumentMouseMove = (e: MouseEvent) => handleMouseMove(e);
      const handleDocumentMouseUp = () => handleMouseUp();
      const handleDocumentTouchMove = (e: TouchEvent) => handleTouchMove(e);
      const handleDocumentTouchEnd = () => handleMouseUp();

      document.addEventListener("mousemove", handleDocumentMouseMove);
      document.addEventListener("mouseup", handleDocumentMouseUp);
      document.addEventListener("touchmove", handleDocumentTouchMove);
      document.addEventListener("touchend", handleDocumentTouchEnd);

      return () => {
        document.removeEventListener("mousemove", handleDocumentMouseMove);
        document.removeEventListener("mouseup", handleDocumentMouseUp);
        document.removeEventListener("touchmove", handleDocumentTouchMove);
        document.removeEventListener("touchend", handleDocumentTouchEnd);
      };
    }
  }, [isDragging]);

  return (
    <div className="relative mx-auto mt-[45px] mb-[59px] w-full max-w-[1920px]">
      <Copy>
        <h2 className="gradient-custom-2 section-heading-2 relative z-30 -mb-12 px-2 text-center">
          {title || "See what's possible with Contractor+ Local"}
        </h2>
      </Copy>

      <div className="relative h-full overflow-hidden">
        {/* Top & bottom fade edges */}
        <div className="pointer-events-none absolute top-0 z-20 h-full max-h-[70px] w-full bg-white blur-sm sm:-top-[17%] sm:max-h-[188px] sm:blur-[50px]"></div>
        <div className="pointer-events-none absolute bottom-4 z-20 h-full max-h-[70px] w-full bg-white blur-sm sm:-bottom-[4%] sm:max-h-[188px] sm:blur-[50px]"></div>
        <div className="pointer-events-none absolute -top-[20%] bottom-0 left-[-4%] z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>
        <div className="pointer-events-none absolute -top-[20%] right-[-4%] bottom-0 z-20 hidden h-[140%] w-full max-w-[130px] bg-white blur-[50px] lg:block xl:max-w-[188px]"></div>

        {/* Image Compare Container */}
        <div className="relative flex h-full w-full items-center justify-between sm:px-2">
          <div className="relative mt-4 flex h-full w-full items-center justify-between">
            <div className="mx-auto flex h-full w-full justify-between">
              <div
                ref={containerRef}
                className="relative w-full cursor-ew-resize overflow-hidden select-none"
              >
                {/* Before Image (Bottom Layer) */}
                <div className="relative w-full bg-white">
                  <img
                    src="/images/png/possible-top.png"
                    alt="Image two"
                    className="w-full py-[40px] sm:py-0"
                    draggable={false}
                  />
                </div>

                {/* After Image (Top Layer with Clip) */}
                <div
                  className="absolute inset-0 h-full w-full bg-white"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <img
                    src="/images/png/possible-bottom.png"
                    alt="Image one"
                    className="h-full w-full object-cover py-[40px] sm:py-0"
                    draggable={false}
                  />
                </div>

                {/* Slider Line + Handle */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white/80"
                  style={{
                    left: `${sliderPosition}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                  >
                    <img
                      className="h-full max-w-7 min-w-7 cursor-ew-resize object-contain lg:max-w-[62px] lg:min-w-[62px]"
                      src="/images/png/drag-element.png"
                      alt="Drag handle"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Centered BEFORE/AFTER Text */}
        <div className="relative z-20 mx-auto mt-2 flex w-full max-w-[805px] items-center justify-center px-2 sm:mt-6">
          <div className="gradient-custom-2 w-fit py-1 text-sm font-semibold tracking-[-0.48px] sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {sliderPosition < 50 ? "BEFORE" : "AFTER"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAnimation;
