function maxSubarr(arr, n) {
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
