import { JSX } from "react";
import {
  AdminWorkIcon,
  AssetIcon,
  BigChiefAIIcon,
  BookkeepingIcon,
  CalculatorIcon,
  ClientIcon,
  DelieveryIcon,
  EstimateIcon2,
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
  TruckIcon,
  TruckElectricIcon,
} from "lucide-react";
import { Plan, Platform, Review, tableFeature } from "@/types";

export const awards = [
  {
    src: "/images/png/software-advice.png",
    alt: "Software Advice Front Runners 2024",
    mt: "mt-3",
    width: 100,
  },
  {
    src: "/images/webp/leader.webp",
    alt: "G2 Leader Winter 2025",
    mt: "mt-3",
    width: 81,
  },
  {
    src: "/images/webp/get-app.webp",
    alt: "GetApp Best Functionality 2025",
    width: 115,
  },
  {
    src: "/images/svg/capterra.svg",
    alt: "Capterra Best Value 2025",
    mt: "mt-3",
    width: 120,
  },
  {
    src: "/images/webp/best-value.webp",
    mt: "mt-2",
    alt: "Capterra Shortlist 2025",
    width: 110,
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
export const swichToContractordata = [
  {
    description: "Increase in jobs completed on time",
    start: 0,
    end: 27,
    suffix: "%",
    icon: <EstimateIcon2 className="md:text-winterWay text-white" />,
  },
  {
    title: "hours",
    description: "Saved weekly on scheduling and updates",
    start: 0,
    end: 15,
    icon: <DelieveryIcon className="md:text-winterWay text-white" />,
  },
  {
    description: "Fewer software tools used",
    start: 3,
    end: 5,
    isRange: true,
    suffix: "%",
    icon: <AdminWorkIcon className="md:text-winterWay text-white" />,
  },
];

export const platforms: Platform[] = [
  {
    name: "Capterra",
    logo: "/images/webp/capterraRating.webp",
    rating: 5,
  },
  {
    name: "G2 Crowd",
    logo: "/images/webp/g2Rating.webp",
    rating: 5,
  },
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
    name: "Software Advice",
    logo: "/images/svg/software-advice-rating.svg",
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
    cardImg: "/images/webp/wanting-more-1.webp",
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
    cardImg: "/images/webp/wanting-more-2.webp",
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
    cardImg: "/images/webp/wanting-more-3.webp",
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
    cardImg: "/images/webp/wanting-more-4.webp",
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
    cardImg: "/images/webp/wanting-more-5.webp",
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
    text: "Enterprise solutions are complex, clunky, and expensive",
  },
  {
    text: "Field techs hate using them because they don’t make things easier...",
  },
  {
    text: "You still have to build workarounds where features fall",
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
    logo: "/images/webp/black-software.webp",
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

export const planData = [
  {
    title: "Freedom",
    subtitle: "Free forever",
    monthlyPrice: 0,
    note: "Just Starting",
    cta: "Start for free",
    featuresHeading: "Features Included :",
    features: [
      "Manage leads & clients",
      "Unlimited estimates & invoices",
      "Custom logo",
      "National average material pricing",
      "Multiple workspaces",
      "Available on web, mobile & tablet",
    ],
  },
  {
    title: "PRO",
    subtitle: "1 user",
    monthlyPrice: 29,
    note: "For Solopreneurs",
    cta: "Get started",
    featuresHeading: "Everything in FREEDOM +",
    features: [
      "Optional line items & add-ons",
      "Requests & scheduling",
      "Client portal",
      "Live local cost data",
      "Email, SMS, and voice",
      "PRO website included",
    ],
    isPro: true,
  },
  {
    title: "Most popular",
    subtitle: "Up to 5 users",
    monthlyPrice: 95,
    note: "For Teams",
    cta: "Get started",
    featuresHeading: "Everything in PRO +",
    features: [
      "$29/month per additional user",
      "Manage team / employees",
      "Personal, group & client chats",
      "Custom URL & branding",
      "Connect Quickbooks Online",
    ],
    isProTeam: true,
  },
];

export const plans: Plan[] = [
  { name: "Freedom", cta: "Start for free", variant: "default" },
  { name: "PRO", cta: "Get started", variant: "pro" },
  { name: "PRO Team", cta: "Get started", variant: "proTeam" },
];

export const comparisonTableData: {
  title: string;
  key: string;
  features: tableFeature[];
}[] = [
  {
    title: "Lead & Client Management",
    key: "lead",
    features: [
      {
        name: "Track Your Leads & Clients",
        description:
          "Track leads, clients, subs, vendors, tenants, and over 50+ 'contact types' so you maintain a comprehensive communication history with every point of contact that's relevant to your business.",
        available: [true, true, true],
      },
      {
        name: "Opportunities Kanban",
        description:
          "Can track your deal flow using the Opportunities Kanban. This gives you a clear view of how your business is performing, and how much value each pipeline stage. Never let an opportunity slip through the cracks again.",
        available: [false, true, true],
      },
      {
        name: "Booking & Request Forms",
        description:
          "You can allow your clients to schedule estimates, or book your services directly from your website, or social media, and have these events show up on the appropriate schedule inside Contractor+.",
        available: [false, true, true],
      },
      {
        name: "Schedule Estimates",
        description:
          "Have an upcoming assessment/estimate/quote (whatever you call it)? You can schedule these appointments and assign them to the appropriate team members based on their availability.",
        available: [false, true, true],
      },
      {
        name: "Follow-Up Reminders",
        description:
          "Need a reminder to follow up? You can quickly create reminders, and even automatically create reminders to follow up when certain conditions are met. This ensures your team is never dropping the ball.",
        available: [false, true, true],
      },
      {
        name: "Residential & Commercial",
        description: "Add both Residential & Commercial clients.",
        available: [false, true, true],
      },
      {
        name: "Multiple Points of Contact",
        description:
          "There's Contacts, Service Addresses, and Jobs. Each of these can have multiple points of contact. Each contact has their own communication timeline. Really convenient and easy to manage.",
        available: [true, true, true],
      },
      {
        name: "Multiple Service Addresses",
        description:
          "Each client can have multiple service addresses. Each service address has its own profile, schedule, photos & documents, etc.",
        available: [false, true, true],
      },
      {
        name: "Tenant & Property Access",
        description:
          "Every business is different. Track whatever additional information is important to you-like entry codes, PO Number, Tenant Name, Tenant Number etc.",
        available: [false, true, true],
      },

      {
        name: "Custom Client Portal",
        description:
          "A beautiful, sleek, secure & custom-branded client portal experience.",
        available: [false, true, true],
      },
      {
        name: "On-The-Way Notifications",
        description:
          "Notify your clients when you're on the way, or running late. Drop them an ETA and keep them updated. Proper communication builds trust and improves client satisfaction.",
        available: [false, true, true],
      },
      {
        name: "Automatically Collect Client Reviews",
        description:
          "All you have to do is enter your links for Google My Business and/or Yelp, and configure when you'd like to ask your clients for reviews, the software will handle the rest for you! Now you can grow your client testimonials and increase your online visibility on auto-pilot!",
        available: [false, true, true],
      },

      {
        name: "Automated Client Referrals",
        description:
          "Built-in automation settings that let you promote your referral program to your clients. You can specify how much you want to pay for client referrals, and Contractor+ will automatically promote your referral incentive to your clients. You can specify WHEN you want your clients to learn about your referral program, and we'll handle the rest.",
        available: [false, true, true],
      },
      {
        name: "Contracts & eSignatures",
        description: (
          <>
            Automatically attach a client contract to any estimate or invoice
            and require your client sign the agreement before scheduling the
            work. <br /> <br /> Our lawyer has drafted a default client contract
            that is valid and legally binding in most places, and, you can
            customize your agreement for your specific terms and how you define
            your client relationships. Either way - configure it once, and never
            write another client contract again.
          </>
        ),
        available: [false, true, true],
      },
      {
        name: "W9 Form Automation",
        description:
          "Generate a W9 form for any client in the click of a button, or automatically attach it to any outgoing invoice email.",
        available: [false, true, true],
      },
    ],
  },
  {
    title: "Communication",
    key: "comm",
    features: [
      {
        name: "Contractor+ Voice",
        description:
          "Contractor+ Voice is a business phone system for contractors. Buy or port in your numbers, setup your IVR and voicemail, make & receive calls. Available on both web and mobile versions!",
        available: [true, true, true],
      },
      {
        name: "Two-Way SMS",
        description:
          "Contractor+ Voice is a business phone system for contractors. Buy or port in your numbers, setup your IVR and voicemail, make & receive calls. Available on both web and mobile versions!",
        available: [false, true, true],
      },
      {
        name: "Two-Way Email",
        description:
          "Send & receive email to your connected Gmail, Outlook or IMAP accounts. If you receive an email from an existing contact, it will be added directly to that contact in your Contractor+ CRM.",
        available: [false, true, true],
      },
      {
        name: "Call Recordings & Transcripts",
        description:
          "Every call is recorded and transcribed, making each and every call fully searchable. ",
        available: [false, true, true],
      },
      {
        name: "AI Sentiment Analysis",
        description:
          "All calls are analyzed for sentiment, and you can sort/filter by sentiment in the contacts list view, helping you identify clients that need a little extra TLC or outreach.",
        available: [false, true, true],
      },
      {
        name: "Big Chief AI Assistant",
        description:
          'Big Chief can answer your phone calls, qualify and capture your leads, intake service requests and schedule appointments. 24/7/365, without ever needing a break or "being busy on the other line" again.',
        available: [false, true, true],
      },
    ],
  },
  {
    title: "Estimates, Bids, Quotes, Proposals, Scopes",
    key: "est",
    features: [
      {
        name: "Call It What You Want",
        description:
          "Do you send your clients Estimates? Or do you send your clients Quotes? Call it something else? We let you rename the Estimates module with your own label. Call it whatever you want & we'll re-brand it everywhere.",
        available: [false, true, true],
      },
      {
        name: "Optional Line Items & Add-Ons",
        description:
          "You can add multiple optional line items per group, pre-select which options are recommended, and choose whether you want to allow the user to select multiple options per group or a single option per group. This can be used to dynamically populate the total based on the preference of each lead or client. Perfect for Good/Better/Best or upsells and addons.",
        available: [false, true, true],
      },
      {
        name: "Local Material Pricing",
        description:
          "Our Local Labor Rate Index is populated from an aggregate of two sources, BLS.gov wages, and approved estimates/quotes in Contractor+, minus any outliers. Our USA construction labor rate index and forecast is accessible FREE in our resources hub, and is localized down to the zip code. Labor rates are also accessible by Estimatic AI for highly accurate base costs on your line items.",
        available: [false, true, true],
      },
      {
        name: "Local Labor Rates",
        description:
          "Our Local Labor Rate Index is populated from an aggregate of two sources, BLS.gov wages, and approved estimates/quotes in Contractor+, minus any outliers. Our USA construction labor rate index and forecast is accessible FREE in our resources hub, and is localized down to the zip code. Labor rates are also accessible by Estimatic AI for highly accurate base costs on your line items.",
        available: [false, true, true],
      },
      {
        name: "Estimatic AI",
        description:
          "Estimatic allows you to create estimates using the latest, most advanced reasoning models. You can upload photos, a competitors estimate, and even blueprints or drawings, tell it what you need to create an estimate for, and it will produce a beautiful, accurate, fully itemized estimate in minutes.",
        available: [false, true, true],
      },
      {
        name: "Line Item & Group Templates",
        description:
          'Import or setup your cost book as "Line Item Templates" or "Group Templates" for instant recall when creating an estimate. Your templates are also accessible by Estimatic AI.',
        available: [false, true, true],
      },
      {
        name: "Change Requests",
        description:
          "Your clients can request changes to an estimate or quote before approving it. This helps you work with your clients to get them a quote they're happy with before they sign your contract or you start your work.",
        available: [false, true, true],
      },

      {
        name: "Markup",
        description:
          "Add your markup on a per line item basis or globally at the bottom of any estimate or quote. You put your costs on the line item, and then mark it up so you can track your profitability, with full attribution at every job.",
        available: [false, true, true],
      },
      {
        name: "Adjustments",
        description:
          "Need to make a positive or negative adjustment at the bottom of an estimate or quote? No problem.",
        available: [false, true, true],
      },
      {
        name: "Ratio Lock",
        description:
          "Ratio Lock automates calculating the materials you need to complete a task. Just configure the amount of materials you need for one standard unit of measurement, enable the ratio lock and then increase the labor quantity. The materials will scale proportionally. ",
        available: [false, true, true],
      },
    ],
  },
  {
    title: "Invoicing & Payments",
    key: "pay",
    features: [
      {
        name: "Automated Invoicing",
        description:
          "Do you send your clients Estimates? Or do you send your clients Quotes? Call it something else? We let you rename the Estimates module with your own label. Call it whatever you want & we'll re-brand it everywhere.",
        available: [false, true, true],
      },
      {
        name: "Upcoming Payment Notifications",
        description:
          "Your clients will automatically be notified about upcoming payments. No need to communicate these things manually.",
        available: [false, true, true],
      },
      {
        name: "Past Due Reminders",
        description:
          "You can automatically notify your clients anytime there's a past due balance. One less thing you (or your bookkeeper) needs to keep tabs on.",
        available: [false, true, true],
      },
      {
        name: "Change Orders",
        description:
          "Want to assess a Late Fee in the event a client is late on a payment? You can configure the late fee amount to be assessed and when to assess the fee. It's all automated so you don't have to think about it.",
        available: [false, true, true],
      },
      {
        name: "Late Fees",
        description:
          "You can choose whether or not you'd like to assess a late fee when an invoice becomes past-due. If configured, the late fee will be automatically assessed.",
        available: [false, true, true],
      },
      {
        name: "Import Expenses",
        description:
          "If you've added expenses that are marked as billable, and they haven't been invoices yet, you can quickly import them to any invoice for collections.",
        available: [false, true, true],
      },
      {
        name: "Batch/Bulk Payments",
        description:
          "If you have clients that have multiple projects going in parallel, they may cut you a check for more than one invoice/job. This allows you to record a single payment and attribute it to different invoices/jobs quickly and easily.",
        available: [false, true, true],
      },

      {
        name: "Credit & Debit Payments",
        description:
          "You can accept payments from all major debit and credit cards directly on your invoices, in your client portal and in-person.",
        available: [false, true, true],
      },
      {
        name: "ACH Payments",
        description:
          "Collecting a bank/ACH payment has never been easier. We've integrated with Plaid to facilitate fast, secure, frictionless ACH payments. Your clients can login to their bank, click pay, and the transaction is complete!",
        available: [
          false,
          "2.9% Per Transaction",
          "From 2.59%* Per Transaction",
        ],
      },
      {
        name: "Mobile Card Readers",
        description:
          "Order bluetooth Card Readers to accept payments in the field and on-the-go! We'll even send qualifying members a FREE card reader on the house.",
        available: [
          false,
          "1% Per Transaction",
          "1% Per Transaction (Capped at $10)",
        ],
      },
      {
        name: "Pass Transaction Fees To Clients",
        description:
          "Fees eat into every contractors margins. We allow you to pass the fees you'd normally have to eat, directly as a convenience fee for choosing to pay via card. This essentially means fee-free credit card processing for your business.",
        available: [false, true, true],
      },
      {
        name: "Accept Gratuity",
        description:
          "If enabled, you can give your customers the option to add a tip when making a payment. This is becoming more common in some areas and is a great way to reward your technicians for a job well done, that doesn't impact your margins.",
        available: [false, true, true],
      },
      {
        name: "Deposits",
        description:
          "You can specify your deposit requirements directly on an Estimate or Invoice and have it dynamically added to the contract. Your client will pay the deposit on a specified date or immediately upon approving the job.",
        available: [false, true, true],
      },
      {
        name: "Payment Schedules",
        description:
          "You can define an entire date or milestone specific schedule of payments on any Estimate, Invoice or Job. This can be automatically added to your client agreement so your client is contractually agreeing to the specific schedule. ",
        available: [false, true, true],
      },
      {
        name: "Wisetack Consumer Financing",
        description: `Win more jobs and increase your average job size by offering "buy now pay later" style consumer financing to your customers directly on your estimates and invoices. By integrating this into your sales process, you'll sell more, and make more. `,
        available: [false, true, true],
      },
      {
        name: "Recurring Billing / Subscriptions",
        description:
          "Store your clients payment method on file to automatically bill them on a schedule, such as, upon each visit completion, or manually as a job progresses. No more needing to knock on the door or manually send an invoice. Fully automated, the way it should be. ",
        available: [false, false, true],
      },
      {
        name: "Next Day Funding",
        description:
          "Accept a card payment today, the funds hit your account the next business day. This is our standard turnaround for trusted merchants.",
        available: [false, true, true],
      },
      {
        name: "Instant Payouts",
        description:
          "Want your funds faster? If you can't wait until the next day, you can get your funds as soon as 30 minutes with Instant Payouts for 1%.",
        available: [false, "1% Per Payout", "1% Per Payout"],
      },
    ],
  },
  {
    title: "Job & Project Management",
    key: "job",
    features: [
      {
        name: "Tasks",
        description:
          "Keep track of your Tasks & Sub-Tasks to maintain an accurate progress report on every Job Site.",
        available: [false, true, true],
      },
      {
        name: "Subtasks",
        description:
          "Subtasks can be created under any task. Allowing you to break tasks into smaller steps, ensuring more accurate tracking & transparency across the board.",
        available: [false, false, true],
      },
      {
        name: "Gantt",
        description: "Easily manage multi-phase projects with Gantt.",
        available: [false, false, true],
      },
      {
        name: "Import Phases & Tasks From Estimate",
        description:
          'Import "Groups" and "Line Items" as "Phases" and "Tasks" at the Job, to create a Job Template that can then be delegated and scheduled.',
        available: [false, true, true],
      },
      {
        name: "Recurring Jobs",
        description:
          "Have a job that reoccurs multiple times? A weekly visit? A monthly service call? You can quickly create recurring jobs in Contractor+. You can even attach a Service Agreement and configure automated billing to match the schedule of your recurring jobs!",
        available: [false, true, true],
      },
      {
        name: "Work Orders",
        description:
          "Prefer to use Work Orders to keep track of your jobs/projects? Contractor+ has both Jobs & Work Orders, so you can use whatever makes the most sense for your business.",
        available: [false, true, true],
      },
      {
        name: "Checklists",
        description:
          "Create multiple checklists for any Job, specific Phase or specific Task. Mandate the completion of these checklists on a specific schedule. With multiple templates to choose from.",
        available: [false, false, true],
      },

      {
        name: "Post-Inspections",
        description:
          "Post-Inspection reports allow you to review the work your crews have completed in the field, and optionally share the before and after results with your clients.",
        available: [false, true, true],
      },
      {
        name: "Photos & Documents",
        description:
          "Attach Photos and Documents to any Client or Project. Additional storage can be purchased if your limit is reached.",
        available: [false, "250GB", "1TB"],
      },
      {
        name: "Permits",
        description:
          "Track your permits for any job / project in a dedicated permits tab.",
        available: [false, true, true],
      },
      {
        name: "Weather",
        description:
          "Automatically track the Weather Forecast for any Job Site",
        available: [false, true, true],
      },
      {
        name: "Bid Management",
        description:
          "Have a specific Task or Phase of a Job that you need to find a subcontractor for? Open it up for bidding, or send a bid request to specific subcontractors in your area.",
        available: [false, true, "Coming Soon"],
      },
      {
        name: "Subcontractor Collaboration",
        description:
          "Collaborate with other contractors in real-time. Share Job, Phase or Task access with other companies using Contractor+ & invite your existing subcontractors without needing to pay for their access. Free for you, free for them. Everybody wins.",
        available: [false, true, "Coming Soon"],
      },
    ],
  },
  {
    title: "Productivity",
    key: "productivity",
    features: [
      {
        name: "To Do's",
        description: "Add your Employees as Team Members.",
        available: [true, true, "Coming Soon"],
      },
      {
        name: "Reminders",
        description:
          "Never let something slip through the cracks again. Schedule reminders so you'll be alerted when it's time to follow up. ",
        available: [false, true, "coming soon"],
      },
      {
        name: "Action Items",
        description:
          "Never lose sight of anything that requires your attention again. Right on your dashboard, you can see any notification or alert that requires your input.",
        available: [true, true, "coming soon"],
      },
      {
        name: "Notes",
        description:
          "Notes can be added under just about anything, are visible in your communication history, and can be searched.",
        available: [true, true, "coming soon"],
      },
      {
        name: "Custom Reports",
        description:
          "With over 15+ built-in reports, you’ll know exactly how your business is doing.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Custom Fields",
        description:
          "Need to track a specific variable on a per Lead, Client, Job, Estimate, Invoice (or whatever) basis? You can create all your Custom Fields to completely customize your Work Flow.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Time Clock",
        description:
          "You can have your individual employees clock in and out against any task or job. You (or your managers) can optionally clock in and out on behalf of individual team members and even edit their past entry's. This will make your bookkeepers life a lot easier, while also giving you the ability to generate reports to know how efficient your employees are.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Mileage Log",
        description:
          "You can track the mileage of any team member, and see their GPS route data at any time. All without having to purchase any additional external hardware or devices. This makes mileage reimbursement a breeze for your accountant.",
        available: [false, true, "coming soon"],
      },

      {
        name: "Tool & Equipment Tracking",
        description:
          "A streamlined tool and asset management solution with optional low-cost Bluetooth Tool Tags™ or - COMING SOON - one of 3 GPS trackers (no contracts, $25/tracker/month). Stop your tools from growing legs, hold your team and subs accountable, and always know where everything is located.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Expense Tracking",
        description:
          "Track your expenses, know which expenses are reimbursable or billable and even import expenses and receipts to your invoices for reimbursement.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Shopping Lists",
        description:
          "Never forget what you need to pick up at the store, or send the list via email like a purchase order to your preferred vendor(s) and expedite the ordering process.",
        available: [false, true, "coming soon"],
      },
      {
        name: "Full Control Over Settings",
        description:
          "You'll get access to change all kinds of settings related to Branding, Estimates, Invoices, Post-Inspections, Payments and more. ",
        available: [false, true, "coming soon"],
      },
      {
        name: "Email & SMS Templates",
        description:
          "Save a ton of time by configuring templates that you commonly send your clients and contacts. ",
        available: [false, true, "Coming Soon"],
      },
      {
        name: "Multiple Workspaces",
        description:
          "Big Chief is Contractor+'s native AI assistant & is trained on over 300 knowledgebase articles, all past customer communication, hundreds of past QA test cases, and has read access to all your important account information. The ultimate 24/7/365 support assistant and business growth advisor.",
        available: [false, true, "Coming Soon"],
      },
      {
        name: "Big Chief AI",
        description:
          "Big Chief is Contractor+'s native AI assistant & is trained on over 300 knowledgebase articles, all past customer communication, hundreds of past QA test cases, and has read access to all your important account information. The ultimate 24/7/365 support assistant and business growth advisor.",
        available: [false, true, "Coming Soon"],
      },
    ],
  },
  {
    title: "Integrations",
    key: "integration",
    features: [
      {
        name: "QuickBooks Online",
        description:
          "Sync your clients, estimates, invoices, payments, expenses and products & services with QuickBooks Online. ",
        available: [false, false, true],
      },
      {
        name: "CompanyCam",
        description:
          "Sync all your photos and documents directly to CompanyCam & vice versa. ",
        available: [false, false, true],
      },
      {
        name: "Thumbtack",
        description:
          "We offer exclusive lead generation to our clients. But for those who prefer to use Thumbtack, we've made a simple integration that lets you access your Thumbtack leads right inside the leads panel of Contractor+.",
        available: [false, true, true],
      },
      {
        name: "Angi",
        description:
          "Prefer Angi? We've made a simple integration that lets you access your Angi leads right inside the leads panel of Contractor+.",
        available: [false, true, true],
      },
      {
        name: "EarthCam",
        description:
          "If you use EarthCam, you can add your Job Site Live Cams to any job, client or service address. This lets you see what's going on at every job site, right from your Contractor+ dashboard.",
        available: [false, true, true],
      },
      {
        name: "Shovels",
        description:
          "Instantly access permit data for any property / service address.",
        available: [false, true, true],
      },
      {
        name: "iCal",
        description: "Two-way calendar sync with any iCal calendar.",
        available: [false, true, true],
      },
      {
        name: "Google Calendar",
        description: "Two-way calendar sync with any Google Calendar.",
        available: [false, true, true],
      },

      {
        name: "Outlook Calendar",
        description: "Two-way calendar sync with any Outlook calendar.",
        available: [false, true, true],
      },
      {
        name: "Zapier",
        description:
          "Over 5,000 possible integrations you can configure to work with Contractor+ through Zapier.",
        available: [false, false, true],
      },
      {
        name: "SDevelopers API",
        description:
          "We have a full RESTful API, enabling you to build your own custom solutions that are in communication with Contractor+.",
        available: [false, false, true],
      },
    ],
  },
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
    href: "/",
  },
  {
    id: 2,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-2.webp",
    href: "/",
  },
  {
    id: 3,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-3.webp",
    href: "/",
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
    videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
    isModal: true,
  },
  {
    id: 2,
    profileUrl: "/images/webp/review-profile-7.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 1,
    review: "ourReviews.review",
    videoLink: "https://www.youtube.com/watch?v=8ts4jsNZtgM",
    isModal: true,
  },
  {
    id: 3,
    profileUrl: "/images/webp/review-profile-2.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 4,
    review: "ourReviews.review",
    videoLink: "https://www.youtube.com/watch?v=R5Q47lOKtdI",
    isModal: true,
  },
  {
    id: 4,
    profileUrl: "/images/webp/review-profile-3.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 2,
    review: "ourReviews.review",
    videoLink: "https://www.youtube.com/watch?v=L49D7VE_Usw",
    isModal: true,
  },
  {
    id: 5,
    profileUrl: "/images/webp/juan-gracia.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 5,
    isModal: true,
    videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
    review: "ourReviews.review",
  },
  {
    id: 6,
    profileUrl: "/images/webp/rands.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    rating: 1,
    review: "ourReviews.review",
    videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
  },
  {
    id: 7,
    profileUrl: "/images/webp/josh-lesson.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 4,
    videoLink: "https://www.youtube.com/watch?v=r-Fg4MymoXI",
    review: "ourReviews.review",
  },
  {
    id: 8,
    profileUrl: "/images/webp/chad-cranified.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=eANJwuWMDpM",
    review: "ourReviews.review",
  },

  {
    id: 9,
    profileUrl: "/images/webp/joshua.webp",
    userName: "ourReviews.username",
    userRole: "ourReviews.userRole",
    isModal: true,
    rating: 1,
    videoLink: "https://www.youtube.com/watch?v=Y4dbkmz995c",
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
    videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
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
    videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
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
    videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
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
    videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
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
import {
  ClientPortalIcon,
  ContractIcon,
  CrmPropertyIcon,
  EstimateInvoicesIcons,
  FieldServiceManagementIcon,
  MoreEyeIcon,
  PhoneIcon,
  ProjectManageMentIcon,
  ScheludingIcon,
  SubManagementIcon,
  TaskManagementIcon,
} from "../why-contractor/Icons";
import mobile from "../../../public/lotties/11-mobile.json";
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
    titleImg: mobile,
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

export const operatingSystemList = [
  {
    icon: <CrmPropertyIcon />,
    title: "CRM & Property Profiles",
  },
  {
    icon: <ProjectManageMentIcon />,
    title: "Project Management",
  },
  {
    icon: <FieldServiceManagementIcon />,
    title: "Field Service Management",
  },
  {
    icon: <EstimateInvoicesIcons />,
    title: "Estimates & Invoicess",
  },
  {
    icon: <ContractIcon />,
    title: "Contracts & eSign",
  },
  {
    icon: <ScheludingIcon />,
    title: "Scheduling & Dispatch",
  },
  {
    icon: <PhoneIcon />,
    title: "Calls, Text, & Email",
  },
  {
    icon: <TaskManagementIcon />,
    title: "Task Management",
  },
  {
    icon: <SubManagementIcon />,
    title: "Team & Sub Management",
  },
  {
    icon: <ClientPortalIcon />,
    title: "Client Portal",
  },
  {
    icon: <MoreEyeIcon />,
    title: "& More",
  },
];
