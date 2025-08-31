"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileText, Download, Eye, EyeOff, Wrench } from "lucide-react";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { useToast } from "@/hooks/use-toast";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";

const formSchema = z.object({
  // Service Provider Information
  providerCompanyName: z
    .string()
    .min(1, "Service provider company name is required"),
  providerAddress: z.string().min(1, "Service provider address is required"),
  providerContactPerson: z.string().min(1, "Contact person is required"),
  providerPhone: z.string().min(1, "Phone number is required"),
  providerEmail: z.string().email("Valid email is required"),
  providerLicenseNumber: z.string().optional(),

  // Client Information
  clientCompanyName: z.string().min(1, "Client company name is required"),
  clientAddress: z.string().min(1, "Client address is required"),
  clientContactPerson: z.string().min(1, "Contact person is required"),
  clientPhone: z.string().min(1, "Phone number is required"),
  clientEmail: z.string().email("Valid email is required"),

  // Property/Equipment Information
  propertyAddress: z.string().min(1, "Property/equipment address is required"),
  equipmentDescription: z
    .string()
    .min(1, "Equipment/systems description is required"),
  serviceType: z.string().min(1, "Service type is required"),

  // Contract Terms
  contractStartDate: z.string().min(1, "Contract start date is required"),
  contractEndDate: z.string().min(1, "Contract end date is required"),
  serviceFrequency: z.string().min(1, "Service frequency is required"),
  monthlyFee: z.string().min(1, "Monthly fee is required"),

  // Service Level Agreement
  responseTime: z.string().default("24"),
  emergencyResponseTime: z.string().default("4"),
  availabilityHours: z.string().default("business"),

  // Additional Services
  emergencyService: z.boolean().default(true),
  partsIncluded: z.boolean().default(false),
  laborIncluded: z.boolean().default(true),
  preventiveMaintenance: z.boolean().default(true),

  // Payment Terms
  paymentTerms: z.string().default("monthly"),
  lateFeePercentage: z.string().default("1.5"),
  autoRenewal: z.boolean().default(true),

  // Cancellation Terms
  cancellationNotice: z.string().default("30"),
  earlyTerminationFee: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function MaintenanceServiceContract() {
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const { toast } = useToast();

  useMetaTags({
    title:
      "Maintenance & Service Contract Template - Free Construction Contract",
    description:
      "Create professional maintenance and service contracts with our interactive template. Includes service schedules, response times, recurring billing, and service level agreements.",
    keywords:
      "maintenance contract, service contract, maintenance agreement, service agreement, HVAC maintenance, building maintenance, equipment service contract",
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      responseTime: "24",
      emergencyResponseTime: "4",
      availabilityHours: "business",
      emergencyService: true,
      partsIncluded: false,
      laborIncluded: true,
      preventiveMaintenance: true,
      paymentTerms: "monthly",
      lateFeePercentage: "1.5",
      autoRenewal: true,
      cancellationNotice: "30",
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
        `Maintenance_Service_Contract_${formData.clientCompanyName?.replace(/[^a-zA-Z0-9]/g, "_") || "Contract"}.pdf`,
      );

      toast({
        title: "PDF Generated Successfully",
        description: "Your maintenance & service contract has been downloaded.",
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
              Maintenance & Service Contract
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <Wrench className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Maintenance & Service Contract Template
          </h1>
          <p className="text-muted-foreground">
            Create a professional maintenance and service contract with
            customizable terms
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
                  {/* Service Provider Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Service Provider Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="providerCompanyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ABC Maintenance Services"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="providerContactPerson"
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
                        name="providerAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="123 Service St, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="providerPhone"
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
                        name="providerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="service@abcmaintenance.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="providerLicenseNumber"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>License Number</FormLabel>
                            <FormControl>
                              <Input placeholder="MAINT123456789" {...field} />
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
                        name="clientCompanyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name *</FormLabel>
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

                  {/* Property/Equipment Information */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Property/Equipment Information
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="propertyAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Property/Equipment Address *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="789 Facility Blvd, City, State 12345"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="equipmentDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Equipment/Systems Description *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Detailed description of equipment, systems, or facilities to be maintained..."
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select service type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="hvac">
                                  HVAC Maintenance
                                </SelectItem>
                                <SelectItem value="plumbing">
                                  Plumbing Maintenance
                                </SelectItem>
                                <SelectItem value="electrical">
                                  Electrical Maintenance
                                </SelectItem>
                                <SelectItem value="building">
                                  Building Maintenance
                                </SelectItem>
                                <SelectItem value="landscaping">
                                  Landscaping Services
                                </SelectItem>
                                <SelectItem value="cleaning">
                                  Cleaning Services
                                </SelectItem>
                                <SelectItem value="security">
                                  Security System Maintenance
                                </SelectItem>
                                <SelectItem value="fire">
                                  Fire Safety System Maintenance
                                </SelectItem>
                                <SelectItem value="elevator">
                                  Elevator Maintenance
                                </SelectItem>
                                <SelectItem value="comprehensive">
                                  Comprehensive Facility Maintenance
                                </SelectItem>
                              </SelectContent>
                            </Select>
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
                        name="contractStartDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contract Start Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contractEndDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contract End Date *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceFrequency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Frequency *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="bi-weekly">
                                  Bi-weekly
                                </SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">
                                  Quarterly
                                </SelectItem>
                                <SelectItem value="semi-annually">
                                  Semi-annually
                                </SelectItem>
                                <SelectItem value="annually">
                                  Annually
                                </SelectItem>
                                <SelectItem value="as-needed">
                                  As Needed
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="monthlyFee"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monthly Fee *</FormLabel>
                            <FormControl>
                              <Input placeholder="$2,500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Service Level Agreement */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Service Level Agreement
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="responseTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Response Time (hours)</FormLabel>
                            <FormControl>
                              <Input placeholder="24" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="emergencyResponseTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Emergency Response Time (hours)
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="4" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="availabilityHours"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Availability Hours</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="business">
                                  Business Hours (8 AM - 5 PM)
                                </SelectItem>
                                <SelectItem value="extended">
                                  Extended Hours (7 AM - 7 PM)
                                </SelectItem>
                                <SelectItem value="24/7">
                                  24/7 Availability
                                </SelectItem>
                                <SelectItem value="weekdays">
                                  Weekdays Only
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Additional Services */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Additional Services
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="emergencyService"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Emergency Service Available</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preventiveMaintenance"
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
                                Preventive Maintenance Included
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="partsIncluded"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Parts Included in Contract</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="laborIncluded"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Labor Included in Contract</FormLabel>
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
                        name="paymentTerms"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Payment Terms</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">
                                  Quarterly
                                </SelectItem>
                                <SelectItem value="semi-annually">
                                  Semi-annually
                                </SelectItem>
                                <SelectItem value="annually">
                                  Annually
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lateFeePercentage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Late Fee Percentage</FormLabel>
                            <FormControl>
                              <Input placeholder="1.5" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="autoRenewal"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-y-0 space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Auto-Renewal Clause</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Cancellation Terms */}
                  <div>
                    <h3 className="mb-4 text-lg font-medium">
                      Cancellation Terms
                    </h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="cancellationNotice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cancellation Notice (days)</FormLabel>
                            <FormControl>
                              <Input placeholder="30" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="earlyTerminationFee"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Early Termination Fee</FormLabel>
                            <FormControl>
                              <Input placeholder="$500 (optional)" {...field} />
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
                      MAINTENANCE & SERVICE CONTRACT
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-3 text-lg font-semibold">PARTIES</h2>
                      <p>
                        <strong>Service Provider:</strong>{" "}
                        {formData.providerCompanyName ||
                          "[Service Provider Name]"}
                      </p>
                      <p>
                        Address:{" "}
                        {formData.providerAddress ||
                          "[Service Provider Address]"}
                      </p>
                      <p>
                        Contact:{" "}
                        {formData.providerContactPerson || "[Contact Person]"} |
                        Phone: {formData.providerPhone || "[Phone]"} | Email:{" "}
                        {formData.providerEmail || "[Email]"}
                      </p>
                      {formData.providerLicenseNumber && (
                        <p>License: {formData.providerLicenseNumber}</p>
                      )}

                      <p className="mt-4">
                        <strong>Client:</strong>{" "}
                        {formData.clientCompanyName || "[Client Name]"}
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
                        PROPERTY/EQUIPMENT INFORMATION
                      </h2>
                      <p>
                        <strong>Service Location:</strong>{" "}
                        {formData.propertyAddress ||
                          "[Property/Equipment Address]"}
                      </p>
                      <p>
                        <strong>Service Type:</strong>{" "}
                        {formData.serviceType || "[Service Type]"}
                      </p>
                      <p>
                        <strong>Equipment/Systems Description:</strong>
                      </p>
                      <p>
                        {formData.equipmentDescription ||
                          "[Detailed description of equipment, systems, or facilities to be maintained]"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        CONTRACT TERMS
                      </h2>
                      <p>
                        <strong>Contract Period:</strong>{" "}
                        {formData.contractStartDate || "[Start Date]"} to{" "}
                        {formData.contractEndDate || "[End Date]"}
                      </p>
                      <p>
                        <strong>Service Frequency:</strong>{" "}
                        {formData.serviceFrequency || "[Service Frequency]"}
                      </p>
                      <p>
                        <strong>Monthly Fee:</strong>{" "}
                        {formData.monthlyFee || "[Monthly Fee]"}
                      </p>
                      {formData.autoRenewal && (
                        <p>
                          <strong>Auto-Renewal:</strong> This contract will
                          automatically renew for successive terms unless
                          terminated with proper notice.
                        </p>
                      )}
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        SERVICE LEVEL AGREEMENT
                      </h2>
                      <p>
                        <strong>Standard Response Time:</strong>{" "}
                        {formData.responseTime || "24"} hours
                      </p>
                      <p>
                        <strong>Emergency Response Time:</strong>{" "}
                        {formData.emergencyResponseTime || "4"} hours
                      </p>
                      <p>
                        <strong>Service Availability:</strong>{" "}
                        {formData.availabilityHours === "business"
                          ? "Business Hours (8 AM - 5 PM)"
                          : formData.availabilityHours === "extended"
                            ? "Extended Hours (7 AM - 7 PM)"
                            : formData.availabilityHours === "24/7"
                              ? "24/7 Availability"
                              : formData.availabilityHours === "weekdays"
                                ? "Weekdays Only"
                                : "Business Hours"}
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        SERVICES INCLUDED
                      </h2>
                      <ul className="mt-2 list-disc pl-6">
                        {formData.preventiveMaintenance && (
                          <li>Preventive maintenance as scheduled</li>
                        )}
                        {formData.laborIncluded && (
                          <li>Labor for routine maintenance and repairs</li>
                        )}
                        {formData.partsIncluded && (
                          <li>Parts and materials for covered services</li>
                        )}
                        {formData.emergencyService && (
                          <li>Emergency service response</li>
                        )}
                        <li>Regular inspections and reporting</li>
                        <li>Maintenance documentation and records</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        PAYMENT TERMS
                      </h2>
                      <p>
                        <strong>Payment Method:</strong>{" "}
                        {formData.paymentTerms === "monthly"
                          ? "Monthly"
                          : formData.paymentTerms === "quarterly"
                            ? "Quarterly"
                            : formData.paymentTerms === "semi-annually"
                              ? "Semi-annually"
                              : formData.paymentTerms === "annually"
                                ? "Annually"
                                : "Monthly"}{" "}
                        billing
                      </p>
                      <p>
                        <strong>Payment Terms:</strong> Net 30 days from invoice
                        date
                      </p>
                      <p>
                        <strong>Late Fee:</strong>{" "}
                        {formData.lateFeePercentage || "1.5"}% per month on
                        overdue amounts
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        CANCELLATION TERMS
                      </h2>
                      <p>
                        <strong>Cancellation Notice:</strong>{" "}
                        {formData.cancellationNotice || "30"} days written
                        notice required
                      </p>
                      {formData.earlyTerminationFee && (
                        <p>
                          <strong>Early Termination Fee:</strong>{" "}
                          {formData.earlyTerminationFee}
                        </p>
                      )}
                      <p>
                        Either party may terminate this agreement with proper
                        notice. Client remains responsible for all services
                        performed prior to termination.
                      </p>
                    </div>

                    <div>
                      <h2 className="mb-3 text-lg font-semibold">
                        GENERAL TERMS
                      </h2>
                      <ul className="mt-2 list-disc pl-6">
                        <li>
                          Service Provider shall maintain appropriate insurance
                          coverage
                        </li>
                        <li>
                          All work shall be performed in accordance with
                          industry standards
                        </li>
                        <li>
                          Service Provider shall provide written reports of all
                          maintenance activities
                        </li>
                        <li>
                          Client shall provide reasonable access to equipment
                          and facilities
                        </li>
                        <li>
                          This agreement shall be governed by the laws of the
                          state where services are performed
                        </li>
                      </ul>
                    </div>

                    <div className="mt-12">
                      <h2 className="mb-6 text-lg font-semibold">SIGNATURES</h2>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p>
                            <strong>SERVICE PROVIDER:</strong>
                          </p>
                          <div className="mt-8 w-48 border-b border-gray-400"></div>
                          <p className="mt-2 text-sm">
                            {formData.providerContactPerson || "[Name]"}
                          </p>
                          <p className="text-sm">
                            {formData.providerCompanyName || "[Company]"}
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
                            {formData.clientCompanyName || "[Company]"}
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
          Understanding Maintenance & Service Contracts
        </h2>
        <p>
          A maintenance and service contract is an ongoing agreement between a
          service provider and client that defines the scope, frequency, and
          terms of maintenance services for equipment, facilities, or systems.
          These contracts provide predictable costs and ensure regular upkeep of
          critical assets.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Key Components of Maintenance Contracts
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Service Scope:</strong> Detailed description of equipment
            and services covered
          </li>
          <li>
            <strong>Service Frequency:</strong> Regular maintenance schedules
            and intervals
          </li>
          <li>
            <strong>Response Times:</strong> Guaranteed response times for
            service calls and emergencies
          </li>
          <li>
            <strong>Payment Terms:</strong> Monthly, quarterly, or annual
            payment structures
          </li>
          <li>
            <strong>Service Level Agreements:</strong> Performance standards and
            availability requirements
          </li>
          <li>
            <strong>Inclusion/Exclusion:</strong> What parts, labor, and
            services are covered
          </li>
          <li>
            <strong>Termination Clauses:</strong> Notice requirements and early
            termination provisions
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          Benefits for Both Parties
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              For Service Providers
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Predictable recurring revenue stream</li>
              <li>Long-term client relationships</li>
              <li>Efficient scheduling and resource allocation</li>
              <li>Reduced sales and marketing costs</li>
              <li>Opportunities for additional services</li>
              <li>Better cash flow management</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">For Clients</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Predictable maintenance costs</li>
              <li>Reduced equipment downtime</li>
              <li>Extended equipment lifespan</li>
              <li>Priority service response</li>
              <li>Professional maintenance expertise</li>
              <li>Compliance with warranty requirements</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Types of Maintenance Contracts
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-semibold">
              Comprehensive Contracts
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>All parts and labor included</li>
              <li>Preventive and corrective maintenance</li>
              <li>Emergency service coverage</li>
              <li>Higher monthly cost but predictable expenses</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold">Labor-Only Contracts</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Labor and service calls covered</li>
              <li>Parts charged separately</li>
              <li>Lower monthly cost</li>
              <li>Variable costs for parts and materials</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Best Practices for Maintenance Contracts
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>Clearly define all covered equipment and systems</li>
          <li>Specify response times for different types of service calls</li>
          <li>Include detailed maintenance schedules and procedures</li>
          <li>Define performance standards and metrics</li>
          <li>Establish clear communication protocols</li>
          <li>Include provisions for contract adjustments and modifications</li>
          <li>Specify insurance and liability requirements</li>
          <li>Include termination clauses and notice requirements</li>
        </ul>

        <div className="my-8 rounded-lg border border-red-100 bg-red-50 p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">
            Build lasting service relationships
          </h3>
          <p className="mb-0">
            Professional maintenance contracts create win-win relationships that
            benefit both service providers and clients. Use Contractor+ to
            create comprehensive agreements that establish clear expectations,
            ensure quality service delivery, and build long-term partnerships in
            the maintenance industry.
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
