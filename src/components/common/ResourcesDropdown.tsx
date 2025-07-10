"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "./Icons";
import Image from "next/image";
interface Props {
  headerSubList: any;
}
const ResourcesDropdown: React.FC<Props> = ({ headerSubList }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const t = useTranslations("resources");

  const industriesLinks = t.raw("links") as {
    label: string;
    href: string;
  }[];

  const resourceItems = [
    { image: "/images/webp/contractor+HQ.webp" },
    { image: "/images/webp/industry-events.webp" },
    { image: "/images/webp/podcasts.webp" },
    { image: "/images/webp/Affiliates.webp" },
    { image: "/images/webp/calculators.webp" },
    { image: "/images/webp/supplier-partner-program.webp" },
    { image: "/images/webp/free-estimate-templates.webp" },
    { image: "/images/webp/Roadmap.webp" },
    { image: "/images/webp/material-comparison-search.webp" },
    { image: "/images/webp/Contact-us.webp" },
    { image: "/images/webp/usa-labor-pricing.webp" },
    { image: "/images/webp/developers-aPI.webp" },
  ];
  const fallbackImage = "/images/webp/developers-aPI.webp";

  return (
    <div className="flex grow flex-col overflow-hidden">
      <div className="relative z-[9999] flex grow gap-8 overflow-auto">
        <div className="no-scrollbar grid w-full grid-cols-2 gap-3 overflow-auto">
          {headerSubList?.[0]?.links?.map((link: any, index: any) => (
            <Link
              href={link?.linkUrl ?? "#"}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
            >
              <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit px-1 text-start !font-extrabold group-hover:!text-white">
                {link.linkTxt}
              </span>
            </Link>
          ))}
        </div>

        <div className="relative w-full max-w-[480px] overflow-hidden rounded-md">
          {resourceItems.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={industriesLinks[index]?.label || "Industry preview"}
              unoptimized
              width={480}
              height={320}
              className={`bg-kuroiBlack absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-300 ${
                hoveredIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            />
          ))}
          <Image
            src={fallbackImage}
            alt="Select an industry"
            unoptimized
            width={480}
            height={320}
            className={`absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-300 ${
              hoveredIndex === null ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          />
        </div>
      </div>
      <div className="font-inter sticky bottom-0 left-0 mt-8 flex w-full items-center justify-between gap-6">
        <Link className="all-features-button group" href="/resources">
          Go to Resource Hub
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          <Link className="all-features-button group" href="/">
            Get Demo
            <ArrowIcon />
          </Link>
          <Link className="all-features-button group" href="/">
            Investors
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
