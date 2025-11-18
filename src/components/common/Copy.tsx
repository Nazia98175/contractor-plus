"use client";
import React, { useRef, ReactNode, ReactElement, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children: ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
  ariaLabel?: string;
}

function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
  className,
  ariaLabel,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<HTMLElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const lines = useRef<HTMLElement[]>([]);
  const animation = useRef<gsap.core.Tween | null>(null);

  const waitForFonts = async () => {
    try {
      await document.fonts.ready;
      await new Promise((res) => setTimeout(res, 10));
      return true;
    } catch {
      await new Promise((res) => setTimeout(res, 100));
      return true;
    }
  };

  const clearSplit = () => {
    splitRefs.current.forEach((split) => split?.revert());
    splitRefs.current = [];
    elementRefs.current = [];
    lines.current = [];
    animation.current?.kill();
  };

  const setupSplit = async () => {
    if (!containerRef.current) return;
    await waitForFonts();

    clearSplit();

    let elements: HTMLElement[] = [];

    // Multi child container
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(containerRef.current.children) as HTMLElement[];
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((el) => {
      elementRefs.current.push(el);

      const split = new SplitText(el, {
        type: "lines",
        linesClass: "line",
        mask: "lines",
      });

      splitRefs.current.push(split);
      lines.current.push(...(split.lines as HTMLElement[]));
    });

    gsap.set(lines.current, { y: "100%" });

    const animationProps = {
      y: "0%",
      stagger: 0.1,
      ease: "power4.out",
      delay,
      duration: 1.6,
    };

    if (animateOnScroll) {
      animation.current = gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    } else {
      animation.current = gsap.to(lines.current, animationProps);
    }
  };

  useGSAP(() => {
    setupSplit();

    return () => clearSplit();
  }, [animateOnScroll, delay]);

  // ⭐ Refresh SplitText on screen resize (debounced)
  useEffect(() => {
    let resizeTimer: any;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupSplit(); // re-split lines on resize
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clone if single child
  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    const child = children as ReactElement;
    // Cast props to any to allow adding a ref to the cloned element
    return React.cloneElement(child, { ref: containerRef } as any);
  }

  return (
    <div
      aria-label={ariaLabel}
      className={className}
      ref={containerRef}
      data-copy-wrapper="true"
    >
      {children}
    </div>
  );
}

export default Copy;
