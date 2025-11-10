import { PodcastData, PodcastDataResponse } from "@/types";
import { FC } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { CustomSliderIcon } from "../common/Icons";
import NotFoundFallback from "../common/NotFoundFallback";
import OurPodcastCard from "./OurPodcastCard";
import RecentEpisodesCards from "./RecentEpisodesCards";

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
    },
    {
      id: "mindset-monday",
      title: "Mindset Monday",
      thumbnail: "/images/png/pd2.png",
      description:
        "Join Gerritt Bake every Monday at 1 PM EST for powerful contractors' mindset tips and motivation to start your week strong.",
      update: "Mindset Monday",
      isStatic: true,
    },
    {
      id: "owners-perspective",
      title: "The Owner's Perspective",
      thumbnail: "/images/png/pd2.png",
      description:
        "Bi-weekly interviews with successful contractors sharing their journey, challenges, and insights from the owner's seat.",
      update: "The Owner's Perspective",
      isStatic: true,
    },
    {
      id: "hard-hat-chat",
      title: "Hard Hat Chat",
      thumbnail: "/images/png/pd4.png",
      description:
        "A monthly discussion on the realities of construction, sharing practical insights and no-BS advice for contractors.",
      update: "Hard Hat Chat",
      isStatic: true,
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

  const recentEpisodes =
    transistorData?.filter((item) => {
      const show = detectShow(item);
      return show !== "";
    }) ?? [];

  return (
    <section className="custom-pagination-2 w-full px-2">
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
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mt-16">
          {data?.recentPodcastTitle ?? "Recent Episodes"}
        </h2>
      </Copy>
      <Swiper
        pagination={{
          el: ".swiper-pagination-speaker-2",
          clickable: true,
          dynamicBullets: true,
        }}
        speed={600}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".sponsor-button-next",
          prevEl: ".sponsor-button-prev",
        }}
        breakpoints={{
          100: { slidesPerView: 1, spaceBetween: 10 },
          450: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        loop={false}
        className="mx-auto w-full max-w-[1354px]"
      >
        {recentEpisodes.length > 0 ? (
          recentEpisodes.map((item, index) => (
            <SwiperSlide
              key={item.id || `episode-${index}`}
              className="!h-auto"
            >
              <RecentEpisodesCards Item={item} />
            </SwiperSlide>
          ))
        ) : (
          <div className="w-full">
            <NotFoundFallback type="podcasts" />
          </div>
        )}
      </Swiper>

      <div className="relative mx-auto flex w-fit items-center gap-2 py-10">
        <CardReveal delay={0.1} distance={50}>
          <button
            aria-label="Previous Slide"
            className="sponsor-button-prev relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40"
          >
            <CustomSliderIcon />
          </button>
        </CardReveal>
        <CardReveal delay={0.2} distance={50}>
          <div className="swiper-pagination-speaker-2 swiper-pagination-real-time-4 !relative left-0 flex items-center justify-center gap-1" />
        </CardReveal>
        <CardReveal delay={0.3} distance={50}>
          <button
            aria-label="Next Slide"
            className="sponsor-button-next relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40"
          >
            <CustomSliderIcon />
          </button>
        </CardReveal>
      </div>
    </section>
  );
};

export default OurPodcast;
