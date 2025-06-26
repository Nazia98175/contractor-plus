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
  primary: "text-primary",
  light: "text-white",
  dark: "text-decemberSky",
  muted: "text-muted",
};
