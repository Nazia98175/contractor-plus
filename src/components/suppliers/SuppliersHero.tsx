"use client";
import useGsapFadeIn from "@/hooks/useGsapFadeIn";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Button from "../common/Button";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";
import { SideIcon } from "../common/Icons";

export interface SupplierHeroProps {
  heroTitle?: string;
  heroDescription?: string;
  heroSubTitle: string;
}

const SuppliersHero = ({
  heroTitle,
  heroDescription,
  heroSubTitle,
}: SupplierHeroProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      ease: "elastic.in",
      once: true,
    });
  }, []);
  useGsapFadeIn(["#common-homepage-wrapper", "#home-page-view-port-screen"]);

  return (
    <section
      ref={wrapperRef}
      className="relative z-40 mx-auto flex max-w-[933px] flex-col items-center justify-center px-4"
    >
      <CardReveal distance={30} delay={0.1}>
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          {heroSubTitle || "Supply Partners"}
        </h4>
      </CardReveal>
      <Copy delay={0.2} animateOnScroll={false}>
        <h1 className="main-heading text-gradient-effect text-center">
          {heroTitle ||
            "Put your catalog where purchasing decisions actually happen"}
        </h1>
      </Copy>
      <Copy
        ariaLabel="Get discovered by 50,000+ high‑intent contractors right inside the OS they use to estimate, order, and build."
        delay={0.3}
        animateOnScroll={false}
      >
        <p
          aria-label="Get discovered by 50,000+ high‑intent contractors right inside the OS they"
          className="hero-description !text-ashGray mt-3 text-center"
        >
          {heroDescription ||
            "Get discovered by 50,000+ high‑intent contractors right inside the OS they use to estimate, order, and build."}
        </p>
      </Copy>
      <CardReveal distance={30} delay={0.6}>
        <Button
          ariaLabel="Get in touch"
          className="mt-4 w-full sm:max-w-[204px]"
        >
          Get in touch <SideIcon />
        </Button>
      </CardReveal>
    </section>
  );
};

export default SuppliersHero;
