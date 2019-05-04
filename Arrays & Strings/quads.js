function findArrayQuadruplet(arr, s) {
  if (arr.length < 4) return [];
  arr = arr.sort();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let lower = j + 1;
      let higher = arr.length - 1;

      let balance = s - arr[i] - arr[j];
      while (lower < higher) {
        let sum = arr[lower] + arr[higher];
        if (arr[i] + arr[j] + sum === s) {
          return [arr[i], arr[j], arr[lower], arr[higher]].sort(
            (a, b) => a - b
          );
        } else if (sum < balance) {
          lower++;
        } else if (sum > balance) {
          higher--;
        }
      }
    }
  }
  return result;
}
