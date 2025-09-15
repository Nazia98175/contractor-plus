import Link from "next/link";

interface SponsorCardProps {
  image: string;
  index: number;
  isFirstVisible: boolean;
  isLastVisible: boolean;
  isLastCard: boolean;
  link: string;
}

const SponsorCard = ({
  image,
  index,
  isFirstVisible,
  isLastVisible,
  isLastCard,
  link,
}: SponsorCardProps) => {
  const borderClasses = `
    ${!isLastCard ? "border-r border-lightBlack" : ""}
    ${isFirstVisible ? "border-l-0" : ""}
    ${isLastVisible ? "border-r-0" : ""}
  `;
  if (!image) {
    return null;
  }
  return (
    <div className={`w-full py-3 sm:py-5 ${borderClasses}`}>
      <Link href={`${image}`} target="_blank">
        <img
          className="h-full max-h-[74px] min-h-[74px] w-full"
          src={image}
          alt={`sponsor-logo-${index}`}
        />
      </Link>
    </div>
  );
};

export default SponsorCard;
