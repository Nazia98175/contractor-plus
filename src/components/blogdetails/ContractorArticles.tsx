"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../blog/BlogCard";
import SwiperNavWithPagination from "../blog/SwiperNavWithPagination";
import { CardArrowIcon } from "../common/MainIcon";
import CloudsAnimation from "../common/CloudsAnimation";
import Link from "next/link";
import { Blog, BlogsList } from "@/types";

const ContractorArticles = ({
  blogList,
  blogData,
}: {
  blogList?: BlogsList;
  blogData?: Blog[];
}) => {
  return (
    <div className="relative bg-white">
      <div className="pointer-events-none absolute -top-[5%] -left-5 z-30 h-28 w-[110%] bg-white blur-[12px] md:-top-[4%] md:h-[130px]"></div>
      <div className="pointer-events-none absolute -top-[11%] left-0 z-20 h-[110px] w-full blur-[6px] sm:-top-[12%] sm:blur-[4px] md:h-[160px]">
        <CloudsAnimation
          cloud1Class="top-0"
          cloud2Class="top-0 sm:top-[50px] md:top-[55px] lg:top-0"
        />
      </div>

      <div className="1xl:pb-12 relative z-30 mx-auto w-full max-w-[1224px] px-2 pt-8 pb-6">
        <div className="flex items-center justify-between pb-4 md:pb-6 lg:pb-8">
          <h2 className="text-eerieBlack text-lg font-semibold sm:text-xl md:text-2xl">
            {/* {blogList?.relatedBlogsTitle ?? ""} */}
            Check out other trending articles from Contractor+ HQ
          </h2>
          <Link
            href="/blogs"
            className="group hidden items-center gap-1 text-sm font-medium sm:flex"
          >
            {blogList?.viewAllBtn ?? ""}
            <span>
              <CardArrowIcon className="stroke-eerieBlack h-6 w-6 max-w-6 min-w-6 transition-all duration-200 ease-in group-hover:translate-x-1.5" />
            </span>
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          speed={600}
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
          {blogData &&
            blogData.length > 0 &&
            blogData.map((article) => (
              <SwiperSlide key={article.id}>
                <BlogCard article={article} />
              </SwiperSlide>
            ))}
        </Swiper>

        <SwiperNavWithPagination
          prevClass="swiper-button-prev1"
          nextClass="swiper-button-next1"
          paginationClass="swiper-pagination-real-time-1"
          nextText={blogList?.nextBtnText ?? ""}
          previousText={blogList?.previousBtnText ?? ""}
        />
      </div>
    </div>
  );
};

export default ContractorArticles;
