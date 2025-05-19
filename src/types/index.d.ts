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
