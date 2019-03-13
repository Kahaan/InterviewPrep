function factorial(num) {
  if (num === 1) return 1;
  return num * (num - 1);
}

let AllFactorials = nums => {
  return nums.map(num => factorial(num));
};
