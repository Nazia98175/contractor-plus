import {
  GradientLineIcon,
  MoneyBagIcon,
  PerfectIcon,
  RequiringIcon,
  RevanueIcon,
} from "@/components/common/Icons";
import BuildRightNowCard from "@/components/developersapi/BuildRightNowCard";
import AdaptiveHeroTitle from "@/components/industry/AdaptiveHeroTitle";

const AtAGlance = () => {
  const glanceCards = [
    {
      icon: <RevanueIcon />,
      title: "50% recurring revenue",
      description:
        "Share on the base subscription for the life of the account.",
    },
    {
      icon: <RequiringIcon />,
      title: "20% recurring",
      description: "on Contractor+ Books add-ons.",
      rightLine: true,
      leftLine: true,
    },

    {
      icon: <MoneyBagIcon />,
      title: "Monthly commissions",
      description: "paid out like clockwork.",
    },
    {
      icon: <PerfectIcon />,
      title: "Perfect for",
      description:
        "integration partners, contractor/trade associations, social media influencers / creators, and brand ambassadors.",
    },
  ];

  return (
    <section className="relative z-20 mx-auto mt-14 w-full max-w-[1222px] px-2 sm:mt-20 md:mt-[100px] lg:mt-[128px]">
      <AdaptiveHeroTitle
        title="At-a-glance"
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 md:gap-x-4">
        {glanceCards.map((card, index) => {
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

export default AtAGlance;
