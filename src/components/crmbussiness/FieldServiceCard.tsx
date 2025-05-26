import React from "react";
import { TickIcon } from "../common/Icons";
import { ServiceData } from "@/types";
import Image from "next/image";
import { fieldServiceData } from "../common/Helper";

interface Props {
  service: ServiceData;
  slug: string;
  idx: any;
}

const FieldServiceCard: React.FC<Props> = ({ service, slug , idx }) => {
  const isEstimate = slug === "estimate";
  const features = service?.content || [];

  return (
    <article className="flex lg:flex-row items-start flex-col gap-7 justify-between text-white">
      <div className="xl:max-w-[650px] w-full">
        <div className="flex flex-col gap-4 sm:gap-5 lg:p-[26px]">
          <h4 className="text-base md:text-2xl xl:text-[26px] font-semibold font-montserrat lg:font-jakarta py-0.5 px-2.5">
            {service?.title}
          </h4>

          {/* Image for mobile */}
          <div className="rounded-lg block xl:hidden h-full min-h-[245px] md:h-auto w-full side-img"></div>

          <div className="flex flex-col gap-4 md:gap-6">
            {(isEstimate ? features.slice(0, -1) : features).map((feature: any, index: number) => (
              <div key={index} className="flex gap-3">
                <span className="md:min-w-5 sm:max-w-5 max-w-[14px] h-fit">
                  <TickIcon />
                </span>
                <div className="flex flex-col gap-2 xl:gap-3">
                  <h5 className="text-sm sm:text-base lg:text-lg font-semibold lg:font-bold leading-none xl:leading-[79%] font-montserrat lg:font-jakarta">
                    {feature?.title}
                  </h5>
                  <p className="text-xs sm:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
                    {feature?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estimate testimonial */}
        {isEstimate &&  (
          <p className="p-3 text-secondary text-[10px] sm:text-xs lg:text-sm font-montserrat font-medium">
            {features[features.length - 1]?.title} <br /> <br /> –{" "}
            {features[features.length - 1]?.desc}
          </p>
        )}
      </div>

      {/* Desktop image */}
      <div className="rounded-lg xl:block hidden w-full max-w-[518px]">
        <Image
          src={fieldServiceData?.[idx]?.img || "/placeholder.png"}
          alt={service?.title || "service image"}
          width={518}
          height={302}
          className="object-cover rounded-lg w-full h-auto"
        />
      </div>
    </article>
  );
};

export default FieldServiceCard;




// import React from "react";
// import { TickIcon } from "../common/Icons";
// import { ServiceData } from "@/types";
// import Image from "next/image";

// interface Props {
//   service: ServiceData;
//   slug: string;
// }

// const FieldServiceCard: React.FC<Props> = ({ service , slug}) => {
//   return (
//     <article className="flex lg:flex-row items-start flex-col gap-7 justify-between text-white">
//       <div className="xl:max-w-[650px] w-full">
//         <div className="flex flex-col gap-4 sm:gap-5 lg:p-[26px]">
//           <h4 className="text-base md:text-2xl xl:text-[26px] font-semibold font-montserrat lg:font-jakarta py-0.5 px-2.5">
//             {service.title}
//           </h4>
//           <div className="rounded-lg block xl:hidden h-full min-h-[245px] md:h-auto w-full side-img"></div>
//           <div className="flex flex-col gap-4 md:gap-6">
//             {slug=== "estimate" ? service.content.slice(0 , service?.content?.length-1)map((feature:any, index:any) => (
//               <div key={index} className="flex gap-3">
//                 <span className="md:min-w-5 sm:max-w-5 max-w-[14px] h-fit">
//                   <TickIcon />
//                 </span>
//                 <div className="flex flex-col gap-2 xl:gap-3">
//                   <h5 className="text-sm sm:text-base lg:text-lg font-semibold lg:font-bold leading-none xl:leading-[79%] font-montserrat lg:font-jakarta">
//                     {feature.title}
//                   </h5>
//                   <p className="text-xs sm:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
//                     {feature.desc}
//                   </p>
//                 </div>
//               </div>
//             )) :service.content.map((feature:any, index:any) => (
//               <div key={index} className="flex gap-3">
//                 <span className="md:min-w-5 sm:max-w-5 max-w-[14px] h-fit">
//                   <TickIcon />
//                 </span>
//                 <div className="flex flex-col gap-2 xl:gap-3">
//                   <h5 className="text-sm sm:text-base lg:text-lg font-semibold lg:font-bold leading-none xl:leading-[79%] font-montserrat lg:font-jakarta">
//                     {feature.title}
//                   </h5>
//                   <p className="text-xs sm:text-sm lg:text-base font-medium text-secondary lg:text-superSilver">
//                     {feature.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {slug === "estimate" && service.testimonial && (
//           <p className="p-3 text-secondary text-[10px] sm:text-xs lg:text-sm font-montserrat font-medium">
//             “{service?.content[service?.content?.length-1].title}” <br /> <br /> –{" "}
//             {service?.content[service?.content?.length-1].desc}
//           </p>
//         )}
//       </div>
//       <div className="rounded-lg xl:block hidden w-full max-w-[518px]">
//         <Image
//           src={service.img || "/placeholder.png"}
//           alt={service.heading}
//           width={518}
//           height={302}
//           className="object-cover rounded-lg w-full h-auto"
//         />
//       </div>
//     </article>
//   );
// };

// export default FieldServiceCard;
