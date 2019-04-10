function findArrayQuadruplet(arr, s) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; i < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === s) {
            result.push(arr[i], arr[j], arr[k], arr[l]);
          }
        }
      }
    }
  }
  return result.sort((a, b) => a - b);
}
