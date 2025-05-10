import { useTranslations } from "next-intl";
import {
  AdminWorkIcon,
  AssetIcon,
  BigChiefAIIcon,
  BookkeepingIcon,
  ClientIcon,
  EstimateIcon2,
  EstimatesIcon,
  EstimaticIcon,
  FieldServiceIcon,
  InvoicingIcon,
  LeadGenerationIcon,
  PaymentsIcon,
  PROIcon,
  ProjectIcon,
  PropertyIcon,
  ReportingIcon,
  SchedulingIcon,
  ServiceIcon,
  TelephoneIcon,
  TimeIcon,
  TrackingIcon,
  TrophyIcon,
  TurnaroundIcon,
} from "./Icons";

export const menuItems = [
  {
    id: "whycontractor",
    label: "Why Contractor+?",
  },
  { id: "features", label: "Features" },
  { id: "industries", label: "Industries" },
  { id: "pricing", label: "Pricing" },
  { id: "resources", label: "Resources" },
];
export const featurelinks = [
  {
    label: "CRM",
    description: "Manage Leads & Clients Effortlessly",
    href: "/",
    icon: <ServiceIcon />,
  },
  {
    label: "Estimates & Quotes",
    description: "Organize Jobs, Teams & Real-Time Updates",
    href: "/",
    icon: <EstimatesIcon />,
  },
  {
    label: "Mileage Tracking",
    description: "Simplify Projects, Timelines & Tasks Easily",
    href: "/",
    icon: <TrackingIcon />,
  },
  {
    label: "Field Service Management",
    description: "Smart & Accurate, Winning Project Estimations",
    href: "/",
    icon: <FieldServiceIcon />,
  },
  {
    label: "Deal Flow Tracking",
    description: "Real-Time Insights for Smarter Decisions",
    href: "/",
    icon: <TrophyIcon />,
  },
  {
    label: "Asset Tracking",
    description: "Find More Customers To Grow Your Business",
    href: "/",
    icon: <AssetIcon />,
  },
  {
    label: "Project Management",
    description: "Organize Finances, Simplify Your Accounting",
    href: "/",
    icon: <ProjectIcon />,
  },
  {
    label: "Scheduling",
    description: "Organize Finances, Simplify Your Accounting",
    icon: <SchedulingIcon />,
    href: "/",
  },
  {
    label: "Reporting",
    description: "Fast, Accurate, Winning Bids Made Easy",
    href: "/",
    icon: <ReportingIcon />,
  },
  {
    label: "Estimatic AI",
    description: "Visualize Your Sales Sales Pipeline",
    href: "/",
    icon: <EstimaticIcon />,
  },
  {
    label: "Client Portal",
    description: "Optimize Team Efficiency & Job Assignments",
    href: "/",
    icon: <ClientIcon />,
  },
  {
    label: "PRO Website",
    description: "Simple, Secure Project Access for Clients",
    href: "/",
    icon: <PROIcon />,
  },
  {
    label: "Big Chief AI",
    description: "Automate Invoicing & Get Paid Faster",
    href: "/",
    icon: <BigChiefAIIcon />,
  },
  {
    label: "Invoicing & Collections",
    description: "Centralized Team & Client Conversations",
    href: "/",
    icon: <InvoicingIcon />,
  },
  {
    label: "Payments",
    description: "GPS Verified Time Tracking For The Whole Team",
    href: "/",
    icon: <PaymentsIcon />,
  },
  {
    label: "Lead Generation",
    description: "Automatically Track & Maximize Mileage Deductions",
    href: "/",
    icon: <LeadGenerationIcon />,
  },
  {
    label: "Two-Way Communication",
    description: "Monitor Equipment, Prevent Costly Losses",
    href: "/",
    icon: <TelephoneIcon />,
  },
  {
    label: "Property Profiles",
    description: "Insights to Boost Efficiency & Profits",
    href: "/",
    icon: <PropertyIcon />,
  },
  {
    label: "Bookkeeping",
    description: "Showcase Your Business & Attract Customers",
    href: "/",
    icon: <BookkeepingIcon />,
  },
  {
    label: "Time Clock",
    description: "Online, In-person, QR & ACH + Instant payouts!",
    href: "/",
    icon: <TimeIcon />,
  },
];

export const contractPlatforms = [
  {
    img: "/images/webp/expensive.webp",
    key: "card1",
  },
  {
    img: "/images/webp/complicated.webp",
    key: "card2",
  },
  {
    img: "/images/webp/inadequate.webp",
    key: "card3",
  },
];
export const IndustriesDropdownLinks = [
  { label: "General Contractor", href: "/" },
  { label: "Plumbing", href: "/" },
  { label: "Construction", href: "/" },
  { label: "HVAC", href: "/" },
  { label: "Remodeling", href: "/" },
  { label: "Painting", href: "/" },
  { label: "Roofing", href: "/" },
  { label: "Junk Removal", href: "/" },
  { label: "Locksmith", href: "/" },
  { label: "Tiling", href: "/" },
  { label: "Drywall", href: "/" },
  { label: "Mechanical", href: "/" },
  { label: "Cleaning", href: "/" },
  { label: "Restoration", href: "/" },
  { label: "Electrician", href: "/" },
  { label: "Fence", href: "/" },
  { label: "Flooring", href: "/" },
  { label: "Pest Control", href: "/" },
  { label: "Pool & Spa", href: "/" },
  { label: "Tree Care", href: "/" },
  { label: "Landscaping", href: "/" },
  { label: "Snow Removal", href: "/" },
  { label: "Lawn Care", href: "/" },
  { label: "Paving", href: "/" },
  { label: "Solar", href: "/" },
  { label: "Janitorial", href: "/" },
  { label: "Irrigation", href: "/" },
  { label: "Pressure Washing", href: "/" },
  { label: "Property Maintenance", href: "/" },
  { label: "Window Cleaning", href: "/" },
  { label: "Carpentry", href: "/" },
  { label: "Carpet Cleaning", href: "/" },
  { label: "Chimney Sweeping", href: "/" },
  { label: "Elevator", href: "/" },
  { label: "Excavation", href: "/" },
  { label: "Garage Door", href: "/" },
  { label: "Handyman", href: "/" },
  { label: "Septic & Pump", href: "/" },
  { label: "Small Engine Repair", href: "/" },
];
export const WhyContractorDropdownlinks = [
  {
    label: "Your Day With Contractor+",
    description: "A Free Demo Also If You Wish",
    href: "/",
  },
  {
    label: "Pricing",
    description: "Dollars & Bills Here",
    href: "/",
  },
  {
    label: "Schedule A Demo",
    description: "A Free Demo Also If You Wish",
    href: "/",
  },
  {
    label: "Support",
    description: "Need Content",
    href: "/",
  },
];
export const ResourcesDropdownlinks = [
  { label: "Contractor+ Blog", href: "/" },
  { label: "Industry Events", href: "/" },
  { label: "Hard Hat Chat", href: "/" },
  { label: "Mindset Monday", href: "/" },
  { label: "Supply Partner Program", href: "/" },
  { label: "The Owners Perspective", href: "/" },
  { label: "Features Roadmap", href: "/" },
  { label: "Free Tools & Templates", href: "/" },
  { label: "Support Center", href: "/" },
  { label: "Regional Labor Pricing", href: "/" },
  { label: "Regional Material Pricing", href: "/" },
];
export const PricingDropdownLinks = [
  { label: "Contractor+ Blog", href: "/" },
  { label: "Industry Events", href: "/" },
  { label: "Hard Hat Chat", href: "/" },
  { label: "Mindset Monday", href: "/" },
  { label: "Supply Partner Program", href: "/" },
  { label: "The Owners Perspective", href: "/" },
  { label: "Features Roadmap", href: "/" },
  { label: "Free Tools & Templates", href: "/" },
  { label: "Support Center", href: "/" },
  { label: "Regional Labor Pricing", href: "/" },
  { label: "Regional Material Pricing", href: "/" },
];

export interface Review {
  id: number;
  profileUrl: string;
  userName: string;
  companyIcon: string;
  rating: number;
  reviewText: string;
}
export const OurReviewList: Review[] = [
  {
    id: 1,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Jessica J.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 2,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 2,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Michael T.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 1,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 3,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Sarah K.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 4,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 4,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "David M.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 2,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 5,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Jessica J.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 5,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 6,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Michael T.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 1,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 7,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Sarah K.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 4,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 8,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "David M.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 5,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 9,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Jessica J.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 2,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 10,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Michael T.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 1,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 11,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Sarah K.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 4,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 12,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "David M.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 2,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 13,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Jessica J.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 5,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 14,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Michael T.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 1,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 15,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "Sarah K.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 4,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
  {
    id: 16,
    profileUrl: "/images/webp/review-profile.webp",
    userName: "David M.",
    companyIcon: "/images/svg/randsIcon.svg",
    rating: 5,
    reviewText:
      "Since I started sending all my estimates using Contractor+, I have stopped losing bids.",
  },
];
export const blogList = [
  {
    id: 1,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-1.webp",
  },
  {
    id: 2,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-2.webp",
  },
  {
    id: 3,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-3.webp",
  },
];
export const leftIcons = [
  {
    src: "/images/png/contractor-2.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
    imgSize: "lg:max-w-[38px] max-w-[29px]",
    initialX: -150,
    initialY: -80,
    finalX: "47%",
    finalY: "25%",
  },
  {
    src: "/images/png/contractor-1.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[58px] lg:h-[85px] h-[58px]",
    imgSize: "lg:max-w-[38px] max-w-[26px]",
    initialX: -150,
    initialY: 80,
    finalX: "18%",
    finalY: "70%",
  },
  {
    src: "/images/png/contractor-3.png",
    width: 66,
    height: 17,
    size: "lg:w-[85px] w-[62px] lg:h-[85px] h-[62px]",
    imgSize: "lg:max-w-[66px] max-w-[45px]",
    initialX: -150,
    initialY: 80,
    finalX: "81%",
    finalY: "75%",
  },
];

export const rightIcons = [
  {
    src: "/images/png/contractor-4.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
    imgSize: "lg:max-w-[38px] max-w-[29px]",
    initialX: 150,
    initialY: -80,
    finalX: "26%",
    finalY: "30%",
  },
  {
    src: "/images/png/contractor-5.png",
    width: 38,
    height: 38,
    size: "lg:w-[85px] w-[46px] lg:h-[85px] h-[46px]",
    imgSize: "lg:max-w-[38px] max-w-[25px]",
    initialX: 150,
    initialY: 80,
    finalX: "79%",
    finalY: "70%",
  },
  {
    src: "/images/png/contractor-6.png",
    width: 33,
    height: 33,
    size: "lg:w-[61px] w-10 lg:h-[61px] h-10",
    imgSize: "lg:max-w-[33px] max-w-[21px]",
    initialX: 150,
    initialY: 80,
    finalX: "28%",
    finalY: "75%",
  },
];
