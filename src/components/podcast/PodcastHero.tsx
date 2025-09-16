import Image from "next/image";
import Copy from "../common/Copy";
import { YouTubeIcon2 } from "../common/Icons";
import { PodcastData } from "@/types";
import { FC } from "react";
import Link from "next/link";

const PodcastHero: FC<{ data: PodcastData }> = ({ data }) => {
  return (
    <section className="relative mx-auto w-full max-w-[1312px] px-2">
      <Copy delay={0.2}>
        <h4 className="sm:bg-darkKnight text-secondary sm:text-wallStreet mx-auto w-fit rounded-md px-3 py-1 text-sm font-semibold tracking-[-0.24px] backdrop-blur-lg sm:text-xs">
          {data?.podcastTag ?? ""}
        </h4>
      </Copy>
      <Copy delay={0}>
        <h2 className="main-heading gradient-white mb-4 text-center !font-medium text-transparent">
          {data?.title ?? ""}
        </h2>
      </Copy>
      <Copy delay={0.4}>
        <p className="hero-description !text-trolleyGrey my-[26px] text-center">
          {data?.subTitle ?? ""}
        </p>
      </Copy>
      <Link
        href={data?.ctaUrl ?? "/#"}
        className="bg-red-linear primary-btn mx-auto flex h-10 !w-full max-w-[265px] items-center gap-1.5"
        type="button"
      >
        {data?.ctaText} <YouTubeIcon2 />
      </Link>
      <div className="relative mx-auto mb-[-100px] hidden w-full max-w-[1316px] sm:-mb-[160px] sm:block lg:-mb-[200px]">
        <Image
          src={data?.image?.url ?? "/images/webp/trader-group.webp"}
          width={1050}
          height={579}
          alt="trader-group"
          className="relative mx-auto max-h-[831px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default PodcastHero;
