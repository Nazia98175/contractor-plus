"use client";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import { BlogBtnIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import OurBlogCard from "./OurBlogCard";
import PrimaryAnimatedText from "../common/PrimaryAnimatedText";
import PrimaryLink from "../common/PrimaryLInk";

interface Blogs {
  blogTitle: string;
  blogDescription: string;
  blogUrl: string;
}
interface BlogHeading {
  title: string;
  btnTxt: string;
  url: string;
}

interface TheBlogProps {
  blogs: Blogs[];
  blogHeading: BlogHeading[];
}

const OurBlogs: React.FC<TheBlogProps> = ({ blogs, blogHeading }) => {
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
      // hasBlurEffect: true,
      backgroundImage: "/images/svg/blog-3.svg",
    },
  ];
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 pt-[18px] pb-[38px] md:pt-12 md:pb-[82px]">
      <div className="mx-auto w-full max-w-[1294px]">
        <div className="mb-6 hidden flex-col items-center justify-between md:flex-row lg:flex">
          <PrimaryAnimatedText delay={3000}>
            <h2 className="gradient-text-2 text-[26px] font-semibold text-black md:text-[35px] lg:text-[42px]">
              {blogHeading?.[0]?.title}
            </h2>
          </PrimaryAnimatedText>
          <div className="hidden md:block">
            <button className="bg-red-linear primary-btn h-10 gap-2">
              {blogHeading?.[1]?.btnTxt}
              <BlogBtnIcon />
            </button>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center justify-between md:mb-8 md:flex-row lg:hidden">
          <h2 className="gradient-text-2 text-center text-[26px] font-semibold text-black md:text-start md:text-[35px] lg:text-[42px]">
            {blogHeading?.[0]?.title}
          </h2>
          <div className="hidden md:block">
            <button className="bg-red-linear primary-btn h-10 gap-2">
              {blogHeading?.[1]?.btnTxt}
              <BlogBtnIcon />
            </button>
          </div>
        </div>

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
        </CardReveal>
        <div className="blog-post block xl:hidden">
          <SliderLayout
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 2, spaceBetween: 16 },
              900: { slidesPerView: 2.3, spaceBetween: 16 },
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
        <div className="flex justify-center pt-4 md:hidden">
          <button className="bg-red-linear primary-btn h-10 gap-2">
            {blogHeading?.[1]?.btnTxt}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
