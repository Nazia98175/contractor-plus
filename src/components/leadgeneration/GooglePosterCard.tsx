// GooglePosterCard.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SmallStarIcon } from "../common/Icons";

interface GooglePosterCardProps {
  cityName?: string;
}

const GooglePosterCard: React.FC<GooglePosterCardProps> = ({ cityName = "Your City" }) => {
  const [cardHeights, setCardHeights] = useState<{
    card1: number;
    card2: number;
    card3: number;
  }>({
    card1: 0,
    card2: 0,
    card3: 0,
  });
  const [cardRanking, setCardRanking] = useState<{
    card1: number;
    card2: number;
    card3: number;
  }>({
    card1: 1,
    card2: 2,
    card3: 3,
  });
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const duration = 1.5;
  const ease = "power4.inOut";

  useEffect(() => {
    const updateHeights = () => {
      const heights = {
        card1: card1Ref.current?.offsetHeight || 0,
        card2: card2Ref.current?.offsetHeight || 0,
        card3: card3Ref.current?.offsetHeight || 0,
      };

      setCardHeights(heights);

      // Start animation after heights are measured and 1 second delay
      if (heights.card2 > 0 && heights.card3 > 0) {
        startSwapAnimation(heights);
      }
    };

    const startSwapAnimation = (heights: typeof cardHeights) => {
      // Create GSAP timeline
      const tl = gsap.timeline({ delay: 2 });
      timelineRef.current = tl;

      // Calculate distances for swapping
      // FIRST STEP JUMP
      const card2ToCard3Distance = heights.card3 + 10; // +10 for gap between cards
      const card3ToCard2Distance = -(heights.card2 + 10); // negative to move up
      // SECOND STEP JUMP
      const card1ToCard2Distance = heights.card3 + 10;
      const card3ToCard1Distance = -heights.card1 - 10 + card3ToCard2Distance;
      tl.to(
        card2Ref.current,
        {
          y: card2ToCard3Distance,
          duration: duration,
          ease: ease,
        },
        0,
      ) // Start at time 0
        .to(
          card3Ref.current,
          {
            y: card3ToCard2Distance,
            duration: duration,
            ease: ease,
            onComplete: () => {
              setCardRanking({
                card1: 1,
                card2: 3,
                card3: 2,
              });
            },
          },
          0,
        )
        .to(
          card1Ref.current,
          {
            y: card1ToCard2Distance,
            duration: duration,
            delay: 2.5,
            ease: ease,
          },
          1.1,
        ) // Start at 1.1s (1s + 0.5s delay after step 0)
        .to(
          card3Ref.current,
          {
            y: card3ToCard1Distance,
            duration: duration,
            delay: 2.5,
            ease: ease,
            onComplete: () => {
              setCardRanking({
                card1: 2,
                card2: 3,
                card3: 1,
              });
              gsap.to("#seo-card-3", {
                background: "#e9ffd5",
                color: "#0d921c",
              });
              gsap.to("#seo-card-1", {
                background: "#efefef",
                color: "#b4b4b4",
              });
            },
          },
          1.1,
        ); // Start at same time as card1 animation
    };

    // Initial measurement
    updateHeights();

    // Optional: Add resize listener if content might change
    const resizeObserver = new ResizeObserver(updateHeights);

    if (card1Ref.current) resizeObserver.observe(card1Ref.current);
    if (card2Ref.current) resizeObserver.observe(card2Ref.current);
    if (card3Ref.current) resizeObserver.observe(card3Ref.current);

    return () => {
      resizeObserver.disconnect();
      // Clean up timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="space-y-[10px]">
      {/* FIRST-CARD */}
      <div
        ref={card1Ref}
        style={{ willChange: "transform" }}
        className="flex flex-col gap-1 rounded-xl bg-white p-2.5"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div
            id="seo-card-1"
            className="bg-nyanza text-pestering flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]"
          >
            {cardRanking.card1}
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Competitor description
        </span>
      </div>

      {/* SECOND-CARD */}
      <div
        ref={card2Ref}
        style={{ willChange: "transform" }}
        className="flex flex-col gap-1 rounded-xl bg-white p-2.5"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div
            id="seo-card-2"
            className="bg-silver text-pantone3 flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]"
          >
            {cardRanking.card2}
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Competitor description
        </span>
      </div>

      {/* THIRD-CARD */}
      <div
        ref={card3Ref}
        style={{ willChange: "transform" }}
        className="flex flex-col gap-1 rounded-xl bg-white p-2.5"
      >
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-palatinate mb-0.5 text-xs font-semibold">
            Your Contracting Biz
          </h3>
          <div
            id="seo-card-3"
            className="bg-silver text-pantone3 flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.2px]"
          >
            {cardRanking.card3}
          </div>
        </div>
        <p className="font-inter text-boogie text-[10px] font-semibold">
          www.yourbusiness.com
        </p>
        <span className="font-inter text-mana text-[10px] font-semibold">
          Top-rated general contractor serving {cityName} and
          surrounding areas. Licensed, insured, and trusted by homeowners for
          quality renovations and custom builds.
        </span>
        <div className="font-inter text-mana flex items-center text-[10px] font-semibold">
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          <SmallStarIcon />
          (1,415)
        </div>
      </div>
    </div>
  );
};

export default GooglePosterCard;