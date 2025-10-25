"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the plugin
gsap.registerPlugin(SplitText);

interface AdaptiveHeroTitleProps {
  title: string;
  className?: string;
  textAnimation?: string;
  maxFontSize?: number;
  minFontSize?: number;
  fontSizeStep?: number;
  maxLines?: number;
  animateOnComplete?: boolean;
  animationDelay?: number;
  splitAtPeriod?: boolean; // New prop to enable/disable period splitting
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
  textAnimation,
  splitAtPeriod = false, // Default to false
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [finalFontSize, setFinalFontSize] = useState(maxFontSize);
  const splitTextRef = useRef<SplitText | null>(null);
  const [processedTitle, setProcessedTitle] = useState(title);

  // Process title to handle period splitting
  useEffect(() => {
    if (splitAtPeriod && title.includes('.')) {
      // Split at the first period and add line breaks
      const parts = title.split('.');
      if (parts.length >= 2) {
        // Take first part before period, and everything after period
        const firstPart = parts[0].trim();
        const secondPart = parts.slice(1).join('.').trim();
        
        // Set the processed title with line break
        setProcessedTitle(`${firstPart}.\n${secondPart}`);
      } else {
        setProcessedTitle(title);
      }
    } else {
      setProcessedTitle(title);
    }
  }, [title, splitAtPeriod]);

  const adjustFontSize = () => {
    if (!titleRef.current || !processedTitle) return;

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
        if (textAnimation) {
          gsap.to(textAnimation, {
            opacity: 1,
            duration: 1,
          });
        }

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
    if (processedTitle && titleRef.current) {
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
  }, [processedTitle, maxFontSize, minFontSize, maxLines]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  // Render with line breaks if splitAtPeriod is enabled
  const renderTitle = () => {
    if (splitAtPeriod && processedTitle.includes('\n')) {
      return processedTitle.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < processedTitle.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return processedTitle;
  };

  return (
    <>
      <h1
        ref={titleRef}
        className={`${className} ${!isAdjusted ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        style={{
          fontSize: `${maxFontSize}px`,
          whiteSpace: splitAtPeriod ? 'pre-line' : 'normal', // Preserve line breaks when split is enabled
          // lineHeight: "1.2",
        }}
      >
        {renderTitle()}
      </h1>

      {/* Debug info - remove in production */}
      {/* {process.env.NODE_ENV === "development" && isAdjusted && (
        <div className="mt-2 text-xs text-gray-500">
          Final font size: {finalFontSize}px | Split at period: {splitAtPeriod ? 'Yes' : 'No'}
        </div>
      )} */}
    </>
  );
};

export default AdaptiveHeroTitle;