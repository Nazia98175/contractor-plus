"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  TrendingUp,
  Download,
  Home,
  Plus,
  Trash2,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  ExternalLink,
  DollarSign,
  Calendar,
  AlertTriangle,
} from "lucide-react";

import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
} from "recharts";
import jsPDF from "jspdf";
import Link from "next/link";

interface CashFlowItem {
  id: string;
  phase: string;
  description: string;
  type: "income" | "expense";
  amount: number;
  date: string;
  category: string;
}

interface CashFlowData {
  projectName: string;
  projectValue: number;
  startDate: string;
  endDate: string;
  items: CashFlowItem[];
}

export default function ConstructionCashFlowForecaster() {
  const [cashFlowData, setCashFlowData] = useState<CashFlowData>({
    projectName: "",
    projectValue: 0,
    startDate: "",
    endDate: "",
    items: [],
  });
  const [showChart, setShowChart] = useState(false);
  const { toast } = useToast();

  useMetaTags({
    title:
      "Free Construction Cash Flow Calculator - Payment Schedule & Project Planner",
    description:
      "Plan construction project cash flow with our free calculator. Track payments vs expenses by phase, forecast cash gaps, and create contractor payment schedules.",
    keywords:
      "construction cash flow calculator, contractor payment schedule, project payment planner, cash flow forecasting, construction finance planning, project cash management",
  });

  const addCashFlowItem = () => {
    const newItem: CashFlowItem = {
      id: Date.now().toString(),
      phase: "",
      description: "",
      type: "income",
      amount: 0,
      date: "",
      category: "",
    };
    setCashFlowData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  };

  const updateCashFlowItem = (
    id: string,
    field: keyof CashFlowItem,
    value: any,
  ) => {
    setCashFlowData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const removeCashFlowItem = (id: string) => {
    setCashFlowData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const generateForecast = () => {
    if (!cashFlowData.projectName || cashFlowData.items.length === 0) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in the project name and add at least one cash flow item.",
        variant: "destructive",
      });
      return;
    }

    setShowChart(true);
    toast({
      title: "Cash Flow Forecast Generated",
      description: "Your cash flow forecast has been created successfully!",
    });
  };

  const processChartData = () => {
    const sortedItems = [...cashFlowData.items].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    let cumulativeCash = 0;
    const chartData = sortedItems.map((item) => {
      const amount = item.type === "income" ? item.amount : -item.amount;
      cumulativeCash += amount;

      return {
        date: item.date,
        phase: item.phase,
        income: item.type === "income" ? item.amount : 0,
        expense: item.type === "expense" ? item.amount : 0,
        cumulativeCash,
        description: item.description,
      };
    });

    return chartData;
  };

  const downloadPDF = () => {
    if (!showChart || cashFlowData.items.length === 0) {
      toast({
        title: "No Data to Export",
        description: "Please generate a cash flow forecast first.",
        variant: "destructive",
      });
      return;
    }

    const pdf = new jsPDF();
    const margin = 20;
    const pageWidth = pdf.internal.pageSize.width;
    let yPosition = margin;

    // Header
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text("CONSTRUCTION CASH FLOW FORECAST", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 20;

    // Project Information
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("PROJECT INFORMATION", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Project Name: ${cashFlowData.projectName}`, margin, yPosition);
    yPosition += 7;
    pdf.text(
      `Project Value: $${cashFlowData.projectValue.toLocaleString()}`,
      margin,
      yPosition,
    );
    yPosition += 7;
    pdf.text(`Start Date: ${cashFlowData.startDate}`, margin, yPosition);
    yPosition += 7;
    pdf.text(`End Date: ${cashFlowData.endDate}`, margin, yPosition);
    yPosition += 15;

    // Summary Statistics
    const totalIncome = cashFlowData.items
      .filter((item) => item.type === "income")
      .reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = cashFlowData.items
      .filter((item) => item.type === "expense")
      .reduce((sum, item) => sum + item.amount, 0);
    const netCashFlow = totalIncome - totalExpenses;
    const chartData = processChartData();
    const minCash = Math.min(...chartData.map((d) => d.cumulativeCash));

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("CASH FLOW SUMMARY", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(
      `Total Expected Income: $${totalIncome.toLocaleString()}`,
      margin,
      yPosition,
    );
    yPosition += 7;
    pdf.text(
      `Total Expected Expenses: $${totalExpenses.toLocaleString()}`,
      margin,
      yPosition,
    );
    yPosition += 7;
    pdf.text(
      `Net Cash Flow: $${netCashFlow.toLocaleString()}`,
      margin,
      yPosition,
    );
    yPosition += 7;
    pdf.text(
      `Lowest Cash Position: $${minCash.toLocaleString()}`,
      margin,
      yPosition,
    );
    yPosition += 15;

    // Cash Flow Items Table
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("CASH FLOW BREAKDOWN", margin, yPosition);
    yPosition += 10;

    // Table headers
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "bold");
    pdf.text("Date", margin, yPosition);
    pdf.text("Phase", margin + 25, yPosition);
    pdf.text("Description", margin + 50, yPosition);
    pdf.text("Type", margin + 100, yPosition);
    pdf.text("Amount", margin + 125, yPosition);
    yPosition += 7;

    // Table rows
    pdf.setFont("helvetica", "normal");
    cashFlowData.items
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .forEach((item) => {
        if (yPosition > 250) {
          pdf.addPage();
          yPosition = margin;
        }

        pdf.text(item.date, margin, yPosition);
        pdf.text(item.phase.substring(0, 15), margin + 25, yPosition);
        pdf.text(item.description.substring(0, 30), margin + 50, yPosition);
        pdf.text(
          item.type === "income" ? "Income" : "Expense",
          margin + 100,
          yPosition,
        );
        pdf.text(`$${item.amount.toLocaleString()}`, margin + 125, yPosition);
        yPosition += 7;
      });

    // Risk Assessment
    if (yPosition > 200) {
      pdf.addPage();
      yPosition = margin;
    }

    yPosition += 10;
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("CASH FLOW RISK ASSESSMENT", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    if (minCash < 0) {
      pdf.text(
        `⚠ WARNING: Cash flow drops to $${minCash.toLocaleString()} - financing may be required`,
        margin,
        yPosition,
      );
      yPosition += 7;
    }

    if (netCashFlow < 0) {
      pdf.text(
        `⚠ WARNING: Project shows negative net cash flow of $${netCashFlow.toLocaleString()}`,
        margin,
        yPosition,
      );
      yPosition += 7;
    }

    if (minCash >= 0 && netCashFlow >= 0) {
      pdf.text(
        "✓ Cash flow forecast looks healthy with positive net flow",
        margin,
        yPosition,
      );
      yPosition += 7;
    }

    // Save PDF
    const filename = `Cash-Flow-Forecast-${cashFlowData.projectName.replace(/\s+/g, "-")}.pdf`;
    pdf.save(filename);

    toast({
      title: "PDF Downloaded",
      description: "Your cash flow forecast has been downloaded as a PDF file.",
    });
  };

  const chartData = showChart ? processChartData() : [];
  const totalIncome = cashFlowData.items
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = cashFlowData.items
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);
  const minCash =
    chartData.length > 0
      ? Math.min(...chartData.map((d) => d.cumulativeCash))
      : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
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
              <BreadcrumbLink asChild>
                <Link href="/resources/project-planning-tools">
                  Project Planning
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cash Flow Forecaster</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Construction Cash Flow Forecasting Tool
        </h1>
        <p className="text-aliceBlue mx-auto max-w-3xl text-lg">
          Plan and visualize your construction project's cash flow. Track
          payments versus expenses by phase, identify cash gaps, and create
          professional payment schedules.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Input Form */}
        <div className="lg:md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Project Cash Flow Setup</CardTitle>
              <CardDescription>
                Configure your project details and add income/expense items by
                phase
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    value={cashFlowData.projectName}
                    onChange={(e) =>
                      setCashFlowData((prev) => ({
                        ...prev,
                        projectName: e.target.value,
                      }))
                    }
                    placeholder="Enter project name"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="projectValue">Total Project Value</Label>
                  <Input
                    id="projectValue"
                    type="number"
                    value={cashFlowData.projectValue || ""}
                    onChange={(e) =>
                      setCashFlowData((prev) => ({
                        ...prev,
                        projectValue: Number(e.target.value),
                      }))
                    }
                    placeholder="Project contract value"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="startDate">Project Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={cashFlowData.startDate}
                    onChange={(e) =>
                      setCashFlowData((prev) => ({
                        ...prev,
                        startDate: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="endDate">Project End Date</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={cashFlowData.endDate}
                    onChange={(e) =>
                      setCashFlowData((prev) => ({
                        ...prev,
                        endDate: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Cash Flow Items */}
              <div className="space-y-3">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Cash Flow Items</h3>
                  <Button onClick={addCashFlowItem} size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </div>

                <div className="space-y-4">
                  {cashFlowData.items.map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="grid items-end gap-2 md:grid-cols-12">
                        <div className="space-y-3 md:col-span-2">
                          <Label>Type</Label>
                          <Select
                            value={item.type}
                            onValueChange={(value) =>
                              updateCashFlowItem(item.id, "type", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="income">Income</SelectItem>
                              <SelectItem value="expense">Expense</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3 md:col-span-2">
                          <Label>Phase</Label>
                          <Select
                            value={item.phase}
                            onValueChange={(value) =>
                              updateCashFlowItem(item.id, "phase", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select phase" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mobilization">
                                Mobilization
                              </SelectItem>
                              <SelectItem value="foundation">
                                Foundation
                              </SelectItem>
                              <SelectItem value="framing">Framing</SelectItem>
                              <SelectItem value="roofing">Roofing</SelectItem>
                              <SelectItem value="mechanical">
                                Mechanical
                              </SelectItem>
                              <SelectItem value="electrical">
                                Electrical
                              </SelectItem>
                              <SelectItem value="drywall">Drywall</SelectItem>
                              <SelectItem value="flooring">Flooring</SelectItem>
                              <SelectItem value="finishes">Finishes</SelectItem>
                              <SelectItem value="final">
                                Final/Closeout
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3 md:col-span-2">
                          <Label>Description</Label>
                          <Input
                            value={item.description}
                            onChange={(e) =>
                              updateCashFlowItem(
                                item.id,
                                "description",
                                e.target.value,
                              )
                            }
                            placeholder="Description"
                          />
                        </div>
                        <div className="space-y-3 md:col-span-2">
                          <Label>Amount ($)</Label>
                          <Input
                            type="number"
                            value={item.amount || ""}
                            onChange={(e) =>
                              updateCashFlowItem(
                                item.id,
                                "amount",
                                Number(e.target.value),
                              )
                            }
                            placeholder="0"
                          />
                        </div>
                        <div className="space-y-3 md:col-span-3">
                          <Label>Date</Label>
                          <Input
                            type="date"
                            value={item.date}
                            onChange={(e) =>
                              updateCashFlowItem(
                                item.id,
                                "date",
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <div className="flex justify-end space-y-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeCashFlowItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Button onClick={generateForecast} className="w-full">
                <TrendingUp className="mr-2 h-4 w-4" />
                Generate Cash Flow Forecast
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Summary & Actions */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <CardTitle>Cash Flow Summary</CardTitle>
                  <CardDescription>Overview and export options</CardDescription>
                </div>
                {showChart && (
                  <Button variant="outline" size="sm" onClick={downloadPDF}>
                    <Download className="mr-1 h-4 w-4" />
                    Download PDF
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!showChart ? (
                <div className="text-aliceBlue py-8 text-center">
                  <DollarSign className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p>Generate forecast to see cash flow summary</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-green-500 p-3">
                      <div className="text-sm font-medium">Total Income</div>
                      <div className="text-lg font-bold">
                        ${totalIncome.toLocaleString()}
                      </div>
                    </div>
                    <div className="rounded-lg bg-red-500 p-3">
                      <div className="text-sm font-medium">Total Expenses</div>
                      <div className="text-lg font-bold">
                        ${totalExpenses.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="bg-alice rounded-lg p-3">
                    <div className="text-sm font-medium text-blue-700">
                      Net Cash Flow
                    </div>
                    <div
                      className={`text-lg font-bold ${totalIncome - totalExpenses >= 0 ? "text-green-700" : "text-red-700"}`}
                    >
                      ${(totalIncome - totalExpenses).toLocaleString()}
                    </div>
                  </div>

                  {minCash < 0 && (
                    <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
                      <div className="mb-1 flex items-center text-sm font-medium text-orange-600">
                        <AlertTriangle className="mr-1 h-4 w-4" />
                        Cash Gap Warning
                      </div>
                      <div className="text-sm text-orange-700">
                        Lowest position: ${minCash.toLocaleString()}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      {showChart && chartData.length > 0 && (
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cumulative Cash Flow Forecast</CardTitle>
              <CardDescription>
                Track your project's cash position over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [
                        `$${value.toLocaleString()}`,
                        name,
                      ]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="cumulativeCash"
                      stroke="#2563eb"
                      strokeWidth={3}
                      name="Cumulative Cash Flow"
                    />
                    <ReferenceLine
                      y={0}
                      stroke="#ef4444"
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Income vs Expenses by Timeline</CardTitle>
              <CardDescription>
                Compare incoming payments with outgoing expenses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => [
                        `$${value.toLocaleString()}`,
                        name,
                      ]}
                      labelFormatter={(label) => `Date: ${label}`}
                    />
                    <Legend />
                    <Bar dataKey="income" fill="#10b981" name="Income" />
                    <Bar dataKey="expense" fill="#ef4444" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Enhanced Educational Content */}
      <div className="mt-16 space-y-12">
        {/* CTA Section */}
        <div className="x-4 rounded-2xl bg-gradient-to-r from-black via-gray-900 to-black py-6 text-center lg:p-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/20 rounded-full p-3">
                <Zap className="text-primary h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Master Construction Financial Management
            </h2>
            <p className="text-aliceBlue mx-auto mb-6 max-w-3xl text-lg">
              Take control of your construction projects with Contractor+. Our
              comprehensive platform combines cash flow management, project
              scheduling, and client relationship tools.
            </p>
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <BarChart3 className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Financial Planning</h3>
                <p className="text-aliceBlue text-sm">
                  Advanced cash flow forecasting and budget management
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <Users className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Project Collaboration</h3>
                <p className="text-aliceBlue text-sm">
                  Seamless team coordination and client communication
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <Calendar className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Complete Integration</h3>
                <p className="text-aliceBlue text-sm">
                  All-in-one platform for modern contractors
                </p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link
                href="/project-management-software-for-contractors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Explore Contractor+ Platform
                <ArrowRight className="ml-2 h-4 w-4" />
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>

        {/* How-to Guide */}
        <div className="rounded-xl bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6 lg:p-8">
          <h2 className="text-center text-2xl font-bold">
            Master Construction Cash Flow Management
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Setup Project</h3>
                <p className="text-aliceBlue text-sm">
                  Enter project details, contract value, and timeline
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Add Cash Flow Items</h3>
                <p className="text-aliceBlue text-sm">
                  Input payments and expenses by construction phase
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Analyze Forecast</h3>
                <p className="text-aliceBlue text-sm">
                  Review charts to identify cash gaps and opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-shutter text-center">
              <CardContent className="py-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">4</span>
                </div>
                <h3 className="mb-2 font-semibold">Export & Share</h3>
                <p className="text-aliceBlue text-sm">
                  Download professional reports for clients and lenders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="text-primary mr-2 h-5 w-5" />
                Cash Flow Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Conservative Estimates:</strong> Use realistic
                    payment timelines and add buffer for delays
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Phase-Based Planning:</strong> Align payments with
                    completed milestones
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Regular Updates:</strong> Revise forecasts as
                    project conditions change
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Cash Reserves:</strong> Maintain emergency funds for
                    unexpected expenses
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="text-primary mr-2 h-5 w-5" />
                Risk Management Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Monitor Cash Gaps:</strong> Identify periods
                    requiring additional financing
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Front-load Payments:</strong> Negotiate upfront
                    payments to improve cash flow
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Supplier Terms:</strong> Negotiate favorable payment
                    terms with vendors
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Line of Credit:</strong> Secure financing before
                    cash flow problems arise
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Industry Statistics */}
        <Card className="bg-gradient-to-br from-black via-gray-900 to-black px-4 py-6 lg:p-8">
          <CardHeader>
            <CardTitle className="text-center">
              Construction Cash Flow Statistics
            </CardTitle>
            <CardDescription className="text-center">
              Industry data on financial management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div className="space-y-3">
                <div className="text-primary mb-2 text-2xl font-bold">82%</div>
                <p className="text-aliceBlue text-sm">
                  of construction business failures are due to poor cash flow
                  management
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-primary mb-2 text-2xl font-bold">45</div>
                <p className="text-aliceBlue text-sm">
                  days average payment delay in construction industry
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-primary mb-2 text-2xl font-bold">
                  15-25%
                </div>
                <p className="text-aliceBlue text-sm">
                  typical cash flow variation range in construction projects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
