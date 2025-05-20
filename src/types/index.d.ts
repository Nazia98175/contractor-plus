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

export interface Review {
  id: string | number;
  profileUrl: string;
  userName: string;
  role?: string;
  userRole: string;
  rating: number;
  review: string;
  isModal?: boolean;
  videolink?: string;
}
