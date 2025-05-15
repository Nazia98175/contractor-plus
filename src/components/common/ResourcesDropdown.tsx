import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { resourceItems } from "./Helper";

const ResourcesDropdown = () => {
  const t = useTranslations("resources");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const resourcesLinks = t.raw("links") as {
    label: string;
    href: string;
    description: string;
  }[];

  const fallbackImage =
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";

  const previewImage =
    hoveredIndex !== null ? resourceItems[hoveredIndex]?.image : fallbackImage;

  return (
    <article className="flex justify-between p-2 gap-6 main-container">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 w-full">
        {resourcesLinks.map((link, index) => {
          const Icon = resourceItems[index]?.icon;
          return (
            <li
              className="group flex gap-2 hover:bg-superSilver duration-200 ease-linear p-[6px] cursor-pointer"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-center bg-gray-200 h-fit duration-300 text-black rounded-md p-2 group-hover:bg-lightBlack group-hover:!text-white">
                {Icon && <Icon size={18} />}
              </div>
              <div>
                <Link
                  href={link.href}
                  className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white duration-300"
                >
                  {link.label}
                </Link>
                <p className="text-sm font-inter text-lightBlack mt-2.5">
                  {link.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="relative w-full max-w-[480px] h-auto  rounded-md overflow-hidden">
        {resourceItems.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={t("imageAlt") || "resource preview"}
            unoptimized
            width={420}
            height={290}
            className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300  ${
              hoveredIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <Image
          src={fallbackImage}
          alt="Default resource preview"
          unoptimized
          width={420}
          height={290}
          className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300  ${
            hoveredIndex === null ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      </div>
    </article>
  );
};

export default ResourcesDropdown;
