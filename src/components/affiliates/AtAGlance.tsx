import BuildRightNowCard from "@/components/developersapi/BuildRightNowCard";
import AdaptiveHeroTitle from "@/components/industry/AdaptiveHeroTitle";
interface AtAGlanceProps {
  title?: string;
  glanceCards?: {
    title: string;
    icon: any;
    desc: string;
    leftLine?: boolean;
    rightLine?: boolean;
  }[];
}

const AtAGlance = ({ title, glanceCards = [] }: AtAGlanceProps) => {
  return (
    <section className="relative z-20 mx-auto mt-14 w-full max-w-[1240px] px-2 sm:mt-20 md:mt-[100px] lg:mt-[128px]">
      <AdaptiveHeroTitle
        title={title || "At-a-glance"}
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-extrabold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6">
        {glanceCards.map((card, index) => {
          const isLast = index === glanceCards.length - 1;
          const isRowLast = (index + 1) % 3 === 0;
          return (
            <div
              key={index}
              className={`900:w-[32%] 900:border-r 900:border-[#6a6a6c] flex w-full justify-between sm:w-[48%] ${isLast || isRowLast ? "900:border-r-0" : ""}`}
            >
              <BuildRightNowCard
                title={card.title}
                icon={card.icon}
                description={card.desc}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AtAGlance;
