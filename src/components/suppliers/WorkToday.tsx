import React from "react";
import { workList } from "../common/Helper";
import Copy from "../common/Copy";

const WorkToday = () => {
  return (
    <section className="mx-auto w-full max-w-[1224px] px-2 pt-[82px] pb-8 lg:pt-[92px]">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">
          Who we work with today
        </h3>
      </Copy>
      <div className="grid grid-cols-1 gap-4 pt-[59px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {workList.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0.01)] px-[22px] py-3"
          >
            <img className={item.imgClass} src={item.img} alt={item.alt} />
            <h3 className="text-secondary pt-4 text-center text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="text-wallStreet text-center text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkToday;
