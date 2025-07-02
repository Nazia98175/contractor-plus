import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStoreName(storeId: string): string {
  // Extract just the store name part before the country code
  const storeName = storeId.split("-")[0];

  // Format based on store name
  switch (storeName.toLowerCase()) {
    case "lowes":
      return "Lowe's";
    case "homedepot":
      return "Home Depot";
    case "acehardware":
      return "Ace Hardware";
    case "build":
      return "Build.com";
    case "menards":
      return "Menards";
    case "amazon":
      return "Amazon";
    case "rona":
      return "RONA";
    default:
      // Capitalize first letter of each word
      return storeName.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
  }
}
