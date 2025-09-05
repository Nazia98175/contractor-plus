import { FileText } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export function PageHeader() {
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/resources"
              className="hover:text-primary text-aliceBlue text-sm font-medium"
            >
              Resources
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Free Estimate Templates
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-start gap-3">
        <div className="mt-1.5 flex-shrink-0 rounded-md bg-red-600 p-2">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Free Estimate Templates
          </h1>
          <p className="text-aliceBlue max-w-3xl">
            Use our professional estimate templates to create customized
            estimates for any project. Add line items, adjust quantities and
            rates, and export to PDF for free.
          </p>
        </div>
      </div>
    </div>
  );
}
