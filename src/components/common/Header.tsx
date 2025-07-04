"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector";
import HeaderLiItems from "./HeaderLiItems";
import { HamburgerIcon, LogoIcon } from "./Icons";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";

interface HeaderProps {
  header?: any;
  variant?: "light" | "dark";
}

const headerVariantClasses = {
  light: {
    background: "bg-kuroiBlack",
  },
  dark: { background: "bg-none" },
};

const Header: React.FC<HeaderProps> = ({ header }) => {
  const [isshow, setIsShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const resolvedVariant: "light" | "dark" =
    pathname.includes("resource") ||
    pathname.includes("calculators") ||
    pathname.includes("free-estimate-maker")
      ? "light"
      : "dark";

  const styles = headerVariantClasses[resolvedVariant];

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

    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className="fixed top-4 z-[99] w-full rounded px-2">
      <div
        className={`flex h-fit min-h-9 w-full items-center rounded transition-all duration-300 lg:py-3 ${
          scrolled ? "bg-kuroiBlack shadow-c2" : styles.background
        }`}
      >
        <div className="main-container flex items-center justify-between py-1.5 lg:gap-3 xl:gap-[54px]">
          <Link
            className="w-full max-w-[100px] min-w-24 lg:max-w-[137px]"
            href={"/"}
          >
            <LogoIcon />
          </Link>
          <div className="hidden grow lg:flex">
            <HeaderLiItems headerList={header?.headerMain} />
          </div>
          <div className="3xl:gap-3 flex w-fit items-center gap-4">
            <div className="flex items-center gap-1 xl:gap-3">
              <LanguageSelector />
              <Link
                className="font-inter text-doctor2 hover:text-romanRed text-xs leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap duration-300 xl:text-sm"
                href={"tel:(855) 392-8803"}
              >
                {header?.contact}
              </Link>
            </div>
            <button className="font-myriad hover:text-romanRed hidden cursor-pointer px-2 py-[6px] text-xs leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap text-white duration-300 lg:flex xl:text-sm">
              {header?.loginText}
            </button>
            <button className="font-myriad bg-romanRed hidden cursor-pointer rounded px-3 py-[6px] text-sm leading-[142.857%] font-semibold tracking-[0.1px] whitespace-nowrap text-white duration-300 hover:scale-95 lg:flex">
              {header?.btnTxt?.btnTxt}
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
