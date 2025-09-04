import {
  ContractorTradeIcon,
  GradientLineIcon,
  InfluencersIcon,
  IntegrationPartnersIcon,
} from "@/components/common/Icons";
import BuildRightNowCard from "@/components/developersapi/BuildRightNowCard";
import AdaptiveHeroTitle from "@/components/industry/AdaptiveHeroTitle";

const WhoThisPerfect = () => {
  const buildCards = [
    {
      icon: <IntegrationPartnersIcon />,
      title: "Integration partners",
      description:
        "who can bundle, embed, or co-market. This is your incentive to feature Contractor+ front and center. Want to integrate?",
    },
    {
      icon: <ContractorTradeIcon />,
      title: "Contractor & trade associations",
      description:
        "serving members at scale. Give your association members a nice discount and generate some revenue.",
      rightLine: true,
      leftLine: true,
    },
    {
      icon: <InfluencersIcon />,
      title: "Influencers / ambassadors",
      description:
        "on YouTube, TikTok, Instagram, LinkedIn, podcasts, or newsletters. If you have a contractor/trade focused audience, this is perfect for you.",
    },
  ];
  return (
    <section className="mx-auto mt-14 w-full max-w-[1222px] px-2 sm:mt-20 md:mt-[91px]">
      <AdaptiveHeroTitle
        title="Who this is perfect for"
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 md:gap-x-4">
        {buildCards.map((card, index) => {
          return (
            <div
              key={index}
              className="900:w-[32%] flex w-full justify-between sm:w-[48%]"
            >
              {card?.leftLine && (
                <div className="900:block hidden">
                  <GradientLineIcon />
                </div>
              )}
              <BuildRightNowCard
                title={card.title}
                icon={card.icon}
                description={card.description}
              />
              {card?.rightLine && (
                <div className="900:block hidden">
                  <GradientLineIcon />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoThisPerfect;
