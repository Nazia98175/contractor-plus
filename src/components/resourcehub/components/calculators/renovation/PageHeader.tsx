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
              href="/resources"
              className="hover:text-primary text-sm font-medium text-gray-700"
            >
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/resources/cost-calculator"
              className="hover:text-primary text-sm font-medium text-gray-700"
            >
              Calculators
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm font-medium text-gray-500">
              Renovation Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mb-2 text-3xl font-bold tracking-tight">
        Renovation Cost Calculator
      </h1>
      <p className="text-aliceBlue max-w-3xl text-lg">
        Estimate the cost of your renovation project based on the size of the
        area, cost per square foot, and a contingency budget for unexpected
        expenses.
      </p>
    </div>
  );
}
