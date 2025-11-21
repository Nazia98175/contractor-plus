import { PodcastData, PodcastDataResponse } from "@/types";
import { FC } from "react";
import Copy from "../common/Copy";
import OurPodcastCard from "./OurPodcastCard";

const OurPodcast: FC<{
  data: PodcastData;
  transistorData: PodcastDataResponse.apiResponse | null;
}> = ({ data, transistorData }) => {
  const asTime = (s?: string) => (s ? new Date(s).getTime() : 0);

  const STATIC_PODCASTS = [
    {
      id: "contractor-plus-update",
      title: "Contractor+ Product Update",
      thumbnail: "/images/png/pd1.png",
      description:
        "Monthly updates on the latest features, improvements, and innovations to the Contractor+ platform.",
      update: "Contractor+ Product Update",
      isStatic: true,
      isYoutube: true,
      link: "https://youtube.com/@contractorplusapp",
    },
    {
      id: "mindset-monday",
      title: "Mindset Monday",
      thumbnail: "/images/png/pd2.png",
      description:
        "Join Gerritt Bake every Monday at 1 PM EST for powerful contractors' mindset tips and motivation to start your week strong.",
      update: "Mindset Monday",
      isStatic: true,
      isYoutube: true,
      link: "https://youtube.com/@contractorplusapp/live",
    },
    {
      id: "owners-perspective",
      title: "The Owner's Perspective",
      thumbnail: "/images/png/pd2.png",
      description:
        "Bi-weekly interviews with successful contractors sharing their journey, challenges, and insights from the owner's seat.",
      update: "The Owner's Perspective",
      isStatic: true,
      isYoutube: true,
      link: "https://youtube.com/@contractorplusapp",
    },
    {
      id: "hard-hat-chat",
      title: "Hard Hat Chat",
      thumbnail: "/images/png/pd4.png",
      description:
        "A monthly discussion on the realities of construction, sharing practical insights and no-BS advice for contractors.",
      update: "Hard Hat Chat",
      isStatic: true,
      podcastLink:
        "https://podcasts.apple.com/us/podcast/hard-hat-chat-no-bs-construction-discussion-with/id1793175437",
      spotifyLink: "https://open.spotify.com/show/3kEYENshpy8ufwzjDbS8SK",
    },
  ];

  const detectShow = (item: PodcastDataResponse.show) => {
    const t = (item?.title || "").toLowerCase();
    const u = (item?.update || "").toLowerCase();
    const link = (item?.link || "").toLowerCase();

    if (u.includes("mindset monday") || t.includes("mindset monday"))
      return "Mindset Monday";

    if (t.includes("hard hat chat") || link.includes("hard-hat-chat"))
      return "Hard Hat Chat";

    if (
      t.includes("owner's perspective") ||
      t.includes("owners perspective") ||
      t.includes("the owners perspective") ||
      t.includes("owner perspective") ||
      u.includes("owner's perspective") ||
      u.includes("the owner's perspective")
    )
      return "The Owner's Perspective";

    if (
      t.includes("contractor+ product update") ||
      t.includes("contractor + product update") ||
      t.includes("contractor product update") ||
      t.includes("contractor+ podcast") ||
      t.includes("contractor + podcast") ||
      t.includes("contractor podcast") ||
      u.includes("contractor+ product update") ||
      u.includes("contractor product update")
    )
      return "Contractor+ Product Update";

    return "";
  };

  const sorted = (transistorData ?? [])
    .slice()
    .sort((a, b) => asTime(b.published) - asTime(a.published));

  const newestByShow = new Map<string, PodcastDataResponse.show>();
  for (const it of sorted) {
    const key = detectShow(it);
    if (!key) continue;
    if (!newestByShow.has(key)) newestByShow.set(key, it);
  }

  const REQUIRED_ORDER: Array<{
    show: string;
    label: "Monthly Updates" | "Every Monday · 1 PM EST" | "Weekly" | "Monthly";
    fallbackIndex: number;
  }> = [
    {
      show: "Contractor+ Product Update",
      label: "Monthly Updates",
      fallbackIndex: 0,
    },
    {
      show: "Mindset Monday",
      label: "Every Monday · 1 PM EST",
      fallbackIndex: 1,
    },
    { show: "The Owner's Perspective", label: "Weekly", fallbackIndex: 2 },
    { show: "Hard Hat Chat", label: "Monthly", fallbackIndex: 3 },
  ];

  const displayItems = REQUIRED_ORDER.map(({ show, fallbackIndex }) => {
    const realData = newestByShow.get(show);
    if (realData) {
      return realData;
    }
    //@ts-ignore
    return STATIC_PODCASTS[fallbackIndex] as PodcastDataResponse.show;
  });

  return (
    <section className="w-full px-2">
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mb-16">
          {data?.ourPodcastTitle ?? "Our Podcasts"}
        </h2>
      </Copy>
      <div className="mx-auto grid w-full max-w-[1128px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:gap-[42px]">
        {displayItems.map((item, index) => (
          <OurPodcastCard key={item.id || `podcast-${index}`} Item={item} />
        ))}
      </div>
    </section>
  );
};

export default OurPodcast;