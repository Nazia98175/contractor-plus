"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "./Icons";

interface Props {
  headerSubList: any;
}

const WhyContractorDropdown:React.FC<Props> = ({headerSubList}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const t = useTranslations("whycontractordesktop");

  const industriesLinks = t.raw("links") as {
    label: string;
    description: string;
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
    <>
      <div className="relative z-[9999] flex gap-8 pb-8">
        <div className="grid w-full grid-cols-1 gap-3">
          {headerSubList?.[0]?.links.map((link:any, index:any) => (
            <button
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
            >
              <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit text-start group-hover:!text-white">
                {link.linkTxt}
              </span>
              <p className="font-inter text-lightBlack mt-2.5 text-sm">
                {link.sub_title}
              </p>
            </button>
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
        </div>
      </div>
      <div className="font-inter bg-doctor2 sticky bottom-0 left-0 w-full">
        <Link className="all-features-button group" href="/">
          {headerSubList?.[0]?.links?.[headerSubList?.[0]?.links?.length-1]?.bottomLinks?.[0]?.urlText}
          <ArrowIcon />
        </Link>
      </div>
    </>
  );
};

export default WhyContractorDropdown;
