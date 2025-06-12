import { JSX } from "react";
import {
  AdminWorkIcon,
  AssetIcon,
  BigChiefAIIcon,
  BookkeepingIcon,
  CalculatorIcon,
  ClientIcon,
  EstimatesIcon,
  EstimaticIcon,
  FieldServiceIcon,
  HeroSliderIcon1,
  HeroSliderIcon2,
  InvoicingIcon,
  LeadGenerationIcon,
  PaymentsIcon,
  PROIcon,
  ProjectIcon,
  PropertyIcon,
  ReportingIcon,
  SchedulingIcon,
  ServiceIcon,
  SliderIcon1,
  TelephoneIcon,
  TimeIcon,
  TrackingIcon,
  TrophyIcon,
} from "./Icons";
import {
  Book,
  FileText,
  Headphones,
  Calculator,
  Clipboard,
  Search,
  DollarSign,
  Building,
  Calendar,
  Users,
  LayoutList,
  FileCode,
} from "lucide-react";
import { Platform, Review } from "@/types";

export const awards = [
  {
    src: "/images/png/software-advice.png",
    alt: "Software Advice Front Runners 2024",
    mt: "mt-2",
    width: 100,
  },
  {
    src: "/images/webp/leader.webp",
    alt: "G2 Leader Winter 2025",
    width: 81,
  },
  {
    src: "/images/webp/get-app.webp",
    alt: "GetApp Best Functionality 2025",
    width: 130,
  },
  {
    src: "/images/svg/capterra.svg",
    alt: "Capterra Best Value 2025",
    width: 120,
  },
  {
    src: "/images/webp/best-value.webp",
    alt: "Capterra Shortlist 2025",
    width: 120,
  },
];

export const makeOperationList = [
  {
    title: "faster",
    description: "Estimate process",
    start: 0,
    end: 4,
    suffix: "x",
    icon: <CalculatorIcon className="md:text-lightBlack text-white" />,
  },
  {
    title: "faster",
    description: "Job turnaround time",
    start: 0,
    end: 28,
    suffix: "%",
    icon: <ServiceIcon className="md:text-lightBlack text-white" />,
  },
  {
    title: "less",
    description: "Time spent on admin work",
    start: 0,
    end: 38,
    suffix: "%",
    icon: <AdminWorkIcon className="md:text-lightBlack text-white" />,
  },
];

export const platforms: Platform[] = [
  {
    name: "App Store",
    logo: "/images/svg/apple-rating.svg",
    rating: 5,
  },
  {
    name: "Google Play",
    logo: "/images/webp/play-google.webp",
    rating: 5,
  },
  {
    name: "G2 Crowd",
    logo: "/images/webp/g2Rating.webp",
    rating: 5,
  },
  {
    name: "Capterra",
    logo: "/images/webp/capterraRating.webp",
    rating: 5,
  },
  {
    name: "Software Advice",
    logo: "images/svg/software-advice-rating.svg",
    rating: 5,
  },
];

export const wantingMoreData = [
  {
    title: "Project Management",
    content: [
      {
        title: "Phases, Tasks, and Subtasks",
        desc: "Structure jobs by phase with nested task assignments for better delegation and progress tracking.",
      },
      {
        title: "Job Timeline View",
        desc: "See the full history of communication, assignments, time logs, and photos for each job.",
      },
      {
        title: "Gantt Chart View",
        desc: "View project timelines, task dependencies, and upcoming work in a format that’s easy to visualize.",
      },

      {
        title: "Internal Job Chat",
        desc: "Every job has its own chat so field teams keep all the context in one place.",
      },
      {
        title: "Photo Logging",
        desc: "Attach photos, notes, and task completion records for final quality checks and documentation.",
      },
      {
        title: "Tool & Equipment Assignment",
        desc: "Assign tools to jobs and know who has what at any given moment. ",
      },
      {
        title: "Time Clock & Mileage Logs",
        desc: "Track labor and mileage against specific jobs to stay profitable and organized.",
      },
    ],
    review:
      "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look. ",
    user: "Satisfied Contractor+ User",
    img: "/images/webp/wanting-more-1.webp",
  },
  {
    title: "Field Service Management",
    content: [
      {
        title: "Smart Scheduling",
        desc: "See every job, crew, and resource in one screen. Drag, drop, and assign work instantly.",
      },
      {
        title: "Live Dispatch",
        desc: "Reassign jobs and view availability based on who’s closest, free, or ahead of schedule.",
      },
      {
        title: "Live GPS Crew Tracking",
        desc: "Know where your teams are right now, without calling around.",
      },
      {
        title: "Clock In / Out on Mobile",
        desc: "Crew members can start and stop the day from their phones, GPS-verified",
      },
      {
        title: "Job Notes & Field Updates",
        desc: "Capture real-time info from the field, including comments, photos, and task changes.",
      },
      {
        title: "Onsite Payments",
        desc: "Collect card or ACH payments in the field, and mark jobs paid before the truck even leaves.",
      },
      {
        title: "Mobile App",
        desc: "Contractor+ is mobile-first, so it’s easy to use where you need it most.",
      },
    ],
    review:
      "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look. ",
    user: "Satisfied Contractor+ User",
    img: "/images/webp/wanting-more-2.webp",
  },
  {
    title: "CRM",
    content: [
      {
        title: "Customer Profiles",
        desc: "See full communication history, estimates, invoices, job records, and properties for each customer.",
      },
      {
        title: "Property Profiles",
        desc: "Track service history, documents, permits, and job progress tied to specific addresses.",
      },
      {
        title: "Role-Based Contact Management",
        desc: "Distinguish between tenants, landlords, vendors, subcontractors, and more.",
      },
      {
        title: "Communication Timeline",
        desc: "View all messages, emails, texts, voicemails, and calls by contact or property.",
      },
      {
        title: "Call, Text, or Email Directly",
        desc: "One-click outreach from inside the CRM. No switching apps.",
      },
      {
        title: "Client Portal Access",
        desc: "Clients can view quotes, approve work, pay invoices, and submit requests from their own dashboard.",
      },
      {
        title: "Document Management",
        desc: "Upload photos, permits, contracts, and warranties to any job or customer record.",
      },
    ],
    review:
      "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look. ",
    user: "Satisfied Contractor+ User",
    img: "/images/webp/wanting-more-3.webp",
  },
  {
    title: "Estimatic AI",
    content: [
      {
        title: "Prompt-Based Estimate Creation",
        desc: "Give Estimatic the details of the job and ask it to create an estimate. Our AI builds it out so it’s ready to send off quickly.",
      },
      {
        title: "Live Pricing",
        desc: "Pulls real-time cost data from vendors like Lowe’s and Home Depot by zip code.",
      },
      {
        title: "Line Item Templates & Assemblies",
        desc: "Reusable formats speed up quoting and improve consistency.",
      },
      {
        title: "Good / Better / Best Packages",
        desc: "Create tiered proposals with upsell options baked in.",
      },
      {
        title: "Estimate to Contract Creation",
        desc: "Signed estimates automatically become contracts with terms, scope, and payment info.",
      },
      {
        title: "eSignature",
        desc: "Digital signature is already built in, so you don’t have to pay for a separate solution.",
      },
    ],
    review:
      "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look. ",
    user: "Satisfied Contractor+ User",
    img: "/images/webp/wanting-more-4.webp",
  },
  {
    title: "Big Chief AI",
    content: [
      {
        title: "Call Answering + Lead Capture",
        desc: "Big Chief AI answers calls 24/7, qualifies leads and books appointments.",
      },
      {
        title: "Collections",
        desc: "Chasing down customers to pay overdue invoices can now be handled by an AI assistant that never needs a break.",
      },
      {
        title: "Service Request Intake",
        desc: "Ask Big Chief for any technical questions about using Contractor+ and get instant answers.",
      },
      {
        title: "Business Advisor",
        desc: "Big Chief analyzes your KPIs and gives you actionable advice for business growth.",
      },
    ],
    review:
      "I used to spend hours piecing together quotes. Now I can hammer one out in minutes, and my clients love the professional look. ",
    user: "Satisfied Contractor+ User",
    img: "/images/webp/wanting-more-5.webp",
  },
];

export const features = [
  {
    id: 1,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "We make every Sholaz .",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 2,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "Got lorem loren.",
    backgroundIcon: <HeroSliderIcon2 />,
  },
  {
    id: 3,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "The Sholaz app is",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 4,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "We make every Sholaz .",
    backgroundIcon: <HeroSliderIcon2 />,
  },
  {
    id: 5,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "Got lorem loren.",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 6,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "The Sholaz app is",
    backgroundIcon: <HeroSliderIcon2 />,
  },
  {
    id: 7,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "We make every Sholaz .",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 8,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "Got lorem loren.",
    backgroundIcon: <HeroSliderIcon2 />,
  },
  {
    id: 9,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "The Sholaz app is",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 10,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "We make every Sholaz .",
    backgroundIcon: <HeroSliderIcon2 />,
  },
  {
    id: 11,
    title: "3-4x faster",
    icon: <SliderIcon1 />,
    heading: "Estimate process",
    percentage: "+38",
    description: "Got lorem loren.",
    backgroundIcon: <HeroSliderIcon1 />,
  },
  {
    id: 12,
    title: "24% faster",
    icon: <SliderIcon1 />,
    heading: "Job turnaround time",
    percentage: "24",
    description: "The Sholaz app is",
    backgroundIcon: <HeroSliderIcon2 />,
  },
];

export const cantScaleData = [
  {
    text: "The contractors pulling ahead aren’t the ones grinding harder. They’ve rejected “the way it’s always been done” and rebuilt the back end",
    iconAtStart: true,
    pt: "md:pt-[247px] ml-auto",
  },
  {
    text: "And now they’re outpacing everyone else without even trying.",
    iconAtStart: false,
    pt: "md:pb-[176px]",
  },
];
export const softwareCardData = [
  {
    text: "There’s no easy way to upsell or present multiple package options...",
  },
  {
    text: "Field techs hate using them because they don’t make things easier",
  },
  {
    text: "You still have to build workarounds where features fall short",
  },
];
export const blackPlatforms: Platform[] = [
  {
    name: "App Store",
    logo: "/images/webp/black-app-store.webp",
    rating: 5,
  },
  {
    name: "Google Play",
    logo: "/images/webp/black-google-play.webp",
    rating: 5,
  },
  {
    name: "G2 Crowd",
    logo: "/images/webp/g2Rating.webp",
    rating: 5,
  },
  {
    name: "Capterra",
    logo: "/images/webp/capterraRating.webp",
    rating: 5,
  },
  {
    name: "Software Advice",
    logo: "images/webp/black-software.webp",
    rating: 5,
  },
];

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

export const contractPlatforms = [
  {
    img: "/images/webp/big-guys.webp",
    key: "card1",
  },
  {
    img: "/images/webp/poppular-solution.webp",
    key: "card2",
  },
  {
    img: "/images/webp/all-in-one.webp",
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

export const trackFeatures = [
  "Timeline of every job, message, and update",
  "All docs, permits, and photos in one place",
  "Log emails using property-specific CC addresses",
  "Add live camera feeds to any property",
  "Timeline of every job, message, and update",
  "All docs, permits, and photos in one place",
  "Log emails using property-specific CC addresses",
  "Add live camera feeds to any property",
  "Timeline of every job, message, and update",
  "All docs, permits, and photos in one place",
  "Log emails using property-specific CC addresses",
  "Add live camera feeds to any property",
];

export const blogData = [
  {
    id: 1,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-1.webp",
  },
  {
    id: 2,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-2.webp",
  },
  {
    id: 3,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-3.webp",
  },
];
export const compareFeatures = [
  { name: "Built-In Phone & IVR", eContractorHas: true, othersHave: false },
  { name: "Property Profiles", eContractorHas: true, othersHave: false },
  { name: "Mobile-First", eContractorHas: true, othersHave: false },
  {
    name: "AI Summaries & Sentiment Analysis",
    eContractorHas: true,
    othersHave: false,
  },
  { name: "Workspace Toggle", eContractorHas: true, othersHave: false },
  { name: "Live Camera Feeds", eContractorHas: true, othersHave: false },
  { name: "Communication Timeline", eContractorHas: true, othersHave: false },
  {
    name: "Activity-Based Automation",
    eContractorHas: true,
    othersHave: false,
  },
  {
    name: "Built-In Contracts & eSig",
    eContractorHas: true,
    othersHave: false,
  },
];

export const OurReviewList: Review[] = [
  {
    id: 1,
    profileUrl: "/images/webp/rushville.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 2,
    review: "ourReviews.review",
    videolink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
    isModal: true,
  },
  {
    id: 2,
    profileUrl: "/images/webp/review-profile-7.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 1,
    review: "ourReviews.review",
    videolink: "https://www.youtube.com/watch?v=8ts4jsNZtgM",
    isModal: true,
  },
  {
    id: 3,
    profileUrl: "/images/webp/review-profile-2.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 4,
    review: "ourReviews.review",
    videolink: "https://www.youtube.com/watch?v=R5Q47lOKtdI",
    isModal: true,
  },
  {
    id: 4,
    profileUrl: "/images/webp/review-profile-3.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 2,
    review: "ourReviews.review",
    videolink: "https://www.youtube.com/watch?v=L49D7VE_Usw",
    isModal: true,
  },
  {
    id: 5,
    profileUrl: "/images/webp/juan-gracia.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 5,
    isModal: true,
    videolink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
    review: "ourReviews.review",
  },
  {
    id: 6,
    profileUrl: "/images/webp/rands.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 1,
    review: "ourReviews.review",
    videolink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
  },
  {
    id: 7,
    profileUrl: "/images/webp/josh-lesson.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 4,
    videolink: "https://www.youtube.com/watch?v=r-Fg4MymoXI",
    review: "ourReviews.review",
  },
  {
    id: 8,
    profileUrl: "/images/webp/chad-cranified.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 5,
    videolink: "https://www.youtube.com/watch?v=eANJwuWMDpM",
    review: "ourReviews.review",
  },

  {
    id: 9,
    profileUrl: "/images/webp/joshua.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 1,
    videolink: "https://www.youtube.com/watch?v=Y4dbkmz995c",
    review: "ourReviews.review",
  },
];

export const featureKeys = [
  {
    titleKey: "card1.heading",
    descKey: "card1.desc",
    img: "/images/webp/user-friendly.webp",
  },
  {
    titleKey: "card2.heading",
    descKey: "card2.desc",
    img: "/images/webp/communication-box.webp",
  },
  {
    titleKey: "card3.heading",
    descKey: "card3.desc",
    img: "/images/webp/workspace.webp",
  },
];
export const resourceItems = [
  {
    icon: FileText,
    href: "/blog",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    icon: Headphones,
    href: "/podcasts",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    icon: Calculator,
    href: "/calculators",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    icon: Clipboard,
    href: "/estimate-maker",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    icon: Search,
    href: "/material-comparison",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    icon: DollarSign,
    href: "/labor-pricing",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    icon: DollarSign,
    href: "/material-pricing",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    icon: Calendar,
    href: "/events",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    icon: Users,
    href: "/affiliates",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    icon: Building,
    href: "/supply-partners",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    icon: LayoutList,
    href: "/roadmap",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    icon: Book,
    href: "/support",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    icon: FileCode,
    href: "/developers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
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
    src: "/images/webp/outlook.webp",
    width: 40,
    height: 40,
    size: "lg:w-[85px] w-[55px] lg:h-[85px] h-[55px]",
    imgSize: "lg:max-w-[40px] max-w-[30px]",
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

export interface FeatureLink {
  id: string;
  label: string;
  description: string;
  href: string;
  isNew: boolean;
  icon: JSX.Element;
}
export const featurelinks = [
  {
    id: "crm",
    label: "CRM",
    description: "Manage Leads & Clients Effortlessly",
    href: "/",
    isNew: true,
    icon: <ServiceIcon />,
  },
  {
    id: "estimates",
    label: "Estimates & Quotes",
    description: "Organize Jobs, Teams & Real-Time Updates",
    href: "/",
    icon: <EstimatesIcon />,
    isNew: false,
  },
  {
    id: "mileage",
    label: "Mileage Tracking",
    description: "Simplify Projects, Timelines & Tasks Easily",
    href: "/",
    icon: <TrackingIcon />,
    isNew: true,
  },
  {
    id: "fieldService",
    label: "Field Service Management",
    description: "Smart & Accurate, Winning Project Estimations",
    href: "/",
    icon: <FieldServiceIcon />,
    isNew: true,
  },
  {
    id: "dealFlow",
    label: "Deal Flow Tracking",
    description: "Real-Time Insights for Smarter Decisions",
    href: "/",
    icon: <TrophyIcon />,
    isNew: false,
  },
  {
    id: "assetTracking",
    label: "Asset Tracking",
    description: "Find More Customers To Grow Your Business",
    href: "/",
    icon: <AssetIcon />,
    isNew: false,
  },
  {
    id: "projectManagement",
    label: "Project Management",
    description: "Organize Finances, Simplify Your Accounting",
    href: "/",
    icon: <ProjectIcon />,
    isNew: false,
  },
  {
    id: "scheduling",
    label: "Scheduling",
    description: "Organize Finances, Simplify Your Accounting",
    icon: <SchedulingIcon />,
    href: "/",
    isNew: true,
  },
  {
    id: "reporting",
    label: "Reporting",
    description: "Fast, Accurate, Winning Bids Made Easy",
    href: "/",
    icon: <ReportingIcon />,
    isNew: true,
  },
  {
    id: "estimaticAI",
    label: "Estimatic AI",
    description: "Visualize Your Sales Sales Pipeline",
    href: "/",
    icon: <EstimaticIcon />,
    isNew: false,
  },
  {
    id: "clientPortal",
    label: "Client Portal",
    description: "Optimize Team Efficiency & Job Assignments",
    href: "/",
    icon: <ClientIcon />,
    isNew: false,
  },
  {
    id: "proWebsite",
    label: "PRO Website",
    description: "Simple, Secure Project Access for Clients",
    href: "/",
    icon: <PROIcon />,
    isNew: false,
  },
  {
    id: "bigChiefAI",
    label: "Big Chief AI",
    description: "Automate Invoicing & Get Paid Faster",
    href: "/",
    icon: <BigChiefAIIcon />,
    isNew: false,
  },
  {
    id: "invoicing",
    label: "Invoicing & Collections",
    description: "Centralized Team & Client Conversations",
    href: "/",
    icon: <InvoicingIcon />,
    isNew: true,
  },
  {
    id: "payments",
    label: "Payments",
    description: "GPS Verified Time Tracking For The Whole Team",
    href: "/",
    icon: <PaymentsIcon />,
    isNew: false,
  },
  {
    id: "leadGeneration",
    label: "Lead Generation",
    description: "Automatically Track & Maximize Mileage Deductions",
    href: "/",
    icon: <LeadGenerationIcon />,
    isNew: true,
  },
  {
    id: "communication",
    label: "Two-Way Communication",
    description: "Monitor Equipment, Prevent Costly Losses",
    href: "/",
    icon: <TelephoneIcon />,
    isNew: true,
  },
  {
    id: "propertyProfiles",
    label: "Property Profiles",
    description: "Insights to Boost Efficiency & Profits",
    href: "/",
    icon: <PropertyIcon />,
    isNew: true,
  },
  {
    id: "bookkeeping",
    label: "Bookkeeping",
    description: "Showcase Your Business & Attract Customers",
    href: "/",
    icon: <BookkeepingIcon />,
    isNew: true,
  },
  {
    id: "timeClock",
    label: "Time Clock",
    description: "Online, In-person, QR & ACH + Instant payouts!",
    href: "/",
    icon: <TimeIcon />,
    isNew: true,
  },
];
export const servicedata = [
  {
    heading: "Customer Management",
    features: [
      {
        title: "Contact profiles + communication history",
        description:
          "See every call, text, and email tied to each contact, all in one place.",
      },
      {
        title: "Property profiles",
        description:
          "Just like customers, each property gets its own profile with full job history, files, and communication timeline.",
      },
      {
        title: "Role-based contact labeling",
        description:
          "Whether owner, tenant, or property manager, label contacts by role within a profile.",
      },
      {
        title: "Client portal access",
        description:
          "Give your clients a clean, professional portal to view estimates, invoices, and project updates.",
      },
      {
        title: "Timeline view for every client and property",
        description:
          "Scroll through a full history of every interaction, file, and update tied to each person or place.",
      },
      {
        title: "Contracts, eSign, and payments",
        description:
          "Quotes become contracts, contracts get signed, and invoices get paid—all in one flow.",
      },
      {
        title: "Scheduled follow-ups",
        description:
          "Business keeps you busy. Scheduled follow-ups make sure nothing slips through the cracks.",
      },
    ],
    user: "Excellent field tracking!",
    username: "John Doe",
  },
  {
    heading: "Job Management",
    features: [
      {
        title: "Property-based job tracking",
        description:
          "Our field service crm software has property-specific profiles to easily manage work by address, not just customer.",
      },
      {
        title: "Task assignments & status tracking",
        description:
          "Keep jobs moving by assigning tasks and instantly seeing what’s done and what’s not.",
      },
      {
        title: "Job notes and photos",
        description:
          "Capture site conditions, material needs, and daily progress with notes and images that live in your home service crm.",
      },
      {
        title: "Estimate builder with live pricing",
        description:
          "Create fast, accurate estimates that pull in live pricing from Lowe’s and Home Depot. ",
      },
      {
        title: "Contract generation based on job details",
        description:
          "Once your estimate’s locked, the contract writes itself using job data you already entered.",
      },
      {
        title: "Time clock & mileage logs",
        description:
          "Built-in logs keep your payroll and reimbursements clean and accurate.",
      },
      {
        title: "Internal job chat",
        description:
          "Bring everyone involved with a job into a dedicated space to communicate. ",
      },
      {
        title: "Gantt chart views",
        description:
          "Map out the full job timeline and adjust schedules so nothing goes sideways. ",
      },
    ],
  },
  {
    heading: "Team Management",
    features: [
      {
        title: "Workspace toggle (for multi-location)",
        description:
          "Manage multiple locations under one roof and keep everything separate but connected.",
      },
      {
        title: "Live team map view with GPS tracking",
        description:
          "See where your team is right now so you can make faster decisions.",
      },
      {
        title: "Drag-and-drop job scheduling",
        description:
          "Move things around as needed without redoing the whole day.",
      },
      {
        title: "Availability-based job assignment",
        description: "Send the right tech based on who’s nearby and available.",
      },
      {
        title: "Task ownership and accountability",
        description:
          "Make it obvious who’s doing what and when it’s due, so everyone is held accountable. ",
      },
      {
        title: "Chat-based job communication",
        description:
          "Every job has its own chat so your crew doesn’t have to dig through texts.",
      },
      {
        title: "Clock in/out support on mobile",
        description:
          "Finally, there’s a CRM for field services that works well on mobile. Let your team easily clock in and out from our mobile app.  ",
      },
      {
        title: "Mileage logging & time tracking",
        description:
          "Log miles and hours automatically and tag them to the right job.",
      },
    ],
  },
  {
    heading: "Communication",
    features: [
      {
        title: "Built-in phone system with IVR and routing",
        description:
          "Contractor+ comes with calling and IVR baked in. No more separate telephony solutions.",
      },
      {
        title: "1-click call/text/email directly from CRM",
        description:
          "Call, text, or email anyone in your system right from their profile.",
      },
      {
        title: "AI call transcription & recording",
        description:
          "Every call is recorded and transcribed so nothing gets missed or misheard.",
      },
      {
        title: "Sentiment analysis on calls",
        description:
          "AI picks up the tone so you know how conversations really went.",
      },
      {
        title: "Scheduled messages & follow-ups",
        description: "Never forget to follow up. Just schedule it and move on.",
      },
      {
        title: "Job-specific chats (internal team use)",
        description:
          "Chat with your crew about a job without losing context or switching apps.",
      },
      {
        title: "Voicemail logging and playback",
        description: "Listen to any voicemail without ever leaving the CRM. ",
      },
      {
        title: "Communication timeline ",
        description:
          "See every call, text, and email for a customer or property in one scrollable thread.",
      },
    ],
  },

  {
    heading: "Lead Management",
    features: [
      {
        title: "Opportunity Kanban board (deal tracker)",
        description:
          "Track deal progress visually with a simple board that shows where every lead stands.",
      },
      {
        title: "Custom pipeline stages",
        description:
          "Set your own pipeline stages to match how your sales process works.",
      },
      {
        title: "Lead profiles with status filter",
        description:
          "Stay focused by filtering leads by status, urgency, or follow-up timing.",
      },
      {
        title: "Follow-up scheduling",
        description:
          "Set reminders to follow up so no lead gets forgotten or buried.",
      },
      {
        title: "Property-based leads",
        description:
          "Track new opportunities by address so you can quote with full context.",
      },
      {
        title: "Upcoming: Workflow automation",
        description:
          "Automation is on the way to help you re-engage cold leads without any manual work.",
      },
    ],
  },
];

export const reviews = [
  {
    id: 1,
    userName: "Brandon Geiger",
    profileUrl: "/images/webp/rushville.webp",
    rating: 4.5,
    videolink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
    userRole: "Co-Owner, Rushville Restorations",
  },
  {
    id: 2,
    userName: "James Bond",
    profileUrl: "/images/webp/rands.webp",
    rating: 4.5,
    videolink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen.`,
    userRole: "CEO at Rands Mechanical",
  },
  {
    id: 3,
    userName: "Juan Garcia",
    profileUrl: "/images/webp/juan-gracia.webp",
    rating: 4.5,
    videolink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
    userRole: "Owner, Nailed It Miami",
  },
  {
    id: 4,
    userName: "James Bond",
    profileUrl: "/images/webp/rands.webp",
    rating: 4.5,
    videolink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen.`,
    userRole: "CEO at Rands Mechanical",
  },
];
import animationData from "../../../public/lotties/crm.json";
import live_scheduling from "../../../public/lotties/live-scheduling.json";
import internal_job_chat from "../../../public/lotties/internal-job-chat.json";
import estimate_builder from "../../../public/lotties/estimate-builder.json";
import property_profile from "../../../public/lotties/property-profile.json";
import big_chief_ai from "../../../public/lotties/big-chief-ai.json";
export const featureContentss = [
  {
    title: "The first CRM that thinks like a contractor",
    titleImg: animationData,
    description:
      "Most “contractor CRMs” are just contact pages with a few job links. Contractor+ brings the full picture: ",
    highlight:
      "timelines, call transcripts, AI sentiment tracking, and role-specific contacts..",
  },
  {
    title: "Send the right tech to the right job based on proximity",
    titleImg: live_scheduling,
    description:
      "See team availability and location in real-time to assign jobs faster and smarter. Drag, drop, and delegate",
    highlight: "based on who’s closest and free. No more calling around. ",
  },
  {
    title: "Collaborate with your team on any job",
    titleImg: internal_job_chat,
    description:
      "Each job has its own built-in group chat, keeping the whole crew on the same page",
    highlight: "and minimizing texts, missed updates, or miscommunication.",
  },
  {
    title: "Quotes that practically write themselves",
    titleImg: estimate_builder,
    description:
      "Build accurate, professional estimates fast with live local pricing from Lowe’s, Home Depot",
    highlight:
      "and more. Contractor+ pulls your line items, adds markup, and generates client-ready contracts in minutes.",
  },
  {
    title: "The only CRM with property-specific profiles",
    titleImg: property_profile,
    description:
      "Contractor+ is the only platform that lets you track the full history of every property you’ve ever serviced:",
    highlight: "communications,  photos & documents, invoices, even live cams.",
  },
  {
    title: "The ultimate AI assistant for contractors",
    titleImg: big_chief_ai,
    description:
      "Every call and text gets answered. Every Lead is qualified and entered into your CRM, every Service Request is captured, every Estimate/Quote appointment is scheduled. Big Chief never sleeps..",
  },
];

export const fieldServiceData = [
  {
    heading: "Customer Management",
    features: [
      {
        title: "Contact profiles + communication history",
        description:
          "See every call, text, and email tied to each contact, all in one place.",
      },
      {
        title: "Property profiles",
        description:
          "Just like customers, each property gets its own profile with full job history, files, and communication timeline.",
      },
      {
        title: "Role-based contact labeling",
        description:
          "Whether owner, tenant, or property manager, label contacts by role within a profile.",
      },
      {
        title: "Client portal access",
        description:
          "Give your clients a clean, professional portal to view estimates, invoices, and project updates.",
      },
      // {
      //   title: "Timeline view for every client and property",
      //   description:
      //     "Scroll through a full history of every interaction, file, and update tied to each person or place.",
      // },
      // {
      //   title: "Contracts, eSign, and payments",
      //   description:
      //     "Quotes become contracts, contracts get signed, and invoices get paid—all in one flow.",
      // },
      // {
      //   title: "Scheduled follow-ups",
      //   description:
      //     "Business keeps you busy. Scheduled follow-ups make sure nothing slips through the cracks.",
      // },
    ],
    testimonial: {
      user: "Excellent field tracking!",
      username: "John Doe",
    },
    img: "/images/webp/field-service-1.webp",
  },
  {
    heading: "Job Management",
    features: [
      {
        title: "Property-based job tracking",
        description:
          "Our field service CRM software has property-specific profiles to easily manage work by address, not just customer.",
      },
      {
        title: "Task assignments & status tracking",
        description:
          "Keep jobs moving by assigning tasks and instantly seeing what’s done and what’s not.",
      },
      {
        title: "Job notes and photos",
        description:
          "Capture site conditions, material needs, and daily progress with notes and images that live in your home service CRM.",
      },
      {
        title: "Estimate builder with live pricing",
        description:
          "Create fast, accurate estimates that pull in live pricing from Lowe’s and Home Depot.",
      },
      {
        title: "Contract generation based on job details",
        description:
          "Once your estimate’s locked, the contract writes itself using job data you already entered.",
      },
      // {
      //   title: "Time clock & mileage logs",
      //   description:
      //     "Built-in logs keep your payroll and reimbursements clean and accurate.",
      // },
      // {
      //   title: "Internal job chat",
      //   description:
      //     "Bring everyone involved with a job into a dedicated space to communicate.",
      // },
      // {
      //   title: "Gantt chart views",
      //   description:
      //     "Map out the full job timeline and adjust schedules so nothing goes sideways.",
      // },
    ],
    img: "/images/webp/field-service-2.webp",
  },
  {
    heading: "Team Management",
    features: [
      {
        title: "Workspace toggle (for multi-location)",
        description:
          "Manage multiple locations under one roof and keep everything separate but connected.",
      },
      {
        title: "Live team map view with GPS tracking",
        description:
          "See where your team is right now so you can make faster decisions.",
      },
      {
        title: "Drag-and-drop job scheduling",
        description:
          "Move things around as needed without redoing the whole day.",
      },
      {
        title: "Availability-based job assignment",
        description: "Send the right tech based on who’s nearby and available.",
      },
      {
        title: "Task ownership and accountability",
        description:
          "Make it obvious who’s doing what and when it’s due, so everyone is held accountable.",
      },
      {
        title: "Chat-based job communication",
        description:
          "Every job has its own chat so your crew doesn’t have to dig through texts.",
      },
      // {
      //   title: "Clock in/out support on mobile",
      //   description:
      //     "Finally, there’s a CRM for field services that works well on mobile. Let your team easily clock in and out from our mobile app.",
      // },
      // {
      //   title: "Mileage logging & time tracking",
      //   description:
      //     "Log miles and hours automatically and tag them to the right job.",
      // },
    ],
    img: "/images/webp/field-service-3.webp",
  },
  {
    heading: "Communication",
    features: [
      {
        title: "Built-in phone system with IVR and routing",
        description:
          "Contractor+ comes with calling and IVR baked in. No more separate telephony solutions.",
      },
      {
        title: "1-click call/text/email directly from CRM",
        description:
          "Call, text, or email anyone in your system right from their profile.",
      },
      {
        title: "AI call transcription & recording",
        description:
          "Every call is recorded and transcribed so nothing gets missed or misheard.",
      },
      {
        title: "Sentiment analysis on calls",
        description:
          "AI picks up the tone so you know how conversations really went.",
      },
      {
        title: "Scheduled messages & follow-ups",
        description: "Never forget to follow up. Just schedule it and move on.",
      },
      {
        title: "Job-specific chats (internal team use)",
        description:
          "Chat with your crew about a job without losing context or switching apps.",
      },
      // {
      //   title: "Voicemail logging and playback",
      //   description: "Listen to any voicemail without ever leaving the CRM.",
      // },
      // {
      //   title: "Communication timeline",
      //   description:
      //     "See every call, text, and email for a customer or property in one scrollable thread.",
      // },
    ],
    img: "/images/webp/field-service-4.webp",
  },
  {
    heading: "Lead Management",
    features: [
      {
        title: "Opportunity Kanban board (deal tracker)",
        description:
          "Track deal progress visually with a simple board that shows where every lead stands.",
      },
      {
        title: "Custom pipeline stages",
        description:
          "Set your own pipeline stages to match how your sales process works.",
      },
      {
        title: "Lead profiles with status filter",
        description:
          "Stay focused by filtering leads by status, urgency, or follow-up timing.",
      },
      {
        title: "Follow-up scheduling",
        description:
          "Set reminders to follow up so no lead gets forgotten or buried.",
      },
      {
        title: "Property-based leads",
        description:
          "Track new opportunities by address so you can quote with full context.",
      },
      {
        title: "Upcoming: Workflow automation",
        description:
          "Automation is on the way to help you re-engage cold leads without any manual work.",
      },
    ],
    img: "/images/webp/field-service-5.webp",
  },
];
