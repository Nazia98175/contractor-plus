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
                className="text-sm font-medium text-gray-700 hover:text-red-600"
              >
                Resources
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/resources/calculators"
                className="text-sm font-medium text-gray-700 hover:text-red-600"
              >
                Calculators
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm font-medium text-gray-500">
              Landscape Design Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Flower className="h-5 w-5 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Landscape Design Cost Calculator
        </h1>
      </div>

      <p className="text-muted-foreground max-w-3xl text-lg">
        Calculate accurate landscape design and installation cost estimates
        based on area, material costs, and additional features to provide
        professional quotes to your clients.
      </p>
    </div>
  );
}
