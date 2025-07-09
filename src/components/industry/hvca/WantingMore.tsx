import ScrollOverlapCards from "@/components/common/ScrollOverlapCards";
interface WantingMoreProps {
  fieldServiceData: any;
  slug: string;
}
const WantingMore: React.FC<WantingMoreProps> = ({
  fieldServiceData,
  slug,
}) => {
  console.log(fieldServiceData, "Hello");
  return (
    <section className="relative overflow-hidden px-2 pb-16">
      {/* <TextAnimation animateOnScroll={true} delay={0.1}> */}

      {slug === "general-contractor" ? (
        <h2 className="section-heading-2 heading-text-2 3xl:hidden relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
          {fieldServiceData?.title}
        </h2>
      ) : (
        <h2 className="section-heading-2 gradient-text-2 3xl:hidden relative z-20 mx-auto block w-fit max-w-[1044px] text-center font-bold lg:font-semibold">
          {fieldServiceData?.title}
        </h2>
      )}
      {/* </TextAnimation> */}
      <div className="relative mt-9 flex w-full flex-col items-center justify-center">
        <div className="border-romanRed absolute bottom-[20%] -z-[1] mx-auto h-full max-h-[613px] w-full max-w-[1312px] rounded-[40%] border bg-[rgba(242,19,20,0.27)] blur-[30px]"></div>
      </div>
      <ScrollOverlapCards
        theme="light"
        fieldService={fieldServiceData}
        apiData={false}
        slug={slug}
      />
    </section>
  );
};

export default WantingMore;
