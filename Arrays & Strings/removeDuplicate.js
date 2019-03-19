function uniq(arr) {
  let uniqs = {};
  arr.forEach(el => (uniqs[el] = 1));
  return Object.keys(uniqs);
}
