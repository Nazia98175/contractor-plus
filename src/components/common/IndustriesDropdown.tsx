"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
interface Props {
  headerSubList: any;
}

const IndustriesDropdown:React.FC<Props> = ({headerSubList}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);
  const t = useTranslations("industries");

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
console.log(headerSubList , "wwwwww")
  return (
    <div className="relative z-[9999] flex grow gap-6 overflow-hidden">
      <div className="no-scrollbar grid w-full grid-cols-4 gap-3 overflow-auto">
        {headerSubList?.[0]?.links?.map((link:any, index:any) => (
          <button
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            key={index}
            className="group hover:bg-superSilver w-full cursor-pointer list-none p-[6px] text-start"
          >
            <span className="header-li-dropdown group-hover:!bg-lightBlack flex w-fit px-1 text-start group-hover:!text-white">
              {link.linkTxt}
            </span>
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-[420px] overflow-hidden">
        {resourceItems.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={industriesLinks[index]?.label || "Industry preview"}
            unoptimized
            width={480}
            height={290}
            className={`absolute inset-0 h-full max-h-[290px] w-full rounded-md object-cover transition-opacity duration-300 ${
              hoveredIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          />
        ))}
        <Image
          src={fallbackImage}
          alt="Select an industry"
          unoptimized
          width={480}
          height={290}
          className={`absolute inset-0 h-full max-h-[290px] w-full rounded-md object-cover transition-opacity duration-300 ${
            hoveredIndex === null ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

export default IndustriesDropdown;
