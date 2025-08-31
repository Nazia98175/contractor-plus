import { useMetaTags } from "@/hooks/use-meta-tags";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CheckSquare, Download, Eye, EyeOff, FileText } from "lucide-react";
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
import Link from "next/link";
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
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

const formSchema = z.object({
  // Contractor Information
  contractorCompanyName: z
    .string()
    .min(1, "Contractor company name is required"),
  contractorAddress: z.string().min(1, "Contractor address is required"),
  contractorContactPerson: z.string().min(1, "Contact person is required"),
  contractorPhone: z.string().min(1, "Phone number is required"),
  contractorEmail: z.string().email("Valid email is required"),
  contractorLicenseNumber: z.string().optional(),

  // Client Information
  clientName: z.string().min(1, "Client name is required"),
  clientAddress: z.string().min(1, "Client address is required"),
  clientContactPerson: z.string().min(1, "Contact person is required"),
  clientPhone: z.string().min(1, "Phone number is required"),
  clientEmail: z.string().email("Valid email is required"),

  // Project Information
  projectName: z.string().min(1, "Project name is required"),
  projectAddress: z.string().min(1, "Project address is required"),
  originalContractNumber: z.string().optional(),
  originalContractDate: z.string().optional(),

  // Punch List Details
  punchListDate: z.string().min(1, "Punch list date is required"),
  punchListPreparedBy: z.string().min(1, "Punch list prepared by is required"),
  totalPunchListItems: z.string().min(1, "Total punch list items is required"),
  itemsDescription: z.string().min(1, "Description of items is required"),

  // Completion Terms
  completionDeadline: z.string().min(1, "Completion deadline is required"),
  inspectionDate: z.string().min(1, "Final inspection date is required"),
  retainageAmount: z.string().optional(),
  retainageReleaseDate: z.string().optional(),

  // Additional Terms
  warrantyPeriod: z.string().default("12"),
  additionalWork: z.boolean().default(false),
  additionalWorkDescription: z.string().optional(),
  materialApproval: z.boolean().default(true),
  accessProvided: z.boolean().default(true),

  // Payment Terms
  finalPaymentAmount: z.string().optional(),
  paymentDueDate: z.string().optional(),
  changeOrdersIncluded: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function PunchListCompletionAgreement() {
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();

  useMetaTags({
    title:
      "Punch List Completion Agreement Template - Free Construction Contract",
    description:
      "Create professional punch list completion agreements with our interactive template. Includes item tracking, completion deadlines, final inspections, and retainage release terms.",
    keywords:
      "punch list completion agreement, construction punch list, project completion contract, final inspection agreement, retainage release, construction closeout",
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      warrantyPeriod: "12",
      additionalWork: false,
      materialApproval: true,
      accessProvided: true,
      changeOrdersIncluded: false,
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
        `Punch_List_Completion_Agreement_${formData.projectName?.replace(/[^a-zA-Z0-9]/g, "_") || "Contract"}.pdf`,
      );

      toast({
        title: "PDF Generated Successfully",
        description:
          "Your punch list completion agreement has been downloaded.",
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
                className="text-sm font-medium text-gray-700 hover:text-red-600"
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
                className="text-sm font-medium text-gray-700 hover:text-red-600"
              >
                Contract Templates
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-sm font-medium text-gray-500">
              Punch List Completion Agreement
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <CheckSquare className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Punch List Completion Agreement Template
          </h1>
          <p className="text-muted-foreground">
            Create a professional punch list completion agreement for project
            closeout
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
                Agreement Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Form {...form}>
                <form className="space-y-6">
                  {/* Contractor Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Contractor Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="contractorCompanyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ABC Construction Inc."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contractorContactPerson"
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
                        name="contractorAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Construction St, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contractorPhone"
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
                        name="contractorEmail"
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
                        name="contractorLicenseNumber"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>License Number</FormLabel>
                            <FormControl>
                              <Input placeholder="CLB123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Client Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Client Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="clientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Client Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="XYZ Corporation" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="clientContactPerson"
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
                        name="clientAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="456 Business Ave, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="clientPhone"
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
                        name="clientEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="contact@xyzcorp.com"
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

                  {/* Project Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Project Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Office Building Renovation"
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
                                placeholder="789 Project Blvd, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="originalContractNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Original Contract Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="CONTRACT-2024-001"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="originalContractDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Original Contract Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Punch List Details */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Punch List Details
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="punchListDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Punch List Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="punchListPreparedBy"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prepared By *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Project Manager / Inspector"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="totalPunchListItems"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Total Punch List Items *</FormLabel>
                            <FormControl>
                              <Input placeholder="15" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="itemsDescription"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Items Description *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Detailed description of punch list items to be completed..."
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

                  {/* Completion Terms */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Completion Terms
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="completionDeadline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Completion Deadline *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inspectionDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Final Inspection Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="retainageAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Retainage Amount</FormLabel>
                            <FormControl>
                              <Input placeholder="$15,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="retainageReleaseDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Retainage Release Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
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
                        name="additionalWorkDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Work Description</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Description of any additional work needed"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="additionalWork"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Additional Work Required</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="materialApproval"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Material Approval Required</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="accessProvided"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Client Will Provide Access</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="changeOrdersIncluded"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Change Orders Included</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Terms */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Payment Terms</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="finalPaymentAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Final Payment Amount</FormLabel>
                            <FormControl>
                              <Input placeholder="$25,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="paymentDueDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Payment Due Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
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
                      PUNCH LIST COMPLETION AGREEMENT
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-3 text-lg font-semibold">PARTIES</h2>
                      <p>
                        <strong>Contractor:</strong>{" "}
                        {formData.contractorCompanyName || "[Contractor Name]"}
                      </p>
                      <p>
                        Address:{" "}
                        {formData.contractorAddress || "[Contractor Address]"}
                      </p>
                      <p>
                        Contact:{" "}
                        {formData.contractorContactPerson || "[Contact Person]"}{" "}
                        | Phone: {formData.contractorPhone || "[Phone]"} |
                        Email: {formData.contractorEmail || "[Email]"}
                      </p>
                      {formData.contractorLicenseNumber && (
                        <p>License: {formData.contractorLicenseNumber}</p>
                      )}

                      <p className="mt-4">
                        <strong>Client:</strong>{" "}
                        {formData.clientName || "[Client Name]"}
                      </p>
                      <p>
                        Address: {formData.clientAddress || "[Client Address]"}
                      </p>
                      <p>
                        Contact:{" "}
                        {formData.clientContactPerson || "[Contact Person]"} |
                        Phone: {formData.clientPhone || "[Phone]"} | Email:{" "}
                        {formData.clientEmail || "[Email]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        PROJECT INFORMATION
                      </h2>
                      <p>
                        <strong>Project:</strong>{" "}
                        {formData.projectName || "[Project Name]"}
                      </p>
                      <p>
                        <strong>Project Address:</strong>{" "}
                        {formData.projectAddress || "[Project Address]"}
                      </p>
                      {formData.originalContractNumber && (
                        <p>
                          <strong>Original Contract Number:</strong>{" "}
                          {formData.originalContractNumber}
                        </p>
                      )}
                      {formData.originalContractDate && (
                        <p>
                          <strong>Original Contract Date:</strong>{" "}
                          {formData.originalContractDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        PUNCH LIST DETAILS
                      </h2>
                      <p>
                        <strong>Punch List Date:</strong>{" "}
                        {formData.punchListDate || "[Punch List Date]"}
                      </p>
                      <p>
                        <strong>Prepared By:</strong>{" "}
                        {formData.punchListPreparedBy || "[Prepared By]"}
                      </p>
                      <p>
                        <strong>Total Items:</strong>{" "}
                        {formData.totalPunchListItems || "[Total Items]"}
                      </p>
                      <p>
                        <strong>Items Description:</strong>
                      </p>
                      <p>
                        {formData.itemsDescription ||
                          "[Detailed description of punch list items to be completed]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        COMPLETION TERMS
                      </h2>
                      <p>
                        <strong>Completion Deadline:</strong>{" "}
                        {formData.completionDeadline || "[Completion Deadline]"}
                      </p>
                      <p>
                        <strong>Final Inspection Date:</strong>{" "}
                        {formData.inspectionDate || "[Final Inspection Date]"}
                      </p>
                      {formData.retainageAmount && (
                        <p>
                          <strong>Retainage Amount:</strong>{" "}
                          {formData.retainageAmount}
                        </p>
                      )}
                      {formData.retainageReleaseDate && (
                        <p>
                          <strong>Retainage Release Date:</strong>{" "}
                          {formData.retainageReleaseDate}
                        </p>
                      )}
                      <p>
                        <strong>Warranty Period:</strong>{" "}
                        {formData.warrantyPeriod || "12"} months from completion
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        SCOPE OF WORK
                      </h2>
                      <p>
                        Contractor agrees to complete all punch list items
                        identified in the attached punch list document. All work
                        shall be performed in accordance with the original
                        contract specifications, applicable building codes, and
                        industry standards.
                      </p>
                      {formData.additionalWork && (
                        <div className="mt-3">
                          <p>
                            <strong>Additional Work Required:</strong>
                          </p>
                          <p>
                            {formData.additionalWorkDescription ||
                              "Additional work as described in separate documentation"}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        CONTRACTOR RESPONSIBILITIES
                      </h2>
                      <ul className="mt-2 list-disc pl-6">
                        <li>
                          Complete all punch list items by the specified
                          deadline
                        </li>
                        <li>
                          Provide all labor, materials, and equipment necessary
                          for completion
                        </li>
                        <li>
                          Maintain quality standards consistent with original
                          work
                        </li>
                        <li>
                          Clean up work areas upon completion of each item
                        </li>
                        <li>
                          Notify client upon completion of all items for final
                          inspection
                        </li>
                        {formData.materialApproval && (
                          <li>
                            Obtain client approval for all materials before
                            installation
                          </li>
                        )}
                        <li>Provide warranty on all completed work</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        CLIENT RESPONSIBILITIES
                      </h2>
                      <ul className="mt-2 list-disc pl-6">
                        {formData.accessProvided && (
                          <li>
                            Provide reasonable access to work areas during
                            normal business hours
                          </li>
                        )}
                        <li>
                          Inspect completed work within 5 business days of
                          notification
                        </li>
                        <li>
                          Provide written acceptance or rejection of completed
                          items
                        </li>
                        <li>
                          Make final payment upon satisfactory completion and
                          acceptance
                        </li>
                        <li>
                          Coordinate with building occupants regarding work
                          schedules
                        </li>
                      </ul>
                    </div>

                    {(formData.finalPaymentAmount ||
                      formData.paymentDueDate) && (
                      <div>
                        <h2 className="mb-3 text-lg font-semibold">
                          PAYMENT TERMS
                        </h2>
                        {formData.finalPaymentAmount && (
                          <p>
                            <strong>Final Payment Amount:</strong>{" "}
                            {formData.finalPaymentAmount}
                          </p>
                        )}
                        {formData.paymentDueDate && (
                          <p>
                            <strong>Payment Due Date:</strong>{" "}
                            {formData.paymentDueDate}
                          </p>
                        )}
                        <p>
                          Payment shall be made within 30 days of satisfactory
                          completion and final inspection. Late payments may be
                          subject to interest charges.
                        </p>
                        {formData.changeOrdersIncluded && (
                          <p>
                            This agreement includes all approved change orders
                            from the original contract.
                          </p>
                        )}
                      </div>
                    )}

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        GENERAL TERMS
                      </h2>
                      <ul className="mt-2 list-disc pl-6">
                        <li>
                          This agreement supplements and does not replace the
                          original construction contract
                        </li>
                        <li>
                          All work shall comply with applicable building codes
                          and regulations
                        </li>
                        <li>
                          Contractor shall maintain appropriate insurance
                          coverage throughout the work period
                        </li>
                        <li>
                          Any disputes shall be resolved through mediation or
                          arbitration
                        </li>
                        <li>
                          This agreement shall be governed by the laws of the
                          state where the project is located
                        </li>
                        <li>
                          Modifications to this agreement must be in writing and
                          signed by both parties
                        </li>
                      </ul>
                    </div>

                    <div className="mt-12">
                      <h2 className="mb-6 text-lg font-semibold">SIGNATURES</h2>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p>
                            <strong>CONTRACTOR:</strong>
                          </p>
                          <div className="mt-8 w-48 border-b border-gray-400"></div>
                          <p className="mt-2 text-sm">
                            {formData.contractorContactPerson || "[Name]"}
                          </p>
                          <p className="text-sm">
                            {formData.contractorCompanyName || "[Company]"}
                          </p>
                          <p className="text-sm">Date: _______________</p>
                        </div>
                        <div>
                          <p>
                            <strong>CLIENT:</strong>
                          </p>
                          <div className="mt-8 w-48 border-b border-gray-400"></div>
                          <p className="mt-2 text-sm">
                            {formData.clientContactPerson || "[Name]"}
                          </p>
                          <p className="text-sm">
                            {formData.clientName || "[Company]"}
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
          Understanding Punch List Completion Agreements
        </h2>
        <p>
          A punch list completion agreement is used during the final phase of
          construction projects to formally document and manage the completion
          of remaining items identified during the project walkthrough. This
          agreement ensures all parties understand their responsibilities for
          project closeout.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Key Components of Punch List Agreements
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Item Documentation:</strong> Detailed list of all items
            requiring completion or correction
          </li>
          <li>
            <strong>Completion Timeline:</strong> Clear deadlines for addressing
            all punch list items
          </li>
          <li>
            <strong>Quality Standards:</strong> Specifications for acceptable
            completion of work
          </li>
          <li>
            <strong>Inspection Process:</strong> Procedures for reviewing and
            accepting completed work
          </li>
          <li>
            <strong>Payment Terms:</strong> Final payment and retainage release
            conditions
          </li>
          <li>
            <strong>Warranty Provisions:</strong> Coverage for completed work
            and materials
          </li>
          <li>
            <strong>Access Requirements:</strong> Client responsibilities for
            site access
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          Best Practices for Punch List Management
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">For Contractors</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>
                Conduct thorough pre-inspection to minimize punch list items
              </li>
              <li>Prioritize items based on safety and functionality</li>
              <li>Maintain clear communication about completion progress</li>
              <li>Document all completed work with photos when appropriate</li>
              <li>Address items promptly to avoid project delays</li>
              <li>Ensure quality consistency with original construction</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">For Clients</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Participate in thorough project walkthrough</li>
              <li>Document all items clearly and specifically</li>
              <li>Provide reasonable timelines for completion</li>
              <li>Ensure site access for completion work</li>
              <li>Inspect completed work promptly</li>
              <li>Release payments upon satisfactory completion</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Common Punch List Categories
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Cosmetic Items</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>Paint touch-ups</li>
              <li>Caulking and trim work</li>
              <li>Floor repairs or cleaning</li>
              <li>Hardware adjustments</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Functional Items</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>Door and window operations</li>
              <li>Plumbing fixtures</li>
              <li>Electrical components</li>
              <li>HVAC system balancing</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Safety Items</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              <li>Handrail installations</li>
              <li>Fire safety compliance</li>
              <li>Egress requirements</li>
              <li>Code compliance issues</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Retainage and Final Payment
        </h2>
        <p>
          Punch list completion agreements often involve the release of
          retainage (typically 5-10% of the contract value) held by the client
          throughout the project. The agreement should clearly specify:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>The amount of retainage to be released</li>
          <li>Conditions for retainage release</li>
          <li>Timeline for payment after completion</li>
          <li>Any portion to be held for warranty periods</li>
          <li>Interest or penalties for delayed payments</li>
        </ul>

        <div className="my-8 rounded-lg border border-red-100 bg-red-50 p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            Ensure successful project completion
          </h3>
          <p className="mb-0">
            Professional punch list completion agreements protect both
            contractors and clients during the critical project closeout phase.
            Use Contractor+ to create comprehensive agreements that clearly
            define responsibilities, timelines, and payment terms for a smooth
            project completion.
          </p>
        </div>

        <p className="text-muted-foreground rounded border-l-4 border-yellow-500 bg-yellow-50 p-4 pl-4 text-sm">
          <strong>Legal Disclaimer:</strong> This template is provided for
          informational purposes and should not be considered legal advice. For
          complex projects or specific legal situations, consult with a
          qualified attorney in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
