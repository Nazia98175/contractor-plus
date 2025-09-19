import { PodcastDataResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HotspotIcon, SpotyfiIcon, YoutubeIcon } from "../common/Icons";

const OurPodcastCard: React.FC<{ Item: PodcastDataResponse.show }> = ({
  Item,
}) => {
  const iconsArray = [
    Item?.isYoutube ? (
      <Link
        key="yt"
        href={Item?.link ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon />
      </Link>
    ) : null,
    Item?.podcastLink ? (
      <Link
        key="pd"
        href={Item?.podcastLink ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <HotspotIcon />
      </Link>
    ) : null,
    Item?.spotifyLink ? (
      <Link
        key="sp"
        href={Item?.spotifyLink ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpotyfiIcon />
      </Link>
    ) : null,
  ].filter(Boolean);

  return (
    <article className="bg-lightBlack card-shine-2 p-3 md:p-5">
      {/* Thumbnail Section */}
      <div className="relative flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
        <Image
          className="absolute z-10 max-h-[180px] w-full object-cover blur-sm md:max-h-[260px]"
          src={Item?.thumbnail}
          alt={Item?.title}
          fill
        />
        <div className="p-2.5">
          <Image
            className="relative z-20 w-full max-w-[240px] object-cover"
            src={Item?.thumbnail}
            alt={Item?.title}
            width={240}
            height={240}
          />
        </div>
      </div>

      {/* Info Section */}
      <div>
        <div className="mt-[35px] flex items-center justify-between gap-2">
          <p className="text-secondary text-sm font-semibold">{Item.update}</p>
          <span className="flex items-center gap-3">
            {iconsArray.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </span>
        </div>

        {/* Title */}
        <b className="my-[6px] text-lg tracking-[-0.56px] text-white md:text-xl lg:text-2xl xl:text-[28px]">
          {Item?.title ?? ""}
        </b>

        {/* Description */}
        <div
          className="text-secondary line-clamp-2 text-xs leading-[160%] font-medium md:text-sm"
          dangerouslySetInnerHTML={{ __html: Item?.description ?? "" }}
        />

        {/* Calendar Button */}
        {Item?.calender && (
          <button className="border-wallStreet text-decemberSky mt-4 rounded border px-3 py-1.5 text-xs leading-[160%] duration-300 hover:scale-95">
            {Item?.calender}
          </button>
        )}
      </div>
    </article>
  );
};

export default OurPodcastCard;
