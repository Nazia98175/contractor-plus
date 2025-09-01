import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface CalculatorCardProps {
  calculator: {
    id: string;
    name: string;
    description: string;
    isAvailable: boolean;
    path?: string;
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
      className="h-full transition-shadow hover:shadow-md"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{calculator.name}</CardTitle>
        {showCategory && calculator.category && (
          <CardDescription className="text-aliceBlue text-xs">
            {calculator.category}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-aliceBlue text-sm">{calculator.description}</p>
      </CardContent>
      <CardFooter>
        {calculator.isAvailable ? (
          <Button variant="default" size="sm" className="w-full" asChild>
            <Link href={calculator.path ?? "#"}>
              <Calculator className="mr-2 h-4 w-4" />
              View
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" size="sm" className="w-full" disabled>
            <Calculator className="mr-2 h-4 w-4" />
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
