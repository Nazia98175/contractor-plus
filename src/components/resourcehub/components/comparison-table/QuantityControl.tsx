import React from "react";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface QuantityControlProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onChange,
  min = 1,
  max = 999,
}) => {
  const handleMinusClick = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handlePlusClick = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 rounded-r-none"
        onClick={handleMinusClick}
        disabled={quantity <= min}
      >
        <Minus className="h-3 w-3" />
        <span className="sr-only">Decrease</span>
      </Button>

      <Input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="h-7 w-10 rounded-none border-x-0 p-0 text-center focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <Button
        variant="outline"
        size="icon"
        className="h-7 w-7 rounded-l-none"
        onClick={handlePlusClick}
        disabled={quantity >= max}
      >
        <Plus className="h-3 w-3" />
        <span className="sr-only">Increase</span>
      </Button>
    </div>
  );
};
