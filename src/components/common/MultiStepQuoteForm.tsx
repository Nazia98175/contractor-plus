import { useToast } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import CalculateImpactSelect from "../crmbussiness/CalculateImpactSelect";
import CustomDialog from "./CustomDialog";
import { calculatePricing, PricingResult } from "@/utils/pricing";

export interface FormData {
  // Company Snapshot
  businessName: string;
  website: string;
  contactName: string;
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  businessStructure: string;
  hqLocation: string;
  industry: string;
  currentAccountingSystem: string;
  openToQuickBooks: boolean;

  // Scale & Complexity
  trailingRevenue: string;
  projectedRevenue: string;
  monthlyTransactions: string;
  bankAccounts: number;
  creditCardAccounts: number;
  employees: string;
  inventoryManaged: boolean;
  multipleEntities: boolean;
  entitiesCount: number;
  multipleCurrencies: boolean;
  catchUpMonths: string;

  // Services Needed
  services: string[];

  // Goals & Timing
  painPoint: string;
  goLiveDate: string;
  referralProgram: boolean;
  hearAboutUs: string;
}

const formSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Your name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, "Please enter a valid phone number"),
  annualRevenue: z.string().min(1, "Please select your annual revenue"),
  numberOfEmployees: z.string().min(1, "Please select number of employees"),
  monthlyTransactions: z
    .string()
    .min(1, "Please select monthly transaction volume"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  primaryGoal: z.string().min(1, "Please select your primary goal"),
  challenges: z.string().optional(),
});

type QuoteFormData = z.infer<typeof formSchema>;

const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length <= 3) return phoneNumber;
  if (phoneNumber.length <= 6)
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
};

const SERVICES = [
  "Monthly Bookkeeping",
  "Payroll Processing",
  "Accounts Payable/Receivable",
  "Job Costing",
  "Financial Reporting",
  "Tax Preparation Support",
  "QuickBooks Setup/Training",
  "Bank Reconciliation",
];

interface MultiStepQuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MultiStepQuoteForm = ({
  open,
  onOpenChange,
}: MultiStepQuoteFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      annualRevenue: "",
      numberOfEmployees: "",
      monthlyTransactions: "",
      services: [],
      primaryGoal: "",
      challenges: "",
    },
    mode: "onChange",
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  // Load Calendly script when reaching step 5
  useEffect(() => {
    if (step === 5 && open) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]',
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [step, open]);

  const validateStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["companyName", "contactName", "email", "phone"];
        break;
      case 2:
        fieldsToValidate = [
          "annualRevenue",
          "numberOfEmployees",
          "monthlyTransactions",
        ];
        break;
      case 3:
        fieldsToValidate = ["services"];
        break;
      case 4:
        fieldsToValidate = ["primaryGoal"];
        break;
    }

    const isValid = await form.trigger(fieldsToValidate);

    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Please complete all required fields",
        description:
          "Make sure all fields are filled out correctly before continuing.",
      });
    }

    return isValid;
  };

  // Map QuoteFormData to FormData for pricing calculation
  const mapQuoteFormToFormData = (
    quoteData: QuoteFormData,
  ): Partial<FormData> => {
    return {
      businessName: quoteData.companyName,
      contactName: quoteData.contactName,
      contactEmail: quoteData.email,
      contactPhone: quoteData.phone,
      trailingRevenue: quoteData.annualRevenue,
      employees: quoteData.numberOfEmployees,
      monthlyTransactions: quoteData.monthlyTransactions,
      services: quoteData.services,
      painPoint: quoteData.challenges || "",
      // Add default values for required FormData fields
      website: "",
      contactTitle: "",
      businessStructure: "",
      hqLocation: "",
      industry: "",
      currentAccountingSystem: "",
      openToQuickBooks: false,
      projectedRevenue: "",
      bankAccounts: 0,
      creditCardAccounts: 0,
      inventoryManaged: false,
      multipleEntities: false,
      entitiesCount: 0,
      multipleCurrencies: false,
      catchUpMonths: "",
      goLiveDate: "",
      referralProgram: false,
      hearAboutUs: "",
    };
  };

  const sendToSlack = async (
    formData: Partial<FormData>,
    result: PricingResult,
  ) => {
    const slackWebhookUrl =
      "https://hooks.slack.com/services/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";

    console.log("Attempting to send to Slack...", { formData, result });

    try {
      const message = {
        text: "🎯 New Bookkeeping Quote Request",
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: "📊 New Bookkeeping Quote Request",
            },
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Company:* ${formData.businessName || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Contact:* ${formData.contactName || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Email:* ${formData.contactEmail || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Phone:* ${formData.contactPhone || "Not provided"}`,
              },
            ],
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*Annual Revenue:* ${formData.trailingRevenue || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Monthly Transactions:* ${formData.monthlyTransactions || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Employees:* ${formData.employees || "N/A"}`,
              },
              {
                type: "mrkdwn",
                text: `*Entities:* ${formData.multipleEntities ? `Yes (${formData.entitiesCount})` : "No"}`,
              },
            ],
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*🎯 Recommended Plan:* ${result.tier}\n*💰 Monthly Price:* $${result.totalMonthly}\n*📊 Complexity Score:* ${result.score}`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*📝 Services Requested:*\n${formData.services && formData.services.length > 0 ? "• " + formData.services.join("\n• ") : "None specified"}`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*💭 Challenges:*\n${formData.painPoint || "Not specified"}`,
            },
          },
        ],
      };

      const response = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });

      console.log("Slack response status:", response.status);
      console.log("Slack response ok:", response.ok);

      if (!response.ok) {
        throw new Error(`Slack webhook failed with status ${response.status}`);
      }

      console.log("Form data sent to Slack successfully");
    } catch (error) {
      console.error("Failed to send to Slack:", error);
      toast({
        title: "Note",
        description:
          "Quote generated successfully. Slack notification may have failed.",
        variant: "default",
      });
    }
  };

  const submitLead = async () => {
    try {
      setIsSubmitting(true);
      const quoteFormData = form.getValues();
      const mappedFormData = mapQuoteFormToFormData(quoteFormData);
      const result = calculatePricing(mappedFormData as FormData);

      await sendToSlack(mappedFormData, result);

      toast({
        title: "Lead submitted",
        description:
          "We've received your information and will be in touch soon!",
      });
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        variant: "destructive",
        title: "Submission error",
        description:
          "There was a problem submitting your information. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid && step < totalSteps) {
      // Submit lead when moving from step 4 to step 5 (Calendly)
      if (step === 4) {
        await submitLead();
      }
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceToggle = (service: string) => {
    const currentServices = form.getValues("services");
    const updatedServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    form.setValue("services", updatedServices, { shouldValidate: true });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue("phone", formatted, { shouldValidate: true });
  };

  const revenueRange = [
    { label: "$0 - $10,000", value: "0-10000" },
    { label: "$10,001 - $50,000", value: "10001-50000" },
    { label: "$50,001 - $100,000", value: "50001-100000" },
    { label: "$100,001 - $500,000", value: "100001-500000" },
    { label: "$500,001+", value: "500001+" },
  ];

  const employeeCount = [
    { label: "1-5", value: "1-5" },
    { label: "6-10", value: "6-10" },
    { label: "11-25", value: "11-25" },
    { label: "26-50", value: "26-50" },
    { label: "51-100", value: "51-100" },
    { label: "100+", value: "100+" },
  ];

  const transactionVolumes = [
    { value: "0-50", label: "0–50" },
    { value: "51-100", label: "51–100" },
    { value: "101-250", label: "101–250" },
    { value: "251-500", label: "251–500" },
    { value: "500+", label: "500+" },
  ];

  const mainGoals = [
    {
      value: "accurate-financials",
      label: "Get accurate financial statements",
    },
    { value: "save-time", label: "Save time on bookkeeping" },
    {
      value: "job-costing",
      label: "Better job costing & profitability tracking",
    },
    { value: "tax-ready", label: "Be tax-ready year-round" },
    { value: "cash-flow", label: "Improve cash flow management" },
    { value: "cleanup", label: "Clean up existing books" },
    { value: "growth", label: "Support business growth" },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="companyName">Company Name *</label>
              <div className="border-wallStreet !mt-2 flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <input
                  id="companyName"
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  type="text"
                  {...form.register("companyName")}
                  placeholder="Enter your company name"
                />
              </div>
              {form.formState.errors.companyName && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.companyName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="contactName">Your Name *</label>
              <div className="border-wallStreet !mt-2 flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <input
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  id="contactName"
                  {...form.register("contactName")}
                  placeholder="Enter your name"
                />
              </div>
              {form.formState.errors.contactName && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.contactName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email *</label>
              <div className="border-wallStreet !mt-2 flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <input
                  id="email"
                  type="email"
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  {...form.register("email")}
                  placeholder="your@email.com"
                />
              </div>
              {form.formState.errors.email && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="phone">Phone *</label>
              <div className="border-wallStreet !mt-2 flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <input
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  id="phone"
                  type="tel"
                  value={form.watch("phone")}
                  onChange={handlePhoneChange}
                  placeholder="(555) 555-5555"
                  maxLength={14}
                />
              </div>
              {form.formState.errors.phone && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Tell us about your business size
            </h3>
            <div className="space-y-2">
              <label htmlFor="annualRevenue">Annual Revenue *</label>
              <CalculateImpactSelect
                className="!mt-2"
                options={revenueRange}
                value={form.watch("annualRevenue")}
                onChange={(option) =>
                  form.setValue("annualRevenue", option ? option.value : "", {
                    shouldValidate: true,
                  })
                }
              />
              {form.formState.errors.annualRevenue && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.annualRevenue.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="numberOfEmployees">Number of Employees *</label>
              <CalculateImpactSelect
                className="!mt-2"
                options={employeeCount}
                value={form.watch("numberOfEmployees")}
                onChange={(option) =>
                  form.setValue(
                    "numberOfEmployees",
                    option ? option.value : "",
                    {
                      shouldValidate: true,
                    },
                  )
                }
              />
              {form.formState.errors.numberOfEmployees && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.numberOfEmployees.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="monthlyTransactions">
                Monthly Transactions *
              </label>
              <CalculateImpactSelect
                className="!mt-2"
                options={transactionVolumes}
                value={form.watch("monthlyTransactions")}
                onChange={(option) =>
                  form.setValue(
                    "monthlyTransactions",
                    option ? option.value : "",
                    {
                      shouldValidate: true,
                    },
                  )
                }
              />
              {form.formState.errors.monthlyTransactions && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.monthlyTransactions.message}
                </p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              What services do you need help with? *
            </h3>
            <p className="text-muted-foreground text-sm">
              Select all that apply
            </p>
            <div className="space-y-3">
              {SERVICES.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <div className="custom-checkbox">
                    <input
                      type="checkbox"
                      id={service}
                      checked={form.watch("services").includes(service)}
                      onChange={() => handleServiceToggle(service)}
                    />
                    <span className="checkmark"></span>
                  </div>
                  <label htmlFor={service} className="cursor-pointer">
                    {service}
                  </label>
                </div>
              ))}
            </div>
            {form.formState.errors.services && (
              <p className="text-sm text-red-600">
                {form.formState.errors.services.message}
              </p>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              What are your primary goals?
            </h3>
            <div className="space-y-2">
              <label htmlFor="primaryGoal">Primary Goal *</label>
              <CalculateImpactSelect
                className="!mt-2"
                options={mainGoals}
                value={form.watch("primaryGoal")}
                onChange={(option) =>
                  form.setValue("primaryGoal", option ? option.value : "", {
                    shouldValidate: true,
                  })
                }
              />
              {form.formState.errors.primaryGoal && (
                <p className="text-sm text-red-600">
                  {form.formState.errors.primaryGoal.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="challenges">
                What challenges are you facing? (Optional)
              </label>
              <div className="border-wallStreet !mt-2 flex h-[40px] items-center justify-between gap-2 rounded-[5px] border px-2">
                <input
                  id="challenges"
                  className="text-wallStreet h-full w-full rounded-md bg-transparent ps-1 pe-3 outline-none"
                  type="text"
                  {...form.register("challenges")}
                  placeholder="Tell us about your current bookkeeping challenges"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Schedule Your Consultation
            </h3>
            <p className="text-muted-foreground text-sm">
              Pick a time to speak with one of our expert bookkeepers about your
              needs.
            </p>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/justinonsuccess/15min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <CustomDialog
      open={open}
      onOpenChange={onOpenChange}
      progress={progress}
      step={step}
      totalSteps={totalSteps}
      renderStep={renderStep}
      prevStep={prevStep}
      nextStep={nextStep}
      isSubmitting={isSubmitting}
    />
  );
};
