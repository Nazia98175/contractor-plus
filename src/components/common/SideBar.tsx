import React, { useState } from "react";
import {
  WhyContractorDropdownlinks,
  IndustriesDropdownLinks,
  ResourcesDropdownlinks,
  PricingDropdownLinks,
  featurelinks,
} from "./Helper";
import Link from "next/link";
import { CrossIcon, LogoIcon, SidebarArrowIcon, ArrowIcon } from "./Icons";

interface DropdownItemProps {
  title: string;
  items: Array<{
    label: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
  }>;
  isOpen: boolean;
  onToggle: () => void;
  id: string; // Added id prop to identify which dropdown is open
}

const DropdownItem = ({
  title,
  items,
  isOpen,
  onToggle,
  id,
}: DropdownItemProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full header-li p-1 ${
          isOpen ? "bg-white" : ""
        }`}
      >
        <span>{title}</span>
        <SidebarArrowIcon isOpen={isOpen} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out no-scrollbar  ${
          isOpen
            ? "max-h-[500px] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-1">
          <ul className="space-y-2.5 bg-white p-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href || "#"} className="block p-1 header-li">
                  <div className="flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                  {item.description && (
                    <p className="hidden">{item.description}</p>
                  )}
                </Link>
              </li>
            ))}
            {id === "features" && isOpen && (
              <div className="p-1.5 bg-superSilver mt-4">
                <div className="flex flex-col gap-1 p-[6px]">
                  <Link
                    className="flex items-center gap-2.5 text-xs font-inter font-medium text-lightBlack p-1"
                    href={"/"}
                  >
                    See All Features
                    <ArrowIcon />
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 text-xs font-inter font-medium text-lightBlack p-1"
                    href={"/"}
                  >
                    Integrations
                    <ArrowIcon />
                  </Link>
                  <Link
                    className="flex items-center gap-2.5 text-xs font-inter font-medium text-lightBlack p-1"
                    href={"/"}
                  >
                    Product Updates
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            )}
            {id === "whycontractor" && isOpen && (
              <div className="p-1.5 bg-superSilver mt-4">
                <div className="flex flex-col gap-1 p-[6px]">
                  <Link
                    className="flex items-center gap-2.5 text-xs font-inter font-medium text-lightBlack p-1"
                    href={"/"}
                  >
                    See All Features
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SideBar = ({
  setIsShow,
  isshow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isshow: boolean;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  const menuItems = [
    {
      id: "whycontractor",
      label: "Why Contractor+?",
      items: WhyContractorDropdownlinks,
    },
    {
      id: "features",
      label: "Features",
      items: featurelinks,
    },
    {
      id: "industries",
      label: "Industries",
      items: IndustriesDropdownLinks,
    },
    {
      id: "pricing",
      label: "Pricing",
      items: PricingDropdownLinks,
    },
    {
      id: "resources",
      label: "Resources",
      items: ResourcesDropdownlinks,
    },
  ];

  return (
    <>
      {isshow && (
        <div
          className="fixed inset-0 bg-[#000000ab] bg-opacity-10 z-40 transition-opacity duration-300 ease-in-out lg:hidden"
          onClick={() => setIsShow(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 min-h-dvh overflow-hidden flex flex-col w-[320px] bg-brownish z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
          isshow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-2 flex flex-col grow overflow-hidden">
          <div className="flex justify-between items-center mb-2 bg-lightBlack px-3 py-1.5 shadow-c1 rounded">
            <Link className="w-24 h-[18px]" href={""}>
              <LogoIcon />
            </Link>
            <button onClick={() => setIsShow(false)}>
              <CrossIcon />
            </button>
          </div>

          <div className="space-y-1 grow overflow-auto my-5 no-scrollbar">
            {menuItems.map((item) => (
              <DropdownItem
                key={item.id}
                id={item.id}
                title={item.label}
                items={item.items}
                isOpen={openDropdown === item.id}
                onToggle={() => toggleDropdown(item.id)}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-3">
            <Link
              className="text-xs font-bold tracking-[0.1px] text-lightBlack font-inter"
              href={"tel:855 392 8803"}
            >
              855 392 8803
            </Link>
            <div className="flex items-center gap-2">
              <button className="text-xs font-bold tracking-[0.1px] text-lightBlack font-myriad px-2 py-1">
                Login
              </button>
              <button className="text-white font-semibold leading-[142.857%] tracking-[0.1px] font-myriad rounded bg-romanRed px-[14px] py-1">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
