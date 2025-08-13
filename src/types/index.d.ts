type LanguageOption = {
  label: string;
  value: string;
  code: string;
};
export interface Feature {
  title: string;
  description: string;
}

export interface Testimonial {
  user: string;
  username: string;
}

export interface ReviewCardProps {
  review: Review;
  openModal: () => void;
}
export interface handleClickProps {
  handleClick: (title: string) => void;
}
export interface TheServiceProps {
  kindAdorable: any;
  slug?: string;
  variant?: "light" | "dark";
  icon?: boolean;
  issubHeadingShow?: boolean;
}
export interface ServiceData {
  heading: string;
  features: Feature[];
  testimonial?: Testimonial;
  img?: string;
  title: string;
  content: any;
  cardQuote: string;
  userName: string;
  cardImg?: { url?: string };
  lottieJson?: object;
}

export type ContractorPlatformsProps = {
  params: Promise<{
    locale: string;
  }>;
};
export interface Platform {
  name: string;
  logo: string;
  rating: number;
}

export interface PlatformItem {
  cardImg: any;
  title: string;
  text: string;
  image: string;
}

export interface HomePageResponse {
  hero: any;
  data: any;
  meta?: any;
}
export type PlansProps = {
  onScroll?: () => void;
  pageContent?: any;
  commonData?: any;
  pricingPlans?: any;
  reviews?: any;
};

export interface Plan {
  name: string;
  cta: string;
  variant: "default" | "pro" | "proTeam";
}
export interface tableFeature {
  name: string;
  description: any;
  available: Availability[];
}
export interface Review {
  id: string | number;
  profileImg: {
    url: string;
  };
  userName?: string;
  companyLogo?: string;
  role?: string;
  userRole?: string;
  rating: number;
  review: string;
  isModal?: boolean;
  videoLink?: string;
}

export type CompareFeature = {
  name: string;
  eContractorHas: boolean;
  othersHave: boolean;
  ourProduct: string;
  featureName: string;
  competitorsNote: string;
};

// types/navigation.ts

export interface NavSection {
  heading: string;
  list?: NavListItem[] | (NavSubSection | NavListItem)[];
  bottomLinks?: SimpleLink[];
}

export interface NavListItem {
  link: string;
  title: string;
  sub_title?: string;
  tag?: string;
}

export interface NavSubSection {
  section: string;
  items: NavListItem[];
}

export interface SimpleLink {
  link: string;
  title: string;
}

// types.ts
export interface IntegrationItem {
  id: string;
  name: string;
  logo: string;
  categories: string[];
  description: string;
  link: string;
  integrationName?: string;
  integrationSubTitle?: string;
  image?: {
    url?: string;
  };
  thumbnailImage?: {
    url?: string;
  };
}
