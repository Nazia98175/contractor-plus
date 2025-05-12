import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Book,
  FileText,
  Headphones,
  Calculator,
  Clipboard,
  Search,
  DollarSign,
  Building,
  Calendar,
  Users,
  LayoutList,
  FileCode,
} from "lucide-react";

const ResourcesDropdown = () => {
  const t = useTranslations("resources");

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const resourceItems = [
    {
      icon: FileText,
      href: "/blog",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      icon: Headphones,
      href: "/podcasts",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      icon: Calculator,
      href: "/calculators",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      icon: Clipboard,
      href: "/estimate-maker",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      icon: Search,
      href: "/material-comparison",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      icon: DollarSign,
      href: "/labor-pricing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      icon: DollarSign,
      href: "/material-pricing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      icon: Calendar,
      href: "/events",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      icon: Users,
      href: "/affiliates",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      icon: Building,
      href: "/supply-partners",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      icon: LayoutList,
      href: "/roadmap",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      icon: Book,
      href: "/support",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      icon: FileCode,
      href: "/developers",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
  ];

  const resourcesLinks = t.raw("links") as {
    label: string;
    href: string;
    description: string;
  }[];

  const fallbackImage = "/images/webp/resources-dropdown-img.webp";

  const previewImage =
    hoveredIndex !== null ? resourceItems[hoveredIndex]?.image : fallbackImage;

  return (
    <article className="flex justify-between p-2 gap-6">
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
      <div className="relative w-full max-w-[520px] h-auto rounded-md overflow-hidden">
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
