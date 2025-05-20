type LanguageOption = {
  label: string;
  value: string;
  code: string;
};
export interface Feature {
  title: string;
  description: string;
}

export interface ServiceData {
  heading: string;
  features: Feature[];
  user?: string;
  username?: string;
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
