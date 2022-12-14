import { currencySymbol } from "utils";

export const tooltipTitles = (data: any, hourlyInterval: boolean) =>
  new Date(Number(data[0].label)).toLocaleString(
    "locales",
    hourlyInterval
      ? { dateStyle: "short", timeStyle: "short" }
      : data[0].dataset.data.length - 1 === data[0].dataIndex
      ? { timeStyle: "short" }
      : { dateStyle: "medium" }
  );

export const tooltipLabels = (data: any, currentCurrency: string, toFixed = 2) => {
  const value = data.parsed.y;
  return `${data.dataset.label}: ${currencySymbol(currentCurrency)}${value
    .toFixed(toFixed)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export const xScaleTicks = (
  that: any,
  value: number | string,
  hourlyInterval: boolean
) => {
  const settings = hourlyInterval ? { hour: "numeric" } : ({ day: "2-digit" } as any);
  const date = new Date(that.getLabelForValue(value)).toLocaleString("locales", settings);
  return hourlyInterval ? `${date}:00` : date;
};
