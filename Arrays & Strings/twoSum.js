function twoSum(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if (arr[i] + arr[j] === t) return true;
    }
  }

  return false;
}
