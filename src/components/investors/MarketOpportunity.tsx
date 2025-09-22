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
    // Only run animations on desktop (lg and above)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    
    if (!isDesktop || !sectionRef.current || marketOpportunityData.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);
      if (cards.length === 0) return;

      // Calculate total scroll distance
      const cardCount = cards.length;
      const scrollDistance = (cardCount - 1) * 100; // 100vh per transition

      // Set initial states for all cards - all stacked with only first visible
      cards.forEach((card, index) => {
        if (index === 0) {
          // First card starts visible
          gsap.set(card, {
            zIndex: cardCount,
            opacity: 1,
          });
        } else {
          // Other cards start hidden
          gsap.set(card, {
            zIndex: cardCount - index,
            opacity: 0,
          });
        }
      });

      // Create main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (cardCount - 1),
            duration: { min: 0.4, max: 0.8 },
            delay: 0.1,
            ease: "power1.inOut"
          }
        }
      });

      // Create transitions between cards
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          const currentImage = card.querySelector('.market-image');
          const currentBgImage = card.querySelector('.market-bg-image');
          const currentContent = card.querySelector('.market-content');
          
          const nextImage = nextCard.querySelector('.market-image');
          const nextBgImage = nextCard.querySelector('.market-bg-image');
          const nextContent = nextCard.querySelector('.market-content');

          // Fade out current card and fade in next card
          tl.to(card, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
          })
          .to(currentContent, {
            y: -30,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          }, "<")
          .to([currentImage, currentBgImage], {
            y: -50,
            opacity: 0,
            duration: 0.4,
            ease: "power2.in"
          }, "<0.1")
          .to(nextCard, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut"
          }, "-=0.3")
          .from(nextContent, {
            y: 30,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
          }, "<")
          .from([nextImage, nextBgImage], {
            y: 50,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
          }, "<0.1");
        }
      });

      // Add subtle parallax to background images
      cards.forEach((card) => {
        const bgImage = card.querySelector('.market-bg-image');
        if (bgImage) {
          gsap.to(bgImage, {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 2,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [marketOpportunityData]);

  if (marketOpportunityData.length === 0) return null;

  // Use the first item's title and desc for the header
  const headerData = marketOpportunityData[0];

  return (
    <>
      {/* Mobile Layout - Static, no animations */}
      <div className="block lg:hidden">
        {/* Header */}
        <div className="px-4 pt-[120px] pb-[40px]">
          <div className="mx-auto max-w-[600px]">
            <Copy animateOnScroll={true}>
              <h3 className="text-mana text-center text-xl font-bold sm:text-2xl">
                {headerData.title || "Market opportunity"}
              </h3>
            </Copy>
            <Copy animateOnScroll={true}>
              <p className="text-ironFixture pt-3 text-center text-xs font-semibold sm:text-sm">
                {headerData.desc || "The U.S. contractor software market is MASSIVE, and underserved."}
              </p>
            </Copy>
          </div>
        </div>

        {/* Cards - Static vertical layout */}
        <div className="space-y-12 px-4 pb-12">
          {marketOpportunityData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 max-w-[500px] mx-auto"
            >
              {/* Image */}
              <div className="relative">
                <img
                  className="relative z-10 w-full max-w-[200px]"
                  src={item.image?.url || "/placeholder-image.png"}
                  alt={`market-${index}`}
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="industry-shift-text text-base font-medium mb-3">
                  {item.subTitle}
                </h3>
                <p className="text-steel text-xs font-light">
                  {item.subDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - With animations */}
      <div ref={sectionRef} className="relative hidden lg:block">
        {/* Fixed Header - positioned below navbar */}
        <div 
          ref={headerRef}
          className="absolute top-0 left-0 right-0 z-40 px-4 pt-[120px] pb-[40px]"
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
          {/* Cards - Adjusted padding to account for navbar + header */}
          <div className="relative h-full w-full pt-[240px]">
            {marketOpportunityData.map((item, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null): void => {
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
                  {/* Main Image with Background */}
                  <div className="relative flex-shrink-0">
                    <img
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
      </div>
    </>
  );
};

export default MarketOpportunity;