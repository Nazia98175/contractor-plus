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
    <article className="flex flex-col justify-between p-2 gap-6 grow">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-3 w-full overflow-auto">
        {pricingLinks.map((link, index) => (
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
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingDropdown;
