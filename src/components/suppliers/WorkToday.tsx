import React from "react";
import { workList } from "../common/Helper";
import Copy from "../common/Copy";
interface WorkTodayProps {
  title?: string;
  listTextDesc: {
    icon?: any;
    imgClass?: string;
    alt: string;
    title: string;
    desc: string;
  }[];
}
const WorkToday: React.FC<WorkTodayProps> = ({ title, listTextDesc }) => {
  console.log(listTextDesc, "listTextDesc");
  return (
    <section className="mx-auto w-full max-w-[1224px] px-2 pt-[82px] pb-8 lg:pt-[92px]">
      <Copy animateOnScroll={true}>
        <h3 className="text-mana section-heading text-center">
          {title || "Who we work with today"}
        </h3>
      </Copy>
      <div className="grid grid-cols-1 gap-4 pt-[59px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {listTextDesc.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0.01)] px-[22px] py-3"
          >
            <img
              className={item.imgClass}
              src={item.icon.url}
              alt={item.title}
            />
            <h3 className="text-secondary pt-4 text-center text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="text-wallStreet text-center text-base">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkToday;
