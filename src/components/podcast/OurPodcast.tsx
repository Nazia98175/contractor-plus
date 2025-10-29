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
  const detectShow = (item: PodcastDataResponse.show) => {
    const t = (item?.title || "").toLowerCase();
    const u = (item?.update || "").toLowerCase();
    const link = (item?.link || "").toLowerCase();

    if (u.includes("mindset monday") || t.includes("mindset monday"))
      return "Mindset Monday";
    if (t.includes("hard hat chat") || link.includes("share.transistor.fm"))
      return "Hard Hat Chat";
    if (t.includes("owner’s perspective") || t.includes("owners perspective"))
      return "The Owner’s Perspective";
    if (
      t.includes("contractor+ podcast") ||
      t.includes("contractor + podcast") ||
      t.includes("contractor podcast")
    )
      return "Contractor+ Podcast";
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
  }> = [
    { show: "Contractor+ Podcast", label: "Monthly Updates" },
    { show: "Mindset Monday", label: "Every Monday · 1 PM EST" },
    { show: "The Owner’s Perspective", label: "Weekly" },
    { show: "Hard Hat Chat", label: "Monthly" },
  ];

  const displayItems = REQUIRED_ORDER.map(({ show }) =>
    newestByShow.get(show),
  ).filter(Boolean) as PodcastDataResponse.show[];

  return (
    <section className="custom-pagination-2 w-full px-2">
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mb-16">
          {data?.ourPodcastTitle ?? ""}
        </h2>
      </Copy>
      <div className="mx-auto grid w-full max-w-[1128px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:gap-[42px]">
        {displayItems.length ? (
          displayItems.map((item) => (
            <OurPodcastCard key={item.id} Item={item} />
          ))
        ) : (
          <div className="col-span-full">
            <NotFoundFallback type="podcasts" />
          </div>
        )}
      </div>
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mt-16">
          {data?.recentPodcastTitle ?? ""}
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
        {transistorData && transistorData?.length > 0 ? (
          transistorData.map((item, index) => (
            <SwiperSlide className="!h-auto">
              <RecentEpisodesCards key={index} Item={item} />
            </SwiperSlide>
          ))
        ) : (
          <NotFoundFallback type="podcasts" />
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
