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
const AdvertisementCard = ({
  blogsList,
}: {
  blogsList?: {
    bannerFeatures: { id: number; label?: string; text?: string }[];
  };
}) => {
  return (
    <article className="flex w-full flex-col justify-center rounded-xl bg-[url('/images/webp/table-content-bg.webp')] bg-cover px-4 pt-8 pb-6 md:pb-[30px] lg:px-6 lg:pt-[42px]">
      <span className="relative mx-auto max-w-[168px]">
        <span className="absolute left-0 blur-[20px]">
          <FooterLogoIcon />
        </span>
        <FooterLogoIcon />
      </span>
      <ul className="mt-10 space-y-3 px-2.5 text-white">
        {blogsList
          ? blogsList?.bannerFeatures?.length > 0
            ? blogsList?.bannerFeatures?.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex items-center gap-2.5 text-xs"
                >
                  <CheckIcon />
                  {benefit.label || benefit.text}
                </li>
              ))
            : // @ts-ignore
              blogsList?.map((benefit) => (
                <li
                  key={benefit.id}
                  className="flex items-center gap-2.5 text-xs"
                >
                  <CheckIcon />
                  {benefit.text}
                </li>
              ))
          : businessBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-xs">
                <CheckIcon />
                {benefit}
              </li>
            ))}
      </ul>

      <Link
        href="https://my.contractorplus.app/authentication/register?af_xp=custom&lang=en&source_caller=ui&pid=web_homepage_buttons&shortlink=homebuttons&deep_link_value=industries%2Fdrywall-contractor-software&c=web_homepages"
        className="font-myriad mt-5 flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-white px-3 font-extrabold tracking-[0.1px] whitespace-nowrap italic duration-300 hover:scale-95"
      >
        <span className="red-linear-bg mx-auto w-full text-center text-base">
          Get started FREE
        </span>
      </Link>

      <Link
        href="https://contractorplus.app/"
        className="hover:bg-kuroiBlack/50 border-jagdwurst mt-2.5 flex h-[42px] w-full items-center justify-center rounded-md border backdrop-blur-[9px] duration-300 hover:border-transparent"
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
        className="hover:bg-kuroiBlack/50 border-jagdwurst mt-2.5 flex h-[42px] w-full items-center justify-center rounded-md border backdrop-blur-[9px] duration-300 hover:border-transparent"
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

export default AdvertisementCard;
