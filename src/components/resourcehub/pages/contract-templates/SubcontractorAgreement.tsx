"use client";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download, Eye, EyeOff, FileText, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";

const formSchema = z.object({
  // General Contractor Information
  gcCompanyName: z
    .string()
    .min(1, "General contractor company name is required"),
  gcAddress: z.string().min(1, "General contractor address is required"),
  gcContactPerson: z.string().min(1, "Contact person is required"),
  gcPhone: z.string().min(1, "Phone number is required"),
  gcEmail: z.string().email("Valid email is required"),
  gcLicenseNumber: z.string().optional(),

  // Subcontractor Information
  subCompanyName: z.string().min(1, "Subcontractor company name is required"),
  subAddress: z.string().min(1, "Subcontractor address is required"),
  subContactPerson: z.string().min(1, "Contact person is required"),
  subPhone: z.string().min(1, "Phone number is required"),
  subEmail: z.string().email("Valid email is required"),
  subLicenseNumber: z.string().optional(),

  // Project Information
  projectName: z.string().min(1, "Project name is required"),
  projectAddress: z.string().min(1, "Project address is required"),
  workDescription: z.string().min(1, "Work description is required"),

  // Contract Terms
  contractAmount: z.string().min(1, "Contract amount is required"),
  paymentTerms: z.string().min(1, "Payment terms are required"),
  startDate: z.string().min(1, "Start date is required"),
  completionDate: z.string().min(1, "Completion date is required"),

  // Insurance Requirements
  generalLiability: z.string().default("$1,000,000"),
  workersComp: z.boolean().default(true),
  autoLiability: z.string().default("$1,000,000"),

  // Additional Terms
  retainagePercentage: z.string().default("10"),
  warrantyPeriod: z.string().default("12"),
  changeOrderProcess: z.string().default("written"),
  disputeResolution: z.string().default("mediation"),

  // Compliance Requirements
  permitResponsibility: z.string().default("subcontractor"),
  safetyCompliance: z.boolean().default(true),
  prevailingWages: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function SubcontractorAgreement() {
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();

  useMetaTags({
    title: "Subcontractor Agreement Template - Free Construction Contract",
    description:
      "Create professional subcontractor agreements with our interactive template. Includes scope definition, payment terms, insurance requirements, and compliance clauses.",
    keywords:
      "subcontractor agreement, subcontractor contract, construction subcontract, contractor agreement template, subcontractor template",
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      generalLiability: "$1,000,000",
      workersComp: true,
      autoLiability: "$1,000,000",
      retainagePercentage: "10",
      warrantyPeriod: "12",
      changeOrderProcess: "written",
      disputeResolution: "mediation",
      permitResponsibility: "subcontractor",
      safetyCompliance: true,
      prevailingWages: false,
    },
  });

  const formData = form.watch();

  const generatePDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById("contract-preview");
      if (!element) throw new Error("Contract preview element not found");

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(
        `Subcontractor_Agreement_${formData.subCompanyName?.replace(/[^a-zA-Z0-9]/g, "_") || "Contract"}.pdf`,
      );

      toast({
        title: "PDF Generated Successfully",
        description: "Your subcontractor agreement has been downloaded.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error Generating PDF",
        description: "There was an error creating your PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/resources"
                className="text-sm font-medium hover:text-red-600"
              >
                Resources
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/resources/contract-templates"
                className="text-sm font-medium hover:text-red-600"
              >
                Contract Templates
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-master text-sm">
              Subcontractor Agreement
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Users className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Subcontractor Agreement Template
          </h1>
          <p className="text-aliceBlue">
            Create a professional subcontractor agreement with customizable
            terms
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Contract Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Form {...form}>
                <form className="space-y-6">
                  {/* General Contractor Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      General Contractor Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="gcCompanyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ABC Construction LLC"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gcContactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gcAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Main St, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gcPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gcEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="contact@abcconstruction.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gcLicenseNumber"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>License Number</FormLabel>
                            <FormControl>
                              <Input placeholder="LIC123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Subcontractor Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Subcontractor Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="subCompanyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="XYZ Electrical Services"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subContactPerson"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact Person *</FormLabel>
                            <FormControl>
                              <Input placeholder="Jane Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="456 Oak Ave, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 987-6543" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="info@xyzelectrical.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subLicenseNumber"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>License Number</FormLabel>
                            <FormControl>
                              <Input placeholder="ELC987654321" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Project Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Project Information
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Downtown Office Building"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="projectAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="789 Business Blvd, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Scope of Work *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Detailed description of work to be performed by subcontractor..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Contract Terms */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Contract Terms</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="contractAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contract Amount *</FormLabel>
                            <FormControl>
                              <Input placeholder="$50,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="retainagePercentage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Retainage Percentage</FormLabel>
                            <FormControl>
                              <Input placeholder="10" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="completionDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Completion Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="paymentTerms"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Payment Terms *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Progress payments will be made monthly upon completion of work phases..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Insurance Requirements */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Insurance Requirements
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="generalLiability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>General Liability</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="$500,000">
                                  $500,000
                                </SelectItem>
                                <SelectItem value="$1,000,000">
                                  $1,000,000
                                </SelectItem>
                                <SelectItem value="$2,000,000">
                                  $2,000,000
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="autoLiability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Auto Liability</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="$500,000">
                                  $500,000
                                </SelectItem>
                                <SelectItem value="$1,000,000">
                                  $1,000,000
                                </SelectItem>
                                <SelectItem value="$2,000,000">
                                  $2,000,000
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workersComp"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Workers' Compensation Required
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Terms */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Additional Terms
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="warrantyPeriod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Warranty Period (months)</FormLabel>
                            <FormControl>
                              <Input placeholder="12" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="permitResponsibility"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Permit Responsibility</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="subcontractor">
                                  Subcontractor
                                </SelectItem>
                                <SelectItem value="general-contractor">
                                  General Contractor
                                </SelectItem>
                                <SelectItem value="shared">Shared</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="changeOrderProcess"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Change Order Process</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="written">
                                  Written Authorization Required
                                </SelectItem>
                                <SelectItem value="verbal">
                                  Verbal Authorization Allowed
                                </SelectItem>
                                <SelectItem value="email">
                                  Email Authorization Accepted
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="disputeResolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dispute Resolution</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="mediation">
                                  Mediation
                                </SelectItem>
                                <SelectItem value="arbitration">
                                  Arbitration
                                </SelectItem>
                                <SelectItem value="litigation">
                                  Litigation
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="safetyCompliance"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                OSHA Safety Compliance Required
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="prevailingWages"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Prevailing Wages Required</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Contract Preview</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
                {showPreview ? "Hide" : "Show"} Preview
              </Button>
              <Button
                onClick={generatePDF}
                disabled={isGeneratingPDF}
                size="sm"
              >
                <Download className="mr-2 h-4 w-4" />
                {isGeneratingPDF ? "Generating..." : "Download PDF"}
              </Button>
            </div>
          </div>

          {showPreview && (
            <Card>
              <CardContent className="p-6">
                <div
                  id="contract-preview"
                  className="prose prose-sm max-w-none"
                >
                  <div className="mb-8 text-center">
                    <h1 className="mb-2 text-2xl font-bold">
                      SUBCONTRACTOR AGREEMENT
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-3 text-lg font-semibold">PARTIES</h2>
                      <p>
                        <strong>General Contractor:</strong>{" "}
                        {formData.gcCompanyName || "[General Contractor Name]"}
                      </p>
                      <p>
                        Address:{" "}
                        {formData.gcAddress || "[General Contractor Address]"}
                      </p>
                      <p>
                        Contact:{" "}
                        {formData.gcContactPerson || "[Contact Person]"} |
                        Phone: {formData.gcPhone || "[Phone]"} | Email:{" "}
                        {formData.gcEmail || "[Email]"}
                      </p>
                      {formData.gcLicenseNumber && (
                        <p>License: {formData.gcLicenseNumber}</p>
                      )}

                      <p className="mt-4">
                        <strong>Subcontractor:</strong>{" "}
                        {formData.subCompanyName || "[Subcontractor Name]"}
                      </p>
                      <p>
                        Address:{" "}
                        {formData.subAddress || "[Subcontractor Address]"}
                      </p>
                      <p>
                        Contact:{" "}
                        {formData.subContactPerson || "[Contact Person]"} |
                        Phone: {formData.subPhone || "[Phone]"} | Email:{" "}
                        {formData.subEmail || "[Email]"}
                      </p>
                      {formData.subLicenseNumber && (
                        <p>License: {formData.subLicenseNumber}</p>
                      )}
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        PROJECT INFORMATION
                      </h2>
                      <p>
                        <strong>Project Name:</strong>{" "}
                        {formData.projectName || "[Project Name]"}
                      </p>
                      <p>
                        <strong>Project Address:</strong>{" "}
                        {formData.projectAddress || "[Project Address]"}
                      </p>
                      <p>
                        <strong>Start Date:</strong>{" "}
                        {formData.startDate || "[Start Date]"}
                      </p>
                      <p>
                        <strong>Completion Date:</strong>{" "}
                        {formData.completionDate || "[Completion Date]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        SCOPE OF WORK
                      </h2>
                      <p>
                        {formData.workDescription ||
                          "[Detailed description of work to be performed by subcontractor]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        CONTRACT AMOUNT AND PAYMENT TERMS
                      </h2>
                      <p>
                        <strong>Total Contract Amount:</strong>{" "}
                        {formData.contractAmount || "[Contract Amount]"}
                      </p>
                      <p>
                        <strong>Retainage:</strong>{" "}
                        {formData.retainagePercentage || "10"}% of each payment
                        will be withheld and released upon final completion and
                        acceptance of work.
                      </p>
                      <p>
                        <strong>Payment Terms:</strong>{" "}
                        {formData.paymentTerms ||
                          "[Payment terms and schedule]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        INSURANCE REQUIREMENTS
                      </h2>
                      <p>
                        Subcontractor shall maintain the following minimum
                        insurance coverage:
                      </p>
                      <ul className="mt-2 list-disc pl-6">
                        <li>General Liability: {formData.generalLiability}</li>
                        <li>Automobile Liability: {formData.autoLiability}</li>
                        {formData.workersComp && (
                          <li>Workers' Compensation as required by law</li>
                        )}
                      </ul>
                      <p className="mt-2">
                        General Contractor shall be named as additional insured
                        on all policies.
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        COMPLIANCE AND SAFETY
                      </h2>
                      <ul className="list-disc pl-6">
                        <li>
                          Permits:{" "}
                          {formData.permitResponsibility === "subcontractor"
                            ? "Subcontractor"
                            : formData.permitResponsibility ===
                                "general-contractor"
                              ? "General Contractor"
                              : "Shared"}{" "}
                          responsibility
                        </li>
                        {formData.safetyCompliance && (
                          <li>
                            Subcontractor shall comply with all OSHA safety
                            regulations
                          </li>
                        )}
                        {formData.prevailingWages && (
                          <li>Prevailing wage rates apply to this project</li>
                        )}
                        <li>
                          All work must comply with applicable building codes
                          and regulations
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        WARRANTY AND CHANGES
                      </h2>
                      <p>
                        <strong>Warranty Period:</strong>{" "}
                        {formData.warrantyPeriod || "12"} months from completion
                      </p>
                      <p>
                        <strong>Change Orders:</strong>{" "}
                        {formData.changeOrderProcess === "written"
                          ? "All changes must be authorized in writing"
                          : formData.changeOrderProcess === "verbal"
                            ? "Verbal authorization is acceptable"
                            : "Email authorization is acceptable"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        DISPUTE RESOLUTION
                      </h2>
                      <p>
                        Any disputes arising under this agreement shall be
                        resolved through {formData.disputeResolution} in
                        accordance with the rules of the American Arbitration
                        Association.
                      </p>
                    </div>

                    <div className="mt-12">
                      <h2 className="mb-6 text-lg font-semibold">SIGNATURES</h2>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p>
                            <strong>GENERAL CONTRACTOR:</strong>
                          </p>
                          <div className="mt-8 w-48 border-b border-gray-400"></div>
                          <p className="mt-2 text-sm">
                            {formData.gcContactPerson || "[Name]"}
                          </p>
                          <p className="text-sm">
                            {formData.gcCompanyName || "[Company]"}
                          </p>
                          <p className="text-sm">Date: _______________</p>
                        </div>
                        <div>
                          <p>
                            <strong>SUBCONTRACTOR:</strong>
                          </p>
                          <div className="mt-8 w-48 border-b border-gray-400"></div>
                          <p className="mt-2 text-sm">
                            {formData.subContactPerson || "[Name]"}
                          </p>
                          <p className="text-sm">
                            {formData.subCompanyName || "[Company]"}
                          </p>
                          <p className="text-sm">Date: _______________</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Educational Content */}
      <div className="prose prose-gray mt-16 max-w-none">
        <h2 className="text-2xl font-semibold">
          Understanding Subcontractor Agreements
        </h2>
        <p>
          A subcontractor agreement is a legally binding contract between a
          general contractor and a subcontractor that defines the scope of work,
          payment terms, and responsibilities for a specific portion of a
          construction project.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Key Components of a Subcontractor Agreement
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Scope of Work:</strong> Detailed description of work to be
            performed by the subcontractor
          </li>
          <li>
            <strong>Payment Terms:</strong> Contract amount, payment schedule,
            and retainage provisions
          </li>
          <li>
            <strong>Timeline:</strong> Start date, completion date, and
            milestone schedules
          </li>
          <li>
            <strong>Insurance Requirements:</strong> Minimum coverage amounts
            and additional insured requirements
          </li>
          <li>
            <strong>Compliance:</strong> Permit responsibilities, safety
            requirements, and regulatory compliance
          </li>
          <li>
            <strong>Change Orders:</strong> Process for handling modifications
            to the original scope
          </li>
          <li>
            <strong>Warranty:</strong> Period and terms of warranty coverage
          </li>
          <li>
            <strong>Dispute Resolution:</strong> Method for resolving conflicts
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          Best Practices for Subcontractor Agreements
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              For General Contractors
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Clearly define the scope of work to avoid disputes</li>
              <li>
                Verify subcontractor licensing and insurance before signing
              </li>
              <li>Include specific completion dates and penalty clauses</li>
              <li>Require lien waivers with each payment</li>
              <li>Establish clear change order procedures</li>
              <li>Include safety and compliance requirements</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">For Subcontractors</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Review the scope of work carefully before bidding</li>
              <li>Understand payment terms and retainage provisions</li>
              <li>Ensure your insurance meets the requirements</li>
              <li>Know your permit and compliance obligations</li>
              <li>Document all change orders in writing</li>
              <li>Maintain proper safety protocols and documentation</li>
            </ul>
          </div>
        </div>

        <div className="border-stiletto bg-shutter borderp-6 my-8 rounded-lg">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            Protect your construction business relationships
          </h3>
          <p className="mb-0">
            Clear subcontractor agreements prevent disputes and ensure smooth
            project execution. Use Contractor+ to create professional agreements
            that protect both parties and establish clear expectations from the
            start of every project.
          </p>
        </div>

        <p className="text-aliceBlue rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 pl-4 text-sm">
          <strong>Legal Disclaimer:</strong> This template is provided for
          informational purposes and should not be considered legal advice. For
          complex projects or specific legal situations, consult with a
          qualified attorney in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
