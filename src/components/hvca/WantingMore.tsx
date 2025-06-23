import { wantingMoreData } from "../common/Helper";
import ScrollOverlapCards from "../common/ScrollOverlapCards";
import TextAnimation from "../common/TextAnimation";

const WantingMore = () => {
  return (
    <section className="relative overflow-hidden px-2 pb-16">
      {/* <TextAnimation animateOnScroll={true} delay={0.1}> */}
      <h2 className="section-heading gradient-text-2 relative z-20 mx-auto w-fit max-w-[1004px] text-center font-bold lg:font-semibold">
        Contractor+ is the only HVAC software that doesn’t leave you still
        wanting more
      </h2>
      {/* </TextAnimation> */}
      <div className="relative mt-9 flex w-full flex-col items-center justify-center">
        <div className="border-romanRed absolute bottom-[20%] -z-[1] mx-auto h-full max-h-[613px] w-full max-w-[1312px] rounded-[40%] border bg-[rgba(242,19,20,0.27)] blur-[30px]"></div>
      </div>
      <ScrollOverlapCards
        theme="light"
        slug={"testing"}
        fieldService={{ cardsDetail: wantingMoreData }}
        apiData={false}
      />
    </section>
  );
};

export default WantingMore;
