"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { SwiperOptions } from "swiper/types";

interface SliderLayoutProps extends SwiperOptions {
  children: React.ReactNode[];
  className?: string;
  Navigation?: any;
  swiperClassName?: string;
  onSlideChange?: (swiper: SwiperClass) => void;
  wrapperClassName?: string;
  coverflowEffect?: {
    rotate?: number;
    stretch?: number;
    depth?: number;
    modifier?: number;
    slideShadows?: boolean;
  };
  breakpoints?: {
    [width: number]: {
      slidesPerView?: any;
      spaceBetween?: number;
    };
  };
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const SliderLayout: React.FC<SliderLayoutProps> = ({
  children,
  className = "mySwiper",
  swiperClassName,
  wrapperClassName = "relative w-full",
  modules = [Pagination, Navigation],
  effect = undefined,
  autoplay = false,
  pagination = false,
  slidesPerView,
  spaceBetween = 8,
  loop = true,
  grabCursor = true,
  centeredSlides,
  speed = 600,
  coverflowEffect = {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
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
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const hasAutoplay = autoplay !== false && autoplay !== undefined;
  const hasCoverflowEffect = effect === "coverflow";

  useEffect(() => {
    const handleResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && swiperRef.current) {
        setTimeout(() => {
          swiperRef.current?.update();
          if (hasAutoplay && !isHovered && swiperRef.current?.autoplay) {
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
  }, [hasAutoplay, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
    if (hasAutoplay && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
    if (hasAutoplay && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const validChildren = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined,
  );

  if (validChildren.length === 0) {
    return <div className={wrapperClassName}></div>;
  }

  const autoplayConfig = hasAutoplay
    ? {
        delay:
          typeof autoplay === "object" && autoplay.delay
            ? autoplay.delay
            : 3000,
        disableOnInteraction:
          typeof autoplay === "object" && "disableOnInteraction" in autoplay
            ? autoplay.disableOnInteraction
            : true,
        pauseOnMouseEnter:
          typeof autoplay === "object" && "pauseOnMouseEnter" in autoplay
            ? autoplay.pauseOnMouseEnter
            : true,
      }
    : false;

  const effectiveModules = [...modules];
  if (!modules.includes(Autoplay) && hasAutoplay) {
    effectiveModules.push(Autoplay);
  }
  if (!modules.includes(EffectCoverflow) && hasCoverflowEffect) {
    effectiveModules.push(EffectCoverflow);
  }

  return (
    <div
      className={wrapperClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={effectiveModules}
        effect={hasCoverflowEffect ? "coverflow" : undefined}
        coverflowEffect={hasCoverflowEffect ? coverflowEffect : undefined}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop && validChildren.length > 1}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        autoplay={autoplayConfig}
        pagination={pagination ? { clickable: true } : false}
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
          <SwiperSlide className={swiperClassName} key={index}>
            <div className="swiper-slide-inner">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderLayout;
