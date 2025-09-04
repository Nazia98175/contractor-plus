import { Flower } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import Link from "next/link";

export function PageHeader() {
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/resources"
                className="text-sm font-medium hover:text-red-500"
              >
                Resources
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/resources/cost-calculator"
                className="text-sm font-medium hover:text-red-500"
              >
                Calculators
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Landscape Design Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Flower className="h-5 w-5 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Landscape Design Cost Calculator
        </h1>
      </div>

      <p className="text-aliceBlue max-w-3xl text-lg">
        Calculate accurate landscape design and installation cost estimates
        based on area, material costs, and additional features to provide
        professional quotes to your clients.
      </p>
    </div>
  );
}
