// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// export default function SmoothScroll() {
//   useEffect(() => {

//     ScrollSmoother.create({
//       smooth: 1,
//       effects: true,
//       normalizeScroll: true,
//       smoothTouch: 0.1,

//     });
//   }, []);
//   return null;
// }
"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollSetup() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 👇 Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Optional: handle resize or destroy
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
