function productOfArray(arr) {
  let result = arr[0];
  if (arr.length <= 1) return result;
  return result * productOfArray(arr.slice(1));
}
