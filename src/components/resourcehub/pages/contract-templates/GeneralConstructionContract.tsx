"use client";
import { useState } from "react";
import { FileText, Download, Printer, ArrowLeft } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import jsPDF from "jspdf";
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
import Link from "next/link";

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
  contractPrice: string;
  startDate: string;
  completionDate: string;
  paymentSchedule: string;
  downPayment: string;
  retentionAmount: string;
  warrantyPeriod: string;
  permitResponsibility: string;
  insuranceCoverage: string;
  changeOrderProcess: boolean;
  lienWaiver: boolean;
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
  projectType: "New Construction",
  projectDescription: "",
  contractPrice: "",
  startDate: "",
  completionDate: "",
  paymentSchedule: "Net 30",
  downPayment: "",
  retentionAmount: "10%",
  warrantyPeriod: "1 Year",
  permitResponsibility: "Contractor",
  insuranceCoverage: "",
  changeOrderProcess: true,
  lienWaiver: true,
  disputeResolution: "Arbitration",
};

export default function GeneralConstructionContract() {
  const [contractData, setContractData] = useState<ContractData>(initialData);

  useMetaTags({
    title: "General Construction Contract Template - Free Interactive Form",
    description:
      "Create professional general construction contracts with our free interactive template. Perfect for new builds, remodels, and additions with customizable terms and instant PDF download.",
    keywords:
      "general construction contract, construction agreement, building contract template, contractor agreement, construction contract form",
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
    doc.text("GENERAL CONSTRUCTION CONTRACT", pageWidth / 2, yPosition, {
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
      `General_Construction_Contract_${contractData.clientName.replace(/\s+/g, "_")}.pdf`,
    );
  };

  const generateContractText = () => {
    return `
GENERAL CONSTRUCTION CONTRACT

This General Construction Contract ("Agreement") is entered into on ${new Date().toLocaleDateString()} between:

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
The Contractor agrees to provide all labor, materials, equipment, and services necessary to complete the construction project described above in accordance with the plans, specifications, and this contract.

2. CONTRACT PRICE AND PAYMENT
Total Contract Price: $${contractData.contractPrice}
Down Payment: $${contractData.downPayment}
Payment Schedule: ${contractData.paymentSchedule}
Retention: ${contractData.retentionAmount}

3. TIME FOR PERFORMANCE
Work shall commence on ${contractData.startDate} and be substantially completed by ${contractData.completionDate}.

4. PERMITS AND APPROVALS
Responsibility for permits: ${contractData.permitResponsibility}

5. INSURANCE
Contractor shall maintain insurance coverage of $${contractData.insuranceCoverage} throughout the project duration.

6. WARRANTY
Contractor warrants all work for a period of ${contractData.warrantyPeriod} from the date of substantial completion.

7. CHANGE ORDERS
${contractData.changeOrderProcess ? "All changes to the work must be documented in writing and signed by both parties before implementation." : "No changes to the original scope are permitted."}

8. LIEN WAIVER
${contractData.lienWaiver ? "Contractor agrees to provide lien waivers upon receipt of payment." : "Standard lien rights apply."}

9. DISPUTE RESOLUTION
Disputes shall be resolved through ${contractData.disputeResolution}.

10. GENERAL PROVISIONS
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
    <div className="mx-auto max-w-7xl px-4 py-8">
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
            General Construction Contract
          </h1>
          <p className="text-aliceBlue mx-auto max-w-3xl text-xl">
            Professional contract template for general construction projects
            including new builds, remodels, and additions. Fill out the form to
            generate your customized contract instantly.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Contract Information
              </CardTitle>
              <CardDescription>
                Fill in the details below to customize your general construction
                contract
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contractor Information */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Contractor Information
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
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
                  <div className="space-y-3">
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
                <div className="space-y-3">
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
                  <div className="space-y-3">
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
                  <div className="space-y-3">
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
                  <div className="space-y-3">
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
                  <div className="space-y-3">
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
                <div className="space-y-3">
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
                <div className="space-y-3">
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
                <div className="space-y-3">
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
                  <div className="space-y-3">
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
                        <SelectItem value="New Construction">
                          New Construction
                        </SelectItem>
                        <SelectItem value="Remodel">Remodel</SelectItem>
                        <SelectItem value="Addition">Addition</SelectItem>
                        <SelectItem value="Renovation">Renovation</SelectItem>
                        <SelectItem value="Commercial Build">
                          Commercial Build
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="contractPrice">Contract Price *</Label>
                    <Input
                      id="contractPrice"
                      value={contractData.contractPrice}
                      onChange={(e) =>
                        handleInputChange("contractPrice", e.target.value)
                      }
                      placeholder="150,000"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="projectDescription">
                    Project Description *
                  </Label>
                  <Textarea
                    id="projectDescription"
                    value={contractData.projectDescription}
                    onChange={(e) =>
                      handleInputChange("projectDescription", e.target.value)
                    }
                    placeholder="Detailed description of the construction work to be performed..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="border-stiletto border-b pb-2 text-lg font-semibold">
                  Project Timeline
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
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
                  <div className="space-y-3">
                    <Label htmlFor="completionDate">Completion Date *</Label>
                    <Input
                      id="completionDate"
                      type="date"
                      value={contractData.completionDate}
                      onChange={(e) =>
                        handleInputChange("completionDate", e.target.value)
                      }
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
                  <div className="space-y-3">
                    <Label htmlFor="downPayment">Down Payment</Label>
                    <Input
                      id="downPayment"
                      value={contractData.downPayment}
                      onChange={(e) =>
                        handleInputChange("downPayment", e.target.value)
                      }
                      placeholder="15,000"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="paymentSchedule">Payment Schedule</Label>
                    <Select
                      value={contractData.paymentSchedule}
                      onValueChange={(value) =>
                        handleInputChange("paymentSchedule", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Net 15">Net 15</SelectItem>
                        <SelectItem value="Net 30">Net 30</SelectItem>
                        <SelectItem value="Due Upon Completion">
                          Due Upon Completion
                        </SelectItem>
                        <SelectItem value="Progress Payments">
                          Progress Payments
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <Label htmlFor="retentionAmount">Retention Amount</Label>
                    <Input
                      id="retentionAmount"
                      value={contractData.retentionAmount}
                      onChange={(e) =>
                        handleInputChange("retentionAmount", e.target.value)
                      }
                      placeholder="10%"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="insuranceCoverage">
                      Insurance Coverage
                    </Label>
                    <Input
                      id="insuranceCoverage"
                      value={contractData.insuranceCoverage}
                      onChange={(e) =>
                        handleInputChange("insuranceCoverage", e.target.value)
                      }
                      placeholder="1,000,000"
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
                  <div className="space-y-3">
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
                        <SelectItem value="5 Years">5 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
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
                <div className="space-y-3">
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
                      id="lienWaiver"
                      checked={contractData.lienWaiver}
                      onCheckedChange={(checked) =>
                        handleInputChange("lienWaiver", checked as boolean)
                      }
                    />
                    <Label htmlFor="lienWaiver">
                      Include lien waiver provisions
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
              <CardTitle>About General Construction Contracts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">When to Use This Contract:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>New construction projects</li>
                  <li>Major home remodels and additions</li>
                  <li>Commercial construction projects</li>
                  <li>Large-scale renovation work</li>
                  <li>Multi-phase construction projects</li>
                </ul>

                <h4 className="font-semibold">Key Features:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Comprehensive scope of work definition</li>
                  <li>Clear payment schedules and terms</li>
                  <li>Timeline and milestone tracking</li>
                  <li>Change order management process</li>
                  <li>Insurance and warranty provisions</li>
                  <li>Dispute resolution procedures</li>
                </ul>

                <h4 className="font-semibold">Best Practices:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Be specific about materials and workmanship standards</li>
                  <li>Include detailed project drawings and specifications</li>
                  <li>
                    Clearly define what constitutes "substantial completion"
                  </li>
                  <li>
                    Establish procedures for handling unforeseen conditions
                  </li>
                  <li>
                    Review local and state requirements for construction
                    contracts
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <div className="prose mt-10 max-w-none lg:mt-16">
        <h2 className="mb-4 text-2xl font-bold">
          General Construction Contract Template Guide
        </h2>
        <p className="text-aliceBlue mb-6">
          A general construction contract is a legally binding agreement between
          a contractor and client that outlines all aspects of a construction
          project. This comprehensive template covers everything from project
          scope and timeline to payment terms and warranty provisions.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="mb-3 text-xl font-semibold">Essential Elements</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Detailed project description and specifications</li>
              <li>Clear timeline with start and completion dates</li>
              <li>Total contract price and payment schedule</li>
              <li>Material and labor specifications</li>
              <li>Permit and inspection responsibilities</li>
              <li>Insurance and bonding requirements</li>
              <li>Change order procedures</li>
              <li>Warranty and maintenance terms</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="mb-3 text-xl font-semibold">Legal Considerations</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Compliance with local building codes</li>
              <li>Proper contractor licensing and insurance</li>
              <li>Lien waiver and release provisions</li>
              <li>Dispute resolution mechanisms</li>
              <li>Force majeure and delay clauses</li>
              <li>Termination and breach procedures</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold">Tips for Contractors</h3>
        <p className="text-aliceBlue mb-4">
          When using this general construction contract template, make sure to
          customize it for your specific project and local requirements. Always
          include detailed specifications, clear payment terms, and
          comprehensive insurance coverage. Consider having the contract
          reviewed by a legal professional for large or complex projects.
        </p>

        <div className="rounded border-l-4 border-yellow-500 bg-yellow-100 p-4">
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
