import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Calendar,
  HelpCircle,
  Loader2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { searchThumbtackBusinesses } from "@/services/resource/thumbtackService";
import { ProjectDetail } from "@/types/resources/projectDetail";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type ThumbtackResponse = Awaited<
  ReturnType<typeof searchThumbtackBusinesses>
>["data"];

interface ContractorFAQSectionProps {
  location: string;
  projectType: string;
  zipCode?: string;
  projectValues?: ProjectDetail;
  response?: ThumbtackResponse;
  thumbtackLoading: boolean;
}

// Define proper types for business data
interface Business {
  businessID: string;
  businessName: string;
  businessImageURL: string;
  businessIntroduction: string;
  rating: number;
  numberOfReviews: number;
  yearsInBusiness: string;
  numberOfHires: string;
  widgets: {
    requestFlowURL: string;
  };
  [key: string]: unknown;
}

const ContractorCardSkeleton = () => (
  <div className="border-border flex animate-pulse flex-col gap-4 rounded-lg border p-4 sm:flex-row">
    <div className="flex flex-1 gap-4">
      {/* Avatar skeleton */}
      <div className="flex-shrink-0">
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>
      </div>

      {/* Content skeleton */}
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div className="h-5 w-48 rounded bg-gray-200"></div>
          <div className="h-8 w-24 rounded-full bg-gray-200"></div>
        </div>

        {/* Rating skeleton */}
        <div className="mb-2 flex items-center gap-2">
          <div className="h-4 w-8 rounded bg-gray-200"></div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 rounded bg-gray-200"></div>
            ))}
          </div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>

        {/* Experience info skeleton */}
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm">
          <div className="h-4 w-24 rounded bg-gray-200"></div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>

        {/* Description skeleton */}
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-3/4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
);

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />,
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />,
      );
    } else {
      stars.push(<Star key={i} className="h-4 w-4 text-gray-300" />);
    }
  }

  return stars;
};

const formatProjectType = (projectType: string): string => {
  return projectType.replace(/-/g, " ").toLowerCase();
};

const formatLocationName = (location: string): string => {
  if (location === "national-average") return "your area";

  // Remove state abbreviation (e.g., "-ca", "-ny", "-tx") and format city name
  const cityOnly = location.replace(/-[a-z]{2}$/i, ""); // Remove state abbreviation at the end

  // Replace hyphens with spaces and capitalize each word
  return cityOnly
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const ContractorFAQSection: React.FC<ContractorFAQSectionProps> = ({
  location,
  projectType,
  zipCode,
  projectValues,
  response,
  thumbtackLoading,
}) => {
  // const payload = {
  //   categoryID: matchedThumbtack?.category_pk,
  //   userQuery: matchedThumbtack?.projectName,
  //   zipCode: zipCode,
  // };

  // const {
  //   data: allBusinessData = [],
  //   isLoading,
  //   isError,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["thumbtackSearch", payload],
  //   queryFn: async () => {
  //     const data = await searchThumbtackBusinesses(payload);
  //     return getTopBusinesses(data?.data || []);
  //   },
  //   enabled: !!payload.categoryID,
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: false,
  // });

  const [visibleCount, setVisibleCount] = useState(3);
  const businessData = response?.data?.slice(0, visibleCount);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedContractorUrl, setSelectedContractorUrl] = useState("");
  const [iframeLoading, setIframeLoading] = useState(true);
  const locationName = formatLocationName(location);
  const formattedProjectType = formatProjectType(projectType);

  useEffect(() => {
    setVisibleCount(3); // Reset visible count when location changes
  }, [location]);

  useEffect(() => {
    const handleMessage = (event: any) => {
      // More generic approach - listen for any close-related messages
      const message = event.data;

      if (
        typeof message === "string" &&
        message.toLowerCase().includes("close")
      ) {
        setIsDialogOpen(false);
      } else if (
        typeof message === "object" &&
        (message.action === "close" ||
          message.type === "close" ||
          message.event === "close")
      ) {
        setIsDialogOpen(false);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // Don't render if it's national average
  // if (location === "national-average") {
  //   return null;
  // }

  const handleGetQuote = (data: string) => {
    if (!data) return;
    const urlObj = new URL(data, window.location.origin);

    // Use the current zipCodeValue
    urlObj.searchParams.set("zip_code", zipCode || "");
    setIframeLoading(true);
    setSelectedContractorUrl(urlObj.toString());
    setIsDialogOpen(true);
    // setSelectedContractorUrl(contractorName);
    setIframeLoading(true);
    setIsDialogOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, response?.data?.length));
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <>
      {response?.data?.length > 0 && (
        <Card className="mt-8 w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Who are the best contractors in {locationName} to{" "}
              {formattedProjectType}?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Header Section */}
              <div>
                <h3 className="text-foreground mb-1 text-lg font-semibold">
                  Recommended pros
                </h3>
                <p className="text-aliceBlue text-sm">
                  These pros are highly rated and have upcoming availability in{" "}
                  {zipCode || "your area"}.
                </p>
              </div>

              {/* Loading State */}
              {thumbtackLoading ? (
                <div className="space-y-6">
                  {/* Circular loader at the top */}
                  <div className="flex items-center justify-center py-8">
                    <div className="flex items-center gap-3">
                      <Loader2 className="text-primary h-6 w-6 animate-spin" />
                      <span className="text-aliceBlue text-sm">
                        Finding the best contractors in your area...
                      </span>
                    </div>
                  </div>

                  {/* Shimmer loading cards */}
                  {[...Array(3)].map((_, index) => (
                    <ContractorCardSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {businessData?.map((contractor: any) => (
                    <div
                      key={contractor?.businessID}
                      className="border-border hover:bg-muted/20 flex flex-col gap-4 rounded-lg border p-4 transition-colors sm:flex-row"
                    >
                      <div className="flex flex-1 gap-4">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full">
                            <img
                              src={contractor?.businessImageURL}
                              alt={contractor?.businessName}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1">
                          <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                            <h4 className="text-foreground text-base font-semibold">
                              {contractor?.businessName}dfdf
                            </h4>
                            <Button
                              onClick={() =>
                                handleGetQuote(
                                  contractor?.widgets?.requestFlowURL,
                                )
                              }
                              className="self-start rounded-full bg-black px-6 py-2 text-white hover:bg-gray-800"
                            >
                              Get a quote
                            </Button>
                          </div>

                          {/* Rating and Reviews */}
                          <div className="mb-2 flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {contractor?.rating?.toFixed(2)}
                            </span>
                            <div className="flex items-center">
                              {renderStars(contractor?.rating)}
                            </div>
                            <span className="text-aliceBlue text-sm">
                              ({contractor?.numberOfReviews} reviews)
                            </span>
                          </div>

                          {/* Experience Info */}
                          <div className="text-aliceBlue mb-3 flex flex-wrap items-center gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {contractor?.yearsInBusiness}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {contractor?.numberOfHires}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-aliceBlue text-sm leading-relaxed">
                            "{contractor?.businessIntroduction}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Contractors List */}
              {/* {!thumbtackLoading && (
            )} */}

              {/* Load More Button */}
              {!thumbtackLoading && visibleCount < response?.data?.length && (
                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    onClick={handleLoadMore}
                    className="rounded-full border-2 px-8 py-2"
                  >
                    Load more
                  </Button>
                </div>
              )}

              {/* Footer */}
              <div className="border-border border-t py-6">
                <div className="text-aliceBlue flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
                  <div className="flex items-center gap-2">
                    <span>Powered by Thumbtack</span>
                    <img
                      src="/images/svg/thumbtach.svg"
                      alt="Thumbtack"
                      className="h-4 rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-blue-600" />
                    <span>Verified & background-checked professionals</span>
                  </div>
                </div>
                <div className="text-aliceBlue mt-2 text-center text-xs sm:text-left">
                  {/* By clicking "Get a quote", you agree to Contractor+'s Terms and
                Conditions and Privacy Policy as well as Thumbtack's Terms and
                Conditions and Privacy Policy */}
                  <div className="text-aliceBlue mt-2 text-center text-xs sm:text-left">
                    By clicking "Get a quote", you agree to Contractor+'s Terms
                    and Conditions and Privacy Policy as well as{" "}
                    <a
                      href="https://www.thumbtack.com/terms/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary underline"
                    >
                      Thumbtack's Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.thumbtack.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quote Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="h-[80vh] w-[90vw] max-w-4xl p-0 [&>button]:hidden">
          <VisuallyHidden>
            <DialogHeader className="">
              <DialogTitle className="flex items-center justify-between">
                <span>Get a quote from a vetted PRO</span>
              </DialogTitle>
              <DialogDescription>
                Share some details and we’ll put you in touch.
              </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <div className="flex-1 p-4 pt-0 lg:p-6">
            {selectedContractorUrl && (
              <div className="relative h-full min-h-[600px] w-full">
                {/* Loading state */}
                {iframeLoading && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-md bg-gray-50">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="text-primary h-8 w-8 animate-spin" />
                      <span className="text-aliceBlue text-sm">
                        Loading Thumbtack...
                      </span>
                    </div>
                  </div>
                )}

                {/* Iframe */}

                <iframe
                  src={selectedContractorUrl}
                  className="h-full min-h-[600px] w-full rounded-md border-0"
                  title="Thumbtack Quote"
                  allow="geolocation; microphone; camera"
                  onLoad={handleIframeLoad}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  width="632px"
                  height="600px"
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContractorFAQSection;
