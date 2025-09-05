"use client";
import { useState } from "react";
import { FileText, Download, Printer, ArrowLeft } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import jsPDF from "jspdf";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

interface ContractData {
  contractorName: string;
  contractorAddress: string;
  contractorPhone: string;
  contractorEmail: string;
  contractorLicense: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  projectAddress: string;
  projectType: string;
  projectDescription: string;
  laborRate: string;
  overtimeRate: string;
  materialMarkup: string;
  maxBudget: string;
  startDate: string;
  estimatedDuration: string;
  paymentTerms: string;
  invoiceFrequency: string;
  retentionAmount: string;
  warrantyPeriod: string;
  permitResponsibility: string;
  insuranceCoverage: string;
  changeOrderProcess: boolean;
  progressReporting: boolean;
  disputeResolution: string;
}

const initialData: ContractData = {
  contractorName: "",
  contractorAddress: "",
  contractorPhone: "",
  contractorEmail: "",
  contractorLicense: "",
  clientName: "",
  clientAddress: "",
  clientPhone: "",
  clientEmail: "",
  projectAddress: "",
  projectType: "Renovation",
  projectDescription: "",
  laborRate: "",
  overtimeRate: "",
  materialMarkup: "15%",
  maxBudget: "",
  startDate: "",
  estimatedDuration: "",
  paymentTerms: "Net 15",
  invoiceFrequency: "Weekly",
  retentionAmount: "5%",
  warrantyPeriod: "1 Year",
  permitResponsibility: "Contractor",
  insuranceCoverage: "",
  changeOrderProcess: true,
  progressReporting: true,
  disputeResolution: "Mediation",
};

export default function TimeAndMaterialsContract() {
  const [contractData, setContractData] = useState<ContractData>(initialData);

  useMetaTags({
    title: "Time and Materials Contract Template - Free Interactive Form",
    description:
      "Create professional time and materials contracts with our free interactive template. Perfect for flexible projects with hourly billing and material costs with instant PDF download.",
    keywords:
      "time and materials contract, T&M contract, hourly billing contract, construction contract template, contractor agreement",
  });

  const handleInputChange = (
    field: keyof ContractData,
    value: string | boolean,
  ) => {
    setContractData((prev) => ({ ...prev, [field]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 30;

    // Header
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("TIME AND MATERIALS CONTRACT", pageWidth / 2, yPosition, {
      align: "center",
    });

    yPosition += 20;
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    // Contract content
    const contractText = generateContractText();
    const lines = doc.splitTextToSize(contractText, pageWidth - 2 * margin);

    lines.forEach((line: string) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += 6;
    });

    doc.save(
      `Time_Materials_Contract_${contractData.clientName.replace(/\s+/g, "_")}.pdf`,
    );
  };

  const generateContractText = () => {
    return `
TIME AND MATERIALS CONTRACT

This Time and Materials Contract ("Agreement") is entered into on ${new Date().toLocaleDateString()} between:

CONTRACTOR:
${contractData.contractorName}
${contractData.contractorAddress}
Phone: ${contractData.contractorPhone}
Email: ${contractData.contractorEmail}
License #: ${contractData.contractorLicense}

CLIENT:
${contractData.clientName}
${contractData.clientAddress}
Phone: ${contractData.clientPhone}
Email: ${contractData.clientEmail}

PROJECT DETAILS:
Project Location: ${contractData.projectAddress}
Project Type: ${contractData.projectType}
Description: ${contractData.projectDescription}

TERMS AND CONDITIONS:

1. SCOPE OF WORK
The Contractor agrees to provide labor, materials, equipment, and services on a time and materials basis for the project described above. Work will be performed in accordance with industry standards and applicable codes.

2. LABOR RATES AND BILLING
Regular Labor Rate: $${contractData.laborRate} per hour
Overtime Rate (after 8 hours/day): $${contractData.overtimeRate} per hour
Material Markup: ${contractData.materialMarkup}

3. MAXIMUM CONTRACT AMOUNT
${contractData.maxBudget ? `Not-to-exceed amount: $${contractData.maxBudget}` : "No maximum amount specified"}
Any work exceeding this amount requires written authorization from the Client.

4. PAYMENT TERMS
Invoice Frequency: ${contractData.invoiceFrequency}
Payment Terms: ${contractData.paymentTerms}
Retention: ${contractData.retentionAmount}

5. TIME FOR PERFORMANCE
Work shall commence on ${contractData.startDate}
Estimated Duration: ${contractData.estimatedDuration}

6. MATERIALS AND EXPENSES
All materials will be billed at cost plus ${contractData.materialMarkup} markup. Receipts will be provided for all material purchases. Equipment rental and other project expenses will be billed at actual cost.

7. PERMITS AND APPROVALS
Responsibility for permits: ${contractData.permitResponsibility}

8. INSURANCE
Contractor shall maintain insurance coverage of $${contractData.insuranceCoverage} throughout the project duration.

9. WARRANTY
Contractor warrants all work for a period of ${contractData.warrantyPeriod} from the date of completion.

10. CHANGE ORDERS
${contractData.changeOrderProcess ? "All changes to the work scope must be documented in writing and signed by both parties before implementation." : "No changes to the original scope are permitted without written agreement."}

11. PROGRESS REPORTING
${contractData.progressReporting ? "Contractor will provide weekly progress reports including hours worked, materials used, and project status." : "Standard progress reporting will be provided with invoices."}

12. RECORD KEEPING
Contractor shall maintain detailed records of all time worked and materials used, which shall be available for Client inspection upon reasonable request.

13. DISPUTE RESOLUTION
Disputes shall be resolved through ${contractData.disputeResolution}.

14. GENERAL PROVISIONS
This contract represents the entire agreement between the parties and may only be modified in writing signed by both parties.

SIGNATURES:

Contractor: ___________________________ Date: ___________
${contractData.contractorName}

Client: ___________________________ Date: ___________
${contractData.clientName}

Witness: ___________________________ Date: ___________
`;
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Back Button and Header */}
      <div className="mb-8">
        <Link
          href="/resources/contract-templates"
          className="text-primary mb-4 inline-flex items-center hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contract Templates
        </Link>

        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Time and Materials Contract
          </h1>
          <p className="text-aliceBlue mx-auto max-w-3xl text-xl">
            Professional contract template for flexible construction projects
            with hourly billing and material costs. Perfect for renovation,
            repair, and variable-scope projects.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Contract Information
              </CardTitle>
              <CardDescription>
                Fill in the details below to customize your time and materials
                contract
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contractor Information */}
              <div className="space-y-4">
                <h3 className="border-b pb-2 text-lg font-semibold">
                  Contractor Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="contractorName">Company/Name *</Label>
                    <Input
                      id="contractorName"
                      value={contractData.contractorName}
                      onChange={(e) =>
                        handleInputChange("contractorName", e.target.value)
                      }
                      placeholder="ABC Construction LLC"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contractorLicense">License Number *</Label>
                    <Input
                      id="contractorLicense"
                      value={contractData.contractorLicense}
                      onChange={(e) =>
                        handleInputChange("contractorLicense", e.target.value)
                      }
                      placeholder="C-123456"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contractorAddress">Address *</Label>
                  <Textarea
                    id="contractorAddress"
                    value={contractData.contractorAddress}
                    onChange={(e) =>
                      handleInputChange("contractorAddress", e.target.value)
                    }
                    placeholder="123 Business St, City, State 12345"
                    rows={2}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="contractorPhone">Phone *</Label>
                    <Input
                      id="contractorPhone"
                      value={contractData.contractorPhone}
                      onChange={(e) =>
                        handleInputChange("contractorPhone", e.target.value)
                      }
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contractorEmail">Email *</Label>
                    <Input
                      id="contractorEmail"
                      type="email"
                      value={contractData.contractorEmail}
                      onChange={(e) =>
                        handleInputChange("contractorEmail", e.target.value)
                      }
                      placeholder="contact@abcconstruction.com"
                    />
                  </div>
                </div>
              </div>

              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Client Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="clientName">Client Name *</Label>
                    <Input
                      id="clientName"
                      value={contractData.clientName}
                      onChange={(e) =>
                        handleInputChange("clientName", e.target.value)
                      }
                      placeholder="John & Jane Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientPhone">Phone</Label>
                    <Input
                      id="clientPhone"
                      value={contractData.clientPhone}
                      onChange={(e) =>
                        handleInputChange("clientPhone", e.target.value)
                      }
                      placeholder="(555) 987-6543"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="clientAddress">Address *</Label>
                  <Textarea
                    id="clientAddress"
                    value={contractData.clientAddress}
                    onChange={(e) =>
                      handleInputChange("clientAddress", e.target.value)
                    }
                    placeholder="456 Client Ave, City, State 12345"
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="clientEmail">Email</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={contractData.clientEmail}
                    onChange={(e) =>
                      handleInputChange("clientEmail", e.target.value)
                    }
                    placeholder="john.smith@email.com"
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Project Information
                </h3>
                <div>
                  <Label htmlFor="projectAddress">Project Address *</Label>
                  <Textarea
                    id="projectAddress"
                    value={contractData.projectAddress}
                    onChange={(e) =>
                      handleInputChange("projectAddress", e.target.value)
                    }
                    placeholder="789 Project Rd, City, State 12345"
                    rows={2}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      value={contractData.projectType}
                      onValueChange={(value) =>
                        handleInputChange("projectType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Renovation">Renovation</SelectItem>
                        <SelectItem value="Repair">Repair</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                        <SelectItem value="Addition">Addition</SelectItem>
                        <SelectItem value="Custom Work">Custom Work</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="maxBudget">Maximum Budget (Optional)</Label>
                    <Input
                      id="maxBudget"
                      value={contractData.maxBudget}
                      onChange={(e) =>
                        handleInputChange("maxBudget", e.target.value)
                      }
                      placeholder="25,000"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="projectDescription">
                    Project Description *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    value={contractData.projectDescription}
                    onChange={(e) =>
                      handleInputChange("projectDescription", e.target.value)
                    }
                    placeholder="Detailed description of the work to be performed on time and materials basis..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Rates and Pricing */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Rates and Pricing
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="laborRate">Labor Rate (per hour) *</Label>
                    <Input
                      id="laborRate"
                      value={contractData.laborRate}
                      onChange={(e) =>
                        handleInputChange("laborRate", e.target.value)
                      }
                      placeholder="75"
                    />
                  </div>
                  <div>
                    <Label htmlFor="overtimeRate">
                      Overtime Rate (per hour)
                    </Label>
                    <Input
                      id="overtimeRate"
                      value={contractData.overtimeRate}
                      onChange={(e) =>
                        handleInputChange("overtimeRate", e.target.value)
                      }
                      placeholder="100"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="materialMarkup">Material Markup</Label>
                  <Select
                    value={contractData.materialMarkup}
                    onValueChange={(value) =>
                      handleInputChange("materialMarkup", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10%">10%</SelectItem>
                      <SelectItem value="15%">15%</SelectItem>
                      <SelectItem value="20%">20%</SelectItem>
                      <SelectItem value="25%">25%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Timeline
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={contractData.startDate}
                      onChange={(e) =>
                        handleInputChange("startDate", e.target.value)
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="estimatedDuration">
                      Estimated Duration
                    </Label>
                    <Input
                      id="estimatedDuration"
                      value={contractData.estimatedDuration}
                      onChange={(e) =>
                        handleInputChange("estimatedDuration", e.target.value)
                      }
                      placeholder="2-3 weeks"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Payment Terms
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="invoiceFrequency">Invoice Frequency</Label>
                    <Select
                      value={contractData.invoiceFrequency}
                      onValueChange={(value) =>
                        handleInputChange("invoiceFrequency", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Weekly">Weekly</SelectItem>
                        <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="Monthly">Monthly</SelectItem>
                        <SelectItem value="Upon Completion">
                          Upon Completion
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="paymentTerms">Payment Terms</Label>
                    <Select
                      value={contractData.paymentTerms}
                      onValueChange={(value) =>
                        handleInputChange("paymentTerms", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Due Upon Receipt">
                          Due Upon Receipt
                        </SelectItem>
                        <SelectItem value="Net 15">Net 15</SelectItem>
                        <SelectItem value="Net 30">Net 30</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="retentionAmount">Retention Amount</Label>
                    <Input
                      id="retentionAmount"
                      value={contractData.retentionAmount}
                      onChange={(e) =>
                        handleInputChange("retentionAmount", e.target.value)
                      }
                      placeholder="5%"
                    />
                  </div>
                  <div>
                    <Label htmlFor="insuranceCoverage">
                      Insurance Coverage
                    </Label>
                    <Input
                      id="insuranceCoverage"
                      value={contractData.insuranceCoverage}
                      onChange={(e) =>
                        handleInputChange("insuranceCoverage", e.target.value)
                      }
                      placeholder="500,000"
                    />
                  </div>
                </div>
              </div>

              {/* Contract Terms */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Contract Terms
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="warrantyPeriod">Warranty Period</Label>
                    <Select
                      value={contractData.warrantyPeriod}
                      onValueChange={(value) =>
                        handleInputChange("warrantyPeriod", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6 Months">6 Months</SelectItem>
                        <SelectItem value="1 Year">1 Year</SelectItem>
                        <SelectItem value="2 Years">2 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="permitResponsibility">
                      Permit Responsibility
                    </Label>
                    <Select
                      value={contractData.permitResponsibility}
                      onValueChange={(value) =>
                        handleInputChange("permitResponsibility", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Contractor">Contractor</SelectItem>
                        <SelectItem value="Client">Client</SelectItem>
                        <SelectItem value="Shared">Shared</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="disputeResolution">Dispute Resolution</Label>
                  <Select
                    value={contractData.disputeResolution}
                    onValueChange={(value) =>
                      handleInputChange("disputeResolution", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mediation">Mediation</SelectItem>
                      <SelectItem value="Arbitration">Arbitration</SelectItem>
                      <SelectItem value="Court Litigation">
                        Court Litigation
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="changeOrderProcess"
                      checked={contractData.changeOrderProcess}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "changeOrderProcess",
                          checked as boolean,
                        )
                      }
                    />
                    <Label htmlFor="changeOrderProcess">
                      Include change order process
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="progressReporting"
                      checked={contractData.progressReporting}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "progressReporting",
                          checked as boolean,
                        )
                      }
                    />
                    <Label htmlFor="progressReporting">
                      Include weekly progress reporting
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Contract Preview</span>
                <div className="flex gap-2">
                  <Button
                    onClick={() => window.print()}
                    variant="outline"
                    size="sm"
                  >
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button onClick={generatePDF} size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose bg-shutter max-h-96 max-w-none overflow-y-auto rounded-lg p-6 text-sm print:max-h-none print:overflow-visible print:bg-white print:p-0">
                <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
                  {generateContractText()}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <Card>
            <CardHeader>
              <CardTitle>About Time and Materials Contracts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">When to Use This Contract:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Projects with uncertain scope or duration</li>
                  <li>Renovation and repair work</li>
                  <li>Emergency or urgent projects</li>
                  <li>Custom or specialized work</li>
                  <li>Projects requiring flexibility in approach</li>
                </ul>

                <h4 className="font-semibold">Key Features:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Hourly labor billing with defined rates</li>
                  <li>Material costs plus markup structure</li>
                  <li>Not-to-exceed clauses for budget protection</li>
                  <li>Detailed record keeping requirements</li>
                  <li>Flexible scope management</li>
                  <li>Regular progress reporting</li>
                </ul>

                <h4 className="font-semibold">Best Practices:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Set clear maximum budget limits when possible</li>
                  <li>Define detailed scope even if flexible</li>
                  <li>Establish regular communication schedules</li>
                  <li>Keep detailed time and material records</li>
                  <li>Provide receipts for all material purchases</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <div className="prose mt-16 max-w-none">
        <h2 className="mb-4 text-2xl font-bold">
          Time and Materials Contract Template Guide
        </h2>
        <p className="text-aliceBlue mb-6">
          A time and materials contract is ideal for construction projects where
          the exact scope or duration is uncertain. This flexible contract
          structure allows billing based on actual time worked and materials
          used, providing transparency while protecting both parties.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Advantages for Contractors
            </h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Fair compensation for all work performed</li>
              <li>Flexibility to adapt to project changes</li>
              <li>Protection from cost overruns on materials</li>
              <li>Ability to handle uncertain project scopes</li>
              <li>Regular cash flow through frequent billing</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Protection for Clients
            </h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Transparency in all charges and expenses</li>
              <li>Not-to-exceed clauses for budget control</li>
              <li>Detailed documentation of all work</li>
              <li>Ability to monitor progress closely</li>
              <li>Flexibility to adjust project scope</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold">Important Considerations</h3>
        <p className="text-aliceBlue mb-4">
          Time and materials contracts require more administrative oversight
          than fixed-price contracts. Both parties should establish clear
          procedures for tracking time, approving material purchases, and
          monitoring project progress. Regular communication and documentation
          are essential for success.
        </p>

        <div className="rounded border-l-4 border-yellow-500 bg-yellow-50 p-4">
          <p className="text-darkKnight text-sm">
            <strong>Disclaimer:</strong> This template is provided for
            informational purposes and should not be considered legal advice.
            For complex projects or specific legal situations, consult with a
            qualified attorney in your jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}
