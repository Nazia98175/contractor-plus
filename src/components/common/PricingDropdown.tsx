import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const PricingDropdown = () => {
  const t = useTranslations("pricing");
  const pricingLinks = t.raw("links") as {
    label: string;
    href: string;
  }[];

  return (
    <article className="flex grow flex-col justify-between gap-6 p-2">
      <ul className="grid w-full grid-cols-3 gap-x-6 gap-y-3 overflow-auto">
        {pricingLinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver p-[6px] duration-200 ease-linear"
            key={index}
          >
            <Link
              href={link.href}
              className="group group-hover:bg-lightBlack group-hover:!text-white"
            >
              <span className="header-li-dropdown group-hover:bg-lightBlack group-hover:!text-white">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingDropdown;
