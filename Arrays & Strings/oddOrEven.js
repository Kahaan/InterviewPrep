function oddOrEven(array) {
  let total = array.reduce((acc, el) => acc + el);
  return total % 2 === 0 ? "even" : "odd";
}
