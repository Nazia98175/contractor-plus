import { DateRangePreset } from "@/types";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

interface PresetOption {
  id: string;
  name: DateRangePreset;
}

interface DateRangePresetsProps {
  presets: PresetOption[];
  selectedPreset: string;
  onSelectPreset: (presetId: string) => void;
}

const DateRangePresets = ({
  presets,
  selectedPreset,
  onSelectPreset,
}: DateRangePresetsProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium">Select Range</h4>
      <RadioGroup
        value={selectedPreset}
        onValueChange={onSelectPreset}
        className="grid grid-cols-2 gap-2"
      >
        {presets.map((preset) => (
          <div key={preset.id} className="flex items-center space-x-2">
            <RadioGroupItem value={preset.id} id={preset.id} />
            <Label htmlFor={preset.id} className="text-sm">
              {preset.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default DateRangePresets;
