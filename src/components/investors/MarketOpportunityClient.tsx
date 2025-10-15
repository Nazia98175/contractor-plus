"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Copy from "../common/Copy";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface marketOpportunityItems {
  title?: string;
  desc?: string;
  image?: { url: string };
  subTitle?: string;
  subDesc?: string;
}

interface MarketOpportunityProps {
  marketOpportunityData?: marketOpportunityItems[];
}

const MarketOpportunityClient: React.FC<MarketOpportunityProps> = ({
  marketOpportunityData = [],
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (card): card is HTMLDivElement => card !== null,
      );
      if (!cards.length) return;

      const cardCount = cards.length;

      cards.forEach((card, index) => {
        gsap.set(card, {
          zIndex: cardCount - index,
          opacity: index === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${(cardCount - 1) * 100}%`,
          pin: true,
          scrub: 1,
          snap: 1 / (cardCount - 1),
        },
      });

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          tl.to(card, { opacity: 0, duration: 0.5, ease: "power2.inOut" }).to(
            nextCard,
            { opacity: 1, duration: 0.5, ease: "power2.inOut" },
            "-=0.3",
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [marketOpportunityData]);

  return (
    <div ref={sectionRef} className="relative hidden lg:block">
      <div
        ref={headerRef}
        className="absolute top-0 right-0 left-0 z-40 px-4 pt-[120px] pb-[40px]"
      >
        <div className="mx-auto max-w-[1200px]">
          <Copy animateOnScroll={false}>
            <h3 className="text-mana text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
              {marketOpportunityData[0].title || "Market opportunity"}
            </h3>
          </Copy>
          <Copy animateOnScroll={false}>
            <p className="text-ironFixture pt-3 text-center text-sm font-semibold md:text-lg">
              {marketOpportunityData[0].desc ||
                "The U.S. contractor software market is MASSIVE, and underserved."}
            </p>
          </Copy>
        </div>
      </div>

      <div className="relative h-screen w-full pt-[240px]">
        {marketOpportunityData.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-center pt-[240px]"
          >
            <div
              className={`mx-auto flex w-full max-w-[1441px] items-center justify-between gap-4 px-4 sm:px-[60px] md:gap-6 lg:px-[100px] 2xl:px-[128px] ${
                index % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
            >
              {/* Main Image */}
              <div className="relative flex-shrink-0">
                <Image
                  height={299}
                  width={299}
                  priority
                  fetchPriority="high"
                  quality={50}
                  sizes="(max-width: 768px) 299px, (min-width: 769px) 299px"
                  className="market-image relative z-10 w-full max-w-[299px]"
                  src={item.image?.url || "/placeholder-image.png"}
                  alt={`market-${index}`}
                />
                <img
                  className={`market-bg-image absolute top-[-25%] z-[5] hidden w-full max-w-[330px] opacity-60 md:block ${
                    index % 2 === 0 ? "left-[-30%]" : "right-[-30%]"
                  }`}
                  src={item.image?.url || "/placeholder-image.png"}
                  alt={`market-bg-${index}`}
                />
              </div>

              {/* Content */}
              <div className="market-content relative z-20 w-full max-w-[746px]">
                <h3 className="industry-shift-text text-lg font-medium md:text-2xl lg:text-3xl">
                  {item.subTitle}
                </h3>
                <p className="text-steel pt-4 text-sm font-extralight md:text-lg lg:text-[22px]">
                  {item.subDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOpportunityClient;
