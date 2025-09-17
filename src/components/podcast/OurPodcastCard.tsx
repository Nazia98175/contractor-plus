import { PodcastDataResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPodcastCard: React.FC<{ Item: PodcastDataResponse.show }> = ({
  Item,
}) => {
  return (
    <article className="bg-lightBlack card-shine-2 p-3 md:p-5">
      <div className="relative flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
        <Image
          className="absolute z-10 max-h-[180px] w-full object-cover blur-sm md:max-h-[260px]"
          src={Item?.attributes?.image_url}
          alt={Item?.attributes?.title}
          fill
        />
        <div className="p-2.5">
          <Image
            className="relative z-20 w-full max-w-[240px] object-cover"
            src={Item?.attributes?.image_url}
            alt={Item?.attributes?.title}
            width={240}
            height={240}
          />
        </div>
      </div>
      <div>
        <div className="mt-[35px] flex items-center justify-between gap-2">
          {/* <p className="text-secondary text-sm font-semibold">{Item.update}</p> */}
          {/* <span className="flex items-center gap-3">
            {Item.icon.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </span> */}
        </div>
        <Link
          href={Item?.attributes?.feed_url ?? "/#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <b className="my-[6px] text-lg tracking-[-0.56px] text-white md:text-xl lg:text-2xl xl:text-[28px]">
            {Item?.attributes?.title ?? ""}
          </b>
        </Link>
        <h5 className="text-secondary line-clamp-2 text-xs leading-[160%] font-medium md:text-sm">
          {Item?.attributes?.description ?? ""}
        </h5>
        {/* {Item.listed && (
          <button className="text-redPigment mt-4 flex items-center gap-2.5 rounded bg-white px-3 py-1.5 text-xs leading-[160%] font-semibold duration-300 hover:scale-95">
            <HotspotIcon /> {Item.listed}
          </button>
        )}
        {Item.calander && (
          <button className="border-wallStreet text-decemberSky mt-4 rounded border px-3 py-1.5 text-xs leading-[160%] duration-300 hover:scale-95">
            {Item.calander}
          </button>
        )} */}
      </div>
    </article>
  );
};

export default OurPodcastCard;
