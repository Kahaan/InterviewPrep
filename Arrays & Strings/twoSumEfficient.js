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
// Only works if arr is sorted, else it's O(nlog n)
// This is a multiple pointer pattern, allows you to check several different values
// helpful if you have some way of predicting pattern in the input array
