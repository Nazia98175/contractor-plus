import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { Ruler } from "lucide-react";

export function PageHeader() {
  const router = useRouter();

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <Breadcrumb>
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
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/resources/cost-calculator");
                }}
              >
                Construction Calculators
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-sm font-medium text-gray-500">
                Flooring Estimator Calculator
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Ruler className="h-5 w-5 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Flooring Estimator Calculator
        </h1>
      </div>

      <p className="text-aliceBlue mb-8 max-w-3xl text-lg">
        Calculate accurate flooring costs based on area, materials, labor, and
        waste factor. Perfect for flooring contractors and DIY homeowners
        planning a flooring project.
      </p>
    </>
  );
}
