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
  return (
    <section className="custom-pagination-2 w-full px-2">
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mb-16">
          {data?.ourPodcastTitle ?? ""}
        </h2>
      </Copy>
      <div className="mx-auto grid w-full max-w-[1128px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:gap-[42px]">
        {transistorData && transistorData?.length > 0 ? (
          transistorData.map((item, index) => (
            <OurPodcastCard key={index} Item={item} />
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
          <button className="sponsor-button-prev relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40">
            <CustomSliderIcon />
          </button>
        </CardReveal>
        <CardReveal delay={0.2} distance={50}>
          <div className="swiper-pagination-speaker-2 swiper-pagination-real-time-4 !relative left-0 flex items-center justify-center gap-1" />
        </CardReveal>
        <CardReveal delay={0.3} distance={50}>
          <button className="sponsor-button-next relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40">
            <CustomSliderIcon />
          </button>
        </CardReveal>
      </div>
    </section>
  );
};

export default OurPodcast;
