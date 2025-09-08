import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Industry } from "@/types";
import { toast } from "@/hooks/use-toast";

interface IndustrySelectorProps {
  industries: Industry[];
  selectedIndustries: number[];
  onChange: (value: number[]) => void;
}

const IndustrySelector = ({
  industries,
  selectedIndustries,
  onChange,
}: IndustrySelectorProps) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  // Only allow one industry at a time to be selected
  // const handleSelect = (industryName: string) => {
  //   onChange(industryName);
  //   setOpen(false);
  // };
  const handleSelect = (industryId: number) => {
    // const selectedIndustry = industries.find((i) => i.id === industryId);
    // if (selectedIndustry) {
    //   onChange(selectedIndustry.name);
    // }
    onChange([industryId]);
    setOpen(false);
  };

  const getButtonText = () => {
    if (selectedIndustries.length === 0) {
      return "Select industry";
    } else if (selectedIndustries.length === 1) {
      const selectedIndustry = industries.find(
        (i) => i.id === selectedIndustries[0],
      );
      return selectedIndustry?.name || "1 industry";
    }
    return "Select industry";
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={triggerRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex h-9 w-full justify-between"
        >
          <span className="truncate">{getButtonText()}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0"
        style={{ width: Math.max(280, triggerWidth) }}
      >
        <Command>
          <CommandInput placeholder="Search industries..." className="h-9" />
          <CommandList>
            <CommandEmpty>No industries found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="h-[300px]">
                {industries.map((industry) => (
                  <CommandItem
                    key={industry.id}
                    onSelect={() => handleSelect(industry.id)}
                    className="flex cursor-pointer items-center px-2 py-1.5"
                  >
                    <span>{industry.name}</span>
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default IndustrySelector;
