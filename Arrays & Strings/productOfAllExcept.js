function getProductsOfAllIntsExceptAtIndex(arr) {
  if (arr === []) return [];
  let prod = arr.reduce((acc, el) => acc * el);
  let arrWithoutZero = arr.filter(el => el !== 0);
  let prodWithoutZero = arrWithoutZero.reduce((acc, el) => acc * el);

  let result = arr.map((el, i) => {
    if (el !== 0) {
      return prod / el;
    } else {
      return prodWithoutZero;
    }
  });
  return result;
}
