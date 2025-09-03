import React from "react";
import { GreenTickIcon } from "../common/Icons";

interface BuildRightNowCardProps {
  title: string;
  icon: React.ReactNode;
  features?: string[];
  description?: string;
}

const BuildRightNowCard: React.FC<BuildRightNowCardProps> = ({
  title,
  features,
  description,
  icon,
}) => {
  return (
    <article className="flex w-full flex-col items-center justify-between p-3 text-center lg:p-5 xl:p-10">
      <div className="mx-auto w-fit">{icon}</div>
      <div className="h-full">
        <h3 className="api-card-heading mt-4 mb-[14px] text-xl font-bold md:text-2xl lg:text-[30px]">
          {title}
        </h3>
        {/* ✅ Conditionally render features or description */}
        {features && features.length > 0 ? (
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
        ) : description ? (
          <p className="text-demo text-sm leading-relaxed font-medium lg:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
};

export default BuildRightNowCard;
