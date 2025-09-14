import Image from "next/image";

interface Props {
  step?: any;
}
const GoingFieldSevicesCard: React.FC<Props> = ({ step }) => {
  return (
    <div className="relative z-10 mx-auto flex h-full w-full max-w-[300px] flex-col items-center gap-1 text-center md:w-[48%] lg:w-full">
      <div className="mb-2 w-7 sm:w-8">
        {step.cardImg ? (
          <Image
            className="mb-2 w-full object-cover"
            src={step.cardImg.url}
            alt={step.text}
            width={32}
            height={32}
          />
        ) : (
          <>{step.icon}</>
        )}
      </div>

      <p className="text-winterWay line-clamp-3 max-w-[327px] text-center text-base font-medium sm:text-lg md:text-xl md:leading-[128%]">
        {step.text}
      </p>
    </div>
  );
};

export default GoingFieldSevicesCard;
