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
  feeStructure: string;
  feePercentage: string;
  fixedFee: string;
  maxCostLimit: string;
  startDate: string;
  estimatedDuration: string;
  paymentTerms: string;
  invoiceFrequency: string;
  retentionAmount: string;
  warrantyPeriod: string;
  permitResponsibility: string;
  insuranceCoverage: string;
  auditRights: boolean;
  expenseReporting: boolean;
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
  projectType: "Construction",
  projectDescription: "",
  feeStructure: "Percentage",
  feePercentage: "10%",
  fixedFee: "",
  maxCostLimit: "",
  startDate: "",
  estimatedDuration: "",
  paymentTerms: "Net 15",
  invoiceFrequency: "Monthly",
  retentionAmount: "5%",
  warrantyPeriod: "1 Year",
  permitResponsibility: "Contractor",
  insuranceCoverage: "",
  auditRights: true,
  expenseReporting: true,
  disputeResolution: "Mediation",
};

export default function CostPlusContract() {
  const [contractData, setContractData] = useState<ContractData>(initialData);

  useMetaTags({
    title: "Cost Plus Contract Template - Free Interactive Form",
    description:
      "Create professional cost plus contracts with our free interactive template. Perfect for large projects with transparent cost tracking and fee structures with instant PDF download.",
    keywords:
      "cost plus contract, cost plus fee contract, construction contract template, transparent pricing contract, contractor agreement",
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
    doc.text("COST PLUS CONTRACT", pageWidth / 2, yPosition, {
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
      `Cost_Plus_Contract_${contractData.clientName.replace(/\s+/g, "_")}.pdf`,
    );
  };

  const generateContractText = () => {
    const feeStructureText =
      contractData.feeStructure === "Percentage"
        ? `${contractData.feePercentage} of total project costs`
        : `Fixed fee of $${contractData.fixedFee}`;

    return `
COST PLUS CONTRACT

This Cost Plus Contract ("Agreement") is entered into on ${new Date().toLocaleDateString()} between:

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
The Contractor agrees to provide labor, materials, equipment, and services on a cost plus fee basis for the project described above. Work will be performed in accordance with industry standards and applicable codes.

2. COST PLUS FEE STRUCTURE
The Client agrees to reimburse the Contractor for all actual project costs plus a contractor fee of ${feeStructureText}.

Project costs include:
- All labor costs at actual wages paid
- Materials at actual cost with receipts
- Equipment rental at actual rates
- Subcontractor costs at actual amounts paid
- Permits and inspection fees
- Other direct project expenses

3. MAXIMUM CONTRACT AMOUNT
${contractData.maxCostLimit ? `Not-to-exceed amount: $${contractData.maxCostLimit}` : "No maximum cost limit specified"}
Any costs exceeding this amount require written authorization from the Client.

4. PAYMENT TERMS
Invoice Frequency: ${contractData.invoiceFrequency}
Payment Terms: ${contractData.paymentTerms}
Retention: ${contractData.retentionAmount}

All invoices will include detailed cost breakdowns with supporting documentation.

5. TIME FOR PERFORMANCE
Work shall commence on ${contractData.startDate}
Estimated Duration: ${contractData.estimatedDuration}

6. COST DOCUMENTATION AND TRANSPARENCY
Contractor shall maintain detailed records of all project costs including:
- Daily labor reports with hours and wage rates
- Material purchase receipts and delivery tickets
- Equipment rental agreements and invoices
- Subcontractor invoices and payment records
- All other project-related expenses

7. AUDIT RIGHTS
${contractData.auditRights ? "Client has the right to audit all project cost records during normal business hours with reasonable notice." : "Standard cost documentation will be provided with invoices."}

8. EXPENSE REPORTING
${contractData.expenseReporting ? "Contractor will provide detailed monthly cost reports showing all expenses by category with supporting documentation." : "Standard expense reporting will be provided with invoices."}

9. PERMITS AND APPROVALS
Responsibility for permits: ${contractData.permitResponsibility}

10. INSURANCE
Contractor shall maintain insurance coverage of $${contractData.insuranceCoverage} throughout the project duration.

11. WARRANTY
Contractor warrants all work for a period of ${contractData.warrantyPeriod} from the date of completion.

12. CHANGE ORDERS
All changes to the work scope must be documented in writing and signed by both parties. Changes may affect the project timeline and maximum cost limit.

13. COST CONTROLS
Both parties agree to work collaboratively to control project costs while maintaining quality standards. Regular cost reviews will be conducted to ensure the project remains within budget expectations.

14. DISPUTE RESOLUTION
Disputes shall be resolved through ${contractData.disputeResolution}.

15. GENERAL PROVISIONS
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
          className="mb-4 inline-flex items-center duration-300 hover:text-red-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contract Templates
        </Link>

        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Cost Plus Contract
          </h1>
          <p className="text-aliceBlue mx-auto max-w-3xl text-lg xl:text-xl">
            Professional contract template for transparent cost-based
            construction projects. Perfect for large projects where cost
            transparency and detailed documentation are essential.
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
                Fill in the details below to customize your cost plus contract
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contractor Information */}
              <div className="space-y-4">
                <h3 className="border-prediction border-b pb-2 text-lg font-semibold">
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
                <h3 className="border-stiletto border-prediction border-b pb-2 text-lg font-semibold">
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
                <h3 className="border-stiletto border-prediction border-b pb-2 text-lg font-semibold">
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
                        <SelectItem value="Construction">
                          New Construction
                        </SelectItem>
                        <SelectItem value="Renovation">
                          Major Renovation
                        </SelectItem>
                        <SelectItem value="Commercial">
                          Commercial Project
                        </SelectItem>
                        <SelectItem value="Infrastructure">
                          Infrastructure
                        </SelectItem>
                        <SelectItem value="Custom">Custom Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="maxCostLimit">
                      Maximum Cost Limit (Optional)
                    </Label>
                    <Input
                      id="maxCostLimit"
                      value={contractData.maxCostLimit}
                      onChange={(e) =>
                        handleInputChange("maxCostLimit", e.target.value)
                      }
                      placeholder="500,000"
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
                    placeholder="Detailed description of the work to be performed on cost plus basis..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Fee Structure */}
              <div className="space-y-4">
                <h3 className="border-prediction border-b pb-2 text-lg font-semibold">
                  Fee Structure
                </h3>
                <div className="space-y-3">
                  <Label htmlFor="feeStructure">Fee Type</Label>
                  <Select
                    value={contractData.feeStructure}
                    onValueChange={(value) =>
                      handleInputChange("feeStructure", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Percentage">
                        Percentage of Costs
                      </SelectItem>
                      <SelectItem value="Fixed">Fixed Fee</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {contractData.feeStructure === "Percentage" ? (
                  <div className="space-y-3">
                    <Label htmlFor="feePercentage">Fee Percentage</Label>
                    <Select
                      value={contractData.feePercentage}
                      onValueChange={(value) =>
                        handleInputChange("feePercentage", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8%">8%</SelectItem>
                        <SelectItem value="10%">10%</SelectItem>
                        <SelectItem value="12%">12%</SelectItem>
                        <SelectItem value="15%">15%</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Label htmlFor="fixedFee">Fixed Fee Amount</Label>
                    <Input
                      id="fixedFee"
                      value={contractData.fixedFee}
                      onChange={(e) =>
                        handleInputChange("fixedFee", e.target.value)
                      }
                      placeholder="50,000"
                    />
                  </div>
                )}
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="border-prediction border-b pb-2 text-lg font-semibold">
                  Timeline
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
                    <Label htmlFor="estimatedDuration">
                      Estimated Duration
                    </Label>
                    <Input
                      id="estimatedDuration"
                      value={contractData.estimatedDuration}
                      onChange={(e) =>
                        handleInputChange("estimatedDuration", e.target.value)
                      }
                      placeholder="6-8 months"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="space-y-4">
                <h3 className="border-prediction border-b pb-2 text-lg font-semibold">
                  Payment Terms
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
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
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
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
                  <div className="space-y-3">
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
                <h3 className="border-prediction border-b pb-2 text-lg font-semibold">
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
                      id="auditRights"
                      checked={contractData.auditRights}
                      onCheckedChange={(checked) =>
                        handleInputChange("auditRights", checked as boolean)
                      }
                    />
                    <Label htmlFor="auditRights">
                      Include client audit rights
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="expenseReporting"
                      checked={contractData.expenseReporting}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "expenseReporting",
                          checked as boolean,
                        )
                      }
                    />
                    <Label htmlFor="expenseReporting">
                      Include detailed expense reporting
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
              <CardTitle className="flex flex-wrap items-center justify-between gap-4">
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
              <div
                data-lenis-prevent
                className="prose bg-shutter custom-scrollbar max-h-96 max-w-none overflow-y-auto rounded-lg p-6 text-sm print:max-h-none print:overflow-visible print:bg-white print:p-0"
              >
                <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap">
                  {generateContractText()}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Educational Content */}
          <Card>
            <CardHeader>
              <CardTitle>About Cost Plus Contracts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-semibold">When to Use This Contract:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Large, complex projects with uncertain scope</li>
                  <li>Projects requiring transparency in cost management</li>
                  <li>Emergency or disaster recovery work</li>
                  <li>Research and development projects</li>
                  <li>Projects with changing requirements</li>
                </ul>

                <h4 className="font-semibold">Key Features:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Complete cost transparency with documentation</li>
                  <li>Contractor fee based on percentage or fixed amount</li>
                  <li>Maximum cost limits for budget protection</li>
                  <li>Detailed record keeping and audit rights</li>
                  <li>Regular cost reporting and monitoring</li>
                  <li>Shared risk management approach</li>
                </ul>

                <h4 className="font-semibold">Best Practices:</h4>
                <ul className="text-aliceBlue list-disc space-y-1 pl-6 text-sm">
                  <li>Establish clear maximum cost limits</li>
                  <li>Define detailed cost documentation requirements</li>
                  <li>Set up regular cost review meetings</li>
                  <li>Maintain all receipts and expense records</li>
                  <li>Provide transparent monthly cost reports</li>
                  <li>Establish audit procedures and access rights</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* SEO Content */}
      <div className="prose mt-10 max-w-none lg:mt-16">
        <h2 className="mb-4 text-2xl font-bold">
          Cost Plus Contract Template Guide
        </h2>
        <p className="text-aliceBlue mb-6">
          A cost plus contract provides complete transparency in project costs
          by reimbursing the contractor for all actual project expenses plus a
          predetermined fee. This contract structure is ideal for complex
          projects where cost predictability is less important than transparency
          and quality control.
        </p>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="mb-3 text-xl font-semibold">
              Advantages for Contractors
            </h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Guaranteed reimbursement for all legitimate costs</li>
              <li>Reduced financial risk on uncertain projects</li>
              <li>Ability to focus on quality over cost cutting</li>
              <li>Fair compensation through transparent fee structure</li>
              <li>Protection from material cost fluctuations</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="mb-3 text-xl font-semibold">Benefits for Clients</h3>
            <ul className="text-aliceBlue list-disc space-y-3 pl-6">
              <li>Complete transparency in all project costs</li>
              <li>Detailed documentation of every expense</li>
              <li>Audit rights to verify all charges</li>
              <li>Quality focus without cost-cutting pressure</li>
              <li>Flexibility to modify project scope</li>
            </ul>
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold">Important Considerations</h3>
        <p className="text-aliceBlue mb-4">
          Cost plus contracts require rigorous documentation and administrative
          processes. Both parties must commit to transparent communication and
          detailed record keeping. Regular cost reviews and monitoring are
          essential to ensure the project stays within acceptable budget
          parameters while maintaining quality standards.
        </p>

        <div className="text-darkKnight rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 pl-4 text-sm">
          <strong>Disclaimer:</strong> This template is provided for
          informational purposes and should not be considered legal advice. For
          complex projects or specific legal situations, consult with a
          qualified attorney in your jurisdiction.
        </div>
      </div>
    </div>
  );
}
