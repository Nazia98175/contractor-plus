"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slidericon } from "../common/Icons";
import { Navigation, Pagination, Controller, Autoplay } from "swiper/modules";
import { Description } from "@headlessui/react";
import Social_cross from "../../../public/lotties/social-cross-posting.json";
import Review_reply from "../../../public/lotties/review-replies.json";
import Review_Request from "../../../public/lotties/review-requests.json";
import Crush_local from "../../../public/lotties/Crush-local-search.json";
import Auto_position from "../../../public/lotties/Auto-Posting.json";
import citation_sync from "../../../public/lotties/citation_sync-2.json";
import citation_sync_logo from "../../../public/lotties/Citation-Sync-logos.json";
import Profile_optimization from "../../../public/lotties/Profile-Optimization.json";
import LottieAnimation from "../homepage/LottieAnimation";

const CombinesPowerfulAiSlider = () => {
  const [topSwiper, setTopSwiper] = useState<any>(null);
  const [bottomSwiper, setBottomSwiper] = useState<any>(null);
  useEffect(() => {
    if (topSwiper && bottomSwiper) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);
  const sliderData = [
    {
      title: "AI Learning Engine",
      description:
        "Learns what works based on thousands of data points and keeps improving your local SEO every week.",
    },
    {
      title: "Auto Posting",
      description:
        "Keep your Google Business Profile active with fresh, keyword-rich posts created and scheduled automatically.",
    },
    {
      title: "Review Replies",
      description:
        "Reply to reviews in your brand voice, automatically. Approve replies or let the AI handle it for you.",
    },
    {
      title: "Photo Optimization",
      description:
        "Upload your images once, then Contractor+ Local geotags, renames, and schedules them to post at the right time.",
    },
    {
      title: "Review Requests",
      description:
        "Automatically request reviews from happy customers via text or email. No manual follow-up needed.",
    },
    {
      title: "Q&A Management",
      description:
        "Post and answer common questions on your Google profile to rank for more keywords and build trust.",
    },

    {
      title: "Citation Sync",
      description:
        "Sync your business info across 60+ directories in one click. No duplicate entry or dealing with 3rd party citation platforms.",
    },
    {
      title: "Ranking Heatmaps",
      description:
        "See exactly where your business ranks across your service area with visual heatmaps.",
    },
    {
      title: "Profile Optimization",
      description:
        "Contractor+ Local analyzes and optimizes your services, descriptions, and categories for better local visibility.",
    },
    {
      title: "Social Cross-Posting",
      description:
        "Repurpose Google posts to your Facebook and Instagram accounts automatically.",
    },
    {
      title: "Auto Video Creation",
      description:
        "Contractor+Local  turns your best photos into SEO-optimized videos to post on your Google profile and YouTube.",
    },
    {
      title: "Built Into Your System",
      description:
        "No need for third-party logins—Contractor+ Local works inside the same system you already use to run your business.",
    },
    {
      title: "AI Account Manager",
      description:
        "Get alerts whenever you need to know something, whether it’s a report or request for additional images.",
    },
  ];

  return (
    <div className="custom-pagination custom-active-slider relative z-50 mx-auto w-full max-w-[1920px] px-2">
      {/* Top Image Slider */}
      <Swiper
        centeredSlides={true}
        modules={[Controller, Autoplay]}
        speed={600}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSwiper={setTopSwiper}
        slidesPerView={1}
        className="!h-auto"
      >
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-center">
          <div className="mx-auto flex h-fit w-full max-w-[800px]">
            {/* <Image
              unoptimized
              width={871}
              height={625}
              sizes="(max-width: 768px) 835px, (min-width: 769px) 50vw"
              src={"/images/webp/ai-learning-engine.webp"}
              alt="Slide Image"
              className="w-full object-cover"
            /> */}
            <LottieAnimation
              className="mx-auto h-full w-full"
              loop={false}
              animationData={citation_sync_logo}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-end">
          <div className="mx-auto w-full max-w-[305px]">
            {/* <Image
              unoptimized
              sizes="(max-width: 768px) 668px, (min-width: 769px) 50vw"
              width={305}
              height={300}
              priority
              src={"/images/webp/auto-posting.webp"}
              alt="Slide Image"
              className="mx-auto w-full object-center"
            /> */}
            <LottieAnimation
              className="mx-auto h-full w-full"
              loop={false}
              animationData={Auto_position}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-[596px]">
            {/* <Image
              priority
              sizes="(max-width: 768px) 835px, (min-width: 769px) 50vw"
              width={596}
              height={268}
              src={"/images/webp/review-replies.webp"}
              alt="Slide Image"
              className="object-cover"
            /> */}
            <LottieAnimation
              className="mx-auto h-full w-full"
              loop={false}
              animationData={Review_reply}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-end">
          <div className="relative mx-auto w-full max-w-[730px] overflow-hidden pb-[57px]">
            <Image
              unoptimized
              sizes="(max-width: 768px) 730px, (min-width: 769px) 50vw"
              width={730}
              height={273}
              priority
              src={"/images/webp/photo-optimization.webp"}
              alt="Slide Image"
              className="mx-auto w-full object-cover"
            />
            <div className="absolute top-[-13%] left-[-10%] h-[30%] w-[120%] bg-white blur-[20px]"></div>
            <div className="absolute top-0 right-[-10%] h-full w-full max-w-[20%] bg-white blur-[20px]"></div>
            <div className="absolute top-0 left-[-10%] h-full w-full max-w-[20%] bg-white blur-[20px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <div className="relative mx-auto flex h-full w-full max-w-[452px] items-end pb-[98px]">
            <LottieAnimation
              className="mx-auto h-full w-full"
              loop={false}
              animationData={Review_Request}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-auto py-8">
          <div className="mx-auto flex h-full w-full max-w-[596px] items-center justify-center">
            <Image
              unoptimized
              width={871}
              height={625}
              sizes="(max-width: 768px) 596px, (min-width: 769px) 50vw"
              src={"/images/webp/qa-management.webp"}
              alt="Slide Image"
              className="h-fit w-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative !h-auto w-full overflow-hidden">
          <div className="absolute top-[-20%] z-10 h-[30%] w-full bg-white blur-[20px]"></div>
          <Image
            className="absolute top-0 left-0 h-full w-full object-fill"
            src={"/images/webp/sync-weather.webp"}
            width={1920}
            height={1200}
            alt="sync-weather"
          />
          <LottieAnimation
            className="mx-auto h-full w-full max-w-[200px]"
            loop={true}
            animationData={citation_sync}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-end">
          <div className="relative mx-auto w-full max-w-[536px] overflow-hidden">
            <Image
              unoptimized
              sizes="(max-width: 768px) 668px, (min-width: 769px) 50vw"
              width={668}
              height={300}
              priority
              src={"/images/webp/ranking-heatmaps.webp"}
              alt="Slide Image"
              className="mx-auto w-full object-cover"
            />
            <div className="absolute right-[0px] bottom-[-5%] h-[20%] w-full bg-white blur-[20px]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="mx-auto !flex !h-auto flex-col items-center justify-center">
          <LottieAnimation
            className="mx-auto h-full w-full max-w-[500px]"
            loop={false}
            animationData={Profile_optimization}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-center">
          <LottieAnimation
            className="mx-auto h-full w-full max-w-[600px] object-cover"
            loop={false}
            animationData={Social_cross}
          />
        </SwiperSlide>
        <SwiperSlide className="!flex !h-auto flex-col items-center justify-center">
          <Image
            unoptimized
            sizes="(max-width: 768px) 900px, (min-width: 769px) 900px"
            width={900}
            height={382}
            priority
            src={"/images/webp/auto-video-creation.webp"}
            alt="Slide Image"
            className="mx-auto w-full max-w-[515px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="relative !flex flex-col items-center justify-end bg-white">
          <div className="xs:top-[82%] xs:h-[100px] absolute top-[70%] h-[100px] w-[140%] max-w-full bg-white blur-[7px] sm:w-full md:top-[67%] md:h-[250px] lg:top-[70%] lg:h-[281px] lg:blur-[40px]"></div>
          <div className="h-full px-2">
            <div className="border-silverMedal mx-auto w-full max-w-[871px] rounded-4xl border-4 bg-black p-[8px] sm:w-[80%] md:p-[14px] xl:rounded-[55px]">
              <Image
                unoptimized
                width={871}
                height={625}
                sizes="(max-width: 768px) 835px, (min-width: 769px) 50vw"
                src={"/images/webp/build-you-system.webp"}
                alt="Slide Image"
                className="rounded-3xl object-cover xl:rounded-[45px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative !flex !h-auto flex-col items-center justify-center">
          <div className="absolute top-[60%] h-[100px] w-[140%] max-w-full bg-white blur-[47px] sm:w-full md:top-[67%] md:h-[250px] md:blur-[100px] lg:top-[70%] lg:h-[281px]"></div>
          <Image
            unoptimized
            sizes="(max-width: 768px) 900px, (min-width: 769px) 900px"
            width={900}
            height={382}
            priority
            src={"/images/webp/account-manager.webp"}
            alt="Slide Image"
            className="mx-auto w-full max-w-[713px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <div className="slider-img-gradient relative z-20">
        <Swiper
          modules={[Navigation, Pagination, Controller, Autoplay]}
          onSwiper={setBottomSwiper}
          slidesPerView={3}
          speed={600}
          spaceBetween={36}
          centeredSlides={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination-real-time",
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="real-time-active-slider"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 36 },
          }}
        >
          {sliderData?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-rgba1 relative z-30 p-[14px] text-center backdrop:blur-sm sm:backdrop-blur-[11px]"
            >
              <b className="text-lightBlack z-20 text-lg lg:text-xl">
                {item.title}
              </b>
              <p className="text-secondary mt-3 text-sm font-medium">
                {item?.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation + Pagination */}
        <div className="relative mx-auto flex w-fit items-center justify-between gap-3">
          <div className="swiper-button-prev !relative !right-0 !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 after:hidden">
            <Slidericon />
          </div>

          <div className="swiper-pagination-real-time relative left-0 flex translate-x-0 items-center justify-center gap-1" />

          <div className="swiper-button-next !relative !right-0 !bottom-0 !left-0 !m-0 h-6 max-h-6 min-h-6 w-6 max-w-6 min-w-6 rotate-180 after:hidden">
            <Slidericon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinesPowerfulAiSlider;
