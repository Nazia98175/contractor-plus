import React from "react";
import { LogoIcon } from "./Icons";
import Link from "next/link";
import HeaderLiItems from "./HeaderLiItems";

const Header = () => {
  return (
    <header className="bg-ruinedSmores w-full">
      <div className="main-container py-5 flex items-center gap-[54px]">
        <LogoIcon />
        <div className="flex gap-[22px]">
          <HeaderLiItems />
        </div>
      </div>
    </header>
  );
};

export default Header;
