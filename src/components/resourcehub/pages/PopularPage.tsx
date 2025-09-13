import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { CategorySelector } from "../components/popular/CategorySelector";
import { PopularItemsList } from "../components/popular/PopularItemsList";
import { mockPopularItems } from "../components/popular/MockData";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { PageHeader } from "../components/popular/PageHeader";
import Link from "next/link";

const PopularPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? mockPopularItems
      : mockPopularItems.filter((item) => item.category === activeTab);

  return (
    <div className="main-container py-8 md:px-6">
      {/* Breadcrumb Navigation */}

      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-alice text-sm font-medium hover:text-red-500"
            >
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/compare"
              className="text-alice text-sm font-medium hover:text-red-500"
            >
              Material Comparison Search
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Popular Searches
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PageHeader
        title="Most Popular Material Searches"
        description="Discover what construction materials other professionals are searching for. Updated weekly based on user search volume."
      />

      {/* Return to Compare CTA - Updated with the new text */}
      <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-50 p-4">
        <div>
          <h3 className="font-medium">
            Find the best pricing on your construction materials!
          </h3>
          <p className="text-alice text-sm">
            Compare up to 3 suppliers at a time.
          </p>
        </div>
        <Link href="/compare">
          <Button className="gap-2">
            <Search className="h-4 w-4" />
            <span>Compare Materials</span>
          </Button>
        </Link>
      </div>

      <Card className="bg-card rounded-lg border shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Trending Materials</CardTitle>
              <CardDescription>
                Updated weekly based on search frequency
              </CardDescription>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>This Week</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <CategorySelector activeTab={activeTab} setActiveTab={setActiveTab} />
          <PopularItemsList items={filteredItems} />
        </CardContent>
        <CardFooter className="pt-0 pb-4"></CardFooter>
      </Card>
    </div>
  );
};

export default PopularPage;
