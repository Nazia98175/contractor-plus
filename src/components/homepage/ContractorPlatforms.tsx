import { contractPlatforms } from "../common/Helper";

const ContractorPlatforms = () => {
  return (
    <section className="bg-kuroiBlack relative">
      <img
        className="absolute bottom-[-439px] lefl-0 w-full z-[-1]"
        src="/images/png/contractor-bg.png"
        alt=""
      />
      <section className="main-container flex flex-col gap-11 pt-12 ">
        <h2 className="sub-heading text-secondary text-center max-w-[652px] mx-auto">
          There are dozens of contractor platforms, <br /> but each one has a
          catch
        </h2>
        <div className="flex justify-center lg:justify-between flex-wrap lg:flex-nowrap gapy-x-3 gap-y-8 xl:gap-11">
          {contractPlatforms.map((obj, index) => (
            <article
              key={index}
              className="p-2 w-full sm:w-[48%] max-w-[400px] group cursor-pointer"
            >
              <img
                src={obj.img}
                alt={obj.title}
                className="rounded-md overflow-hidden"
              />
              <h3 className="mb-3 lg:mb-4 text-white duration-300 group-hover:bg-whiteSmoke mt-5 text-base sm:text-xl lg:text-2xl font-jakarta font-bold group-hover:text-lightBlack px-1.5 py-1 w-fit">
                {obj.title}
              </h3>
              <p className="paragraph-text text-decemberSky max-w-[380px]">
                {obj.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ContractorPlatforms;
