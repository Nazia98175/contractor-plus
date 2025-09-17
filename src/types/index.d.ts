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
export interface Industry {
  id: number;
  name: string;
  description?: string;
}
export type Period = "Monthly" | "Quarterly";

export type UnitOfMeasurement = "Hour" | "Square Foot" | "Linear Foot" | "Unit";
export interface State {
  id: number;
  name: string;
  abbreviation: string;
  region: string;
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
  isLoop: boolean | undefined;
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
  isIcon?: boolean;
  cardQuote?: string;
  userName?: string;
}
export interface Testimonial {
  quote?: string;
  author?: string;
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
  title: string;
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
  integrationTitle: string;
  subDescription: string;
  name: string;
  logo: string;
  tags?: {
    id: number;
    title: string;
  }[];
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
  slug?: string;
}

type PromiseParams = Promise<{ slug?: string; locale: string }>;
declare interface StatisticCardProps {
  id: number;
  title: string;
  subTitle: string;
}

declare interface Review {
  id: string | number;
  profileImg: { url: string };
  userName?: string;
  rating: number;
  review: string;
}

export type AllFeaturesProps = {
  id: number;
  title: string;
  featuresArray: {
    id: number;
    text: string;
    slug: string;
    icon: { url: string };
  }[];
};

export namespace TermsServiceData {
  export interface PageDescription {
    type: string;
    level: number;
    children: {
      text: string;
      type: string;
    }[];
  }

  export interface Data {
    id: number;
    pageDescription: PageDescription[];
    updatedAt: string;
    createdAt: string;
    publishedAt: string;
  }
}

export type PagePromise = {
  params: Promise<{
    locale: string;
    slug?: string;
  }>;
};

export type PodcastData = {
  id: number;
  documentId: string;
  podcastTag: string;
  title: string;
  subTitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  ctaText: string;
  ctaUrl: string | null;
  ourPodcastTitle: string;
  recentPodcastTitle: string;
  SeoMetaData: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string | null;
    keywords: string;
  };
  image: {
    id: number;
    url: string;
  };
};

export namespace PodcastDataResponse {
  export type apiResponse = {
    data: {
      id: number;
      type: string;
      relationships: {
        episodes: {
          data: {
            id: string;
            type: string;
          }[];
        };
      };
      attributes: {
        description: string;
        image_url: string;
        title: string;
        created_at: string;
        feed_url: string;
        spotify: string;
      };
    }[];
    meta: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
    };
  };
  export type show = {
    id: number;
    type: string;
    relationships: {
      episodes: {
        data: {
          id: string;
          type: string;
        }[];
      };
    };
    attributes: {
      description: string;
      image_url: string;
      title: string;
      created_at: string;
      feed_url: string;
      spotify: string;
    };
  };
}

export type ResourceHomepage = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageWidth: string;
  backgroundImage: string;
  blogUrl: string;
};
