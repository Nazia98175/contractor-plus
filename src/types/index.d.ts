export {};
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

export type PromiseParams = Promise<{ slug?: string; locale: string }>;
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
    id: number;
    link: string;
    thumbnail: string;
    title: string;
    description: string;
    published: string;
    isYoutube?: boolean;
    update?: string;
    calender?: boolean;
    podcastLink?: string;
    spotifyLink?: string;
  }[];
  export type show = {
    id: number;
    link: string;
    thumbnail: string;
    title: string;
    description: string;
    published: string;
    isYoutube?: boolean;
    podcastLink?: string;
    update?: string;
    calender?: boolean;
    spotifyLink?: string;
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
declare global {
  interface Platform {
    name: string;
    logo: string;
    rating: number;
  }
  interface TrustBarProps {
    platforms: Platform[];
    showTrustedSection?: boolean;
    className?: string;
    trustBarImages?: any;
  }
  interface EngineContractor {
    title: string;
    subTitle: string;
    txt: string;
  }

  interface TheEngineContractorProps {
    engineContractor: EngineContractor;
  }
  interface Finally {
    title: string;
    subTitle: string;
    solutionsList: any;
  }
  interface TheFinallyProps {
    finallyC: Finally;
  }
  interface CoreFeaturesData {
    title: string;
    subTitle: string;
    features?: any;
  }

  interface CoreFeaturesProps {
    coreFeatures: CoreFeaturesData;
  }
  interface FeatureItem {
    id: number;
    title: string;
    cardQuote: string | null;
    userName: string | null;
    cardImg: any | null;
    content: {
      id: number;
      title: string;
      desc: string;
    }[];
  }

  interface Props {
    featuresList: FeatureItem[];
  }
  interface FeatureContent {
    id: number;
    title: string;
    cardQuote: string | null;
    userName: string | null;
    cardImg: any | null;
    content: {
      id: number;
      title: string;
      desc: string;
    }[];
  }
  interface LottieAnimationRef {
    play: () => void;
    stop: () => void;
    pause: () => void;
  }
  interface FeatureCardProps {
    obj: {
      title: string;
      subTitle: string;
      img: string;
    };
    index: number;
  }
}

export type LpPageType = {
  id: number;
  ducumentId: string;
  slug: string;
  createdAt: string;
  lpTag: string;
  updatedAt: string;
  publishedAt: string;
  seoData: {
    id: number;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string | null;
    keywords: string;
    ogImage: { id: number; url: string } | null;
  };
  hero: {
    id: number;
    title: string;
    subTitle: string;
    heroImg: { id: number; url: string }[];
  };
  resultStatsLp: {
    id: number;
    title: string;
    subTitle: string;
  }[];
  reviews: {
    id: number;
    profileImg: { url: string };
    userName?: string;
    rating: number;
    review: string;
    isModal?: boolean;
    videoLink?: string;
    userRole?: string;
  }[];
  comparisonTable: {
    id: number;
    title: string;
    subTitle: string;
    comparisons: {
      id: number;
      title: string;
    }[];
  };
  operatingSystem: {
    id: number;
    title: string;
    icon: { id: number; url: string };
    leftImg: { id: number; url: string };
    rightImg: { id: number; url: string };
  };
  problemSolutionSection: {
    id: number;
    title: string;
    subTitle: string;
    theme: "light" | "dark";
    cardsDetail: {
      id: number;
      title: string;
      cardQuote: string | null;
      cardImg: { id: number; url: string } | null;
      userName: string | null;
      lottieJson: object | null;
      isIcon: boolean;
      heading: string;
      cardImgHeight: string | null;
      cardImgWidth: string | null;
      isDesktopWidth?: boolean;
      isDesktopHeight?: boolean;
      isMobileWidth?: boolean;
      isMobileHeight?: boolean;
      isLoop?: boolean;
    };
  };
  commonProblems: {
    id: number;
    title: string;
    subTitle: string;
    cardsDetail: {
      id: number;
      text: string;
      cardImg: { id: number; url: string };
    }[];
  };
  industries: {
    id: number;
    title: string;
    subTitle: string;
    btnText: string | null;
    images: { id: number; url: string }[];
    imageCard: {
      id: number;
      imageTitle: string;
      linkUrl: string | null;
      image: { id: number; url: string };
    }[];
  };
  emailSignupSection: {
    id: number;
    title: string;
    subTitle: string;
    placeHolder: string;
    btnText: string;
    btnMobile: string;
  };
  faqs: {
    id: number;
    title: string;
    subTitle: string;
    faq: {
      id: number;
      question: string;
      answer: string;
    }[];
  };
};

export type SearchBlogsResponse = {
  id: number;
  blogUrl: string;
  blogTitle: string;
  shortDescription: string;
  blogImg: { url: string }[];
  documentId: string;
};

export type BlogsList = {
  id: number;
  latestBlogTitle: string;
  nextBtnText: string;
  locale: string;
  nextBtnText: string;
  popularTitle: string;
  previousBtnText: string;
  title: string;
  relatedBlogsTitle: string;
  viewAllBtn: string;
  SeoMetaData: {
    canonicalUrl: string | null;
    id: number;
    keywords: string;
    metaDescription: string;
    metaTitle: string;
    ogImage: { id: number; url: string } | null;
  };
};

export type Blog = {
  id?: string | number;
  documentId?: string;
  blogUrl: string;
  blogTitle?: string;
  title?: string;
  shortDescription?: string;
  category?: string | Array<{ text?: string; name?: string } | string>;
  tags?: Array<{ list?: string; id: number }>;
  categoryListForFilter?: {
    list?: Array<{ id?: string | number; text?: string }>;
  };
  [k: string]: any;
};

export type BlogPageProps = {
  blogsData: Blog[];
  blogsList: BlogsList;
  industries: {
    id: number;
    slug: string;
    name: string;
  }[];
  locale: string;
};
