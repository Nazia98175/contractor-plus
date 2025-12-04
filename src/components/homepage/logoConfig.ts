export interface LogoConfig {
  defaultSrc: string;
  alt: string;
  boxSize: {
    mobile: string;
    desktop: string;
  };
  imageSize: {
    mobile: string;
    desktop: string;
  };
  imageWidth: number;
  imageHeight: number;
}

export const LEFT_LOGOS_CONFIG: LogoConfig[] = [
  {
    defaultSrc: "/images/webp/outlook.webp",
    alt: "contractor",
    boxSize: {
      mobile: "h-[55px] w-[55px]",
      desktop: "lg:h-20 lg:w-20",
    },
    imageSize: {
      mobile: "max-w-[30px]",
      desktop: "lg:max-w-[40px]",
    },
    imageWidth: 40,
    imageHeight: 40,
  },
  {
    defaultSrc: "/images/png/contractor-1.png",
    alt: "contractor",
    boxSize: {
      mobile: "h-[58px] w-[58px]",
      desktop: "lg:h-[85px] lg:w-[85px]",
    },
    imageSize: {
      mobile: "max-w-[26px]",
      desktop: "lg:max-w-[38px]",
    },
    imageWidth: 38,
    imageHeight: 38,
  },
  {
    defaultSrc: "/images/svg/contractor-3.svg",
    alt: "contractor",
    boxSize: {
      mobile: "h-[62px] w-[62px]",
      desktop: "lg:h-[85px] lg:w-[85px] xl:h-[93px] xl:w-[93px]",
    },
    imageSize: {
      mobile: "max-w-[45px]",
      desktop: "lg:max-w-[66px]",
    },
    imageWidth: 66,
    imageHeight: 17,
  },
];

export const RIGHT_LOGOS_CONFIG: LogoConfig[] = [
  {
    defaultSrc: "/images/png/contractor-4.png",
    alt: "contractor",
    boxSize: {
      mobile: "h-[55px] w-[55px]",
      desktop: "lg:h-[85px] lg:w-[85px] xl:h-[93px] xl:w-[93px]",
    },
    imageSize: {
      mobile: "max-w-[29px]",
      desktop: "lg:max-w-[38px]",
    },
    imageWidth: 38,
    imageHeight: 38,
  },
  {
    defaultSrc: "/images/png/contractor-5.png",
    alt: "contractor",
    boxSize: {
      mobile: "h-[46px] w-[46px]",
      desktop: "lg:h-[72px] lg:w-[72px]",
    },
    imageSize: {
      mobile: "max-w-[25px]",
      desktop: "lg:max-w-[38px]",
    },
    imageWidth: 38,
    imageHeight: 38,
  },
  {
    defaultSrc: "/images/png/contractor-6.png",
    alt: "contractor",
    boxSize: {
      mobile: "h-10 w-10",
      desktop: "lg:h-[61px] lg:w-[61px]",
    },
    imageSize: {
      mobile: "max-w-[21px]",
      desktop: "lg:max-w-[33px]",
    },
    imageWidth: 33,
    imageHeight: 33,
  },
];
