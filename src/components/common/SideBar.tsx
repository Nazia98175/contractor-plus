"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  IndustriesDropdownLinks,
  ResourcesDropdownlinks,
  featurelinks,
} from "./Helper";
import { ArrowIcon, CrossIcon, LogoIcon, SidebarArrowIcon } from "./Icons";
import { featureIcons } from "./FeaturesDropdown";
import { sub } from "date-fns";

interface DropdownItemProps {
  title: string;
  items: Array<{
    label: string;
    description?: string;
    href: string;
    icon?: React.ReactNode;
    title?: string;
  }>;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
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
        className={`header-li flex w-full items-center justify-between p-1 ${
          isOpen ? "bg-white" : ""
        }`}
      >
        <span>{title}</span>
        <SidebarArrowIcon isOpen={isOpen} />
      </button>

      <div
        className={`no-scrollbar overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[500px] overflow-y-auto opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-1">
          <ul className="space-y-2.5 bg-white p-2">
            {items.map((item, index) => (
             item?.label !== "" && <div key={index}> <li >

                <Link href={item?.href || "#"} className="header-li block p-1">
                  <div className="flex items-center gap-2">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </div>
                  {item.description && (
                    <p className="hidden">{item.description}</p>
                  )}
                </Link>
              </li>
                {item?.title === "bottomLinks" && isOpen && (
              <div className="bg-superSilver mt-4 p-1.5">
                <div className="flex flex-col gap-1 p-[6px]">
                  <Link
                    className="font-inter text-lightBlack flex items-center gap-2.5 p-1 text-xs font-medium"
                    href={item?.href || "/"}
                  >
                    {item.label}
                    <ArrowIcon />
                  </Link>
                  {/* <Link
                    className="font-inter text-lightBlack flex items-center gap-2.5 p-1 text-xs font-medium"
                    href={"/"}
                  >
                    Integrations
                    <ArrowIcon />
                  </Link>
                  <Link
                    className="font-inter text-lightBlack flex items-center gap-2.5 p-1 text-xs font-medium"
                    href={"/"}
                  >
                    Product Updates
                    <ArrowIcon />
                  </Link> */}
                </div>
              </div>
            )}
              </div>
            ))}
          
            {/* {id === "whycontractor" && isOpen && (
              <div className="bg-superSilver mt-4 p-1.5">
                <div className="flex flex-col gap-1 p-[6px]">
                  <Link
                    className="font-inter text-lightBlack flex items-center gap-2.5 p-1 text-xs font-medium"
                    href={"/"}
                  >
                    See All Features
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const SideBar = ({
  setIsShow,
  isshow,
  header
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isshow: boolean;
  header: any;
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
      path: "/why-contractor",
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
      path: "/pricing",
    },
    {
      id: "resources",
      label: "Resources",
      items: ResourcesDropdownlinks,
    },
  ];
const menuItemss = header?.headerMain?.map((item: any, index: number) => {
  const items =
    item?.headerSubList?.length > 0
      ? item.headerSubList.flatMap((subItem: any) =>
       
          subItem?.links?.map((sub: any) => ({
            label: sub?.linkTxt || "",
            href: sub?.linkUrl || "",
            title: subItem?.title || "",
            icon: sub?.icon ? (
             featureIcons?.[sub?.icon] || null
            ) : null,
          })) || []
        )
      : [];

  return {
    id: item.id || `menu-item-${index}`,
    label: item.mainTitle || "",
    path: item?.mainLink || "",
    ...(items.length > 0 && { items }), // only include if exists
  };
});


  return (
    <>
      {isshow && (
        <div
          className="bg-opacity-10 fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ease-in-out lg:hidden"
          onClick={() => setIsShow(false)}
        />
      )}

      <div
        className={`bg-brownish fixed top-0 right-0 z-50 flex min-h-dvh w-full transform flex-col overflow-hidden shadow-lg transition-transform duration-300 ease-in-out lg:hidden ${
          isshow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex grow flex-col overflow-hidden p-2">
          <div className="bg-lightBlack shadow-c1 mb-2 flex items-center justify-between rounded px-3 py-1.5">
            <Link className="h-[18px] w-24" href={""}>
              <LogoIcon />
            </Link>
            <button onClick={() => setIsShow(false)}>
              <CrossIcon />
            </button>
          </div>

          <div className="no-scrollbar my-5 grow space-y-1 overflow-auto">
            {menuItemss.map((item:any) =>
              !(item.items?.length > 0) ? (
                <Link
                  key={item.id}
                  href={item.path}
                  className="header-li block p-1"
                  onClick={() => setIsShow(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <DropdownItem
                  key={item.id}
                  id={item.id}
                  title={item.label}
                  items={item.items || []}
                  isOpen={openDropdown === item.id}
                  onToggle={() => toggleDropdown(item.id)}
                />
              ),
            )}
          </div>

          <div className="flex items-center justify-between gap-3">
            <Link
              className="text-lightBlack font-inter text-xs font-bold tracking-[0.1px]"
              href={`tel:${header?.contact || "(855) 392-8803"}`}
            >
              {header?.contact}
            </Link>
            <div className="flex items-center gap-2">
              <button className="text-lightBlack font-myriad px-2 py-1 text-xs font-bold tracking-[0.1px]">
                {header?.loginText || "Login"}
              </button>
              <button className="font-myriad bg-romanRed rounded px-[14px] py-1 leading-[142.857%] font-semibold tracking-[0.1px] text-white">
               {header?.btnText?.btnText || "Get Started"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
