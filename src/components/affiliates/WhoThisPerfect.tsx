import BuildRightNowCard from "@/components/developersapi/BuildRightNowCard";
import AdaptiveHeroTitle from "@/components/industry/AdaptiveHeroTitle";
interface BuildCard {
  title: string;
  desc: string;
  icon: string;
}
interface WhoThisPerfectProps {
  title?: string;
  buildCards: BuildCard[];
}
const WhoThisPerfect: React.FC<WhoThisPerfectProps> = ({
  title,
  buildCards,
}) => {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1222px] px-2 sm:mt-20 md:mt-[91px]">
      <AdaptiveHeroTitle
        title={title || "Who this is perfect for"}
        className="text-mana mb-[59px] w-full text-center leading-[140%] font-semibold"
        minFontSize={16}
        maxLines={1}
        maxFontSize={42}
        textAnimation="home-page-view-port-screen-fetures"
      />
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 md:gap-x-4">
        {buildCards.map((card, index) => {
          const isLast = index === buildCards.length - 1;
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

export default WhoThisPerfect;
