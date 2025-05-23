import React from "react";
import { FooterLogoIcon } from "./Icons";

const MainLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-kuroiBlack">
      <div className="max-w-[414px] mx-auto text-center flex flex-col justify-center items-center pb-6 bubbling-animation">
        <FooterLogoIcon />
      </div>
    </div>
  );
};

export default MainLoader;
