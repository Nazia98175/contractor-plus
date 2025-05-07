import React from "react";
import { LogoIcon } from "./Icons";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-ruinedSmores w-full">
      <div className="main-container py-5 flex  items-center ">
        <LogoIcon />
        <div className="flex gap-[22px]">
          <Link href="/" className="header-li">
            Why Contractor+?
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
