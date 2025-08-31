import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Home,
  HelpCircle,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  ExternalLink,
} from "lucide-react";

import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface RFIData {
  projectName: string;
  projectNumber: string;
  rfiNumber: string;
  date: string;
  to: string;
  from: string;
  subject: string;
  description: string;
  priority: string;
  category: string;
  requestedBy: string;
  responseRequiredBy: string;
  drawings: string;
  specifications: string;
  additionalNotes: string;
}

export default function ConstructionRFIGenerator() {
  const [rfiData, setRFIData] = useState<RFIData>({
    projectName: "",
    projectNumber: "",
    rfiNumber: "",
    date: new Date().toISOString().split("T")[0],
    to: "",
    from: "",
    subject: "",
    description: "",
    priority: "",
    category: "",
    requestedBy: "",
    responseRequiredBy: "",
    drawings: "",
    specifications: "",
    additionalNotes: "",
  });
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  useMetaTags({
    title: "Free Construction RFI Generator - Request for Information Builder",
    description:
      "Generate professional construction RFIs with our free RFI template. Perfect for GCs, subcontractors, and project managers to request clarification from architects and engineers.",
    keywords:
      "RFI template construction, request for information builder, subcontractor questions tool, construction RFI generator, architect clarification, project communication",
  });

  const updateField = (field: keyof RFIData, value: string) => {
    setRFIData((prev) => ({ ...prev, [field]: value }));
  };

  const generateRFI = () => {
    if (!rfiData.projectName || !rfiData.subject || !rfiData.description) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in at least the project name, subject, and description to generate the RFI.",
        variant: "destructive",
      });
      return;
    }

    setShowPreview(true);
    toast({
      title: "RFI Generated",
      description: "Your professional RFI has been created successfully!",
    });
  };

  const downloadPDF = () => {
    if (!rfiData.projectName || !rfiData.subject || !rfiData.description) {
      toast({
        title: "Missing Information",
        description:
          "Please fill in at least the project name, subject, and description to generate the PDF.",
        variant: "destructive",
      });
      return;
    }

    const pdf = new jsPDF();
    const margin = 20;
    const pageWidth = pdf.internal.pageSize.width;
    const lineHeight = 7;
    let yPosition = margin;

    // Helper function to add text with word wrapping
    const addWrappedText = (
      text: string,
      x: number,
      y: number,
      maxWidth: number,
      fontSize: number = 12,
    ) => {
      pdf.setFontSize(fontSize);
      const lines = pdf.splitTextToSize(text, maxWidth);
      pdf.text(lines, x, y);
      return y + lines.length * lineHeight;
    };

    // Header
    pdf.setFontSize(20);
    pdf.setFont("helvetica", "bold");
    pdf.text("REQUEST FOR INFORMATION (RFI)", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 20;

    // Project Information Section
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("PROJECT INFORMATION", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    const projectInfo = [
      ["Project Name:", rfiData.projectName],
      ["Project Number:", rfiData.projectNumber],
      ["RFI Number:", rfiData.rfiNumber],
      ["Date:", rfiData.date],
    ];

    projectInfo.forEach(([label, value]) => {
      if (value) {
        pdf.setFont("helvetica", "bold");
        pdf.text(label, margin, yPosition);
        pdf.setFont("helvetica", "normal");
        pdf.text(value, margin + 40, yPosition);
        yPosition += lineHeight;
      }
    });

    yPosition += 5;

    // Communication Details Section
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("COMMUNICATION DETAILS", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    const commInfo = [
      ["To:", rfiData.to],
      ["From:", rfiData.from],
      ["Requested By:", rfiData.requestedBy],
      ["Response Required By:", rfiData.responseRequiredBy],
    ];

    commInfo.forEach(([label, value]) => {
      if (value) {
        pdf.setFont("helvetica", "bold");
        pdf.text(label, margin, yPosition);
        pdf.setFont("helvetica", "normal");
        pdf.text(value, margin + 40, yPosition);
        yPosition += lineHeight;
      }
    });

    yPosition += 5;

    // RFI Details Section
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("RFI DETAILS", margin, yPosition);
    yPosition += 10;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    if (rfiData.subject) {
      pdf.setFont("helvetica", "bold");
      pdf.text("Subject:", margin, yPosition);
      pdf.setFont("helvetica", "normal");
      yPosition = addWrappedText(
        rfiData.subject,
        margin + 40,
        yPosition,
        pageWidth - margin - 50,
        10,
      );
      yPosition += 3;
    }

    if (rfiData.priority) {
      pdf.setFont("helvetica", "bold");
      pdf.text("Priority:", margin, yPosition);
      pdf.setFont("helvetica", "normal");
      pdf.text(rfiData.priority, margin + 40, yPosition);
      yPosition += lineHeight + 3;
    }

    if (rfiData.category) {
      pdf.setFont("helvetica", "bold");
      pdf.text("Category:", margin, yPosition);
      pdf.setFont("helvetica", "normal");
      pdf.text(rfiData.category, margin + 40, yPosition);
      yPosition += lineHeight + 3;
    }

    yPosition += 5;

    // Description Section
    if (rfiData.description) {
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("DESCRIPTION/QUESTION", margin, yPosition);
      yPosition += 10;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      yPosition = addWrappedText(
        rfiData.description,
        margin,
        yPosition,
        pageWidth - 2 * margin,
        10,
      );
      yPosition += 10;
    }

    // Reference Documents Section
    if (rfiData.drawings || rfiData.specifications) {
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("REFERENCE DOCUMENTS", margin, yPosition);
      yPosition += 10;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");

      if (rfiData.drawings) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Drawings:", margin, yPosition);
        pdf.setFont("helvetica", "normal");
        yPosition = addWrappedText(
          rfiData.drawings,
          margin + 40,
          yPosition,
          pageWidth - margin - 50,
          10,
        );
        yPosition += 3;
      }

      if (rfiData.specifications) {
        pdf.setFont("helvetica", "bold");
        pdf.text("Specifications:", margin, yPosition);
        pdf.setFont("helvetica", "normal");
        yPosition = addWrappedText(
          rfiData.specifications,
          margin + 40,
          yPosition,
          pageWidth - margin - 50,
          10,
        );
        yPosition += 3;
      }

      yPosition += 10;
    }

    // Additional Notes Section
    if (rfiData.additionalNotes) {
      pdf.setFontSize(14);
      pdf.setFont("helvetica", "bold");
      pdf.text("ADDITIONAL NOTES", margin, yPosition);
      yPosition += 10;

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "normal");
      yPosition = addWrappedText(
        rfiData.additionalNotes,
        margin,
        yPosition,
        pageWidth - 2 * margin,
        10,
      );
      yPosition += 15;
    }

    // Response Section
    if (yPosition > 220) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFontSize(14);
    pdf.setFont("helvetica", "bold");
    pdf.text("RESPONSE SECTION", margin, yPosition);
    yPosition += 15;

    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text("Response:", margin, yPosition);
    yPosition += 10;

    // Draw response lines
    for (let i = 0; i < 5; i++) {
      pdf.line(margin, yPosition, pageWidth - margin, yPosition);
      yPosition += 10;
    }

    yPosition += 10;
    pdf.text(
      "Responded By: ________________________    Date: ________________",
      margin,
      yPosition,
    );

    // Save the PDF
    const filename = `RFI-${rfiData.rfiNumber || "Draft"}-${rfiData.projectName.replace(/\s+/g, "-")}.pdf`;
    pdf.save(filename);

    toast({
      title: "PDF Downloaded",
      description: "Your RFI has been downloaded as a PDF file.",
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/project-planning">Project Planning</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>RFI Generator</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Construction RFI Generator</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Generate professional Request for Information documents to get
          clarification from architects, engineers, and project owners
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Input Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>RFI Information</CardTitle>
              <CardDescription>
                Fill out the details for your Request for Information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    value={rfiData.projectName}
                    onChange={(e) => updateField("projectName", e.target.value)}
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <Label htmlFor="projectNumber">Project Number</Label>
                  <Input
                    id="projectNumber"
                    value={rfiData.projectNumber}
                    onChange={(e) =>
                      updateField("projectNumber", e.target.value)
                    }
                    placeholder="Project #"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="rfiNumber">RFI Number</Label>
                  <Input
                    id="rfiNumber"
                    value={rfiData.rfiNumber}
                    onChange={(e) => updateField("rfiNumber", e.target.value)}
                    placeholder="RFI-001"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={rfiData.date}
                    onChange={(e) => updateField("date", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="responseRequiredBy">
                    Response Required By
                  </Label>
                  <Input
                    id="responseRequiredBy"
                    type="date"
                    value={rfiData.responseRequiredBy}
                    onChange={(e) =>
                      updateField("responseRequiredBy", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Communication Details */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="to">To (Recipient)</Label>
                  <Input
                    id="to"
                    value={rfiData.to}
                    onChange={(e) => updateField("to", e.target.value)}
                    placeholder="Architect/Engineer/Owner"
                  />
                </div>
                <div>
                  <Label htmlFor="from">From (Your Company)</Label>
                  <Input
                    id="from"
                    value={rfiData.from}
                    onChange={(e) => updateField("from", e.target.value)}
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="requestedBy">Requested By</Label>
                <Input
                  id="requestedBy"
                  value={rfiData.requestedBy}
                  onChange={(e) => updateField("requestedBy", e.target.value)}
                  placeholder="Your name and title"
                />
              </div>

              {/* RFI Details */}
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  value={rfiData.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  placeholder="Brief description of the request"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select
                    value={rfiData.priority}
                    onValueChange={(value) => updateField("priority", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={rfiData.category}
                    onValueChange={(value) => updateField("category", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architectural">
                        Architectural
                      </SelectItem>
                      <SelectItem value="structural">Structural</SelectItem>
                      <SelectItem value="mechanical">Mechanical</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description/Question *</Label>
                <Textarea
                  id="description"
                  value={rfiData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Provide detailed description of your question or request for clarification..."
                  rows={4}
                />
              </div>

              {/* Reference Documents */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="drawings">Referenced Drawings</Label>
                  <Input
                    id="drawings"
                    value={rfiData.drawings}
                    onChange={(e) => updateField("drawings", e.target.value)}
                    placeholder="Drawing numbers/names"
                  />
                </div>
                <div>
                  <Label htmlFor="specifications">
                    Referenced Specifications
                  </Label>
                  <Input
                    id="specifications"
                    value={rfiData.specifications}
                    onChange={(e) =>
                      updateField("specifications", e.target.value)
                    }
                    placeholder="Spec sections"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={rfiData.additionalNotes}
                  onChange={(e) =>
                    updateField("additionalNotes", e.target.value)
                  }
                  placeholder="Any additional information or context..."
                  rows={3}
                />
              </div>

              <Button onClick={generateRFI} className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Generate RFI
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview/Actions */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>RFI Preview</CardTitle>
                  <CardDescription>
                    Review your RFI before downloading
                  </CardDescription>
                </div>
                {showPreview && (
                  <Button variant="outline" size="sm" onClick={downloadPDF}>
                    <Download className="mr-1 h-4 w-4" />
                    Download PDF
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {!showPreview ? (
                <div className="text-muted-foreground py-12 text-center">
                  <HelpCircle className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p>
                    Fill out the RFI form and click "Generate RFI" to see the
                    preview
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="mb-2 font-semibold">
                      Project: {rfiData.projectName}
                    </h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <strong>RFI #:</strong> {rfiData.rfiNumber || "Draft"}
                      </div>
                      <div>
                        <strong>Subject:</strong> {rfiData.subject}
                      </div>
                      {rfiData.priority && (
                        <div className="flex items-center gap-2">
                          <strong>Priority:</strong>
                          <Badge
                            variant={
                              rfiData.priority === "urgent"
                                ? "destructive"
                                : rfiData.priority === "high"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {rfiData.priority}
                          </Badge>
                        </div>
                      )}
                      {rfiData.category && (
                        <div>
                          <strong>Category:</strong> {rfiData.category}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-sm">
                    <strong>Description:</strong>
                    <p className="text-muted-foreground mt-1">
                      {rfiData.description}
                    </p>
                  </div>

                  {(rfiData.drawings || rfiData.specifications) && (
                    <div className="text-sm">
                      <strong>References:</strong>
                      <ul className="text-muted-foreground mt-1 space-y-1 text-xs">
                        {rfiData.drawings && (
                          <li>Drawings: {rfiData.drawings}</li>
                        )}
                        {rfiData.specifications && (
                          <li>Specs: {rfiData.specifications}</li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Enhanced Educational Content */}
      <div className="mt-16 space-y-12">
        {/* CTA Section */}
        <div className="from-primary/10 via-primary/5 to-primary/10 rounded-2xl bg-gradient-to-r p-8 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/20 rounded-full p-3">
                <Zap className="text-primary h-8 w-8" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Streamline Your Project Management
            </h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-3xl text-lg">
              Contractor+ is the ultimate solution that combines the best in
              construction project management and relationship management into
              the perfect operating system for build and service contractors.
            </p>
            <div className="mb-8 grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <BarChart3 className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Project Management</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced scheduling, resource allocation, and progress
                  tracking
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <Users className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Client Relationships</h3>
                <p className="text-muted-foreground text-sm">
                  Streamlined communication and client management tools
                </p>
              </div>
              <div className="text-center">
                <div className="mb-3 rounded-lg bg-white/50 p-4">
                  <FileText className="text-primary mx-auto h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold">Complete Integration</h3>
                <p className="text-muted-foreground text-sm">
                  Everything you need in one powerful platform
                </p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a
                href="https://contractorplus.app/project-management-software-for-contractors"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Learn More About Contractor+
                <ArrowRight className="ml-2 h-4 w-4" />
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* How-to Guide */}
        <div className="bg-muted/30 rounded-xl p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Master Construction RFI Management
          </h2>

          <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-white/50 text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Fill Project Details</h3>
                <p className="text-muted-foreground text-sm">
                  Enter project information and assign RFI numbers for tracking
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Define the Question</h3>
                <p className="text-muted-foreground text-sm">
                  Clearly describe what clarification you need from the design
                  team
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Add References</h3>
                <p className="text-muted-foreground text-sm">
                  Include drawing numbers and specification sections for context
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 text-center">
              <CardContent className="pt-6">
                <div className="bg-primary/10 mx-auto mb-4 w-fit rounded-full p-3">
                  <span className="text-primary text-lg font-bold">4</span>
                </div>
                <h3 className="mb-2 font-semibold">Download PDF</h3>
                <p className="text-muted-foreground text-sm">
                  Generate professional PDF documents ready for distribution
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
                <HelpCircle className="text-primary mr-2 h-5 w-5" />
                RFI Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Be Specific:</strong> Ask clear, specific questions
                    that can be answered definitively
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Reference Documents:</strong> Always cite relevant
                    drawings and specifications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Set Deadlines:</strong> Include when you need the
                    response to avoid delays
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Track Numbers:</strong> Use sequential RFI numbers
                    for easy organization
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="text-primary mr-2 h-5 w-5" />
                Communication Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Professional Tone:</strong> Keep language formal and
                    business-appropriate
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Provide Context:</strong> Explain why the
                    clarification is needed
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Follow Up:</strong> Send reminders if responses are
                    overdue
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
                  <span>
                    <strong>Document Everything:</strong> Keep records of all
                    RFI correspondence
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Industry Insights */}
        <Card className="from-muted/50 to-muted/20 bg-gradient-to-br">
          <CardHeader>
            <CardTitle className="text-center">
              RFI Process Statistics
            </CardTitle>
            <CardDescription className="text-center">
              Industry data on construction communication
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 text-center md:grid-cols-3">
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">78%</div>
                <p className="text-muted-foreground text-sm">
                  of project delays stem from poor communication and unclear
                  documentation
                </p>
              </div>
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">12</div>
                <p className="text-muted-foreground text-sm">
                  average number of RFIs per $1M of construction project value
                </p>
              </div>
              <div>
                <div className="text-primary mb-2 text-2xl font-bold">3-7</div>
                <p className="text-muted-foreground text-sm">
                  days typical response time for standard RFI requests
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
