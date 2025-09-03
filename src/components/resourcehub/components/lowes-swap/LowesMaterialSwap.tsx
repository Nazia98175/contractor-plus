import { useEffect, useState } from "react";

import { useMaterials } from "@/hooks/use-materials";
import {
  ExternalLink,
  MapPin,
  Package,
  RotateCcw,
  Search,
  ShoppingCart,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { performApiSearch } from "@/services/resource/searchService";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
interface LowesMaterial {
  id: string;
  name: string;
  price: number;
  image: string;
  url: string;
  in_stock: boolean;
  source: string;
}

interface LowesMaterialSwapProps {
  materialName: string;
  currentPrice: { low: number; high: number };
  userZipCode?: string;
  onMaterialSwapped: (newMaterial: LowesMaterial) => void;
  swappedMaterial?: LowesMaterial | null;
}

export const LowesMaterialSwap = ({
  materialName,
  currentPrice,
  userZipCode = "10001",
  onMaterialSwapped,
  swappedMaterial,
}: LowesMaterialSwapProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(materialName);
  const [zipCode, setZipCode] = useState(userZipCode);
  const [searchResults, setSearchResults] = useState<LowesMaterial[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Update zip code when prop changes
  useEffect(() => {
    setZipCode(userZipCode);
  }, [userZipCode]);

  const { handleSearch } = useMaterials();

  const performSearch = async () => {
    setIsSearching(true);
    try {
      const results = await performApiSearch({
        query: searchQuery,
        storeIds: ["lowes-us"],
        includeOutOfStock: false,
        countryCode: "US",
        location: zipCode,
      });

      if (results?.results) {
        setSearchResults(results.results?.lowes || []);
      }

      console.log(results, "API Search Results");
      // const success = await handleSearch({
      //   query: searchQuery,
      //   storeIds: ["lowes-us"],
      //   includeOutOfStock: false,
      //   countryCode: "US",
      //   location: zipCode,
      // });

      // console.log(success, "success");

      // if (success) {
      //   const mockResults: LowesMaterial[] = [];
      //   for (let i = 1; i <= 20; i++) {
      //     const variations = [
      //       { prefix: "Premium", multiplier: 1.4 },
      //       { prefix: "Professional", multiplier: 1.2 },
      //       { prefix: "Standard", multiplier: 1.0 },
      //       { prefix: "Basic", multiplier: 0.8 },
      //       { prefix: "Economy", multiplier: 0.6 },
      //       { prefix: "Heavy Duty", multiplier: 1.3 },
      //       { prefix: "Commercial Grade", multiplier: 1.5 },
      //       { prefix: "Residential", multiplier: 0.9 },
      //     ];

      //     const variation = variations[i % variations.length];
      //     const basePrice = (currentPrice.low + currentPrice.high) / 2;

      //     mockResults.push({
      //       id: `lowes-${Date.now()}-${i}`,
      //       name: `${
      //         variation.prefix
      //       } ${searchQuery} - Model ${String.fromCharCode(65 + (i % 26))}${i}`,
      //       price: Math.round(
      //         basePrice * variation.multiplier * (0.9 + Math.random() * 0.2)
      //       ),
      //       image: "/lovable-uploads/951f0a9e-8bfc-490e-902a-eab26503b030.png",
      //       url: `https://lowes.com/product/example-${i}`,
      //       in_stock: Math.random() > 0.1,
      //       source: "lowes",
      //     });
      //   }
      //   setSearchResults(mockResults);
      // }
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectMaterial = (material: LowesMaterial) => {
    onMaterialSwapped(material);
    setIsOpen(false);
  };

  const handleResetToGeneric = () => {
    onMaterialSwapped(null as any);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 cursor-pointer p-1 transition-colors hover:bg-blue-500/50"
          title={`Swap ${materialName} with real materials from Lowe's`}
        >
          <img
            src="/lovable-uploads/7355b1e0-ad1d-460c-969a-a67fe17a4bb9.png"
            alt="Swap"
            className="pointer-events-none h-6 w-6 object-contain invert"
          />
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-shutter max-h-[90vh] w-[95vw] max-w-4xl overflow-hidden p-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 p-6 pb-5 text-white">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-4 text-xl font-semibold">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/4695cb87-519d-4377-ac06-58e67a3b8c09.png"
                  alt="Lowe's"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  Find Real Materials
                </div>
                <div className="mt-1 text-sm font-normal text-blue-100">
                  Replace "{materialName}" with actual Lowe's products
                </div>
              </div>
            </DialogTitle>
          </div>
        </div>

        {/* Content */}
        <div className="max-h-[calc(90vh-120px)] overflow-auto p-6">
          {/* Search Section */}
          <div className="mb-6">
            <div className="rounded-xl border bg-gray-50 p-4">
              <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="search-query"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <Package className="h-4 w-4 text-gray-500" />
                    Search for Material
                  </Label>
                  <Input
                    id="search-query"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g., toilet, faucet, pipe..."
                    className="border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="zip-code"
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <MapPin className="h-4 w-4 text-gray-500" />
                    Zip Code
                  </Label>
                  <Input
                    id="zip-code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    placeholder="90210"
                    maxLength={5}
                    className="border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <Button
                onClick={performSearch}
                disabled={isSearching || !searchQuery.trim() || !zipCode.trim()}
                className="w-full bg-blue-600 py-2.5 font-medium text-white hover:bg-blue-700 disabled:bg-gray-300"
              >
                <Search className="mr-2 h-4 w-4" />
                {isSearching ? "Searching Lowe's..." : "Search Lowe's Products"}
              </Button>
            </div>
          </div>

          {/* Current Selection */}
          {swappedMaterial && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="flex items-center gap-2 font-semibold text-green-800">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  Currently Selected
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetToGeneric}
                  className="border-green-300 text-xs text-green-700 hover:bg-green-100"
                >
                  <RotateCcw className="mr-1 h-3 w-3" />
                  Reset to Generic
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex-shrink-0 rounded-lg border border-green-200 bg-white p-2">
                  <img
                    src={swappedMaterial.image}
                    alt={swappedMaterial.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-gray-900">
                    {swappedMaterial.name}
                  </p>
                  <p className="text-lg font-bold text-green-500">
                    ${swappedMaterial.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => window.open(swappedMaterial.url, "_blank")}
                  className="flex-shrink-0 bg-blue-600 hover:bg-blue-700"
                >
                  <ShoppingCart className="mr-1 h-4 w-4" />
                  <span className="hidden sm:inline">Buy at Lowe's</span>
                  <span className="sm:hidden">Buy</span>
                </Button>
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Results
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700"
                >
                  {searchResults.length} items found
                </Badge>
              </div>

              <div className="max-h-96 space-y-3 overflow-y-auto pr-2">
                {searchResults.map((material) => (
                  <Card
                    key={material.id}
                    className="border-gray-200 transition-all duration-200 hover:shadow-md"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border bg-gray-50">
                          <img
                            src={material.image}
                            alt={material.name}
                            className="h-full w-full object-contain p-1"
                          />
                          <Badge
                            variant="secondary"
                            className="absolute -top-1 -right-1 bg-blue-600 px-1.5 py-0.5 text-xs text-white"
                          >
                            Lowe's
                          </Badge>
                          {!material.in_stock && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <Badge variant="destructive" className="text-xs">
                                Out of Stock
                              </Badge>
                            </div>
                          )}
                        </div>

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h4
                            className="mb-1 line-clamp-2 text-sm leading-5 font-medium text-gray-900"
                            title={material.name}
                          >
                            {material.name}
                          </h4>
                          <p className="text-xl font-bold text-blue-600">
                            ${material.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-shrink-0 flex-col gap-2 sm:flex-row">
                          <Button
                            size="sm"
                            onClick={() => handleSelectMaterial(material)}
                            disabled={!material.in_stock}
                            className="bg-green-600 px-3 text-xs hover:bg-green-700 disabled:bg-gray-400"
                          >
                            {material.in_stock ? (
                              <>
                                <span className="hidden sm:inline">Select</span>
                                <span className="sm:hidden">Select</span>
                              </>
                            ) : (
                              "Out of Stock"
                            )}
                          </Button>
                          {material.in_stock && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                window.open(material.url, "_blank")
                              }
                              className="border-gray-300 px-3 text-xs"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span className="sr-only">View Product</span>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchResults.length === 0 && !isSearching && searchQuery && (
            <div className="rounded-lg bg-gray-50 py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300/30">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                No results found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or zip code
              </p>
            </div>
          )}

          {/* Initial State */}
          {searchResults.length === 0 && !isSearching && !searchQuery && (
            <div className="rounded-lg bg-gray-50 py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-300/30">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Find Real Materials
              </h3>
              <p className="text-gray-500">
                Search for actual Lowe's products to replace your generic
                materials
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
