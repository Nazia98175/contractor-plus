"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import FeatureContent from "./FeatureContent";
import FeatureNavigation from "./FeatureNavigation";

gsap.registerPlugin(ScrollTrigger);

const CoreFeaturesCard: React.FC<Props> = ({ featuresList }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const titles: string[] = featuresList?.slice(0, -1).map((item) => item.title);
  function toCamelCase(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+(.)/g, (_, char) => char.toUpperCase())
      .replace(/\s+/g, "");
  }
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    titles.forEach((item) => {
      const element = document.getElementById(toCamelCase(item));
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [titles]);

  const featureBtnC = featuresList?.[featuresList?.length - 1]?.title ?? "";

  return (
    <section className="relative mt-7 flex flex-col gap-9 lg:flex-row lg:px-3 xl:p-6">
      <div className="!sticky top-[60px] z-20 h-full sm:top-[60px] lg:top-[100px] lg:w-fit">
        <div className={`relative z-20 w-full lg:w-fit lg:self-start`}>
          <FeatureNavigation
            isMobile={isMobile}
            features={titles}
            featureBtn={[featureBtnC]}
            activeLinkRef={activeLinkRef}
            activeSection={activeSection}
          />
        </div>
      </div>

      <div
        ref={contentRef}
        className="w-full space-y-4 overflow-visible lg:w-[80%] lg:space-y-8"
      >
        <FeatureContent
          featureContents={featuresList}
          contentRefs={contentRefs}
        />
      </div>
    </section>
  );
};

export default CoreFeaturesCard;
