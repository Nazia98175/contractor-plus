import Image from "next/image";
import { cantScaleData } from "../common/Helper";
import ContractorCard from "./ContractorCard";

const CantScale = () => {
  return (
    <section className="relative z-10 mt-14 flex flex-col">
      <Image
        src="/images/svg/snake.svg"
        alt="Sanke"
        width={177}
        height={306}
        className="absolute -top-10 left-0 z-[1] max-w-20 md:top-0 lg:max-w-[177px]"
      />
      <h3 className="relative z-10 text-center text-lg font-semibold -tracking-[0.44px] text-[#44474B] sm:text-xl md:text-[22px]">
        The industry has shifted.
      </h3>

      <div className="relative mx-auto flex h-full w-full max-w-[869px] flex-col gap-5 py-24 sm:justify-between sm:py-[220px] md:py-0">
        <div className="pointer-events-none absolute -top-[20%] left-1/2 z-0 mx-auto h-full max-h-[682px] min-h-[500px] w-full max-w-[646px] -translate-x-1/2 rounded-full bg-[url('/images/webp/cracked.webp')] bg-contain bg-center bg-no-repeat sm:min-h-[682px] md:-top-8"></div>

        {cantScaleData.map((obj, index) => (
          <ContractorCard key={index} obj={obj} />
        ))}
      </div>
    </section>
  );
};

export default CantScale;
