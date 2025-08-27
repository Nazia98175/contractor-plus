// import { Check, ChevronDown } from "lucide-react";

// import { UnitOfMeasurement } from "@/types";
// import { useRef, useState, useEffect } from "react";
// import Button from "@/components/common/Button";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/Command";
// import { cn } from "@/app/lib/utils";

// interface UOMSelectorProps {
//   value: UnitOfMeasurement;
//   onChange: (value: UnitOfMeasurement) => void;
// }

// const UNITS: { value: UnitOfMeasurement; label: string }[] = [
//   { value: "Hour", label: "Hour (hr)" },
//   { value: "Square Foot", label: "Square Foot (sq ft)" },
//   { value: "Linear Foot", label: "Linear Foot (ln ft)" },
//   { value: "Unit", label: "Unit" },
// ];

// const UOMSelector = ({ value, onChange }: UOMSelectorProps) => {
//   const [open, setOpen] = useState(false);
//   const triggerRef = useRef<HTMLButtonElement>(null);
//   const [triggerWidth, setTriggerWidth] = useState(0);

//   useEffect(() => {
//     if (triggerRef.current) {
//       setTriggerWidth(triggerRef.current.offsetWidth);
//     }
//   }, [open]);

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           ref={triggerRef}
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="flex h-10 w-full justify-between md:w-full"
//         >
//           <span>
//             {UNITS.find((unit) => unit.value === value)?.label || "Select unit"}
//           </span>
//           <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent
//         className="p-0"
//         style={{ width: Math.max(200, triggerWidth) }}
//       >
//         <Command>
//           <CommandList>
//             <CommandGroup>
//               {UNITS.map((unit) => (
//                 <CommandItem
//                   key={unit.value}
//                   onSelect={() => {
//                     onChange(unit.value);
//                     setOpen(false);
//                   }}
//                   className="flex cursor-pointer items-center gap-2 px-2 py-1.5"
//                 >
//                   <div
//                     className={cn(
//                       "mr-2 flex h-4 w-4 items-center justify-center rounded-full border",
//                       value === unit.value
//                         ? "bg-primary border-primary"
//                         : "border-input",
//                     )}
//                   >
//                     {value === unit.value && (
//                       <Check className="text-primary-foreground h-3 w-3" />
//                     )}
//                   </div>
//                   <span>{unit.label}</span>
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default UOMSelector;
