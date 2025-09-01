import { Gift, Lock, User, Zap } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface LoginPromptProps {
  searchCount?: number;
  className?: string;
}

export function LoginPrompt({ searchCount = 0, className }: LoginPromptProps) {
  // Increased search limit from 10 to 25 for development purposes
  const SEARCH_LIMIT = 25;
  const remainingSearches = SEARCH_LIMIT - searchCount;
  const progressPercentage = (remainingSearches / SEARCH_LIMIT) * 100;
  const isMobile = useIsMobile();

  return (
    <Card className={`${className} overflow-hidden border-none shadow-lg`}>
      <div className="from-primary/10 via-primary/5 bg-gradient-to-r to-transparent">
        <CardHeader className="pb-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gift className="text-primary h-5 w-5" />
                Free Search Limit
              </CardTitle>
              <CardDescription>
                Create free Contractor+ account to get more searches!
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={progressPercentage} className="h-2 w-28" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className={`grid grid-cols-1 ${
              isMobile ? "" : "md:grid-cols-3"
            } gap-4 md:gap-6`}
          >
            <div className="group hover:bg-primary/5 flex items-start gap-3 rounded-md p-3 transition-colors">
              <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors">
                <User className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Create a free Contractor+ account
                </h4>
                <p className="text-aliceBlue text-xs">
                  Sign up in seconds for increased limits
                </p>
                <Button
                  variant="link"
                  className="text-primary h-7 px-0 text-xs"
                  asChild
                >
                  <a href="https://my.contractorplus.app/register">
                    Sign up now
                  </a>
                </Button>
              </div>
            </div>

            <div className="group hover:bg-primary/5 flex items-start gap-3 rounded-md p-3 transition-colors">
              <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors">
                <Lock className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Save and export material lists
                </h4>
                <p className="text-aliceBlue text-xs">
                  Save lists or export in various formats
                </p>
                <Button
                  variant="link"
                  className="text-primary h-7 px-0 text-xs"
                  asChild
                >
                  <a href="https://my.contractorplus.app">Log in to save</a>
                </Button>
              </div>
            </div>

            <div className="group hover:bg-primary/5 flex items-start gap-3 rounded-md p-3 transition-colors">
              <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors">
                <Zap className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Get unlimited searches with PRO
                </h4>
                <p className="text-aliceBlue text-xs">
                  Upgrade for full access and features
                </p>
                <Button
                  variant="link"
                  className="text-primary h-7 px-0 text-xs"
                  asChild
                >
                  <a href="https://contractorplus.app/pricing">View pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
