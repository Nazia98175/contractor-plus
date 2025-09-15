"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../common/Copy";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface marketOpportunityItems {
  title?: string;
  desc?: string;
  image?: any;
  subTitle?: string;
  subDesc?: string;
}

interface MarketOpportunityProps {
  marketOpportunityData?: marketOpportunityItems[];
}

const MarketOpportunity: React.FC<MarketOpportunityProps> = ({
  marketOpportunityData = [],
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || marketOpportunityData.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
      if (cards.length === 0) return;

      // Calculate total scroll distance
      const cardCount = cards.length;
      const scrollDistance = cardCount * 100; // 100vh per card

      // Set initial states for all cards
      cards.forEach((card, index) => {
        if (index === 0) {
          // First card starts visible
          gsap.set(card, {
            opacity: 1,
            y: 0,
            scale: 1,
          });
        } else {
          // Other cards start below
          gsap.set(card, {
            opacity: 0,
            y: "100%",
            scale: 0.95,
          });
        }
      });

      // Create ScrollTrigger for the pinned section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentCardIndex = Math.min(
            Math.floor(progress * cardCount),
            cardCount - 1
          );
          
          cards.forEach((card, index) => {
            const cardProgress = (progress * cardCount) - index;
            
            if (index === currentCardIndex) {
              // Current active card
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
              });
            } else if (index < currentCardIndex) {
              // Previous cards - move up and fade out
              gsap.to(card, {
                opacity: 0,
                y: "-30%",
                scale: 0.9,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
              });
            } else {
              // Next cards - stay below
              gsap.to(card, {
                opacity: 0,
                y: "100%",
                scale: 0.95,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          });

          // Update progress dots
          const dots = document.querySelectorAll('.market-dot');
          dots.forEach((dot, index) => {
            if (index === currentCardIndex) {
              gsap.to(dot, { scale: 1.5, opacity: 1, duration: 0.3 });
            } else {
              gsap.to(dot, { scale: 1, opacity: 0.3, duration: 0.3 });
            }
          });
        },
      });

      // Add parallax to background images
      cards.forEach((card) => {
        const bgImage = card.querySelector('.market-bg-image');
        if (bgImage) {
          gsap.to(bgImage, {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [marketOpportunityData]);

  if (marketOpportunityData.length === 0) return null;

  // Use the first item's title and desc for the fixed header
  const headerData = marketOpportunityData[0];

  return (
    <div ref={sectionRef} className="relative">
      {/* Fixed Header - Always visible */}
      <div 
        ref={headerRef}
        className="absolute top-0 left-0 right-0 z-40 px-4 pt-[60px] pb-[40px]"
      >
        <div className="mx-auto max-w-[1200px]">
          <Copy animateOnScroll={false}>
            <h3 className="text-mana text-center text-2xl font-bold sm:text-[28px] md:text-[38px]">
              {headerData.title || "Market opportunity"}
            </h3>
          </Copy>
          <Copy animateOnScroll={false}>
            <p className="text-ironFixture pt-3 text-center text-sm font-semibold md:text-lg">
              {headerData.desc || "The U.S. contractor software market is MASSIVE, and underserved."}
            </p>
          </Copy>
        </div>
      </div>

      {/* Cards Container */}
      <div 
        ref={cardsWrapperRef}
        className="relative h-screen w-full"
      >
        {/* Cards */}
        <div className="relative h-full w-full pt-[180px]">
          {marketOpportunityData.map((item, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null): void => {
                cardsRef.current[index] = el;
              }}
              className="absolute inset-0 flex items-center justify-center pt-[180px]"
            >
              <div
                className={`mx-auto flex w-full max-w-[1441px] items-center justify-between gap-4 px-4 sm:px-[60px] md:gap-6 lg:px-[100px] 2xl:px-[128px] ${
                  index % 2 === 0
                    ? "flex-col md:flex-row"
                    : "flex-col md:flex-row-reverse"
                }`}
              >
                {/* Main Image with Background */}
                <div className="relative flex-shrink-0">
                  <img
                    className="relative z-10 w-full max-w-[299px]"
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
                <div className="relative z-20 w-full max-w-[746px]">
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

      {/* Progress Indicator Dots */}
      <div className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 gap-2">
        {marketOpportunityData.map((_, index) => (
          <div
            key={index}
            className="market-dot h-2 w-2 rounded-full bg-white/30 transition-all duration-300"
            data-index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketOpportunity;