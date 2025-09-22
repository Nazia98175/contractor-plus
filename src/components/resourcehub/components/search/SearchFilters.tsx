
import { Control, UseFormReturn } from 'react-hook-form';
import { FormValues } from './searchFormSchema';
import { CountryAndLocationFields } from './filters/CountryAndLocationFields';
import { StoreSelectionField } from './filters/StoreSelectionField';
import { IncludeOutOfStockField } from './filters/IncludeOutOfStockField';
import { useMediaQuery } from '@/hooks/use-media-query';

interface SearchFiltersProps {
  control: Control<FormValues>;
  form: UseFormReturn<FormValues>;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export function SearchFilters({ 
  control, 
  form,
  selectedCountry, 
  setSelectedCountry 
}: SearchFiltersProps) {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  
  return (
    <div className="space-y-4">
      <CountryAndLocationFields 
        control={control} 
        selectedCountry={selectedCountry} 
        setSelectedCountry={setSelectedCountry} 
      />
      
      <div className={`${isDesktop ? 'grid grid-cols-2 gap-4' : 'space-y-4'}`}>
        <div className={`${isDesktop ? 'col-span-1' : ''}`}>
          <StoreSelectionField 
            form={form}
          />
        </div>
        
        <div className={`${isDesktop ? 'col-span-1 flex items-start' : ''}`}>
          <IncludeOutOfStockField control={control} />
        </div>
      </div>
    </div>
  );
}
