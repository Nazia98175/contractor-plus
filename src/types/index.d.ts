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
  title: string;
  description: string;
  image: string;
}

export interface HomePageResponse {
  data: any;
  meta?: any;
}
export type PlansProps = {
  onScroll: () => void;
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
  profileUrl: string;
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
