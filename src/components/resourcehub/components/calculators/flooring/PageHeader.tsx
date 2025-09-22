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

      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/resources">Resources</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/resources/cost-calculator"
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
            <BreadcrumbPage className="text-master text-sm">
              Flooring Estimator Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-3 flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
          <Ruler className="h-5 w-5 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">
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
