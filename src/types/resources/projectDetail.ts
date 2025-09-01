export interface Material {
  name: string;
  lowPrice: number;
  highPrice: number;
  unit: string;
  quantity: number;
  enabled: boolean;
  lowesUrl?: string;
  lowesPrice?: number;
}

export interface EstimateItem {
  materials: Material[];
  laborHours: number;
  laborUnit: string;
  inputField: {
    name: string;
    unit: string;
    defaultValue: number;
  };
  category: string;
}

export interface TimelineStep {
  title: string;
  duration: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProjectDetail {
  slug: string;
  projectName: string;
  laborRateIndexCategory: string;
  category_pk: string;
  ogImage: string;
  videoUrl: string;
  estimate: {
    [key: string]: EstimateItem;
  };
  timeline: {
    slug: string;
    steps: TimelineStep[];
  };
  faq: {
    slug: string;
    faqs: FAQItem[];
  };
  estimateCategory: string;
}
