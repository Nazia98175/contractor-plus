import Image from "next/image";
import React from "react";
import { HotspotIcon } from "../common/Icons";

interface OurPodcastCardProps {
  Item: {
    cardImgUrl: string;
    update: string;
    heading: string;
    subHeading: string;
    icon: React.ReactNode[];
    listed?: string;
    calander?: string;
  };
}

const OurPodcastCard: React.FC<OurPodcastCardProps> = ({ Item }) => {
  return (
    <article className="bg-lightBlack w-fit p-5">
      <div className="relative flex h-full max-h-[260px] items-center justify-center">
        <Image
          className="absolute z-10 w-full object-cover blur-sm"
          src={Item.cardImgUrl}
          alt={Item.heading}
          fill
        />
        <Image
          className="relative z-20 w-full max-w-[240px] object-cover"
          src={Item.cardImgUrl}
          alt={Item.heading}
          width={240}
          height={240}
        />
      </div>
      <div className="">
        <div className="flex items-center justify-between gap-2">
          <p className="text-secondary text-sm font-semibold">{Item.update}</p>
          {Item.icon.map((Icon, index) => (
            <span key={index}>{Icon}</span>
          ))}
        </div>
        <b className="my-[6px] text-[28px] tracking-[-0.56px] text-white">
          {Item.heading}
        </b>
        <h5 className="text-secondary block text-sm leading-[160%] font-medium">
          {Item.subHeading}
        </h5>
        {Item.listed && (
          <button className="text-redPigment mt-4 flex items-center gap-2.5 rounded bg-white px-3 py-1.5 text-xs leading-[160%] font-semibold">
            <HotspotIcon /> {Item.listed}
          </button>
        )}
        {Item.calander && (
          <button className="border-wallStreet text-decemberSky mt-4 rounded border px-3 py-1.5 text-xs leading-[160%]">
            {Item.calander}
          </button>
        )}
      </div>
    </article>
  );
};

export default OurPodcastCard;
