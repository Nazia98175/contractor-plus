import React from "react";
import { FooterLogoIcon } from "./Icons";

const MainLoader = () => {
  return (
    <div className="bg-kuroiBlack main-loader fixed inset-0 z-[999] flex h-s items-center justify-center">
      <div className="bubbling-animation mx-auto flex max-w-[160px] flex-col items-center justify-center pb-6 text-center md:max-w-[224px]">
        <FooterLogoIcon />
      </div>
    </div>
  );
};

export default MainLoader;
