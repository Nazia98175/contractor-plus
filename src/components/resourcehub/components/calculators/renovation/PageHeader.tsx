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
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources/cost-calculator">
              Calculators
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Renovation Cost Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
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
