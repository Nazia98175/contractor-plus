import Image from "next/image";

const awards = [
  {
    src: "/images/webp/software-advice.webp",
    alt: "Software Advice Front Runners 2024",
    width: 121,
    height: 123,
    className: "h-fit object-contain",
  },
  {
    src: "/images/webp/leader.webp",
    alt: "G2 Leader Winter 2025",
    width: 121,
    height: 123,
    className: "md:mt-16 h-fit object-contain",
  },
  {
    src: "/images/webp/get-app.webp",
    alt: "GetApp Best Functionality 2025",
    width: 137,
    height: 131,
    className: "md:mt-20 h-fit object-contain",
  },
  {
    src: "/images/svg/capterra.svg",
    alt: "Capterra Best Value 2025",
    width: 137,
    height: 104,
    className: "md:mt-16 h-fit object-contain",
  },
  {
    src: "/images/webp/best-value.webp",
    alt: "Capterra Shortlist 2025",
    width: 122,
    height: 111,
    className: "h-fit object-contain",
  },
];

export default function AwardBadges() {
  return (
    <section className="relative z-30 py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <button className="rounded-full bg-red-700 px-6 py-2 font-bold text-white shadow-md hover:bg-red-800">
          Get started <span className="font-extrabold italic">FREE</span>
        </button>
        <p className="mt-2 text-sm text-white">No Credit Card Required</p>
      </div>
      <div className="no-scrollbar mt-8 flex items-center justify-center gap-5 overflow-auto px-4 md:items-start lg:gap-14">
        {awards.map((award, index) => (
          <Image
            key={index}
            src={award.src}
            alt={award.alt}
            width={award.width}
            height={award.height}
            className={award.className}
          />
        ))}
      </div>
    </section>
  );
}
