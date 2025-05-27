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
    [t],
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
      <div className="flex w-full items-center gap-2">
        {menuItems.map((item, index) =>
          item.link ? (
            <Link
              key={index}
              href={item.link}
              onMouseEnter={handleMouseLeave}
              className="header-li hover:text-superSilver text-kuroiBlack flex cursor-pointer items-center gap-1 px-1 py-0.5 whitespace-nowrap transition-colors duration-300 xl:px-[6px]"
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(item.id)}
              className={`header-li flex cursor-pointer items-center gap-1 px-1 py-0.5 whitespace-nowrap transition-colors duration-300 xl:px-[6px] ${
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
          ),
        )}
      </div>

      {/* Invisible gap-covering element */}
      <div
        className="absolute top-[72%] left-0 z-[999] h-[34.88px] w-full !bg-none"
        style={{
          visibility: activeMenu ? "visible" : "hidden",
          opacity: activeMenu ? 1 : 0,
        }}
      />

      {/* Dropdown Panel */}
      <div
        ref={dropdownRef}
        className={`shadow-c3 bg-doctor2 absolute top-[calc(100%+0px)] right-0 left-0 z-50 mx-auto flex max-h-[80vh] w-full max-w-[1920px] flex-col overflow-hidden ${
          activeMenu ? "p-7" : ""
        }`}
        style={{
          visibility: "hidden",
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        <div ref={contentRef} className="flex grow flex-col overflow-hidden">
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
