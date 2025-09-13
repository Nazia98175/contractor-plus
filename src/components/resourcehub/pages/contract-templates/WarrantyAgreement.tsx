"use client";
import { useState } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import Link from "next/link";
import { FileText, Download, Shield, Home } from "lucide-react";
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
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

interface FormData {
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
  projectDescription: string;
  workmanshipWarrantyPeriod: string;
  materialsWarrantyPeriod: string;
  warrantyStartDate: string;
  warrantyExclusions: string;
  laborWarrantyDetails: string;
  materialsWarrantyDetails: string;
  transferability: string;
  maintenanceRequirements: string;
  signatureDate: string;
}

export default function WarrantyAgreement() {
  const [formData, setFormData] = useState<FormData>({
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
    projectDescription: "",
    workmanshipWarrantyPeriod: "12",
    materialsWarrantyPeriod: "12",
    warrantyStartDate: "",
    warrantyExclusions: "",
    laborWarrantyDetails: "",
    materialsWarrantyDetails: "",
    transferability: "non-transferable",
    maintenanceRequirements: "",
    signatureDate: "",
  });

  useMetaTags({
    title: "Free Warranty Agreement Template - Construction Warranty Contract",
    description:
      "Create a professional construction warranty agreement with our free template. Covers workmanship, materials, warranty periods, and terms for construction projects.",
    keywords:
      "warranty agreement, construction warranty, contractor warranty, warranty template, workmanship warranty, materials warranty, construction contract",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateContract = () => {
    const contract = `
WARRANTY AGREEMENT

This Warranty Agreement ("Agreement") is entered into on ${formData.signatureDate || "[DATE]"}, between:

CONTRACTOR:
${formData.contractorName || "[CONTRACTOR NAME]"}
${formData.contractorAddress || "[CONTRACTOR ADDRESS]"}
Phone: ${formData.contractorPhone || "[PHONE]"}
Email: ${formData.contractorEmail || "[EMAIL]"}
License #: ${formData.contractorLicense || "[LICENSE NUMBER]"}

CLIENT:
${formData.clientName || "[CLIENT NAME]"}
${formData.clientAddress || "[CLIENT ADDRESS]"}
Phone: ${formData.clientPhone || "[PHONE]"}
Email: ${formData.clientEmail || "[EMAIL]"}

PROJECT INFORMATION:
Property Address: ${formData.projectAddress || "[PROJECT ADDRESS]"}
Project Description: ${formData.projectDescription || "[PROJECT DESCRIPTION]"}

WARRANTY TERMS:

1. WORKMANSHIP WARRANTY
Contractor warrants all workmanship for a period of ${formData.workmanshipWarrantyPeriod} months from the warranty start date of ${formData.warrantyStartDate || "[WARRANTY START DATE]"}.

${
  formData.laborWarrantyDetails
    ? `Additional Labor Warranty Details:
${formData.laborWarrantyDetails}`
    : ""
}

2. MATERIALS WARRANTY
Contractor warrants all materials for a period of ${formData.materialsWarrantyPeriod} months from the warranty start date.

${
  formData.materialsWarrantyDetails
    ? `Additional Materials Warranty Details:
${formData.materialsWarrantyDetails}`
    : ""
}

3. WARRANTY COVERAGE
This warranty covers defects in workmanship and materials that affect the structural integrity, functionality, or appearance of the completed work.

4. WARRANTY EXCLUSIONS
The following items are excluded from this warranty:
${formData.warrantyExclusions || "- Normal wear and tear\n- Damage caused by misuse or negligence\n- Damage from natural disasters\n- Modifications made by others"}

5. TRANSFERABILITY
This warranty is ${formData.transferability} and applies only to the original client unless otherwise specified.

6. MAINTENANCE REQUIREMENTS
${
  formData.maintenanceRequirements
    ? `Client agrees to perform the following maintenance to keep warranty valid:
${formData.maintenanceRequirements}`
    : "Client agrees to perform reasonable maintenance to preserve the warranty coverage."
}

7. WARRANTY CLAIMS
All warranty claims must be submitted in writing within the warranty period. Contractor will respond within 10 business days and remedy valid warranty issues at no cost to the client.

8. LIMITATION OF LIABILITY
Contractor's liability under this warranty is limited to repair or replacement of defective work or materials. This warranty is in lieu of all other warranties, express or implied.

SIGNATURES:

Contractor: ___________________________ Date: ___________
${formData.contractorName || "[CONTRACTOR NAME]"}

Client: ___________________________ Date: ___________
${formData.clientName || "[CLIENT NAME]"}
    `.trim();

    const blob = new Blob([contract], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Warranty_Agreement_${formData.clientName || "Client"}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
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
              <BreadcrumbLink asChild>
                <Link href="/resources/contract-templates">
                  Contract Templates
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Warranty Agreement</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-start justify-center gap-3">
          <Shield className="mt-0.5 h-8 w-8 text-red-500 sm:mt-1" />
          <h1 className="text-3xl font-bold md:text-4xl">
            Warranty Agreement Template
          </h1>
        </div>
        <p className="text-decemberSky mx-auto max-w-2xl text-xl">
          Create a comprehensive warranty agreement that protects both
          contractor and client with clear warranty terms and coverage details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:gap-8">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contractor Information</CardTitle>
              <CardDescription>Enter your business details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="contractorName">Contractor Name</Label>
                <Input
                  id="contractorName"
                  value={formData.contractorName}
                  onChange={(e) =>
                    handleInputChange("contractorName", e.target.value)
                  }
                  placeholder="Your Company Name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="contractorAddress">Address</Label>
                <Textarea
                  id="contractorAddress"
                  value={formData.contractorAddress}
                  onChange={(e) =>
                    handleInputChange("contractorAddress", e.target.value)
                  }
                  placeholder="Your business address"
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="contractorPhone">Phone</Label>
                  <Input
                    id="contractorPhone"
                    value={formData.contractorPhone}
                    onChange={(e) =>
                      handleInputChange("contractorPhone", e.target.value)
                    }
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="contractorEmail">Email</Label>
                  <Input
                    id="contractorEmail"
                    type="email"
                    value={formData.contractorEmail}
                    onChange={(e) =>
                      handleInputChange("contractorEmail", e.target.value)
                    }
                    placeholder="contractor@email.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="contractorLicense">License Number</Label>
                <Input
                  id="contractorLicense"
                  value={formData.contractorLicense}
                  onChange={(e) =>
                    handleInputChange("contractorLicense", e.target.value)
                  }
                  placeholder="License #123456"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Client Information</CardTitle>
              <CardDescription>Enter client details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) =>
                    handleInputChange("clientName", e.target.value)
                  }
                  placeholder="Client full name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="clientAddress">Address</Label>
                <Textarea
                  id="clientAddress"
                  value={formData.clientAddress}
                  onChange={(e) =>
                    handleInputChange("clientAddress", e.target.value)
                  }
                  placeholder="Client address"
                  rows={2}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="clientPhone">Phone</Label>
                  <Input
                    id="clientPhone"
                    value={formData.clientPhone}
                    onChange={(e) =>
                      handleInputChange("clientPhone", e.target.value)
                    }
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="clientEmail">Email</Label>
                  <Input
                    id="clientEmail"
                    type="email"
                    value={formData.clientEmail}
                    onChange={(e) =>
                      handleInputChange("clientEmail", e.target.value)
                    }
                    placeholder="client@email.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Describe the warranted work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="projectAddress">Project Address</Label>
                <Textarea
                  id="projectAddress"
                  value={formData.projectAddress}
                  onChange={(e) =>
                    handleInputChange("projectAddress", e.target.value)
                  }
                  placeholder="Address where work was performed"
                  rows={2}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) =>
                    handleInputChange("projectDescription", e.target.value)
                  }
                  placeholder="Detailed description of work completed"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Warranty Terms</CardTitle>
              <CardDescription>
                Configure warranty periods and coverage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Label htmlFor="workmanshipWarrantyPeriod">
                    Workmanship Warranty (months)
                  </Label>
                  <Select
                    value={formData.workmanshipWarrantyPeriod}
                    onValueChange={(value) =>
                      handleInputChange("workmanshipWarrantyPeriod", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="materialsWarrantyPeriod">
                    Materials Warranty (months)
                  </Label>
                  <Select
                    value={formData.materialsWarrantyPeriod}
                    onValueChange={(value) =>
                      handleInputChange("materialsWarrantyPeriod", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                      <SelectItem value="36">36 months</SelectItem>
                      <SelectItem value="60">60 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="warrantyStartDate">Warranty Start Date</Label>
                <Input
                  id="warrantyStartDate"
                  type="date"
                  value={formData.warrantyStartDate}
                  onChange={(e) =>
                    handleInputChange("warrantyStartDate", e.target.value)
                  }
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="transferability">
                  Warranty Transferability
                </Label>
                <Select
                  value={formData.transferability}
                  onValueChange={(value) =>
                    handleInputChange("transferability", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="non-transferable">
                      Non-transferable
                    </SelectItem>
                    <SelectItem value="transferable">
                      Transferable to new owner
                    </SelectItem>
                    <SelectItem value="limited-transfer">
                      Limited transferability
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="signatureDate">Agreement Date</Label>
                <Input
                  id="signatureDate"
                  type="date"
                  value={formData.signatureDate}
                  onChange={(e) =>
                    handleInputChange("signatureDate", e.target.value)
                  }
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Terms</CardTitle>
              <CardDescription>
                Customize warranty exclusions and requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Label htmlFor="laborWarrantyDetails">
                  Labor Warranty Details (Optional)
                </Label>
                <Textarea
                  id="laborWarrantyDetails"
                  value={formData.laborWarrantyDetails}
                  onChange={(e) =>
                    handleInputChange("laborWarrantyDetails", e.target.value)
                  }
                  placeholder="Additional details about workmanship warranty coverage"
                  rows={2}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="materialsWarrantyDetails">
                  Materials Warranty Details (Optional)
                </Label>
                <Textarea
                  id="materialsWarrantyDetails"
                  value={formData.materialsWarrantyDetails}
                  onChange={(e) =>
                    handleInputChange(
                      "materialsWarrantyDetails",
                      e.target.value,
                    )
                  }
                  placeholder="Additional details about materials warranty coverage"
                  rows={2}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="warrantyExclusions">Warranty Exclusions</Label>
                <Textarea
                  id="warrantyExclusions"
                  value={formData.warrantyExclusions}
                  onChange={(e) =>
                    handleInputChange("warrantyExclusions", e.target.value)
                  }
                  placeholder="Items excluded from warranty coverage"
                  rows={3}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="maintenanceRequirements">
                  Maintenance Requirements
                </Label>
                <Textarea
                  id="maintenanceRequirements"
                  value={formData.maintenanceRequirements}
                  onChange={(e) =>
                    handleInputChange("maintenanceRequirements", e.target.value)
                  }
                  placeholder="Required maintenance to keep warranty valid"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="lg:sticky lg:top-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-3">
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Contract Preview
                  </CardTitle>
                  <CardDescription>
                    Review your warranty agreement before downloading
                  </CardDescription>
                </div>
                <Button
                  onClick={generateContract}
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-shutter max-h-96 overflow-y-auto rounded-lg p-4 text-sm">
                <div className="mb-4 text-center font-bold">
                  WARRANTY AGREEMENT
                </div>

                <p className="mb-2">
                  <strong>Date:</strong> {formData.signatureDate || "[DATE]"}
                </p>

                <Separator className="my-3" />

                <div className="mb-3">
                  <strong>CONTRACTOR:</strong>
                  <br />
                  {formData.contractorName || "[CONTRACTOR NAME]"}
                  <br />
                  {formData.contractorAddress || "[CONTRACTOR ADDRESS]"}
                  <br />
                  Phone: {formData.contractorPhone || "[PHONE]"}
                  <br />
                  Email: {formData.contractorEmail || "[EMAIL]"}
                  <br />
                  License #: {formData.contractorLicense || "[LICENSE NUMBER]"}
                </div>

                <div className="mb-3">
                  <strong>CLIENT:</strong>
                  <br />
                  {formData.clientName || "[CLIENT NAME]"}
                  <br />
                  {formData.clientAddress || "[CLIENT ADDRESS]"}
                  <br />
                  Phone: {formData.clientPhone || "[PHONE]"}
                  <br />
                  Email: {formData.clientEmail || "[EMAIL]"}
                </div>

                <Separator className="my-3" />

                <div className="mb-3">
                  <strong>PROJECT:</strong>
                  <br />
                  Address: {formData.projectAddress || "[PROJECT ADDRESS]"}
                  <br />
                  Description:{" "}
                  {formData.projectDescription || "[PROJECT DESCRIPTION]"}
                </div>

                <div className="mb-3">
                  <strong>WARRANTY TERMS:</strong>
                  <br />• Workmanship: {formData.workmanshipWarrantyPeriod}{" "}
                  months
                  <br />• Materials: {formData.materialsWarrantyPeriod} months
                  <br />• Start Date:{" "}
                  {formData.warrantyStartDate || "[WARRANTY START DATE]"}
                  <br />• Transferability: {formData.transferability}
                </div>

                <div className="text-aliceBlue mt-4 text-xs">
                  Complete form to see full contract preview...
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
