function threeNumberSum(array, targetSum) {
  let result = [];
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 2; i++) {
    let small = i + 1;
    let large = array.length - 1;
    let balance = targetSum - array[i];

    while (small < large) {
      if (array[small] + array[large] == balance) {
        result.push([array[i], array[small], array[large]]);
        small++;
        large--;
      } else if (array[small] + array[large] > balance) {
        large--;
      } else if (array[small] + array[large] < balance) {
        small++;
      }
    }
  }
  // Write your code here.
  return result;
}
