"use client";
import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import Copy from "../common/Copy";

const WinTeam = () => {
  const teamCards = [
    {
      id: 1,
      img: "/images/webp/win-team-1.webp",
      text: "Founders are 100% all-in. No chips off the table.",
      imgWidth: "max-w-[313px]",
    },
    {
      id: 2,
      img: "/images/webp/win-team-2.webp",
      text: "Built a category-defining product with just $700K.",
      imgWidth: "max-w-[313px]",
    },
    {
      id: 3,
      img: "/images/webp/win-team-3.webp",
      text: "Board includes operators with two $100M+ software exits.",
      imgWidth: "max-w-[313px]",
    },
    {
      id: 4,
      img: "/images/webp/win-team-6.webp",
      text: "We’re not here to coast. We’re here to eat the legacy players’ lunch.",
      imgWidth: "max-w-[313px]",
    },
    {
      id: 5,
      img: "/images/webp/win-team-5.webp",
      text: "Obsessed with the customer. Fast to ship. Brutal on churn.",
      imgWidth: "max-w-[274px]",
    },
  ];

  return (
    <div className="mx-auto max-w-[990px] px-4">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana pb-[101px] text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
          Why this team wins
        </h3>
      </Copy>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* First 3 cards */}
        {teamCards.slice(0, 3).map((card) => (
          <article key={card.id}>
            <Image
              height={300}
              width={300}
              unoptimized
              className={`mx-auto w-full ${card.imgWidth}`}
              src={card.img}
              alt="win team"
            />
            <p className="text-lightBlackGrey mx-auto pt-4 text-center text-lg font-bold lg:max-w-[268px]">
              {card.text}
            </p>
          </article>
        ))}

        {/* Last 2 cards (centered on desktop) */}
        <div className="flex flex-col justify-center gap-18 lg:col-span-3 lg:flex-row">
          {teamCards.slice(3).map((card) => (
            <article key={card.id} className="w-full lg:max-w-[368px]">
              <Image
                height={300}
                width={300}
                unoptimized
                className={`mx-auto w-full ${card.imgWidth}`}
                src={card.img}
                alt="win team"
              />
              <p
                className={`text-lightBlackGrey mx-auto pt-4 text-center text-lg font-bold ${card.imgWidth}`}
              >
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-[134px] sm:pt-[169px]">
        <Copy animateOnScroll={true}>
          <h4 className="text-decemberSky pb-4 text-center text-[22px] font-extrabold sm:text-[28px] md:text-[38px]">
            Smart money sees what’s coming
          </h4>
        </Copy>
        <Copy animateOnScroll={true}>
          <p className="text-secondary pb-8 text-center text-sm font-medium sm:text-lg md:text-xl">
            And it’s going to be big. If anything you’ve read resonates, let’s
            talk.
          </p>
        </Copy>
        <Button className="w-full max-w-[204px]">Book investor call</Button>
      </div>
    </div>
  );
};

export default WinTeam;
