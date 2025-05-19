"use client";
import React, { useEffect, useRef, useState } from "react";
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
  wrapperClassName = "relative w-full",
  modules = [Pagination, Autoplay, EffectCoverflow],
  effect = "coverflow",
  autoplay = false,
  pagination = false,
  slidesPerView = 2,
  spaceBetween = 8,
  loop = true,
  grabCursor = true,
  centeredSlides = true,
  speed = 100,
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if we're using autoplay
  const hasAutoplay = autoplay !== false && autoplay !== undefined;

  // Determine if we're using coverflow effect
  const hasCoverflowEffect = effect === "coverflow";

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

          // If autoplay is enabled and not hovering, restart it
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

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsHovered(true);

    // Call external handler if provided
    if (onMouseEnter) {
      onMouseEnter();
    }

    // If autoplay is enabled, pause it
    if (hasAutoplay && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    // Call external handler if provided
    if (onMouseLeave) {
      onMouseLeave();
    }

    // If autoplay is enabled, resume it
    if (hasAutoplay && swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  // Filter out empty children to prevent slider issues
  const validChildren = React.Children.toArray(children).filter(
    (child) => child !== null && child !== undefined
  );

  // Only render swiper if we have valid children
  if (validChildren.length === 0) {
    return <div className={wrapperClassName}></div>;
  }

  // Prepare the autoplay configuration
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

  // Prepare the effective modules
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
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        modules={effectiveModules}
        effect={hasCoverflowEffect ? "coverflow" : undefined}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop && validChildren.length > 1}
        grabCursor={grabCursor}
        centeredSlides={centeredSlides}
        autoplay={autoplayConfig}
        pagination={pagination ? { clickable: true } : false}
        coverflowEffect={hasCoverflowEffect ? coverflowEffect : undefined}
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
          <SwiperSlide key={index}>
            <div className="swiper-slide-inner">{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderLayout;
