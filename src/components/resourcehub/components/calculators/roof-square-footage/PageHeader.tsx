import { ArrowLeft, Ruler } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { Button } from "../../ui/button";

export function PageHeader() {
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/resources/cost-calculator"
              className="text-sm font-medium text-gray-700 hover:text-red-600"
            >
              Calculators
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm font-medium text-gray-500">
              Roof Square Footage Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Button variant="outline" size="sm" className="mb-6" asChild>
        <Link to="/calculators" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Calculators
        </Link>
      </Button>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Ruler className="h-5 w-5 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Roof Square Footage Calculator
        </h1>
      </div>

      <p className="text-muted-foreground max-w-3xl text-lg">
        Calculate accurate roof square footage based on building dimensions and
        pitch to determine material requirements for your roofing projects.
      </p>
    </div>
  );
}
