"use client";
import React, { useState, useEffect } from "react";
import { HamburgerIcon, LogoIcon } from "./Icons";
import HeaderLiItems from "./HeaderLiItems";
import LanguageSelector from "../LanguageSelector";
import SideBar from "./SideBar";
import Link from "next/link";

const Header = () => {
  const [isshow, setIsShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true when page is scrolled down
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check in case page is loaded scrolled
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`w-full fixed top-0 z-50 py-3 transition-all duration-300 ${
        scrolled ? "bg-ruinedSmores" : "bg-none"
      }`}
    >
      <div className="main-container py-1.5 flex items-center justify-between xl:gap-[54px] lg:gap-3">
        <Link className="max-w-[137px] w-full" href={"/"}>
          <LogoIcon />
        </Link>
        <div className="lg:flex hidden gap-[22px]">
          <HeaderLiItems />
        </div>
        <div className="flex items-center xl:gap-3 gap-2">
          <LanguageSelector />
          <button className="text-sm lg:flex hidden text-white font-semibold leading-[142.857%] tracking-[0.1px] px-2 py-[6px]">
            Login
          </button>
          <button className="text-sm lg:flex hidden text-white font-semibold leading-[142.857%] tracking-[0.1px] px-3 py-[6px] bg-romanRed rounded">
            Sign Up
          </button>
          <button className="lg:hidden" onClick={() => setIsShow(true)}>
            <HamburgerIcon />
          </button>
          <SideBar isshow={isshow} setIsShow={setIsShow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
