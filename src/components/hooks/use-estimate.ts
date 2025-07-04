// hooks/use-estimate.ts
import { useState, useEffect } from "react";
import { estimateTemplates } from "../common/Helper";
import { v4 as uuidv4 } from "uuid";

export interface EstimateItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  rate: number;
  amount: number;
}

export interface EstimateInfo {
  title: string;
  companyName: string;
  companyLogo: string | null;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  estimateNumber: string;
  estimateDate: string;
  expiryDate: string;
  notes: string;
  salesTax: number;
  markup: number;
}

export function useEstimateItems(
  initialItems: EstimateItem[],
  initialEstimateInfo: EstimateInfo,
) {
  const [items, setItems] = useState<EstimateItem[]>(initialItems);
  const [estimateInfo, setEstimateInfo] =
    useState<EstimateInfo>(initialEstimateInfo);

  // Load from localStorage on mount (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedItems = localStorage.getItem("estimateItems");
    const savedInfo = localStorage.getItem("estimateInfo");

    if (savedItems) {
      try {
        setItems(JSON.parse(savedItems));
      } catch (e) {
        console.error("Failed to parse saved items", e);
      }
    }

    if (savedInfo) {
      try {
        setEstimateInfo(JSON.parse(savedInfo));
      } catch (e) {
        console.error("Failed to parse saved info", e);
      }
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("estimateItems", JSON.stringify(items));
  }, [items]);

  // Save to localStorage when info changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("estimateInfo", JSON.stringify(estimateInfo));
  }, [estimateInfo]);

  const addItem = () => {
    const newItem: EstimateItem = {
      id: uuidv4(),
      description: "",
      quantity: 1,
      unit: "ea",
      rate: 0,
      amount: 0,
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, updates: Partial<EstimateItem>) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, ...updates };
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          return updatedItem;
        }
        return item;
      }),
    );
  };

  const moveItem = (id: string, direction: "up" | "down") => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return;

    const newItems = [...items];
    if (direction === "up" && index > 0) {
      [newItems[index], newItems[index - 1]] = [
        newItems[index - 1],
        newItems[index],
      ];
    } else if (direction === "down" && index < items.length - 1) {
      [newItems[index], newItems[index + 1]] = [
        newItems[index + 1],
        newItems[index],
      ];
    }
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
  };

  const loadTemplate = (templateId: string) => {
    const template = estimateTemplates.find((t) => t.id === templateId);
    if (template) {
      const templateItems = template.items.map((item) => ({
        ...item,
        id: uuidv4(),
        amount: item.quantity * item.rate,
      }));
      setItems(templateItems);
      setEstimateInfo({
        ...estimateInfo,
        title: template.title,
      });
    }
  };

  const updateEstimateInfo = (updates: Partial<EstimateInfo>) => {
    setEstimateInfo({ ...estimateInfo, ...updates });
  };

  const calculateTotal = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0,
    );
    const markupAmount = subtotal * (estimateInfo.markup / 100);
    const totalBeforeTax = subtotal + markupAmount;
    const taxAmount = totalBeforeTax * (estimateInfo.salesTax / 100);

    return {
      subtotal,
      markupAmount,
      totalBeforeTax,
      taxAmount,
      total: totalBeforeTax + taxAmount,
    };
  };

  return {
    items,
    addItem,
    removeItem,
    updateItem,
    moveItem,
    clearItems,
    loadTemplate,
    estimateInfo,
    updateEstimateInfo,
    calculateTotal,
  };
}
