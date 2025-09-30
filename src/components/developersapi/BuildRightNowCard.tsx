import React from "react";
import { GreenTickIcon } from "../common/Icons";
import Image from "next/image";

interface BuildRightNowCardProps {
  title: string;
  icon?: any;
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
      <Image
        className="mx-auto h-8 w-8"
        src={icon?.url}
        alt="partnership-cash-hero"
        width={600}
        height={300}
      />
      <div className="flex h-full flex-col">
        <h3 className="api-card-heading mt-4 mb-[14px] line-clamp-2 text-xl font-bold md:text-2xl lg:text-[30px]">
          {title}
        </h3>
        {features && features.length > 0 ? (
          <div className="space-y-[14px]">
            {features.map((text, index) => (
              <div
                key={index}
                className="text-demo flex items-center gap-2.5 text-start text-sm font-semibold text-ellipsis lg:text-base"
              >
                <GreenTickIcon />
                <p>{text}</p>
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
