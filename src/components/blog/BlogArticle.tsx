"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import type SwiperCore from "swiper";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { articles } from "../common/Helper";
import BlogCard from "./BlogCard";
import { handleClickProps } from "@/types";

const BlogArticle: React.FC<handleClickProps> = ({ handleClick }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const slidesPerGroup = 1;
  const totalPages = Math.ceil(articles.length / slidesPerGroup);

  const handlePageClick = (page: number) => {
    swiperRef.current?.slideTo(page * slidesPerGroup);
  };

  const renderPagination = () => {
    const pages = [];

    // If total pages are 3 or less, show simple pagination
    if (totalPages <= 3) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(
          <span
            key={i}
            onClick={() => handlePageClick(i)}
            className={`cursor-pointer px-1 ${
              currentPage === i ? "font-bold text-black" : "text-gray-500"
            }`}
          >
            {i + 1}
          </span>,
        );
      }
      return pages;
    }

    // First page
    pages.push(
      <span
        key={0}
        onClick={() => handlePageClick(0)}
        className={`cursor-pointer px-1 ${
          currentPage === 0 ? "font-bold text-black" : "text-gray-500"
        }`}
      >
        1
      </span>,
    );

    // Left dots
    if (currentPage > 3) {
      pages.push(<span key="left-dots">...</span>);
    }

    // Middle pages
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages - 2, currentPage + 1);
      i++
    ) {
      pages.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          className={`cursor-pointer px-1 ${
            currentPage === i ? "font-bold text-black" : "text-gray-500"
          }`}
        >
          {i + 1}
        </span>,
      );
    }

    // Right dots
    if (currentPage < totalPages - 4) {
      pages.push(<span key="right-dots">...</span>);
    }

    // Last page
    pages.push(
      <span
        key={totalPages - 1}
        onClick={() => handlePageClick(totalPages - 1)}
        className={`cursor-pointer px-1 ${
          currentPage === totalPages - 1
            ? "font-bold text-black"
            : "text-gray-500"
        }`}
      >
        {totalPages}
      </span>,
    );

    return pages;
  };

  return (
    <div className="relative z-20 mx-auto mt-8 w-full max-w-[1224px] px-2 pb-6 sm:mt-10 lg:mt-12 xl:mt-14">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold lg:pb-6 xl:pb-8">
        Most popular articles
      </h2>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) =>
          setCurrentPage(Math.floor(swiper.activeIndex / slidesPerGroup))
        }
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
        modules={[Grid, Navigation]}
        className="mySwiper"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <BlogCard
              article={article}
              onClick={() => handleClick(article.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative mt-6 flex w-full items-center justify-center gap-3 border-t border-[#eaecf0] pt-5 md:justify-between">
        <div className="text-flintstone swiper-button-prev2 flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden">
          <ArrowLeft height={20} width={20} color="#667085" /> Previous
        </div>
        <div className="relative flex items-center justify-center gap-1">
          {renderPagination()}
        </div>
        <div className="text-flintstone swiper-button-next2 flex cursor-pointer items-center gap-2 text-sm font-medium after:hidden">
          Next <ArrowRight height={20} width={20} color="#667085" />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
