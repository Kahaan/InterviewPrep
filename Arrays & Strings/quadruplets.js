// BRUTE FORCE SOLUTION:

// Time complexity: O(n^4)
// Space complexity: O(1)

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

// BETTER APPROACH:
function quad(arr, s) {
  if (arr.length < 4) return [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let balance = s - arr[i] - arr[j];
      let low = j + 1;
      let high = arr.length - 1;
      while (low < high) {
        if (arr[low] + arr[high] === balance) {
          return [arr[i], arr[j], arr[low], arr[high]];
        } else if (arr[low] + arr[high] < balance) {
          low++;
        } else {
          high++;
        }
      }
    }
  }
  return [];
}

quad([1, 2, 3, 4, 5], 10);
