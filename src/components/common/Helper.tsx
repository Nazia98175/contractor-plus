import { Plan, Platform, tableFeature } from "@/types";
import {
  Castle,
  Flower,
  Hammer,
  Paintbrush2,
  Plug,
  ThermometerSun,
  Wrench,
} from "lucide-react";
import mobile from "../../../public/lotties/11-mobile.json";
import big_chief_ai from "../../../public/lotties/big-chief-ai.json";
import animationData from "../../../public/lotties/crm.json";
import estimate_builder from "../../../public/lotties/estimate-builder.json";
import lead_icon_black from "../../../public/lotties/lead-icon-black.json";
import live_scheduling from "../../../public/lotties/live-scheduling.json";
import property_profile from "../../../public/lotties/property-profile.json";
import sale_productivity from "../../../public/lotties/sale-productivity.json";
import up_arrow_black from "../../../public/lotties/up-arrow-black.json";
import { OptionType } from "../blog/CustomSelect";
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
} from "../whycontractor/Icons";
import { ClockIcon, ContractorToolsIcon, UpArrowIcon } from "./Icons";

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

export const platforms = [
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
    monthlyPrice: 49,
    annuallyPrice: 29,
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
    title: "PRO Team",
    subtitle: "Minimum of 5 users",
    monthlyPrice: 98,
    annuallyPrice: 58,
    note: "For Teams",
    cta: "Get started",
    featuresHeading: "Everything in PRO +",
    features: [
      "additionalUser",
      "Manage team / employees",
      "Personal, group & client chats",
      "Custom URL & branding",
      "Connect Quickbooks Online",
      "Zapier & developer API",
    ],
    isProTeam: true,
  },
];

export const estimateTemplates = [
  {
    id: "basic-remodel",
    title: "Basic Home Remodel",
    description: "A simple residential remodeling project",
    category: "Residential",
    items: [
      {
        id: "demo",
        description: "Demolition and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 1500,
      },
      {
        id: "framing",
        description: "Framing materials and labor",
        quantity: 1,
        unit: "lot",
        rate: 3200,
      },
      {
        id: "drywall",
        description: "Drywall installation and finishing",
        quantity: 650,
        unit: "sq ft",
        rate: 2.5,
      },
      {
        id: "paint",
        description: "Interior painting (walls and ceiling)",
        quantity: 650,
        unit: "sq ft",
        rate: 1.75,
      },
      {
        id: "flooring",
        description: "Engineered hardwood flooring",
        quantity: 500,
        unit: "sq ft",
        rate: 8.5,
      },
      {
        id: "trim",
        description: "Trim and baseboards installation",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 350,
      },
    ],
  },
  {
    id: "small-bathroom",
    title: "Small Bathroom Renovation",
    description: "Complete bathroom renovation for a small bathroom",
    category: "Residential",
    items: [
      {
        id: "demo",
        description: "Demolition and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 850,
      },
      {
        id: "plumbing",
        description: "Plumbing rough-in and fixtures",
        quantity: 1,
        unit: "lot",
        rate: 1800,
      },
      {
        id: "electrical",
        description: "Electrical work and fixtures",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "drywall",
        description: "Drywall installation and finishing",
        quantity: 180,
        unit: "sq ft",
        rate: 2.75,
      },
      {
        id: "tile",
        description: "Floor and shower tile installation",
        quantity: 120,
        unit: "sq ft",
        rate: 15,
      },
      {
        id: "vanity",
        description: "Vanity installation",
        quantity: 1,
        unit: "ea",
        rate: 800,
      },
      {
        id: "toilet",
        description: "Toilet installation",
        quantity: 1,
        unit: "ea",
        rate: 450,
      },
      {
        id: "shower",
        description: "Shower door installation",
        quantity: 1,
        unit: "ea",
        rate: 650,
      },
      {
        id: "paint",
        description: "Interior painting",
        quantity: 180,
        unit: "sq ft",
        rate: 1.75,
      },
      {
        id: "accessories",
        description: "Bathroom accessories installation",
        quantity: 1,
        unit: "lot",
        rate: 250,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 200,
      },
    ],
  },
  {
    id: "fence-installation",
    title: "Fence Installation",
    description: "Wood privacy fence installation",
    category: "Outdoor",
    items: [
      {
        id: "materials",
        description: "Wood fence materials (posts, rails, pickets)",
        quantity: 100,
        unit: "ft",
        rate: 18.5,
      },
      {
        id: "labor",
        description: "Installation labor",
        quantity: 100,
        unit: "ft",
        rate: 12,
      },
      {
        id: "concrete",
        description: "Concrete for post setting",
        quantity: 20,
        unit: "ea",
        rate: 8.5,
      },
      {
        id: "gate",
        description: "Gate installation and hardware",
        quantity: 1,
        unit: "ea",
        rate: 350,
      },
      {
        id: "cleanup",
        description: "Site cleanup and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 250,
      },
    ],
  },
  {
    id: "commercial-office",
    title: "Commercial Office Renovation",
    description: "Basic office space renovation",
    category: "Commercial",
    items: [
      {
        id: "demo",
        description: "Demolition and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 2200,
      },
      {
        id: "framing",
        description: "Framing for new walls",
        quantity: 120,
        unit: "ft",
        rate: 28,
      },
      {
        id: "drywall",
        description: "Drywall installation and finishing",
        quantity: 1200,
        unit: "sq ft",
        rate: 2.5,
      },
      {
        id: "electrical",
        description: "Electrical work and fixtures",
        quantity: 1,
        unit: "lot",
        rate: 3500,
      },
      {
        id: "doors",
        description: "Interior doors and hardware",
        quantity: 4,
        unit: "ea",
        rate: 350,
      },
      {
        id: "paint",
        description: "Interior painting",
        quantity: 1200,
        unit: "sq ft",
        rate: 1.5,
      },
      {
        id: "flooring",
        description: "Commercial grade carpet installation",
        quantity: 800,
        unit: "sq ft",
        rate: 4.75,
      },
      {
        id: "ceiling",
        description: "Drop ceiling installation",
        quantity: 800,
        unit: "sq ft",
        rate: 3.5,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 450,
      },
    ],
  },
  {
    id: "kitchen-remodel",
    title: "Kitchen Remodeling",
    description: "Complete kitchen renovation project",
    category: "Residential",
    items: [
      {
        id: "demo",
        description: "Demolition and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 1800,
      },
      {
        id: "plumbing",
        description: "Plumbing rough-in and fixtures",
        quantity: 1,
        unit: "lot",
        rate: 2200,
      },
      {
        id: "electrical",
        description: "Electrical work including lighting",
        quantity: 1,
        unit: "lot",
        rate: 2400,
      },
      {
        id: "cabinets",
        description: "Custom cabinets supply and install",
        quantity: 20,
        unit: "ln ft",
        rate: 350,
      },
      {
        id: "countertop",
        description: "Quartz countertop supply and install",
        quantity: 30,
        unit: "sq ft",
        rate: 85,
      },
      {
        id: "backsplash",
        description: "Ceramic tile backsplash",
        quantity: 35,
        unit: "sq ft",
        rate: 22,
      },
      {
        id: "flooring",
        description: "Tile flooring installation",
        quantity: 200,
        unit: "sq ft",
        rate: 16,
      },
      {
        id: "appliances",
        description: "Appliance installation",
        quantity: 5,
        unit: "ea",
        rate: 250,
      },
      {
        id: "paint",
        description: "Interior painting",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 350,
      },
    ],
  },
  {
    id: "deck-construction",
    title: "Deck Construction",
    description: "Wooden deck building project",
    category: "Outdoor",
    items: [
      {
        id: "permits",
        description: "Building permits and inspections",
        quantity: 1,
        unit: "lot",
        rate: 500,
      },
      {
        id: "excavation",
        description: "Excavation and footings",
        quantity: 12,
        unit: "ea",
        rate: 125,
      },
      {
        id: "framing",
        description: "Pressure-treated lumber framing",
        quantity: 400,
        unit: "sq ft",
        rate: 12,
      },
      {
        id: "decking",
        description: "Composite decking material and installation",
        quantity: 400,
        unit: "sq ft",
        rate: 22,
      },
      {
        id: "railing",
        description: "Railing system installation",
        quantity: 60,
        unit: "ln ft",
        rate: 65,
      },
      {
        id: "stairs",
        description: "Stair construction",
        quantity: 1,
        unit: "ea",
        rate: 1200,
      },
      {
        id: "cleanup",
        description: "Site cleanup and debris removal",
        quantity: 1,
        unit: "lot",
        rate: 350,
      },
    ],
  },
  {
    id: "basement-finish",
    title: "Basement Finishing",
    description: "Complete basement finishing project",
    category: "Residential",
    items: [
      {
        id: "permits",
        description: "Building permits and inspections",
        quantity: 1,
        unit: "lot",
        rate: 750,
      },
      {
        id: "framing",
        description: "Wall framing and insulation",
        quantity: 600,
        unit: "sq ft",
        rate: 8.5,
      },
      {
        id: "electrical",
        description: "Electrical work including lighting",
        quantity: 1,
        unit: "lot",
        rate: 3200,
      },
      {
        id: "plumbing",
        description: "Plumbing rough-in for bathroom",
        quantity: 1,
        unit: "lot",
        rate: 2800,
      },
      {
        id: "drywall",
        description: "Drywall installation and finishing",
        quantity: 1800,
        unit: "sq ft",
        rate: 2.75,
      },
      {
        id: "flooring",
        description: "Carpet and vinyl flooring",
        quantity: 800,
        unit: "sq ft",
        rate: 6.5,
      },
      {
        id: "bathroom",
        description: "Basement bathroom installation",
        quantity: 1,
        unit: "lot",
        rate: 5500,
      },
      {
        id: "doors",
        description: "Interior doors and trim",
        quantity: 5,
        unit: "ea",
        rate: 320,
      },
      {
        id: "paint",
        description: "Interior painting",
        quantity: 1800,
        unit: "sq ft",
        rate: 1.8,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 450,
      },
    ],
  },
  {
    id: "hvac-installation",
    title: "HVAC Installation",
    description: "New HVAC system installation",
    category: "HVAC",
    items: [
      {
        id: "permits",
        description: "Permits and inspections",
        quantity: 1,
        unit: "lot",
        rate: 650,
      },
      {
        id: "equipment",
        description: "HVAC equipment (furnace and AC)",
        quantity: 1,
        unit: "set",
        rate: 5200,
      },
      {
        id: "ductwork",
        description: "Ductwork installation and materials",
        quantity: 1,
        unit: "lot",
        rate: 3800,
      },
      {
        id: "electrical",
        description: "Electrical connections and wiring",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "thermostat",
        description: "Smart thermostat installation",
        quantity: 1,
        unit: "ea",
        rate: 350,
      },
      {
        id: "testing",
        description: "System testing and balancing",
        quantity: 1,
        unit: "lot",
        rate: 450,
      },
      {
        id: "removal",
        description: "Old system removal and disposal",
        quantity: 1,
        unit: "lot",
        rate: 650,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 250,
      },
    ],
  },
  {
    id: "hvac-service",
    title: "HVAC Service & Maintenance",
    description: "Regular HVAC service and maintenance",
    category: "HVAC",
    items: [
      {
        id: "inspection",
        description: "Complete system inspection",
        quantity: 1,
        unit: "ea",
        rate: 150,
      },
      {
        id: "filter",
        description: "Replace air filters",
        quantity: 2,
        unit: "ea",
        rate: 35,
      },
      {
        id: "coil",
        description: "Clean evaporator and condenser coils",
        quantity: 1,
        unit: "set",
        rate: 175,
      },
      {
        id: "refrigerant",
        description: "Check and adjust refrigerant levels",
        quantity: 1,
        unit: "ea",
        rate: 85,
      },
      {
        id: "ductwork",
        description: "Inspect and seal ductwork",
        quantity: 1,
        unit: "lot",
        rate: 120,
      },
      {
        id: "components",
        description: "Lubricate moving components",
        quantity: 1,
        unit: "lot",
        rate: 65,
      },
      {
        id: "thermostat",
        description: "Calibrate thermostat",
        quantity: 1,
        unit: "ea",
        rate: 45,
      },
      {
        id: "testing",
        description: "Test system cycles and performance",
        quantity: 1,
        unit: "ea",
        rate: 75,
      },
    ],
  },
  {
    id: "interior-painting",
    title: "Interior Painting",
    description: "Complete interior house painting",
    category: "Painting",
    items: [
      {
        id: "prep",
        description: "Surface preparation and repairs",
        quantity: 1500,
        unit: "sq ft",
        rate: 0.75,
      },
      {
        id: "primer",
        description: "Primer application",
        quantity: 1500,
        unit: "sq ft",
        rate: 0.65,
      },
      {
        id: "walls",
        description: "Wall painting (2 coats)",
        quantity: 1200,
        unit: "sq ft",
        rate: 1.25,
      },
      {
        id: "ceiling",
        description: "Ceiling painting",
        quantity: 800,
        unit: "sq ft",
        rate: 1.35,
      },
      {
        id: "trim",
        description: "Trim and door painting",
        quantity: 1,
        unit: "lot",
        rate: 850,
      },
      {
        id: "cleanup",
        description: "Cleanup and touch-ups",
        quantity: 1,
        unit: "lot",
        rate: 350,
      },
      {
        id: "materials",
        description: "Premium paint and supplies",
        quantity: 1,
        unit: "lot",
        rate: 950,
      },
    ],
  },
  {
    id: "exterior-painting",
    title: "Exterior Painting",
    description: "Complete exterior house painting",
    category: "Painting",
    items: [
      {
        id: "prep",
        description: "Pressure washing and surface preparation",
        quantity: 2000,
        unit: "sq ft",
        rate: 0.85,
      },
      {
        id: "repairs",
        description: "Wood repairs and replacements",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "caulking",
        description: "Caulking and sealing",
        quantity: 1,
        unit: "lot",
        rate: 750,
      },
      {
        id: "primer",
        description: "Exterior primer application",
        quantity: 2000,
        unit: "sq ft",
        rate: 0.75,
      },
      {
        id: "paint",
        description: "Exterior paint application (2 coats)",
        quantity: 2000,
        unit: "sq ft",
        rate: 1.45,
      },
      {
        id: "trim",
        description: "Trim and accent painting",
        quantity: 1,
        unit: "lot",
        rate: 950,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 450,
      },
      {
        id: "materials",
        description: "Premium exterior paint and supplies",
        quantity: 1,
        unit: "lot",
        rate: 1250,
      },
    ],
  },
  {
    id: "landscape-design",
    title: "Landscape Design & Installation",
    description: "Complete landscape renovation",
    category: "Landscaping",
    items: [
      {
        id: "design",
        description: "Landscape design and planning",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "demo",
        description: "Demolition and site preparation",
        quantity: 1000,
        unit: "sq ft",
        rate: 1.75,
      },
      {
        id: "grading",
        description: "Grading and drainage solutions",
        quantity: 1000,
        unit: "sq ft",
        rate: 2.25,
      },
      {
        id: "irrigation",
        description: "Irrigation system installation",
        quantity: 1,
        unit: "lot",
        rate: 2800,
      },
      {
        id: "sod",
        description: "Sod installation",
        quantity: 800,
        unit: "sq ft",
        rate: 1.95,
      },
      {
        id: "plants",
        description: "Trees, shrubs, and plants",
        quantity: 1,
        unit: "lot",
        rate: 3500,
      },
      {
        id: "mulch",
        description: "Mulch and decorative rock",
        quantity: 1,
        unit: "lot",
        rate: 1200,
      },
      {
        id: "hardscape",
        description: "Hardscaping (pavers, retaining wall)",
        quantity: 1,
        unit: "lot",
        rate: 4500,
      },
      {
        id: "lighting",
        description: "Landscape lighting",
        quantity: 1,
        unit: "lot",
        rate: 1800,
      },
      {
        id: "cleanup",
        description: "Final cleanup",
        quantity: 1,
        unit: "lot",
        rate: 450,
      },
    ],
  },
  {
    id: "lawn-maintenance",
    title: "Lawn Maintenance",
    description: "Regular lawn care service (monthly)",
    category: "Landscaping",
    items: [
      {
        id: "mowing",
        description: "Lawn mowing and edging (4 visits)",
        quantity: 4,
        unit: "visit",
        rate: 75,
      },
      {
        id: "trimming",
        description: "Shrub and hedge trimming",
        quantity: 1,
        unit: "lot",
        rate: 150,
      },
      {
        id: "weeding",
        description: "Flower bed weeding",
        quantity: 4,
        unit: "visit",
        rate: 65,
      },
      {
        id: "fertilization",
        description: "Lawn fertilization",
        quantity: 1,
        unit: "ea",
        rate: 120,
      },
      {
        id: "pestcontrol",
        description: "Pest control application",
        quantity: 1,
        unit: "ea",
        rate: 95,
      },
      {
        id: "cleanup",
        description: "Debris removal and cleanup",
        quantity: 4,
        unit: "visit",
        rate: 45,
      },
    ],
  },
];

export const latestContractorData = [
  {
    id: 1,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/webp/latest-blog-1.webp",
    link: "/articles/large",
    tags: ["Plumbing", "Drywall", "Blueprint"],
    second: [
      {
        id: 2,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Migrating to Linear 101",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        image: "/images/webp/latest-blog-2.webp",
        link: "/articles/small-1",
        tags: ["Architecture", "Planning"],
      },
      {
        id: 3,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        image: "/images/webp/latest-blog-3.webp",
        link: "/articles/small-2",
        tags: ["Design", "Frameworks"],
      },
    ],
  },
  {
    id: 4,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "UX review presentations 2",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/large-2",
    tags: ["Leadership", "Management"],
    second: [
      {
        id: 5,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
        image: "/images/webp/latest-blog-2.webp",
        link: "/articles/small-3",
        tags: ["Architecture", "Planning"],
      },
      {
        id: 6,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
        image: "/images/webp/latest-blog-3.webp",
        link: "/articles/small-4",
        tags: ["Design", "Frameworks"],
      },
    ],
  },
  {
    id: 7,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "UX review presentations 2",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/large-2",
    tags: ["Leadership", "Management"],
    second: [
      {
        id: 8,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
        image: "/images/webp/latest-blog-2.webp",
        link: "/articles/small-3",
        tags: ["Architecture", "Planning"],
      },
      {
        id: 9,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
        image: "/images/webp/latest-blog-3.webp",
        link: "/articles/small-4",
        tags: ["Design", "Frameworks"],
      },
    ],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "UX review presentations 2",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/large-2",
    tags: ["Leadership", "Management"],
    second: [
      {
        id: 11,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get",
        image: "/images/webp/latest-blog-2.webp",
        link: "/articles/small-3",
        tags: ["Architecture", "Planning"],
      },
      {
        id: 12,
        category: "Contractor",
        date: "1 Jan 2023",
        title: "Building your API Stack",
        description:
          "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag",
        image: "/images/webp/latest-blog-3.webp",
        link: "/articles/small-4",
        tags: ["Design", "Frameworks"],
      },
    ],
  },
];
export const articles = [
  {
    id: 1,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 2,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 5,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 6,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
  {
    id: 7,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 8,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 9,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 12,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
  {
    id: 1,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 2,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 5,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 6,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
  {
    id: 7,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 8,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 9,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 2,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 5,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 6,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
  {
    id: 7,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 8,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 9,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 12,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
];
export const contractorArticles = [
  {
    id: 1,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },

  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },

  {
    id: 8,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 9,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 2,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 4,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 5,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 6,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
  {
    id: 7,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/webp/blog-card-1.webp",
    link: "/articles/bill-walsh-leadership",
    tags: ["Leadership", "Management"],
  },
  {
    id: 8,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    image: "/images/webp/blog-card-2.webp",
    link: "/articles/pm-mental-models",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 9,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "What is Wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/blog-card-3.webp",
    link: "/articles/what-is-wireframing",
    tags: ["Design", "Research"],
  },
  {
    id: 10,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    image: "/images/webp/blog-card-4.webp",
    link: "/articles/collaboration-better-designers",
    tags: ["Design", "Research"],
  },
  {
    id: 11,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Our top 10 Javascript frameworks to use",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    image: "/images/webp/blog-card-5.webp",
    link: "/articles/top-javascript-frameworks",
    tags: ["Software Development", "Tools", "SaaS"],
  },
  {
    id: 12,
    category: "Contractor",
    date: "1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    image: "/images/webp/blog-card-6.webp",
    link: "/articles/podcast-better-cx-community",
    tags: ["Podcasts", "Customer Success"],
  },
];

export const contractorTypes: OptionType[] = [
  {
    value: "contractor",
    label: "General Contractor",
    icon: <ContractorToolsIcon />,
  },
  {
    value: "electrician",
    label: "Electrician",
    icon: <Plug color="white" />,
  },
  {
    value: "plumber",
    label: "Plumber",
    icon: <Wrench color="white" />,
  },
  {
    value: "carpenter",
    label: "Carpenter",
    icon: <Hammer color="white" />,
  },
  {
    value: "painter",
    label: "Painter",
    icon: <Paintbrush2 color="white" />,
  },
  {
    value: "hvac",
    label: "HVAC Technician",
    icon: <ThermometerSun color="white" />,
  },
  {
    value: "roofer",
    label: "Roofer",
    icon: <Castle color="white" />,
  },
  {
    value: "landscaper",
    label: "Landscaper",
    icon: <Flower color="white" />,
  },
];
export const integrationTypes: OptionType[] = [
  {
    value: "contractor",
    label: "Zapier",
    logo: "/images/svg/zapier.svg",
  },
  {
    value: "electrician",
    label: "Simply Business",
    logo: "/images/svg/simple-business.svg",
  },
  {
    value: "plumber",
    label: "Venmo",
    logo: "/images/svg/venmo.svg",
  },
  {
    value: "cashapp",
    label: "CashApp",
    logo: "/images/svg/cash-app.svg",
  },
  {
    value: "paypal",
    label: "PayPal",
    logo: "/images/svg/paypal.svg",
  },
  {
    value: "authorize",
    label: "Authorize.net",
    logo: "/images/svg/authorize.svg",
  },
  {
    value: "square",
    label: "Square",
    logo: "/images/svg/square.svg",
  },
  {
    value: "stripe",
    label: "Stripe",
    logo: "/images/svg/strapi.svg",
  },
  {
    value: "gmail",
    label: "Gmail",
    logo: "/images/svg/gmail.svg",
  },
  {
    value: "outlook",
    label: "Outlook Calendar",
    logo: "/images/svg/outlook.svg",
  },
  {
    value: "ical",
    label: "iCal",
    logo: "/images/svg/calender.svg",
  },
  {
    value: "office365",
    label: "Office 365 Calendar",
    logo: "/images/svg/office-365.svg",
  },
  {
    value: "googlecal",
    label: "Google Calendar",
    logo: "/images/svg/google-calender.svg",
  },
  {
    value: "quickbooks",
    label: "Quickbooks Online",
    logo: "/images/svg/quickbooks.svg",
  },
  {
    value: "thumbtack",
    label: "Thumbtack",
    logo: "/images/svg/thumbtach.svg",
  },
  {
    value: "earthcam",
    label: "EarthCam",
    logo: "/images/svg/earthcam.svg",
  },
  {
    value: "wisetack",
    label: "Wisetack",
    logo: "/images/svg/wisetack.svg",
  },
  {
    value: "companycam",
    label: "CompanyCam",
    logo: "/images/svg/companycom.svg",
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
        available: [
          false,
          "2.9% Per Transaction",
          "From 2.59%* Per Transaction",
        ],
      },
      {
        name: "ACH Payments",
        description:
          "Collecting a bank/ACH payment has never been easier. We've integrated with Plaid to facilitate fast, secure, frictionless ACH payments. Your clients can login to their bank, click pay, and the transaction is complete!",
        available: [
          false,
          "1% Per Transaction",
          "1% Per Transaction (Capped at $10)",
        ],
      },
      {
        name: "Mobile Card Readers",
        description:
          "Order bluetooth Card Readers to accept payments in the field and on-the-go! We'll even send qualifying members a FREE card reader on the house.",
        available: [false, true, true],
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
    title: "Team Collaboration",
    key: "collab",
    features: [
      {
        name: "Manage Team Membersg",
        description: "Add your Employees as Team Members.",
        available: [false, false, true],
      },
      {
        name: "Roles & User Permissions",
        description:
          "Control each individual's level of access and control. Group them into groups to save time when configuring who needs to have access to what.",
        available: [false, false, true],
      },
      {
        name: "Comprehensive Mobile App",
        description:
          "Control each individual's level of access and control. Group them into groups to save time when configuring who needs to have access to what.",
        available: [true, true, true],
      },
      {
        name: "Chat",
        description:
          "Control each individual's level of access and control. Group them into groups to save time when configuring who needs to have access to what.",
        available: [false, true, true],
      },
      {
        name: "Drag & Drop Scheduling",
        description:
          "View the Schedule for your entire team. Send or Print any individual schedule, quickly assign Team Member's to individual visits, and keep track of unscheduled events that need to be scheduled.",
        available: [false, true, true],
      },
      {
        name: "Real-Time Dispatching",
        description:
          "You can schedule events without having anyone assigned. You can see your scheduled, unscheduled & unassigned jobs on the in-app Schedule and assign team members or groups of team members based on their individual availability.",
        available: [false, false, true],
      },
      {
        name: "Live Map",
        description:
          "Track your entire team's whereabouts white they're on the clock or tracking their mileage. See who's on the Job Site & see who's driving. Start a chat, delegate/assign a task, and more - right from the map view!",
        available: [false, false, true],
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
        name: "Developers API",
        description:
          "We have a full RESTful API, enabling you to build your own custom solutions that are in communication with Contractor+.",
        available: [false, false, true],
      },
    ],
  },
];
export const pricingfaqitems = [
  {
    id: 1,
    question: "What are the differences between FREE, PRO and PRO TEAM?",
    answer:
      "The FREE plan allows you to manage your clients, prepare and send estimates, invoices, even collect payments via credit card and eCheck. You can do pretty much everything you need for a smaller proprietorship or single-member business. PRO will allow you to add your employees, coworkers, admin assistants, and subcontractors to collaborate on projects. It also gives you a lot more control over individual settings and configurations throughout the app. PRO TEAM is maximum performance – everything to the max. All the features of PRO + enterprise level customizations, third party API integrations, more payment options, it’s Contractor+ – without limits.  For a one man operation, the free version should work just fine. For small teams, PRO should be enough to get the job done. And for the medium to larger companies who expect the best and want it all – PRO TEAM is the plan that was designed for you.",
  },
  {
    id: 2,
    question:
      " What if I buy an annual subscription of PRO but want to upgrade to PRO TEAM later?",
    answer:
      "We will prorate the difference between the two costs and apply any unused/remaining balance from your currently active PRO subscriptions to the cost of your PRO TEAM upgrade. There’s never a problem upgrading or downgrading at any time!",
  },
  {
    id: 3,
    question: "Do you have tutorials or offer assistance with account setup?",
    answer:
      "We offer both. We have video overviews and tutorials of every main feature and setting screen throughout our app. We also have coachmarks in the mobile apps that walk you through and explain each feature. We also have an amazing Customer Success team available 5 days a week offering 1-on-1 Zoom setup sessions, and demos. We’re here for you in every way possible to make sure you get up and running quickly and know how to properly utilize the app.",
  },
  {
    id: 4,
    question: "What is your cancellation & refund policy?",
    answer:
      "You can cancel at any time. It’s self-service, so you can upgrade, downgrade and cancel your account on your own in the click of a button. We offer a free for life version of our software and 14 day trials of most premium features (such as the job schedule and the team chat). During this period you should determine for yourself if upgrading to PRO or ULTIMATE is the best option for your business. You should not upgrade until you’ve properly evaluated the software, learned how to use everything and know that it’s the best choice for you. As such, Contractor+  is a digital, intangible good, and all sales are final. We will not honor any refunds for any reason, under any circumstances. We have thousands of users using our software successfully.  If you need help setting anything up or have questions, our Customer Success team is very accessible.",
  },
];
export const integrationfaqitems = [
  {
    id: 1,
    question:
      "How can I use PayPal for my small business or contracting needs?",
    answer:
      "It offers various options for small businesses and contractors to send and receive payments, manage transactions, and access financial resources. You can integrate it with Contractor+ for streamlined financial management. Contractors using this integration can easily accept payments from Visa, Mastercard and major cards from leading banks.",
  },
  {
    id: 2,
    question:
      "Are there any fees associated with using PayPal for business purposes?",
    answer:
      "They may charge fees for certain transactions, such as receiving payments for goods and services. It’s essential to review their fee structure on their official website. It offers a fee-free service option for sending money to family and friends within the same country. If you’re sending money internationally or using a credit card, fees may apply.",
  },
  {
    id: 3,
    question:
      "Can I use PayPal to purchase goods and services online and in physical stores?",
    answer:
      "Yes, PayPal & their Wallet is widely accepted by online retailers, e-commerce, online banking and some physical stores. Look for the PayPal logo or the option to choose PayPal at checkout. They also offer the option to purchase gift cards and send digital receipts to recipients. You can link your bank account or debit card to your Pay Pal account for seamless transfers and purchases.",
  },
  {
    id: 4,
    question:
      "How does PayPal’s support for cryptocurrencies like Bitcoin and Ethereum work?",
    answer:
      "It allows users to buy, hold, and sell cryptocurrencies within their accounts. You can use supported cryptocurrencies for purchases where PayPal is accepted. Not just crytocurrencies using their wallet you can accept not just dollar but other world markets currencies as well.",
  },
  {
    id: 5,
    question:
      "What are the risks associated with using PayPal for financial transactions?",
    answer:
      "Like any financial platform, there are security risks associated with PayPal. It’s crucial to use strong passwords, enable two-factor authentication, and stay vigilant against phishing attempts.",
  },
  {
    id: 6,
    question:
      "How can I access my PayPal account from various devices, including Android, iPhone, and computer?",
    answer:
      "It provides a user-friendly app for Android and iPhone users, and you can also access your account through their website on your computer or other internet-enabled devices.",
  },
  {
    id: 7,
    question:
      "What are some of the most notable brands and retailers that accept PayPal payments?",
    answer:
      "It is widely accepted by major brands, retailers, and online marketplaces, including eBay, Honey, Happy Returns, and many others.",
  },
  {
    id: 8,
    question:
      "Can I use Pay Pal account for international money transfers and currency exchanges?",
    answer:
      "Yes, It offers services for international money transfers and currency exchanges, making it a versatile choice for global transactions. It’s available in many countries like U.S. , India, Europe, Canada etc and supports multiple each country currencies. You can choose your preferred currency when making transactions.     PayPal provides a wealth of information, articles, and resources available for individuals and businesses looking to learn more about using their service effectively, on their official website to help users make the most of their platform. Their continuous updates and growth initiatives reflect an unwavering dedication to seizing new opportunities. The latest versions of their app, available in app stores, are a testament to their user-centric approach. With a strong community, secure deposits, and millions of readers,      PayPal’s impact on the financial world is profound. As a company, they’re not just an owner of technology; they’re pioneers shaping the future through research and development, one successful launch and community-driven initiative at a time.",
  },
];

export const estimateFaq = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question:
        "How is Estimatic different from tools like ChatGPT or other AI estimate generators?",
      answer:
        "Our AI estimate software actually pulls from your real cost book, current supplier pricing, and local labor rates. While other tools give you generic estimates, Estimatic builds accurate, client-ready bids that match how you quote jobs.",
    },
    {
      id: 2,
      question: "Can I still control or edit the estimate?",
      answer:
        "Absolutely. Estimatic gives you a complete draft in a couple minutes, but you’ll always have the final say. Review, adjust, and approve line items just like you would normally (but WAY faster!)",
    },
    {
      id: 3,
      question: "Can Estimatic read job photos and blueprints? ",
      answer:
        "Yes — upload jobsite photos, blueprints, and/or drawings when you create your estimate for the AI to use. ",
    },
    {
      id: 4,
      question: "Will it match my usual estimate format?",
      answer:
        "Yes. Use your saved templates and upload your cost book so the final output looks like your usual estimates. No reformatting or manual entry necessary. We don’t force you into a rigid layout. ",
    },
    {
      id: 5,
      question: "What data is used for pricing? ",
      answer:
        "Estimatic searches to find  real-time pricing from vendors like Lowe’s, Home Depot, Menards, Ace Hardware, Build.com, and ABC Supply. It also uses a proprietary labor rate index based on over 500,000 approved estimates and official BLS data. ",
    },
    {
      id: 6,
      question: "Is Estimatic part of Contractor+ or a separate tool?",
      answer:
        "It’s fully built into Contractor+. That means your estimates automatically connect to your CRM, service requests, job schedule, and invoicing. It’s included with your regular subscription and each estimate created costs a minimal dollar amount (just to cover the cost of using AI). ",
    },
  ],
};
export const blogData = [
  {
    id: 1,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-1.webp",
    href: "/blog/2",
  },
  {
    id: 2,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-2.webp",
    href: "/blog/2",
  },
  {
    id: 3,
    title: "Ryan Garcia is fighting again, this time on social media",
    date: "03 Jan 2025",
    category: "Contractor+",
    descrition:
      "Boxing star Ryan Garcia and his promoter, Hall of Fame fighter Oscar De La Hoya, reignited their war of words via Twitter on",
    image: "/images/webp/blog-post-3.webp",
    href: "/blog/2",
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

export const reviews = [
  {
    id: 1,
    userName: "Brandon Geiger",
    profileUrl: "/images/webp/rushville.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
    userRole: "Co-Owner, Rushville Restorations",
  },

  {
    id: 2,
    userName: "Juan Garcia",
    profileUrl: "/images/webp/juan-gracia.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
    userRole: "Owner, Nailed It Miami",
  },
  {
    id: 3,
    userName: "Scott Azure",
    profileUrl: "/images/webp/rands.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
    userRole: "CEO at Rands Mechanical",
  },
  {
    id: 4,
    userName: "Brandon Geiger",
    profileUrl: "/images/webp/rushville.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `Since I started sending all my estimates using Contractor+, I have
    stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
    userRole: "Co-Owner, Rushville Restorations",
  },

  {
    id: 5,
    userName: "Juan Garcia",
    profileUrl: "/images/webp/juan-gracia.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
    userRole: "Owner, Nailed It Miami",
  },
  {
    id: 6,
    userName: "Scott Azure",
    profileUrl: "/images/webp/rands.webp",
    rating: 5,
    videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
    isModal: true,
    companyLogo: "/images/svg/randsIcon.svg",
    review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
    userRole: "CEO at Rands Mechanical",
  },
];
export const featureContentss = [
  {
    title: "The first CRM that thinks like a contractor",
    titleImg: animationData,
    description:
      "Most “contractor CRMs” are just contact pages with a few job links. Contractor+ brings the full picture: ",
    highlight:
      "timelines, call transcripts, AI sentiment tracking, and role-specific contacts..",
    imgSrc: "/images/webp/core-1.webp",
  },
  {
    title: "Send the right tech to the right job based on proximity",
    titleImg: live_scheduling,
    description:
      "See team availability and location in real-time to assign jobs faster and smarter. Drag, drop, and delegate",
    highlight: "based on who’s closest and free. No more calling around. ",
    imgSrc: "/images/webp/core-2.webp",
  },
  {
    title: "Collaborate with your team on any job",
    titleImg: mobile,
    description:
      "Each job has its own built-in group chat, keeping the whole crew on the same page",
    highlight: "and minimizing texts, missed updates, or miscommunication.",
    imgSrc: "/images/webp/core-3.webp",
  },
  {
    title: "Quotes that practically write themselves",
    titleImg: estimate_builder,
    description:
      "Build accurate, professional estimates fast with live local pricing from Lowe’s, Home Depot",
    highlight:
      "and more. Contractor+ pulls your line items, adds markup, and generates client-ready contracts in minutes.",
    imgSrc: "/images/webp/core-4.webp",
  },
  {
    title: "The only CRM with property-specific profiles",
    titleImg: property_profile,
    description:
      "Contractor+ is the only platform that lets you track the full history of every property you’ve ever serviced:",
    highlight: "communications,  photos & documents, invoices, even live cams.",
    imgSrc: "/images/webp/core-5.webp",
  },
  {
    title: "The ultimate AI assistant for contractors",
    titleImg: big_chief_ai,
    description:
      "Every call and text gets answered. Every Lead is qualified and entered into your CRM, every Service Request is captured, every Estimate/Quote appointment is scheduled. Big Chief never sleeps..",
    imgSrc: "/images/webp/core-6.webp",
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
export const fieldcarddetail = [
  {
    text: "You can’t see which leads need attention or how much they’re worth.",
  },
  {
    text: "There’s no easy way to manage follow-ups, reasons for lost jobs, or who’s handling what.",
  },
  {
    text: "Other solutions don’t really show you where revenue is getting stuck.",
  },
];
export const simpleWayToBill = [
  {
    text: "You’re manually updating estimates every time something changes.",
  },
  {
    text: (
      <>
        You’re sending multiple invoices just to reflect <br /> one job.
      </>
    ),
  },
  {
    text: "You’re losing money when labor, materials, or mileage go unbilled.",
  },
];

export const competitordoes = [
  {
    text: "Your leads are going to the business who showed up first.",
  },
  {
    text: "Missed reviews and weak content drive down your rank.",
  },
  {
    text: "A weak profile kills trust before you even get a chance to bid.",
  },
];

export const dealflowhero = {
  getStartedFreeBtn: "Get started FREE",
  mobileBtn: "Download FREE App",
  nccTxt: "No credit card required",
};

export const estimaticReviews = {
  data: [
    {
      reviews: {
        title: null,
        subTitle: null,
        reviews: [
          {
            id: 1,
            userName: "Richard Tooley",
            profileImg: null,
            rating: 5,
            videoLink: null,
            isModal: false,
            companyLogo: null,
            review: `I switched from Jobber to Contractor+ because it fits the way I run my business. Clear communication, easy estimates, and job scheduling help me stay on top of everything. Contractor+ made my business more profitable and easier to manage.`,
            userRole: "Focus Handyman",
          },
          {
            id: 2,
            userName: "Richard Tooley",
            profileImg: null,
            rating: 5,
            videoLink: null,
            isModal: false,
            companyLogo: null,
            review: `I switched from Jobber to Contractor+ because it fits the way I run my business. Clear communication, easy estimates, and job scheduling help me stay on top of everything. Contractor+ made my business more profitable and easier to manage.`,
            userRole: "Focus Handyman",
          },
          {
            id: 3,
            userName: "Scott Azure",
            profileImg: "/images/webp/rands.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
            userRole: "CEO at Rands Mechanical",
          },
          {
            id: 4,
            userName: "Richard Tooley",
            profileImg: null,
            rating: 5,
            videoLink: null,
            isModal: false,
            companyLogo: null,
            review: `I switched from Jobber to Contractor+ because it fits the way I run my business. Clear communication, easy estimates, and job scheduling help me stay on top of everything. Contractor+ made my business more profitable and easier to manage.`,
            userRole: "Focus Handyman",
          },
          {
            id: 5,
            userName: "Richard Tooley",
            profileImg: null,
            rating: 5,
            videoLink: null,
            isModal: false,
            companyLogo: null,
            review: `I switched from Jobber to Contractor+ because it fits the way I run my business. Clear communication, easy estimates, and job scheduling help me stay on top of everything. Contractor+ made my business more profitable and easier to manage.`,
            userRole: "Focus Handyman",
          },
          {
            id: 6,
            userName: "Scott Azure",
            profileImg: "/images/webp/rands.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
            userRole: "CEO at Rands Mechanical",
          },
        ],
      },
    },
  ],
};

export const contractorIndustry = {
  title: "Designed to handle the complexity of every crew, job, and trade",
  subTitle: "Contractor+ serves 30+ industries",
  url: "",
  btnText: "",
};
import needed_Approve from "../../../public/lotties/needed-approve.json";
import your_Estimate from "../../../public/lotties/your-estimate.json";
import describe_Estimate from "../../../public/lotties/Describe-estimate.json";
import send_Your_Estimate from "../../../public/lotties/Send-your-estimate.json";
export const estimaticCardData = {
  id: 1,
  title: "How to create a winning AI estimate ",
  cardsDetail: [
    {
      title: "Step 1",
      content: [
        {
          title: "Describe the estimate to Estimatic",
          desc: "It’s simple. Just tell Estimatic what you need an estimate for and give it as much context as you want. You can upload photos, blueprints, drawings, or even a competing quote.",
        },
      ],
      cardQuote: {
        user: "Excellent field tracking!",
        username: "John Doe",
      },
      cardImg: "/images/webp/describe-estimate.webp",
      lottieJson: describe_Estimate,
    },
    {
      title: "Step 2",
      content: [
        {
          title: "Estimatic builds your estimate",
          desc: "Using your cost book, real-time pricing from suppliers, and live local labor rates, Estimatic builds a detailed, accurate estimate, 100x faster than any human.",
        },
      ],
      cardImg: "/images/webp/estimatic-builds.webp",
      lottieJson: your_Estimate,
    },
    {
      title: "Step 3",
      content: [
        {
          title: "You tweak (if needed) + approve",
          desc: "Estimatic shows its work so you feel confident in yours. Tweak any details like margins or materials, and add markup before approving",
        },
      ],
      cardImg: "/images/webp/you-tweak.webp",
      lottieJson: needed_Approve,
    },
    {
      title: "STEP 4",
      content: [
        {
          title: "Send your estimate",
          desc: "Whether you’re at the office or at your customer’s kitchen table, send your estimate faster than anyone else, and let them eSign without extra software. ",
        },
      ],
      cardImg: "/images/webp/send-your-estimate.webp",
      lottieJson: send_Your_Estimate,
    },
  ],
};

export const dealReviews = {
  data: [
    {
      reviews: {
        title: "Trusted by over 50,000 build and service contractors",
        subTitle: null,
        reviews: [
          {
            id: 1,
            userName: "Brandon Geiger",
            profileImg: "/images/webp/rushville.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `Since I started sending all my estimates using Contractor+, I have
   stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
            userRole: "Co-Owner, Rushville Restorations",
          },
          {
            id: 2,
            userName: "Juan Garcia",
            profileImg: "/images/webp/juan-gracia.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
            userRole: "Owner, Nailed It Miami",
          },
          {
            id: 3,
            userName: "Scott Azure",
            profileImg: "/images/webp/rands.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
            userRole: "CEO at Rands Mechanical",
          },
          {
            id: 4,
            userName: "Brandon Geiger",
            profileImg: "/images/webp/rushville.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=ODjGhYILJKE",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `Since I started sending all my estimates using Contractor+, I have
   stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!`,
            userRole: "Co-Owner, Rushville Restorations",
          },
          {
            id: 5,
            userName: "Juan Garcia",
            profileImg: "/images/webp/juan-gracia.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=KpYSsQhP_J0",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined.`,
            userRole: "Owner, Nailed It Miami",
          },
          {
            id: 6,
            userName: "Scott Azure",
            profileImg: "/images/webp/rands.webp",
            rating: 5,
            videoLink: "https://www.youtube.com/watch?v=CllT0U-CtGc",
            isModal: true,
            companyLogo: "/images/svg/randsIcon.svg",
            review: `"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."`,
            userRole: "CEO at Rands Mechanical",
          },
        ],
      },
    },
  ],
};

export const realTimeServiceSliderData = {
  title:
    "The only pipeline built to follow the flow of actual contracting work",
  slug: "field-service",
  solutionCards: [
    {
      id: 57,
      title: "Visual Pipeline",
      description:
        "Track every deal in a drag-and-drop Kanban board that shows exactly where things stand—and what they’re worth.",
      image: null,
    },
    {
      id: 58,
      title: "Dollar Value Visibility",
      description:
        "See how much revenue is sitting in each stage of your pipeline. Forecast with real numbers instead of rough guesses.",
      image: null,
    },
    {
      id: 59,
      title: "One-Click Conversion",
      description:
        "Turn any opportunity into an estimate or job instantly without retyping or  duplicate entry.",
      image: null,
    },
    {
      id: 60,
      title: "Lost Deal Tracking",
      description:
        "Log why a deal was lost so you can spot patterns, refine your sales process, and improve your close rate.",
      image: null,
    },
    {
      id: 61,
      title: "Conversion Metrics",
      description:
        "See how many deals your team is winning and who’s winning them. Spot top performers and coach the rest.",
      image: null,
    },
    {
      id: 62,
      title: "Job-Linked Deals",
      description:
        "Every deal is tied to a property or project and not just a contact. Sales always stay connected to the job site.",
      image: null,
    },
    {
      id: 63,
      title: "Full Integrated",
      description:
        "Deal Flow Tracker is deeply integrated with Contractor+ estimates, CRM, and job workflows.",
      image: null,
    },
    {
      id: 64,
      title: "Lead Assignment",
      description:
        "Assign leads to specific team members for accountability and visibility across the sales team.",
      image: null,
    },
    {
      id: 65,
      title: "Mobile App",
      description:
        "Move deals across stages right from your phone. Field teams and office staff stay in sync, wherever they are.",
      image: null,
    },
  ],
};

export const billingVsthWayYouCouldData = {
  title: "How you’ve been billing vs. the way you could be",
  headerLeft: "The old way",
  headerRight: "The Contractor+ way",
  features: [
    {
      competitorsNote: "Creating invoices from scratch after every job	",
      ourProductNote:
        "Convert estimates, jobs, or work orders into invoices in one click",
    },
    {
      competitorsNote: "Re-entering hours, materials, and mileage manually",
      ourProductNote: "Everything auto-populates from time logs and job data",
    },
    {
      competitorsNote:
        "Forgetting to bill for small add-ons like extra material or mileage	",
      ourProductNote:
        "Contractor+ captures all uninvoiced items so you can add them to the invoice",
    },
    {
      competitorsNote: "Chasing approvals for changes after the job is done",
      ourProductNote:
        "Clients e-sign change orders before they hit the invoice",
    },
    {
      competitorsNote: "Using one system to track time and another to bill",
      ourProductNote:
        "Time, tasks, and charges all feed into one invoice automatically",
    },
    {
      competitorsNote: "Rebuilding new invoices when the scope changes",
      ourProductNote:
        "Recurring jobs, card-on-file payments, and invoicing in one platform",
    },
    {
      competitorsNote:
        "Separate apps for recurring billing, payments, and invoicing",
      ourProductNote: "Invoices update automatically with every change order",
    },
    {
      competitorsNote: "Clients asking for invoices or payment links	",
      ourProductNote:
        "Clients access and pay invoices through a self-serve portal",
    },
  ],
};

export const neverLookBackData = {
  title: "Teams that switch to Contractor+ never look back",
  subTitle: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle: "Boost in revenue with visual pipeline tracking",
      start: 0,
      end: 28,
      suffix: "%",
      prefix: null,
      value: null,
      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: null,
      subTitle: "Contractors see higher sales productivity",
      start: 0,
      end: 9,
      suffix: null,
      denominator: 10,
      prefix: null,
      value: null,
      lottieJson: sale_productivity,
      cardImage: {
        url: null,
      },
    },
    {
      id: 3,
      title: null,
      subTitle: "Of leads weren’t fully tracked before using Contractor+",
      start: 0,
      end: 80,
      suffix: "%",
      prefix: null,
      value: null,
      lottieJson: lead_icon_black,
      cardImage: {
        url: null,
      },
    },
  ],
};
import productivity from "../../../public/lotties/productivity.json";
export const neverLookBackData2 = {
  title: "Teams that switch to Contractor+ never look back",
  subTitle: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle:
        "Saved in admin work weekly from easily accessible property data",
      start: 0,
      end: 5,
      suffix: "hours",
      prefix: null,
      value: null,
      lottieJson: clock,
      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: "Boost",
      subTitle: "In proposal win rate with property managers",
      start: 0,
      end: 20,
      suffix: "%",
      denominator: null,
      prefix: null,
      value: null,
      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
      icons: <ClockIcon />,
    },
    {
      id: 3,
      title: "Faster",
      subTitle:
        "Resolution of client disputes with every detail instantly accessible.",
      start: 0,
      end: 90,
      suffix: "%",
      denominator: null,
      value: null,
      lottieJson: productivity,
      cardImage: {
        url: null,
      },
      icons: <UpArrowIcon />,
    },
  ],
};
export const billingNeverLookBackData = {
  title: "Teams that switch to Contractor+ never look back",
  sub_title: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle: (
        <>
          Revenue increase from capturing <br /> unbilled items
        </>
      ),
      start: 5,
      end: 10,
      suffix: "%",
      prefix: "5-",
      value: 5,
      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: null,
      subTitle: (
        <>
          Savings in billing admin <br /> time{" "}
        </>
      ),
      start: 0,
      end: 50,
      suffix: "%",
      prefix: null,
      value: null,
      lottieJson: null,
      cardImage: {
        url: "/images/svg/saving-bill.svg",
      },
    },
    {
      id: 3,
      title: null,
      subTitle: "Average fewer disputes from real-time documentation",
      start: 0,
      end: 40,
      suffix: "%",
      prefix: null,
      value: null,
      lottieJson: lead_icon_black,
      cardImage: {
        url: null,
      },
    },
  ],
};
export const dealReviews2 = {
  title: "There’s a reason we have a 4.7 ★ average across thousands of reviews",
  subTitle: null,
  reviews: [
    {
      id: 1,
      userName: "Juan Garcia",
      userRole: "Owner, Nailed It Miami",
      isModal: true,
      review:
        '"I started with just a few dollars left and took a chance on Contractor+. That one decision turned everything around. I went from barely getting work to having more leads than I could handle. Contractor+ helped me grow faster than I imagined."',
      rating: 5,
      profileImg: "/images/webp/juan-gracia.webp",
      videoLink:
        "https://www.youtube.com/embed/KpYSsQhP_J0?si=AzXAksGGa9cRi6L2",
    },
    {
      id: 2,
      userName: "Brandon Geiger",
      userRole: "Co-Owner, Rushville Restorations",
      isModal: true,
      review:
        '"Since I started sending all my estimates using Contractor+, I have stopped losing bids. The professional image I gain by using this app is helping me win more business. Contractor+ is a game changer!"',
      rating: 5,
      profileImg: "/images/webp/rushville.webp",
      videoLink:
        "https://www.youtube.com/embed/ODjGhYILJKE?si=lcdtM7DNcQ6_JGd8",
    },
    {
      id: 3,
      isModal: true,
      userName: "Scott Azure",
      userRole: "CEO at Rands Mechanical",
      review:
        '"I have all my techs using Contractor+ now. We were using three different apps before finding Contractor Plus. Now everything we need is right here in one place, at a fraction of the price. The best I’ve seen."',
      rating: 5,
      profileImg: "/images/webp/rands.webp",
      videoLink:
        "https://www.youtube.com/embed/CllT0U-CtGc?si=dAxaKG8w04fLCQHr",
    },
  ],
};
export const estimaticBlogHeadingData = {
  id: 1,
  title: "AI related topics in Contractor+ HQ",
  btnText: "Contractor+ HQ",
  btnUrl: "/",
};
export const estimaticControlData = {
  id: 320,
  title: "You’re still in control. Estimatic just gets you there faster.",
  sub_title: "No gimmicks, just a damn good estimate.",
  cardsDetail: [
    {
      id: 1671,
      text: (
        <>
          AI isn’t replacing <br /> your judgment
        </>
      ),
      cardImg: {
        url: "/images/svg/green-tick.svg",
      },
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1672,
      text: (
        <>
          You can tweak, edit, or <br /> override any line
        </>
      ),
      cardImg: {
        url: "/images/svg/green-tick.svg",
      },
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1673,
      text: (
        <>
          "Estimatic shows its work <br /> (no black box)"
        </>
      ),
      cardImg: {
        url: "/images/svg/green-tick.svg",
      },
      imgWidth: 66,
      imgHeight: 34,
    },
  ],
};

export const property_profiles_ControlData = {
  id: 320,
  title: "Without full job visibility, you’re always one step behind",
  sub_title: null,
  cardsDetail: [
    {
      id: 1671,
      text: (
        <>
          You can’t remember the details of a job from six months ago, and
          there’s no easy way to look it up.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1672,
      text: (
        <>
          Communications are split between tenant texts, the owner's emails, and
          your office's notes.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1673,
      text: (
        <>
          CRMs don’t have a property view, leaving you to connect the dots for
          each property they own.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
  ],
};
export const formData = {
  id: 282,
  placeholder: "Your Email",
  subTitle: "Get started with Estimatic AI in Contractor+ today.",
  title: "The AI estimate generator that will change your business forever",
};
export const billingformData = {
  id: 282,
  placeholder: "Your Email",
  subTitle:
    "Start using Contractor+ free. Upgrade for the full operating system.",
  title:
    "This is what field service invoicing software should have been all along",
};
export const estimateFormData = {
  id: 282,
  placeholder: "Your Email",
  title: "The AI estimate generator that will change your business forever",
  subTitle: "Get started with Estimatic AI in Contractor+ today.",
};

export const dealflowformData = {
  id: 282,
  placeholder: "Your Email",
  subTitle:
    "Start using Contractor+ free. You’ll wonder how you ever lived without it.",
  title: "This is what opportunity tracker software should have been all along",
};
export const dealflowFaq = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question:
        "Can I customize the pipeline stages to match my sales process?",
      answer:
        "Yes. You can create and label your own stages like “Estimate Sent,” “Pending Approval,” or “Needs Follow-up”—so the pipeline mirrors how you actually sell.",
    },
    {
      id: 2,
      question: "Does this replace my spreadsheet or Trello board?YY",
      answer:
        "Yes. Deal Flow Tracker replaces disconnected tools with one unified system. It tracks your leads visually, ties them to jobs, and updates your revenue forecast in real time.",
    },
    {
      id: 3,
      question: "Can I see the dollar value of deals in each stage? ",
      answer:
        "Absolutely. You’ll see how much money is sitting in “pending,” “approved,” or any custom stage. You’ll always know where your revenue stands. ",
    },
    {
      id: 4,
      question: "Can my team update the pipeline from their phones?",
      answer:
        "Yes. The mobile app lets field or office staff drag deals across stages and add notes or updates on the go. ",
    },
    {
      id: 5,
      question: "How does this help me close more deals?",
      answer:
        "By showing you exactly which leads are stuck, who’s responsible, and what’s at risk. You can follow up faster and prioritize the deals most likely to close.",
    },
    {
      id: 6,
      question: "Is this included with the Contractor+ platform?",
      answer:
        "Yes. Deal Flow Tracker is a core part of the platform and works seamlessly with CRM, estimates, jobs, and scheduling.",
    },
  ],
};

export const dealFlowBlogHeadingData = {
  id: 1,
  title: "Deal Flow Tracking  topics in Contractor+ HQ",
  btnText: "Contractor+ HQ",
  btnUrl: "/",
};

export const runWithContractorData = {
  title:
    "Other platforms keep you stuck tracking deals their way.  Do it your way with Contractor+.",
  subTitle: null,
  comaprisons: [
    {
      title: "Their way",
      comparisonList: [
        {
          details: "CRMs built for sales reps, not contractors",
        },
        {
          details: "No clear view of what’s stuck or worth chasing",
        },
        {
          details: "Switching tabs to send estimates or schedule jobs",
        },
        {
          details: "No way to track why deals are lost",
        },
        { details: "“Won” means the deal disappears into another system" },
        {
          details: "Re-entering data across CRM, estimates, and jobs",
        },
      ],
    },
    {
      title: "Your way",
      comparisonList: [
        {
          details: "Pipeline built around jobs, properties, and real revenue",
        },
        {
          details: "See dollar value at every stage and where deals stall",
        },
        {
          details: "One click from lead to estimate or job site visit",
        },
        {
          details:
            "No way to track why deals are lost	Log lost reasons to spot patterns and improve close rates",
        },
        {
          details: "Deals stay connected to the job through to completion",
        },
        {
          details:
            "Enter the information once, and it syncs to everything instantly",
        },
      ],
    },
  ],
};
export const allEventSections = [
  {
    sectionId: "conference-events",
    sectionHeading: "Must-Attend Conference & Expo’s",
    events: [
      {
        id: 1,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "Bill Walsh leadership lessons",
        description:
          "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
        linkPath: "Event Details",
      },
      {
        id: 2,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "PM mental models",
        description:
          "Mental models are simple expressions of complex processes or relationships.",
        linkPath: "Event Details",
      },
      {
        id: 3,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "What is Wireframing?",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        linkPath: "Event Details",
      },
      {
        id: 4,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "What is Wireframing?",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        linkPath: "Event Details",
      },
    ],
  },
  {
    sectionId: "upcoming-events",
    sectionHeading: "All Upcoming Events",
    events: [
      {
        id: 5,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "PM mental models",
        description:
          "Mental models are simple expressions of complex processes or relationships.",
        linkPath: "Event Details",
      },
      {
        id: 6,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "What is Wireframing?",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        linkPath: "Event Details",
      },
      {
        id: 7,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "Bill Walsh leadership lessons",
        description:
          "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
        linkPath: "Event Details",
      },
      {
        id: 8,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "Bill Walsh leadership lessons",
        description:
          "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
        linkPath: "Event Details",
      },
    ],
  },
  {
    sectionId: "all-events",
    sectionHeading: "All Past Events",
    events: [
      {
        id: 9,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "PM mental models",
        description:
          "Mental models are simple expressions of complex processes or relationships.",
        linkPath: "Event Details",
      },
      {
        id: 10,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "What is Wireframing?",
        description:
          "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        linkPath: "Event Details",
      },
      {
        id: 11,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "Bill Walsh leadership lessons",
        description:
          "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
        linkPath: "Event Details",
      },
      {
        id: 12,
        imgPath: "/images/webp/snow.webp",
        role: "September 15 – 18, 2025 • Nashville, TN",
        heading: "Bill Walsh leadership lessons",
        description:
          "Like to know the secrets of transforming a 2–14 team into a 3× Super Bowl winning Dynasty?",
        linkPath: "Event Details",
      },
    ],
  },
];

export const eventFAQs = [
  {
    id: 1,
    question: "When and where is AU 2024 taking place? ",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 2,
    question: "How can my company become a sponsor at AU 2025?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 3,
    question: "What learning and networking will be part of AU 2025?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 4,
    question: "Will there be a digital experience?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 5,
    question: "Can I meet with Autodesk product and industry experts at AU?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 6,
    question: "What are the AU Community Rules?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
  {
    id: 7,
    question:
      "I’m a journalist. What can I expect from a press/media perspective?",
    answer: "AU 2025 will be held in Nashville, Tennessee from September 15–18",
  },
];

export const speakerEventsItems = [
  {
    name: "Mark Jerry",
    role: "CEO Of Global Innovations",
    image: "/images/webp/speaker-card-1.webp",
  },
  {
    name: "Nelson Mendala",
    role: "CEO Of Mendala Mechanical LLC",
    image: "/images/webp/speaker-card-2.webp",
  },
  {
    name: "Mark Jerry",
    role: "CEO Of Retail Construction LLC",
    image: "/images/webp/speaker-card-3.webp",
  },
  {
    name: "Mark Jerry",
    role: "CEO Of Global Innovations",
    image: "/images/webp/speaker-card-1.webp",
  },
  {
    name: "Nelson Mendala",
    role: "CEO Of Mendala Mechanical LLC",
    image: "/images/webp/speaker-card-2.webp",
  },
  {
    name: "Mark Jerry",
    role: "CEO Of Retail Construction LLC",
    image: "/images/webp/speaker-card-3.webp",
  },
];

export const sponsorLogo = [
  { images: "/images/webp/sponser-logo.webp" },
  { images: "/images/webp/sponser-logo-2.webp" },
  { images: "/images/webp/sponser-logo-3.webp" },
  { images: "/images/webp/sponser-logo-4.webp" },
  { images: "/images/webp/sponser-logo-5.webp" },
  { images: "/images/webp/sponser-logo-6.webp" },
  { images: "/images/webp/sponser-logo-7.webp" },
  { images: "/images/webp/sponser-logo-7.webp" },
  { images: "/images/webp/sponser-logo-3.webp" },
  { images: "/images/webp/sponser-logo-2.webp" },
  { images: "/images/webp/sponser-logo-3.webp" },
];

export const eventPricingDetail = [
  {
    seatname: "Front Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-2.webp",
    pricing: "$99.00",
  },
  {
    seatname: "Front Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-1.webp",
    pricing: "$99.00",
  },
  {
    seatname: "Mid Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-3.webp",
    pricing: "$69.00",
  },
  {
    seatname: "Front Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-2.webp",
    pricing: "$99.00",
  },
  {
    seatname: "Front Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-1.webp",
    pricing: "$99.00",
  },
  {
    seatname: "Mid Row Seat",
    Description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    image: "/images/webp/pricing-card-3.webp",
    pricing: "$69.00",
  },
];

export const propertyCardData = {
  id: 1,
  title:
    "A job management solution for multi-phase projects, work orders, and recurring jobs",
  cardsDetail: [
    {
      title: " Property Record",
      content: [
        {
          title: "Property Email",
          desc: "Assign a unique email to each property to automatically log every conversation in its timeline.",
        },
        {
          title: "Property Timeline",
          desc: "See a property's entire history in one feed, from the first job to the latest email.",
        },
        {
          title: "Files & Photos",
          desc: "Store all permits, blueprints, and job photos directly on the property profile for instant team access.",
        },
        {
          title: "Property Contacts",
          desc: "Link owners, tenants, and managers to a single property so you always contact the right person.",
        },
      ],
      cardQuote: {
        user: "Excellent field tracking!",
        username: "John Doe",
      },
      cardImg: "/images/webp/property-record.webp",
      lottieJson: null,
    },
    {
      title: " Smart Workflows & Tracking",
      content: [
        {
          title: "Asset Tracking",
          desc: "Track service history and warranty info for specific equipment at a property, like HVAC units or water heaters.",
        },
        {
          title: "Recurring Maintenance",
          desc: "Set up and manage scheduled maintenance plans or service agreements tied directly to a property.",
        },
        {
          title: "Mobile Optimized",
          desc: "View and update any property's complete history, files, and timeline directly from the field via the app.",
        },
      ],
      cardImg: "/images/webp/smart-workflow-tracking.webp",
      lottieJson: null,
    },
  ],
};

export const propertyaddressContractorData = {
  title: "There’s finally one source of truth for every property address",
  subTitle: null,
  comaprisons: [
    {
      title: "The old way",
      comparisonList: [
        {
          details: "Software that only gives client & job-level views",
        },
        {
          details: "Hunting for info in emails, spreadsheets, and camera rolls",
        },
        {
          details: "Manually saving emails or hoping you can find them again",
        },
        {
          details:
            "Property info is just an address field under a client's name.",
        },
        {
          details:
            "Job photos and permits are lost in different text threads and folders",
        },
        {
          details:
            "Confusion over who to contact: the tenant, the owner, or the manager?",
        },
        {
          details: "Complex workarounds for getting property information",
        },
      ],
    },
    {
      title: "Your way",
      comparisonList: [
        {
          details: "Option for property-level workflows in one tap",
        },
        {
          details:
            "Finding any document, photo, or note in one central property hub",
        },
        {
          details:
            "Automatically logging conversations with a unique email for each property",
        },
        {
          details:
            "Every property gets its own rich profile with a dedicated timeline and file storage",
        },
        {
          details:
            "All files and photos are stored directly on the property’s profile for easy access",
        },
        {
          details:
            "Linking all relevant contacts to a property so you always call the right person",
        },
        {
          details:
            "Every property has its own view and self-updates with new info",
        },
      ],
    },
  ],
};

export const propertyFeatureData = {
  id: 1,
  title: null,
  subTitle: null,
  btnText: "Get started FREE",
  btnUrl: null,
  mobileBtn: "Download FREE App",
};

export const propertyFaq = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question:
        "How is this different from just adding a service address to a client?",
      answer:
        "A service address is just a line of text. A Contractor+ Property Profile is a complete, independent hub for that address. It has its own dedicated timeline, file storage, contact list (for tenants, owners, etc.), and unique email address. This property-centric model keeps all information about the location perfectly organized, instead of scattering it across various client records.",
    },
    {
      id: 2,
      question:
        "How does the unique property email address work? Is it complicated?",
      answer:
        "It's incredibly simple. When you create a property, we automatically generate a unique, private email address for it. There is no setup required from you. Just CC that address on your emails or forward important conversations to it, and they will be logged in that property's timeline automatically.",
    },
    {
      id: 3,
      question: "Who benefits most from Property Profiles? ",
      answer:
        "While any service business can use it, it's a game-changer for contractors with recurring clients at the same locations (like HVAC, plumbing, or electrical) and anyone who works with property managers, real estate investors, or landlords. If you service multiple properties, this is the ultimate organizational tool. ",
    },
    {
      id: 4,
      question:
        "Can I add my existing documents and photos to a property's timeline?",
      answer:
        "Yes. The mobile app lets field or office staff drag deals across stages and add notes or updates on the go. ",
    },
    {
      id: 5,
      question:
        "Is my data secure, especially with tenant and owner information?",
      answer:
        "Absolutely. All data is stored with bank-level security. Property Profiles in our property manager CRM help you improve security and privacy by separating information. Details about one property, including its specific contacts and files, are kept distinct and separate from other properties, even if they share the same owner.",
    },
    {
      id: 6,
      question: "Can my technicians access this information from the field?",
      answer:
        "Yes. The entire Property Profile (including the timeline, documents, photos, and contacts) is fully accessible on the Contractor+ mobile app. Your crew can pull up a property's history before they arrive and upload their own notes and photos directly from the job site, keeping the record perfectly up-to-date.",
    },
  ],
};

export const propertyprofilesformData = {
  placeholder: "Your Email",
  subTitle: "This is what a property management CRM should have been all along",
  title: "Start using Contractor+ free. Upgrade for the full operating system.",
};
export const propertyprofilesformData2 = {
  placeholder: "Your Email",
  subTitle: "This is what a property management CRM should have been all along",
  title: "This is what a property management CRM should have been all along",
};
export const propertyprofilesHeadingData = {
  id: 1,
  title: "Property management topics in Contractor+ HQ",
  btnText: "Contractor+ HQ",
  btnUrl: "/",
};

export const property_profiles_comparisonData = {
  id: 1,
  title: "One of these is not like the other (thank goodness)",
  subTitle: "Contractor+ makes the choice clear",
  headerLeft: "Feature",
  headerCenter: "Contractor Plus",
  headerRight: "Others",
  showBackground: null,
  features: [
    {
      featureName: "Dedicated Property/Location Record",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Consolidated Property Timeline",
      ourProduct: "available",
      competitorsNote: null,
    },

    {
      featureName: "Unique Email for Auto-Logging",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Property-Specific Photo/Doc Storage",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Property-Specific Contact List",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "CRM Profile View for Properties",
      ourProduct: "available",
      competitorsNote: null,
    },
  ],
};
export const property_profiles_comparisonData2 = {
  id: 1,
  title: "One of these is not like the other (thank goodness)",
  subTitle: "Contractor+ makes the choice clear",
  headerLeft: "Feature",
  headerCenter: "Contractor Plus",
  headerRight: "Others",
  showBackground: null,
  features: [
    {
      featureName: "Dedicated Property/Location Record",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Consolidated Property Timeline",
      ourProduct: "available",
      competitorsNote: null,
    },

    {
      featureName: "Unique Email for Auto-Logging",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Property-Specific Photo/Doc Storage",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Property-Specific Contact List",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "CRM Profile View for Properties",
      ourProduct: "available",
      competitorsNote: null,
    },
  ],
};

export const propertyCRMSection = {
  id: 324,
  title: "The contract’s real job starts after it’s signed",
  subTitle:
    "When a client ghosts you, threatens a chargeback, or claims “you never said that”—your agreement is the only thing protecting your business.",
  btnText: "Get started FREE",
  btnUrl: null, // can be replaced with a link like "/signup" if needed
  mobileBtn: "Download FREE App",
  featureHighlightSectionVisible: true,
  featuresList: [
    {
      id: 408,
      title:
        "With Contractor+, every agreement is airtight, time stamped, and stored for exactly this moment.",
      content: [
        {
          title: "Signed scope changes with cost breakdowns",
          text: "Signed scope changes with cost breakdowns",
        },
        {
          title: "Timestamped approvals and communication logs",
          text: "Timestamped approvals and communication logs",
        },
        {
          title: "Stored and searchable records tied to each job",
          text: "Stored and searchable records tied to each job",
        },
      ],
      cardImg: {
        src: "/images/property-tracking.png",
        alt: "Track properties",
      },
    },
  ],
};

export const automate_ControlData = {
  id: 320,
  title: "Managing client agreements is more complicated than it should be",
  sub_title: null,
  cardsDetail: [
    {
      id: 1671,
      text: (
        <>
          You’re using one system for estimates, another for contracts, and a
          third for signatures.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1672,
      text: (
        <>
          Your tools don’t talk to each other, which means more admin and more
          risk.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1673,
      text: (
        <>
          If things go south, you can’t even find the signed agreement or change
          order (if it exists at all).
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
  ],
};
import Agree_Creation from "../../../public/lotties/agreement-creation.json";
import Signature_Approval from "../../../public/lotties/signature-approval.json";
import Change_Management from "../../../public/lotties/change-management.json";
import Storage_Access from "../../../public/lotties/storage-access.json";
import Recurring_Docs from "../../../public/lotties/recurring-docs.json";
export const automatedCardData = {
  id: 1,
  title:
    "A contract system that automatically writes, tracks, and stores agreements",
  cardsDetail: [
    {
      id: 1,
      title: " Agreement Creation",
      content: [
        {
          title: "Estimate-to-Contract Merge",
          desc: "Automatically generate contracts using data from approved estimates, without any copy & paste.",
        },
        {
          title: "Lawyer-Crafted Templates",
          desc: "Pre-built, legally sound templates tailored for construction and service jobs.",
        },
        {
          title: "Custom Clause Library",
          desc: "Add your own clauses once, then reuse them across all agreements.",
        },
        {
          title: "Smart Field Detection",
          desc: "Auto-fills job info like scope, pricing, dates, and location from your project data.",
        },
      ],
      cardQuote: {
        user: "Excellent field tracking!",
        username: "John Doe",
      },
      cardImg: "/images/webp/agree-creation.webp",
      lottieJson: Agree_Creation,
    },
    {
      id: 2,
      title: "  Signature & Approval ",
      content: [
        {
          title: "Built-In E-Signatures",
          desc: "Collect signatures in-person or digitally.  No third-party software needed.",
        },
        {
          title: "Audit Trail",
          desc: "Each signed doc includes timestamp, IP address, and device info for protection.",
        },
        {
          title: "Client Review Portal",
          desc: "Clients can review, comment, and sign contracts from any device.",
        },
        {
          title: "Approval Reminder",
          desc: "Automated follow-ups ensure no agreement gets stuck waiting.",
        },
      ],
      cardImg: "/images/webp/signature-approved.webp",
      lottieJson: Signature_Approval,
    },
    {
      id: 3,
      title: "Change Management",
      content: [
        {
          title: " Instant Change Orders",
          desc: "Modify job scope on the fly and generate a new agreement in seconds.",
        },
        {
          title: "Editable Scope Change Templates",
          desc: "Pre-configured language makes it easy to spell out what’s changing and what it costs.",
        },
        {
          title: "Amendment Tracking",
          desc: "Every version of every contract is tracked and time-stamped.",
        },
        {
          title: "Digital Re-Approval",
          desc: "Clients can re-sign updated contracts without downloading anything.",
        },
      ],
      cardImg: "/images/webp/change-management.webp",
      lottieJson: Change_Management,
    },
    {
      id: 4,
      title: "Storage & Access",
      content: [
        {
          title: "Automatic Document Storage",
          desc: "Signed agreements are tied to the job record and stored in the cloud.",
        },
        {
          title: "Searchable Archive",
          desc: "Find any past contract, change order, or completion cert by job, client, or keyword.",
        },
        {
          title: "Access Control",
          desc: "Control who on your team can view, edit, or send legal docs.",
        },
        {
          title: "Downloadable Backups",
          desc: "Export signed documents anytime for offline recordkeeping.",
        },
      ],
      cardImg: "/images/webp/storage-access.webp",
      lottieJson: Storage_Access,
    },
    {
      id: 5,
      title: "Recurring Docs",
      content: [
        {
          title: "Recurring Service Agreements",
          desc: "Set terms once for weekly/monthly/seasonal jobs and automate renewals.",
        },
        {
          title: "Auto-Renewal Alerts",
          desc: "Get notified when contracts are expiring so nothing slips through.",
        },
        {
          title: "Completion Certificates",
          desc: "Auto-generate signed certificates when work wraps up.",
        },
        {
          title: "Client-Triggered Renewals",
          desc: "Invoice in phases or partials based on completed work.",
        },
        {
          title: "Cash Flow & Profitability Visibility",
          desc: "Let clients renew service terms directly via the portal. No manual follow-up needed.",
        },
      ],
      cardImg: "/images/webp/requeere-doc.webp",
      lottieJson: Recurring_Docs,
    },
  ],
};

export const automate_comparisonData = {
  id: 1,
  title: "What they call a “premium” feature, we call standard",
  subTitle: "The features they hide behind paywalls come standard here.",
  headerLeft: "Feature",
  headerCenter: "Contractor Plus",
  headerRight: "Others",
  showBackground: null,
  features: [
    {
      featureName: "Built-in eSignature With Date/Time/IP tracking",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Integrated Change Order Generation",
      ourProduct: "available",
      competitorsNote: "Limited",
    },

    {
      featureName: "Lawyer-Reviewed Template Library",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Customizable Contract Templates",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Centralized & Automated Document Storage",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "No Forced Plan Upgrade or 3rd Party Tool",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Estimate-to-Contract Creation",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
  ],
};
import clock from "../../../public/lotties/Clock-2.json";
export const automateneverlookBackData = {
  title: "Teams that switch to Contractor+ never look back",
  subTitle: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle: "Average savings by canceling tools like Docusign",
      start: 0,
      end: 300,
      suffix: "/mo",
      prefix: "$",
      value: null,
      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: null,
      subTitle: "Average subscriptions canceled",
      start: 0,
      end: 2,
      suffix: null,
      denominator: 10, // This enables "9 in 10" display
      prefix: null,
      value: null,
      lottieJson: lead_icon_black,
      cardImage: {
        url: null,
      },
    },
    {
      id: 3,
      title: null,
      subTitle: "Admin time savings",
      start: 0,
      end: 13,
      suffix: "%",
      prefix: null,
      value: null,
      lottieJson: clock,
      cardImage: {
        url: null,
      },
    },
  ],
};

export const automatedformData = {
  placeholder: "Your Email",
  subTitle:
    "What contractor client agreement software should have been all along",
  title: "Get started with Contractor+ today.",
};

export const automatedFaq = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question: "Do I still need to use DocuSign or another eSignature tool?",
      answer:
        "Nope. Contractor+ includes secure, legally binding eSignatures built right in. You can collect signatures digitally or in person without needing any third-party software or extra subscriptions.",
    },
    {
      id: 2,
      question: "Can I customize the contracts with my own terms and clauses?",
      answer:
        "Use our lawyer-crafted templates as a starting point, then add your own custom clauses or modify language however you want. You can even save your favorite clauses for reuse.",
    },
    {
      id: 3,
      question: "What happens when the scope of a job changes? ",
      answer:
        "It’s all handled. We know that scope creep and change orders are a major headache. Contractor+ has a dedicated, integrated workflow for creating and signing change orders. You can quickly generate a formal amendment, get the client's signature on-site or online, and it's automatically documented and time stamped on the invoice.  ",
    },
    {
      id: 4,
      question: "What kinds of agreements can I automate? ",
      answer:
        "Contractor+ supports service contracts, change orders, recurring agreements, completion certificates, and more. Each one auto-fills with your job, estimate, or invoice data.",
    },
    {
      id: 5,
      question:
        "Where are the signed contracts stored? Can I access them later?",
      answer:
        "Every signed document is automatically stored in your Contractor+ account and tied to the job record. You can search, download, or reference them anytime—with full audit trails and backups.",
    },
    {
      id: 6,
      question: "Will this work on mobile for field teams?",
      answer:
        "Yes. Your crews can create and sign agreements right from the Contractor+ mobile app. It’s super simple and intuitive.",
    },
  ],
};
export const industriesData = [{ id: 1 }];
