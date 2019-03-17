function inAscOrder(arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  return JSON.stringify(sorted) === JSON.stringify(arr);
}
