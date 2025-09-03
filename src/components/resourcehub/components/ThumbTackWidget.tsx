import React, { useState, useEffect, useRef } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Star,
  MapPin,
  Users,
  MessageCircle,
  Shield,
  Loader2,
} from "lucide-react";

import { ProjectDetail } from "@/types/resources/projectDetail";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { searchThumbtackBusinesses } from "@/services/resource/thumbtackService";

type ThumbtackResponse = Awaited<
  ReturnType<typeof searchThumbtackBusinesses>
>["data"][0];

interface ThumbTackWidgetProps {
  projectName: string;
  zipCode: string;
  projectType: string;
  projectValues: ProjectDetail;
  location: string;
  zipCodeValue: string;
  setZipCodeValue: (zip: string) => void;
  isZipCodeManuallyChanged: boolean;
  setIsZipCodeManuallyChanged: (changed: boolean) => void;
  response?: ThumbtackResponse;
  isLoading: boolean;
  ip: string | undefined;
  setIp: (ip: string) => void;
  isIpReady: boolean;
  setIsIpReady: (ready: boolean) => void;
  thumbtackRefresh: () => void;
}

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
  [key: string]: unknown; // to allow other properties
}

export const ThumbTackWidget: React.FC<ThumbTackWidgetProps> = ({
  projectName,
  zipCode,
  projectType,
  projectValues,
  location,
  zipCodeValue,
  setZipCodeValue,
  isZipCodeManuallyChanged = false,
  setIsZipCodeManuallyChanged,
  response,
  isLoading,
  ip,
  setIp,
  isIpReady,
  setIsIpReady,
  thumbtackRefresh,
}) => {
  const [searchTerm, setSearchTerm] = useState(projectName);
  // const [zipCodeValue, setZipCodeValue] = useState(zipCode);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [selectedContractorUrl, setSelectedContractorUrl] = useState("");
  // const [ip, setIp] = useState<string | undefined>("");
  // const [isZipCodeManuallyChanged, setIsZipCodeManuallyChanged] =
  //   useState(false);
  // const [isIpReady, setIsIpReady] = useState(false);

  // Refs to track previous values and prevent unnecessary calls
  const prevLocationRef = useRef<string>("");
  const isInitialMount = useRef(true);

  // Debug effect to track location changes
  useEffect(() => {}, [location]);

  useEffect(() => {
    const handleMessage = (event) => {
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

  // useEffect(() => {
  //   if (
  //     location &&
  //     (isInitialMount.current || prevLocationRef.current !== location)
  //   ) {
  //     setIsZipCodeManuallyChanged(false);
  //     setIsIpReady(false);
  //     setIp(""); // Reset IP to ensure fresh fetch

  //     getUserIp()
  //       .then((ipAddress) => {
  //         setIp(ipAddress);
  //         setIsIpReady(true);
  //       })
  //       .catch((error) => {
  //         setIsIpReady(true);
  //       });

  //     prevLocationRef.current = location;
  //     isInitialMount.current = false;
  //   }
  // }, [location]);

  // const matchedThumbtack =
  //   projectValues && projectValues.slug === projectType
  //     ? projectValues
  //     : undefined;

  // const payload = React.useMemo(() => {
  //   if (!matchedThumbtack?.category_pk) return null;

  //   const basePayload = {
  //     categoryID: matchedThumbtack.category_pk,
  //     userQuery: matchedThumbtack.projectName,
  //   };

  //   if (isZipCodeManuallyChanged && zipCodeValue.length === 5) {
  //     return { ...basePayload, zipCode: zipCodeValue };
  //   }

  //   // If IP is available and ready, use IP
  //   if (ip && isIpReady) {
  //     return { ...basePayload, ip: ip };
  //   }

  //   return null;
  // }, [
  //   matchedThumbtack?.category_pk,
  //   matchedThumbtack?.projectName,
  //   isZipCodeManuallyChanged,
  //   zipCodeValue,
  //   ip,
  //   isIpReady,
  // ]);

  // const {
  //   data: response,
  //   isLoading,
  //   isError,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["thumbtackGetQuote", payload, location], // Add location to query key
  //   queryFn: async () => {
  //     const data = await searchThumbtackBusinesses(payload);
  //     return {
  //       data: data?.data?.[0],
  //       metadata: data?.metadata,
  //     }; // return just the first business
  //   },
  //   enabled: !!payload, // Only enable when we have a valid payload
  //   refetchOnMount: false, // Prevent automatic refetch on mount
  //   refetchOnWindowFocus: false,
  //   staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  // });

  // Update zipCode from API response metadata (only when using IP-based search)
  useEffect(() => {
    // Check multiple possible locations for zip code in response
    const zipCodeFromResponse =
      response?.metadata?.zipCode ||
      response?.data?.metadata?.zipCode ||
      response?.data?.metaData?.zipCode;
    if (zipCodeFromResponse && !isZipCodeManuallyChanged && ip) {
      setZipCodeValue(zipCodeFromResponse);
      // thumbtackRefresh();
    }
  }, [response, isZipCodeManuallyChanged, ip]);

  // useEffect(() => {
  //   if (isIpReady && ip && !isZipCodeManuallyChanged) {
  //     // thumbtackRefresh();
  //   }
  // }, [isIpReady, ip, isZipCodeManuallyChanged]);

  // Update state when props change (e.g., when user navigates to different project/location)
  useEffect(() => {
    setSearchTerm(projectName);
  }, [projectName]);

  // Update zipCodeValue when zipCode prop changes (but don't trigger manual flag)
  useEffect(() => {
    if (!isZipCodeManuallyChanged) {
      setZipCodeValue(zipCode);
    }
  }, [zipCode, isZipCodeManuallyChanged]);

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setZipCodeValue(value);

    if (!isZipCodeManuallyChanged) {
      setIsZipCodeManuallyChanged(true);
    }

    // Only refetch if ZIP is exactly 5 characters
    if (value.length === 5) {
      // The query will automatically refetch due to payload dependency change
    }
  };

  const handleGetQuote = (data: Business) => {
    if (!data?.widgets?.requestFlowURL) return;

    const urlObj = new URL(
      data?.widgets?.requestFlowURL,
      window?.location?.origin,
    );

    // Use the current zipCodeValue
    urlObj.searchParams.set("zip_code", zipCodeValue || "");

    setIframeLoading(true);
    setSelectedContractorUrl(urlObj.toString());
    setIsDialogOpen(true);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };

  return (
    <>
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="space-y-4 text-center">
            <h3 className="text-foreground text-lg font-semibold">
              Need a contractor to {projectName?.toLowerCase()}?
            </h3>
            <p className="text-aliceBlue text-sm">
              Get a free quote from quality, vetted PRO's
            </p>

            {/* Thumbtack Logo */}
            <div className="mb-4 flex items-center justify-center gap-2 invert">
              <img
                src="/lovable-uploads/1bd58006-0f6d-40fe-bd6a-5fcd57aec5ce.png"
                alt="Thumbtack"
                className="h-8"
              />
            </div>

            {/* Search Form */}
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="What service do you need?"
                  className="pr-4"
                  readOnly
                />
              </div>

              <div className="relative">
                <MapPin className="text-aliceBlue absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
                <Input
                  type="text"
                  value={zipCodeValue}
                  onChange={handleZipChange}
                  placeholder="ZIP code"
                  className="pl-10"
                  maxLength={5}
                />
              </div>

              <Button
                onClick={() => handleGetQuote(response?.data?.[0])}
                className="w-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
                disabled={isLoading || !response}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading...
                  </div>
                ) : (
                  "Get FREE Quote"
                )}
              </Button>
            </div>

            {/* Reviews Information */}
            <div className="border-stiletto border-t pt-6">
              <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
                {/* Trusted Users */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">4.5M+</div>
                    <div className="text-aliceBlue text-xs">Trusted Users</div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">4.9/5</div>
                    <div className="text-aliceBlue text-xs">Star Rating</div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">300k+</div>
                    <div className="text-aliceBlue text-xs">Reviews</div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="text-aliceBlue mt-4 flex items-center justify-center gap-2 text-xs">
                <Shield className="h-4 w-4 text-blue-600" />
                <span>Verified & background-checked professionals</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="h-[80vh] w-[90vw] max-w-4xl p-0 [&>button]:hidden">
          <VisuallyHidden>
            <DialogHeader className="">
              <DialogTitle className="flex items-center justify-between">
                <span>Get a quote from a vetted PRO</span>
              </DialogTitle>
              <DialogDescription>
                Share some details and we'll put you in touch.
              </DialogDescription>
            </DialogHeader>
          </VisuallyHidden>
          <div className="flex-1 p-6 pt-0">
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
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThumbTackWidget;
