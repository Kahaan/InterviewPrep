function fibonacci(n) {
  let fibs = [0, 1];
  if (n <= 2) return fibs;
  while (fibs.length <= n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs[n];
}
