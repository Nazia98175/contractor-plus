import { PodcastDataResponse } from "@/types";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentEpisodesCards: React.FC<{ Item: PodcastDataResponse.show }> = ({
  Item,
}) => {
  return (
    <article className="bg-lightBlack card-shine-2 p-3 md:p-5">
      <div className="relative mb-[35px] flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
        <Image
          className="absolute z-10 max-h-[150px] w-full object-cover blur-sm md:max-h-[204px]"
          src={Item?.attributes?.image_url}
          alt={Item?.attributes?.title}
          fill
        />
        <div className="p-2.5">
          <Image
            className="relative z-20 w-full max-w-[190px] object-cover"
            src={Item?.attributes?.image_url}
            alt={Item?.attributes?.title}
            width={190}
            height={188}
          />
        </div>
      </div>
      <div>
        <p className="text-secondary text-sm font-semibold">
          {format(
            parseISO(Item?.attributes?.created_at),
            "do MMM yyyy . hh:mm a",
          )}
        </p>
        <Link
          href={Item?.attributes?.feed_url ?? "/#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <b className="mt-[6px] flex w-full text-base tracking-[-0.4px] text-white sm:text-lg md:text-lg lg:text-xl line-clamp-1">
            {Item?.attributes?.title ?? ""}
          </b>
        </Link>
        <button className="border-wallStreet text-decemberSky mt-4 rounded border px-3 py-1.5 text-xs leading-[160%] transition-all duration-200 ease-in-out hover:scale-95">
          Add to Calendar
        </button>
      </div>
    </article>
  );
};

export default RecentEpisodesCards;
