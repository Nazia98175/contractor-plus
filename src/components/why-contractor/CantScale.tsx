import { Cross2Icon } from "../common/Icons";

const messages = [
  {
    text: "The contractors pulling ahead aren’t the ones grinding harder. They’ve rejected “the way it’s always been done” and rebuilt the back end",
    iconAtStart: true,
    pt: "md:pt-[247px] ml-auto",
  },
  {
    text: "And now they’re outpacing everyone else without even trying.",
    iconAtStart: false,
    pt: "md:pb-[176px]",
  },
];

const CantScale = () => {
  return (
    <div className="relative mt-10 flex flex-col md:mt-14">
      <h3 className="relative z-10 text-center text-2xl font-medium text-[#44474B]">
        The industry has shifted.
      </h3>

      <div className="relative mx-auto flex h-full w-full max-w-[869px] flex-col gap-5 py-24 sm:justify-between sm:py-[220px] md:py-0">
        <div className="pointer-events-none absolute -top-[20%] left-1/2 z-0 mx-auto h-full max-h-[682px] min-h-[500px] w-full max-w-[646px] -translate-x-1/2 rounded-full bg-[url('/images/webp/cracked.webp')] bg-contain bg-center bg-no-repeat sm:min-h-[682px] md:-top-8"></div>

        {messages.map(({ text, iconAtStart, pt }, index) => (
          <article
            key={index}
            className={`text-wallStreet relative z-10 flex max-w-[350px] gap-2.5 px-4 py-2.5 text-sm font-semibold -tracking-[0.28px] ${pt}`}
          >
            {iconAtStart && (
              <span className="mt-2 shrink-0">
                <Cross2Icon />
              </span>
            )}
            <span>{text}</span>
            {!iconAtStart && (
              <span className="mt-2 shrink-0">
                <Cross2Icon />
              </span>
            )}
          </article>
        ))}
      </div>
    </div>
  );
};

export default CantScale;
