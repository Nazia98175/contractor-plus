"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const WhyContractorDropdown = () => {
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
    <div className="flex gap-8 relative z-[9999] ">
      <div className="grid grid-cols-1 gap-3 w-full ">
        {industriesLinks.map((link, index) => (
          <button
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
            className="group w-full hover:bg-superSilver text-start cursor-pointer list-none p-[6px]"
          >
            <span className="header-li-dropdown group-hover:!bg-lightBlack group-hover:!text-white text-start flex w-fit">
              {link.label}
            </span>
            <p className="text-sm font-inter text-lightBlack mt-2.5">
              {link.description}
            </p>
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[480px] rounded-md overflow-hidden ">
        {resourceItems.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={industriesLinks[index]?.label || "Industry preview"}
            unoptimized
            width={480}
            height={320}
            className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 ${
              hoveredIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <Image
          src={fallbackImage}
          alt="Select an industry"
          unoptimized
          width={480}
          height={320}
          className={`absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 ${
            hoveredIndex === null ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      </div>
    </div>
  );
};

export default WhyContractorDropdown;
