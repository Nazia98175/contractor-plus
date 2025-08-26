import { estimateTemplates } from "@/lib/estimate-templates";
import { useState, useEffect } from "react";
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

export function useEstimateItems() {
  const [items, setItems] = useState<EstimateItem[]>([]);
  const [estimateInfo, setEstimateInfo] = useState<EstimateInfo>({
    title: "New Estimate",
    companyName: "",
    companyLogo: null,
    companyAddress: "",
    companyPhone: "",
    companyEmail: "",
    clientName: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
    estimateNumber: `EST-${Math.floor(Math.random() * 10000)}`,
    estimateDate: new Date().toISOString().split("T")[0],
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    notes: "",
    salesTax: 0,
    markup: 0,
  });

  // Load from localStorage on mount
  useEffect(() => {
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
    localStorage.setItem("estimateItems", JSON.stringify(items));
  }, [items]);

  // Save to localStorage when info changes
  useEffect(() => {
    localStorage.setItem("estimateInfo", JSON.stringify(estimateInfo));
  }, [estimateInfo]);

  // Add a new item
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

  // Remove an item
  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Update an item
  const updateItem = (id: string, updates: Partial<EstimateItem>) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, ...updates };
          // Recalculate amount
          updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          return updatedItem;
        }
        return item;
      }),
    );
  };

  // Move an item up or down
  const moveItem = (id: string, direction: "up" | "down") => {
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return;

    const newItems = [...items];
    if (direction === "up" && index > 0) {
      // Swap with the item above
      [newItems[index], newItems[index - 1]] = [
        newItems[index - 1],
        newItems[index],
      ];
    } else if (direction === "down" && index < items.length - 1) {
      // Swap with the item below
      [newItems[index], newItems[index + 1]] = [
        newItems[index + 1],
        newItems[index],
      ];
    }

    setItems(newItems);
  };

  // Clear all items
  const clearItems = () => {
    setItems([]);
  };

  // Load a template
  const loadTemplate = (templateId: string) => {
    const template = estimateTemplates.find((t) => t.id === templateId);

    if (template) {
      // Generate new IDs for each item to avoid duplicates
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

  // Update estimate info
  const updateEstimateInfo = (updates: Partial<EstimateInfo>) => {
    setEstimateInfo({ ...estimateInfo, ...updates });
  };

  // Calculate total with markup and tax
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
