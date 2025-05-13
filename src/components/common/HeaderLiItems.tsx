"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState, useMemo } from "react";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeaderLiItems = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const gapRef = useRef<HTMLDivElement>(null);

  // Register GSAP plugins
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  const t = useTranslations("menu");

  // Use useMemo to create a stable reference to the dropdown component mapping
  const componentMap = useMemo(
    () => ({
      features: FeaturesDropdown,
      industries: IndustriesDropdown,
      resources: ResourcesDropdown,
    }),
    []
  );

  // Button data array - use useMemo to prevent unnecessary recreations
  const menuItems = useMemo(
    () => [
      {
        id: "whycontractor",
        label: t("why"),
        link: "/",
      },
      {
        id: "features",
        label: t("features"),
        componentKey: "features",
      },
      {
        id: "industries",
        label: t("industries"),
        componentKey: "industries",
      },
      {
        id: "pricing",
        label: t("pricing"),
        link: "/",
      },
      {
        id: "resources",
        label: t("resources"),
        componentKey: "resources",
      },
    ],
    [t]
  );

  // Find active component - this now uses the stable componentMap
  const ActiveComponent = activeMenu
    ? componentMap[
        menuItems.find((item) => item.id === activeMenu)
          ?.componentKey as keyof typeof componentMap
      ]
    : null;

  // Clear any existing timeouts to prevent unwanted state changes
  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle mouse enter on menu items with GSAP animation
  const handleMouseEnter = (menuName: string) => {
    // Check if this menu item has a dropdown component
    const menuItem = menuItems.find((item) => item.id === menuName);

    // Only proceed if the menu item has a componentKey (indicates it has a dropdown)
    if (!menuItem || !menuItem.componentKey) {
      return;
    }

    clearTimeouts();
    setIsTransitioning(true);
    setActiveMenu(menuName);

    // Animate dropdown with GSAP
    if (dropdownRef.current) {
      gsap.fromTo(
        dropdownRef.current,
        {
          autoAlpha: 0,
          x: "100%",
          y: 0,
        },
        {
          duration: 0.4,
          autoAlpha: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
        }
      );
    }

    // Animate gap element with GSAP
    if (gapRef.current) {
      gsap.fromTo(
        gapRef.current,
        {
          autoAlpha: 0,
          x: "100%",
          y: 0,
        },
        {
          duration: 0.4,
          autoAlpha: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
        }
      );
    }
  };

  // Handle mouse enter on link items - immediately hide dropdown
  const handleLinkEnter = () => {
    // Hide dropdown immediately when hovering over a link
    if (activeMenu && dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        duration: 0.2, // Faster hide animation
        autoAlpha: 0,
        x: "100%",
        ease: "power1.in",
        onComplete: () => {
          setActiveMenu(null);
          setIsTransitioning(false);
        },
      });
    }
  };

  // Handle mouse leave on menu items
  const handleMenuItemLeave = () => {
    clearTimeouts();
    // Don't close if we're just moving between items - this will be handled by container leave
    // Just mark that we're transitioning
    setIsTransitioning(true);

    // Set a short timeout to avoid flickering during transitions between menu items
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  };

  // Handle mouse enter on dropdown content
  const handleDropdownEnter = () => {
    clearTimeouts();
    setIsTransitioning(false);
  };

  // Handle mouse leave on the entire dropdown container
  const handleContainerLeave = () => {
    clearTimeouts();

    // Animate with GSAP when closing dropdown
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        duration: 0.3,
        autoAlpha: 0,
        x: "100%",
        ease: "power2.in",
        onComplete: () => {
          setActiveMenu(null);
          setIsTransitioning(false);
        },
      });
    } else {
      // Fallback if ref not available
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
        setIsTransitioning(false);
      }, 100);
    }
  };

  // Setup smooth scrolling for dropdown content
  useEffect(() => {
    if (activeMenu && dropdownRef.current) {
      // Get the scrollable content inside the dropdown
      const scrollContent = dropdownRef.current.querySelector(
        "[data-lenis-prevent]"
      );

      if (scrollContent) {
        // Setup smooth scrolling with GSAP
        const scrollTrigger = ScrollTrigger.create({
          trigger: scrollContent,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Adjust for smoother or faster scrolling
        });

        // Return cleanup function
        return () => {
          scrollTrigger.kill();
        };
      }
    }
  }, [activeMenu]);

  // Effect to disable body scrolling when dropdown is open
  useEffect(() => {
    if (activeMenu || isTransitioning) {
      // Save the current overflow style
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Get the scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Disable scrolling on the body
      document.body.style.overflow = "hidden";

      // Add padding right to prevent layout shift when scrollbar disappears
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Cleanup function to restore original styles
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [activeMenu, isTransitioning]);

  // Clean up any timeouts when component unmounts
  useEffect(() => {
    return () => {
      clearTimeouts();
      // Kill any remaining GSAP animations
      gsap.killTweensOf(dropdownRef.current);
      gsap.killTweensOf(gapRef.current);

      // Clean up any remaining ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div onMouseLeave={handleContainerLeave}>
      {/* Menu Items */}
      <div className="flex items-center xl:gap-5 gap-2 w-full">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link
              key={index}
              href={item.link}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleMenuItemLeave}
              className={`header-li whitespace-nowrap py-[2px] xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack bg-white"
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
              className={`header-li whitespace-nowrap py-0.5 xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack bg-white"
                  : "text-superSilver bg-transparent"
              }`}
            >
              {item.label}
            </button>
          )
        )}
      </div>

      {/* Invisible gap-covering element to prevent dropdown from closing */}
      {(activeMenu || isTransitioning) && (
        <div
          ref={gapRef}
          className="absolute left-0 w-full h-[67.88px] z-[999] top-[72%] !bg-none"
          onMouseEnter={handleDropdownEnter}
          style={{
            visibility: activeMenu || isTransitioning ? "visible" : "hidden",
            opacity: activeMenu || isTransitioning ? 1 : 0,
          }}
        />
      )}

      {/* Dropdown Panel */}
      <div
        ref={dropdownRef}
        className="absolute left-0 right-0 top-[calc(100%+0px)]  mx-auto  z-50 max-w-[1920px] w-full max-h-[83vh] 3xl:max-h-[800px] flex flex-col shadow-c3"
        onMouseEnter={handleDropdownEnter}
        style={{
          visibility: activeMenu || isTransitioning ? "visible" : "hidden",
          opacity: activeMenu || isTransitioning ? 1 : 0,
          transform:
            activeMenu || isTransitioning
              ? "translateX(0)"
              : "translateX(100%)",
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
