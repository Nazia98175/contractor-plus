"use client";
import { useState } from "react";
import { useEstimateItems } from "@/hooks/use-estimate";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { PageHeader } from "../components/estimate-maker/PageHeader";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { EstimateForm } from "../components/estimate-maker/EstimateForm";
import { TemplateSelector } from "../components/estimate-maker/TemplateSelector";
import { SEOContent } from "../components/estimate-maker/SEOContent";

export default function FreeEstimateMaker() {
  const {
    items,
    addItem,
    removeItem,
    updateItem,
    moveItem,
    clearItems,
    loadTemplate,
    estimateInfo,
    updateEstimateInfo,
    calculateTotal,
  } = useEstimateItems();

  const [activeTab, setActiveTab] = useState("create");

  const calculatedTotals = calculateTotal();

  // Set SEO meta tags
  useMetaTags({
    title:
      "Free Estimate Templates for Contractors | Create Professional Estimates",
    description:
      "Browse our library of free estimate templates for contractors and create professional, customizable estimates for any construction project. No signup required.",
    keywords:
      "free estimate templates, contractor estimate templates, construction estimate template, estimate generator, free estimating templates",
  });

  const handleExport = async () => {
    // This is now handled directly in the EstimatePreview component
    console.log("Export functionality moved to EstimatePreview component");
  };

  const handleTemplateSelected = () => {
    setActiveTab("create");
  };

  return (
    <div className="main-container py-6 md:px-6">
      <PageHeader />

      <div className="mx-auto max-w-5xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="create">Create Estimate</TabsTrigger>
            <TabsTrigger value="templates">Estimate Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <EstimateForm
              items={items}
              estimateInfo={estimateInfo}
              onAddItem={addItem}
              onRemoveItem={removeItem}
              onUpdateItem={updateItem}
              onMoveItem={moveItem}
              onUpdateEstimateInfo={updateEstimateInfo}
              onClearItems={clearItems}
              onExport={handleExport}
              calculatedTotals={calculatedTotals}
            />
          </TabsContent>

          <TabsContent value="templates">
            <TemplateSelector
              onLoadTemplate={loadTemplate}
              onTemplateSelected={handleTemplateSelected}
            />
          </TabsContent>
        </Tabs>
      </div>

      <SEOContent />
    </div>
  );
}
