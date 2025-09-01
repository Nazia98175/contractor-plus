import React from "react";
import { Hammer } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function PageHeader() {
  return (
    <>
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/calculators">Calculators</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/calculators/custom-woodwork">
                  Custom Woodwork Pricing
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mx-auto mb-10 max-w-4xl text-center">
        <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full p-3">
          <Hammer className="text-primary h-8 w-8" />
        </div>
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Custom Woodwork Pricing Calculator
        </h1>
        <p className="text-aliceBlue mx-auto mt-2 max-w-2xl text-lg">
          Calculate accurate price quotes for custom woodworking and furniture
          projects with material costs, labor, and profit margins.
        </p>
      </div>
    </>
  );
}
