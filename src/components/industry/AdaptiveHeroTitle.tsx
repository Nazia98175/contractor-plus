"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

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
  splitAtPeriod?: boolean;
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
  splitAtPeriod = false,
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const splitTextRef = useRef<SplitText | null>(null);

  const [processedTitle, setProcessedTitle] = useState(title);
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [finalFontSize, setFinalFontSize] = useState(maxFontSize);

  // ----------------------------------
  // PERIOD SPLITTING
  // ----------------------------------
  useEffect(() => {
    if (splitAtPeriod && title.includes(".")) {
      const parts = title.split(".");
      if (parts.length >= 2) {
        const first = parts[0].trim();
        const rest = parts.slice(1).join(".").trim();
        setProcessedTitle(`${first}.\n${rest}`);
      } else {
        setProcessedTitle(title);
      }
    } else {
      setProcessedTitle(title);
    }
  }, [title, splitAtPeriod]);

  // ----------------------------------
  // MAIN FONT SIZE LOGIC
  // ----------------------------------
  const adjustFontSize = () => {
    if (!titleRef.current) return;

    let currentFontSize = maxFontSize;

    const run = () => {
      if (splitTextRef.current) splitTextRef.current.revert();

      titleRef.current!.style.fontSize = `${currentFontSize}px`;

      splitTextRef.current = new SplitText(titleRef.current!, {
        type: "lines",
        mask: "lines",
        linesClass: "line",
      });

      const lineCount = splitTextRef.current.lines.length;

      if (lineCount > maxLines && currentFontSize > minFontSize) {
        currentFontSize -= fontSizeStep;
        requestAnimationFrame(run);
      } else {
        setFinalFontSize(currentFontSize);
        setIsAdjusted(true);

        // FEEL FREE TO KEEP YOUR EXISTING ANIMATIONS
        if (textAnimation) {
          gsap.to(textAnimation, { opacity: 1, duration: 1 });
        }

        gsap.to("#home-page-header-view-port-screen", {
          opacity: 1,
          duration: 1,
        });

        gsap.to("#home-page-footer-view-port-screen", {
          opacity: 1,
          duration: 1,
        });

        if (animateOnComplete) animateLines();
      }
    };

    requestAnimationFrame(run);
  };

  // ----------------------------------
  // LINE ANIMATION
  // ----------------------------------
  const animateLines = () => {
    if (!splitTextRef.current) return;

    gsap.set(splitTextRef.current.lines, {
      y: "100%",
      opacity: 0,
    });

    gsap.to(splitTextRef.current.lines, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      delay: animationDelay,
    });
  };

  // ----------------------------------
  // INIT ON LOAD
  // ----------------------------------
  useEffect(() => {
    setIsAdjusted(false);
    setFinalFontSize(maxFontSize);

    const t = setTimeout(() => adjustFontSize(), 80);

    return () => {
      clearTimeout(t);
      if (splitTextRef.current) splitTextRef.current.revert();
    };
  }, [processedTitle, maxFontSize, minFontSize, maxLines]);

  // ----------------------------------
  // ⭐ NEW: REFRESH ON RESIZE
  // ----------------------------------
  useEffect(() => {
    let resizeTimer: any;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        setIsAdjusted(false); // fade out
        if (splitTextRef.current) splitTextRef.current.revert();

        adjustFontSize(); // run again
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ----------------------------------
  // RENDER
  // ----------------------------------
  const renderTitle = () => {
    if (splitAtPeriod && processedTitle.includes("\n")) {
      return processedTitle.split("\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < processedTitle.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return processedTitle;
  };

  return (
    <h1
      ref={titleRef}
      className={`${className} ${
        !isAdjusted ? "opacity-0" : "opacity-100"
      } transition-opacity duration-300`}
      style={{
        fontSize: `${maxFontSize}px`,
        whiteSpace: splitAtPeriod ? "pre-line" : "normal",
      }}
    >
      {renderTitle()}
    </h1>
  );
};

export default AdaptiveHeroTitle;
