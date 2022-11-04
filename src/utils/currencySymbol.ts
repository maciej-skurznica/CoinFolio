import { availableCurrencies } from "assets/data";

const currencySymbol = (currentCurrency: string) =>
  availableCurrencies[currentCurrency.toLowerCase()].symbol;

export default currencySymbol;
