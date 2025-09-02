"use client";
import React, { useEffect, useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";

import {
  Search,
  MapPin,
  Calculator,
  ArrowRight,
  Home,
  Wrench,
  Paintbrush,
  Zap,
  Hammer,
  Trees,
  Check,
  ChevronsUpDown,
  ChefHat,
  Grid2X2,
  Sparkles,
  Building2,
  ShoppingCart,
  Pickaxe,
  Layers,
  DoorOpen,
  FileText,
  AirVent,
  ShieldCheck,
  Shovel,
  Settings,
  Palette,
  Wrench as PipeWrench,
  Building,
  Fence,
  Flower2,
  Square,
  Ruler,
  RectangleHorizontal,
  Loader2,
  Video,
  Bath,
  HardHat,
  Utensils,
  ShieldAlert,
  Cpu,
} from "lucide-react";

import { tasks } from "@/utils/data";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  fetchFilteredProjects,
  fetchProjects,
  Project,
} from "@/services/resource/costCalculatorService";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../components/ui/command";
import { cn } from "@/app/lib/utils";
import { LOCATIONS } from "@/data/locationsData";
import { Input } from "../components/ui/input";

// const CATEGORIES = [
//   { id: "all", name: "All", icon: Home },
//   { id: "appliances", name: "Appliances", icon: ChefHat },
//   { id: "cabinets", name: "Cabinets", icon: Grid2X2 },
//   { id: "ceiling", name: "Ceiling", icon: Layers },
//   { id: "cleaning", name: "Cleaning", icon: Sparkles },
//   { id: "concrete", name: "Concrete", icon: Building2 },
//   { id: "countertops", name: "Countertops", icon: ShoppingCart },
//   { id: "demolition", name: "Demolition", icon: Pickaxe },
//   { id: "doors", name: "Doors", icon: DoorOpen },
//   { id: "drywall", name: "Drywall", icon: FileText },
//   { id: "electrical", name: "Electrical", icon: Zap },
//   { id: "excavation", name: "Excavation", icon: Shovel },
//   { id: "flooring", name: "Flooring", icon: Square },
//   { id: "framing", name: "Framing", icon: Building },
//   { id: "hvac", name: "HVAC", icon: AirVent },
//   { id: "insulation", name: "Insulation", icon: ShieldCheck },
//   { id: "landscaping", name: "Landscaping", icon: Trees },
//   { id: "masonry", name: "Masonry", icon: Hammer },
//   { id: "other", name: "Other", icon: Settings },
//   { id: "painting", name: "Painting", icon: Paintbrush },
//   { id: "plumbing", name: "Plumbing", icon: PipeWrench },
//   { id: "roofing", name: "Roofing", icon: Home },
//   { id: "siding", name: "Siding", icon: Fence },
//   { id: "specialties", name: "Specialties", icon: Flower2 },
//   { id: "tile", name: "Tile", icon: Grid2X2 },
//   { id: "trim", name: "Trim", icon: Ruler },
//   { id: "windows", name: "Windows", icon: RectangleHorizontal },
//   { id: "handyman", name: "Handyman", icon: RectangleHorizontal },
// ];

const CATEGORIES = [
  { id: "all", name: "All", icon: Home },
  { id: "appliances", name: "Appliances", icon: ChefHat },
  { id: "audio_video", name: "Audio / Video", icon: Video },
  { id: "bathroom_remodeling", name: "Bathroom Remodeling", icon: Bath },
  { id: "concrete_masonry", name: "Concrete / Masonry", icon: Hammer },
  { id: "decks", name: "Decks", icon: Layers },
  { id: "doors", name: "Doors", icon: DoorOpen },
  { id: "drywall", name: "Drywall", icon: FileText },
  { id: "electrical", name: "Electrical", icon: Zap },
  { id: "fences", name: "Fences", icon: Fence },
  { id: "flooring", name: "Flooring", icon: Square },
  { id: "framing_carpentry", name: "Framing/Carpentry", icon: Building },
  { id: "general_contractor", name: "General Contractor", icon: HardHat },
  { id: "hvac", name: "HVAC", icon: AirVent },
  { id: "handyman", name: "Handyman", icon: Wrench },
  { id: "kitchen_remodeling", name: "Kitchen Remodeling", icon: Utensils },
  { id: "landscaping_lawn_care", name: "Landscaping / Lawn Care", icon: Trees },
  { id: "mold_remediation", name: "Mold Remediation", icon: ShieldAlert },
  { id: "painting", name: "Painting", icon: Paintbrush },
  { id: "plumbing", name: "Plumbing", icon: PipeWrench },
  { id: "restoration", name: "Restoration", icon: Building2 },
  { id: "roofing", name: "Roofing", icon: Home },
  { id: "siding", name: "Siding", icon: Fence },
  { id: "smart_home", name: "Smart Home", icon: Cpu },
  { id: "windows", name: "Windows", icon: RectangleHorizontal },
];

const ConstructionCosts = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("national-average");
  const [selectedProject, setSelectedProject] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [projectOpen, setProjectOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const {
    data: projectData,
    isLoading,
    isError,
    error,
  } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const useFilteredProjects = (
    estimateCategory: string,
    projectName: string,
  ) => {
    return useQuery<Project[]>({
      queryKey: ["filtered-projects", estimateCategory, projectName],
      queryFn: () => fetchFilteredProjects(estimateCategory, projectName),
      enabled: !!estimateCategory, // only run if category is set
    });
  };

  const { data: filteredData, isLoading: filteredLoading } =
    useFilteredProjects(selectedCategory, debouncedSearchTerm);

  const baseData = filteredData || [];

  const filteredCategoryData = baseData.filter((project) =>
    project.projectName
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase()),
  );

  const loading = isLoading || filteredLoading;

  useMetaTags({
    title:
      "Construction Costs Estimator 2025 | Real Project Pricing | Contractor+",
    description:
      "Get accurate construction cost estimates for 500+ project types. Compare material and labor pricing across major US cities. Built for contractors and homeowners.",
    keywords:
      "construction costs, project estimator, contractor pricing, building costs, home improvement costs, construction calculator",
  });

  // const filteredProjects = costCalculatorData.filter((project) => {
  //   const matchesCategory =
  //     selectedCategory === "all" ||
  //     project?.estimate?.category === selectedCategory;
  //   const matchesSearch =
  //     searchTerm === "" ||
  //     project.projectName.toLowerCase().includes(searchTerm.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });

  // const filteredProjects = costCalculatorData.filter((project) => {
  //   const allowedCategories = getDataCategoriesForFilter(selectedCategory);

  //   const matchesCategory =
  //     selectedCategory === "all" ||
  //     allowedCategories.includes(project.estimateCategory);

  //   const matchesSearch =
  //     searchTerm === "" ||
  //     project.projectName.toLowerCase().includes(searchTerm.toLowerCase());

  //   return matchesCategory && matchesSearch;
  // });

  const handleSearch = () => {
    if (selectedProject) {
      router.push(
        `/resources/construction-costs/${selectedProject}/${selectedLocation}`,
      );
    }
  };

  const handleProjectClick = (slug: string) => {
    // Default to national-average when clicking on project cards
    router.push(`/resources/construction-costs/${slug}/national-average`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <Calculator className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold md:text-5xl">
                Construction Costs
              </h1>
            </div>
            <Badge
              variant="secondary"
              className="mb-6 border-red-500 bg-red-600 text-white"
            >
              Updated{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Badge>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Get accurate construction cost estimates for any project. Compare
              material and labor pricing across major US cities.
            </p>
          </div>

          {/* Search Form */}
          <Card className="mx-auto max-w-4xl shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-whiteSmoke text-sm font-medium">
                    Project Type
                  </label>
                  <Popover open={projectOpen} onOpenChange={setProjectOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={projectOpen}
                        className="text-aliceBlue border-decemberSky mt-3 h-12 w-full justify-between border"
                      >
                        {selectedProject
                          ? projectData?.find(
                              (project) => project.slug === selectedProject,
                            )?.projectName
                          : "Select a project type"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search project types..." />
                        <CommandList>
                          <CommandEmpty>No project found.</CommandEmpty>
                          <CommandGroup>
                            {projectData?.map((project) => (
                              <CommandItem
                                key={project.slug}
                                value={project.projectName}
                                onSelect={() => {
                                  setSelectedProject(project.slug);
                                  setProjectOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedProject === project.slug
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                {project.projectName}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-whiteSmoke text-sm font-medium">
                    Location
                  </label>
                  <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={locationOpen}
                        className="text-aliceBlue border-decemberSky mt-3 h-12 w-full justify-between border"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {selectedLocation
                            ? LOCATIONS.find(
                                (location) =>
                                  location.value === selectedLocation,
                              )?.label
                            : "Select location"}
                        </div>
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                      <Command>
                        <CommandInput placeholder="Search locations..." />
                        <CommandList>
                          <CommandEmpty>No location found.</CommandEmpty>
                          <CommandGroup>
                            {LOCATIONS.map((location) => (
                              <CommandItem
                                key={location.value}
                                value={location.label}
                                onSelect={() => {
                                  setSelectedLocation(location.value);
                                  setLocationOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedLocation === location.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {location.label}
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Button
                onClick={handleSearch}
                className="h-12 w-full bg-red-600 font-semibold text-white hover:bg-red-700"
                disabled={!selectedProject}
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Get Cost Estimate
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 px-2 lg:grid-cols-4">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
                <div className="relative">
                  <Search className="text-aliceBlue absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {CATEGORIES.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                        className={cn(
                          "hover:bg-muted/50 flex w-full items-center gap-3 px-4 py-3 text-left transition-colors",
                          selectedCategory === category.name &&
                            "border-r-2 border-red-600 bg-red-50 text-red-700",
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">Popular Projects</h2>
              <p className="text-aliceBlue">
                Select a project to get detailed cost estimates for your area
              </p>
            </div>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="text-primary h-8 w-8 animate-spin" />
              </div>
            ) : filteredCategoryData?.length === 0 ? (
              <Card className="py-12 text-center">
                <CardContent>
                  <p className="text-aliceBlue">
                    No projects found matching your search criteria.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredCategoryData?.map((project) => (
                  <Card
                    key={project.slug}
                    className="cursor-pointer border-gray-200 transition-shadow hover:border-red-300 hover:shadow-lg"
                    onClick={() => handleProjectClick(project.slug)}
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base leading-tight">
                        {project?.projectName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className="border-gray-300 text-xs"
                        >
                          {project?.estimateCategory}
                        </Badge>
                        <ArrowRight className="text-aliceBlue h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-red-100 bg-gradient-to-r from-red-50 to-orange-50">
            <CardContent className="p-8">
              <h2 className="mb-4 text-2xl font-bold">
                The only OS for build and service contractors
              </h2>
              <p className="text-aliceBlue mx-auto mb-6 max-w-2xl">
                Join thousands of contractors using Contractor+ to create
                professional estimates, manage projects, and grow their
                business. Start your free trial today.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() =>
                    window.open(
                      "https://contractorplus.onelink.me/ekwH/homebuttons?pid=web&utm_source=web&utm_medium=resources&utm_campaign=constructioncosts&utm_content=main-page&deep_link_value=construction-costs",
                      "_blank",
                    )
                  }
                >
                  <span className="hidden sm:inline">Get started FREE</span>
                  <span className="sm:hidden">Download Free App</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                  onClick={() =>
                    window.open("https://contractorplus.app", "_blank")
                  }
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCosts;
