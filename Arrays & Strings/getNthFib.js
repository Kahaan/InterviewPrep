function getNthFib(n) {
  let fibs = [0, 1];
  if (n < 1) return null;
  if (n === 1 || n === 2) return fibs[n - 1];
  while (fibs.length < n) {
    let len = fibs.length - 1;
    fibs.push(fibs[len - 1] + fibs[len]);
  }
  return fibs[n - 1];
}
