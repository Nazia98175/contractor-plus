import CombinesPowerfulAiSlider from "./CombinesPowerfulAiSlider";

const CombinesPowerfulAi = () => {
  return (
    <section className="relative overflow-visible bg-white">
      {/* <RealTimeServiceConnectorIcon className="pointer-events-none absolute bottom-[48%] -left-[65%] z-50 sm:bottom-[15%] sm:left-0 lg:bottom-[18%]" /> */}
      <div className="mx-auto w-full max-w-[1036px] px-2">
        <h4 className="section-heading-2 gradient-custom-2 text-center">
          Contractor+ Local combines powerful AI with a human-in-the loop
          approach
        </h4>
        <p className="paragraph-text text-codexGrey mt-4 mb-5 text-center">
          The only contractor platform with done-for-you local SEO built in.
        </p>
      </div>
      <CombinesPowerfulAiSlider />
    </section>
  );
};

export default CombinesPowerfulAi;
