import { Search } from "lucide-react";
import { Control } from "react-hook-form";
import { FormValues } from "./searchFormSchema";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface SearchInputProps {
  control: Control<FormValues>;
}

export function SearchInput({ control }: SearchInputProps) {
  return (
    <FormField
      control={control}
      name="query"
      render={({ field }) => (
        <FormItem className="flex-1">
          <div className="relative">
            <FormControl>
              <Input
                placeholder="Search for materials (e.g. drywall panel, 2x4 lumber)"
                className="pl-10"
                {...field}
              />
            </FormControl>
            <Search className="text-muted-foreground absolute top-2.5 left-3 h-5 w-5" />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
