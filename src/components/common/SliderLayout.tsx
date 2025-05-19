"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

interface SliderLayoutProps extends SwiperOptions {
  children: React.ReactNode[];
  className?: string;
  onSlideChange?: (swiper: SwiperClass) => void;
  wrapperClassName?: string;
  // coverflowEffect?: {
  //   rotate?: number;
  //   stretch?: number;
  //   depth?: number;
  //   modifier?: number;
  //   slideShadows?: boolean;
  // };
  breakpoints?: {
    [width: number]: {
      slidesPerView?: any;
      spaceBetween?: number;
    };
  };
}

const SliderLayout: React.FC<SliderLayoutProps> = ({
  children,
  className = "mySwiper",
  wrapperClassName = "relative w-full",
  modules = [Pagination, Autoplay],
  // effect = "coverflow",
  autoplay = false,
  pagination = false,
  slidesPerView = 2,
  spaceBetween = 8,
  loop = true,
  grabCursor = true,
  centeredSlides = true,
  speed = 100,
  // coverflowEffect = {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 2.5,
  //   slideShadows: false,
  // },
  breakpoints = {
    640: {
      slidesPerView: 3.5,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 0,
    },
  },
  onSlideChange,
  ...rest
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  // Ensure all modules are properly loaded
  useEffect(() => {
    // Force update the swiper instance when dimensions might change
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    // Handle visibility changes (e.g., tab switching)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && swiperRef.current) {
        // Small timeout to ensure DOM is fully ready
        setTimeout(() => {
          swiperRef.current?.update();

          // If autoplay is enabled, restart it
          if (autoplay && swiperRef.current?.autoplay) {
            swiperRef.current.autoplay.start();
          }
        }, 50);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [autoplay]);

  // Filter out empty children to prevent slider issues
  const validChildren = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  );

  // Only render swiper if we have valid children
  if (validChildren.length === 0) {
    return <div className={wrapperClassName}></div>;
  }

  return (
    <div className={wrapperClassName}>
      <Swiper
        modules={modules}
        // effect={effect}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop && validChildren.length > 1}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={pagination ? { clickable: true } : false}
        // coverflowEffect={effect === "coverflow" ? coverflowEffect : undefined}
        breakpoints={breakpoints}
        onSlideChange={onSlideChange}
        speed={speed}
        className={className}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        observer={true}
        observeParents={true}
        resizeObserver={true}
        {...rest}
      >
        {validChildren.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderLayout;
