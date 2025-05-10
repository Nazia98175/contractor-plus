import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const ResourcesDropdown = () => {
  // Get translations from the "resources" namespace
  const t = useTranslations("resources");

  // Get the resources links list from translations
  const resourcesLinks = t.raw("links") as {
    label: string;
    href: string;
  }[];

  return (
    <article className="flex justify-between p-2 gap-6">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 w-full">
        {resourcesLinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-200 ease-linear p-[6px]"
            key={index}
          >
            <Link
              href={link.href}
              className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white"
            >
              {link.label}
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
    </article>
  );
};

export default ResourcesDropdown;
