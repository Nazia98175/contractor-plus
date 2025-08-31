import { MaterialCard } from "@/components/MaterialCard";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { getStoreById } from "@/services/storeService";

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
                variation.storeName.toLowerCase()
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
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
      <div className="text-center py-20 border rounded-lg bg-muted/20">
        <p className="text-muted-foreground">
          Please select at least one store to search for materials.
        </p>
      </div>
    );
  }

  // If we have no selected stores, prompt the user to select some
  if (!selectedStoreIds || selectedStoreIds.length === 0) {
    return (
      <div className="text-center py-20 border rounded-lg bg-muted/20">
        <p className="text-muted-foreground">
          Please select at least one store to search for materials.
        </p>
      </div>
    );
  }

  const storeNames = Object.keys(storeColumns);
  if (storeNames.length === 0) {
    return (
      <div className="text-center py-20 border rounded-lg bg-muted/20">
        <p className="text-muted-foreground">
          No materials found from the selected stores.
        </p>
      </div>
    );
  }

  // Render a carousel for a store's products
  const renderStoreCarousel = (
    storeName: string,
    products: MaterialVariationWithMeta[]
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
        className="flex flex-col border rounded-lg overflow-hidden h-full"
      >
        <h2 className="text-lg font-semibold mb-2 bg-muted/30 p-3 sticky top-0 backdrop-blur-sm flex justify-between items-center">
          <span>{storeName}</span>
          {isComingSoon && (
            <Badge
              variant="outline"
              className="bg-yellow-50 text-yellow-800 border-yellow-300"
            >
              Coming Soon
            </Badge>
          )}
        </h2>

        {isComingSoon ? (
          <div className="flex-grow flex items-center justify-center p-8 text-center">
            <div className="max-w-xs">
              <p className="text-muted-foreground mb-2">
                {storeName} integration is coming soon.
              </p>
              <p className="text-xs text-muted-foreground">
                We're working hard to bring you products from this retailer.
              </p>
            </div>
          </div>
        ) : products.length > 0 ? (
          <div className="p-3 flex-grow">
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
              <CarouselPrevious className="left-2 bg-red-600 text-white hover:bg-red-700 border-none" />
              <CarouselNext className="right-2 bg-red-600 text-white hover:bg-red-700 border-none" />
            </Carousel>
          </div>
        ) : (
          <div className="text-center py-10 border-t p-3 flex-grow">
            <p className="text-muted-foreground">
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
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Search Results</h2>
        </div>

        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-none">
          {storeNames.map((store) => (
            <button
              key={store}
              onClick={() => setActiveStoreTab(store)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
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
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Search Results</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeNames.map((store) =>
          renderStoreCarousel(store, storeColumns[store])
        )}
      </div>
    </div>
  );
};
