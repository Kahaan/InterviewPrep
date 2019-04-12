function quad(arr, s) {
  arr = arr.sort();
  for (let i = 0; i < arr.length - 4; i++) {
    for (let j = i + 1; j < arr.length - 3; j++) {
      for (var k = 0; k < arr.length; k++) {
        for (var l = 0; l < arr.length; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === s) {
            return [arr[i], arr[j], arr[k], arr[l]];
          }
        }
      }
    }
  }
  return [];
}
