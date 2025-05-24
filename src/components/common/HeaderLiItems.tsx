"use client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import WhyContractorDropdown from "./WhyContractorDropdown";

const HeaderLiItems = () => {
  const t = useTranslations("menu");

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [prevMenu, setPrevMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const menuItems = useMemo(
    () => [
      { id: "whycontractordesktop", label: t("whycontractordesktop") },
      { id: "features", label: t("features") },
      { id: "industries", label: t("industries") },
      { id: "pricing", label: t("pricing"), link: "/" },
      { id: "resources", label: t("resources") },
    ],
    [t]
  );

  // Get menu index for animation direction
  const getMenuIndex = (menuId: string | null) => {
    if (!menuId) return -1;
    return menuItems.findIndex((item) => item.id === menuId);
  };

  useEffect(() => {
    if (!dropdownRef.current || !contentRef.current) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (activeMenu) {
      const currentIndex = getMenuIndex(activeMenu);
      const prevIndex = getMenuIndex(prevMenu);

      // Determine animation direction
      const isMovingRight = prevMenu && currentIndex > prevIndex;
      const isFirstOpen = !prevMenu;

      if (isFirstOpen) {
        // First time opening - fade in from center
        gsap.set(contentRef.current, { opacity: 0, x: 0 });
        gsap.set(dropdownRef.current, {
          visibility: "visible",
          height: "auto",
        });

        animationRef.current = gsap.to(contentRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        // Switching between menus
        const startX = isMovingRight ? -100 : 100;
        const endX = 0;

        gsap.set(contentRef.current, {
          opacity: 0,
          x: startX,
        });

        animationRef.current = gsap.to(contentRef.current, {
          opacity: 1,
          x: endX,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else {
      // Closing menu
      if (prevMenu && contentRef.current) {
        const prevIndex = getMenuIndex(prevMenu);
        const exitX = prevIndex < menuItems.length / 2 ? -100 : 100;

        animationRef.current = gsap.to(contentRef.current, {
          opacity: 0,
          x: exitX,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (dropdownRef.current) {
              gsap.set(dropdownRef.current, { visibility: "hidden" });
            }
          },
        });
      }
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [activeMenu, prevMenu, menuItems.length]);

  const handleMouseEnter = (menuName: string) => {
    setPrevMenu(activeMenu);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setPrevMenu(activeMenu);
    setActiveMenu(null);
  };

  return (
    <div onMouseLeave={handleMouseLeave}>
      <div className="flex items-center gap-2 w-full">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link
              key={index}
              href={item.link}
              className="header-li whitespace-nowrap flex items-center gap-1 py-0.5 xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer hover:text-superSilver text-kuroiBlack "
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(item.id)}
              className={`header-li whitespace-nowrap flex items-center gap-1 py-0.5 xl:px-[6px] px-1 transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack bg-white"
                  : "text-superSilver"
              }`}
            >
              {item.label}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  activeMenu === item.id ? "rotate-180" : ""
                }`}
              />
            </button>
          )
        )}
      </div>

      {/* Invisible gap-covering element */}
      <div
        className="absolute left-0 w-full h-[34.88px] z-[999] top-[72%] !bg-none"
        style={{
          visibility: activeMenu ? "visible" : "hidden",
          opacity: activeMenu ? 1 : 0,
        }}
      />

      {/* Dropdown Panel */}
      <div
        ref={dropdownRef}
        className={`absolute left-0 right-0 top-[calc(100%+0px)] mx-auto z-50 max-w-[1920px] w-full max-h-[83vh] 3xl:max-h-[800px] flex flex-col shadow-c3 bg-doctor2 overflow-hidden ${
          activeMenu ? "p-7" : ""
        }`}
        style={{
          visibility: "hidden",
        }}
      >
        <div ref={contentRef} className="overflow-auto">
          {activeMenu === "whycontractordesktop" && <WhyContractorDropdown />}
          {activeMenu === "features" && <FeaturesDropdown />}
          {activeMenu === "industries" && <IndustriesDropdown />}
          {activeMenu === "resources" && <ResourcesDropdown />}
        </div>
      </div>
    </div>
  );
};

export default HeaderLiItems;
