import { useState, useEffect } from "react";
import { State } from "@/types";
import StateSelector from "./StateSelector";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface LocationFilterProps {
  states: State[];
  selectedStates: number[];
  onStateChange: (stateName: number[]) => void;
  onModeChange?: (mode: "region" | "zipcode") => void;
  onZipCodeChange?: (zipCode: string) => void;
  currentLocationMode?: "region" | "zipcode";
  currentZipCode?: string;
}

const LocationFilter = ({
  states,
  selectedStates,
  onStateChange,
  onModeChange,
  onZipCodeChange,
  currentLocationMode = "region",
  currentZipCode = "",
}: LocationFilterProps) => {
  const [zipCode, setZipCode] = useState(currentZipCode);
  const [activeTab, setActiveTab] = useState(currentLocationMode);

  // Update state when props change
  useEffect(() => {
    setZipCode(currentZipCode);
    setActiveTab(currentLocationMode);
  }, [currentZipCode, currentLocationMode]);

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZipCode(value);
    if (onZipCodeChange) {
      onZipCodeChange(value);
    }
  };

  // const handleTabChange = (value: string) => {
  //   setActiveTab(value as "region" | "zipcode");
  //   if (onModeChange) {
  //     onModeChange(value as "region" | "zipcode");
  //   }
  // };

  const handleTabChange = (value: string) => {
    const mode = value as "region" | "zipcode";
    setActiveTab(mode);

    if (onModeChange) {
      onModeChange(mode);
    }

    if (mode === "region") {
      // Clear zip code when switching to state mode
      setZipCode("");
      if (onZipCodeChange) {
        onZipCodeChange("");
      }
    } else if (mode === "zipcode") {
      // Clear selected states when switching to zip code mode
      onStateChange([]);
    }
  };

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Location</Label>
      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 gap-2 p-1">
          <TabsTrigger
            value="region"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none px-4 py-1.5 h-8"
          >
            State
          </TabsTrigger>
          <TabsTrigger
            value="zipcode"
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none px-4 py-1.5 h-8"
          >
            Zip Code
          </TabsTrigger>
        </TabsList>

        <TabsContent value="region" className="mt-3">
          <StateSelector
            states={states}
            selectedStates={selectedStates}
            onChange={onStateChange}
            allowMultipleStates={false} // Add this prop to enforce single state selection
          />
        </TabsContent>

        <TabsContent value="zipcode" className="mt-3">
          <div className="space-y-2">
            <Label htmlFor="zipcode">Zip Code</Label>
            <Input
              id="zipcode"
              placeholder="Enter zip code"
              value={zipCode}
              onChange={handleZipCodeChange}
              maxLength={5}
              className="w-full"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LocationFilter;
