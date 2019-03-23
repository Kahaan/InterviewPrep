function getProductsOfAllIntsExceptAtIndex(arr) {
  if (arr.length < 2) {
    throw new Error("arr too short");
  }

  const productExceptAtIndex = [];

  let productSoFar = 1;
  for (let i = 0; i < arr.length; i++) {
    productExceptAtIndex[i] = productSoFar;
    productSoFar *= arr[i];
  }

  productSoFar = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    productExceptAtIndex[j] *= productSoFar;
    productSoFar *= arr[j];
  }

  return productExceptAtIndex;
}
