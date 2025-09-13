import React from "react";
import Copy from "../common/Copy";
import Button from "../common/Button";
interface SmartMoneyProps {
  title: string;
  desc: string;
  btnText: string;
}
const SmartMoney: React.FC<SmartMoneyProps> = ({ title, desc, btnText }) => {
  return (
    <div className="mx-auto flex max-w-[990px] flex-col items-center justify-center px-4 pt-[134px] sm:pt-[169px]">
      <Copy animateOnScroll={true}>
        <h4 className="text-decemberSky pb-4 text-center text-[22px] font-extrabold sm:text-[28px] md:text-[38px]">
          {title || "Smart money sees what’s coming"}
        </h4>
      </Copy>
      <Copy animateOnScroll={true}>
        <p className="text-secondary pb-8 text-center text-sm font-medium sm:text-lg md:text-xl">
          {desc ||
            "And it’s going to be big. If anything you’ve read resonates, let’s talk."}
        </p>
      </Copy>
      <Button className="w-full max-w-[204px]">
        {btnText || "Book investor call"}
      </Button>
    </div>
  );
};

export default SmartMoney;
