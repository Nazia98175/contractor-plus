import Image from "next/image";
import React from "react";

interface TheProblemCardProps {
  icon?: any;
  text?: string;
}

const TheProblemCard: React.FC<TheProblemCardProps> = ({ text, icon }) => {
  return (
    <div className="flex w-full flex-col items-center justify-between p-3 text-center lg:p-5 xl:p-10">
      <Image src={icon?.url} alt={"text"} width={40} height={40} />
      <div className="investor-text-shadow">
        <p className="problem-text text-base leading-normal font-medium md:text-[22px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TheProblemCard;
