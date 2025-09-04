"use client";
import React, { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { Calculator } from "lucide-react";
import { calculators } from "@/data/calculators";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../components/ui/breadcrumb";
import Link from "next/link";
import { CalculatorSearch } from "../components/calculators/CalculatorSearch";
import { ViewToggle } from "../components/calculators/ViewToggle";
import { CategoryTabs } from "../components/calculators/CategoryTabs";
import { SearchResults } from "../components/calculators/SearchResults";
import { CalculatorGrid } from "../components/calculators/CalculatorGrid";
import { EducationalContent } from "../components/calculators/EducationalContent";

export default function CalculatorsPage() {
  useMetaTags({
    title: "Free Construction & Contractor Calculators | Contractor+",
    description:
      "Access our free construction calculators for contractors. Estimate costs, materials, and pricing for your next project with our easy-to-use calculators.",
    keywords:
      "construction calculators, contractor calculators, building cost calculator, material estimator, pricing calculator for contractors",
  });

  const [activeTab, setActiveTab] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "categories">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCalculators, setFilteredCalculators] = useState<any[]>([]);

  // Create an "All" category that includes calculators from all categories
  const allCalculators = calculators.flatMap((category) =>
    category.calculators.map((calc) => ({
      ...calc,
      category: category.name,
    })),
  );

  // Add "All" as the first category
  const categoriesWithAll = [
    {
      id: "all",
      name: "All Calculators",
      description: "All available calculators",
      icon: <Calculator />,
      calculators: allCalculators,
    },
    ...calculators,
  ];

  // Handle search functionality
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    if (!value.trim()) {
      setFilteredCalculators([]);
      return;
    }

    // Filter based on search term
    const filtered = allCalculators.filter(
      (calc) =>
        calc.name.toLowerCase().includes(value.toLowerCase()) ||
        calc.description.toLowerCase().includes(value.toLowerCase()),
    );

    // Remove duplicates by ID
    const uniqueCalculators = Array.from(
      new Map(filtered.map((calc) => [calc.id, calc])).values(),
    );

    setFilteredCalculators(uniqueCalculators);
  };

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setActiveTab(categoryId);
  };

  // Handle view mode change
  const handleViewModeChange = (mode: "grid" | "categories") => {
    setViewMode(mode);
    if (mode === "grid") {
      setActiveTab("all");
    }
  };

  // Get the current category's calculators
  const getCurrentCategoryCalculators = () => {
    if (activeTab === "all") {
      return allCalculators;
    }

    const category = calculators.find((cat) => cat.id === activeTab);
    return category ? category.calculators : [];
  };

  return (
    <div className="main-container py-8 md:px-6">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/resources"
                  className="text-aliceBlue hover:text-foreground flex items-center"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to Resources
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <Calculator className="h-5 w-5 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Construction Calculators
            </h1>
          </div>
          <p className="text-aliceBlue">
            Free calculators for contractors and construction professionals.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <CalculatorSearch
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <ViewToggle viewMode={viewMode} onViewChange={handleViewModeChange} />
        </div>
      </div>

      {viewMode === "categories" && (
        <div className="mb-8">
          <CategoryTabs
            categories={categoriesWithAll}
            defaultValue={activeTab}
            onValueChange={handleCategoryChange}
          />
        </div>
      )}

      {searchTerm ? (
        <SearchResults
          searchTerm={searchTerm}
          filteredCalculators={filteredCalculators}
        />
      ) : (
        <CalculatorGrid
          calculators={getCurrentCategoryCalculators()}
          showCategories={true}
          title={
            viewMode === "categories" && activeTab !== "all"
              ? categoriesWithAll.find((cat) => cat.id === activeTab)?.name +
                " Calculators"
              : undefined
          }
        />
      )}

      <EducationalContent />
    </div>
  );
}
