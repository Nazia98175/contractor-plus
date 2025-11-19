import Image from "next/image";
import CardReveal from "../common/CardReveal";

interface FeatureCardProps {
  icon: {
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    name: string;
  } | null;
  title: string;
  index: number;
  totalItems: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  index,
  totalItems,
}) => {
  const isSecondLast = index === totalItems - 2;
  const isLast = index === totalItems - 1;
  const isNotFirstInRowDesktop = index % 3 !== 0;
  const isNotFirstInRowMobile = index % 2 !== 0;

  return (
    <div
      className={`relative flex min-h-20 w-1/3 flex-col justify-center rounded-xl max-lg:min-h-18 max-lg:w-1/2 max-md:max-h-16.5 max-md:min-h-16 max-md:max-w-[150px] lg:items-center ${
        isNotFirstInRowDesktop ? "lg:gradient-grey-border-left" : ""
      } ${isNotFirstInRowMobile ? "max-lg:gradient-grey-border-left" : ""} ${
        isSecondLast ? "lg:gradient-grey-border-right w-[50%]" : ""
      } ${isLast ? "gradient-grey-border-top w-[50%]" : ""}`}
    >
      <CardReveal
        delay={0.2}
        distance={50}
        className="flex flex-col items-center justify-center gap-2.5 p-2.5 max-md:mx-auto max-md:max-w-32.5"
      >
        {icon && (
          <span>
            <Image
              width={icon.width}
              height={icon.height}
              alt={icon.alternativeText || icon.name}
              src={icon.url}
            />
          </span>
        )}
        <p className="industry-shift-text text-lg font-bold leading-[100%] opacity-80 max-lg:text-center max-lg:text-base max-md:text-sm max-sm:text-xs">
          {title}
        </p>
      </CardReveal>
    </div>
  );
};

export default FeatureCard;