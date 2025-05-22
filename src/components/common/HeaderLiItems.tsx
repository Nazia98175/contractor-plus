"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

gsap.registerPlugin(ScrollTrigger);

const HeaderLiItems = () => {
  const t = useTranslations("menu");

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intentTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationInProgressRef = useRef(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);
  const containerScope = useRef(null);

  const componentMap = useMemo(
    () => ({
      features: FeaturesDropdown,
      industries: IndustriesDropdown,
      resources: ResourcesDropdown,
    }),
    []
  );

  const menuItems = useMemo(
    () => [
      { id: "whycontractor", label: t("why"), link: "/" },
      { id: "features", label: t("features"), componentKey: "features" },
      { id: "industries", label: t("industries"), componentKey: "industries" },
      { id: "pricing", label: t("pricing"), link: "/" },
      { id: "resources", label: t("resources"), componentKey: "resources" },
    ],
    [t]
  );

  const ActiveComponent = activeMenu
    ? componentMap[
        menuItems.find((item) => item.id === activeMenu)
          ?.componentKey as keyof typeof componentMap
      ]
    : null;

  const clearTimeouts = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intentTimeoutRef.current) clearTimeout(intentTimeoutRef.current);
  };

  const handleMouseEnter = (menuName: string) => {
    const menuItem = menuItems.find((item) => item.id === menuName);
    if (!menuItem?.componentKey || activeMenu === menuName) return;

    clearTimeouts();

    gsap.killTweensOf(dropdownRef.current);
    gsap.killTweensOf(gapRef.current);

    setIsTransitioning(true);
    setActiveMenu(menuName);
    animationInProgressRef.current = true;

    gsap.set(dropdownRef.current, {
      autoAlpha: 0,
      x: "100%",
    });

    gsap.set(gapRef.current, {
      autoAlpha: 0,
      x: "100%",
    });

    gsap.to(dropdownRef.current, {
      duration: 0.4,
      autoAlpha: 1,
      x: 0,
      ease: "power2.out",
      onComplete: () => {
        animationInProgressRef.current = false;
      },
    });

    gsap.to(gapRef.current, {
      duration: 0.4,
      autoAlpha: 1,
      x: 0,
      ease: "power2.out",
    });
  };

  const handleLinkEnter = () => {
    gsap.killTweensOf(dropdownRef.current);
    gsap.killTweensOf(gapRef.current);

    if (activeMenu && dropdownRef.current) {
      animationInProgressRef.current = true;
      gsap.to(dropdownRef.current, {
        duration: 0.2,
        autoAlpha: 0,
        x: "100%",
        ease: "power1.in",
        onComplete: () => {
          setActiveMenu(null);
          setIsTransitioning(false);
          animationInProgressRef.current = false;
        },
      });

      gsap.to(gapRef.current, {
        duration: 0.2,
        autoAlpha: 0,
        x: "100%",
        ease: "power1.in",
      });
    }
  };

  const handleMenuItemLeave = () => {
    clearTimeouts();
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  const handleDropdownEnter = () => {
    clearTimeouts();
    setIsTransitioning(false);
  };

  const handleContainerLeave = () => {
    clearTimeouts();

    gsap.killTweensOf(dropdownRef.current);
    gsap.killTweensOf(gapRef.current);

    if (dropdownRef.current) {
      animationInProgressRef.current = true;
      gsap.to(dropdownRef.current, {
        duration: 0.3,
        autoAlpha: 0,
        x: "100%",
        ease: "power2.in",
        onComplete: () => {
          setActiveMenu(null);
          setIsTransitioning(false);
          animationInProgressRef.current = false;
        },
      });

      gsap.to(gapRef.current, {
        duration: 0.3,
        autoAlpha: 0,
        x: "100%",
        ease: "power2.in",
      });
    }
  };

  useGSAP(
    () => {
      return () => {
        clearTimeouts();
        gsap.killTweensOf(dropdownRef.current);
        gsap.killTweensOf(gapRef.current);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerScope }
  );

  useEffect(() => {
    if (activeMenu && dropdownRef.current) {
      const scrollContent = dropdownRef.current.querySelector(
        "[data-lenis-prevent]"
      );
      if (scrollContent) {
        const scrollTrigger = ScrollTrigger.create({
          trigger: scrollContent,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        });
        return () => scrollTrigger.kill();
      }
    }
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu || isTransitioning) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [activeMenu, isTransitioning]);

  return (
    <div ref={containerScope} onMouseLeave={handleContainerLeave}>
      {/* Menu Items */}
      <div className="flex items-center 3xl:gap-5 gap-1 xl:gap-2 w-full">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link
              key={index}
              href={item.link}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleMenuItemLeave}
              className={`header-li hover:!text-redPigment whitespace-nowrap py-[2px] xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack"
                  : "text-superSilver bg-transparent"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMenuItemLeave}
              className={`header-li whitespace-nowrap flex items-center gap-1 py-0.5 xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack bg-white"
                  : "text-superSilver bg-transparent"
              }`}
            >
              {item.label}
              <ChevronDown
                size={16}
                className={`${
                  activeMenu === item.id
                    ? "!text-kuroiBlack rotate-180"
                    : "text-superSilver"
                } transition-transform duration-300`}
              />
            </button>
          )
        )}
      </div>

      {/* Invisible gap-covering element */}
      <div
        ref={gapRef}
        className="absolute left-0 w-full h-[67.88px] z-[999] top-[72%] !bg-none"
        onMouseEnter={handleDropdownEnter}
        style={{
          visibility: activeMenu || isTransitioning ? "visible" : "hidden",
          opacity: 0,
        }}
      />

      {/* Dropdown Panel */}
      <div
        ref={dropdownRef}
        className="absolute left-0 right-0 top-[calc(100%+0px)] mx-auto z-50 max-w-[1920px] w-full max-h-[83vh] 3xl:max-h-[800px] flex flex-col shadow-c3"
        onMouseEnter={handleDropdownEnter}
        style={{
          visibility: "hidden",
          opacity: 0,
          transform: "translateX(100%)",
        }}
      >
        <div
          className="overflow-auto h-full custom-scrollbar"
          data-lenis-prevent
        >
          {ActiveComponent && (
            <div className="py-5 bg-doctor2">
              <ActiveComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderLiItems;
