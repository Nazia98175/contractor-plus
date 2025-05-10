import React from "react";

interface FeatureCardProps {
  obj: {
    title: string;
    desc: string;
    img: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ obj }) => {
  return (
    <article className="font-jakarta p-3 flex flex-col justify-between">
      <div>
        <h4 className="text-2xl font-bold text-winterWay text-center capitalize">
          {obj.title}
        </h4>
        <p className="mt-4 paragraph-text text-wallStreet text-center mb-5">
          {obj.desc}
        </p>
      </div>
      <img src={obj.img} alt={obj.title} className="object-contain h-[187px]" />
    </article>
  );
};

export default FeatureCard;
