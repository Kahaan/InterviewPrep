function sumOfBigStrings(num1, num2) {
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

function sumOfStrings(num1, num2) {
  let num1Whole = 0;
  let num2Whole = 0;
  let num1Decimal = 0;
  let num2Decimal = 0;

  if (num1.includes(".")) {
    let num1Parts = num1.split(".");
    num1Whole = num1Parts[0] - "0";
    num1Decimal = "." + num1Parts[1] - "0";
  } else {
    num1Whole = num1 - "0";
  }

  if (num2.includes(".")) {
    let num2Parts = num2.split(".");
    num2Whole = num2Parts[0] - "0";
    num2Decimal = "." + num2Parts[1] - "0";
  } else {
    num2Whole = num2 - "0";
  }

  let sum = num1Whole + num1Decimal + num2Whole + num2Decimal;

  return sum.toFixed(2).toString();
}

sumOfStrings(
  "100000000000000000000000000000001",
  "100000000000000000000000000000002"
);
