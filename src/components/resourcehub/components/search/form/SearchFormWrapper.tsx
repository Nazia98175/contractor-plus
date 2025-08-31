import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { FormValues } from "../searchFormSchema";
import { SearchFormHeader } from "./SearchFormHeader";
import { SearchFormFields } from "./SearchFormFields";
import { FilterAccordion } from "./FilterAccordion";
import { useSearchForm } from "@/hooks/use-search-form";

interface SearchFormProps {
  onSearch: (values: FormValues) => Promise<boolean> | boolean;
  isLoading?: boolean;
  searchCount?: number;
  defaultSearchValues?: Partial<FormValues>;
}

export const SearchForm = ({
  onSearch,
  isLoading = false,
  searchCount = 0,
  defaultSearchValues,
}: SearchFormProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [showFilters, setShowFilters] = useState(!isMobile);

  const {
    form,
    selectedCountry,
    setSelectedCountry,
    handleSubmit,
    handleReset,
    isDirty,
  } = useSearchForm({
    onSearch,
    defaultSearchValues,
    searchCount,
  });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full p-4 sm:p-6 bg-card border rounded-lg shadow-sm">
      <SearchFormHeader searchCount={0} searchLimit={25} />

      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <SearchFormFields
          form={form}
          isLoading={isLoading}
          isDirty={isDirty}
          onReset={handleReset}
          toggleFilters={toggleFilters}
        />

        <FilterAccordion
          isMobile={isMobile}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          form={form}
        />
      </form>
    </div>
  );
};
