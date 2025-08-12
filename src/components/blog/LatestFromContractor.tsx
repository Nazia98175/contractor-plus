"use client";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { latestContractorData } from "../common/Helper";
import BlogCard from "./BlogCard";
import SwiperNavWithPagination from "./SwiperNavWithPagination";
import { handleClickProps } from "@/types";

const LatestFromContractor: React.FC<
  handleClickProps & { blogsList: any; blogsData: any[] }
> = ({ handleClick, blogsList, blogsData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const transformBlogsData = (blogs: any[]) => {
    const grouped: any[] = [];
    for (let i = 0; i < blogs.length; i += 3) {
      const large = blogs[i];
      const small = blogs.slice(i + 1, i + 3);

      if (!large) continue;

      grouped.push({
        ...large,
        second: small.map((s) => ({
          ...s,
        })),
      });
    }
    return grouped;
  };

  const displayData =
    blogsData && blogsData.length > 0
      ? transformBlogsData(blogsData)
      : latestContractorData;

  const allArticles = displayData.flatMap((group) => [
    { ...group, variant: "large" as const },
    ...group.second.map((item: any) => ({
      ...item,
      variant: "small" as const,
    })),
  ]);

  console.log(allArticles, "aallll");
  return (
    <section className="custom-pagination relative z-20 mx-auto w-full max-w-[1224px] px-2 pt-8">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold xl:pb-6">
        {blogsList?.latestBlogTitle ?? ""}
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
        speed={600}
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
          : allArticles.map((group) => (
              <SwiperSlide
                key={group.id}
                className="!grid w-full gap-5 lg:!grid-cols-2 xl:gap-8"
              >
                <div className="hidden lg:block">
                  <BlogCard
                    article={group}
                    variant="large"
                    onClick={() => handleClick(group.blogUrl)}
                  />
                </div>
                {group.second && (
                  <div className="flex h-full w-full flex-col gap-6 sm:flex-row lg:w-fit lg:flex-col">
                    {group.second.map((article: any) => (
                      <BlogCard
                        key={article.id}
                        article={article}
                        variant="small"
                        onClick={() => handleClick(article.blogUrl)}
                      />
                    ))}
                  </div>
                )}
              </SwiperSlide>
            ))}
      </Swiper>

      <SwiperNavWithPagination
        prevClass="swiper-button-prev3"
        nextClass="swiper-button-next3"
        paginationClass="swiper-pagination-real-time-3"
        nextText={blogsList?.nextBtnText ?? ""}
        previousText={blogsList?.previousBtnText ?? ""}
      />
    </section>
  );
};

export default LatestFromContractor;
