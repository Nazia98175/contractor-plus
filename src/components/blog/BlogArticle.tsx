"use client";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { articles } from "../common/Helper";
import BlogCard from "./BlogCard";
import SwiperNavWithPagination from "./SwiperNavWithPagination";
const BlogArticle = () => {
  return (
    <div className="custom-pagination custom-pagination relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pb-6 sm:mt-10 lg:mt-12 xl:mt-14">
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
          el: ".swiper-pagination-real-time-4",
          clickable: true,
          dynamicMainBullets: 5,
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
      <SwiperNavWithPagination
        prevClass="swiper-button-prev2"
        nextClass="swiper-button-next2"
        paginationClass="swiper-pagination-real-time-4"
      />
    </div>
  );
};

export default BlogArticle;
