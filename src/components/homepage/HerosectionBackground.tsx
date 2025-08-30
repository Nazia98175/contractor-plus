import Image from "next/image";

const HerosectionBackground = () => {
  return (
    <>
      <Image
        width={800}
        height={1000}
        className="absolute top-0 left-0 hidden max-h-[800px] w-full max-w-[800px] object-center lg:block"
        src={"/images/webp/hero-red-line.webp"}
        alt="hero-red-line"
      />
      <Image
        width={800}
        height={2000}
        className="pointer-events-none absolute top-[20%] z-50 flex h-[135%] w-[110%] object-center lg:hidden"
        src={"/images/webp/hero-red-line-mobile.webp"}
        alt="hero-red-line"
      />
    </>
  );
};

export default HerosectionBackground;
