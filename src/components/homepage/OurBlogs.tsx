"use client";
import Link from "next/link";
import Button from "../common/Button";
import { BlogBtnIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import OurBlogCard from "./OurBlogCard";
import Copy from "../common/Copy";

interface Blogs {
  blogTitle: string;
  blogDescription: string;
  blogUrl: string;
}
interface BlogHeading {
  title: string;
  btnTxt: string;
  url: string;
  btnUrl: string;
}

interface TheBlogProps {
  blogs: Blogs[];
  blogHeading: BlogHeading;
}

const OurBlogs: React.FC<TheBlogProps> = ({ blogs, blogHeading }) => {
  const blogListMobile = [
    {
      id: 1,
      title: "Contractor+ Blog",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-1.webp",
      imageWidth: "266px",
      backgroundImage: "/images/svg/blog-1.svg",
    },
    {
      id: 2,
      title: "Podcasts",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-2.webp",
      imageWidth: "315px",
      backgroundImage: "/images/svg/blog-2.svg",
    },
    {
      id: 3,
      title: "FREE Tools & Templates",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "305px",
      backgroundImage: "/images/svg/blog-3.svg",
    },
    {
      id: 4,
      title: "FREE Tools & Templates",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "305px",
      backgroundImage: "/images/svg/blog-3.svg",
    },
    {
      id: 5,
      title: "FREE Tools & Templates",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "305px",
      backgroundImage: "/images/svg/blog-3.svg",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-white px-2 pt-[18px] pb-[38px] md:pt-12 md:pb-[82px]">
      <div className="mx-auto w-full">
        <div className="mb-6 hidden flex-col items-center justify-between md:flex-row lg:flex">
          <Copy delay={0.3}>
            <h2 className="gradient-text-2 text-[26px] font-semibold text-black md:text-[35px] lg:text-[42px]">
              {blogHeading?.title}
            </h2>
          </Copy>
          <Link href={blogHeading?.btnUrl} className="hidden md:block">
            <Button className="bg-red-linear primary-btn h-10 gap-2">
              {blogHeading?.btnTxt}
              <BlogBtnIcon />
            </Button>
          </Link>
        </div>
        <div className="mb-6 flex flex-col items-center justify-between md:mb-8 md:flex-row lg:hidden">
          <h2 className="gradient-text-2 text-center text-[26px] font-semibold text-black md:text-start md:text-[35px] lg:text-[42px]">
            {blogHeading?.title}
          </h2>
          <div className="hidden md:block">
            <Button className="bg-red-linear primary-btn h-10 gap-2">
              {blogHeading?.btnTxt}
              <BlogBtnIcon />
            </Button>
          </div>
        </div>
        {/* 
        <CardReveal
          distance={50}
          className="hidden grid-cols-1 place-items-center gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid xl:gap-7"
        >
          {blogs.map((article, index) => (
            <OurBlogCard
              article={article}
              key={index}
              blogListMobile={blogListMobile}
              index={index}
            />
          ))}
        </CardReveal> */}
        <div className="blog-post">
          <SliderLayout
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              900: { slidesPerView: 2.3, spaceBetween: 16 },
              1024: { slidesPerView: 5, spaceBetween: 16 },
            }}
          >
            {blogs.map((article, index) => (
              <OurBlogCard
                article={article}
                key={index}
                blogListMobile={blogListMobile}
                index={index}
              />
            ))}
          </SliderLayout>
        </div>
        <Link
          href={blogHeading.btnUrl}
          className="flex justify-center pt-4 md:hidden"
        >
          <Button className="bg-red-linear primary-btn h-10 gap-2">
            {blogHeading?.btnTxt}
            <BlogBtnIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default OurBlogs;
