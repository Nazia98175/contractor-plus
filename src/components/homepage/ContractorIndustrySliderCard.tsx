import Image from "next/image";
import Copy from "../common/Copy";
import TiltedCardEffect from "../common/TiltedCardEffect";
import type { ImageCard } from "@/types";

interface ContractorIndustrySliderCardProps {
  show: ImageCard;
  isActive?: boolean;
  priority?: boolean;
}

const ContractorIndustrySliderCard: React.FC<
  ContractorIndustrySliderCardProps
> = ({ show, isActive = false, priority = false }) => {
  // Get the best available image URL based on available formats
  const getImageUrl = (): string => {
    if (!show?.image) return "";

    if (show.image.formats?.small?.url) {
      return show.image.formats.small.url;
    }
    if (show.image.formats?.medium?.url) {
      return show.image.formats.medium.url;
    }
    if (show.image.formats?.large?.url) {
      return show.image.formats.large.url;
    }
    return show.image.url || "";
  };

  const imageUrl = getImageUrl();

  if (!imageUrl) {
    return null; // Don't render if no image URL
  }

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
          src={imageUrl}
          alt={show?.image?.alternativeText || show?.imageTitle || "Industry card"}
          className="ios-image relative block h-full max-h-[260px] min-h-[260px] w-full rounded-md object-cover"
          loading={priority || isActive ? "eager" : "lazy"}
          priority={priority}
          quality={80}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 205px"
        />
      </div>
    </TiltedCardEffect>
  );
};

export default ContractorIndustrySliderCard;