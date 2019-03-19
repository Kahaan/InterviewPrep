function powersOfTwo(n) {
  let result = [];
  while (n >= 0) {
    result.push(2 ** n);

    n--;
  }
  return result.sort((a, b) => a - b);
}
