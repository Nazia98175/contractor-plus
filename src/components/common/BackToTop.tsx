"use client";
import { useEffect, useState } from "react";
import { UpArrowIcon } from "./Icons";
const BackToTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollValue > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  }, [scrollValue]);

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTopHandler}
      className={`fixed bottom-[2%] right-[2%] z-[20000] flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center overflow-hidden rounded-full shadow-2xl bg-romanRed transition-all duration-500 cursor-pointer scroll-to-top-btn  ${
        showScrollTop ? "scale-100" : "scale-0"
      }`}
    >
      <UpArrowIcon />
    </button>
  );
};

export default BackToTop;
