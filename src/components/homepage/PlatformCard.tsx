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
    <div className="relative z-20 flex w-fit flex-col-reverse items-center justify-between gap-3.5 sm:flex-col">
      <img
        src={platform.logo}
        alt={`${platform.name} rating`}
        className="h-8 max-w-[155px] object-contain md:h-10"
      />
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StartIcon key={i} filled={i < platform.rating} />
        ))}
      </div>
    </div>
  );
};

export default PlatformCard;
