import Image from "next/image";
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
    <article className="font-jakarta flex flex-col items-center justify-between rounded-lg bg-white p-3">
      <div>
        <h4 className="text-winterWay text-center text-xl font-bold sm:text-2xl">
          {obj.title}
        </h4>
        <p className="text-wallStreet mt-4 mb-5 text-center text-sm font-semibold sm:font-normal md:text-base xl:text-lg">
          {obj.desc}
        </p>
      </div>
      <div className="relative h-[187px] w-full">
        <Image
          src={obj.img}
          alt={obj.title}
          fill
          className="object-center"
          sizes="(min-width: 768px) 360px, 320px"
        />
      </div>
    </article>
  );
};

export default FeatureCard;
