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
