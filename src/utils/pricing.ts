import { FormData } from "@/components/common/MultiStepQuoteForm";

export interface PricingResult {
  tier: string;
  basePrice: number;
  score: number;
  oneTimeAddOns: Array<{
    name: string;
    price: number;
  }>;
  recurringAddOns: Array<{
    name: string;
    pricePerMonth: number;
  }>;
  totalMonthly: number;
  totalOneTime: number;
}

const getEmployeeCount = (employeeRange: string): number => {
  switch (employeeRange) {
    case "0":
      return 0;
    case "1-5":
      return 3;
    case "6-20":
      return 13;
    case "21-50":
      return 35;
    case "51 +":
      return 75;
    default:
      return 0;
  }
};
export const calculatePricing = (formData: FormData): PricingResult => {
  let score = 0;
  const oneTimeAddOns: Array<{ name: string; price: number }> = [];
  const recurringAddOns: Array<{ name: string; pricePerMonth: number }> = [];

  // Revenue scoring
  switch (formData.trailingRevenue) {
    case "< $1M":
      score += 1;
      break;
    case "$1 - 5M":
      score += 2;
      break;
    case "$5 - 10M":
      score += 3;
      break;
    case "$10M +":
      score += 4;
      break;
  }

  // Transaction volume scoring
  switch (formData.monthlyTransactions) {
    case "0-250":
      score += 1;
      break;
    case "251-1,000":
      score += 2;
      break;
    case "1,001-2,500":
      score += 3;
      break;
    case "2,501 +":
      score += 4;
      break;
  }

  // Complexity modifiers
  if (formData.inventoryManaged) score += 1;
  if (formData.multipleEntities) score += 1;
  if (formData.multipleCurrencies) score += 1;
  if (formData.catchUpMonths === "4-6" || formData.catchUpMonths === "6 +")
    score += 1;
  if (formData.employees === "21-50" || formData.employees === "51 +")
    score += 1;

  // CFO-level services check
  const cfoServices = [
    "Budgeting & rolling forecasts",
    "Cash-flow forecasting & optimization",
    "Investor / board reporting",
    "Weekly executive KPI dashboard",
  ];

  const hasCfoServices = formData.services?.some((service) =>
    cfoServices.includes(service),
  );

  if (hasCfoServices) score += 1;

  // Calculate catch-up work
  if (formData.catchUpMonths && formData.catchUpMonths !== "0") {
    const months =
      formData.catchUpMonths === "1-3"
        ? 2
        : formData.catchUpMonths === "4-6"
          ? 5
          : 6;
    oneTimeAddOns.push({
      name: `Catch-up Bookkeeping (${months} months)`,
      price: months * 20 * 125, // Assuming 20 hours per month at $125/hr
    });
  }

  // System migration
  if (
    formData.currentAccountingSystem !== "QuickBooks Online" &&
    formData.currentAccountingSystem !== "None / Excel"
  ) {
    oneTimeAddOns.push({
      name: "Accounting System Migration to QuickBooks Online",
      price: 2500,
    });
  }

  // Payroll processing
  if (formData.services?.includes("Payroll processing")) {
    const employeeCount = getEmployeeCount(formData.employees);
    const payrollCost = Math.max(employeeCount * 12, 100);
    recurringAddOns.push({
      name: "Payroll Processing",
      pricePerMonth: payrollCost,
    });
  }

  // Tax preparation
  if (formData.services?.includes("Federal & state income-tax prep & filing")) {
    oneTimeAddOns.push({
      name: "Annual Tax Preparation & Filing",
      price: 2000,
    });
  }

  // Determine tier and base price
  let tier: string;
  let basePrice: number;

  // Bump tier if CFO services selected
  if (hasCfoServices) score += 1;

  if (score <= 3) {
    tier = "Core";
    basePrice = 1249;
  } else if (score <= 5) {
    tier = "Scale";
    basePrice = 1799;
  } else if (score <= 7) {
    tier = "Enterprise";
    basePrice = 2499;
  } else {
    tier = "Fractional CFO";
    basePrice = 3500;
  }

  // Calculate totals
  const totalOneTime = oneTimeAddOns.reduce(
    (sum, addon) => sum + addon.price,
    0,
  );
  const totalRecurringAddOns = recurringAddOns.reduce(
    (sum, addon) => sum + addon.pricePerMonth,
    0,
  );
  const totalMonthly = basePrice + totalRecurringAddOns;

  return {
    tier,
    basePrice,
    score,
    oneTimeAddOns,
    recurringAddOns,
    totalMonthly,
    totalOneTime,
  };
};
