import { Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel } from "../../ui/form";
import { Badge } from "../../ui/badge";
import { cn } from "@/app/lib/utils";
import { ScrollArea } from "../../ui/scroll-area";
import { Checkbox } from "../../ui/checkbox";
import { storesByCountry } from "@/services/resource/storeService";

import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../searchFormSchema";

interface StoreSelectionFieldProps {
  form: UseFormReturn<FormValues>;
  disabled?: boolean;
}

export const StoreSelectionField = ({
  form,
  disabled = false,
}: StoreSelectionFieldProps) => {
  const [maxReached, setMaxReached] = useState(false);
  const MAX_STORES = 3;

  // Get the current country code from the form
  const countryCode = form.watch("countryCode") || "US";

  // Force set default stores when the component mounts or country changes
  useEffect(() => {
    const currentValue = form.getValues("storeIds") || [];

    // Always ensure correct defaults are set
    if (countryCode === "US") {
      const correctDefaults = ["lowes-us", "build-us", "acehardware-us"];
      // Check if current selection matches our preferred defaults
      const hasCorrectDefaults =
        correctDefaults.every((store) => currentValue.includes(store)) &&
        currentValue.length === correctDefaults.length;

      if (!hasCorrectDefaults) {
        form.setValue("storeIds", correctDefaults);
      }
    } else if (countryCode === "CA") {
      const correctDefaults = ["homedepot-ca", "lowes-ca"];
      const hasCorrectDefaults =
        correctDefaults.every((store) => currentValue.includes(store)) &&
        currentValue.length === correctDefaults.length;

      if (!hasCorrectDefaults) {
        form.setValue("storeIds", correctDefaults);
      }
    }
  }, [form, countryCode]);

  // Get stores for the selected country
  const stores = storesByCountry[countryCode] || [];

  return (
    <FormField
      control={form.control}
      name="storeIds"
      render={({ field }) => (
        <FormItem className="w-full">
          <div className="flex items-center justify-between">
            <FormLabel>Stores</FormLabel>
            <div className="flex items-center">
              <Badge
                variant={maxReached ? "destructive" : "outline"}
                className={cn(
                  "mr-1 text-xs",
                  maxReached ? "border-stiletto text-red-500" : "",
                )}
              >
                {field.value?.length || 0}/{MAX_STORES}
              </Badge>
              <span className="text-aliceBlue text-xs">Max 3 stores</span>
            </div>
          </div>
          <FormControl>
            <Controller
              name="storeIds"
              control={form.control}
              render={({ field: { onChange, value = [] } }) => (
                <ScrollArea className="border-stiletto h-[150px] overflow-auto rounded-md border p-2">
                  <div className="space-y-3">
                    {stores.map((store) => {
                      const isSelected = value.includes(store.id);
                      const isDisabled =
                        disabled ||
                        store.comingSoon ||
                        (!isSelected && value.length >= MAX_STORES);

                      return (
                        <div
                          key={store.id}
                          className={cn(
                            "flex items-center space-x-2 rounded-md p-1",
                            isDisabled && !isSelected
                              ? "opacity-70"
                              : "hover:bg-shutter/50",
                          )}
                        >
                          <Checkbox
                            id={`store-${store.id}`}
                            checked={isSelected}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                if (value.length < MAX_STORES) {
                                  onChange([...value, store.id]);
                                  setMaxReached(value.length + 1 >= MAX_STORES);
                                }
                              } else {
                                onChange(value.filter((v) => v !== store.id));
                                setMaxReached(value.length - 1 >= MAX_STORES);
                              }
                            }}
                            disabled={isDisabled}
                          />
                          <label
                            htmlFor={`store-${store.id}`}
                            className={cn(
                              "flex flex-1 items-center justify-between text-sm",
                              isDisabled && !isSelected
                                ? "cursor-not-allowed"
                                : "cursor-pointer",
                            )}
                          >
                            <span>{store.name}</span>
                            {store.comingSoon && (
                              <Badge
                                variant="outline"
                                className="border-yellow-300 bg-yellow-50 text-xs text-yellow-600"
                              >
                                Coming Soon
                              </Badge>
                            )}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              )}
            />
          </FormControl>
          {maxReached && (
            <div className="mt-1 flex items-center text-xs text-red-500">
              <AlertCircle className="mr-1 h-3 w-3" />
              <span>Maximum of {MAX_STORES} stores can be selected</span>
            </div>
          )}
        </FormItem>
      )}
    />
  );
};
