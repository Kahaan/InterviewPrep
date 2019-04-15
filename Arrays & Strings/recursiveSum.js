function recursiveRange(num) {
  let sum = num;
  if (num <= 1) return num;
  return sum + recursiveRange(num - 1);
}
