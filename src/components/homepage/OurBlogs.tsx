import Image from "next/image";
import React from "react";
import { BlogBtnIcon } from "../common/Icons";
import { useTranslations } from "next-intl";

const OurBlogs = () => {
  // Get translations from the "blogs" namespace
  const t = useTranslations("blogs");

  // Get the blog list from translations
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

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-[1180px] w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
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

        <div className="flex flex-col-reverse xl:flex-row justify-between items-stretch gap-4">
          {/* Left column */}
          <div className="max-w-[600px] mx-auto xl:mx-0 xl:max-w-[450px] w-full flex flex-col gap-4">
            {blogList.map((blog) => (
              <article key={blog.id} className="relative w-full">
                <div
                  className={`${
                    blog.id === 2
                      ? "bg-transparent gradient-border"
                      : "bg-doctor2"
                  } flex flex-col sm:flex-row items-start gap-4 rounded-xl p-2 z-20 relative w-full`}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={170}
                    height={170}
                    className="rounded-md sm:max-w-[170px] w-full"
                  />
                  <div className="flex-1 text-sm">
                    <p className="text-[10px] font-medium font-jakarta text-secondary">
                      {blog.category} | {blog.date}
                    </p>
                    <h3 className="text-base font-jakarta font-medium text-winterWay">
                      {blog.title}
                    </h3>
                    <p className="truncate text-xs text-wallStreet max-w-[240px] pt-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right column (Featured Blog) */}
          <div className="w-full xl:max-w-[700px] relative flex flex-col justify-end pb-6">
            <Image
              height={700}
              width={700}
              unoptimized
              src={featuredBlog.image}
              alt={t("featuredBlogAlt")}
              className="rounded-xl object-cover w-full absolute top-0 h-full"
            />
            <div className="px-6 pt-20 relative z-10">
              <p className="text-base font-medium text-decemberSky font-jakarta">
                {featuredBlog.category} | {featuredBlog.timeAgo}
              </p>
              <h3 className="hidden sm:block text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                {featuredBlog.title}
              </h3>
              <h3 className="block sm:hidden text-2xl sm:text-[30px] md:text-[36px] font-extrabold font-jakarta capitalize text-white">
                {featuredBlog.title.substring(0, 30)}...
              </h3>
              <p className="text-superSilver text-base font-jakarta mt-2 w-[250px] sm:w-full truncate block md:hidden">
                {featuredBlog.description}
              </p>
              <p className="text-superSilver text-base font-jakarta mt-2 hidden md:block">
                {featuredBlog.description}
              </p>
            </div>
          </div>
        </div>
        <div className="block md:hidden pt-4">
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
