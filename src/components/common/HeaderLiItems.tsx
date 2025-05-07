"use client";
import React, { useState } from "react";
import WhyContractorDropdown from "./WhyContractorDropdown";
import FeaturesDropdown from "./FeaturesDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import PricingDropdown from "./PricingDropdown";
import ResourcesDropdown from "./ResourcesDropdown";

const HeaderLiItems = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // These would be your actual component implementations
  const WhyContractor = () => <WhyContractorDropdown />;
  const Features = () => <FeaturesDropdown />;
  const Industries = () => <IndustriesDropdown />;
  const Pricing = () => <PricingDropdown />;
  const Resources = () => <ResourcesDropdown />;

  // Button data array
  const menuItems = [
    {
      id: "whycontractor",
      label: "Why Contractor+?",
      component: WhyContractor,
    },
    { id: "features", label: "Features", component: Features },
    { id: "industries", label: "Industries", component: Industries },
    { id: "pricing", label: "Pricing", component: Pricing },
    { id: "resources", label: "Resources", component: Resources },
  ];

  // Find active component
  const ActiveComponent = activeMenu
    ? menuItems.find((item) => item.id === activeMenu)?.component
    : null;

  return (
    <>
      <div className="flex items-center gap-5">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.id)}
          >
            <button
              className={`header-li py-[2px] px-[6px] transition-colors duration-300 cursor-pointer ${
                activeMenu === item.id
                  ? "!text-kuroiBlack bg-white"
                  : "text-superSilver bg-transparent"
              }`}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Full width dropdown outside the loop */}
      <div
        className={`absolute left-0 right-0 top-0 mt-20 bg-[#F8F8F8] mx-auto p-5 z-50 max-w-[1920px] w-full max-h-[700px]
          transform transition-all duration-300 ease-in-out origin-top
          ${
            activeMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
        onMouseLeave={handleMouseLeave}
      >
        {ActiveComponent && <ActiveComponent />}
      </div>
    </>
  );
};

export default HeaderLiItems;
