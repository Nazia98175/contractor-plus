import Copy from "../common/Copy";
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
      <div className="bg-lightBlack border-winterWay relative h-auto w-full rounded-xl border p-2.5 ease-in-out">
        <Copy>
          <h2 className="mb-4 text-center text-sm font-extrabold text-white sm:text-base">
            {show?.imageTitle ?? ""}
          </h2>
        </Copy>
        <Image
          width={205}
          height={205}
          src={show?.image?.formats?.medium?.url ?? show?.image?.url ?? ""}
          alt={show?.imageTitle ?? ""}
          className="ios-image relative block h-full max-h-[260px] min-h-[260px] w-full rounded-md object-cover"
          priority
          loading="eager"
          unoptimized
        />
      </div>
    </TiltedCardEffect>
  );
};

export default ContractorIndustrySliderCard;
