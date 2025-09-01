"use client";
import { useEffect, useState } from "react";
import { UpArrowIcon } from "./Icons";

const BackToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Handle scroll and update visibility directly
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this only runs on mount and unmount

  // Scroll to top function
  const scrollTopHandler = () => {
    // Force scroll to top with smooth behavior
    try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // Fallback for older browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      onClick={scrollTopHandler}
      aria-label="Scroll to top"
      className={`bg-romanRed scroll-to-top-btn fixed right-[2%] bottom-[2%] z-[99] flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 sm:h-10 sm:w-10 ${
        showScrollTop ? "scale-100" : "scale-0"
      }`}
    >
      <UpArrowIcon />
    </button>
  );
};

export default BackToTop;
