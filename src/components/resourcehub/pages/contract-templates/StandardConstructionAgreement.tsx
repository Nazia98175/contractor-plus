"use client";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { ArrowLeft, Download, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";

interface FormData {
  date: string;
  clientName: string;
  clientAddress: string;
  contractorName: string;
  contractorAddress: string;
  workDescription: string;
  totalFixedPrice: string;
  paymentSchedule: {
    signing: string;
    milestone: string;
    milestoneDescription: string;
    substantial: string;
    final: string;
  };
  startDate: string;
  completionDate: string;
  warrantyPeriod: string;
  jurisdiction: string;
}

export default function StandardConstructionAgreement() {
  useMetaTags({
    title: "Standard Construction Agreement Template - Fixed Price Contract",
    description:
      "Free customizable standard construction agreement template for fixed-price projects. Interactive form generates a professional contract ready for download.",
    keywords:
      "construction agreement, fixed price contract, lump sum contract, construction contract template",
  });

  const [formData, setFormData] = useState<FormData>({
    date: new Date().toLocaleDateString(),
    clientName: "",
    clientAddress: "",
    contractorName: "",
    contractorAddress: "",
    workDescription: "",
    totalFixedPrice: "",
    paymentSchedule: {
      signing: "",
      milestone: "",
      milestoneDescription: "",
      substantial: "",
      final: "",
    },
    startDate: "",
    completionDate: "",
    warrantyPeriod: "1 year",
    jurisdiction: "",
  });

  const updateFormData = (field: string, value: string) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as any),
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  const generateContract = () => {
    const contractText = `STANDARD CONSTRUCTION AGREEMENT (FIXED PRICE / LUMP SUM)

THIS AGREEMENT ("Agreement") is made and entered into as of ${formData.date}, by and between ${formData.clientName}, with a principal place of business at ${formData.clientAddress} ("Client"), and ${formData.contractorName}, with a principal place of business at ${formData.contractorAddress} ("Contractor"). Client and Contractor may each be referred to herein individually as a "Party" and collectively as the "Parties."

1. Scope of Work

Contractor agrees to perform the following services ("Work"):
${formData.workDescription}

2. Contract Price

The total fixed price for the Work shall be $${formData.totalFixedPrice} (the "Contract Price"). This amount is inclusive of all labor, materials, and overhead unless expressly stated otherwise in this Agreement.

3. Payment Schedule

Client shall pay the Contract Price according to the following schedule:
	• ${formData.paymentSchedule.signing} due upon signing
	• ${formData.paymentSchedule.milestone} due upon ${formData.paymentSchedule.milestoneDescription}
	• ${formData.paymentSchedule.substantial} due upon substantial completion of the Work
	• ${formData.paymentSchedule.final} due upon final completion and acceptance by the Client

4. Timeline & Milestones

The Work shall commence on or about ${formData.startDate} and be substantially completed by ${formData.completionDate}, subject to extensions due to unforeseen circumstances or approved change orders.

5. Change Orders

Any addition to or modification of the Scope of Work shall require a written change order signed by both Parties. The change order shall include any adjustments to the Contract Price and the project timeline.

6. Liability & Warranty

Contractor warrants that all Work shall be performed in a good and workmanlike manner, in accordance with industry standards. Contractor shall correct any defects in workmanship or materials within ${formData.warrantyPeriod} from the date of final acceptance. Contractor shall maintain general liability insurance in an amount satisfactory to Client.

7. Dispute Resolution

Any dispute arising under or related to this Agreement shall be resolved by mediation, arbitration, or court jurisdiction as determined by applicable law. The Parties shall bear their own costs.

8. Governing Law

This Agreement shall be governed and construed in accordance with the laws of ${formData.jurisdiction}.

9. Entire Agreement

This Agreement, together with any attached exhibits or addenda, constitutes the entire agreement between the Parties and supersedes all prior discussions or agreements. No amendment to this Agreement shall be valid unless it is in writing and signed by both Parties.

IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the date first above written.

⸻

CLIENT:
Name: ${formData.clientName}
Signature: _______________________________
Date: ${formData.date}

CONTRACTOR:
Name: ${formData.contractorName}
Signature: _______________________________
Date: ${formData.date}`;

    // Create a blob and download
    const blob = new Blob([contractText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Construction_Agreement_${formData.clientName.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/resources/contract-templates"
          className="text-primary mb-4 inline-flex items-center hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Contract Templates
        </Link>
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">
          Standard Construction Agreement (Fixed Price)
        </h1>
        <p className="text-aliceBlue text-lg">
          Create a professional fixed-price construction contract with clear
          terms and payment schedule.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Contract Details
              </CardTitle>
              <CardDescription>
                Fill in your project information to generate a customized
                contract
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Basic Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="contractorName">Contractor Name</Label>
                  <Input
                    id="contractorName"
                    value={formData.contractorName}
                    onChange={(e) =>
                      updateFormData("contractorName", e.target.value)
                    }
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) =>
                      updateFormData("clientName", e.target.value)
                    }
                    placeholder="Client or company name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contractorAddress">Contractor Address</Label>
                <Textarea
                  id="contractorAddress"
                  value={formData.contractorAddress}
                  onChange={(e) =>
                    updateFormData("contractorAddress", e.target.value)
                  }
                  placeholder="Your business address"
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="clientAddress">Client Address</Label>
                <Textarea
                  id="clientAddress"
                  value={formData.clientAddress}
                  onChange={(e) =>
                    updateFormData("clientAddress", e.target.value)
                  }
                  placeholder="Client address"
                  rows={2}
                />
              </div>

              {/* Project Details */}
              <div>
                <Label htmlFor="workDescription">Scope of Work</Label>
                <Textarea
                  id="workDescription"
                  value={formData.workDescription}
                  onChange={(e) =>
                    updateFormData("workDescription", e.target.value)
                  }
                  placeholder="Detailed description of work to be completed, including specific tasks, deliverables, and milestones"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="totalFixedPrice">Total Fixed Price ($)</Label>
                <Input
                  id="totalFixedPrice"
                  type="number"
                  value={formData.totalFixedPrice}
                  onChange={(e) =>
                    updateFormData("totalFixedPrice", e.target.value)
                  }
                  placeholder="25000"
                />
              </div>

              {/* Timeline */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      updateFormData("startDate", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="completionDate">Completion Date</Label>
                  <Input
                    id="completionDate"
                    type="date"
                    value={formData.completionDate}
                    onChange={(e) =>
                      updateFormData("completionDate", e.target.value)
                    }
                  />
                </div>
              </div>

              {/* Payment Schedule */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Payment Schedule
                </Label>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <Label htmlFor="signing" className="text-sm">
                      Upon Signing
                    </Label>
                    <Input
                      id="signing"
                      value={formData.paymentSchedule.signing}
                      onChange={(e) =>
                        updateFormData(
                          "paymentSchedule.signing",
                          e.target.value,
                        )
                      }
                      placeholder="25% or $5,000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="milestone" className="text-sm">
                      At Milestone
                    </Label>
                    <Input
                      id="milestone"
                      value={formData.paymentSchedule.milestone}
                      onChange={(e) =>
                        updateFormData(
                          "paymentSchedule.milestone",
                          e.target.value,
                        )
                      }
                      placeholder="40% or $10,000"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="milestoneDescription" className="text-sm">
                    Milestone Description
                  </Label>
                  <Input
                    id="milestoneDescription"
                    value={formData.paymentSchedule.milestoneDescription}
                    onChange={(e) =>
                      updateFormData(
                        "paymentSchedule.milestoneDescription",
                        e.target.value,
                      )
                    }
                    placeholder="completion of framing"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <Label htmlFor="substantial" className="text-sm">
                      Substantial Completion
                    </Label>
                    <Input
                      id="substantial"
                      value={formData.paymentSchedule.substantial}
                      onChange={(e) =>
                        updateFormData(
                          "paymentSchedule.substantial",
                          e.target.value,
                        )
                      }
                      placeholder="30% or $7,500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="final" className="text-sm">
                      Final Payment
                    </Label>
                    <Input
                      id="final"
                      value={formData.paymentSchedule.final}
                      onChange={(e) =>
                        updateFormData("paymentSchedule.final", e.target.value)
                      }
                      placeholder="5% or $2,500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Terms */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="warrantyPeriod">Warranty Period</Label>
                  <Input
                    id="warrantyPeriod"
                    value={formData.warrantyPeriod}
                    onChange={(e) =>
                      updateFormData("warrantyPeriod", e.target.value)
                    }
                    placeholder="1 year"
                  />
                </div>
                <div>
                  <Label htmlFor="jurisdiction">State/Jurisdiction</Label>
                  <Input
                    id="jurisdiction"
                    value={formData.jurisdiction}
                    onChange={(e) =>
                      updateFormData("jurisdiction", e.target.value)
                    }
                    placeholder="California"
                  />
                </div>
              </div>

              <Button onClick={generateContract} className="w-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Generate & Download Contract
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contract Preview</CardTitle>
              <CardDescription>
                Live preview of your contract as you fill in the form
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-h-96 overflow-y-auto rounded-lg bg-gray-50 p-4 font-mono text-sm">
                <div className="mb-4 text-center font-bold">
                  STANDARD CONSTRUCTION AGREEMENT (FIXED PRICE / LUMP SUM)
                </div>

                <p className="mb-4">
                  THIS AGREEMENT ("Agreement") is made and entered into as of{" "}
                  <span className="bg-yellow-200">
                    {formData.date || "[DATE]"}
                  </span>
                  , by and between{" "}
                  <span className="bg-yellow-200">
                    {formData.clientName || "[CLIENT NAME]"}
                  </span>
                  , with a principal place of business at{" "}
                  <span className="bg-yellow-200">
                    {formData.clientAddress || "[CLIENT ADDRESS]"}
                  </span>{" "}
                  ("Client"), and{" "}
                  <span className="bg-yellow-200">
                    {formData.contractorName || "[CONTRACTOR NAME]"}
                  </span>
                  , with a principal place of business at{" "}
                  <span className="bg-yellow-200">
                    {formData.contractorAddress || "[CONTRACTOR ADDRESS]"}
                  </span>{" "}
                  ("Contractor").
                </p>

                <div className="mb-3">
                  <strong>1. Scope of Work</strong>
                  <p className="mt-1">
                    Contractor agrees to perform the following services
                    ("Work"):
                    <br />
                    <span className="bg-yellow-200">
                      {formData.workDescription ||
                        "[Detailed description of the work to be completed]"}
                    </span>
                  </p>
                </div>

                <div className="mb-3">
                  <strong>2. Contract Price</strong>
                  <p className="mt-1">
                    The total fixed price for the Work shall be $
                    <span className="bg-yellow-200">
                      {formData.totalFixedPrice || "[TOTAL FIXED PRICE AMOUNT]"}
                    </span>{" "}
                    (the "Contract Price").
                  </p>
                </div>

                <div className="mb-3">
                  <strong>3. Payment Schedule</strong>
                  <p className="mt-1">
                    Client shall pay the Contract Price according to the
                    following schedule:
                  </p>
                  <ul className="mt-1 ml-6 list-disc">
                    <li>
                      <span className="bg-yellow-200">
                        {formData.paymentSchedule.signing ||
                          "[Percentage or amount]"}
                      </span>{" "}
                      due upon signing
                    </li>
                    <li>
                      <span className="bg-yellow-200">
                        {formData.paymentSchedule.milestone ||
                          "[Percentage or amount]"}
                      </span>{" "}
                      due upon{" "}
                      <span className="bg-yellow-200">
                        {formData.paymentSchedule.milestoneDescription ||
                          "[milestone or date]"}
                      </span>
                    </li>
                    <li>
                      <span className="bg-yellow-200">
                        {formData.paymentSchedule.substantial ||
                          "[Percentage or amount]"}
                      </span>{" "}
                      due upon substantial completion
                    </li>
                    <li>
                      <span className="bg-yellow-200">
                        {formData.paymentSchedule.final ||
                          "[Balance or final payment]"}
                      </span>{" "}
                      due upon final completion
                    </li>
                  </ul>
                </div>

                <div className="text-aliceBlue mt-4 text-xs">
                  ... (Additional contract sections will appear in the full
                  document)
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About This Contract</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                <strong>Best for:</strong> Projects with well-defined scope and
                fixed budgets where both parties want price certainty.
              </p>
              <p>
                <strong>Key Benefits:</strong> Predictable costs, clear payment
                milestones, comprehensive warranty terms, and change order
                protection.
              </p>
              <p>
                <strong>Important:</strong> Ensure your scope of work is
                detailed and complete. Fixed-price contracts require careful
                planning to avoid scope creep.
              </p>
              <div className="mt-4 rounded border border-amber-200 bg-amber-50 p-3">
                <p className="text-xs">
                  <strong>Legal Disclaimer:</strong> This template is for
                  informational purposes only and does not constitute legal
                  advice. Consider having complex contracts reviewed by a
                  qualified attorney.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
