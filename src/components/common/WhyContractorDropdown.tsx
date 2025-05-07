import Link from "next/link";
import React from "react";
import { ArrowIcon } from "./Icons";
import { WhyContractorDropdownlinks } from "./Helper";
import Image from "next/image";

const WhyContractorDropdown = () => {
  return (
    <article className="flex flex-col justify-between p-2 gap-6 grow ">
      <div className="flex items-start">
        <ul className="grid  gap-x-6 gap-y-3 w-full overflow-auto">
          {WhyContractorDropdownlinks.map((link, index) => (
            <li
              className="group hover:bg-superSilver duration-300 ease-linear p-[6px]"
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
          alt="group-eng"
          unoptimized
          width={420}
          height={290}
        />
      </div>
      <div className="flex items-center justify-between gap-6 p-[6px]">
        <Link
          className="flex items-center gap-2.5 text-xl font-medium text-lightBlack p-1"
          href={"/"}
        >
          See All Features
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
};

export default WhyContractorDropdown;
