import Link from "next/link";

interface SponsorCardProps {
  image: string;
  index: number;
  isFirstVisible: boolean;
  isLastVisible: boolean;
  isLastCard: boolean;
  link: string;
  invert: any;
}

const SponsorCard = ({
  image,
  index,
  isFirstVisible,
  isLastVisible,
  isLastCard,
  link,
  invert,
}: SponsorCardProps) => {
  const borderClasses = `
    ${!isLastCard ? "border-r border-lightBlack" : ""}
    ${isFirstVisible ? "border-l-0" : ""}
    ${isLastVisible ? "border-r-0" : ""}
  `;
  if (!image) {
    return null;
  }
  console.log(invert, "invert");

  return (
    <div className={`w-full py-3 sm:py-5 ${borderClasses}`}>
      <Link href={`${link ? link : "#"}`} target="_blank">
        <div className="aspect-[6/2] w-full">
          <img
            className={`ios-image h-full w-full object-contain ${
              invert?.classname === "invert" ? "invert-custom" : ""
            }`}
            src={image}
            alt={`sponsor-logo-${index}`}
          />
        </div>
      </Link>
    </div>
  );
};

export default SponsorCard;
