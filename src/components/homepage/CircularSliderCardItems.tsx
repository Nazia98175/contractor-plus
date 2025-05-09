import React from "react";

interface Item {
  image: string;
  text?: string;
}

interface CircularSliderCardItemsProps {
  items: Item[];
}

const CircularSliderCardItems = ({ items }: CircularSliderCardItemsProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="w-full h-full relative">
          <img
            src={item.image}
            alt={item.text || "Slider image"}
            className="w-full h-full object-cover hover:translate-y-4"
          />

          {item.text && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
              <p className="text-white text-center">{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default CircularSliderCardItems;
