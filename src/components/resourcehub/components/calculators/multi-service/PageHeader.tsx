import { Clipboard } from "lucide-react";
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
      <Breadcrumb className="mb-6">
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
              Multi-Service Job Estimator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-3 flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
          <Clipboard className="h-5 w-5 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Multi-Service Job Estimator
        </h1>
      </div>

      <p className="text-aliceBlue max-w-3xl text-lg">
        Create accurate estimates for multi-service projects by calculating
        combined costs with a customizable profit markup.
      </p>
    </div>
  );
}
