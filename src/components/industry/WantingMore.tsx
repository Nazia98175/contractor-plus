"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AdaptiveHeroTitle from "./AdaptiveHeroTitle";
import Copy from "../common/Copy";
import ScrollOverlapCards from "@/components/common/ScrollOverlapCards";

interface WantingMoreProps {
  fieldServiceData: any;
  slug: string;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const WantingMore: React.FC<WantingMoreProps> = ({ fieldServiceData, slug }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [headingHeight, setHeadingHeight] = useState<number>(0);
  const [stickyTop, setStickyTop] = useState<number | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const gsapRef = useRef<any>(null);
  const tlRef = useRef<any>(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const measure = () => {
      const cards = document.querySelectorAll<HTMLElement>(
        ".crm-cards .crm-cards-inner"
      );
      let currentMax = 0;
      cards.forEach((el) => {
        const h = el.getBoundingClientRect().height;
        if (h > currentMax) currentMax = h;
      });
      setMaxHeight(currentMax);

      if (headingRef.current) {
        const h = headingRef.current.getBoundingClientRect().height;
        setHeadingHeight(h);
      }

      // compute sticky logic only when we have sizes
      if (currentMax && headingRef.current) {
        const viewportH = window.innerHeight;
        const topCandidate = viewportH / 2 - currentMax / 2 - 90;
        const sticky = topCandidate > headingRef.current.getBoundingClientRect().height;
        setIsSticky(sticky);
        setStickyTop(sticky ? topCandidate : null);
      }
    };

    const raf = requestAnimationFrame(measure);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => measure())
        : null;
    if (headingRef.current && ro) ro.observe(headingRef.current);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      if (ro && headingRef.current) ro.unobserve(headingRef.current);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sectionRef.current || !headingRef.current) return;
    if (!maxHeight || !headingHeight || !isSticky) return;

    let isCancelled = false;

    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.gsap || (gsapMod as any).default || gsapMod;
      const ScrollTrigger = (stMod as any).ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);
      gsapRef.current = gsap;

      if (isCancelled) return;

      const viewportH = window.innerHeight;
      const headingFromTop = stickyTop ?? 0;
      const bottomVal =
        100 - (headingFromTop + headingHeight) / (viewportH / 100);

      if (tlRef.current) {
        tlRef.current.kill();
        tlRef.current = null;
      }

      tlRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: `bottom ${bottomVal}%`,
          scrub: 2,
          markers: false,
          id: "field-service-heading",
          invalidateOnRefresh: true,
        },
      });

      tlRef.current.to(headingRef.current, {
        y: -(headingFromTop + headingHeight),
        ease: "none",
      });
    })();

    return () => {
      isCancelled = true;
      try {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        // also clear all triggers tied to this id
        const st = (window as any).ScrollTrigger;
        if (st && st.getById) {
          const trig = st.getById("field-service-heading");
          trig && trig.kill();
        }
      } catch {}
    };
  }, [maxHeight, headingHeight, isSticky, stickyTop]);

  return (
    <section ref={sectionRef} className="relative px-2 pb-16">
      <div
        ref={headingRef}
        style={
          isSticky && stickyTop !== null
            ? { position: "sticky", top: `${stickyTop}px` }
            : { position: "relative" }
        }
        className="w-full justify-center"
      >
        <Copy animateOnScroll delay={0.1}>
          <AdaptiveHeroTitle
            title={fieldServiceData?.title}
            className="section-heading-2 gradient-text-2 relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold"
            minFontSize={24}
            maxLines={2}
            maxFontSize={42}
          />
        </Copy>
      </div>

      <ScrollOverlapCards theme="light" fieldService={fieldServiceData} slug={slug} />
    </section>
  );
};

export default WantingMore;
