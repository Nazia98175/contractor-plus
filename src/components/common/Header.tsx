"use client";
import React, { useState } from "react";
import { HamburgerIcon, LogoIcon } from "./Icons";
import HeaderLiItems from "./HeaderLiItems";
import LanguageSelector from "../LanguageSelector";
import SideBar from "./SideBar";
import Link from "next/link";

const Header = () => {
  const [isshow, setIsShow] = useState(false);

  return (
    <header className="bg-ruinedSmores w-full">
      <div className="main-container py-5 flex items-center justify-between xl:gap-[54px] lg:gap-3">
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
