import Copy from "../common/Copy";
import { YoutubeIcon } from "../common/Icons";
import OurPodcastCard from "./OurPodcastCard";

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
  return (
    <section className="w-fu mx-auto max-w-[1128px] px-2">
      <Copy delay={0.1}>
        <h2 className="podcast-gradient-text mb-16 text-center text-[32px] font-semibold">
          Our Podcasts
        </h2>
      </Copy>
      <div className="grid w-full grid-cols-1 gap-6 px-2 sm:grid-cols-2 md:px-4 lg:gap-8 lg:px-8 xl:gap-[42px]">
        {cardItems.map((item, index) => (
          <OurPodcastCard key={index} Item={item} />
        ))}
      </div>
    </section>
  );
};

export default OurPodcast;
