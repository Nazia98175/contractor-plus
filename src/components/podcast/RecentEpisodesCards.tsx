import Image from "next/image";
import React from "react";

interface RecentEpisodesCardsProps {
  Item: {
    cardImgUrl: string;
    update: string;
    heading: string;
    calander?: string;
  };
}

const RecentEpisodesCards: React.FC<RecentEpisodesCardsProps> = ({ Item }) => {
  return (
    <article className="bg-lightBlack p-3 md:p-5">
      <div className="relative mb-[35px] flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
        <Image
          className="absolute z-10 max-h-[150px] w-full object-cover blur-sm md:max-h-[204px]"
          src={Item.cardImgUrl}
          alt={Item.heading}
          fill
        />
        <div className="p-2.5">
          <Image
            className="relative z-20 w-full max-w-[190px] object-cover"
            src={Item.cardImgUrl}
            alt={Item.heading}
            width={190}
            height={188}
          />
        </div>
      </div>
      <div>
        <p className="text-secondary text-sm font-semibold">{Item.update}</p>
        <b className="mt-[6px] flex w-full text-base tracking-[-0.4px] text-white sm:text-lg md:text-lg lg:text-xl">
          {Item.heading}
        </b>
        <button className="border-wallStreet text-decemberSky mt-4 rounded border px-3 py-1.5 text-xs leading-[160%]">
          {Item.calander}
        </button>
      </div>
    </article>
  );
};

export default RecentEpisodesCards;
