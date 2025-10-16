"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Copy from "../common/Copy";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TeamCard {
  id: string | number;
  image?: any;
  imgWidth?: string;
  text: string;
}

interface WinTeamProps {
  title?: string;
  items: TeamCard[];
}

const WinTeam: React.FC<WinTeamProps> = ({ items = [], title }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Make sure we're in the browser
    if (typeof window === "undefined") return;

    // Check if mobile (you can adjust breakpoint as needed)
    const isMobile = window.innerWidth < 640; // sm breakpoint in Tailwind

    // Skip animations on mobile
    if (isMobile) {
      // Remove opacity-0 class from all elements on mobile
      if (titleRef.current) {
        titleRef.current.classList.remove("sm:opacity-0");
      }
      const cards = document.querySelectorAll(".win-team-card");
      cards.forEach((card) => card.classList.remove("sm:opacity-0"));
      return;
    }

    // Store context for cleanup
    let ctx: gsap.Context | null = null;

    // Wait for the component to mount
    const timer = setTimeout(() => {
      if (!sectionRef.current) return;

      // Create GSAP context for cleanup
      ctx = gsap.context(() => {
        // Animate the title
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                once: false,
              },
            },
          );
        }

        // Select all cards using class selector
        const cards = gsap.utils.toArray(".win-team-card");

        if (cards.length > 0) {
          // Set initial state
          gsap.set(cards, {
            y: 60,
            opacity: 0,
          });

          // Create ScrollTrigger for each card with stagger
          cards.forEach((card, index) => {
            gsap.to(card as Element, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.12, // Stagger effect
              ease: "power2.out",
              scrollTrigger: {
                trigger: card as Element,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                once: false,
                // markers: true, // Uncomment to debug
              },
            });
          });
        }

        // Alternative approach using batch for better performance
        // ScrollTrigger.batch(".win-team-card", {
        //   onEnter: (batch) =>
        //     gsap.to(batch, {
        //       y: 0,
        //       opacity: 1,
        //       duration: 0.8,
        //       stagger: 0.12,
        //       ease: "power2.out",
        //       overwrite: "auto",
        //     }),
        //   onLeave: (batch) =>
        //     gsap.to(batch, {
        //       y: 60,
        //       opacity: 0,
        //       duration: 0.4,
        //       stagger: 0.05,
        //       ease: "power2.in",
        //       overwrite: "auto",
        //     }),
        //   onEnterBack: (batch) =>
        //     gsap.to(batch, {
        //       y: 0,
        //       opacity: 1,
        //       duration: 0.8,
        //       stagger: 0.08,
        //       ease: "power2.out",
        //       overwrite: "auto",
        //     }),
        //   onLeaveBack: (batch) =>
        //     gsap.to(batch, {
        //       y: 60,
        //       opacity: 0,
        //       duration: 0.4,
        //       stagger: 0.05,
        //       ease: "power2.in",
        //       overwrite: "auto",
        //     }),
        //   start: "top 85%",
        //   end: "top 50%",
        // });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, sectionRef);
    }, 100); // Small delay to ensure DOM is ready

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      }
    };
  }, [items]);

  // Force ScrollTrigger refresh on window resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;

      if (isMobile) {
        // Kill all ScrollTriggers on mobile
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        // Remove opacity classes
        if (titleRef.current) {
          titleRef.current.classList.remove("opacity-0");
          gsap.set(titleRef.current, { clearProps: "all" });
        }
        const cards = document.querySelectorAll(".win-team-card");
        cards.forEach((card) => {
          card.classList.remove("opacity-0");
          gsap.set(card, { clearProps: "all" });
        });
      } else {
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);

    // Also refresh on load
    window.addEventListener("load", () => {
      if (window.innerWidth >= 640) {
        ScrollTrigger.refresh();
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={sectionRef} className="mx-auto max-w-[990px] px-4">
      <div>
        <Copy animateOnScroll={false}>
          {" "}
          {/* Disable Copy's animation to avoid conflicts */}
          <h3
            ref={titleRef}
            className="text-mana pb-[73px] text-center text-2xl font-bold sm:text-[28px] sm:opacity-0 md:text-[38px]"
          >
            {title || "Why this team wins"}
          </h3>
        </Copy>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* First 3 cards */}
        {items.slice(0, 3).map((card) => (
          <article
            key={card.id}
            className="win-team-card sm:opacity-0"
            data-card-id={card.id}
          >
            <Image
              src={card.image.url}
              alt="win team"
              height={300}
              width={300}
              fetchPriority="auto"
              loading="lazy" // useful for above-the-fold images
              quality={75} // balance between size and quality
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 209px"
              className={`mx-auto w-full ${card.imgWidth || ""} ios-image`}
              style={{ objectFit: "contain" }} // maintain aspect ratio
            />

            <p className="text-lightBlackGrey mx-auto max-w-[268px] pt-4 text-center text-lg font-bold">
              {card.text}
            </p>
          </article>
        ))}

        {/* Last 2 cards (centered on desktop) */}
        <div className="flex flex-col justify-center gap-18 lg:col-span-3 lg:flex-row">
          {items.slice(3).map((card) => (
            <article
              key={card.id}
              className="win-team-card w-full sm:opacity-0 lg:max-w-[368px]"
              data-card-id={card.id}
            >
              <Image
                height={300}
                width={300}
                fetchPriority="auto"
                loading="lazy" // useful for above-the-fold images
                quality={75}
                sizes="(max-width: 768px) 90vw, (min-width: 769px) 90vh"
                className={`mx-auto w-full ${card.imgWidth || ""} ios-image`}
                src={card.image.url}
                alt="win team"
              />
              <p
                className={`text-lightBlackGrey mx-auto max-w-[300px] pt-4 text-center text-lg font-bold`}
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
