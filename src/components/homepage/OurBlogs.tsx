"use client";
import { useTranslations } from "next-intl";
import CardReveal from "../common/CardReveal";
import { BlogBtnIcon } from "../common/Icons";
import SliderLayout from "../common/SliderLayout";
import TextAnimation from "../common/TextAnimation";
import Image from "next/image";
import OurBlogCard from "./OurBlogCard";

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
    <section className=" pt-[18px] pb-[38px] md:pt-12 md:pb-[82px] px-4 bg-white relative z-10">
      <div className="max-w-[1294px] w-full mx-auto">
        <div className="hidden lg:flex flex-col md:flex-row justify-between items-center mb-6">
          <CardReveal
            staggerDelay={3}
            animationDuration={0.8}
            distance={50}
            animateOnScroll={true}
          >
            <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta gradient-text-2">
              {blogHeading?.[0]?.title}
            </h2>
          </CardReveal>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              {blogHeading?.[1]?.btnTxt}
              <BlogBtnIcon />
            </button>
          </div>
        </div>
        <div className="lg:hidden flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
          <h2 className="text-[26px] md:text-[35px] lg:text-[42px] font-semibold text-black font-jakarta gradient-text-2 text-center md:text-start">
            {blogHeading?.[0]?.title}
          </h2>
          <div className="hidden md:block">
            <button className="bg-red-linear h-10 primary-btn gap-2">
              {blogHeading?.[1]?.btnTxt}
              <BlogBtnIcon />
            </button>
          </div>
        </div>

        <CardReveal
          staggerDelay={0.15}
          animationDuration={0.8}
          distance={50}
          className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  gap-x-2 xl:gap-7 place-items-center"
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

        <div className="sm:hidden block">
          <SliderLayout
            autoplay
            pagination
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              520: { slidesPerView: 1.5, spaceBetween: 14 },
              640: { slidesPerView: 2, spaceBetween: 14 },
              768: { slidesPerView: 2.6, spaceBetween: 16 },
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
        <div className="flex justify-center md:hidden pt-4">
          <button className="bg-red-linear h-10 primary-btn gap-2">
            {blogHeading?.[1]?.btnTxt}
            <BlogBtnIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
