"use client";
import { useState } from "react";
import { useMetaTags } from "../hooks/use-meta-tags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs";
import {
  EstimateInfo,
  EstimateItem,
  useEstimateItems,
} from "../hooks/use-estimate";
import { EstimateForm } from "./EstimateForm";
import { PageHeader } from "./PageHeader";
import { TemplateSelector } from "./TemplateSelector";

interface FreeEstimateMakerProps {
  initialItems: EstimateItem[];
  initialEstimateInfo: EstimateInfo;
}
export default function FreeEstimateMaker({
  initialItems,
  initialEstimateInfo,
}: FreeEstimateMakerProps) {
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
  } = useEstimateItems(initialItems, initialEstimateInfo);

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
  };

  const handleTemplateSelected = () => {
    setActiveTab("create");
  };

  return (
    <div className="main-container px-4 pt-28 pb-6 md:px-6">
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
    </div>
  );
}
