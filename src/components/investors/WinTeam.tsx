import React from "react";
import Image from "next/image";
import Copy from "../common/Copy";
interface TeamCard {
  id: string | number;
  image?: any;
  imgWidth?: string; // Tailwind width classes
  text: string;
}

// ✅ Props type
interface WinTeamProps {
  title?: string;
  items: TeamCard[];
}
const WinTeam: React.FC<WinTeamProps> = ({ items = [], title }) => {
  return (
    <div className="mx-auto max-w-[990px] px-4">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana pb-[73px] text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
          {title || "Why this team wins"}
        </h3>
      </Copy>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* First 3 cards */}
        {items.slice(0, 3).map((card) => (
          <article key={card.id}>
            <Image
              height={300}
              width={300}
              unoptimized
              className={`mx-auto w-full ${card.imgWidth}`}
              src={card.image.url}
              alt="win team"
            />
            <p className="text-lightBlackGrey mx-auto max-w-[268px] pt-4 text-center text-lg font-bold">
              {card.text}
            </p>
          </article>
        ))}

        {/* Last 2 cards (centered on desktop) */}
        <div className="flex flex-col justify-center gap-18 lg:col-span-3 lg:flex-row">
          {items.slice(3).map((card) => (
            <article key={card.id} className="w-full lg:max-w-[368px]">
              <Image
                height={300}
                width={300}
                unoptimized
                className={`mx-auto w-full ${card.imgWidth}`}
                src={card.image.url}
                alt="win team"
              />
              <p
                className={`text-lightBlackGrey mx-auto max-w-[300px] pt-4 text-center text-lg font-bold lg:${card.imgWidth}`}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinTeam;
