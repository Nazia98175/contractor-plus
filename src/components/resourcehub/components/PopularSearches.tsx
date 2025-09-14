import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Button } from "./ui/button";

interface PopularSearchesProps {
  className?: string;
}

export const PopularSearches = ({ className }: PopularSearchesProps) => {
  // Mock data for popular searches
  const popularSearches = [
    {
      id: 1,
      name: "Drywall Sheets",
      count: 1250,
      trend: "up",
      category: "drywall",
    },
    { id: 2, name: "2x4 Lumber", count: 980, trend: "up", category: "framing" },
    {
      id: 3,
      name: "Copper Wire",
      count: 870,
      trend: "down",
      category: "electrical",
    },
    {
      id: 4,
      name: "PVC Pipe",
      count: 750,
      trend: "stable",
      category: "plumbing",
    },
    {
      id: 5,
      name: "Exterior Paint",
      count: 620,
      trend: "up",
      category: "painting",
    },
    {
      id: 6,
      name: "Roofing Shingles",
      count: 580,
      trend: "down",
      category: "roofing",
    },
  ];

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Popular Searches This Week</CardTitle>
        <Badge variant="outline" className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          <span>Updated Weekly</span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {popularSearches.map((item) => (
            <Link
              key={item.id}
              href={`/compare?query=${encodeURIComponent(item.name)}`}
              className="hover:bg-accent flex items-center justify-between rounded-lg border p-3 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    item.trend === "up"
                      ? "bg-green-100 text-green-700"
                      : item.trend === "down"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  <TrendingUp
                    className={`h-4 w-4 ${
                      item.trend === "down" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-aliceBlue text-sm">
                    {item.count.toLocaleString()} searches
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="text-xs">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </Badge>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/popular">
            <Button variant="outline" className="gap-2">
              <span>See All Popular Searches</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
