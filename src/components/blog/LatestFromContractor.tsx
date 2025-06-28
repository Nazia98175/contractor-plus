"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "./BlogCard";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

const LatestFromContractor = () => {
  const latestContractorData = [
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/webp/latest-blog-1.webp",
      link: "/articles/large",
      tags: ["Leadership", "Management"],
      second: [
        {
          id: 2,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Migrating to Linear 101",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
          image: "/images/webp/latest-blog-2.webp",
          link: "/articles/small-1",
          tags: ["Architecture", "Planning"],
        },
        {
          id: 3,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
          image: "/images/webp/latest-blog-3.webp",
          link: "/articles/small-2",
          tags: ["Design", "Frameworks"],
        },
      ],
    },
    {
      id: 4,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "UX review presentations 2",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/large-2",
      tags: ["Leadership", "Management"],
      second: [
        {
          id: 5,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
          image: "/images/webp/latest-blog-2.webp",
          link: "/articles/small-3",
          tags: ["Architecture", "Planning"],
        },
        {
          id: 6,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
          image: "/images/webp/latest-blog-3.webp",
          link: "/articles/small-4",
          tags: ["Design", "Frameworks"],
        },
      ],
    },
    {
      id: 7,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "UX review presentations 2",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/large-2",
      tags: ["Leadership", "Management"],
      second: [
        {
          id: 8,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
          image: "/images/webp/latest-blog-2.webp",
          link: "/articles/small-3",
          tags: ["Architecture", "Planning"],
        },
        {
          id: 9,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
          image: "/images/webp/latest-blog-3.webp",
          link: "/articles/small-4",
          tags: ["Design", "Frameworks"],
        },
      ],
    },
    {
      id: 10,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "UX review presentations 2",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/large-2",
      tags: ["Leadership", "Management"],
      second: [
        {
          id: 11,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
          image: "/images/webp/latest-blog-2.webp",
          link: "/articles/small-3",
          tags: ["Architecture", "Planning"],
        },
        {
          id: 12,
          category: "Contractor",
          date: "1 Jan 2023",
          title: "Building your API Stack",
          description:
            "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
          image: "/images/webp/latest-blog-3.webp",
          link: "/articles/small-4",
          tags: ["Design", "Frameworks"],
        },
      ],
    },
  ];

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
      <h2 className="text-eerieBlack pb-4 text-2xl font-semibold sm:pb-6">
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
            spaceBetween: 20,
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
                className="!grid w-full gap-8 lg:!grid-cols-2"
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

      <div className="relative mt-6 flex w-full items-center justify-between gap-3 border-t border-[#eaecf0] pt-5">
        <div className="swiper-button-prev3 text-flintstone flex cursor-pointer items-center gap-2 text-sm font-medium">
          <ArrowLeft height={20} width={20} color="#667085" /> Previous
        </div>
        <div className="swiper-pagination-real-time-3 flex items-center justify-center gap-1" />
        <div className="swiper-button-next3 text-flintstone flex cursor-pointer items-center gap-2 text-sm font-medium">
          Next <ArrowRight height={20} width={20} color="#667085" />
        </div>
      </div>
    </section>
  );
};

export default LatestFromContractor;
