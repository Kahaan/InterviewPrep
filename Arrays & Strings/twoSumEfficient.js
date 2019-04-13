function twoSum(arr, t) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum === t) {
      return [arr[right], arr[left]];
    } else if (sum > t) {
      left--;
    } else {
      right++;
    }
  }
  return [];
}
