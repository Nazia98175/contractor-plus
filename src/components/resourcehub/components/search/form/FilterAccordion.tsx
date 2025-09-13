import { Filter } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { SearchFilters } from "../SearchFilters";
import { FormValues } from "../searchFormSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Form } from "../../ui/form";

interface FilterAccordionProps {
  isMobile: boolean;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  form: UseFormReturn<FormValues>;
}

export function FilterAccordion({
  isMobile,
  showFilters,
  setShowFilters,
  selectedCountry,
  setSelectedCountry,
  form,
}: FilterAccordionProps) {
  if (isMobile) {
    return (
      <Accordion
        type="single"
        collapsible
        value={showFilters ? "filters" : undefined}
        onValueChange={(value) => setShowFilters(value === "filters")}
      >
        <AccordionItem value="filters" className="border-none">
          <AccordionTrigger className="py-2">
            <span className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Search Filters
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Form {...form}>
                <SearchFilters
                  control={form.control}
                  selectedCountry={selectedCountry}
                  setSelectedCountry={setSelectedCountry}
                  form={form}
                />
              </Form>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return showFilters ? (
    <div className="space-y-4">
      <Form {...form}>
        <SearchFilters
          control={form.control}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          form={form}
        />
      </Form>
    </div>
  ) : null;
}
