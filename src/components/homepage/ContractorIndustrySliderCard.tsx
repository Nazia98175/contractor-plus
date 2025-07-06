import TiltedCardEffect from "../common/TiltedCardEffect";
import Image from "next/image";

const ContractorIndustrySliderCard = ({ show }: { show: any }) => {
  return (
    <TiltedCardEffect
      maxTilt={10}
      speed={0.4}
      easeType="expo.out"
      throttleSpeed={15}
      className="h-auto w-full"
    >
      <div className="bg-lightBlack border-winterWay shadow-c3 relative h-auto w-full rounded-xl border p-2.5 ease-in-out">
        <h2 className="mb-2.5 text-center text-sm font-bold text-white sm:text-base">
          {show.title}
        </h2>
        <Image
          width={205}
          height={205}
          src={show.image}
          alt={show.title}
          className="relative h-full max-h-[230px] min-h-[230px] w-full rounded-md object-cover"
          unoptimized
          sizes="(max-width: 768px) 205px, (max-width: 1200px) 205px"
        />
      </div>
    </TiltedCardEffect>
  );
};

export default ContractorIndustrySliderCard;
