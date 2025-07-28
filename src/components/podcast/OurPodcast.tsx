import Copy from "../common/Copy";
import { YoutubeIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import OurPodcastCard from "./OurPodcastCard";
import RecentEpisodesCards from "./RecentEpisodesCards";

const OurPodcast = () => {
  const cardItems = [
    {
      id: 1,
      cardImgUrl: "/images/png/card-logo.png",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
      listed: "Live Now Listen On >",
    },
    {
      id: 2,
      cardImgUrl: "/images/png/card-logo.png",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
      calander: "Add to Calendar",
    },
    {
      id: 2,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      subHeading:
        "Join us as we dive into the latest advancements in AI and what they mean for our future.",
      icon: [<YoutubeIcon />],
    },
  ];
  const cardItemsRecents = [
    {
      id: 1,
      cardImgUrl: "/images/png/card-logo.png",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      calander: "Add to Calendar",
    },
    {
      id: 2,
      cardImgUrl: "/images/png/card-logo.png",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      calander: "Add to Calendar",
    },
    {
      id: 3,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      calander: "Add to Calendar",
    },
    {
      id: 4,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      calander: "Add to Calendar",
    },
    {
      id: 5,
      cardImgUrl: "/images/webp/owner-prospective.webp",
      update: "Latest Episode",
      heading: "Exploring the Future of AI",
      calander: "Add to Calendar",
    },
  ];
  return (
    <section className="w-full px-2">
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
          Our Podcasts
        </h2>
      </Copy>
      <SliderLayout
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
          <RecentEpisodesCards key={index} Item={item} />
        ))}
      </SliderLayout>
    </section>
  );
};

export default OurPodcast;
