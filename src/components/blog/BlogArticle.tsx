"use client";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { articles } from "../common/Helper";
import BlogCard from "./BlogCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
const BlogArticle = () => {
  const pagination = {
    el: ".swiper-pagination-number",
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };
  return (
    <div className="relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pb-6 sm:mt-10 lg:mt-12 xl:mt-14">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold lg:pb-6 xl:pb-8">
        Most popular articles
      </h2>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        speed={500}
        grid={{
          rows: 2,
          fill: "row",
        }}
        spaceBetween={32}
        navigation={{
          nextEl: ".swiper-button-next2",
          prevEl: ".swiper-button-prev2",
        }}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: { rows: 1, fill: "row" },
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            grid: { rows: 1, fill: "row" },
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: { rows: 2, fill: "row" },
            spaceBetween: 20,
          },

          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: { rows: 6, fill: "row" },
            spaceBetween: 32,
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <BlogCard article={article} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mt-6 flex w-full items-center justify-center gap-3 border-t border-[#eaecf0] pt-5 md:justify-between">
        <div className="text-flintstone swiper-button-prev2 flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden">
          <ArrowLeft height={20} width={20} color="#667085" /> Previous
        </div>
        <div className="swiper-pagination-number relative flex items-center justify-center gap-1 after:!opacity-0" />
        <div className="text-flintstone swiper-button-next2 flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden">
          Next <ArrowRight height={20} width={20} color="#667085" />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
