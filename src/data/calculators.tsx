import {
  ArrowUp,
  Brush,
  Building,
  Calculator,
  Clipboard,
  ClipboardList,
  CloudCog,
  DollarSign,
  Droplet,
  Fence,
  Flower,
  Grid3X3,
  Hammer,
  Paintbrush,
  Ruler,
  Shovel,
  Snowflake,
  Square,
  Zap,
} from "lucide-react";

export interface Calculator {
  id: string;
  name: string;
  description: string;
  isAvailable: boolean;
  path: string;
  category: string;
  icon?: React.ReactNode;
}

export interface CalculatorCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  calculators: Calculator[];
}

export const calculators: CalculatorCategory[] = [
  {
    id: "pricing",
    name: "Pricing Calculators",
    description: "Tools to help you price your services",
    icon: <DollarSign />,
    calculators: [
      {
        id: "margin-calculator",
        name: "Margin Calculator",
        description: "Calculate the selling price for desired profit margin",
        isAvailable: true,
        path: "/resources/cost-calculator/margin-calculator",
        category: "pricing",
        icon: <Calculator />,
      },
      {
        id: "hvac-markup-calculator",
        name: "HVAC Markup Calculator",
        description: "Calculate HVAC part price with markup and sales tax",
        isAvailable: true,
        path: "/resources/cost-calculator/hvac-markup",
        category: "pricing",
        icon: <Calculator />,
      },
      {
        id: "profit-margin-calculator",
        name: "Profit Margin Calculator",
        description: "Calculate profit margin based on revenue and cost",
        isAvailable: true,
        path: "/resources/cost-calculator/profit-margin-calculator",
        category: "pricing",
        icon: <Calculator />,
      },
      {
        id: "plumbing-bid-calculator",
        name: "Plumbing Bid Calculator",
        description: "Calculate plumbing bid with labor, materials, and profit",
        isAvailable: true,
        path: "/resources/cost-calculator/plumbing-bid-calculator",
        category: "pricing",
        icon: <Calculator />,
      },
      {
        id: "electrician-cost-calculator",
        name: "Electrician Cost Calculator",
        description:
          "Calculate hourly rates for electricians with overhead and profit",
        isAvailable: true,
        path: "/resources/cost-calculator/electrician-cost-per-hour-calculator",
        category: "pricing",
        icon: <Zap />,
      },
      {
        id: "landscape-design-calculator",
        name: "Landscape Design Cost Calculator",
        description: "Calculate landscape design and installation costs",
        isAvailable: true,
        path: "/resources/cost-calculator/landscape-design-cost-calculator",
        category: "pricing",
        icon: <Flower />,
      },
      {
        id: "snow-removal-calculator",
        name: "Snow Removal Pricing Calculator",
        description: "Calculate snow removal charges based on snowfall depth",
        isAvailable: true,
        path: "/resources/cost-calculator/snow-removal-pricing-calculator",
        category: "pricing",
        icon: <Snowflake />,
      },
      {
        id: "custom-woodwork-calculator",
        name: "Custom Woodwork Pricing Calculator",
        description:
          "Calculate custom woodworking project costs with materials, labor, and profit",
        isAvailable: true,
        path: "/resources/cost-calculator/custom-woodwork-pricing-calculator",
        category: "pricing",
        icon: <Hammer />,
      },
      {
        id: "elevator-maintenance-calculator",
        name: "Elevator Maintenance Cost Calculator",
        description:
          "Calculate annual elevator maintenance costs based on service frequency",
        isAvailable: true,
        path: "/resources/cost-calculator/elevator-maintenance-cost-calculator",
        category: "pricing",
        icon: <ArrowUp />,
      },
      {
        id: "multi-service-job-estimator",
        name: "Multi-Service Job Estimator",
        description:
          "Create accurate estimates for multi-service projects with combined costs",
        isAvailable: true,
        path: "/resources/cost-calculator/multi-service-job-estimator",
        category: "pricing",
        icon: <Clipboard />,
      },
    ],
  },
  {
    id: "hvac",
    name: "HVAC Calculators",
    description: "Tools for HVAC professionals",
    icon: <CloudCog />,
    calculators: [
      {
        id: "hvac-cfm-calculator",
        name: "HVAC CFM Calculator",
        description: "Calculate CFM (Cubic Feet per Minute) for HVAC systems",
        isAvailable: true,
        path: "/resources/cost-calculator/hvac-cfm-calculator",
        category: "hvac",
        icon: <Calculator />,
      },
    ],
  },
  {
    id: "service",
    name: "Service Calculators",
    description: "Tools for service professionals",
    icon: <ClipboardList />,
    calculators: [
      {
        id: "house-cleaning-calculator",
        name: "House Cleaning Calculator",
        description:
          "Estimate house cleaning costs based on square footage and rooms",
        isAvailable: true,
        path: "/resources/cost-calculator/house-cleaning-cost-calculator",
        category: "service",
        icon: <Brush />,
      },
      {
        id: "carpet-cleaning-calculator",
        name: "Carpet Cleaning Calculator",
        description:
          "Calculate carpet cleaning costs based on area and services",
        isAvailable: true,
        path: "/resources/cost-calculator/carpet-cleaning",
        category: "service",
        icon: <Calculator />,
      },
      {
        id: "commercial-space-cleaning-calculator",
        name: "Commercial Space Cleaning Calculator",
        description:
          "Calculate cleaning costs for commercial facilities and offices",
        isAvailable: true,
        path: "/resources/cost-calculator/commercial-space-cleaning-cost-calculator",
        category: "service",
        icon: <Building />,
      },
    ],
  },
  {
    id: "construction",
    name: "Construction Calculators",
    description: "Tools for construction professionals",
    icon: <Building />,
    calculators: [
      {
        id: "drywall-calculator",
        name: "Drywall Materials Calculator",
        description:
          "Calculate drywall sheets needed for your project based on dimensions",
        isAvailable: true,
        path: "/resources/cost-calculator/drywall-materials-calculator",
        category: "construction",
        icon: <Square />,
      },
      {
        id: "fence-cost-calculator",
        name: "Fence Cost Calculator",
        description:
          "Calculate fence costs based on length, materials, and gates",
        isAvailable: true,
        path: "/resources/cost-calculator/fence-cost-calculator",
        category: "construction",
        icon: <Fence />,
      },
      {
        id: "flooring-estimator-calculator",
        name: "Flooring Estimator Calculator",
        description:
          "Calculate flooring costs based on area, materials, labor, and waste factor",
        isAvailable: true,
        path: "/resources/cost-calculator/flooring-estimator-calculator",
        category: "construction",
        icon: <Ruler />,
      },
      {
        id: "construction-cost-calculator",
        name: "Construction Cost Calculator",
        description:
          "Estimate construction project costs based on materials and labor",
        isAvailable: true,
        path: "/resources/cost-calculator/construction-cost-estimator",
        category: "construction",
        icon: <Calculator />,
      },
      {
        id: "renovation-calculator",
        name: "Renovation Calculator",
        description:
          "Calculate renovation costs based on materials, labor, and scope",
        isAvailable: true,
        path: "/resources/cost-calculator/renovation-cost-calculator",
        category: "construction",
        icon: <Calculator />,
      },
      {
        id: "painting-calculator",
        name: "Painting Calculator",
        description:
          "Estimate painting costs based on area, materials, and labor",
        isAvailable: true,
        path: "/resources/cost-calculator/painting-cost-estimator",
        category: "construction",
        icon: <Paintbrush />,
      },
      {
        id: "roof-square-footage-calculator",
        name: "Roof Square Footage Calculator",
        description:
          "Calculate roof square footage based on building dimensions and pitch",
        isAvailable: true,
        path: "/resources/cost-calculator/roof-square-footage-calculator",
        category: "construction",
        icon: <Ruler />,
      },
      {
        id: "labor-calculator",
        name: "Labor Calculator",
        description: "Calculate labor costs based on hours and wage",
        isAvailable: true,
        path: "/resources/cost-calculator/labor-cost-calculator",
        category: "construction",
        icon: <Calculator />,
      },
      {
        id: "pipe-water-volume-calculator",
        name: "Pipe Water Volume Calculator",
        description:
          "Calculate how much water a pipe can hold based on its dimensions",
        isAvailable: true,
        path: "/resources/cost-calculator/pipe-water-volume-calculator",
        category: "construction",
        icon: <Droplet />,
      },
      {
        id: "paver-calculator",
        name: "Paver Calculator & Price Estimator",
        description:
          "Calculate how many pavers you need and estimate material costs",
        isAvailable: true,
        path: "/resources/cost-calculator/paver-calculator-price-estimato",
        category: "construction",
        icon: <Grid3X3 />,
      },
      {
        id: "irrigation-system-calculator",
        name: "Irrigation System Material Calculator",
        description:
          "Calculate irrigation system material costs for sprinklers, pipes, and valves",
        isAvailable: true,
        path: "/resources/cost-calculator/irrigation-system-material-calculator",
        category: "construction",
        icon: <Droplet />,
      },
      {
        id: "excavation-calculator",
        name: "Excavation Volume and Cost Calculator",
        description: "Calculate excavation volume and cost based on dimensions",
        isAvailable: true,
        path: "/resources/cost-calculator/excavation-volume-cost-calculator",
        category: "construction",
        icon: <Shovel />,
      },
    ],
  },
];
