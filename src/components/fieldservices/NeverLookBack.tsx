// "use client";
// import { useCallback, useEffect, useRef } from "react";
// import AwardsTagsImg from "../common/AwardsTagsImg";
// import SoftwareUsed from "../common/SoftwareUsed";
// import { Props } from "../crmbussiness/TeamsUsingContractor";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);
// // Define the LottieAnimationRef type
// type LottieAnimationRef = {
//   play: () => void;
//   stop: () => void;
//   pause: () => void;
//   // Add other methods your Lottie component might have
// };
// const NeverLookBack: React.FC<Props> = ({ data }) => {
//   const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);
//   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const scrollTriggersRef = useRef<any[]>([]);
//   // Memoize setLottieRef to prevent recreating on every render
//   const setLottieRef = useCallback(
//     (index: number) => (el: LottieAnimationRef | null) => {
//       if (lottieRefs.current) {
//         lottieRefs.current[index] = el;
//       }
//     },
//     [],
//   );

//   useEffect(() => {
//     setTimeout(() => {
//       // Clean up existing lottie triggers
//       scrollTriggersRef.current.forEach((trigger) => {
//         if (trigger && typeof trigger.kill === "function") {
//           trigger.kill();
//         }
//       });

//       scrollTriggersRef.current = [];

//       data?.cards?.forEach((_: any, index: number) => {
//         const element = contentRefs.current[index];

//         if (element) {
//           const trigger = ScrollTrigger.create({
//             trigger: element,
//             start: `bottom 100%`,
//             end: `top 0%`,
//             onEnter: () => {
//               if (lottieRefs.current[index]) {
//                 lottieRefs.current[index]?.play();
//               }
//             },
//             onEnterBack: () => {
//               if (lottieRefs.current[index]) {
//                 lottieRefs.current[index]?.play();
//               }
//             },
//             markers: false,
//             id: `animation-new-${index + 1}`,
//           });

//           scrollTriggersRef.current.push(trigger);
//         }
//       });

//       return () => {
//         scrollTriggersRef.current.forEach((trigger) => {
//           if (trigger && typeof trigger.kill === "function") {
//             trigger.kill();
//           }
//         });
//         scrollTriggersRef.current = [];
//       };
//     }, 700);
//   }, [data?.cards]);

//   return (
//     <section className="relative z-10 w-full bg-white pt-[50px] sm:pt-14 md:pt-[70px]">
//       <div className="pointer-events-none absolute top-[-86px] left-[-20%] z-50 h-[150px] w-[140%] bg-white blur-[34px]"></div>
//       <div className="absolute -top-0.5 z-[2] hidden h-3 w-full bg-white sm:block"></div>
//       <Image
//         width={1440}
//         height={200}
//         priority
//         sizes="(max-width: 768px) 1440px, min-width:(768px, 1440px)"
//         src="/images/webp/red-linear-bg.webp"
//         className="absolute -top-0 left-0 -z-[3] hidden h-[124%] w-full bg-cover sm:block"
//         alt="Red Lineaar background"
//       />
//       <Image
//         width={1440}
//         height={200}
//         priority
//         sizes="(max-width: 768px) 1440px, min(768px, 1440px)"
//         src="/images/webp/red-linear-mobile.webp"
//         className="absolute top-0 left-0 -z-[5] block h-[110%] w-full bg-top sm:hidden"
//         alt="Red Lineaar background"
//       />

//       <h3 className="sub-heading text-winterWay mb-[13px] hidden text-center font-semibold sm:block">
//         {data?.title}
//       </h3>
//       <h3 className="crm-gradient xs:text-[22px] xs:max-w-[93%] relative z-50 mx-auto mb-[9px] block max-w-[88%] text-center text-[19px] font-extrabold sm:hidden sm:max-w-[330px]">
//         {data?.title}
//       </h3>
//       <p className="paragraph-text gradient-text-2 text-center leading-[124%] sm:hidden">
//         {data?.subTitle}
//       </p>
//       <p className="paragraph-text text-darkness hidden text-center leading-[124%] font-semibold sm:block">
//         {data?.subTitle}
//       </p>
//       <div className="main-container relative z-20 flex flex-wrap justify-center gap-3.5 pt-7 pb-10 sm:gap-6 sm:pt-10 md:pt-8 xl:grid xl:grid-cols-3">
//         {data?.cards?.map((item: any, index: any) => (
//           <div
//             key={index}
//             ref={(el) => {
//               if (contentRefs.current) {
//                 contentRefs.current[index] = el;
//               }
//             }}
//           >
//             <SoftwareUsed
//               key={index}
//               item={item}
//               icons={data?.images}
//               index={index}
//               setLottieRef={setLottieRef}
//               titleColor="text-white sm:text-winterWay"
//               paragraphColor="text-decemberSky sm:text-white"
//             />
//           </div>
//         ))}
//       </div>
//       <AwardsTagsImg />
//     </section>
//   );
// };
// export default NeverLookBack;
"use client";
import { useCallback, useEffect, useRef } from "react";
import AwardsTagsImg from "../common/AwardsTagsImg";
import SoftwareUsed from "../common/SoftwareUsed";
import { Props } from "../crmbussiness/TeamsUsingContractor";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Define the LottieAnimationRef type
type LottieAnimationRef = {
  play: () => void;
  stop: () => void;
  pause: () => void;
  // Add other methods your Lottie component might have
};

const NeverLookBack: React.FC<Props> = ({ data }) => {
  const lottieRefs = useRef<(LottieAnimationRef | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggersRef = useRef<any[]>([]);

  // Memoize setLottieRef to prevent recreating on every render
  const setLottieRef = useCallback(
    (index: number) => (el: LottieAnimationRef | null) => {
      if (lottieRefs.current) {
        lottieRefs.current[index] = el;
      }
    },
    [],
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Clean up existing lottie triggers
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });

      scrollTriggersRef.current = [];

      data?.cards?.forEach((_: any, index: number) => {
        const element = contentRefs.current[index];

        if (element) {
          const trigger = ScrollTrigger.create({
            trigger: element,
            start: `bottom 100%`,
            end: `top 0%`,
            onEnter: () => {
              const anim = lottieRefs.current[index];
              if (anim && typeof anim.play === "function") {
                anim.play();
              }
            },
            onEnterBack: () => {
              const anim = lottieRefs.current[index];
              if (anim && typeof anim.play === "function") {
                anim.play();
              }
            },
            markers: false, // Set true if you want debug markers
            id: `animation-new-${index + 1}`,
          });

          scrollTriggersRef.current.push(trigger);
        }
      });
    }, 700);

    return () => {
      clearTimeout(timeoutId);
      scrollTriggersRef.current.forEach((trigger) => {
        if (trigger && typeof trigger.kill === "function") {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
    };
  }, [data?.cards]);

  return (
    <section className="relative z-10 w-full bg-white pt-[50px] sm:pt-14 md:pt-[70px]">
      <div className="pointer-events-none absolute top-[-86px] left-[-20%] z-50 h-[150px] w-[140%] bg-white blur-[34px]"></div>
      <div className="absolute -top-0.5 z-[2] hidden h-3 w-full bg-white sm:block"></div>
      <Image
        width={1440}
        height={200}
        priority
        sizes="(max-width: 768px) 1440px, min-width:(768px, 1440px)"
        src="/images/webp/red-linear-bg.webp"
        className="-z- absolute -top-0 left-0 hidden h-[124%] w-full bg-cover sm:block"
        alt="Red Linear background"
      />
      <Image
        width={1440}
        height={200}
        priority
        sizes="(max-width: 768px) 1440px, min(768px, 1440px)"
        src="/images/webp/red-linear-mobile.webp"
        className="-z- absolute top-0 left-0 block h-[110%] w-full bg-top sm:hidden"
        alt="Red Linear background"
      />

      <h3 className="sub-heading text-winterWay relative z-[9999] mb-[13px] hidden text-center font-semibold sm:block">
        {data?.title}
      </h3>
      <h3 className="crm-gradient xs:text-[22px] xs:max-w-[93%] relative z-[9999] mx-auto mb-[9px] block max-w-[88%] text-center text-[19px] font-extrabold sm:hidden sm:max-w-[330px]">
        {data?.title}
      </h3>
      <p className="paragraph-text gradient-text-2 relative z-[9999] text-center leading-[124%] sm:hidden">
        {data?.subTitle}
      </p>
      <p className="paragraph-text text-darkness relative z-[9999] hidden text-center leading-[124%] font-semibold sm:block">
        {data?.subTitle}
      </p>
      <div className="main-container relative z-20 flex flex-wrap justify-center gap-3.5 pt-7 pb-10 sm:gap-6 sm:pt-10 md:pt-8 xl:grid xl:grid-cols-3">
        {data?.cards?.map((item: any, index: any) => (
          <div
            key={index}
            ref={(el) => {
              if (contentRefs.current) {
                contentRefs.current[index] = el;
              }
            }}
          >
            <SoftwareUsed
              key={index}
              item={item}
              icons={data?.images}
              index={index}
              setLottieRef={setLottieRef}
              titleColor="text-white sm:text-winterWay"
              paragraphColor="text-decemberSky sm:text-white"
            />
          </div>
        ))}
      </div>
      <AwardsTagsImg />
    </section>
  );
};
export default NeverLookBack;
