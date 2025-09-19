"use client";
import { formatDateWithOrdinal } from "@/lib/date";
import { tagColors } from "@/utils/getVariants";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
const defaultColor = { bg: "bg-gray-500", text: "text-white" };

const BlogDetailHero = ({ blogData }: { blogData: any }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      gsap.to("#home-page-view-port-screen-blog", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-header-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
      gsap.to("#home-page-footer-view-port-screen", {
        opacity: 1,
        duration: 1,
      });
    }, 700);
  }, []);
  return (
    <section className="relative h-full bg-[url('/images/webp/blog-hero-detail-bg.webp')] bg-cover bg-center pt-24 lg:pt-[119px] 2xl:pt-[150px]">
      <div className="main-container h-full">
        <article
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
              blogData?.blogImg
                ? blogData?.blogImg[0]?.url
                : "/images/webp/blog-detail-hero.webp"
            })`,
          }}
          className="blog-detail-hero-shadow max-h-[560px]w-full flex h-full min-h-[500px] flex-col justify-start gap-3 rounded-xl bg-cover bg-right p-4 py-10 text-white md:rounded-[20px] md:p-6 lg:max-h-[460px] lg:min-h-[460px] lg:justify-end lg:p-10 xl:bg-center xl:p-[42px]"
        >
          <h3 className="font-work max-w-[818px] text-2xl leading-tight font-semibold capitalize md:text-3xl md:text-[34px]">
            {blogData?.blogTitle ?? ""}
          </h3>
          <p className="text-stonewall text-sm font-medium capitalize sm:max-w-[80%] md:text-base">
            {blogData?.blogShortDescription ?? ""}
          </p>
          <div className="text-stonewall flex items-center gap-2.5 rounded-full text-sm font-medium md:text-base">
            <img
              src={`${blogData?.avatar ? blogData?.avatar?.url : "/images/webp/review-profile-7.webp"}`}
              className="ios-image min-h-[24px] max-w-[24px] min-w-[24px] rounded-full object-cover"
              alt={`Profile Photo of ${blogData?.authorName}`}
            />
            {blogData?.authorName ?? ""} •{" "}
            {formatDateWithOrdinal(blogData?.formatDateWithOrdinal)}
          </div>
          <div className="flex flex-wrap gap-2">
            {blogData?.tags?.length > 0 &&
              blogData.tags.map((tag: { id: number; text: string }) => {
                const colorSet = tagColors[tag.text] || defaultColor;
                return (
                  <span
                    key={tag.id}
                    className={`rounded-2xl px-2 py-0.5 text-sm font-medium capitalize ${colorSet.bg} ${colorSet.text}`}
                  >
                    {tag.text}
                  </span>
                );
              })}
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogDetailHero;
