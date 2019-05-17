function findThreeLargestNumbers(array) {
  //Brute force - nlogn
  // return array.sort((a,b) => (b-a)).slice(0,3).sort((a,b) => a- b)

  // 	Optimized - O(n)
  let largest = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < array.length; i++) {
    if (largest[2] < array[i]) {
      let temp = largest[1];
      largest[1] = largest[2];
      largest[0] = temp;
      largest[2] = array[i];
    } else if (largest[1] < array[i]) {
      largest[0] = largest[1];
      largest[1] = array[i];
    } else if (largest[0] < array[i]) {
      largest[0] = array[i];
    }
  }
  return largest;
}
