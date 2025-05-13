import Image from "next/image";
import React from "react";
import TextAnimation from "../common/TextAnimation";

interface FeatureCardProps {
  obj: {
    title: string;
    desc: string;
    img: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ obj }) => {
  return (
    <article className="font-jakarta p-3 flex flex-col items-center justify-between">
      <div>
        <TextAnimation delay={0.4}>
          <h4 className="text-2xl font-bold text-winterWay text-center capitalize">
            {obj.title}
          </h4>
        </TextAnimation>
        <TextAnimation delay={0.4}>
          <p className="mt-4 paragraph-text text-wallStreet text-center mb-5">
            {obj.desc}
          </p>
        </TextAnimation>
      </div>
      <div className="relative w-full h-[187px]">
        <Image src={obj.img} alt={obj.title} fill className="object-contain" />
      </div>
    </article>
  );
};

export default FeatureCard;
