// function findArrayQuadruplet(arr, s) {
//   let result = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; i < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         for (let l = k + 1; l < arr.length; l++) {
//           if (arr[i] + arr[j] + arr[k] + arr[l] === s) {
//             result.push(arr[i], arr[j], arr[k], arr[l]);
//           }
//         }
//       }
//     }
//   }
//   return result.sort((a, b) => a - b);
// }

function quad(arr, t) {
  if (arr.length < 4) return [];
  arr = arr.sort();
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let balance = s - arr[i] + arr[j] + arr[k];
        let next = arr[k + 1];
        let prev = arr[i - 1] || arr[i];
        if (balance + next === t) {
          return [arr[i], arr[j], arr[k], arr[k + 1]];
        } else if (balance + next < t) {
          i++;
          j++;
          k++;
        }
      }
    }
  }
  return result;
}
