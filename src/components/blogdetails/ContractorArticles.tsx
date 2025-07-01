"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../blog/BlogCard";
import SwiperNavWithPagination from "../blog/SwiperNavWithPagination";
import { contractorArticles } from "../common/Helper";
import { CardArrowIcon } from "../common/MainIcon";
import CloudsAnimation from "../common/CloudsAnimation";

const ContractorArticles = () => {
  return (
    <div className="relative bg-white">
      <div className="pointer-events-none absolute -top-[5%] left-0 -z-0 hidden h-24 w-full bg-white blur-[12px] lg:block"></div>
      <div className="pointer-events-none absolute -top-[13%] left-0 z-20 hidden h-[160px] w-full lg:block">
        <CloudsAnimation
          cloud1Class="top-0"
          cloud2Class="top-[57px] sm:top-[50px] md:top-[55px] lg:top-0"
        />
      </div>

      <div className="relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pt-8 pb-6">
        <div className="flex items-center justify-between pb-4">
          <h2 className="text-eerieBlack text-xl font-semibold md:text-2xl lg:pb-6 xl:pb-8">
            Related articles from Contractor+ HQ
          </h2>
          <button className="group hidden items-center gap-1 text-sm font-medium sm:flex">
            View All
            <span>
              <CardArrowIcon className="stroke-eerieBlack h-6 w-6 max-w-6 min-w-6 transition-all duration-200 ease-in group-hover:translate-x-1.5" />
            </span>
          </button>
        </div>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          speed={500}
          navigation={{
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
          }}
          pagination={{
            el: ".swiper-pagination-real-time-1",
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={32}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,

              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,

              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,

              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 3,

              spaceBetween: 32,
            },
          }}
        >
          {contractorArticles.map((article, index) => (
            <SwiperSlide key={index}>
              <BlogCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SwiperNavWithPagination
          prevClass="swiper-button-prev1"
          nextClass="swiper-button-next1"
          paginationClass="swiper-pagination-real-time-1"
        />
      </div>
    </div>
  );
};

export default ContractorArticles;
