import { UseFormReturn } from "react-hook-form";
import { Filter, X } from "lucide-react";
import { SearchInput } from "../SearchInput";
import { FormValues } from "../searchFormSchema";
import { Form } from "../../ui/form";
import { Button } from "../../ui/button";

interface SearchFormFieldsProps {
  form: UseFormReturn<FormValues>;
  isLoading: boolean;
  isDirty: boolean;
  onReset: () => void;
  toggleFilters: () => void;
}

export function SearchFormFields({
  form,
  isLoading,
  isDirty,
  onReset,
  toggleFilters,
}: SearchFormFieldsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Form {...form}>
        <SearchInput control={form.control} />
      </Form>

      <div className="flex gap-2">
        <Button
          type="submit"
          className="w-full flex-shrink-0 sm:w-auto"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </Button>

        {isDirty && (
          <Button
            type="button"
            variant="outline"
            className="flex-shrink-0"
            onClick={onReset}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Reset</span>
          </Button>
        )}

        <Button
          type="button"
          variant="outline"
          className="flex-shrink-0 sm:hidden"
          onClick={toggleFilters}
        >
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filters</span>
        </Button>
      </div>
    </div>
  );
}
