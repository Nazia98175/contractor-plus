import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import {
  CustomSliderIcon,
  HotSpotIcon2,
  SpotyfiIcon,
  YoutubeIcon,
} from "../common/Icons";
import OurPodcastCard from "./OurPodcastCard";
import RecentEpisodesCards from "./RecentEpisodesCards";

const OurPodcast = () => {
  const cardItems = [
    {
      id: 1,
      cardImgUrl: "/images/png/card-logo.png",
      update: "Monthly Updates",
      heading: "Contractor+ Podcast",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
      listed: "Live Now Listen On >",
    },
    {
      id: 2,
      cardImgUrl: "/images/webp/groth-mind-set-log.webp",
      update: "Every Monday .  1 PM EST",
      heading: "Growth Mindset Monday",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
      calander: "Add to Calendar",
    },
    {
      id: 3,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "Weekly",
      heading: "The Owner’s Perspective",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
    },
    {
      id: 4,
      cardImgUrl: "/images/webp/hard-chat-logo.webp",
      update: "Monthly",
      heading: "Hard Hat Chat",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<HotSpotIcon2 />, <SpotyfiIcon />],
    },
  ];
  const cardItemsRecents = [
    {
      id: 1,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "27th June 2025 . 12:24 PM",
      heading: "The Owner’s Prespective",
      calander: "Add to Calendar",
    },
    {
      id: 2,
      cardImgUrl: "/images/webp/hard-chat-logo.webp",
      update: "27th June 2025 . 12:24 PM",
      heading: "Hard Hat Chat",
      calander: "Add to Calendar",
    },
    {
      id: 3,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "27th June 2025 . 12:24 PM",
      heading: "The Owner’s Prespective",
      calander: "Add to Calendar",
    },
    {
      id: 4,
      cardImgUrl: "/images/webp/hard-chat-logo.webp",
      update: "27th June 2025 . 12:24 PM",
      heading: "Hard Hat Chat",
      calander: "Add to Calendar",
    },
    {
      id: 5,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "27th June 2025 . 12:24 PM",
      heading: "The Owner’s Prespective",
      calander: "Add to Calendar",
    },
  ];
  return (
    <section className="custom-pagination-2 w-full px-2">
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mb-16">
          Our Podcasts
        </h2>
      </Copy>
      <div className="mx-auto grid w-full max-w-[1128px] grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:gap-[42px]">
        {cardItems.map((item, index) => (
          <OurPodcastCard key={index} Item={item} />
        ))}
      </div>
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text sub-heading mt-12 mb-10 text-center font-semibold md:mt-16">
          Recent Episodes
        </h2>
      </Copy>
      <Swiper
        pagination={{
          el: ".swiper-pagination-speaker-2",
          clickable: true,
          dynamicBullets: true,
        }}
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
        {cardItemsRecents.map((item, index) => (
          <SwiperSlide>
            <RecentEpisodesCards key={index} Item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mx-auto flex w-fit items-center gap-2 py-10">
        <CardReveal delay={0.1} distance={50}>
          <button className="sponsor-button-next relative flex h-6 w-6 rotate-180 items-center justify-center opacity-100 disabled:opacity-40">
            <CustomSliderIcon />
          </button>
        </CardReveal>
        <CardReveal delay={0.2} distance={50}>
          <div className="swiper-pagination-speaker-2 swiper-pagination-real-time-4 !relative left-0 flex items-center justify-center gap-1" />
        </CardReveal>
        <CardReveal delay={0.3} distance={50}>
          <button className="sponsor-button-prev relative flex h-6 w-6 items-center justify-center opacity-100 disabled:opacity-40">
            <CustomSliderIcon />
          </button>
        </CardReveal>
      </div>
    </section>
  );
};

export default OurPodcast;
