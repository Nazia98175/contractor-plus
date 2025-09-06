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
              HVAC Parts Markup Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="mb-3 text-2xl font-bold sm:text-3xl">
          HVAC Parts Markup Calculator
        </h1>
        <p className="text-aliceBlue">
          Calculate accurate selling prices for HVAC parts with custom markup
          and tax rates. Optimize pricing for both profitability and
          competitiveness.
        </p>
      </div>
    </>
  );
}
