import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Define types for the show information
interface Show {
  title: string;
  image: string;
}

const ThirdSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated state with show information
  const showInfo: Show[] = [
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Joker: Folie à Deux",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "The Penguin",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Strange Darling",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Re:ZERO",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Rebel Ridge",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Outlaw",
      image: "/images/png/circular-slide-1.png",
    },
    {
      title: "Pleasure",
      image: "/images/png/circular-slide-1.png",
    },
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-end px-4 w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[550px] xl:h-[550px] relative overflow-hidden">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1.5 : 3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[Autoplay, EffectCoverflow]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full w-full"
        >
          {showInfo.map((show, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <div
                className={`relative w-full max-w-[140px] sm:max-w-[200px] md:max-w-[280px] aspect-[2/3] rounded-lg transition-all duration-500 ease-in-out ${
                  i === activeIndex ? "" : "hover:opacity-90"
                }`}
              >
                <div className="relative h-full w-full">
                  <Image
                    fill
                    src={show.image}
                    alt={show.title}
                    className={`object-cover rounded-2xl transition-all duration-500 ${
                      i !== activeIndex % showInfo.length ? "grayscale" : ""
                    }`}
                  />
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-end p-2 sm:p-4 ${
                      i === activeIndex % showInfo.length
                        ? "opacity-100"
                        : "opacity-0"
                    } transition-opacity duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-2xl"></div>
                    <h2 className="text-white text-sm sm:text-xl font-bold text-center mb-1 sm:mb-2 relative z-10">
                      {show.title}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdSlider;
