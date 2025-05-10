"use client";
import React from "react";
import { featureData } from "../common/Helper";

const Features = () => {
  return (
    <section className="pt-12 pb-10 main-container">
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {featureData.map((obj, index) => (
          <article
            key={index}
            className="font-jakarta p-3 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold text-winterWay text-center capitalize">
                {obj.title}
              </h4>
              <p className="mt-4 paragraph-text text-wallStreet text-center mb-5">
                {obj.desc}
              </p>
            </div>

            <img
              src={obj.img}
              alt={obj.title}
              className="object-cover h-[187px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
