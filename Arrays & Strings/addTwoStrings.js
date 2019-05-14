function sumOfStrings(num1, num2) {
  let num1Idx = num1.length - 1;
  let num2Idx = num2.length - 1;
  let remainder = 0;
  let sum = "";

  for (; num1Idx >= 0 || num2Idx >= 0 || remainder > 0; num1Idx--, num2Idx--) {
    if (num1Idx === ".") num1Idx--;
    if (num2Idx === ".") num2Idx--;
    let firstNum = num1Idx < 0 ? 0 : num1.charAt(num1Idx) - "0";
    let secondNum = num2Idx < 0 ? 0 : num2.charAt(num2Idx) - "0";
    let addition = firstNum + secondNum + remainder;
    sum = `${addition % 10}${sum}`;
    remainder = Math.floor(addition / 10);
  }
  return sum;
}

function strSum(num1, num2) {
  let num1Whole = num1.slice(0, num1.indexOf("."));
  let num2Whole = num2.slice(0, num2.indexOf("."));
  let wholeSum = sumOfStrings(num1Whole, num2Whole);

  let num1Decimal = num1.slice(num1.indexOf(".") + 1);
  let num2Decimal = num2.slice(num2.indexOf(".") + 1);

  let smaller = num1Decimal.length < num2num2Decimal.length ? num1 : num2;

  // subtract from '0' for both num prior to decimal and after
  // return sum
}
