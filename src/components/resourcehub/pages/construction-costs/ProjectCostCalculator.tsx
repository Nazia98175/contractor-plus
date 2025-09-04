"use client";
import { LOCATIONS } from "@/data/locationsData";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { generateProjectData } from "@/utils/generateProjectData";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Calculator,
  Check,
  ChevronsUpDown,
  Info,
  Loader2,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { cn } from "@/app/lib/utils";
import { Checkbox } from "../../components/ui/checkbox";
import { LowesMaterialSwap } from "../../components/lowes-swap/LowesMaterialSwap";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import TimelineSection from "../../components/construction-cost/TimelineSection";
import FAQSection from "../../components/construction-cost/FAQSection";
import ContractorFAQSection from "../../components/construction-cost/ContractorFAQSection";
import { PopularProjectTypes } from "../../components/construction-cost/PopularProjectTypes";
import {
  fetchProjectDetail,
  fetchProjects,
  Project,
} from "@/services/resource/costCalculatorService";
import { ProjectDetail } from "@/types/resources/projectDetail";
import {
  getUserIp,
  searchThumbtackBusinesses,
} from "@/services/resource/thumbtackService";
import ThumbTackWidget from "../../components/ThumbTackWidget";
import { estimaticDataApi } from "@/services/resource/constructionCostService";

// Helper function to format currency with commas
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

interface LowesMaterial {
  id: string;
  name: string;
  price: number;
  image: string;
  url: string;
  in_stock: boolean;
  source: string;
}

interface ProjectData {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  materials: Array<{
    name: string;
    lowPrice: number;
    highPrice: number;
    unit: string;
    enabled: boolean;
    quantity?: number;
    lowesUrl?: string;
  }>;
  laborRate: number;
  laborHours: number;
  laborUnit: string;
  inputField: {
    name: string;
    unit: string;
    defaultValue: number;
  };
  category: string;
}

interface Material {
  name: string;
  lowPrice: number;
  highPrice: number;
  unit: string;
  quantity: number;
  enabled: boolean;
  lowesUrl?: string;
  lowesPrice?: number;
}

interface Estimate {
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

interface ProjectTimeLineData {
  materials: Material[];
  category: string;
  inputField: {
    name: string;
    unit: string;
    defaultValue: number;
  };
  laborHours: number;
  laborUnit: string;
  // Add timeline-related properties if needed
}

const PROJECT_DATA: Record<string, ProjectData> = {};

// Import all project types from the main construction costs page

// const thumstack = [
//   {

//   }
// ]

// Convert to match the format expected by the dropdown (value/label pairs)
// const PROJECT_TYPES = costCalculatorData.map((project) => ({
//   value: project.slug,
//   label: project.projectName,
// }));

// Configuration from the provided logic
const DIRECT_MAP: Record<string, string> = {
  plumbing: "Plumbing",
  appliances: "Appliances",
  drywall: "Drywall",
  electrical: "Electrical",
  tile: "Flooring",
  flooring: "Flooring",
  concrete: "Concrete / Masonry",
  masonry: "Concrete / Masonry",
  hvac: "HVAC",
  painting: "Painting",
  roofing: "Roofing",
  framing: "Framing/Carpentry",
  windows: "Windows",
  doors: "Doors",
  siding: "Siding",
  trim: "Framing/Carpentry",
  insulation: "Drywall",
  demolition: "General Contractor",
  specialties: "General Contractor",
  other: "General Contractor",
  landscaping: "Landscaping / Lawn Care",
  cabinets: "Kitchen Remodeling",
  countertops: "Kitchen Remodeling",
  ceiling: "Drywall",
  cleaning: "Restoration",
  excavation: "Concrete / Masonry",
  "audio / video": "Audio / Video",
  "audio/video": "Audio / Video",
  audio: "Audio / Video",
  video: "Audio / Video",
  "smart home": "Smart Home",
  "mold remediation": "Mold Remediation",
  restoration: "Restoration",
  handyman: "Handyman",
  decks: "Decks",
  fencing: "Fences",
  deck: "Decks",
  fence: "Fences",
  gutters: "Roofing",
  gutter: "Roofing",
};

const REGEX_FALLBACK: [RegExp, string][] = [
  [/roof|gutter/i, "Roofing"],
  [/plumb/i, "Plumbing"],
  [/electrical?|outlet/i, "Electrical"],
  [/paint/i, "Painting"],
  [/hvac|furnace|a\s*c/i, "HVAC"],
  [/frame|carpentry/i, "Framing/Carpentry"],
  [/drywall|sheetrock|ceiling/i, "Drywall"],
  [/tile|floor/i, "Flooring"],
  [/siding/i, "Siding"],
  [/door/i, "Doors"],
  [/window/i, "Windows"],
  [/bath/i, "Bathroom Remodeling"],
  [/kitchen|counter|cabinet/i, "Kitchen Remodeling"],
  [/concrete|mason|retaining/i, "Concrete / Masonry"],
  [/deck/i, "Decks"],
  [/fence/i, "Fences"],
  [/landscape|lawn/i, "Landscaping / Lawn Care"],
  [/audio|video|\bav\b/i, "Audio / Video"],
  [/smart.*home/i, "Smart Home"],
  [/mold/i, "Mold Remediation"],
  [/restore|remediation/i, "Restoration"],
];

// Function to map category to labor-category
function mapLaborCategory(project: any) {
  // const estimateKey = Object.keys(project.estimate)[0];
  //     const rawCategory = project.estimate[estimateKey]?.category || "";
  const src = project.laborRateIndexCategory?.toLowerCase().trim();
  let laborCategory = DIRECT_MAP[src];

  if (!laborCategory) {
    const haystacks = [project.laborRateIndexCategory, project.projectName];
    for (const [re, val] of REGEX_FALLBACK) {
      if (haystacks.some((h) => re.test(h))) {
        laborCategory = val;
        break;
      }
    }
  }

  return laborCategory || "General Contractor";
}

const ProjectCostCalculator = ({
  params,
}: {
  params: { projectSlug: string; location: string };
}) => {
  console.log(params, "params");
  const { projectSlug, location } = params;
  const router = useRouter();
  const navigate = (url: string) => router.push(url);
  const zipCode = LOCATIONS.find((loc) => loc.value === location)?.zip;
  const [zipCodeValue, setZipCodeValue] = useState(zipCode);
  const [isZipCodeManuallyChanged, setIsZipCodeManuallyChanged] =
    useState(false);
  const [ip, setIp] = useState("");
  const [isIpReady, setIsIpReady] = useState(false);

  const { data: projectList } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const updatedProjects = projectList?.map((project) => ({
    ...project,
    laborCategory: mapLaborCategory(project),
  }));

  const useProjectDetail = (slug: string) => {
    return useQuery<ProjectDetail>({
      queryKey: ["project-detail", slug],
      queryFn: () => fetchProjectDetail(slug),
      enabled: !!slug && !!location,
    });
  };

  const { data: projectValues, isLoading: projectLoader } =
    useProjectDetail(projectSlug);

  const [laborRatesData, setLaborRatesData] = useState<number>(0);
  const selectedLocationValue = LOCATIONS.find((loc) => loc.value === location);
  const zip = selectedLocationValue?.zip;

  // ✅ 2. Find category from projectSlug
  const selectedProjectValue = updatedProjects?.find(
    (proj) => proj.slug === projectSlug,
  );
  const category = selectedProjectValue?.laborCategory;

  const fetchData = async () => {
    try {
      const data = await estimaticDataApi({
        zipCode: zip,
        industry: category,
      });
      if (data?.labor_rate) {
        return data?.labor_rate;
        setLaborRatesData(data?.labor_rate);
      }
    } catch (error) {
      console.log(error, "data calling estimatic data");
    }
  };

  const {
    data: dataLaborRates,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["laborRates", zip, category],
    queryFn: fetchData,
    enabled: !!category && !!zip,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // useEffect(() => {
  //   refetch();
  // }, [dataLaborRates, zip, category, refetch]);

  const [projectData, setProjectData] = useState<ProjectData | null>(null);
  const [inputValue, setInputValue] = useState(0);
  const [markupPercentage, setMarkupPercentage] = useState(30);
  const [materialStates, setMaterialStates] = useState<Record<string, boolean>>(
    {},
  );
  const [materialQuantities, setMaterialQuantities] = useState<
    Record<string, number>
  >({});
  const [swappedMaterials, setSwappedMaterials] = useState<
    Record<string, LowesMaterial>
  >({});
  const [projectOpen, setProjectOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  // Local state for selected values before update
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(projectSlug);
  const [selectedLocation, setSelectedLocation] = useState(location);

  useEffect(() => {
    // Only fetch IP if we don't have it or if location actually requires a new IP
    if (!ip || !isIpReady) {
      setIsIpReady(false);
      getUserIp()
        .then((ipAddress) => {
          setIp(ipAddress);
          setIsIpReady(true);
        })
        .catch(() => setIsIpReady(true));
    }
  }, [location]);

  const matchedThumbtack =
    projectValues?.slug === projectSlug ? projectValues : undefined;

  const payload = useMemo(() => {
    if (!matchedThumbtack?.category_pk) return null;

    const basePayload = {
      categoryID: matchedThumbtack.category_pk,
      userQuery: matchedThumbtack.projectName,
    };

    if (isZipCodeManuallyChanged && zipCodeValue?.length === 5) {
      return { ...basePayload, zipCode: zipCodeValue };
    }

    if (ip && isIpReady) {
      return { ...basePayload, ip };
    }

    return null;
  }, [matchedThumbtack, zipCodeValue, isZipCodeManuallyChanged, ip, isIpReady]);

  // Query lives in parent now
  const {
    data: response,
    isLoading: thumbtackLoading,
    refetch: thumbtackRefresh,
  } = useQuery({
    queryKey: ["thumbtackGetQuote", payload, location],
    queryFn: async () => {
      if (!payload) return;
      const data = await searchThumbtackBusinesses(payload);
      return {
        data: data?.data,
        metadata: data?.metadata,
      };
    },
    enabled: !!payload,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Function to handle the update when button is clicked
  const handleUpdate = () => {
    if (selectedProjectSlug && selectedLocation) {
      navigate(
        `/resources/construction-costs/${selectedProjectSlug}/${selectedLocation}`,
      );
    }
  };

  // Handler for material swapping
  const handleMaterialSwapped = (
    materialName: string,
    newMaterial: LowesMaterial | null,
  ) => {
    setSwappedMaterials((prev) => {
      const updated = { ...prev };
      if (newMaterial) {
        updated[materialName] = newMaterial;
      } else {
        delete updated[materialName];
      }
      return updated;
    });
  };

  // Helper function to get material price (swapped or original)
  const getMaterialPrice = (material: any, swappedMaterial?: LowesMaterial) => {
    if (swappedMaterial) {
      return swappedMaterial.price;
    }
    return (material.lowPrice + material.highPrice) / 2;
  };

  useEffect(() => {
    // Initialize selected values when URL params change
    setSelectedProjectSlug(projectSlug);
    setSelectedLocation(location);

    if (projectSlug) {
      // Generate project data dynamically for any project slug
      // const data = generateProjectData(projectSlug);
      const data = generateProjectData(projectSlug, projectValues, location);
      setProjectData(data);
      if (data) {
        setInputValue(data.inputField.defaultValue);

        // Initialize material states
        const initialStates: Record<string, boolean> = {};
        data.materials.forEach((material) => {
          initialStates[material.name] = material.enabled;
        });
        setMaterialStates(initialStates);
      }
    }
  }, [projectSlug, location, projectValues]); // Added location to dependency array

  const locationName =
    LOCATIONS.find((loc) => loc.value === location)?.label ||
    "National Average";
  const displayLocationName =
    locationName === "National Average" ? "USA" : locationName;

  // Use meta tags at the top level with dynamic values
  useMetaTags({
    title: projectData
      ? `2025 Cost To ${projectData.name} in ${displayLocationName} | Contractor+`
      : `2025 Construction Costs in ${displayLocationName} | Contractor+`,
    description: projectData
      ? `See real costs to ${projectData.name.toLowerCase()} in ${displayLocationName}. Compare labor and material pricing. Built for contractors. Get accurate ballpark pricing.`
      : `See real construction costs in ${displayLocationName}. Compare labor and material pricing. Built for contractors. Get accurate ballpark pricing.`,
    keywords: projectData
      ? `${projectData.name.toLowerCase()}, construction costs, ${displayLocationName}, contractor pricing`
      : `construction costs, ${displayLocationName}, contractor pricing`,
  });

  if (projectLoader) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="main-container py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p>Project not found</p>
            <Button
              onClick={() => navigate("/resources/construction-costs")}
              className="mt-4 bg-red-600 hover:bg-red-700"
            >
              Back to Construction Costs
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Calculate costs with proper ratio from default value
  const sizeMultiplier =
    inputValue / (projectData?.inputField.defaultValue || 1);

  const materialCosts = projectData?.materials?.reduce((total, material) => {
    if (!materialStates[material.name]) return total;
    const swappedMaterial = swappedMaterials[material.name];
    const avgPrice = getMaterialPrice(material, swappedMaterial);
    const quantityPerUnit =
      materialQuantities[material.name] || material.quantity || 1;
    const totalQuantity = quantityPerUnit * sizeMultiplier;
    return total + avgPrice * totalQuantity;
  }, 0);

  const laborCosts =
    projectData?.laborRate * projectData?.laborHours * sizeMultiplier;
  const subtotal =
    materialCosts +
    dataLaborRates * (projectData?.laborHours || 0) * sizeMultiplier;

  const markupAmount = subtotal * (markupPercentage / 100);
  const totalCost = subtotal + markupAmount;

  return (
    <div className="min-h-screen">
      {/* <Helmet>
        <meta
          property="og:image"
          content={
            "https://templated-assets.s3.amazonaws.com/render/d2eaecb4-1ed4-4301-9858-49e8eebffbd9.jpg"
          }
        />
        <meta
          property="og:url"
          content={`https://1a75660f4314.ngrok-free.app${window.location.pathname}`}
        />
        <meta property="og:type" content="website" />
      </Helmet> */}
      {/* Header */}
      <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="main-container mx-auto px-4 py-8">
          <div className="mb-4 flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/resources/construction-costs")}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Construction Costs
            </Button>
            <span className="text-white/60">›</span>
            <span className="text-sm text-white/80">{projectData?.name}</span>
          </div>

          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            Cost to {projectData?.name.toLowerCase()} in {displayLocationName}
          </h1>
          <Badge
            variant="secondary"
            className="border-red-500 bg-red-600 text-white"
          >
            Updated{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </Badge>
        </div>
      </div>

      {/* Search Bar */}
      <div className="border-stiletto border-b">
        <div className="main-container py-4">
          <div className="flex max-w-2xl flex-col gap-4 px-4 md:flex-row">
            <div className="flex-1">
              <Popover open={projectOpen} onOpenChange={setProjectOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={projectOpen}
                    className="bg-background w-full justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      {selectedProjectSlug
                        ? projectList?.find(
                            (proj) => proj.slug === selectedProjectSlug,
                          )?.projectName || projectData?.name
                        : "Select project type"}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="bg-background z-50 w-full border p-0"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Search project types..." />
                    <CommandList>
                      <CommandEmpty>No project type found.</CommandEmpty>
                      <CommandGroup>
                        {projectList?.map((projectType) => (
                          <CommandItem
                            key={projectType.slug}
                            value={projectType.projectName}
                            onSelect={() => {
                              setSelectedProjectSlug(projectType.slug);
                              setProjectOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedProjectSlug === projectType.slug
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <Calculator className="h-4 w-4" />
                              {projectType.projectName}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex-1">
              <Popover open={locationOpen} onOpenChange={setLocationOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={locationOpen}
                    className="w-full justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {selectedLocation
                        ? LOCATIONS.find(
                            (loc) => loc.value === selectedLocation,
                          )?.label || locationName
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
                        {LOCATIONS.map((locationItem) => (
                          <CommandItem
                            key={locationItem.value}
                            value={locationItem.label}
                            onSelect={() => {
                              setSelectedLocation(locationItem.value);
                              setLocationOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedLocation === locationItem.value
                                  ? "opacity-100"
                                  : "opacity-0",
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <MapPin className="w- h-4" />
                              {locationItem.label}
                            </div>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={handleUpdate}
              disabled={!selectedProjectSlug || !selectedLocation}
            >
              <Calculator className="mr-2 h-4 w-4" />
              Update
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container py-8">
        <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-3">
          {/* Calculator */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Estimate Breakdown
                </CardTitle>
                <p className="text-aliceBlue text-sm">
                  Add all required items to calculate the estimated cost for the
                  completed work.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Materials Section */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-red-500">
                      ✓ Materials
                    </h3>
                    <span className="font-semibold">
                      {formatCurrency(materialCosts)}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {projectData?.materials.map((material) => {
                      const quantityPerUnit =
                        materialQuantities[material.name] ||
                        material.quantity ||
                        1;
                      const totalQuantity = quantityPerUnit * sizeMultiplier;
                      const swappedMaterial = swappedMaterials[material.name];
                      const avgPrice = getMaterialPrice(
                        material,
                        swappedMaterial,
                      );
                      const materialCost = avgPrice * totalQuantity;

                      return (
                        <div
                          key={material.name}
                          className="bg-shutter flex items-center justify-between rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <Checkbox
                              checked={materialStates[material.name] || false}
                              onCheckedChange={(checked) =>
                                setMaterialStates((prev) => ({
                                  ...prev,
                                  [material.name]: checked as boolean,
                                }))
                              }
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium">
                                  {swappedMaterial
                                    ? swappedMaterial.name
                                    : material.name}
                                </p>
                                <LowesMaterialSwap
                                  materialName={material.name}
                                  currentPrice={{
                                    low: material.lowPrice,
                                    high: material.highPrice,
                                  }}
                                  userZipCode={
                                    LOCATIONS.find(
                                      (loc) => loc.value === location,
                                    )?.zip || "10001"
                                  }
                                  onMaterialSwapped={(newMaterial) =>
                                    handleMaterialSwapped(
                                      material.name,
                                      newMaterial,
                                    )
                                  }
                                  swappedMaterial={swappedMaterial}
                                />
                              </div>
                              {swappedMaterial ? (
                                <div className="space-y-2">
                                  <p className="text-sm font-medium text-green-500">
                                    ${swappedMaterial.price.toFixed(2)}{" "}
                                    {material.unit} (from Lowe's)
                                  </p>
                                </div>
                              ) : (
                                <p className="text-aliceBlue text-sm">
                                  {formatCurrency(material.lowPrice)} -{" "}
                                  {formatCurrency(material.highPrice)}{" "}
                                  {material.unit}
                                </p>
                              )}
                              <p className="text-xs text-blue-400">
                                Total needed:{" "}
                                {totalQuantity % 1 === 0
                                  ? totalQuantity.toFixed(0)
                                  : totalQuantity.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {swappedMaterial || material?.lowesUrl ? (
                              <div className="flex min-w-[120px] flex-col items-center gap-2">
                                <span className="text-right font-medium">
                                  {formatCurrency(materialCost)}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    window.open(
                                      swappedMaterial?.url ||
                                        material?.lowesUrl,
                                      "_blank",
                                    )
                                  }
                                  className="bg-pestering border-pestering h-7 px-3 text-xs hover:scale-95"
                                >
                                  <ShoppingCart className="mr-1 h-3 w-3" />
                                  Buy at Lowe's
                                </Button>
                              </div>
                            ) : (
                              <span className="min-w-[100px] text-right font-medium">
                                {formatCurrency(materialCost)}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Labor Section */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-red-500">
                        ✓ Labor
                      </h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 cursor-help text-red-500" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>
                              Labor rates are fetched live, using an average of
                              Contractor+ and BLS.gov data. To learn more, check
                              out our{" "}
                              <Link
                                href="/resources/US-construction-labor-rates"
                                className="text-blue-600 underline hover:text-blue-700"
                              >
                                Labor Rate Index
                              </Link>
                              .
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="font-semibold">
                      {formatCurrency(dataLaborRates || 0)}
                    </span>
                  </div>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="text-primary h-8 w-8 animate-spin" />
                    </div>
                  ) : (
                    <div className="bg-shutter rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-aliceBlue flex items-center gap-3">
                          <Checkbox checked={true} disabled />
                          <div>
                            <p className="font-medium">
                              Labor to {projectData?.name}
                            </p>
                            <p className="text-aliceBlue text-sm">
                              {/* {formatCurrency(projectData?.laborRate || 0)}/hr ×{" "} */}
                              {formatCurrency(dataLaborRates || 0)}/hr ×{" "}
                              {(
                                (projectData?.laborHours || 0) * sizeMultiplier
                              ).toFixed(1)}{" "}
                              hrs
                            </p>
                          </div>
                        </div>
                        <span className="font-medium">
                          {formatCurrency(
                            dataLaborRates *
                              (projectData?.laborHours || 0) *
                              sizeMultiplier,
                          )}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Totals */}
                <div className="border-stiletto space-y-2 border-t pt-4">
                  <div className="flex justify-between">
                    <span>Costs:</span>
                    <span className="font-semibold">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Markup ({markupPercentage}%):</span>
                    <span className="font-semibold">
                      {formatCurrency(markupAmount)}
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="border-stiletto grid grid-cols-1 gap-4 border-t pt-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="project-size">
                      {projectData?.inputField.name}
                    </Label>
                    <div className="flex">
                      <Input
                        id="project-size"
                        type="number"
                        value={inputValue}
                        min={projectData?.inputField.defaultValue}
                        onChange={(e) => {
                          const newValue =
                            e.target.value === "" ? 0 : Number(e.target.value);
                          setInputValue(newValue);
                        }}
                        onBlur={(e) => {
                          const newValue =
                            e.target.value === "" ? 0 : Number(e.target.value);
                          const minValue =
                            projectData?.inputField.defaultValue || 0;
                          if (newValue < minValue) {
                            setInputValue(minValue);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const newValue = Number(e.currentTarget.value) || 0;
                            const minValue =
                              projectData?.inputField.defaultValue || 0;
                            if (newValue < minValue) {
                              setInputValue(minValue);
                            }
                          }
                        }}
                        className="rounded-r-none"
                      />
                      <div className="rounded-l-none rounded-r-md border-l-0 border-red-500 bg-red-500 px-3 py-2 text-sm text-nowrap">
                        {projectData?.inputField.unit}
                      </div>
                    </div>
                    <p className="text-aliceBlue mt-1 text-xs">
                      Minimum: {projectData?.inputField.defaultValue}{" "}
                      {projectData?.inputField.unit}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="markup">Contractor Markup</Label>
                    <div className="flex">
                      <Input
                        id="markup"
                        type="number"
                        value={markupPercentage}
                        onChange={(e) =>
                          setMarkupPercentage(
                            e.target.value === "" ? 0 : Number(e.target.value),
                          )
                        }
                        className="rounded-r-none"
                      />
                      <div className="rounded-l-none rounded-r-md border-l-0 border-red-500 bg-red-500 px-3 py-2 text-sm">
                        %
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Avg. cost in {displayLocationName}</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="mb-4 flex items-center justify-center">
                    <Loader2 className="text-primary h-8 w-8 animate-spin" />
                  </div>
                ) : (
                  <>
                    <div className="mb-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-red-500">
                        {formatCurrency(totalCost)}
                      </div>
                      <p className="text-aliceBlue text-sm">
                        Avg. cost per {projectData?.inputField.unit}:{" "}
                        {formatCurrency(totalCost / inputValue)}
                      </p>
                    </div>
                    <div className="mb-6 space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Contractor Markup:</span>
                        <span className="font-semibold">
                          ${markupAmount.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* CTA */}
                <div className="rounded-lg bg-gradient-to-br from-black via-gray-900 to-black p-4 text-center">
                  <h4 className="mb-2 font-semibold">
                    Contractor+ is the OS for build and service contractors
                  </h4>
                  <Button
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() =>
                      window.open(
                        `https://contractorplus.onelink.me/ekwH/homebuttons?pid=web&utm_source=web&utm_medium=resources&utm_campaign=constructioncosts&utm_content=${projectData?.name}&deep_link_value=${projectData?.name}`,
                        "_blank",
                      )
                    }
                  >
                    <span className="hidden sm:inline">Get started FREE</span>
                    <span className="sm:hidden">Download Free App</span>
                  </Button>
                </div>

                {/* Thumbtack Lead Capture Widget */}
                <ThumbTackWidget
                  // projectName={projectData?.name || ""}
                  projectType={projectSlug!}
                  // zipCode={LOCATIONS.find((loc) => loc.value === location)?.zip}
                  projectValues={projectValues}
                  location={location!}
                  projectName={projectData?.name}
                  zipCodeValue={zipCodeValue}
                  zipCode={zipCode}
                  setZipCodeValue={setZipCodeValue}
                  isZipCodeManuallyChanged={isZipCodeManuallyChanged}
                  setIsZipCodeManuallyChanged={setIsZipCodeManuallyChanged}
                  response={response}
                  isLoading={thumbtackLoading}
                  ip={ip}
                  setIp={setIp}
                  isIpReady={isIpReady}
                  setIsIpReady={setIsIpReady}
                  thumbtackRefresh={thumbtackRefresh}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Educational Content */}
        <div className="mt-12 space-y-8">
          {/* Main Overview */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-aliceBlue leading-relaxed">
                The cost to {projectData?.name.toLowerCase()} in{" "}
                {displayLocationName} typically ranges from $
                {(totalCost * 0.7).toFixed(2)} to $
                {(totalCost * 1.4).toFixed(2)}, including both materials and
                professional labor. Factors affecting the final price include
                project scope, material quality, local {displayLocationName}{" "}
                labor rates, site accessibility, and any necessary permits or
                inspections required by local building codes. Additional
                expenses may include site preparation, debris removal, and any
                structural modifications needed to accommodate the new
                installation.
              </p>
            </CardContent>
          </Card>

          <TimelineSection
            projectSlug={projectSlug!}
            location={location!}
            projectName={projectData?.name || ""}
            projectValues={projectValues}
          />

          <FAQSection
            projectSlug={projectSlug!}
            location={location!}
            projectName={projectData?.name || ""}
            projectValues={projectValues}
          />

          <ContractorFAQSection
            location={location!}
            projectType={projectSlug!}
            // zipCode={LOCATIONS.find((loc) => loc.value === location)?.zip}
            zipCode={zipCodeValue}
            projectValues={projectValues}
            response={response}
            thumbtackLoading={thumbtackLoading}
          />

          <PopularProjectTypes
            currentProjectSlug={projectSlug!}
            cityName={displayLocationName}
            currentLocation={location!}
            projectList={projectList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCostCalculator;
