// CircuartItem.tsx
import React from "react";

interface CircuartItemProps {
  image: string;
  text: string;
}

const CircuartItem: React.FC<CircuartItemProps> = ({ image, text }) => {
  return (
    <div className="circular-item">
      <div className="text-overlay">{text}</div>
      <img src={image} alt={text} />
    </div>
  );
};

export const getGalleryItems = () => {
  return [
    {
      image: "/images/png/circular-slide-1.png",
      text: "Slide 1",
    },
    {
      image: "/images/png/circular-slide-2.png", // Changed to use unique images
      text: "Slide 2",
    },
    {
      image: "/images/png/circular-slide-3.png", // Changed to use unique images
      text: "Slide 3",
    },
    {
      image: "/images/png/circular-slide-4.png", // Changed to use unique images
      text: "Slide 4",
    },
    {
      image: "/images/png/circular-slide-5.png", // Changed to use unique images
      text: "Slide 5",
    },
  ];
};

export default CircuartItem;
