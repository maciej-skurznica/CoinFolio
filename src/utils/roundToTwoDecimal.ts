const roundToTwoDecimal = (number: number) =>
  parseFloat((Math.round(number * 100) / 100).toFixed(2));

export default roundToTwoDecimal;
