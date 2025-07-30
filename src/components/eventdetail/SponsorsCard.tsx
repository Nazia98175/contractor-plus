interface SponsorCardProps {
  image: string;
  index: number;
  isFirstVisible: boolean;
  isLastVisible: boolean;
  isLastCard: boolean;
}

const SponsorCard = ({
  image,
  index,
  isFirstVisible,
  isLastVisible,
  isLastCard,
}: SponsorCardProps) => {
  const borderClasses = `
    ${!isLastCard ? "border-r border-lightBlack" : ""}
    ${isFirstVisible ? "border-l-0" : ""}
    ${isLastVisible ? "border-r-0" : ""}
  `;

  return (
    <div className={`w-full py-3 sm:py-5 ${borderClasses}`}>
      <img
        className="h-full w-full"
        src={image}
        alt={`sponsor-logo-${index}`}
      />
    </div>
  );
};

export default SponsorCard;
