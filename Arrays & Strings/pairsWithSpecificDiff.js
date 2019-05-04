function pairsWithSpecificDiff(arr, k) {
  if (k == 0) return [];

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
