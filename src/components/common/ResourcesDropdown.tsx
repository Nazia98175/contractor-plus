import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResourcesDropdown = () => {
  const links = [
    { label: "Contractor+ Blog", href: "/" },
    { label: "Industry Events", href: "/" },
    { label: "Hard Hat Chat", href: "/" },
    { label: "Mindset Monday", href: "/" },
    { label: "Supply Partner Program", href: "/" },
    { label: "The Owners Perspective", href: "/" },
    { label: "Features Roadmap", href: "/" },
    { label: "Free Tools & Templates", href: "/" },
    { label: "Support Center", href: "/" },
    { label: "Regional Labor Pricing", href: "/" },
    { label: "Regional Material Pricing", href: "/" },
  ];
  return (
    <article className="flex  justify-between p-2 gap-6">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-3 w-full">
        {links.map((link, index) => (
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
        src={"/images/webp/resources-dropdown-img.webp"}
        alt="group-eng"
        unoptimized
        width={420}
        height={290}
      />
    </article>
  );
};

export default ResourcesDropdown;
