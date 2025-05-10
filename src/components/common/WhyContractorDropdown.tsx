import Link from "next/link";
import React from "react";
import { ArrowIcon } from "./Icons";
import Image from "next/image";
import { useTranslations } from "next-intl";

const WhyContractorDropdown = () => {
  // Get translations from the "whyContractor" namespace
  const t = useTranslations("whyContractor");

  // Get the links list from translations
  // This assumes your JSON structure has a "links" array with label, description, and href properties
  const whyContractorLinks = t.raw("links") as {
    label: string;
    description: string;
    href: string;
  }[];

  return (
    <article className="flex flex-col justify-between p-2 gap-6">
      <div className="flex items-start">
        <ul className="grid gap-x-6 gap-y-3 w-full overflow-auto">
          {whyContractorLinks.map((link, index) => (
            <li
              className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
              key={index}
            >
              <Link
                href={link.href}
                className="group group-hover:bg-lightBlack group-hover:!text-white"
              >
                <span className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white">
                  {link.label}
                </span>
                <p className="text-sm font-inter text-lightBlack mt-2.5">
                  {link.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Image
          className="object-contain max-w-[420px] w-full"
          src={"/images/webp/resources-dropdown-img.webp"}
          alt={t("imageAlt") || "group-eng"}
          unoptimized
          width={420}
          height={290}
        />
      </div>
      <div className="flex items-center justify-between gap-6 p-[6px]">
        <Link className="all-features-button group" href={"/"}>
          {t("seeAllFeatures")}
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
};

export default WhyContractorDropdown;
