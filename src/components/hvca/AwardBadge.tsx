import Image from "next/image";

// const awards = [
//   {
//     src: "/images/webp/software-advice.webp",
//     alt: "Software Advice Front Runners 2024",
//   },
//   {
//     src: "/images/webp/leader.webp",
//     alt: "G2 Leader Winter 2025",
//   },
//   {
//     src: "/images/webp/get-app.webp",
//     alt: "GetApp Best Functionality 2025",
//   },
//   {
//     src: "/images/webp/capterraRating.webp",
//     alt: "Capterra Shortlist 2025",
//   },
//   {
//     src: "/images/svg/capterra.svg",
//     alt: "Capterra Best Value 2025",
//   },
// ];

export default function AwardBadges() {
  return (
    <section className="relative z-30 py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <button className="rounded-full bg-red-700 px-6 py-2 font-bold text-white shadow-md hover:bg-red-800">
          Get started <span className="font-extrabold italic">FREE</span>
        </button>
        <p className="mt-2 text-sm text-white">No Credit Card Required</p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-14 px-4">
        {/* {awards.map((award, index) => ( */}

        <Image
          src="/images/webp/software-advice.webp"
          alt="Software Advice Front Runners 2024"
          width={121}
          height={123}
          className="h-fit object-contain"
        />
        <Image
          src="/images/webp/leader.webp"
          alt="Software Advice Front Runners 2024"
          width={121}
          height={123}
          className="mt-16 h-fit object-contain"
        />
        <Image
          src="/images/webp/get-app.webp"
          alt="Software Advice Front Runners 2024"
          width={121}
          height={123}
          className="mt-20 h-fit object-contain"
        />
        <Image
          src="/images/svg/capterra.svg"
          alt="Software Advice Front Runners 2024"
          width={137}
          height={104}
          className="mt-16 h-fit object-contain"
        />
        <Image
          src="/images/svg/capterra.svg"
          alt="Software Advice Front Runners 2024"
          width={122}
          height={111}
          className="h-fit object-contain"
        />
      </div>
      {/* ))} */}
    </section>
  );
}
