"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname, useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollSetup() {
  const router = useRouter();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    lenisRef.current = lenis;

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
      lenisRef.current = null;
    };
  }, []);

  // Handle pathname changes
  useEffect(() => {
    if (lenisRef.current) {
      // Stop scrolling when pathname changes
      lenisRef.current.stop();

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Start scrolling again after 3 seconds
      timeoutRef.current = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.start();
        }
      }, 4000);
    }

    // Cleanup timeout on unmount or pathname change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname]);

  return null;
}
