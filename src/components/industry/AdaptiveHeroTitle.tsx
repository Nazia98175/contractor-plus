// components/common/AdaptiveHeroTitle.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the plugin
gsap.registerPlugin(SplitText);

interface AdaptiveHeroTitleProps {
  title: string;
  className?: string;
  maxFontSize?: number;
  minFontSize?: number;
  fontSizeStep?: number;
  maxLines?: number;
  animateOnComplete?: boolean;
  animationDelay?: number;
}

const AdaptiveHeroTitle: React.FC<AdaptiveHeroTitleProps> = ({
  title,
  className = "",
  maxFontSize = 48,
  minFontSize = 24,
  fontSizeStep = 2,
  maxLines = 3,
  animateOnComplete = true,
  animationDelay = 0.5,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [finalFontSize, setFinalFontSize] = useState(maxFontSize);
  const splitTextRef = useRef<SplitText | null>(null);

  const adjustFontSize = () => {
    if (!titleRef.current || !title) return;

    let currentFontSize = maxFontSize;
    let lineCount = 0;

    // Set initial font size
    titleRef.current.style.fontSize = `${currentFontSize}px`;

    const adjustLines = () => {
      // Clean up previous SplitText instance
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }

      // Create new SplitText instance
      splitTextRef.current = new SplitText(titleRef.current!, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
      });

      lineCount = splitTextRef.current.lines.length;
      console.log(lineCount);
      // If more than maxLines, reduce font size and try again
      if (lineCount > maxLines && currentFontSize > minFontSize) {
        currentFontSize -= fontSizeStep;
        titleRef.current!.style.fontSize = `${currentFontSize}px`;

        // Use requestAnimationFrame to ensure DOM update before next measurement
        requestAnimationFrame(adjustLines);
      } else {
        // Font size adjustment complete
        setFinalFontSize(currentFontSize);
        setIsAdjusted(true);
        gsap.to("#home-page-view-port-screen-fetures", {
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
        // Animate lines if enabled
        if (animateOnComplete && splitTextRef.current) {
          animateLines();
        }
      }
    };

    // Start the adjustment process
    requestAnimationFrame(adjustLines);
  };

  const animateLines = () => {
    if (!splitTextRef.current) return;

    // Set initial state for animation
    gsap.set(splitTextRef.current.lines, {
      y: "100",
      opacity: 0,
    });

    // Animate lines in
    gsap.to(splitTextRef.current.lines, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: animationDelay,
    });
  };

  useEffect(() => {
    if (title && titleRef.current) {
      // Reset state
      setIsAdjusted(false);
      setFinalFontSize(maxFontSize);

      // Start font size adjustment
      const timer = setTimeout(() => {
        adjustFontSize();
      }, 100); // Small delay to ensure DOM is ready

      return () => {
        clearTimeout(timer);
        if (splitTextRef.current) {
          splitTextRef.current.revert();
        }
      };
    }
  }, [title, maxFontSize, minFontSize, maxLines]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  return (
    <>
      <h1
        ref={titleRef}
        className={`${className} ${!isAdjusted ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        style={{
          fontSize: `${maxFontSize}px`,
          lineHeight: "1.2",
        }}
      >
        {title}
      </h1>

      {/* Debug info - remove in production */}
      {/* {process.env.NODE_ENV === "development" && isAdjusted && (
        <div className="mt-2 text-xs text-gray-500">
          Final font size: {finalFontSize}px
        </div>
      )} */}
    </>
  );
};

export default AdaptiveHeroTitle;
