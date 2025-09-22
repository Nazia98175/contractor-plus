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
import { useRouter } from "next/navigation";

export function PageHeader() {
  const router = useRouter();
  return (
    <div className="mb-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Resources</BreadcrumbLink>
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
              Roof Square Footage Calculator
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* <Button
        variant="ghost"
        size="sm"
        onClick={() => router.push("/resources/cost-calculator")}
        className="mb-6 flex items-center gap-1 hover:text-red-500"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Calculators
      </Button> */}

      <div className="mb-3 flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
          <Ruler className="h-5 w-5 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Roof Square Footage Calculator
        </h1>
      </div>

      <p className="text-aliceBlue max-w-3xl text-lg">
        Calculate accurate roof square footage based on building dimensions and
        pitch to determine material requirements for your roofing projects.
      </p>
    </div>
  );
}
