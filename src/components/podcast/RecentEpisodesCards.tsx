import { PodcastDataResponse } from "@/types";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentEpisodesCards: React.FC<{ Item: PodcastDataResponse.show }> = ({
  Item,
}) => {
  console.log(Item?.published, "date");
  return (
    <article className="bg-lightBlack card-shine-2 flex h-full flex-col justify-between p-3 md:p-5">
      <div className="">
        <div className="relative mb-[35px] flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
          <Image
            className="absolute z-10 max-h-[150px] w-full object-cover blur-sm md:max-h-[204px]"
            src={Item?.thumbnail}
            alt={Item?.title}
            fill
          />
          <div className="p-2.5">
            <Image
              className="relative z-20 h-[188px] w-full max-w-[190px] object-cover"
              src={Item?.thumbnail}
              alt={Item?.title}
              width={190}
              height={188}
            />
          </div>
        </div>
        <div>
          <p className="text-secondary text-sm font-semibold">
            {format(new Date(Item?.published), "do MMM yyyy . hh:mm a")}
          </p>
          <Link
            href={Item?.link ?? "/#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b className="mt-[6px] line-clamp-1 flex w-full text-base tracking-[-0.4px] text-white sm:text-lg md:text-lg lg:text-xl">
              {Item?.title ?? ""}
            </b>
          </Link>
        </div>
      </div>
      <button className="border-wallStreet text-decemberSky mt-4 w-fit rounded border px-3 py-1.5 text-xs leading-[160%] transition-all duration-200 ease-in-out hover:scale-95">
        Add to Calendar
      </button>
    </article>
  );
};

export default RecentEpisodesCards;
