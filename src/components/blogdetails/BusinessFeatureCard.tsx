import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CheckIcon, FooterLogoIcon } from "../common/Icons";

const businessBenefits = [
  "Effortlessly Manage Your Business",
  "Team Collaboration",
  "Simple Scheduling",
  "Estimating & Invoicing",
  "Access from PC, Android and iOS!",
];
const BusinessFeatureCard = () => {
  return (
    <article className="flex w-full flex-col justify-center rounded-xl bg-[url('/images/webp/table-content-bg.webp')] bg-cover px-6 pt-[42px] pb-[30px]">
      <span className="relative mx-auto max-w-[168px]">
        <span className="absolute left-0 blur-[20px]">
          <FooterLogoIcon />
        </span>
        <FooterLogoIcon />
      </span>
      <ul className="mt-10 space-y-3 px-2.5 text-white">
        {businessBenefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2.5 text-xs">
            <CheckIcon />
            {benefit}
          </li>
        ))}
      </ul>

      <button className="font-myriad mt-5 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-[linear-gradient(262deg,_#DC1112_-10.83%,_#76090A_83.23%)] px-3 font-extrabold tracking-[0.1px] whitespace-nowrap text-white italic duration-300 hover:scale-95">
        Get started FREE
      </button>

      <Link
        href=""
        className="hover:bg-kuroiBlack/50 mt-2.5 flex h-[42px] w-full items-center justify-center rounded-md border border-[#FFCBCD] backdrop-blur-[9px] duration-300 hover:border-transparent"
      >
        <Image
          src="/images/svg/play-google.svg"
          alt="google icon"
          width={112}
          height={26}
          sizes="(max-width: 768px) 100px, 144px"
          priority
        />
      </Link>

      <Link
        href=""
        className="hover:bg-kuroiBlack/50 mt-2.5 flex h-[42px] w-full items-center justify-center rounded-md border border-[#FFCBCD] backdrop-blur-[9px] duration-300 hover:border-transparent"
      >
        <Image
          src="/images/svg/Apple-Icon.svg"
          alt="google icon"
          width={112}
          height={26}
          sizes="(max-width: 768px) 100px, 144px"
          priority
        />
      </Link>
    </article>
  );
};

export default BusinessFeatureCard;
