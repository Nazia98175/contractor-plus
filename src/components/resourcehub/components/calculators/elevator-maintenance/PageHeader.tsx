import { ArrowUp } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

export function PageHeader() {
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm font-medium hover:text-red-500"
            >
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/resources/cost-calculator"
              className="text-sm font-medium hover:text-red-500"
            >
              Calculators
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Elevator Maintenance Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <ArrowUp className="h-5 w-5 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Elevator Maintenance Cost Calculator
        </h1>
      </div>

      <p className="text-aliceBlue max-w-3xl text-lg">
        Calculate annual elevator maintenance costs based on service frequency
        and additional requirements to help plan budgets or prepare service
        contracts.
      </p>
    </div>
  );
}
