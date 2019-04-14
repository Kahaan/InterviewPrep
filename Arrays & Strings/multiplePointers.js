function countUniqVals(arr) {
  let i = 0;
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else if (arr[i] == arr[j]) {
      j++;
    }
  }
  return i + 1;
}
// Since an array is 0 indexed we can use the index as a counter in stead of creating one.
// By iterating through the array in this fashion rather than using an object we save space
// but time complexity is still linear
// Other places this could be valuable would be with a string to check for duplicates
