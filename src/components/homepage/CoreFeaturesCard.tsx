"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import FeatureNavigation from "./FeatureNavigation";
import FeatureContent from "./FeatureContent";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
interface FeatureItem {
  id: number;
  title: string;
  cardQuote: string | null;
  userName: string | null;
  cardImg: any | null;
  content: {
    id: number;
    title: string;
    desc: string;
  }[];
}

interface Props {
  featuresList: FeatureItem[];
}
const navItems = [
  { id: "crm", label: "CRM", href: "#crm" },
  { id: "live_scheduling", label: "Live scheduling", href: "#live_scheduling" },
  {
    id: "internal_job_chat",
    label: "Internal job chat",
    href: "#internal_job_chat",
  },
  {
    id: "ai_estimate_builder",
    label: "AI estimate builder",
    href: "#ai_estimate_builder",
  },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  {
    id: "property_profiles",
    label: "Property Profiles",
    href: "#property_profiles",
  },
  { id: "pricing", label: "Pricing", href: "#pricing" },
  { id: "big_chief_ai", label: "Big Chief AI", href: "#big_chief_ai" },
];
const CoreFeaturesCard: React.FC<Props> = ({ featuresList }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const t = useTranslations("corefeature");
  const features: string[] = t.raw("features") || [];

  // Mobile detection with resize listener
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
      .trim() // Remove leading/trailing whitespace
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters except spaces
      .replace(/\s+(.)/g, (_, char) => char.toUpperCase()) // Convert first letter after space to uppercase
      .replace(/\s+/g, ""); // Remove all spaces
  }
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section is 20% visible from top
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
    <section
      // ref={containerRef}
      className="relative mt-7 flex flex-col gap-9 lg:flex-row lg:px-3 xl:p-6"
    >
      <div className="!sticky top-[52px] z-20 h-full sm:top-[55px] lg:top-[100px] lg:w-fit">
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
