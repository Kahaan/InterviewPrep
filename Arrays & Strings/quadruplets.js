// BRUTE FORCE SOLUTION:

function quad(arr, s) {
  arr = arr.sort();
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      for (var k = j + 1; k < arr.length - 1; k++) {
        for (var l = k + 1; l < arr.length; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === s) {
            return [arr[i], arr[j], arr[k], arr[l]];
          }
        }
      }
    }
  }
  return [];
}
