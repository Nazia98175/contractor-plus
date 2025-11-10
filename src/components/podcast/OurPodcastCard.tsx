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
        aria-label="Podcast YouTube link"
        href={Item?.link ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon />
      </Link>
    ) : null,
    Item?.podcastLink ? (
      <Link
        aria-label="Podcast Link"
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
        aria-label="Podcast Spotify link"
        key="sp"
        href={Item?.spotifyLink ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpotyfiIcon />
      </Link>
    ) : null,
  ].filter(Boolean);

  const getUpdateLabel = (it: PodcastDataResponse.show): string => {
    const t = (it?.title || "").toLowerCase();
    const u = (it?.update || "").toLowerCase();
    const link = (it?.link || "").toLowerCase();

    // Check for Mindset Monday
    if (u.includes("mindset monday") || t.includes("mindset monday")) {
      return "Every Monday · 1 PM EST";
    }

    // Check for Hard Hat Chat
    if (t.includes("hard hat chat") || link.includes("hard-hat-chat")) {
      return "Monthly";
    }

    // Check for The Owner's Perspective (bi-weekly)
    if (
      t.includes("owner's perspective") ||
      t.includes("owners perspective") ||
      t.includes("the owners perspective")
    ) {
      return "Bi-Weekly";
    }

    // Check for Contractor+ Product Update
    if (
      t.includes("contractor+ product update") ||
      t.includes("contractor + product update") ||
      t.includes("contractor product update") ||
      t.includes("contractor+ podcast") ||
      t.includes("contractor + podcast") ||
      t.includes("contractor podcast")
    ) {
      return "Monthly Updates";
    }

    // Default fallback
    return "Monthly Updates";
  };

  // Get the proper show title for display
  const getShowTitle = (it: PodcastDataResponse.show): string => {
    // If it's static data, return the title directly
    if ((it as any)?.isStatic) {
      return it?.title ?? "";
    }

    const t = (it?.title || "").toLowerCase();
    const u = (it?.update || "").toLowerCase();
    const link = (it?.link || "").toLowerCase();

    if (u.includes("mindset monday") || t.includes("mindset monday")) {
      return "Mindset Monday";
    }
    if (t.includes("hard hat chat") || link.includes("hard-hat-chat")) {
      return "Hard Hat Chat";
    }
    if (
      t.includes("owner's perspective") ||
      t.includes("owners perspective") ||
      t.includes("the owners perspective")
    ) {
      return "The Owner's Perspective";
    }
    if (
      t.includes("contractor+ product update") ||
      t.includes("contractor + product update") ||
      t.includes("contractor product update") ||
      t.includes("contractor+ podcast") ||
      t.includes("contractor + podcast") ||
      t.includes("contractor podcast")
    ) {
      return "Contractor+ Product Update";
    }

    return Item?.title ?? "";
  };

  return (
    <article className="bg-lightBlack card-shine-2 p-3 md:p-5">
      {/* Thumbnail Section */}
      <div className="relative flex h-fit max-h-[180px] items-center justify-center overflow-hidden md:max-h-[260px]">
        {Item?.thumbnail ? (
          <>
            <Image
              className="absolute z-10 max-h-[180px] w-full object-cover blur-sm md:max-h-[260px]"
              src={Item.thumbnail}
              alt={getShowTitle(Item)}
              fill
              priority
              fetchPriority="high"
            />
            <div className="p-2.5">
              <Image
                className="relative z-20 w-full max-w-[240px] object-cover"
                src={Item.thumbnail}
                alt={getShowTitle(Item)}
                width={240}
                height={240}
                priority
                fetchPriority="high"
              />
            </div>
          </>
        ) : (
          // Placeholder for missing thumbnails
          <div className="flex h-[180px] w-full items-center justify-center bg-gray-800 md:h-[260px]">
            <span className="text-gray-400">Podcast Thumbnail</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div>
        <div className="mt-[35px] flex items-center justify-between gap-2">
          <p className="text-secondary text-sm font-semibold">
            {getUpdateLabel(Item)}
          </p>
          <span className="flex items-center gap-3">
            {iconsArray.map((Icon, index) => (
              <span key={index}>{Icon}</span>
            ))}
          </span>
        </div>

        {/* Title - Use the show title instead of episode title */}
        <b className="my-[6px] text-lg tracking-[-0.56px] text-white md:text-xl lg:text-2xl xl:text-[28px]">
          {getShowTitle(Item)}
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
