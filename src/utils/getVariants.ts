export const themeClassMap: Record<string, string> = {
  light: "wanting-more-bg",
  dark: "field-service-card",
  estimateTheme: "estimate-overlap-card",
  goldTheme: "gold-overlap-card",
};

export const variantsForm = {
  default: {
    title: "text-white sub-heading font-extrabold",
    subtitle: "text-secondary",
    input: "bg-white text-gray-900 placeholder:text-secondary",
  },
  primary: {
    title: "text-decemberSky sub-heading font-extrabold",
    subtitle: "text-decemberSky",
    input:
      "bg-lightBlack text-white placeholder:text-white border-b border-white",
  },
  secondary: {
    title: "text-decemberSky sub-heading font-extrabold",
    subtitle: "text-decemberSky",
    input:
      "bg-kuroiBlack text-secondary placeholder:text-secondary border-b border-white",
  },
  tertiary: {
    title: "text-white sub-heading font-extrabold max-w-full",
    subtitle: "text-decemberSky",
    input: "bg-white text-secondary placeholder:text-secondary ",
  },
  white: {
    title: "text-winterWay sub-heading font-extrabold max-w-full",
    subtitle: "text-pantone sm:text-secondary font-medium",
    input: "bg-white placeholder:text-secondary border-b border-cyanBlue",
  },
};
export const headingStyles = {
  default: { title: "faq-heading-text", sub_title: "text-secondary" },
  primary: { title: "gradient-text-2", sub_title: "text-secondary" },
  white: { title: "text-white", sub_title: "text-lightGray" },
  accent: { title: "text-accent", sub_title: "text-secondary" },
};
export const variantStyles = {
  default: {
    question: "text-white",
    answer: "text-decemberSky",
  },
  light: {
    question: "text-gray-100",
    answer: "text-gray-300",
  },
  dark: {
    question: "text-gray-900",
    answer: "text-gray-700",
  },
  accent: {
    question: "text-primary",
    answer: "text-secondary",
  },
  muted: {
    question: "text-winterWay",
    answer: "text-secondary",
  },
};
export const variantStylesCardButton = {
  default: "text-secondary",
  primary: "text-ancestral",
  light: "text-white",
  dark: "text-decemberSky",
  muted: "text-muted",
};
export const tagColors: Record<string, { bg: string; text: string }> = {
  Leadership: { bg: "bg-sugar", text: "text-dragonlord" },
  Management: { bg: "bg-wash", text: "text-lviv" },
  Product: { bg: "bg-alice", text: "text-led" },
  Research: { bg: "bg-aliceBlue", text: "text-kikorangi" },
  Design: { bg: "bg-aliceBlue", text: "text-dragonlord" },
  Frameworks: { bg: "bg-fatback", text: "text-sinopia" },
  "Software Development": { bg: "bg-mint", text: "text-blarney" },
  Tools: { bg: "bg-placebo", text: "text-bramble" },
  Architecture: { bg: "bg-alice", text: "text-led" },
  SaaS: { bg: "bg-placebo", text: "text-bramble" },
  Podcasts: { bg: "bg-sugar", text: "text-dragonlord" },
  "Customer Success": { bg: "bg-wash", text: "text-lviv" },
};
export const variantsBlogCard = {
  small: {
    wrapper:
      "group flex flex-col gap-6 lg:flex-row transition-all duration-200 ease-in",
    imageWrapper:
      "overflow-hidden rounded-lg max-h-[240px] lg:max-h-[200px] min-h-[200px] h-full",
    contentWrapper: "h-auto w-full ",
    title: "text-lg text-eerieBlack font-semibold",
  },
  large: {
    wrapper: "group flex flex-col transition-all duration-200 ease-in",
    imageWrapper: "w-full overflow-hidden rounded-lg max-h-[240px] h-full",
    contentWrapper: "mt-5 sm:mt-8",
    title: "text-lg sm:text-xl md:text-2xl text-eerieBlack font-semibold",
  },
};
