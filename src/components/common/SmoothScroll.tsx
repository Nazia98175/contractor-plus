"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function SmoothScroll() {
  useEffect(() => {
    // create the scrollSmoother before your scrollTriggers
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true,
      normalizeScroll: true,
      smoothTouch: 0.1,

      // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  }, []);
  return null;
}
