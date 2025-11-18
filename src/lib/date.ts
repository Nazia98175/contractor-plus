import { format, parseISO } from "date-fns";

export const dateFormat = (date: string) => {
  return format(parseISO(date), "MMM d, yyyy");
};

export function formatDateWithOrdinal(date = new Date(), locale = "en-US") {
  const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
  const day = date.getDate();
  const year = date.getFullYear();

  const getOrdinal = (n: number) => {
    const rem10 = n % 10,
      rem100 = n % 100;
    if (rem100 >= 11 && rem100 <= 13) return "th";
    return rem10 === 1 ? "st" : rem10 === 2 ? "nd" : rem10 === 3 ? "rd" : "th";
  };

  return `${month} ${day}${getOrdinal(day)}, ${year}`;
}

export function formateDateInText(isoDate = new Date()) {
  const date = new Date(isoDate);
  const formatted = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return formatted;
}
export function formatDateRange(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const sameMonth = start.getMonth() === end.getMonth();
  const sameYear = start.getFullYear() === end.getFullYear();

  const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "long" });
  const dayFormatter = new Intl.DateTimeFormat("en-US", { day: "numeric" });
  const yearFormatter = new Intl.DateTimeFormat("en-US", { year: "numeric" });

  if (sameMonth && sameYear) {
    return `${monthFormatter.format(start)} ${dayFormatter.format(start)} – ${dayFormatter.format(end)}, ${yearFormatter.format(start)}`;
  } else if (sameYear) {
    return `${monthFormatter.format(start)} ${dayFormatter.format(start)} – ${monthFormatter.format(end)} ${dayFormatter.format(end)}, ${yearFormatter.format(start)}`;
  } else {
    return `${monthFormatter.format(start)} ${dayFormatter.format(start)}, ${yearFormatter.format(start)} – ${monthFormatter.format(end)} ${dayFormatter.format(end)}, ${yearFormatter.format(end)}`;
  }
}
