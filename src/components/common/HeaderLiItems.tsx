"use client";

import React, { useState, useRef, useEffect } from "react";
import WhyContractorDropdown from "./WhyContractorDropdown";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import PricingDropdown from "./PricingDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import { useTranslations } from "next-intl";

const HeaderLiItems = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // These would be your actual component implementations
  const WhyContractor = () => <WhyContractorDropdown />;
  const Features = () => <FeaturesDropdown />;
  const Industries = () => <IndustriesDropdown />;
  const Pricing = () => <PricingDropdown />;
  const Resources = () => <ResourcesDropdown />;

  const t = useTranslations("menu");

  // Button data array
  const menuItems = [
    {
      id: "whycontractor",
      label: t("why"),
      component: WhyContractor,
    },
    { id: "features", label: t("features"), component: Features },
    { id: "industries", label: t("industries"), component: Industries },
    { id: "pricing", label: t("pricing"), component: Pricing },
    { id: "resources", label: t("resources"), component: Resources },
  ];

  // Find active component
  const ActiveComponent = activeMenu
    ? menuItems.find((item) => item.id === activeMenu)?.component
    : null;

  // Clear any existing timeouts to prevent unwanted state changes
  const clearTimeouts = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  // Handle mouse enter on menu items
  const handleMouseEnter = (menuName: string) => {
    clearTimeouts();
    setIsTransitioning(true);
    setActiveMenu(menuName);
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

    // Set a short delay before closing to avoid accidentally closing
    // when moving between menu items and dropdown
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setIsTransitioning(false);
    }, 100);
  };

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
    return () => clearTimeouts();
  }, []);

  return (
    <div onMouseLeave={handleContainerLeave}>
      {/* Menu Items */}
      <div className="flex items-center xl:gap-5 gap-2  w-full">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleContainerLeave}
            className={`header-li whitespace-nowrap py-[2px] xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer  ${
              activeMenu === item.id
                ? "!text-kuroiBlack bg-white"
                : "text-superSilver bg-transparent"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Invisible gap-covering element to prevent dropdown from closing */}
      {(activeMenu || isTransitioning) && (
        <div
          className="absolute left-0 w-full h-[67.88px] z-[999] top-[72%] bg-transparent"
          onMouseEnter={handleDropdownEnter}
        />
      )}

      {/* Dropdown Panel */}
      <div
        className={`absolute left-0 right-0 top-[calc(100%+0px)] bg-doctor2 mx-auto p-5 z-50 max-w-[1920px] w-full max-h-[500px] 3xl:max-h-[800px]
          transform transition-all duration-200 ease-in-out origin-top flex flex-col  shadow-c3
          ${
            activeMenu || isTransitioning
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        onMouseEnter={handleDropdownEnter}
      >
        <div className="overflow-auto h-full">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  );
};

export default HeaderLiItems;
