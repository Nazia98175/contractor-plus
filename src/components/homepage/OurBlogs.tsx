import Image from "next/image";
import React from "react";
import { BlogBtnIcon, ContractorPlusIcon } from "../common/Icons";
import { useTranslations } from "next-intl";
import TextAnimation from "../common/TextAnimation";

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
  const blogListMobile = [
    {
      id: "01",
      title: "Contractor+ Blog",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      imageSrc: "/images/webp/blog-image-1.webp",
      imageWidth: "266px",
    },
    {
      id: "02",
      title: "Podcasts",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      imageSrc: "/images/webp/blog-image-2.webp",
      imageWidth: "226px",
    },
    {
      id: "03",
      title: "FREE Tools & Templates",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "200px",
      hasBlurEffect: true,
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-[1294px] w-full mx-auto">
        <div className="hidden  lg:flex flex-col md:flex-row justify-between items-center mb-6">
          <TextAnimation clipEffect={true} animateOnScroll={true} delay={0.3}>
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
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-7">
          {blogListMobile.map((article) => (
            <article key={article.id} className="py-10 h-[400px] relative">
              {article.hasBlurEffect && (
                <div className="absolute top-[40%] left-[40%] max-w-[100px] w-full h-[150px] rounded-[10px] bg-gray-400 blur-[45px] opacity-75 z-[-1] pointer-events-none"></div>
              )}
              <img
                className="absolute top-[91px] right-0 w-full max-w-[266px] "
                style={{ maxWidth: article.imageWidth }}
                src={article.imageSrc}
                alt="blog images"
              />
              <div className="py-6 relative flex flex-col justify-between w-[207px] h-[207px]">
                <img
                  className="absolute top-0 lef-0 w-full h-full z-0 pointer-events-none"
                  src="images/webp/blog-angle.webp"
                  alt="blog angle"
                />
                <h4 className="text-wallStreet text-xs font-bold px-4 pt-5 font-jakarta relative z-10">
                  +{article.id}
                </h4>
                <div className="px-4 relative z-10">
                  <p className="text-wallStreet text-[10px] font-bold pb-1 font-jakarta">
                    Free resources by
                  </p>
                  <ContractorPlusIcon />
                </div>
              </div>
              <div className="relative py-6 px-4 w-[346px] mt-2">
                <img
                  className="absolute top-0 left-0 h-full w-full z-[-1]"
                  src="/images/webp/blog-angle2.webp"
                  alt="blog angle"
                />
                <h3 className="text-base md:text-lg text-winterWay font-extrabold pb-1 font-jakarta">
                  {article.title}
                </h3>
                <p className="text-secondary font-medium text-xs max-w-[255px] font-jakarta">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="lg:hidden flex flex-col-reverse xl:flex-row justify-between items-stretch gap-4">
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
