import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndustriesDropdown = () => {
  const links = [
    { label: "General Contractor", href: "/" },
    { label: "Plumbing", href: "/" },
    { label: "Construction", href: "/" },
    { label: "HVAC", href: "/" },
    { label: "Remodeling", href: "/" },
    { label: "Painting", href: "/" },
    { label: "Roofing", href: "/" },
    { label: "Junk Removal", href: "/" },
    { label: "Locksmith", href: "/" },
    { label: "Tiling", href: "/" },
    { label: "Drywall", href: "/" },
    { label: "Mechanical", href: "/" },
    { label: "Cleaning", href: "/" },
    { label: "Restoration", href: "/" },
    { label: "Electrician", href: "/" },
    { label: "Fence", href: "/" },
    { label: "Flooring", href: "/" },
    { label: "Pest Control", href: "/" },
    { label: "Pool & Spa", href: "/" },
    { label: "Tree Care", href: "/" },
    { label: "Landscaping", href: "/" },
    { label: "Snow Removal", href: "/" },
    { label: "Lawn Care", href: "/" },
    { label: "Paving", href: "/" },
    { label: "Solar", href: "/" },
    { label: "Janitorial", href: "/" },
    { label: "Irrigation", href: "/" },
    { label: "Pressure Washing", href: "/" },
    { label: "Property Maintenance", href: "/" },
    { label: "Window Cleaning", href: "/" },
    { label: "Carpentry", href: "/" },
    { label: "Carpet Cleaning", href: "/" },
    { label: "Chimney Sweeping", href: "/" },
    { label: "Elevator", href: "/" },
    { label: "Excavation", href: "/" },
    { label: "Garage Door", href: "/" },
    { label: "Handyman", href: "/" },
    { label: "Septic & Pump", href: "/" },
    { label: "Small Engine Repair", href: "/" },
  ];
  return (
    <article className="flex items-start justify-between p-2">
      <ul className="grid grid-cols-4 gap-[34px]">
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
