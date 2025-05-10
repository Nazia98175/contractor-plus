import Image from "next/image";
import { MakeOperationlist } from "../common/Helper";
import { RedClipIcon } from "../common/Icons";

const MakeOperation = () => {
  return (
    <section className="bg-kuroilight relative pt-16">
      <Image
        height={600}
        width={600}
        unoptimized
        className="top-0 left-0 absolute h-[600px] w-full pointer-events-none"
        src="/images/png/stars.png"
        alt="stars image"
      />
      <div className="hidden lg:block absolute bottom-0 left-[70px] max-w-[40px] rotate-[-45deg] w-full h-[500px] rounded-[10px] bg-athenaBlue blur-[34px] opacity-20 pointer-events-none"></div>
      {/* <img
        className="top-0 right-0 absolute h-[600px] w-[300px]"
        src="/images/png/large-comet.png"
        alt=""
      /> */}
      <span className="top-[-202px] right-0 absolute pointer-events-none">
        <RedClipIcon />
      </span>
      <div className="main-container pb-10">
        <h3 className=" text-[26px] md:text-4xl lg:text-[42px] font-semibold font-jakarta text-white text-center">
          Make operations your competitive edge
        </h3>
        <p className="text-[22px] text-secondary text-center font-jakarta pt-2">
          The ROI from Contractor+ makes the choice easy
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-8">
          {MakeOperationlist.map((item, index) => (
            <article
              key={index}
              className="flex flex-col gap-2 items-center text-center"
            >
              <span>{item.icon}</span>
              <h3 className="text-2xl font-bold text-white font-jakarta">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-secondary font-montserrat">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakeOperation;
