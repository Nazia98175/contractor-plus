"use client";
import { useState } from "react";

import {
  Wrench,
  Search,
  Calendar,
  Clock,
  Home,
  FileText,
  TrendingUp,
} from "lucide-react";

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

const planningTools = [
  {
    id: "construction-timeline-generator",
    title: "Construction Timeline Generator",
    description:
      "Interactive Gantt-style timeline generator for construction projects. Answer a few questions and get a detailed project timeline with all phases from demo to finish.",
    category: "Planning",
    popularity: "Most Popular",
    features: [
      "Visual Gantt timeline",
      "Project phase breakdown",
      "Customizable durations",
      "Save & download",
      "Client sharing",
      "PDF export",
    ],
  },
  {
    id: "construction-rfi-generator",
    title: "Construction RFI Generator",
    description:
      "Generate professional Request for Information documents to get clarification from architects, engineers, and owners. Perfect for GCs and subcontractors.",
    category: "Communication",
    popularity: "Popular",
    features: [
      "Professional RFI templates",
      "Project tracking",
      "Priority levels",
      "Reference documents",
      "PDF export",
      "Team sharing",
    ],
  },
  {
    id: "construction-cash-flow-forecaster",
    title: "Construction Cash Flow Forecaster",
    description:
      "Plan and visualize construction project cash flow. Track payments versus expenses by phase, identify cash gaps, and create professional payment schedules.",
    category: "Financial",
    popularity: "New",
    features: [
      "Cash flow charts",
      "Payment scheduling",
      "Expense tracking",
      "Gap analysis",
      "PDF reports",
      "Risk assessment",
    ],
  },
];

export default function ProjectPlanningPage() {
  const [searchTerm, setSearchTerm] = useState("");

  useMetaTags({
    title:
      "Free Construction Project Planning Tools - Timeline, RFI & Cash Flow",
    description:
      "Free construction project planning tools including timeline generators, RFI builders, cash flow forecasters, scheduling templates, and project management resources for contractors.",
    keywords:
      "construction project planning, timeline generator, RFI template construction, request for information builder, gantt chart, construction schedule, project management tools, construction planning, cash flow calculator, contractor payment schedule",
  });

  const filteredTools = planningTools.filter(
    (tool) =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Project Planning Tools</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Free Construction Project Planning Tools
        </h1>
        <p className="text-aliceBlue mx-auto mb-8 max-w-3xl text-xl">
          Professional project planning tools to help contractors schedule,
          plan, and manage construction projects efficiently. Generate
          timelines, create RFIs, forecast cash flow, track milestones, and
          share with clients.
        </p>

        {/* Search Bar */}
        <div className="relative mx-auto max-w-md">
          <Search className="text-aliceBlue absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            placeholder="Search planning tools..."
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
            <Calendar className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Visual Timelines</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Create professional Gantt-style timelines with drag-and-drop
              editing
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <FileText className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Professional RFIs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Generate Request for Information documents with proper formatting
              and tracking
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <TrendingUp className="text-primary mx-auto mb-2 h-8 w-8" />
            <CardTitle className="text-lg">Cash Flow Planning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-aliceBlue">
              Forecast project cash flow, track payments, and identify potential
              gaps
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Planning Tools Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 flex items-start justify-between">
                <span className="text-primary bg-primary/10 rounded px-2 py-1 text-sm font-medium">
                  {tool.popularity}
                </span>
                <span className="text-aliceBlue text-sm">{tool.category}</span>
              </div>
              <CardTitle className="mb-2 text-xl">{tool.title}</CardTitle>
              <CardDescription className="text-base">
                {tool.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Key Features:</h4>
                  <ul className="text-aliceBlue space-y-1 text-sm">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="bg-primary mr-2 h-1.5 w-1.5 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button asChild className="flex-1">
                    <Link href={`/project-planning/${tool.id}`}>
                      {tool.id === "construction-rfi-generator" ? (
                        <>
                          <FileText className="mr-2 h-4 w-4" />
                          Create RFI
                        </>
                      ) : tool.id === "construction-cash-flow-forecaster" ? (
                        <>
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Forecast Cash Flow
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-4 w-4" />
                          Create Timeline
                        </>
                      )}
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
          Why Use Construction Project Planning Tools?
        </h2>
        <p className="text-aliceBlue mb-6">
          Effective project planning is crucial for construction success. Our
          tools help contractors create realistic timelines, manage resources
          efficiently, generate professional RFIs, forecast cash flow, and
          communicate project schedules clearly with clients and teams.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Benefits for Contractors
            </h3>
            <ul className="text-aliceBlue list-disc space-y-2 pl-6">
              <li>Better project organization and scheduling</li>
              <li>Improved resource allocation and planning</li>
              <li>Professional client presentations</li>
              <li>Reduced project delays and overruns</li>
              <li>Enhanced team coordination</li>
              <li>Streamlined communication with architects and engineers</li>
              <li>Accurate cash flow forecasting and gap analysis</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Benefits for Clients</h3>
            <ul className="text-aliceBlue list-disc space-y-2 pl-6">
              <li>Clear project timeline visibility</li>
              <li>Better understanding of project phases</li>
              <li>Realistic completion expectations</li>
              <li>Improved communication with contractors</li>
              <li>Professional project documentation</li>
              <li>Transparent request for information process</li>
              <li>Insight into project financial planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
