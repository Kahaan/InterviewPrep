function countUniques(arr) {
  let count = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; j < arr.length; i++) {
    let j = i + 1;
    if (arr[i] !== arr[j]) {
      count++;
    }
  }

  return count;
}
