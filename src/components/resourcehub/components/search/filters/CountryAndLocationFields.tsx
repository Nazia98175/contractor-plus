import { Control } from "react-hook-form";
import { MapPin } from "lucide-react";
import { countries, FormValues } from "../searchFormSchema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Input } from "../../ui/input";

interface CountryAndLocationFieldsProps {
  control: Control<FormValues>;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export function CountryAndLocationFields({
  control,
  selectedCountry,
  setSelectedCountry,
}: CountryAndLocationFieldsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <FormField
        control={control}
        name="countryCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <Select
              value={field.value}
              onValueChange={(value) => {
                field.onChange(value);
                setSelectedCountry(value);
              }}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location (Zip/Postal Code)</FormLabel>
            <div className="relative">
              <FormControl>
                <Input
                  placeholder="Enter zip/postal code"
                  className="pl-10"
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <MapPin className="text-muted-foreground absolute top-2.5 left-3 h-5 w-5" />
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
