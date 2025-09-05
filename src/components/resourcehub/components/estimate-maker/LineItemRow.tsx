import { EstimateItem } from "@/hooks/use-estimate";

import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface LineItemRowProps {
  item: EstimateItem;
  isFirst: boolean;
  isLast: boolean;
  onUpdate: (updates: Partial<EstimateItem>) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export function LineItemRow({
  item,
  isFirst,
  isLast,
  onUpdate,
  onRemove,
  onMoveUp,
  onMoveDown,
}: LineItemRowProps) {
  const unitOptions = ["ea", "ft", "sq ft", "hr", "day", "wk", "month", "lot"];
  const isMobile = useIsMobile();

  return (
    <div className="border-stiletto animate-in fade-in space-y-3 rounded-md border p-2">
      {/* Description row */}
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 sm:col-span-6">
          <Input
            value={item.description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            placeholder="Item description"
          />
        </div>

        {!isMobile && (
          <>
            <div className="col-span-2">
              <Input
                type="number"
                min="0"
                step="0.01"
                value={item.quantity}
                onChange={(e) =>
                  onUpdate({ quantity: parseFloat(e.target.value) || 0 })
                }
              />
            </div>

            <div className="hidden sm:col-span-1 sm:block">
              <Select
                value={item.unit}
                onValueChange={(value) => onUpdate({ unit: value })}
              >
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  {unitOptions.map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <div className="relative">
                <span className="text-aliceBlue absolute inset-y-0 left-0 flex items-center pl-3">
                  $
                </span>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.rate}
                  onChange={(e) =>
                    onUpdate({ rate: parseFloat(e.target.value) || 0 })
                  }
                  className="pl-6"
                />
              </div>
            </div>

            <div className="col-span-2 flex items-center gap-1">
              <div className="border-stiletto flex h-10 w-full items-center overflow-hidden rounded-md border px-3">
                ${(item.quantity * item.rate).toFixed(2)}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Mobile-only quantity, rate, and amount row */}
      {isMobile && (
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <label className="text-aliceBlue mb-1 block text-xs">Qty</label>
            <Input
              type="number"
              min="0"
              step="0.01"
              value={item.quantity}
              onChange={(e) =>
                onUpdate({ quantity: parseFloat(e.target.value) || 0 })
              }
            />
          </div>

          <div className="col-span-4">
            <label className="text-aliceBlue mb-1 block text-xs">
              Rate ($)
            </label>
            <div className="relative">
              <span className="text-aliceBlue absolute inset-y-0 left-0 flex items-center pl-2 text-xs">
                $
              </span>
              <Input
                type="number"
                min="0"
                step="0.01"
                value={item.rate}
                onChange={(e) =>
                  onUpdate({ rate: parseFloat(e.target.value) || 0 })
                }
                className="pl-5"
              />
            </div>
          </div>

          <div className="col-span-4">
            <label className="text-aliceBlue mb-1 block text-xs">Amount</label>
            <div className="border-prediction flex h-10 w-full items-center overflow-hidden rounded-md border px-2">
              <span className="truncate text-sm">
                ${(item.quantity * item.rate).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile-only unit row */}
      {isMobile && (
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <label className="text-aliceBlue mb-1 block text-xs">Unit</label>
            <Select
              value={item.unit}
              onValueChange={(value) => onUpdate({ unit: value })}
            >
              <SelectTrigger className="h-10">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                {unitOptions.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-8 flex items-end justify-end gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={onRemove}
              className="h-10 w-10 p-0"
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onMoveUp}
              disabled={isFirst}
              className="h-10 w-10 p-0"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Move up</span>
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={onMoveDown}
              disabled={isLast}
              className="h-10 w-10 p-0"
            >
              <ArrowDown className="h-4 w-4" />
              <span className="sr-only">Move down</span>
            </Button>
          </div>
        </div>
      )}

      {/* Desktop-only actions */}
      {!isMobile && (
        <div className="hidden sm:flex sm:justify-end sm:gap-1">
          <Button variant="ghost" size="icon" onClick={onRemove}>
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onMoveUp}
            disabled={isFirst}
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Move up</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onMoveDown}
            disabled={isLast}
          >
            <ArrowDown className="h-4 w-4" />
            <span className="sr-only">Move down</span>
          </Button>
        </div>
      )}
    </div>
  );
}
