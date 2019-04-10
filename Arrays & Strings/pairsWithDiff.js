function findPairsWithGivenDifference(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] === k) {
        result.push([arr[i], arr[j]]);
      } else if (arr[j] - arr[i] === k) {
        result.push([arr[j], arr[i]]);
      }
    }
  }
  return result;
}
