import React from "react";

import { HelpCircle } from "lucide-react";
import { getPermitCostText, formatLocationName } from "@/data/faq-data";
import { ProjectDetail } from "@/types/projectDetail";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQSectionProps {
  projectSlug: string;
  location: string;
  projectName: string;
  projectValues: ProjectDetail;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  projectSlug,
  location,
  projectName,
  projectValues,
}) => {
  // const faqs = getFAQBySlug(projectSlug);/
  const faqs = projectValues?.faq?.faqs;
  const locationName = formatLocationName(location);
  const permitCostText = getPermitCostText(location);

  // If no FAQs found for this project, don't render the section
  if (faqs?.length === 0) {
    return null;
  }

  // Replace dynamic content in FAQ questions and answers
  const processText = (text: string): string => {
    return text
      .replace(/\{location\}/g, locationName)
      .replace(/\{projectName\}/g, projectName.toLowerCase())
      .replace(/\{permitCost\}/g, permitCostText);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5" />
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:no-underline">
                {processText(faq.question)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {processText(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
