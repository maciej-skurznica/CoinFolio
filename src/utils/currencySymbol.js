import { availableCurrencies } from "assets/data";

const currencySymbol = (currentCurrency) =>
  availableCurrencies[currentCurrency.toLowerCase()].symbol;

export default currencySymbol;
