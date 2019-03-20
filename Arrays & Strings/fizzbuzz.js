function fizzBuzz(n) {
  let result = [];
  let i = 0;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzBuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
    i++;
  }
  return result;
}
