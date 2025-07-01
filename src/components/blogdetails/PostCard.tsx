import Image from "next/image";
import React from "react";
import { LinkdinIcon, TwitterIcon, WikipediaIcon } from "../common/Icons";
import Link from "next/link";

const PostCard = () => {
  return (
    <article className="mx-auto flex max-w-[967px] flex-col gap-5 sm:flex-row">
      <Image
        src="/images/webp/review-profile-7.webp"
        alt=""
        width={90}
        height={90}
        className="h-[90px] w-[90] rounded-full"
      />
      <div className="space-y-2.5">
        <h5 className="font-inter md:ext-2xl text-xl font-medium tracking-[0.1px]">
          <span className="text-lightBlack">Justin Smith</span> -
          <span className="text-[#B4B4B4]"> CEO, Contractor+</span>
        </h5>
        <p className="text-wallStreet text-sm font-medium tracking-[0.1px] md:text-base">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
        <div className="flex items-center gap-2.5">
          <Link href="" className="block">
            <LinkdinIcon width={24} height={24} />
          </Link>
          <Link href="" className="block">
            <WikipediaIcon />
          </Link>
          <Link href="https://www.linkedin.com/">
            <TwitterIcon width={24} height={24} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
