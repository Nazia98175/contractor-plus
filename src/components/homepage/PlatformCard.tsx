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
    <div className="flex flex-col-reverse justify-between w-fit gap-3.5 sm:flex-col items-center relative z-20">
      <img
        src={platform.logo}
        alt={`${platform.name} rating`}
        className="h-8 md:h-10 object-contain max-w-[155px]"
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
