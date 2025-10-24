"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "./Icons";
import Image from "next/image";
interface Props {
  headerSubList: any;
  closeDropdown?: () => void;
}
const ResourcesDropdown: React.FC<Props> = ({
  headerSubList,
  closeDropdown,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const t = useTranslations("resources");

  const industriesLinks = t.raw("links") as {
    label: string;
    href: string;
  }[];
  console.log(headerSubList, "headl");

  const resourceItems = [
    { image: "/images/webp/contractor-hq.webp" },
    { image: "/images/webp/local-construction-costs.webp" },
    { image: "/images/webp/Podcasts.webp" },
    { image: "/images/webp/Industry-sEvents.webp" },
    { image: "/images/webp/calculators.webp" },
    { image: "/images/webp/Affiliates.webp" },
    { image: "/images/webp/free-estimate-templates.webp" },
    { image: "/images/webp/Supply-Partner-Program.webp" },
    { image: "/images/webp/material-comparison-search.webp" },
    { image: "/images/webp/Support-Center.webp" },
    { image: "/images/webp/USA-Labor-Rate.webp" },
    { image: "/images/webp/developers-api.webp" },
  ];
  // const fallbackImage = "/images/webp/developers-aPi.webp";
  return (
    <div className="flex grow flex-col overflow-hidden">
      <div className="relative z-[9999] flex grow items-start gap-8 overflow-auto">
        <div className="no-scrollbar grid w-full grid-cols-2 gap-3 overflow-auto">
          {headerSubList?.[0]?.links?.map((link: any, index: any) => (
            <Link
              onClick={() => {
                closeDropdown?.(); // closes dropdown
                // Do not use preventDefault here!
              }}
              href={link?.linkUrl ?? ""}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
            >
              <div className="flex items-start gap-2.5">
                <Image
                  className="group-hover:fill-red-900"
                  src={link?.icon?.url}
                  alt="icons"
                  width={25}
                  height={25}
                  priority
                />
                <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit px-1 text-start !font-extrabold group-hover:!text-white">
                  {link.linkTxt}
                </span>
              </div>
              <p className="font-inter text-lightBlack mt-1.5 text-sm">
                {link.subTitle}
              </p>
            </Link>
          ))}
        </div>

        <div className="relative min-h-[520px] w-full max-w-[480px] overflow-hidden rounded-md">
          {resourceItems.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt={industriesLinks[index]?.label || "Industry preview"}
              priority
              fetchPriority="auto"
              width={480}
              height={320}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 480px"
              className={`bg-kuroiBlack absolute inset-0 h-full w-full rounded-md object-cover transition-opacity duration-300 ${
                hoveredIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            />
          ))}
          <Image
            src={"/images/webp/Affiliates.webp"}
            alt="Select an industry"
            priority
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
          {headerSubList?.[headerSubList?.length - 1]?.title ===
            "bottomLinks" &&
            headerSubList?.[headerSubList?.length - 1]?.links?.[0]?.linkTxt}
          <ArrowIcon />
        </Link>
        <div className="flex items-center gap-10">
          {headerSubList?.[headerSubList?.length - 1]?.title ===
            "bottomLinks" &&
            headerSubList?.[headerSubList?.length - 1]?.links
              ?.slice(
                1,
                headerSubList?.[headerSubList?.length - 1]?.links?.length,
              )
              ?.map((link: any, index: any) => (
                <Link
                  key={`${link?.linkTxt}-${index}`}
                  target={link?.linkTxt === "Get Demo" ? "_blank" : "_self"}
                  className="all-features-button group"
                  href={`${link?.linkUrl}`}
                >
                  {link?.linkTxt}
                  <ArrowIcon />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesDropdown;
