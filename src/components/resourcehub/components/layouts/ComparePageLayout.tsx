import { CirclePercent, BarChart3 } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { LoginPrompt } from "../LoginPrompt";
import { FlatSearchResults } from "../flat-search-results/FlatSearchResults";
import Link from "next/link";
import { FormValues, SearchForm } from "../search";

interface SelectedItem {
  id: string;
  materialId: string;
  name: string;
  price: number;
  store: string;
  storeItemId: string;
  quantity: number;
  stock: number;
  image: string;
  discount: number;
  productUrl?: string;
}

interface FlatMaterial {
  id: string;
  name: string;
  source: string;
  category: string;
  price: number;
  image: string;
  url: string;
  in_stock: boolean;
}

interface ComparePageLayoutProps {
  isSearching: boolean;
  materials: Record<string, FlatMaterial[]>;
  selectedItems: SelectedItem[];
  searchCount: number;
  hasSearchQuery: boolean;
  isLoggedIn: boolean;
  onSearch: (values: FormValues) => Promise<boolean> | boolean;
  onAddToList: (material: FlatMaterial) => void;
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onSaveToAccount: () => void;
  onExport: (format: "pdf" | "excel" | "csv") => void;
  defaultSearchValues?: any;
  selectedStoreIds?: string[];
}

export const ComparePageLayout = ({
  isSearching,
  materials,
  selectedItems,
  searchCount,
  hasSearchQuery,
  isLoggedIn,
  onSearch,
  onAddToList,
  onRemoveItem,
  onUpdateQuantity,
  onSaveToAccount,
  onExport,
  defaultSearchValues,
  selectedStoreIds,
}: ComparePageLayoutProps) => {
  return (
    <>
      <div className="main-container">
        <div className="grid grid-cols-1 gap-8 px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/resources">Resources</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Material Comparison</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* SEO-optimized header section with improved design and icon */}
          <div className="text-left">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 shadow-sm">
                <CirclePercent className="h-6 w-6 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold">
                Material Price Comparison Tool
              </h1>
            </div>
            <p className="text-aliceBlue ml-[60px] max-w-3xl">
              Find and compare construction materials, building supplies and
              home improvement products across major suppliers like Lowe's, Home
              Depot, Build.com, and more to get the best prices for your
              projects.
            </p>
          </div>

          {/* Free Search Limit Card - Passing 0 instead of searchCount to prevent displaying the count */}
          <LoginPrompt searchCount={0} className="w-full" />

          <SearchForm
            onSearch={onSearch}
            isLoading={isSearching}
            searchCount={0}
            defaultSearchValues={defaultSearchValues}
          />

          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8">
            <FlatSearchResults
              isSearching={isSearching}
              materials={materials || {}}
              hasSearchQuery={hasSearchQuery}
              onAddToList={onAddToList}
              selectedStoreIds={selectedStoreIds}
            />
            {/* <SearchResults
              isSearching={isSearching}
              materials={materials}
              hasSearchQuery={hasSearchQuery}
              onAddToList={onAddToList}
              selectedStoreIds={selectedStoreIds}
            /> */}
          </div>

          {/* SEO-optimized informational content at the bottom */}
          <div className="main-conatiner mt-16">
            <div className="border-stiletto rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold">
                How Our Material Price Comparison Tool Works
              </h2>

              <div className="text-aliceBlue mb-8 space-y-4">
                <p>
                  The Material Price Comparison Tool helps contractors,
                  builders, and DIY enthusiasts find the best prices on
                  construction materials and home improvement products across
                  major suppliers. By comparing prices in real-time, you can
                  save money on your projects and ensure you're getting the most
                  value for your budget.
                </p>

                <h3 className="text-foreground mt-6 text-xl font-semibold">
                  How to Use This Tool:
                </h3>

                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    Enter your search term in the search box (e.g., "drywall",
                    "lumber", "tile")
                  </li>
                  <li>Select up to three stores to compare prices from</li>
                  <li>
                    Review the search results and add items to your comparison
                    list
                  </li>
                  <li>
                    Adjust quantities as needed to match your project
                    requirements
                  </li>
                  <li>
                    Use the export options to save your materials list for
                    future reference
                  </li>
                </ol>

                <p className="mt-4">
                  With access to inventory from top suppliers like Lowe's, Home
                  Depot, Build.com, and Ace Hardware, you can quickly find
                  materials for any project. Our tool makes it easy to compare
                  not just prices, but also availability and specifications
                  across different suppliers, ensuring you make informed
                  purchasing decisions.
                </p>

                <p>
                  Contractors and professionals use this tool daily to save time
                  shopping around for the best deals, allowing them to provide
                  more competitive bids to their clients. Homeowners benefit by
                  finding the most cost-effective materials for their renovation
                  and repair projects.
                </p>
              </div>

              <div className="bg-shutter rounded-lg p-6">
                <h3 className="mb-2 text-xl font-bold">
                  Take Your Material Management to the Next Level
                </h3>

                <p className="mb-4">
                  Contractor+ offers a complete solution for professionals
                  looking to streamline their material ordering process. With
                  our advanced Estimates & Quotes platform, you can:
                </p>

                <ul className="mb-6 list-disc space-y-2 pl-5">
                  <li>
                    Create professional estimates with live pricing from your
                    favorite suppliers
                  </li>
                  <li>
                    Transfer material orders directly to suppliers with a single
                    click
                  </li>
                  <li>Track material costs across all your projects</li>
                  <li>Save time with automated material takeoffs</li>
                  <li>
                    Improve profit margins with better material cost management
                  </li>
                </ul>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="/free-estimate-maker"
                    className="hover:text-glowing text-pestering text-sm duration-300 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More About Contractor+ Estimates & Quotes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer - moved here to display above the global footer */}
      <div className="main-container mx-auto">
        <div className="mx-4 mb-6 rounded-md border border-gray-800 bg-gray-900 px-4 py-8 text-xs text-gray-400">
          <p className="mb-4 font-medium">Legal Disclaimer:</p>
          <p className="mb-2">
            The material comparison pricing search tool provided by Contractor+
            is a free informational resource intended to assist visitors in
            locating and comparing building materials across various suppliers.
            Contractor+ is a registered affiliate partner with suppliers
            including, but not limited to, Lowe's, Build with Ferguson, Ace
            Hardware, Lumber Liquidators, and Amazon. As an affiliate,
            Contractor+ may earn commissions from qualifying purchases made
            through links provided within this comparison index.
          </p>
          <p className="mb-2">
            All product images and trademarks displayed within this pricing
            comparison tool remain the sole and exclusive property of their
            respective suppliers and are used herein solely for identification
            and comparison purposes. Contractor+ makes no claim of ownership or
            endorsement by the suppliers. Pricing, availability, and product
            details are provided "as-is" and are subject to change without
            notice by the respective suppliers. Contractor+ does not guarantee
            the accuracy, completeness, or current availability of any product
            information or pricing displayed herein and shall not be held liable
            for any inaccuracies, discrepancies, or losses arising from the use
            of this tool.
          </p>
          <p>
            By using this comparison pricing tool, you acknowledge and agree to
            these terms. For the most accurate and up-to-date product details,
            pricing, and availability, please refer directly to the individual
            supplier's website.
          </p>
        </div>
      </div>
    </>
  );
};
