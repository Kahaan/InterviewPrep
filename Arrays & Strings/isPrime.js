function isPrime(num) {
  if (num === 1 || num === 2) return true;
  if (num <= 0) return false;
  let i = 2;
  while (i < num) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
}
