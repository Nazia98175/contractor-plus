import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

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
                Plumbing Bid Calculator
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">
          Plumbing Bid Calculator
        </h1>
        <p className="text-muted-foreground">
          Create accurate plumbing bids by calculating materials, labor, and
          profit. Perfect for plumbing contractors preparing estimates.
        </p>
      </div>
    </>
  );
}
