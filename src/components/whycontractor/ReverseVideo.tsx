"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "../common/Copy";
import { StrokeText } from "./Icons";
import ImageSequenceCanvas from "./ImageSequenceCanvas";

gsap.registerPlugin(ScrollTrigger);

interface PropReverseVideo {
  reverseVideo: any;
}

const ReverseFrames: React.FC<PropReverseVideo> = ({ reverseVideo }) => {
  return (
    <section className="relative z-[0] bg-black px-2.5">
      {/* <Image
        sizes="(max-width: 768px) 1440px, min(768px, 1440px)"
        width={1440}
        height={500}
        ref={imageRef}
        src={framePaths[currentFrame]}
        alt={`Frame ${currentFrame + 1}`}
        className="relative z-[-1] mx-auto h-full w-full max-w-[1440px] object-cover object-top"
        loading="eager"
      /> */}
      <ImageSequenceCanvas className="relative z-[-1] mx-auto w-full max-w-[1440px] object-cover object-top" />

      <div
        className="absolute -top-1 left-0 z-10 h-10 w-full sm:h-[142px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <div
        className="absolute -bottom-1 left-0 z-10 h-20 w-full rotate-180 sm:h-[250px]"
        style={{
          background:
            "linear-gradient(180deg, #0C0D11 0%, rgba(12, 13, 17, 0) 90.88%)",
        }}
      ></div>
      <Copy animateOnScroll={true} delay={0}>
        <div className="absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pt-14 sm:pt-36">
          <h2 className="text-center text-lg leading-[127%] font-semibold text-white sm:text-4xl lg:text-5xl xl:text-[52px]">
            {reverseVideo?.description}
          </h2>
          <p className="">{reverseVideo?.subDescription}</p>
          <StrokeText />
        </div>
      </Copy>
    </section>
  );
};

export default ReverseFrames;
