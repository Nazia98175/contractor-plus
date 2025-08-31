import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { State } from "@/types";

import { cn } from "@/app/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

interface StateSelectorProps {
  states: State[];
  selectedStates: number[];
  onChange: (value: number[]) => void;
  allowMultipleStates?: boolean;
}

const StateSelector = ({
  states,
  selectedStates,
  onChange,
  allowMultipleStates = false,
}: StateSelectorProps) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [triggerWidth, setTriggerWidth] = useState(0);

  useEffect(() => {
    if (triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [open]);

  const regions = Array.from(new Set(states.map((state) => state.region)));

  const handleSelect = (stateId: number) => {
    if (selectedStates.includes(stateId)) {
      // Always allow deselecting a state
      onChange(selectedStates.filter((id) => id !== stateId));
    } else {
      // For single selection mode, replace the current selection
      if (!allowMultipleStates) {
        onChange([stateId]);
      } else {
        // For multiple selection mode or region-based selection, add to current selection
        onChange([...selectedStates, stateId]);
      }
    }
  };

  const handleSelectAll = () => {
    if (selectedStates.length === states.length) {
      onChange([]);
    } else {
      onChange(states.map((state) => state.id));
    }
  };

  const handleSelectRegion = (region: string) => {
    const regionStates = states
      .filter((state) => state.region === region)
      .map((state) => state.id);

    // Check if this region is already selected
    const isRegionSelected = regionStates.every((id) =>
      selectedStates.includes(id),
    );

    if (isRegionSelected) {
      // If all states in this region are already selected, deselect them
      onChange(selectedStates.filter((id) => !regionStates.includes(id)));
    } else {
      // Select only this region, deselecting any other regions or states
      onChange(regionStates);
    }
  };

  const getButtonText = () => {
    if (selectedStates.length === 0) {
      return "Select states";
    } else if (selectedStates.length === states.length) {
      return "All states";
    } else if (selectedStates.length === 1) {
      const selectedState = states.find((s) => s.id === selectedStates[0]);
      return selectedState?.name || "1 state";
    } else {
      // Try to detect if it's a single region
      const selectedRegion = regions.find((region) => {
        const regionStateIds = states
          .filter((s) => s.region === region)
          .map((s) => s.id);
        return (
          regionStateIds.length === selectedStates.length &&
          regionStateIds.every((id) => selectedStates.includes(id))
        );
      });

      if (selectedRegion) {
        return `Region: ${selectedRegion}`;
      }

      return `${selectedStates.length} states`;
    }
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
          <CommandInput placeholder="Search states..." className="h-9" />
          <CommandList>
            <CommandEmpty>No states found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                onSelect={handleSelectAll}
                className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
              >
                <div
                  className={cn(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded border",
                    selectedStates.length === states.length
                      ? "bg-primary border-primary"
                      : "border-input",
                  )}
                >
                  {selectedStates.length === states.length && (
                    <Check className="text-primary-foreground h-3 w-3" />
                  )}
                </div>
                <span className="font-medium">Select All</span>
              </CommandItem>
            </CommandGroup>
            <div className="px-2 py-2">
              <div className="text-muted-foreground mb-2 text-xs font-semibold">
                Regions
              </div>
              <div className="flex flex-wrap gap-1">
                {regions.map((region) => {
                  // const regionStates = states.filter(
                  //   (state) => state.region === region
                  // );
                  // const isFullySelected = regionStates.every((state) =>
                  //   selectedStates.includes(state.name)
                  // );
                  // const isPartiallySelected =
                  //   regionStates.some((state) =>
                  //     selectedStates.includes(state.name)
                  //   ) && !isFullySelected;
                  const regionStates = states.filter(
                    (state) => state.region === region,
                  );
                  const isFullySelected = regionStates.every((state) =>
                    selectedStates.includes(state.id),
                  );
                  const isPartiallySelected =
                    regionStates.some((state) =>
                      selectedStates.includes(state.id),
                    ) && !isFullySelected;

                  return (
                    <Badge
                      key={region}
                      variant={
                        isFullySelected
                          ? "default"
                          : isPartiallySelected
                            ? "secondary"
                            : "outline"
                      }
                      className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-all"
                      onClick={() => handleSelectRegion(region)}
                    >
                      {region}
                    </Badge>
                  );
                })}
              </div>
            </div>
            <CommandGroup>
              <ScrollArea className="h-[300px]">
                {states.map((state) => (
                  <CommandItem
                    key={state.id}
                    onSelect={() => handleSelect(state.id)}
                    className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded border",
                        selectedStates.includes(state.id)
                          ? "bg-primary border-primary"
                          : "border-input",
                      )}
                    >
                      {selectedStates.includes(state.id) && (
                        <Check className="text-primary-foreground h-3 w-3" />
                      )}
                    </div>
                    <span>{state.name}</span>
                    <span className="text-muted-foreground ml-auto text-xs">
                      {state.abbreviation}
                    </span>
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

export default StateSelector;
