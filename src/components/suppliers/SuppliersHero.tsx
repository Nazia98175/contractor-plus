"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Button from "../common/Button";
import { SideIcon } from "../common/Icons";
import CardReveal from "../common/CardReveal";
import Copy from "../common/Copy";

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
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-fetures", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);

  return (
    <section
      id="home-page-view-port-screen-fetures"
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
      <Copy delay={0.3} animateOnScroll={false}>
        <p className="hero-description !text-ashGray mt-3 text-center">
          {heroDescription ||
            "Get discovered by 50,000+ high‑intent contractors right inside the OS they use to estimate, order, and build."}
        </p>
      </Copy>
      <CardReveal distance={30} delay={0.6}>
        <Button className="mt-4 w-full sm:max-w-[204px]">
          Get in touch <SideIcon />
        </Button>
      </CardReveal>
    </section>
  );
};

export default SuppliersHero;
