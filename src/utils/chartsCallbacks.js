import { currencySymbol } from "./currencySymbol";

export const tooltipTitles = (data, hourlyInterval) =>
  new Date(Number(data[0].label)).toLocaleString(
    "locales",
    hourlyInterval
      ? { dateStyle: "short", timeStyle: "short" }
      : data[0].dataset.data.length - 1 === data[0].dataIndex
      ? { timeStyle: "short" }
      : { dateStyle: "medium" }
  );

export const tooltipLabels = (data, currentCurrency) => {
  const value = data.parsed.y;
  return `${data.dataset.label}: ${currencySymbol(currentCurrency)}${value
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

export const xScaleTicks = (that, value, hourlyInterval) => {
  const settings = hourlyInterval ? { hour: "numeric" } : { day: "2-digit" };
  const date = new Date(that.getLabelForValue(value)).toLocaleString("locales", settings);
  return hourlyInterval ? `${date}:00` : date;
};
