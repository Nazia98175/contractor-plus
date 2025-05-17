import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define types for the show information
interface Show {
  title: string;
  image: string;
}

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>("Popular");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Updated state with correct seasons/minutes, release years, and maturity ratings
  const [showInfo] = useState<Show[]>([
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
  ]);
  const totalItems = showInfo.length;

  const handleItemClick = (index: number): void => {
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
              <Image
                fill
                src={show.image}
                alt={show.title}
                className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                  i !== activeIndex ? "grayscale" : ""
                }`}
              />
              <h2 className="text-white text-sm sm:text-xl font-bold text-center mb-1 sm:mb-2">
                {show.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
