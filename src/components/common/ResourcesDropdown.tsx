"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "./Icons";
import Link from "next/link";
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
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-2.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
    { image: "/images/webp/circular-slide-1.webp" },
  ];
  const fallbackImage = "/images/webp/circular-slide-1.webp";

  return (
    <div className="flex grow flex-col overflow-hidden">
      <div className="relative z-[9999] flex grow gap-8 overflow-auto">
        <div className="no-scrollbar grid w-full grid-cols-2 gap-3 overflow-auto">
          {headerSubList?.[0]?.links?.map((link: any, index: any) => (
            <button
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
            >
              <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit text-start group-hover:!text-white">
                {link.linkTxt}
              </span>
            </button>
          ))}
        </div>

        {/* <div className="relative w-full max-w-[480px] overflow-hidden rounded-md">
        {resourceItems.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={industriesLinks[index]?.label || "Industry preview"}
            unoptimized
            width={480}
            height={320}
            className={`absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-300 ${
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
      </div> */}
      </div>
      <div className="font-inter sticky bottom-0 left-0 flex w-full items-center justify-between gap-6">
        <Link className="all-features-button group" href="/">
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
