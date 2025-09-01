import React, { useMemo } from "react";

import {
  Home,
  ChefHat,
  Video,
  Bath,
  Hammer,
  Layers,
  DoorOpen,
  FileText,
  Zap,
  Fence,
  Square,
  Building,
  HardHat,
  AirVent,
  Wrench,
  Utensils,
  Trees,
  TrendingUp,
  ShieldAlert,
  Paintbrush,
  Building2,
  Cpu,
  RectangleHorizontal,
  Wrench as PipeWrench,
} from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Project } from "@/services/resource/costCalculatorService";

const CATEGORY_ICON_MAP: Record<string, React.ElementType> = {
  Appliances: ChefHat,
  "Audio / Video": Video,
  "Bathroom Remodeling": Bath,
  "Concrete / Masonry": Hammer,
  Decks: Layers,
  Doors: DoorOpen,
  Drywall: FileText,
  Electrical: Zap,
  Fences: Fence,
  Flooring: Square,
  "Framing/Carpentry": Building,
  "General Contractor": HardHat,
  HVAC: AirVent,
  Handyman: Wrench,
  "Kitchen Remodeling": Utensils,
  "Landscaping / Lawn Care": Trees,
  "Mold Remediation": ShieldAlert,
  Painting: Paintbrush,
  Plumbing: PipeWrench,
  Restoration: Building2,
  Roofing: Home,
  Siding: Fence,
  "Smart Home": Cpu,
  Windows: RectangleHorizontal,
  All: Home,
};

interface PopularProjectTypesProps {
  currentProjectSlug: string;
  cityName: string;
  currentLocation: string;
  projectList: Project[];
}

// Project data with categories for better organization
// const ALL_PROJECTS = [
//   // Plumbing Projects
//   {
//     name: "Install a New Toilet",
//     slug: "install-a-new-toilet",
//     category: "plumbing",
//     icon: Wrench,
//     popular: true,
//   },
//   {
//     name: "Replace Water Heater",
//     slug: "replace-water-heater",
//     category: "plumbing",
//     icon: Wrench,
//     popular: true,
//   },
//   {
//     name: "Install a New Sink",
//     slug: "install-a-new-sink",
//     category: "plumbing",
//     icon: Wrench,
//     popular: true,
//   },
//   {
//     name: "Replace a Bathtub",
//     slug: "replace-a-bathtub",
//     category: "plumbing",
//     icon: Wrench,
//     popular: true,
//   },
//   {
//     name: "Install a Garbage Disposal",
//     slug: "install-a-garbage-disposal",
//     category: "plumbing",
//     icon: Wrench,
//     popular: false,
//   },
//   {
//     name: "Install a Sump Pump",
//     slug: "install-a-sump-pump",
//     category: "plumbing",
//     icon: Wrench,
//     popular: false,
//   },

//   // Electrical Projects
//   {
//     name: "Install Electrical Outlet",
//     slug: "install-electrical-outlet",
//     category: "electrical",
//     icon: Zap,
//     popular: true,
//   },
//   {
//     name: "Install Ceiling Fan",
//     slug: "install-ceiling-fan",
//     category: "electrical",
//     icon: Zap,
//     popular: true,
//   },
//   {
//     name: "Install Light Fixture",
//     slug: "install-light-fixture",
//     category: "electrical",
//     icon: Zap,
//     popular: true,
//   },
//   {
//     name: "Install Smart Thermostat",
//     slug: "install-smart-thermostat",
//     category: "electrical",
//     icon: Zap,
//     popular: false,
//   },
//   {
//     name: "Install Electrical Panel",
//     slug: "install-electrical-panel",
//     category: "electrical",
//     icon: Zap,
//     popular: false,
//   },

//   // Flooring Projects
//   {
//     name: "Install Hardwood Flooring",
//     slug: "install-hardwood-flooring",
//     category: "flooring",
//     icon: Home,
//     popular: true,
//   },
//   {
//     name: "Install Tile Flooring",
//     slug: "install-tile-flooring",
//     category: "flooring",
//     icon: Home,
//     popular: true,
//   },
//   {
//     name: "Install Carpet",
//     slug: "install-carpet",
//     category: "flooring",
//     icon: Home,
//     popular: true,
//   },
//   {
//     name: "Install Laminate Flooring",
//     slug: "install-laminate-flooring",
//     category: "flooring",
//     icon: Home,
//     popular: false,
//   },
//   {
//     name: "Refinish Hardwood Floors",
//     slug: "refinish-hardwood-floors",
//     category: "flooring",
//     icon: Home,
//     popular: false,
//   },

//   // Painting Projects
//   {
//     name: "Paint Interior Walls",
//     slug: "paint-interior-walls",
//     category: "painting",
//     icon: Paintbrush,
//     popular: true,
//   },
//   {
//     name: "Paint Exterior House",
//     slug: "paint-exterior-house",
//     category: "painting",
//     icon: Paintbrush,
//     popular: true,
//   },
//   {
//     name: "Paint Kitchen Cabinets",
//     slug: "paint-kitchen-cabinets",
//     category: "painting",
//     icon: Paintbrush,
//     popular: true,
//   },
//   {
//     name: "Paint Trim and Molding",
//     slug: "paint-trim-and-molding",
//     category: "painting",
//     icon: Paintbrush,
//     popular: false,
//   },

//   // Roofing Projects
//   {
//     name: "Replace Roof Shingles",
//     slug: "replace-roof-shingles",
//     category: "roofing",
//     icon: Home,
//     popular: true,
//   },
//   {
//     name: "Repair Roof Leak",
//     slug: "repair-roof-leak",
//     category: "roofing",
//     icon: Home,
//     popular: true,
//   },
//   {
//     name: "Install Gutters",
//     slug: "install-gutters",
//     category: "roofing",
//     icon: Home,
//     popular: false,
//   },
//   {
//     name: "Install Skylight",
//     slug: "install-skylight",
//     category: "roofing",
//     icon: Home,
//     popular: false,
//   },

//   // Kitchen & Bath Projects
//   {
//     name: "Kitchen Remodel",
//     slug: "kitchen-remodel",
//     category: "renovation",
//     icon: Building2,
//     popular: true,
//   },
//   {
//     name: "Bathroom Remodel",
//     slug: "bathroom-remodel",
//     category: "renovation",
//     icon: Building2,
//     popular: true,
//   },
//   {
//     name: "Install Kitchen Countertops",
//     slug: "install-kitchen-countertops",
//     category: "renovation",
//     icon: Building2,
//     popular: true,
//   },
//   {
//     name: "Install Kitchen Cabinets",
//     slug: "install-kitchen-cabinets",
//     category: "renovation",
//     icon: Building2,
//     popular: false,
//   },

//   // HVAC Projects
//   {
//     name: "Install Central Air Conditioning",
//     slug: "install-central-air-conditioning",
//     category: "hvac",
//     icon: Building2,
//     popular: true,
//   },
//   {
//     name: "Replace Furnace",
//     slug: "replace-furnace",
//     category: "hvac",
//     icon: Building2,
//     popular: true,
//   },
//   {
//     name: "Install Ductwork",
//     slug: "install-ductwork",
//     category: "hvac",
//     icon: Building2,
//     popular: false,
//   },

//   // Exterior Projects
//   {
//     name: "Install Fence",
//     slug: "install-fence",
//     category: "exterior",
//     icon: Trees,
//     popular: true,
//   },
//   {
//     name: "Install Patio",
//     slug: "install-patio",
//     category: "exterior",
//     icon: Trees,
//     popular: true,
//   },
//   {
//     name: "Install Deck",
//     slug: "install-deck",
//     category: "exterior",
//     icon: Trees,
//     popular: true,
//   },
//   {
//     name: "Install Driveway",
//     slug: "install-driveway",
//     category: "exterior",
//     icon: Trees,
//     popular: false,
//   },
//   {
//     name: "Landscape Design",
//     slug: "landscape-design",
//     category: "exterior",
//     icon: Trees,
//     popular: false,
//   },

//   // General Construction
//   {
//     name: "Drywall Installation",
//     slug: "drywall-installation",
//     category: "construction",
//     icon: Hammer,
//     popular: true,
//   },
//   {
//     name: "Install Windows",
//     slug: "install-windows",
//     category: "construction",
//     icon: Hammer,
//     popular: true,
//   },
//   {
//     name: "Install Doors",
//     slug: "install-doors",
//     category: "construction",
//     icon: Hammer,
//     popular: false,
//   },
//   {
//     name: "Basement Finishing",
//     slug: "basement-finishing",
//     category: "construction",
//     icon: Hammer,
//     popular: false,
//   },
// ];

// Function to get related projects with SEO optimization
// const getPopularProjects = (currentSlug: string, count: number = 12) => {
//   // Filter out current project
//   const availableProjects = ALL_PROJECTS.filter(
//     (project) => project.slug !== currentSlug
//   );

//   // Get current project to determine category for related suggestions
//   const currentProject = ALL_PROJECTS.find(
//     (project) => project.slug === currentSlug
//   );

//   let selectedProjects: typeof ALL_PROJECTS = [];

//   // Strategy 1: If current project exists, prioritize same category
//   if (currentProject) {
//     const sameCategory = availableProjects.filter(
//       (project) =>
//         project.category === currentProject.category && project.popular
//     );
//     selectedProjects.push(...sameCategory.slice(0, Math.min(4, count)));
//   }

//   // Strategy 2: Add popular projects from other categories
//   const remainingSlots = count - selectedProjects.length;
//   if (remainingSlots > 0) {
//     const popularFromOther = availableProjects
//       .filter(
//         (project) =>
//           project.popular &&
//           !selectedProjects.some((selected) => selected.slug === project.slug)
//       )
//       .sort(() => Math.random() - 0.5) // Randomize for variety
//       .slice(0, remainingSlots);

//     selectedProjects.push(...popularFromOther);
//   }

//   // Strategy 3: Fill remaining slots with any available projects
//   const stillRemainingSlots = count - selectedProjects.length;
//   if (stillRemainingSlots > 0) {
//     const remaining = availableProjects
//       .filter(
//         (project) =>
//           !selectedProjects.some((selected) => selected.slug === project.slug)
//       )
//       .sort(() => Math.random() - 0.5)
//       .slice(0, stillRemainingSlots);

//     selectedProjects.push(...remaining);
//   }

//   return selectedProjects.slice(0, count);
// };

function getPopularProjects(
  projects: any[],
  currentSlug: string,
  count: number = 12,
) {
  // filter out current project
  const availableProjects = projects?.filter((p) => p.slug !== currentSlug);

  // randomize
  const shuffled = [...availableProjects]?.sort(() => Math.random() - 0.5);

  // pick top N
  return shuffled.slice(0, count);
}

export const PopularProjectTypes: React.FC<PopularProjectTypesProps> = ({
  currentProjectSlug,
  cityName,
  currentLocation,
  projectList = [],
}) => {
  const popularProjects = useMemo(() => {
    return getPopularProjects(projectList, currentProjectSlug, 12);
  }, [projectList, currentProjectSlug]);

  if (popularProjects?.length === 0) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Popular Project Types in {cityName}
        </CardTitle>
        <p className="text-aliceBlue text-sm">
          Explore other popular construction and renovation projects in{" "}
          {cityName}. Get instant cost estimates for these commonly requested
          services.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {popularProjects.map((project) => {
            // const IconComponent = project.icon;
            const IconComponent =
              CATEGORY_ICON_MAP[project.estimateCategory] || Home;
            return (
              <Link
                key={project.slug}
                href={`/resources/construction-costs/${project.slug}/${currentLocation}`}
                className="group block"
              >
                <div className="border-border hover:border-primary/50 hover:bg-accent/50 flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 group-hover:shadow-sm">
                  <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-8 w-8 items-center justify-center rounded-md transition-colors">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="group-hover:text-primary line-clamp-2 text-sm font-medium transition-colors">
                      {project.projectName}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs capitalize">
                        {project.estimateCategory}
                      </Badge>
                      {/* {project.popular && ( */}
                      <Badge variant="outline" className="text-xs">
                        Popular
                      </Badge>
                      {/* )} */}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="border-border mt-6 border-t pt-4">
          <p className="text-aliceBlue text-center text-sm">
            Need help with a different project in {cityName}?{" "}
            <Link
              href="/resources/construction-costs"
              className="text-primary font-medium hover:underline"
            >
              Browse all project types
            </Link>{" "}
            or use our{" "}
            <Link
              href="/resources/cost-calculator"
              className="text-primary font-medium hover:underline"
            >
              construction calculators
            </Link>{" "}
            or{" "}
            <Link
              href="/resources/free-estimate-maker"
              className="text-primary font-medium hover:underline"
            >
              free estimate templates
            </Link>{" "}
            for quick estimates.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
