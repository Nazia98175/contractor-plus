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
    <article className="flex  justify-between p-2">
      <ul className="grid grid-cols-2 gap-[34px]">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-[#1C2731] text-base font-extrabold font-inter"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        className="object-cover"
        src={"/images/webp/group-eng.webp"}
        alt="group-eng"
        unoptimized
        width={420}
        height={290}
      />
    </article>
  );
};

export default ResourcesDropdown;
