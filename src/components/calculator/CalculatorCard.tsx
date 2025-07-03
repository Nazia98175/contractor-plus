import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../resource-hub/Card";
import Button from "../common/Button";
import Link from "next/link";

interface CalculatorCardProps {
  calculator: {
    id: string;
    name: string;
    description: string;
    isAvailable: boolean;
    path: string;
    category?: string;
  };
  showCategory?: boolean;
}

export function CalculatorCard({
  calculator,
  showCategory = false,
}: CalculatorCardProps) {
  return (
    <Card
      key={calculator.id}
      className="flex h-full flex-col transition-shadow hover:shadow-md"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{calculator.name}</CardTitle>
        {showCategory && calculator.category && (
          <CardDescription className="text-xs text-[#71717a]">
            {calculator.category}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1 pb-2">
        <p className="text-sm text-[#71717a]">{calculator.description}</p>
      </CardContent>
      <CardFooter>
        {calculator.isAvailable ? (
          <Button className="w-full">
            <Link href={calculator.path || "/"} className="flex items-center">
              <Calculator className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            <Calculator className="mr-2 h-4 w-4" />
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
