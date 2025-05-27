import React from "react";
import { FooterLogoIcon } from "./Icons";

const MainLoader = () => {
  return (
    <div className="bg-kuroiBlack fixed inset-0 z-[999] flex items-center justify-center">
      <div className="bubbling-animation mx-auto flex max-w-[414px] flex-col items-center justify-center pb-6 text-center">
        <FooterLogoIcon />
      </div>
    </div>
  );
};

export default MainLoader;
