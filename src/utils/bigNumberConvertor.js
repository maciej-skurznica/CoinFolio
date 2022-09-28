export function bigNumberConvertor(number) {
  return Math.abs(Number(number)) >= 1.0e12
    ? (Math.abs(Number(number)) / 1.0e12).toFixed(2) + "t"
    : Math.abs(Number(number)) >= 1.0e9
    ? (Math.abs(Number(number)) / 1.0e9).toFixed(2) + "b"
    : Math.abs(Number(number)) >= 1.0e6
    ? (Math.abs(Number(number)) / 1.0e6).toFixed(2) + "m"
    : Math.abs(Number(number)) >= 1.0e3
    ? (Math.abs(Number(number)) / 1.0e3).toFixed(2) + "k"
    : Math.abs(Number(number).toFixed(2));
}
