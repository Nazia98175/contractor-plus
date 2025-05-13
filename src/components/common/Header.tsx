"use client";
import React, { useState, useEffect } from "react";
import { HamburgerIcon, LogoIcon } from "./Icons";
import HeaderLiItems from "./HeaderLiItems";
import LanguageSelector from "../LanguageSelector";
import SideBar from "./SideBar";
import Link from "next/link";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("menu");

  return (
    <header className=" fixed top-2 rounded z-[99] w-full">
      <div
        className={`w-full lg:py-3 rounded transition-all duration-300 ${
          scrolled ? "bg-black shadow-c2" : "bg-none"
        }`}
      >
        <div className="main-container py-1.5 flex items-center justify-between xl:gap-[54px] lg:gap-3">
          <Link
            className="lg:max-w-[137px] min-w-24 max-w-[100px] w-full"
            href={"/"}
          >
            <LogoIcon />
          </Link>
          <div className="lg:flex hidden grow">
            <HeaderLiItems />
          </div>
          <div className="flex items-center xl:gap-3 gap-1 w-fit">
            <div className="flex items-center xl:gap-3 gap-2">
              <LanguageSelector />
              <Link
                className="text-xs xl:text-sm font-semibold font-inter leading-[142.857%] tracking-[0.1px] text-doctor2 hover:text-romanRed duration-300 whitespace-nowrap"
                href={"tel:(855) 392-8803"}
              >
                (855) 392-8803
              </Link>
            </div>
            <button className="whitespace-nowrap font-myriad hover:text-romanRed duration-300 cursor-pointer text-xs xl:text-sm lg:flex hidden text-white font-semibold leading-[142.857%] tracking-[0.1px] px-2 py-[6px]">
              {t("login")}
            </button>
            <button className="whitespace-nowrap hover:scale-95 duration-300 font-myriad cursor-pointer text-sm lg:flex hidden text-white font-semibold leading-[142.857%] tracking-[0.1px] px-3 py-[6px] bg-romanRed rounded">
              {t("signup")}
            </button>
            <button className="lg:hidden" onClick={() => setIsShow(true)}>
              <HamburgerIcon />
            </button>
            <SideBar isshow={isshow} setIsShow={setIsShow} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
