"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";
const BlogArticle = () => {
  const articles = [
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-1.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
    {
      id: 2,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/images/webp/blog-card-2.webp",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      id: 3,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/what-is-wireframing",
      tags: ["Design", "Research"],
    },
    {
      id: 4,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/images/webp/blog-card-4.webp",
      link: "/articles/collaboration-better-designers",
      tags: ["Design", "Research"],
    },
    {
      id: 5,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/images/webp/blog-card-5.webp",
      link: "/articles/top-javascript-frameworks",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      id: 6,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/images/webp/blog-card-6.webp",
      link: "/articles/podcast-better-cx-community",
      tags: ["Podcasts", "Customer Success"],
    },
    {
      id: 7,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-1.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
    {
      id: 8,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/images/webp/blog-card-2.webp",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      id: 9,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/what-is-wireframing",
      tags: ["Design", "Research"],
    },
    {
      id: 10,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/images/webp/blog-card-4.webp",
      link: "/articles/collaboration-better-designers",
      tags: ["Design", "Research"],
    },
    {
      id: 11,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/images/webp/blog-card-5.webp",
      link: "/articles/top-javascript-frameworks",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      id: 12,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/images/webp/blog-card-6.webp",
      link: "/articles/podcast-better-cx-community",
      tags: ["Podcasts", "Customer Success"],
    },
    {
      id: 1,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-1.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
    {
      id: 2,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/images/webp/blog-card-2.webp",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      id: 3,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/what-is-wireframing",
      tags: ["Design", "Research"],
    },
    {
      id: 4,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/images/webp/blog-card-4.webp",
      link: "/articles/collaboration-better-designers",
      tags: ["Design", "Research"],
    },
    {
      id: 5,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/images/webp/blog-card-5.webp",
      link: "/articles/top-javascript-frameworks",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      id: 6,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/images/webp/blog-card-6.webp",
      link: "/articles/podcast-better-cx-community",
      tags: ["Podcasts", "Customer Success"],
    },
    {
      id: 7,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Bill Walsh leadership lessons",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: "/images/webp/blog-card-1.webp",
      link: "/articles/bill-walsh-leadership",
      tags: ["Leadership", "Management"],
    },
    {
      id: 8,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "PM mental models",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: "/images/webp/blog-card-2.webp",
      link: "/articles/pm-mental-models",
      tags: ["Product", "Research", "Frameworks"],
    },
    {
      id: 9,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "What is Wireframing?",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: "/images/webp/blog-card-3.webp",
      link: "/articles/what-is-wireframing",
      tags: ["Design", "Research"],
    },
    {
      id: 10,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "How collaboration makes us better designers",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: "/images/webp/blog-card-4.webp",
      link: "/articles/collaboration-better-designers",
      tags: ["Design", "Research"],
    },
    {
      id: 11,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Our top 10 Javascript frameworks to use",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: "/images/webp/blog-card-5.webp",
      link: "/articles/top-javascript-frameworks",
      tags: ["Software Development", "Tools", "SaaS"],
    },
    {
      id: 12,
      category: "Contractor",
      date: "1 Jan 2023",
      title: "Podcast: Creating a better CX Community",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: "/images/webp/blog-card-6.webp",
      link: "/articles/podcast-better-cx-community",
      tags: ["Podcasts", "Customer Success"],
    },
  ];

  return (
    <div className="custom-pagination custom-pagination relative z-20 mx-auto w-full max-w-[1224px] px-2">
      <h2 className="text-eerieBlack pb-8 text-2xl font-semibold">
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
            grid: { rows: 3, fill: "row" },
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
      <div className="relative mt-3 flex w-full items-center justify-between gap-3">
        <div className="swiper-button-prev2 text-flintstone !relative !right-0 !bottom-0 !m-0 flex cursor-pointer items-center justify-center gap-2 text-sm font-medium after:hidden">
          <ArrowLeft color="#667085" /> Previous
        </div>
        <div className="swiper-pagination-real-time-4 relative left-0 flex translate-x-0 items-center justify-center gap-1" />

        <div className="swiper-button-next2 text-flintstone !relative !bottom-0 !left-0 !m-0 flex cursor-pointer items-center justify-center gap-2 text-sm font-medium after:hidden">
          Next <ArrowRight color="#667085" />
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
