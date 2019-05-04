function pairsWithSpecificDiff(arr, k) {
  if (k == 0) return [];
  // since all elements are unique no two can sum to 0

  let differences = {};

  arr.forEach(el => {
    let balance = el - k;
    differences[balance] = el;
  });

  let result = [];

  arr.forEach(el => {
    if (differences[el] !== undefined) result.push([differences[el], el]);
  });

  return result;
}
