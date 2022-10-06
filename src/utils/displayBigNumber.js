export function displayBigNumber(number, toFixed = 2) {
  return number.toFixed(toFixed).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
