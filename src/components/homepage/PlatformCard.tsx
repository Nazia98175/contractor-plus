import React from "react";
import { StartIcon } from "../common/Icons";
import Image from "next/image";
import CardReveal from "../common/CardReveal";

interface Platform {
  logo: string;
  name: string;
  rating: number;
  url?: string;
}

interface PlatformCardProps {
  platform: Platform;
  className?: string;
  apiData?: boolean; // Optional prop to handle API data
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  platform,
  className = "h-full max-h-[38px]",
  apiData = false, // Default to false if not provided
}) => {
  return (
    <div className="plateform-cards relative z-20 flex flex-col items-center justify-between gap-2.5 sm:w-fit lg:w-[47%]">
      <CardReveal distance={50} delay={0.2}>
        <Image
          width={155}
          height={94}
          sizes="(max-width: 768px) 155px, (min-width: 769px) 155px"
          src={(platform.url as string) || platform.logo}
          alt={`${platform.name} rating`}
          className={`${className} max-w-[140px] object-contain sm:max-w-[155px]`}
        />
      </CardReveal>
      {!apiData && (
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="max-w-[22px] min-w-4 sm:min-w-[22px]">
              <StartIcon key={i} filled={i < platform.rating} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlatformCard;
