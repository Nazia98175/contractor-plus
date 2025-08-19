// GooglePoster.tsx
import React from "react";
import { ClockSmallIcon, GoogleIcon, GreenArrorwIcon } from "../common/Icons";
import GooglePosterCard from "./GooglePosterCard";

interface GooglePosterProps {
  location?: {
    city?: string;
    country?: string;
  } | null;
}

const GooglePoster: React.FC<GooglePosterProps> = ({ location }) => {
  // Extract city name with fallback
  const cityName = location?.city || "Your City";
  
  return (
    <div className="rounded-xl bg-white p-2.5">
      <div className="flex items-center justify-between gap-2">
        <div className="text-bluetiful flex items-center gap-1 text-sm font-semibold tracking-[-0.26px]">
          <GoogleIcon />
          <h4>Google</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-vivaldi h-2 w-2 rounded-full"></div>
          <div className="bg-gold h-2 w-2 rounded-full"></div>
          <div className="bg-fuel h-2 w-2 rounded-full"></div>
        </div>
      </div>
      <div className="bg-mist border-bellflower mt-2.5 rounded-md border p-2.5">
        <div className="mb-2.5 flex items-center justify-between">
          <h5 className="text-revolution text-sm font-semibold tracking-[-0.26px]">
            {cityName} General Contractor
          </h5>
          <p className="text-wallStreet flex items-center gap-1 text-[10px] font-semibold tracking-[-0.2px]">
            <ClockSmallIcon />
            Last 30 Days
          </p>
        </div>
        <GooglePosterCard cityName={cityName} />
        <div className="bg-mist border-bellflower mt-2.5 flex items-center justify-between gap-1 rounded-xl border p-2.5">
          <div>
            <h6 className="text-revolution text-[9px] font-semibold">
              Monthly Searches
            </h6>
            <p className="text-revolution text-sm font-semibold tracking-[-0.26px]">
              2,450+ potential customers
            </p>
          </div>
          <GreenArrorwIcon />
        </div>
      </div>
    </div>
  );
};

export default GooglePoster;