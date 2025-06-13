"use client";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

interface Props {
  headerList: any;
}
const HeaderLiItems: React.FC<Props> = ({ headerList }) => {
  const t = useTranslations("menu");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [prevMenu, setPrevMenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const menuItems = useMemo(
    () => [
      { id: "whycontractordesktop", label: "whycontractordesktop", link: "/" },
      { id: "features", label: "features" },
      { id: "industries", label: "industries" },
      { id: "pricing", label: "pricing", link: "/" },
      { id: "resources", label: "resources" },
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
        {headerList?.map((item: any, index: number) => {
          const menuItem = menuItems[index];
          const isWhy = menuItem?.id === "whycontractordesktop";

          if (item?.headerSubList?.length === 0 || isWhy) {
            return (
              <Link
                key={index}
                href={menuItem?.link || "#"}
                onMouseEnter={handleMouseLeave}
                className="header-li hover:text-superSilver group text-kuroiBlack relative flex cursor-pointer items-center gap-1 px-1 py-0.5 whitespace-nowrap transition-colors duration-300 xl:px-[6px]"
              >
                {item?.mainTitle}
                <span className="footer-li-hover"></span>
              </Link>
            );
          }

          return (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(menuItem?.id)}
              className={`header-li flex cursor-pointer items-center gap-1 px-1 py-0.5 whitespace-nowrap transition-colors duration-300 xl:px-[6px] ${
                activeMenu === menuItem?.id
                  ? "!text-kuroiBlack bg-white"
                  : "text-superSilver"
              }`}
            >
              {item?.mainTitle}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  activeMenu === menuItem?.id ? "rotate-180" : ""
                }`}
              />
            </button>
          );
        })}
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
        className={`shadow-c3 bg-doctor2 absolute top-[calc(100%+0px)] right-0 left-0 z-50 mx-auto flex max-h-[80vh] w-full flex-col overflow-hidden ${
          activeMenu ? "p-7" : ""
        }`}
        style={{
          visibility: "hidden",
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        <div ref={contentRef} className="flex grow flex-col overflow-hidden">
          <div className="main-container flex grow flex-col overflow-hidden">
            {/* {activeMenu === "whycontractordesktop" && (
              <WhyContractorDropdown
                headerSubList={
                  headerList?.[menuItems.findIndex((i) => i.id === activeMenu)]
                    ?.headerSubList
                }
              />
            )} */}
            {activeMenu === "features" && (
              <FeaturesDropdown
                isVisible
                headerSubList={
                  headerList?.[menuItems.findIndex((i) => i.id === activeMenu)]
                    ?.headerSubList
                }
              />
            )}
            {activeMenu === "industries" && (
              <IndustriesDropdown
                headerSubList={
                  headerList?.[menuItems.findIndex((i) => i.id === activeMenu)]
                    ?.headerSubList
                }
              />
            )}
            {activeMenu === "resources" && (
              <ResourcesDropdown
                headerSubList={
                  headerList?.[menuItems.findIndex((i) => i.id === activeMenu)]
                    ?.headerSubList
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLiItems;
