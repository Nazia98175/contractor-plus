"use client";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import { BlogBtnIcon, ContractorPlusIcon } from "../common/Icons";
import TextAnimation from "../common/TextAnimation";
import { useState } from "react";

const OurBlogs = () => {
  const t = useTranslations("blogs");
  const blogList = t.raw("blogList") as {
    id: number;
    title: string;
    date: string;
    category: string;
    description: string;
    image: string;
  }[];

  // Get featured blog data
  const featuredBlog = t.raw("featuredBlog") as {
    category: string;
    timeAgo: string;
    title: string;
    description: string;
    image: string;
  };
  const blogListMobile = [
    {
      id: "01",
      title: "Contractor+ Blog",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-1.webp",
      imageWidth: "266px",
      backgroundImage: "/images/svg/blog-1.svg",
    },
    {
      id: "02",
      title: "Podcasts",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-2.webp",
      imageWidth: "315px",
      backgroundImage: "/images/svg/blog-2.svg",
    },
    {
      id: "03",
      title: "FREE Tools & Templates",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "305px",
      // hasBlurEffect: true,
      backgroundImage: "/images/svg/blog-3.svg",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white relative z-10">
      <div className="max-w-[1294px] w-full mx-auto">
        <div className="hidden  lg:flex flex-col md:flex-row justify-between items-center mb-6">
          <TextAnimation animateOnScroll={true} delay={0.3}>
            <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta">
              {t("heading")}
            </h2>
          </TextAnimation>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              {t("viewAllBlogs")}
              <BlogBtnIcon />
            </button>
          </div>
        </div>
        <div className="lg:hidden flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta">
            {t("heading")}
          </h2>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              {t("viewAllBlogs")}
              <BlogBtnIcon />
            </button>
          </div>
        </div>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  gap-x-2 xl:gap-7 place-items-center"
        >
          {blogListMobile.map((article) => (
            <article
              key={article.id}
              className="xl:pt-10 h-fit md:h-[400px] overflow-hidden w-full max-w-[406px] relative"
            >
              <img
                className="absolute top-16 right-0 w-full"
                style={{ maxWidth: article.imageWidth, objectFit: "contain" }}
                src={article.imageSrc}
                alt="blog images"
              />
              <div className="py-6 relative overflow-hidden flex flex-col justify-between w-[207px] h-[207px]">
                <img
                  className="absolute top-0 -left-1 w-full h-full z-10 pointer-events-none object-contain"
                  src="images/svg/blog-bg.svg"
                  alt="blog angle"
                />
                <img
                  src={article.backgroundImage}
                  alt={article.title}
                  className="absolute h-full max-h-[160px] w-fit object-cover left-0 bottom-0 z-10"
                />
              </div>
              <div className="relative py-6 px-4 w-[346px] mt-2">
                <img
                  className="absolute top-0 left-0 h-full w-full z-0"
                  src="/images/webp/blog-angle2.webp"
                  alt="blog angle"
                />
                <h3 className="text-base relative z-10 md:text-lg text-winterWay font-extrabold pb-1 font-jakarta">
                  {article.title}
                </h3>
                <p className="text-secondary relative z-10 font-medium text-xs max-w-[255px] font-jakarta">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </CardReveal>

        <div className="flex justify-center md:hidden pt-4">
          <button className="bg-red-linear h-10 primary-btn gap-2">
            {t("viewAllBlogs")}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
