"use client";
import React, { useState } from "react";
import { LogoIcon } from "./Icons";
import HeaderLiItems from "./HeaderLiItems";
import LanguageSelector from "../LanguageSelector";
import SideBar from "./SideBar";

const Header = () => {
  const [isshow, setIsShow] = useState(false);

  return (
    <header className="bg-ruinedSmores w-full">
      <div className="main-container py-5 flex items-center justify-between xl:gap-[54px] lg:gap-3">
        <LogoIcon />
        <div className="lg:flex hidden gap-[22px]">
          <HeaderLiItems />
        </div>
        <div className="flex items-center xl:gap-3 gap-2">
          <LanguageSelector />
          <button className="text-sm text-white font-semibold leading-[142.857%] tracking-[0.1px] px-2 py-[6px]">
            Login
          </button>
          <button className="text-sm text-white font-semibold leading-[142.857%] tracking-[0.1px] px-3 py-[6px] bg-romanRed rounded">
            Sign Up
          </button>
          <button className="lg:hidden" onClick={() => setIsShow(true)}>
            hamburger
          </button>
          <SideBar isshow={isshow} setIsShow={setIsShow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
