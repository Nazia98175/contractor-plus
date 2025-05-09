import React from "react";

const contractPlatforms = [
  {
    img: "/images/webp/expensive.webp",
    title: "Expensive",
    desc: "The “big guys” charge a small fortune, and their software is a nightmare to learn.",
  },
  {
    img: "/images/webp/complicated.webp",
    title: "Complicated",
    desc: "Popular solutions are either outdated or difficult to use as a mobile app.",
  },
  {
    img: "/images/webp/inadequate.webp",
    title: "Inadequate",
    desc: "There’s no true “all in one”, so you end up with 6 different platforms to run your company.",
  },
];
const ContractorPlatforms = () => {
  return (
    <section className="main-container flex flex-col gap-11 mt-12">
      <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
        There are dozens of contractor platforms, <br /> but each one has a
        catch
      </h2>
      <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gapy-x-3 gap-y-8 xl:gap-11">
        {contractPlatforms.map((obj, index) => (
          <article key={index} className="p-2 w-full sm:w-[48%] max-w-[400px]">
            <img
              src={obj.img}
              alt={obj.title}
              className="rounded-md overflow-hidden"
            />
            <h3 className="mb-3 lg:mb-4 bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold text-lightBlack px-1.5 py-1 w-fit">
              {obj.title}
            </h3>
            <p className="paragraph-text text-decemberSky max-w-[380px]">
              {obj.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContractorPlatforms;
