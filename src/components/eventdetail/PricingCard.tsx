import CardReveal from "../common/CardReveal";

const PricingCard = ({ pricing }: { pricing: any }) => {
  return (
    <article className="card-shine-2 bg-jetBlack! h-full w-full overflow-hidden rounded-xl">
      {/* {pricing?.image && (
        <CardReveal delay={0.4} distance={50}>
          <Image
            width={500}
            height={500}
            className="ios-image h-full max-h-[200px] min-h-[200px] w-full rounded-lg"
            src={pricing?.image?.url}
            alt={pricing?.title}
          />
        </CardReveal>
      )} */}
      <CardReveal delay={0.5} distance={50} className="h-full">
        <div className="flex h-full flex-col justify-between p-3">
          <div>
            <h3 className="font-2xl text-pantone3 font-semibold">
              {pricing?.title ?? ""}
            </h3>

            <p className="text-flintstone pt-2 pb-4 text-base">
              {pricing?.subTitle ?? ""}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-extrabold text-white">
              {pricing?.currency ?? ""} {pricing?.price ?? ""}
            </h3>
            {/* <span>
              <EventDetailIcon />
            </span> */}
          </div>
        </div>
      </CardReveal>
    </article>
  );
};

export default PricingCard;
