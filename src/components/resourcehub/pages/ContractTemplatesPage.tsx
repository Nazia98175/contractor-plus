"use client";
import { useState } from "react";
import { FileText, Search, Download, Edit, Home } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const contractTemplates = [
  {
    id: "general-construction-contract",
    title: "General Construction Contract",
    description:
      "Comprehensive contract for general construction projects including new builds, remodels, and additions with detailed scope, payment terms, and timeline provisions.",
    category: "General Construction",
    popularity: "Most Popular",
    features: [
      "Project scope definition",
      "Payment schedules",
      "Timeline management",
      "Change order process",
      "Insurance requirements",
      "Warranty terms",
    ],
  },
  {
    id: "standard-construction-agreement",
    title: "Standard Construction Agreement (Fixed Price / Lump Sum)",
    description:
      "A comprehensive fixed-price contract for construction projects with clear scope, payment terms, and completion timelines.",
    category: "General Construction",
    popularity: "Very Popular",
    features: [
      "Fixed pricing",
      "Payment milestones",
      "Change order provisions",
      "Warranty terms",
    ],
  },
  {
    id: "time-and-materials-contract",
    title: "Time and Materials Contract",
    description:
      "Flexible contract structure for projects where scope may vary, billing based on actual time and materials used.",
    category: "General Construction",
    popularity: "Popular",
    features: [
      "Hourly billing",
      "Material markups",
      "Not-to-exceed clauses",
      "Progress reporting",
    ],
  },
  {
    id: "cost-plus-contract",
    title: "Cost Plus Contract",
    description:
      "Contract where client pays actual costs plus a predetermined fee or percentage for contractor services with complete transparency.",
    category: "Large Projects",
    popularity: "Popular",
    features: [
      "Cost transparency",
      "Fee structure",
      "Expense documentation",
      "Budget controls",
      "Audit rights",
    ],
  },
  {
    id: "subcontractor-agreement",
    title: "Subcontractor Agreement",
    description:
      "Specialized contract for hiring subcontractors, defining scope, payment, and compliance requirements.",
    category: "Subcontracting",
    popularity: "Essential",
    features: [
      "Scope definition",
      "Insurance requirements",
      "Payment terms",
      "Compliance clauses",
    ],
  },
  {
    id: "maintenance-service-contract",
    title: "Maintenance & Service Contract",
    description:
      "Ongoing service agreement for regular maintenance, repairs, and emergency response services.",
    category: "Service Contracts",
    popularity: "Growing",
    features: [
      "Service schedules",
      "Response times",
      "Recurring billing",
      "Service level agreements",
    ],
  },
  {
    id: "punch-list-completion-agreement",
    title: "Punch List Completion Agreement",
    description:
      "Project closeout contract for completing remaining punch list items, final inspections, and retainage release.",
    category: "Project Closeout",
    popularity: "Essential",
    features: [
      "Item tracking",
      "Completion deadlines",
      "Final inspections",
      "Retainage release",
      "Quality standards",
      "Warranty provisions",
    ],
  },
  {
    id: "warranty-agreement",
    title: "Warranty Agreement",
    description:
      "Comprehensive warranty contract covering workmanship and materials with customizable warranty periods, exclusions, and maintenance requirements.",
    category: "Service Contracts",
    popularity: "Essential",
    features: [
      "Workmanship warranty",
      "Materials warranty",
      "Warranty exclusions",
      "Transferability options",
      "Maintenance requirements",
      "Claims process",
    ],
  },
];

export default function ContractTemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  useMetaTags({
    title: "Free Construction Contract Templates - Professional & Legal",
    description:
      "Download free, professional construction contract templates. Includes general construction, fixed-price, time & materials, cost-plus, subcontractor, maintenance, and punch list completion contracts.",
    keywords:
      "construction contracts, contract templates, construction agreement, subcontractor agreement, fixed price contract, time and materials contract, general construction contract, cost plus contract, punch list completion agreement",
  });

  const filteredTemplates = contractTemplates.filter(
    (template) =>
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/resources" className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contract Templates</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="grey-gradient mb-4 text-4xl font-bold md:text-5xl">
          Free Construction Contract Templates
        </h1>
        <p className="text-aliceBlue mx-auto mb-8 max-w-3xl text-xl">
          Professional, legally-sound contract templates for contractors. Each
          template includes interactive forms to customize with your project
          details and generate ready-to-use contracts.
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto max-w-md">
          <Search className="text-aliceBlue absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            placeholder="Search contract templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <Edit className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Interactive Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Fill in your project details and watch the contract populate
              automatically
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <FileText className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Legally Sound</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Templates drafted by legal professionals for common construction
              scenarios
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Download className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Instant Download</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Generate and download your customized contract as a PDF
              immediately
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contract Templates Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex items-start justify-between">
                <span className="text-primary bg-primary/10 rounded px-2 py-1 text-sm font-medium">
                  {template.popularity}
                </span>
                <span className="text-aliceBlue text-sm">
                  {template.category}
                </span>
              </div>
              <CardTitle className="mb-2 text-xl">{template.title}</CardTitle>
              <CardDescription className="text-base">
                {template.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Key Features:</h4>
                  <ul className="text-aliceBlue space-y-1 text-sm">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-primary mr-2 h-1.5 w-1.5 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/resources/contract-templates/${template.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Customize Template
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SEO Content Section */}
      <div className="prose mt-16 max-w-none">
        <h2 className="mb-4 text-2xl font-bold">
          Why Use Professional Construction Contract Templates?
        </h2>
        <p className="text-aliceBlue mb-6">
          Professional construction contracts protect both contractors and
          clients by clearly defining project scope, payment terms, timelines,
          and responsibilities. Our templates are designed to cover the most
          common construction scenarios while being easy to customize for your
          specific needs.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Benefits for Contractors
            </h3>
            <ul className="text-aliceBlue list-disc space-y-2 pl-6">
              <li>Clear payment terms and schedules</li>
              <li>Protection against scope creep</li>
              <li>Defined change order processes</li>
              <li>Liability and warranty limitations</li>
              <li>Professional appearance with clients</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Benefits for Clients</h3>
            <ul className="text-aliceBlue list-disc space-y-2 pl-6">
              <li>Clear project deliverables and timelines</li>
              <li>Defined quality standards</li>
              <li>Warranty and guarantee terms</li>
              <li>Budget protection and cost controls</li>
              <li>Dispute resolution procedures</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold">
          How to Use These Templates
        </h3>
        <ol className="text-aliceBlue mb-6 list-decimal space-y-2 pl-6">
          <li>Choose the contract type that best fits your project</li>
          <li>Fill out the interactive form with your project details</li>
          <li>Review the generated contract for accuracy</li>
          <li>Download the PDF and have both parties sign</li>
          <li>Consider having a lawyer review for large or complex projects</li>
        </ol>

        <p className="text-darkKnight rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 pl-4 text-sm">
          <strong>Disclaimer:</strong> These templates are provided for
          informational purposes and should not be considered legal advice. For
          complex projects or specific legal situations, consult with a
          qualified attorney in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
