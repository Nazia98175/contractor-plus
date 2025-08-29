import React from "react";

const workData = [
  {
    img: "/images/svg/lowes-logo.svg",
    alt: "Lowe's logo",
    title: "Lowe’s",
    description:
      "Local pricing, rapid material lists, and cart transfer for instant online checkout.",
    imgClass: "w-full max-w-[52px]",
  },
  {
    img: "/images/svg/abp-logo.svg",
    alt: "ABC Supply logo",
    title: "ABC Supply",
    description:
      "Direct PO for roofing materials, sourcing, and order tracking.",
    imgClass: "w-full max-w-[52px]",
  },
  {
    img: "/images/svg/qxo-logo.svg",
    alt: "QXO logo",
    title: (
      <>
        QXO <span className="text-sm">(Formerly Beacon)</span>
      </>
    ),
    description: "Coming up next!.",
    imgClass: "w-full max-w-[52px]",
  },
  {
    img: "/images/svg/Group-logo.svg",
    alt: "Ace Hardware & others logo",
    title: "Ace Hardware, Menards, Ferguson Home & others",
    description:
      "Indirect integrations that surface pricing and selection within our estimate workflow.",
    imgClass: "w-full max-w-[80px]",
  },
];

const WorkToday = () => {
  return (
    <section className="mx-auto w-full max-w-[1224px] px-2 py-8">
      <h3 className="text-mana section-heading text-center">
        Who we work with today
      </h3>
      <div className="grid grid-cols-1 gap-4 pt-[59px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
        {workData.map((item, index) => (
          <article
            key={index}
            className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0.01)] px-[22px] py-3"
          >
            <img className={item.imgClass} src={item.img} alt={item.alt} />
            <h3 className="pt-4 text-center text-2xl font-semibold text-[#ADB1B5]">
              {item.title}
            </h3>
            <p className="text-center text-base text-[#656C73]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkToday;
