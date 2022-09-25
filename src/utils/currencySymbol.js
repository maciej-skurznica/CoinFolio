import { availableCurrencies } from "assets/data/data";

export const currencySymbol = (currentCurrency) =>
  availableCurrencies[currentCurrency.toLowerCase()].symbol;
