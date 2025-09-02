import { useState } from "react";

import { Period } from "@/types";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface PeriodSelectorProps {
  value: Period;
  onChange: (value: Period) => void;
}

const PeriodSelector = ({ value, onChange }: PeriodSelectorProps) => {
  return (
    <Tabs
      defaultValue={value}
      onValueChange={(newValue) => onChange(newValue as Period)}
      className="w-full"
    >
      <TabsList className="mt-3 grid w-full grid-cols-2 gap-2 p-1">
        <TabsTrigger
          value="Monthly"
          className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary h-8 px-4 py-1.5 data-[state=active]:shadow-none"
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="Quarterly"
          className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary h-8 px-4 py-1.5 data-[state=active]:shadow-none"
        >
          Quarterly
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PeriodSelector;
