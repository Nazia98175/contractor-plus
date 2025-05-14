import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeButton, setActiveButton] = useState("Popular");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated state with correct seasons/minutes, release years, and maturity ratings
  const [showInfo] = useState([
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
    {
      title: "Transformers One",
      image: "/images/png/contractor-2.png",
    },
  ]);
  const totalItems = showInfo.length;

  const handleItemClick = (index: React.SetStateAction<number>) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-end px-4 w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[550px] xl:h-[550px] relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end">
          {showInfo.map((show, i) => (
            <div
              key={i}
              className={`w-full max-w-[140px] sm:max-w-[200px] md:max-w-[280px] aspect-[2/3] rounded-lg absolute cursor-pointer transition-all duration-500 ease-in-out ${
                i === activeIndex ? "cursor-default" : "hover:opacity-90"
              }`}
              style={{
                transform: `rotate(${
                  (i - activeIndex) * (360 / totalItems)
                }deg) translateY(-20%) ${
                  i === activeIndex ? "scale(1.1)" : "scale(0.9)"
                }`,
                transformOrigin: "center bottom",
                zIndex:
                  i === activeIndex
                    ? totalItems
                    : totalItems - Math.abs(i - activeIndex),
                opacity: isTransitioning ? 0.5 : 1,
              }}
              onClick={() => handleItemClick(i)}
            >
              <div className="flex flex-col">
                <h2 className="text-white text-sm sm:text-xl font-bold text-center mb-1 sm:mb-2">
                  {show.title}
                </h2>
                <Image
                  src={`/images/${show.image}`}
                  alt={show.title}
                  fill
                  className={`object-cover rounded-2xl transition-all duration-500 ${
                    i !== activeIndex ? "grayscale" : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
