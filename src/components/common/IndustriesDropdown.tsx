import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IndustriesDropdownLinks } from "./Helper";

const IndustriesDropdown = () => {
  return (
    <article className="flex items-start justify-between p-2 gap-6">
      <ul className="grid grid-cols-4 gap-x-6 gap-y-3 w-full">
        {IndustriesDropdownLinks.map((link, index) => (
          <li
            className="group hover:bg-superSilver duration-300 ease-linear p-[6px]"
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
        src={"/images/webp/group-eng.webp"}
        alt="group-eng"
        unoptimized
        width={420}
        height={290}
      />
    </article>
  );
};

export default IndustriesDropdown;
