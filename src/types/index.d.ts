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

export interface ServiceData {
  heading: string;
  features: Feature[];
  testimonial?: Testimonial;
  img?: string;
}

export type ContractorPlatformsProps = {
  params: Promise<{
    locale: string;
  }>;
};

export interface PlatformItem {
  title: string;
  description: string;
  image: string;
  // add any other fields you expect
}

export interface HomePageResponse {
  data: any; // Replace `any` with your actual API response type if known
  meta?: any;
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
  videolink?: string;
}

export type CompareFeature = {
  name: string;
  eContractorHas: boolean;
  othersHave: boolean;
};
