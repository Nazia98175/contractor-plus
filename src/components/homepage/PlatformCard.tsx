import React from "react";
import { StartIcon } from "../common/Icons";

interface Platform {
  logo: string;
  name: string;
  rating: number;
}

interface PlatformCardProps {
  platform: Platform;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform }) => {
  return (
    <div className="relative z-20 flex flex-col-reverse items-center justify-between gap-2.5 sm:w-fit sm:flex-col lg:w-[47%]">
      <img
        src={platform.logo}
        alt={`${platform.name} rating`}
        className="h-8 max-w-[140px] object-contain sm:max-w-[155px] md:h-10"
      />
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="max-w-[22px] min-w-4 sm:min-w-[22px]">
            <StartIcon key={i} filled={i < platform.rating} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default PlatformCard;
