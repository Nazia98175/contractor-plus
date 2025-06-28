"use client";
import { useEffect, useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { latestContractorData } from "../common/Helper";
import BlogCard from "./BlogCard";
import SwiperNavWithPagination from "./SwiperNavWithPagination";

const LatestFromContractor = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Flatten Data for mobile
  const allArticles = latestContractorData.flatMap((group) => [
    { ...group, variant: "large" as "large" },
    ...group.second.map((item) => ({ ...item, variant: "small" as "small" })),
  ]);

  return (
    <section className="custom-pagination relative z-20 mx-auto w-full max-w-[1224px] px-2 pt-8">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold xl:pb-6">
        Latest from Contractor+ HQ
      </h2>
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next3",
          prevEl: ".swiper-button-prev3",
        }}
        pagination={{
          el: ".swiper-pagination-real-time-3",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
      >
        {isMobile
          ? allArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <BlogCard article={article} variant={article.variant} />
              </SwiperSlide>
            ))
          : latestContractorData.map((group) => (
              <SwiperSlide
                key={group.id}
                className="!grid w-full gap-5 lg:!grid-cols-2 xl:gap-8"
              >
                <div className="hidden lg:block">
                  <BlogCard article={group} variant="large" />
                </div>
                <div className="flex h-full w-full flex-col gap-6 sm:flex-row lg:w-fit lg:flex-col">
                  {group.second.map((article) => (
                    <BlogCard
                      key={article.id}
                      article={article}
                      variant="small"
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
      </Swiper>

      <SwiperNavWithPagination
        prevClass="swiper-button-prev3"
        nextClass="swiper-button-next3"
        paginationClass="swiper-pagination-real-time-3"
      />
    </section>
  );
};

export default LatestFromContractor;
