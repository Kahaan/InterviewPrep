function newAvg(arr, newavg) {
  if (arr.length < 1) return newavg;
  let n = arr.length;
  let total = arr.reduce((acc, el) => acc + el);
  let avg = total / n;
  let result = newavg * (n + 1) - total;
  return result <= 0 ? echo(ERROR) : Math.ceil(result);
}
