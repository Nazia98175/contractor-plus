"use client";
import { useEffect, useMemo, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { latestContractorData } from "../common/Helper";
import BlogCard from "./BlogCard";
import SwiperNavWithPagination from "./SwiperNavWithPagination";
import { handleClickProps } from "@/types";

type Blog = {
  id?: string | number;
  documentId?: string;
  blogUrl: string;
  [k: string]: any;
};

const LatestFromContractor: React.FC<
  handleClickProps & { blogsList: any; blogsData: Blog[] | undefined }
> = ({ handleClick, blogsList, blogsData }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sourceBlogs: Blog[] =
    typeof blogsData === "undefined"
      ? (latestContractorData as unknown as Blog[])
      : blogsData;

  const transformBlogsData = (blogs: Blog[]) => {
    const grouped: Array<Blog & { second: Blog[] }> = [];
    for (let i = 0; i < blogs.length; i += 3) {
      const large = blogs[i];
      if (!large) continue;
      const small = blogs.slice(i + 1, i + 3);
      grouped.push({ ...large, second: small });
    }
    return grouped;
  };

  const displayData = useMemo(
    () => (sourceBlogs?.length ? transformBlogsData(sourceBlogs) : []),
    [sourceBlogs],
  );

  const allArticles = useMemo(
    () =>
      displayData.flatMap((group) => [
        { ...group, variant: "large" as const },
        ...group.second.map((s) => ({ ...s, variant: "small" as const })),
      ]),
    [displayData],
  );

  const keyOf = (b: Blog) =>
    String(b.id ?? b.documentId ?? b.blogUrl ?? Math.random());

  const isEmpty =
    (blogsData && blogsData.length === 0) || displayData.length === 0;

  return (
    <section className="custom-pagination relative z-20 mx-auto w-full max-w-[1224px] px-2 pt-8">
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold xl:pb-6">
        {blogsList?.latestBlogTitle ?? ""}
      </h2>

      {isEmpty ? (
        <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-10 text-center">
          <p className="text-sm text-gray-600">
            No blogs found. Try a different search or category.
          </p>
        </div>
      ) : (
        <>
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
              320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
              640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              1024: { slidesPerView: 1, slidesPerGroup: 1 },
            }}
          >
            {isMobile
              ? allArticles.map((article) => (
                  <SwiperSlide key={keyOf(article)}>
                    <BlogCard
                      article={article}
                      variant={article.variant}
                      onClick={() => handleClick?.(article.blogUrl)}
                    />
                  </SwiperSlide>
                ))
              : displayData.map((group) => (
                  <SwiperSlide
                    key={keyOf(group)}
                    className="!grid w-full gap-5 lg:!grid-cols-2 xl:gap-8"
                  >
                    <div className="hidden lg:block">
                      <BlogCard
                        article={group}
                        variant="large"
                        onClick={() => handleClick?.(group.blogUrl)}
                      />
                    </div>

                    {group.second?.length > 0 && (
                      <div className="flex h-full w-full flex-col gap-6 sm:flex-row lg:w-fit lg:flex-col">
                        {group.second.map((article) => (
                          <BlogCard
                            key={keyOf(article)}
                            article={article}
                            variant="small"
                            onClick={() => handleClick?.(article.blogUrl)}
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
        </>
      )}
    </section>
  );
};

export default LatestFromContractor;
