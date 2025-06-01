import { wantingMoreData } from "../common/Helper";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import TextAnimation from "../common/TextAnimation";

const WantingMore = () => {
  return (
    <section className="relative overflow-hidden px-2 pb-16">
      <TextAnimation animateOnScroll={true} delay={0.1}>
        <h2 className="section-heading gradient-text-2 relative z-20 mx-auto w-fit max-w-[1004px] text-center !font-bold lg:!font-semibold">
          Contractor+ is the only HVAC software that doesn’t leave you still
          wanting more
        </h2>
      </TextAnimation>
      <div className="relative mt-9 flex w-full flex-col items-center justify-center">
        <div className="border-romanRed absolute bottom-[20%] -z-[1] mx-auto h-full max-h-[613px] w-full max-w-[1312px] rounded-[40%] border bg-[rgba(242,19,20,0.27)] blur-[30px]"></div>

        {/* {wantingMoreData.map((obj, idx) => (
          <article
            key={idx}
            className="wanting-more-bg relative  flex w-full max-w-[1232px] flex-col items-start justify-between gap-7 rounded-[14px] p-3 backdrop-blur-[20px] lg:flex-row lg:p-5 xl:rounded-[40px]"
          >
            <div className="w-full xl:max-w-[626px] xl:p-3">
              <div className="flex flex-col gap-3 md:gap-4 2xl:gap-5">
                <h4 className="card-title text-lightBlack">{obj.title}</h4>

                <div className="h-full min-h-[245px] w-full max-w-[518px] rounded-lg md:h-auto xl:hidden">
                  <Image
                    src={obj.imageSrc}
                    alt="service image"
                    width={518}
                    height={302}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col gap-4 2xl:gap-6">
                  {obj.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="h-fit max-w-[14px] min-w-3 sm:max-w-5 md:min-w-5">
                        <TickIcon />
                      </span>
                      <div className="flex flex-col gap-2 xl:gap-3">
                        <h5 className="text-lightBlack card-heading">
                          {feature.name}
                        </h5>
                        <p className="text-wallStreet card-desc">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-winterWay card-review">
                {obj.review} –
                <br /> <br /> – <strong>{obj.user}</strong>
              </p>
            </div>

            <div className="hidden w-full max-w-[518px] rounded-lg xl:block">
              <Image
                src="/images/webp/circular-slide-1.webp"
                alt={obj.title}
                width={518}
                height={302}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </article>
        ))} */}
      </div>{" "}
      <ScrollOverlapCards
        theme="light"
        slug={"testing"}
        fieldService={{ cardsDetail: wantingMoreData }}
        curved={true}
      />
    </section>
  );
};

export default WantingMore;
