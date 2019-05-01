function binarySearch(array, target) {
  let midIdx = Math.floor(array.length / 2);
  let mid = array[midIdx];
  if (array.length <= 1 && array[0] !== target) return -1;
  if (array[0] === target) {
    return true;
  } else if (mid > target) {
    return binarySearch(array.slice(0, midIdx), target);
  } else if (mid <= target) {
    return binarySearch(array.slice(midIdx, array.length), target);
  }

  return -1;
}
