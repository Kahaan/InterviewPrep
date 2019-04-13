function twoSum(arr, t) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === t) {
      return [arr[left], arr[right]];
    } else if (sum > t) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
