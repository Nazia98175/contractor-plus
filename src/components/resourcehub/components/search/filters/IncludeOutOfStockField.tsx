import { Control } from "react-hook-form";
import { FormValues } from "../searchFormSchema";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import { Switch } from "../../ui/switch";

interface IncludeOutOfStockFieldProps {
  control: Control<FormValues>;
}

export function IncludeOutOfStockField({
  control,
}: IncludeOutOfStockFieldProps) {
  return (
    <FormField
      control={control}
      name="includeOutOfStock"
      render={({ field }) => (
        <FormItem className="border-stiletto flex h-full w-full flex-row items-center justify-between space-x-2 rounded-lg border p-3">
          <div className="space-y-0.5">
            <FormLabel className="text-sm font-medium">
              Include Out of Stock
            </FormLabel>
            <p className="text-aliceBlue text-xs">
              Show materials that are currently unavailable
            </p>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
