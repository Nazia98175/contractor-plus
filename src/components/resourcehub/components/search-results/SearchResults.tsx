import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMediaQuery } from "@/hooks/use-media-query";
import { getStoreById } from "@/services/resource/storeService";
import { Badge } from "../ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { MaterialCard } from "../MaterialCard";

interface Material {
  id: string;
  name: string;
  variations: MaterialVariation[];
  category: string;
  image: string;
}

interface MaterialVariation {
  storeId: string;
  storeName: string;
  price: number;
  discount: number;
  stock: number;
  storeItemId: string;
  productUrl?: string;
}

// Create a new type that extends MaterialVariation with the material property
interface MaterialVariationWithMeta extends MaterialVariation {
  material: Material;
}

interface SearchResultsProps {
  isSearching: boolean;
  materials: Material[];
  hasSearchQuery: boolean;
  onAddToList: (material: Material, variation: MaterialVariation) => void;
  selectedStoreIds?: string[];
}

// Helper function to format store names properly
const formatStoreName = (storeName: string): string => {
  const storeNameMap: Record<string, string> = {
    lowes: "Lowe's",
    homedepot: "The Home Depot",
    build: "Build.com",
    acehardware: "Ace Hardware",
    menards: "Menards",
    amazon: "Amazon",
  };

  return storeNameMap[storeName.toLowerCase()] || storeName;
};

export const SearchResults = ({
  isSearching,
  materials,
  hasSearchQuery,
  onAddToList,
  selectedStoreIds = [],
}: SearchResultsProps) => {
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [activeStoreTab, setActiveStoreTab] = useState<string | null>(null);
  const [storeColumns, setStoreColumns] = useState<
    Record<string, MaterialVariationWithMeta[]>
  >({});

  // Process materials into columns by store
  useEffect(() => {
    // Always include empty columns for preselected stores
    const storeMap: Record<string, MaterialVariationWithMeta[]> = {};

    // Initialize with empty arrays for selected stores only (maximum 3)
    selectedStoreIds
      .slice(0, 3) // Limit to maximum 3 stores
      .forEach((storeId) => {
        // Check if the store is coming soon
        const storeInfo = getStoreById(storeId);
        const storeName = formatStoreName(storeId.split("-")[0]);
        storeMap[storeName] = [];
      });

    // Now add any materials to the appropriate store columns
    if (materials && materials.length > 0) {
      materials.forEach((material) => {
        if (!material.variations) {
          console.warn("Material has no variations:", material);
          return;
        }

        material.variations.forEach((variation) => {
          const storeName = formatStoreName(variation.storeName);

          // Only include stores that are selected
          if (
            selectedStoreIds.some(
              (id) =>
                id.split("-")[0].toLowerCase() ===
                variation.storeName.toLowerCase(),
            )
          ) {
            if (!storeMap[storeName]) {
              storeMap[storeName] = [];
            }

            // Create a new object that extends the variation with the material reference
            storeMap[storeName].push({
              ...variation,
              storeName: storeName, // Use formatted store name
              material: material,
            });
          }
        });
      });
    }

    setStoreColumns(storeMap);

    // Set default active tab for mobile
    if (isMobile && Object.keys(storeMap).length > 0) {
      setActiveStoreTab(Object.keys(storeMap)[0]);
    } else {
      setActiveStoreTab(null);
    }
  }, [materials, isMobile, selectedStoreIds]);

  if (isSearching) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
        <span className="ml-2 text-lg font-medium">Searching materials...</span>
      </div>
    );
  }

  // If we haven't searched yet, don't show any results UI
  if (!hasSearchQuery) {
    return null;
  }

  // If searching and no selectedStoreIds, show an error
  if (
    (!materials || materials.length === 0) &&
    hasSearchQuery &&
    !selectedStoreIds?.length
  ) {
    return (
      <div className="bg-muted/20 rounded-lg border py-20 text-center">
        <p className="text-aliceBlue">
          Please select at least one store to search for materials.
        </p>
      </div>
    );
  }

  // If we have no selected stores, prompt the user to select some
  if (!selectedStoreIds || selectedStoreIds.length === 0) {
    return (
      <div className="bg-muted/20 rounded-lg border py-20 text-center">
        <p className="text-aliceBlue">
          Please select at least one store to search for materials.
        </p>
      </div>
    );
  }

  const storeNames = Object.keys(storeColumns);
  if (storeNames.length === 0) {
    return (
      <div className="bg-muted/20 rounded-lg border py-20 text-center">
        <p className="text-aliceBlue">
          No materials found from the selected stores.
        </p>
      </div>
    );
  }

  // Render a carousel for a store's products
  const renderStoreCarousel = (
    storeName: string,
    products: MaterialVariationWithMeta[],
  ) => {
    // Check if this is a "coming soon" store
    const storeId = selectedStoreIds.find((id) => {
      const name = formatStoreName(id.split("-")[0]);
      return name === storeName;
    });

    const isComingSoon = storeId ? getStoreById(storeId)?.comingSoon : false;

    return (
      <div
        key={storeName}
        className="flex h-full flex-col overflow-hidden rounded-lg border"
      >
        <h2 className="bg-muted/30 sticky top-0 mb-2 flex items-center justify-between p-3 text-lg font-semibold backdrop-blur-sm">
          <span>{storeName}</span>
          {isComingSoon && (
            <Badge
              variant="outline"
              className="border-yellow-300 bg-yellow-50 text-yellow-800"
            >
              Coming Soon
            </Badge>
          )}
        </h2>

        {isComingSoon ? (
          <div className="flex flex-grow items-center justify-center p-8 text-center">
            <div className="max-w-xs">
              <p className="text-aliceBlue mb-2">
                {storeName} integration is coming soon.
              </p>
              <p className="text-aliceBlue text-xs">
                We're working hard to bring you products from this retailer.
              </p>
            </div>
          </div>
        ) : products.length > 0 ? (
          <div className="flex-grow p-3">
            <Carousel className="w-full">
              <CarouselContent>
                {products.slice(0, 10).map((item) => {
                  const material = item.material;
                  const storeId =
                    item.storeItemId && item.storeItemId !== "0"
                      ? item.storeItemId
                      : "";

                  return (
                    <CarouselItem key={`${material.id}-${item.storeId}`}>
                      <MaterialCard
                        id={material.id}
                        name={material.name}
                        price={item.price}
                        store={item.storeName}
                        storeId={storeId}
                        image={material.image}
                        stock={item.stock}
                        onAddToList={() => onAddToList(material, item)}
                        productUrl={item.productUrl}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="left-2 border-none bg-red-600 text-white hover:bg-red-700" />
              <CarouselNext className="right-2 border-none bg-red-600 text-white hover:bg-red-700" />
            </Carousel>
          </div>
        ) : (
          <div className="flex-grow border-t p-3 py-10 text-center">
            <p className="text-aliceBlue">
              No materials found for {storeName}.
            </p>
          </div>
        )}
      </div>
    );
  };

  // Mobile view with tabs
  if (isMobile) {
    return (
      <div className="w-full space-y-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Search Results</h2>
        </div>

        <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2">
          {storeNames.map((store) => (
            <button
              key={store}
              onClick={() => setActiveStoreTab(store)}
              className={`rounded-md px-4 py-2 whitespace-nowrap ${
                activeStoreTab === store
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {store}
            </button>
          ))}
        </div>

        {activeStoreTab &&
          renderStoreCarousel(activeStoreTab, storeColumns[activeStoreTab])}
      </div>
    );
  }

  // Desktop and tablet view
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Search Results</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {storeNames.map((store) =>
          renderStoreCarousel(store, storeColumns[store]),
        )}
      </div>
    </div>
  );
};
