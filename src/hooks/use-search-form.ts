import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSchema,
  FormValues,
} from "@/components/resourcehub/components/search/searchFormSchema";
import { storesByCountry } from "@/services/resource/storeService";
// import { FormValues, formSchema } from "@/components/search/searchFormSchema";
// import { storesByCountry } from "@/services/storeService";

interface UseSearchFormProps {
  onSearch: (values: FormValues) => Promise<boolean> | boolean;
  defaultSearchValues?: Partial<FormValues>;
  searchCount?: number;
}

export function useSearchForm({
  onSearch,
  defaultSearchValues,
  searchCount = 0,
}: UseSearchFormProps) {
  const [selectedCountry, setSelectedCountry] = useState(
    defaultSearchValues?.countryCode || "US",
  );
  const [isFormDirty, setIsFormDirty] = useState(false);

  // Define the correct default stores
  const getDefaultStoreIds = (countryCode: string) => {
    if (countryCode === "US") {
      return ["lowes-us", "build-us", "acehardware-us"];
    } else if (countryCode === "CA") {
      return ["homedepot-ca", "lowes-ca"];
    }
    return [];
  };

  // Initialize the form with React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: defaultSearchValues?.query || "",
      storeIds: defaultSearchValues?.storeIds || [
        "lowes-us",
        "acehardware-us",
        "build-us",
      ],
      includeOutOfStock:
        defaultSearchValues?.includeOutOfStock !== undefined
          ? defaultSearchValues.includeOutOfStock
          : true,
      countryCode: defaultSearchValues?.countryCode || "US",
      location: defaultSearchValues?.location || "",
    },
  });

  // Track form changes
  useEffect(() => {
    const subscription = form.watch(() => {
      setIsFormDirty(form.formState.isDirty);
    });
    return () => subscription.unsubscribe();
  }, [form.watch, form.formState.isDirty]);

  // Update available stores when country changes
  useEffect(() => {
    if (selectedCountry) {
      // Get stores for selected country
      const stores = storesByCountry[selectedCountry] || [];

      // Get currently selected store IDs

      const currentStoreIds = form.getValues("storeIds");

      // If no stores are selected for this country, select up to 3 default ones
      if (
        !currentStoreIds.length ||
        currentStoreIds.some(
          (id) => !id.includes(selectedCountry.toLowerCase()),
        )
      ) {
        const defaultStoreIds = stores.slice(0, 3).map((store) => store.id);
        form.setValue("storeIds", defaultStoreIds);
      }

      // Update the country code in the form
      form.setValue("countryCode", selectedCountry);
    }
  }, [selectedCountry, form]);

  // Handle form submission
  const handleSubmit = async (data: FormValues) => {
    return await onSearch(data);
  };

  // Handle form reset
  const handleReset = () => {
    const countryCode = form.getValues("countryCode");
    form.reset({
      query: "",
      storeIds: getDefaultStoreIds(countryCode),
      includeOutOfStock: true,
      countryCode: countryCode,
      location: "",
    });
    setIsFormDirty(false);
  };

  return {
    form,
    selectedCountry,
    setSelectedCountry,
    handleSubmit,
    handleReset,
    isDirty: isFormDirty,
  };
}
