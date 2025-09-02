import { ContactIcon } from "lucide-react";
import React from "react";
import { GradientLineIcon, GreenTickIcon } from "../common/Icons";

interface BuildRightNowCardProps {
  title: string;
  features: string[];
  icon: React.ReactNode;
}

const BuildRightNowCard: React.FC<BuildRightNowCardProps> = ({
  title,
  features,
  icon,
}) => {
  return (
    <article className="flex w-full flex-col items-center justify-center p-3 md:p-5 xl:p-10">
      <div className="mx-auto w-fit"> {icon}</div>
      <h3 className="api-card-heading mt-4 mb-[14px] text-center text-xl font-bold md:text-2xl lg:text-[30px]">
        {title}
      </h3>
      <div className="space-y-[14px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-demo flex items-center gap-2.5 text-sm font-semibold text-ellipsis lg:text-base"
          >
            <GreenTickIcon />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default BuildRightNowCard;
