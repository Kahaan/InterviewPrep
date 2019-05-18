// BruteForce O(n^2)
function smallestDifference(arrayOne, arrayTwo) {
  let min = Infinity;
  let result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      let current = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (current < min && current >= 0) {
        min = current;
        result = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return result;
}
