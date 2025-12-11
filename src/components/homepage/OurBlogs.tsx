"use client";
import Link from "next/link";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../common/Button";
import Copy from "../common/Copy";
import { BlogBtnIcon } from "../common/Icons";
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
  btnUrl: string;
}

interface TheBlogProps {
  blogs: Blogs[];
  blogHeading: BlogHeading;
}

const OurBlogs: React.FC<TheBlogProps> = ({ blogHeading }) => {
  const blogListMobile = [
    {
      id: 1,
      title: "USA Labor Rate Index",
      description:
        "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya...",
      imageSrc: "/images/webp/blog-image-3.webp",
      imageWidth: "266px",
      backgroundImage: "/images/svg/blog-3.svg",
      blogUrl: "/resources/usa-labor-rate",
    },
    {
      id: 2,
      title: "Local Construction Costs",
      description:
        "Get accurate construction cost estimates for any project. Compare material and labor pricing across major US cities.",
      imageSrc: "/images/webp/local-construction.webp",
      imageWidth: "315px",
      backgroundImage: "/images/svg/bi_mic-fill_animated.svg",
      blogUrl: "/resources/construction-costs",
    },
    {
      id: 3,
      title: "Podcasts",
      description:
        "Listen to The Owners Perspective, Mindset Monday, and Hard Hat Chat.",
      imageSrc: "/images/webp/blog-image-2.webp",
      imageWidth: "305px",
      backgroundImage: "/images/svg/blog-2.svg",
      blogUrl: "/podcasts",
    },
    {
      id: 4,
      title: "Contractor+ HQ",
      description: "How-To Tutorials, Growth Tips, Industry News and more.",
      imageSrc: "/images/webp/blog-image-1.webp",
      imageWidth: "305px",
      backgroundImage: "/images/svg/blog-1.svg",
      blogUrl: "/blogs",
    },
  ];

  return (
    <section className="relative z-10 overflow-hidden bg-white pt-[18px] pb-[38px] md:pt-12 md:pb-[82px]">
      <div className="mx-auto w-full">
        <div className="main-container mb-6 hidden flex-col items-center justify-between px-2 md:flex-row lg:flex">
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
        <div className="main-container mb-6 flex flex-col items-center justify-between px-2 md:mb-8 md:flex-row lg:hidden">
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
        <div className="blog-post mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center gap-4">
          <Swiper
            modules={[Pagination, Mousewheel]}
            loop={false}
            pagination={{
              el: ".swiper-pagination-pricing",
              clickable: true,
              dynamicBullets: true,
            }}
            mousewheel={{ forceToAxis: true, sensitivity: 1 }}
            freeMode={true}
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 12 },
              400: { slidesPerView: 1.5, spaceBetween: 12 },
              520: { slidesPerView: 2, spaceBetween: 12 },
              768: { slidesPerView: 2.2, spaceBetween: 12 },
              800: { slidesPerView: 2.5, spaceBetween: 12 },
              900: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3.5, spaceBetween: 34 },
            }}
            className="h-full!"
          >
            {blogListMobile.map((article, index) => (
              <SwiperSlide
                key={index}
                className="card-shine relative mx-auto h-auto! overflow-hidden"
              >
                <OurBlogCard article={article} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-pricing swiper-pagination-real-time-4 relative left-0! flex translate-x-0! items-center justify-center gap-1" />
        </div>
        <div className="px-2 pt-4 md:hidden">
          <Link
            href={blogHeading.btnUrl}
            className="bg-red-linear primary-btn flex h-10 justify-center gap-2 px-2"
          >
            {blogHeading?.btnTxt}
            <BlogBtnIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
